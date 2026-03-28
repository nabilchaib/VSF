import type { Metadata } from 'next';

import { RdcProjectHub } from '@/components/rdc-project-hub';
import { buildRdcMetadata } from '@/lib/rdc-project';

export function generateMetadata(): Metadata {
  return buildRdcMetadata('fr');
}

export default function FrenchRdcProjectPage() {
  return <RdcProjectHub locale="fr" />;
}
