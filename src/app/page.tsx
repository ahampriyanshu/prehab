import { Reader } from '@/components/Reader';
import { ENTRIES } from '@/data/journal';

export default function Home() {
  return <Reader entry={ENTRIES[0]} />;
}
