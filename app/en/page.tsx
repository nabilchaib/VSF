import { permanentRedirect } from 'next/navigation';

export default function LegacyEnglishIndexRedirect() {
  permanentRedirect('/');
}
