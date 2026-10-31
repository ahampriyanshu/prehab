import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ENTRIES } from '@/data/journal';
import { Reader } from '@/components/Reader';

export const dynamicParams = false;
export function generateStaticParams() {
  return ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = ENTRIES.find((item) => item.slug === slug);
  if (!entry) notFound();
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.summary,
      authors: ['Priyanshu Tiwari'],
    },
  };
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = ENTRIES.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <Reader entry={entry} />;
}
