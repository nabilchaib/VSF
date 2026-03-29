'use client';

import type { ComponentPropsWithoutRef } from 'react';

import {
  inferAnalyticsActionForHref,
  trackAnalyticsEvent,
  type AnalyticsAction
} from '@/lib/analytics';

type TrackedAnchorProps = Omit<ComponentPropsWithoutRef<'a'>, 'onClick'> & {
  analytics?: AnalyticsAction | false;
  onClick?: ComponentPropsWithoutRef<'a'>['onClick'];
};

export function TrackedAnchor({
  analytics,
  onClick,
  href,
  ...props
}: TrackedAnchorProps) {
  const resolvedAnalytics = analytics === false ? undefined : analytics ?? inferAnalyticsActionForHref(String(href));

  const handleClick: NonNullable<ComponentPropsWithoutRef<'a'>['onClick']> = (event) => {
    if (resolvedAnalytics) {
      trackAnalyticsEvent(resolvedAnalytics.event, {
        ...resolvedAnalytics.params,
        link_url: resolvedAnalytics.params?.link_url ?? String(href)
      });
    }

    onClick?.(event);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
