import { permanentRedirect } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function LegacyEnglishRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/${slug.join('/')}`);
}
