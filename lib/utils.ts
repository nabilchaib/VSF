import { clsx } from 'clsx';

export function cn(...values: Array<string | undefined | null | false>) {
  return clsx(values);
}

export function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}

export function ensureLeadingSlash(value: string) {
  return value.startsWith('/') ? value : `/${value}`;
}
