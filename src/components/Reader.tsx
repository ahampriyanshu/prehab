import Link from 'next/link';
import { ENTRIES } from '@/data/journal';
import type { JournalEntry, JournalSection } from '@/types/journal';

function LessonList({ list }: { list: NonNullable<JournalSection['list']> }) {
  const List = list.ordered ? 'ol' : 'ul';
  return (
    <List className="lesson-list">
      {list.items.map((item, index) => (
        <li key={index}>
          {item.label && <strong>{item.label}: </strong>}
          {item.text}
        </li>
      ))}
    </List>
  );
}

export function Reader({ entry }: { entry: JournalEntry }) {
  const index = ENTRIES.findIndex((item) => item.slug === entry.slug);
  const previous = ENTRIES[index - 1];
  const next = ENTRIES[index + 1];

  return (
    <main id="main-content" className="reader" tabIndex={-1}>
      <article>
        <header className="lesson-header">
          <h1>{entry.title}</h1>
          <p className="lesson-summary">{entry.summary}</p>
        </header>
        <div className="lesson-body">
          {entry.sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              {section.title && <h2>{section.title}</h2>}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
              {section.list && <LessonList list={section.list} />}
              {section.table && (
                <table className="lesson-table">
                  <caption>{section.table.caption}</caption>
                  <thead>
                    <tr>
                      {section.table.columns.map((column) => (
                        <th key={column} scope="col">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={cellIndex} scope="row">
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {section.note && (
                <aside className="lesson-note">
                  <h3>{section.note.title}</h3>
                  <p>{section.note.text}</p>
                </aside>
              )}
              {section.references && (
                <ul
                  className="lesson-references"
                  aria-label="Sources for this section"
                >
                  {section.references.map((reference) => (
                    <li key={reference.url}>
                      <a href={reference.url}>{reference.title} ↗</a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <aside className="lesson-takeaway">
            <h2>The lesson</h2>
            <p>{entry.takeaway}</p>
          </aside>
        </div>
      </article>
      <nav className="lesson-navigation" aria-label="Lesson navigation">
        {previous && (
          <Link href={`/journal/${previous.slug}/`} className="previous-lesson">
            <span>← Previous lesson</span>
            {previous.title}
          </Link>
        )}
        {next ? (
          <Link href={`/journal/${next.slug}/`} className="next-lesson">
            <span>Next lesson →</span>
            {next.title}
          </Link>
        ) : (
          <Link href="/" className="next-lesson">
            <span>Back to the beginning →</span>
            {ENTRIES[0].title}
          </Link>
        )}
      </nav>
    </main>
  );
}
