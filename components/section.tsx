import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';

type SectionProps<T extends ElementType = 'section'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Section<T extends ElementType = 'section'>({
  as,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps<T>) {
  const Component = as || 'section';

  return (
    <Component className={className} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
