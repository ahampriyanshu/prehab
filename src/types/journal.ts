export type Category =
  'Beginning' | 'Food' | 'Body composition' | 'Training' | 'Looking back';

export interface JournalSection {
  title?: string;
  paragraphs: string[];
  list?: {
    ordered?: boolean;
    items: { label?: string; text: string }[];
  };
  table?: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
  note?: { title: string; text: string };
  references?: { title: string; url: string }[];
}

export interface JournalEntry {
  slug: string;
  number: string;
  category: Category;
  title: string;
  summary: string;
  takeaway: string;
  sections: JournalSection[];
}
