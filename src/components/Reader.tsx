'use client';

import React from 'react';
import { Chapter } from '@/types/book';
import { CHAPTERS } from '@/data/book';

interface ReaderProps {
  chapter: Chapter;
  onNavigateChapter: (chapterId: string) => void;
}

export function Reader({ chapter, onNavigateChapter }: ReaderProps) {
  const currentIndex = CHAPTERS.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <article className="w-full">
      {/* Title Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-normal text-black tracking-tight mb-2">
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <p className="text-gray-500 text-base leading-relaxed">
            {chapter.subtitle}
          </p>
        )}
      </header>

      {/* Sections and Paragraphs */}
      <div className="space-y-8 text-base text-gray-800 leading-relaxed">
        {chapter.sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-4">
            {section.title && (
              <h2 className="text-xl font-medium text-black pt-4">
                {section.title}
              </h2>
            )}

            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}

            {section.callout && (
              <blockquote className="border-l-2 border-gray-300 pl-4 my-6 text-gray-700 italic">
                <p className="not-italic text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {section.callout.title}
                </p>
                {section.callout.text}
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between text-sm">
        {prevChapter ? (
          <button
            onClick={() => {
              onNavigateChapter(prevChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-gray-500 hover:text-black transition-colors"
          >
            &larr; {prevChapter.title.split(':')[0]}
          </button>
        ) : (
          <span />
        )}

        {nextChapter && (
          <button
            onClick={() => {
              onNavigateChapter(nextChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-gray-500 hover:text-black transition-colors ml-auto"
          >
            {nextChapter.title.split(':')[0]} &rarr;
          </button>
        )}
      </nav>
    </article>
  );
}
