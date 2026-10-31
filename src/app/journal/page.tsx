import type { Metadata } from 'next';
import { Reader } from '@/components/Reader';
import { ENTRIES } from '@/data/journal';

export const metadata: Metadata = { title: 'The lessons' };

export default function JournalPage() {
  return <Reader entry={ENTRIES[0]} />;
}
