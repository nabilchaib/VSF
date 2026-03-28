import type { Metadata } from 'next';

import { RdcProjectHub } from '@/components/rdc-project-hub';
import { buildRdcMetadata } from '@/lib/rdc-project';

export function generateMetadata(): Metadata {
  return buildRdcMetadata('en');
}

export default function EnglishRdcProjectPage() {
  return <RdcProjectHub locale="en" />;
}
