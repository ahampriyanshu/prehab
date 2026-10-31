import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar';
import { AUTHOR, ENTRIES } from '@/data/journal';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Prehab — Notes on getting fit', template: '%s | Prehab' },
  description:
    'An eight-part series by Priyanshu Tiwari on discovering fitness in his twenties: food, body composition, fasting, lifting, and cardio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contents = ENTRIES.map(({ slug, number, title }) => ({
    slug,
    number,
    title,
  }));

  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to lesson
        </a>
        <div className="reading-layout">
          <Sidebar entries={contents} author={AUTHOR} />
          {children}
        </div>
      </body>
    </html>
  );
}
