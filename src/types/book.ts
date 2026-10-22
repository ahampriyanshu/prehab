export interface Section {
  title: string;
  content: string[];
  callout?: {
    type: 'note' | 'drill' | 'axiom';
    title: string;
    text: string;
  };
}

export interface Chapter {
  id: string;
  slug: string;
  part: string;
  number: string;
  title: string;
  subtitle: string;
  readingTime: string;
  summary: string;
  sections: Section[];
  keyTakeaways: string[];
}
