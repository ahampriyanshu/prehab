'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import type { JournalEntry } from '@/types/journal';

type IndexEntry = Pick<JournalEntry, 'slug' | 'number' | 'title'>;

export function Sidebar({
  entries,
  author,
}: {
  entries: IndexEntry[];
  author: string;
}) {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const mobileContents = useRef<HTMLDetailsElement>(null);
  const activeEntry =
    entries.find((entry) => pathname === `/journal/${entry.slug}`) ??
    (pathname === '/' || pathname === '/journal' ? entries[0] : undefined);

  const closeContents = () => {
    if (mobileContents.current) mobileContents.current.open = false;
  };

  const links = (
    <>
      <ol className="lesson-index">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={`/journal/${entry.slug}/`}
              aria-current={
                activeEntry?.slug === entry.slug ? 'page' : undefined
              }
              onClick={closeContents}
            >
              <span className="lesson-number">{entry.number}</span>
              <span>{entry.title}</span>
            </Link>
          </li>
        ))}
      </ol>
      <Link
        href="/about/"
        className="about-link"
        aria-current={pathname === '/about' ? 'page' : undefined}
        onClick={closeContents}
      >
        About this journal
      </Link>
    </>
  );

  return (
    <aside className="sidebar">
      <Link
        href="/"
        className="wordmark"
        aria-label="Prehab home"
        onClick={closeContents}
      >
        prehab
      </Link>
      <p className="journal-description">
        Notes on getting fit in my twenties.
      </p>
      <nav className="desktop-contents" aria-label="Lesson index">
        <p className="index-label">Contents</p>
        {links}
      </nav>
      <details ref={mobileContents} className="mobile-contents">
        <summary>
          Contents{' '}
          <span>
            {activeEntry
              ? `${activeEntry.number} / ${String(entries.length).padStart(2, '0')}`
              : 'All lessons'}
          </span>
        </summary>
        <nav aria-label="Lesson index">{links}</nav>
      </details>
      <p className="sidebar-author">{author}</p>
    </aside>
  );
}
