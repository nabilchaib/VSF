import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className' | 'href'>;

const variants = {
  primary:
    'border border-moss bg-moss text-bark shadow-card hover:border-clay hover:bg-clay',
  secondary:
    'border border-bark/22 bg-surface/40 text-bark hover:border-bark/32 hover:bg-surface/65',
  tertiary:
    'rounded-none border-0 bg-transparent px-0 text-bark underline decoration-bark/28 underline-offset-4 hover:text-clay hover:decoration-clay/60'
} as const;

const sizes = {
  sm: 'px-4 py-2.5 text-[11px] tracking-[0.18em]',
  md: 'px-5 py-3 text-sm tracking-[0.16em]',
  lg: 'px-6 py-3.5 text-sm tracking-[0.18em]'
} as const;

const baseClasses =
  'inline-flex items-center justify-center rounded-full font-semibold uppercase transition-[background-color,border-color,color,box-shadow] duration-150';

export function Button({
  href,
  children,
  className,
  variant = 'primary',
  size = 'md',
  external = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variant === 'tertiary' ? 'gap-2' : sizes[size],
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
