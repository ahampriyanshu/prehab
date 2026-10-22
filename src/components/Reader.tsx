'use client';

import React from 'react';
import { Chapter } from '@/types/book';
import { CHAPTERS } from '@/data/book';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';

interface ReaderProps {
  chapter: Chapter;
  onNavigateChapter: (chapterId: string) => void;
  fontType: 'serif' | 'sans';
  fontSize: 'sm' | 'md' | 'lg';
}

export function Reader({
  chapter,
  onNavigateChapter,
  fontType,
  fontSize,
}: ReaderProps) {
  // Find previous and next chapters
  const currentIndex = CHAPTERS.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  // Font size classes
  const getBodySizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-base leading-[1.75]';
      case 'lg':
        return 'text-xl leading-[1.95]';
      case 'md':
      default:
        return 'text-lg leading-[1.85]';
    }
  };

  return (
    <article
      className={`w-full max-w-[68ch] mx-auto py-8 sm:py-14 px-4 sm:px-6 transition-all duration-150 ${
        fontType === 'serif' ? 'font-book-serif' : 'font-book-sans'
      }`}
    >
      {/* Chapter Metadata Header */}
      <header className="mb-12 pb-8 border-b border-[#e8e6df]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-zinc-500 mb-3">
          <span>{chapter.part}</span>
          <span>&bull;</span>
          <span className="font-mono font-semibold">Article {chapter.number}</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {chapter.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-900 leading-[1.18] mb-4">
          {chapter.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 font-serif italic leading-relaxed">
          {chapter.subtitle}
        </p>

        {/* Summary note */}
        <div className="mt-6 p-4 rounded-xl bg-[#f7f6f2] border border-[#eceae3] text-sm text-zinc-700 font-sans leading-relaxed">
          <span className="font-semibold text-zinc-900">Thesis: </span>
          {chapter.summary}
        </div>
      </header>

      {/* Chapter Sections */}
      <div className={`space-y-12 ${getBodySizeClass()} text-zinc-800`}>
        {chapter.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-6">
            {section.title && (
              <h2 className="text-2xl sm:text-2xl font-serif font-bold text-zinc-900 pt-4 tracking-tight">
                {section.title}
              </h2>
            )}

            <div className="space-y-5">
              {section.content.map((paragraph, pIdx) => {
                // First paragraph of first section gets an elegant drop cap
                const isFirstEver = sIdx === 0 && pIdx === 0;

                if (isFirstEver) {
                  const firstLetter = paragraph.charAt(0);
                  const restOfParagraph = paragraph.slice(1);

                  return (
                    <p key={pIdx} className="text-justify sm:text-left">
                      <span className="float-left text-5xl sm:text-6xl font-serif font-bold text-zinc-900 leading-none pr-3 pt-1">
                        {firstLetter}
                      </span>
                      {restOfParagraph}
                    </p>
                  );
                }

                return (
                  <p key={pIdx} className="text-justify sm:text-left">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Custom Callout Box */}
            {section.callout && (
              <aside
                className={`my-8 p-5 sm:p-6 rounded-xl border font-sans text-sm leading-relaxed ${
                  section.callout.type === 'axiom'
                    ? 'bg-[#f4f7f6] border-[#d2deda] text-zinc-900'
                    : section.callout.type === 'drill'
                    ? 'bg-[#f8f6f0] border-[#e7e1d3] text-zinc-900'
                    : 'bg-[#f7f7f9] border-[#e2e2e8] text-zinc-900'
                }`}
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold mb-2">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>
                    {section.callout.type === 'axiom'
                      ? 'Biomechanical Axiom'
                      : section.callout.type === 'drill'
                      ? 'Field Drill Protocol'
                      : 'Clinical Note'}
                  </span>
                  <span>&bull;</span>
                  <span className="font-serif normal-case italic font-medium">
                    {section.callout.title}
                  </span>
                </div>
                <p className="font-serif text-base sm:text-[17px] text-zinc-800 italic leading-relaxed">
                  &ldquo;{section.callout.text}&rdquo;
                </p>
              </aside>
            )}
          </section>
        ))}
      </div>

      {/* Key Takeaways Section */}
      <footer className="mt-14 pt-8 border-t border-[#e8e6df]">
        <div className="p-6 rounded-2xl bg-[#f7f6f2] border border-[#eceae3] space-y-3 font-sans">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            Core Principles From This Article
          </div>
          <ul className="space-y-2 text-sm text-zinc-700">
            {chapter.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-zinc-400 mt-1">&mdash;</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Previous / Next Chapter Pagination */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm">
          {prevChapter ? (
            <button
              onClick={() => {
                onNavigateChapter(prevChapter.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center gap-2 p-3 rounded-lg border border-[#e8e6df] hover:border-zinc-400 bg-white text-zinc-800 transition-colors text-left"
            >
              <ArrowLeft className="w-4 h-4 shrink-0 text-zinc-500" />
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Previous Article
                </div>
                <div className="font-serif font-medium text-xs truncate max-w-[200px]">
                  {prevChapter.number} &bull; {prevChapter.title}
                </div>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextChapter && (
            <button
              onClick={() => {
                onNavigateChapter(nextChapter.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center gap-2 p-3 rounded-lg border border-[#e8e6df] hover:border-zinc-400 bg-white text-zinc-800 transition-colors text-right justify-end"
            >
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Next Article
                </div>
                <div className="font-serif font-medium text-xs truncate max-w-[200px]">
                  {nextChapter.number} &bull; {nextChapter.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 text-zinc-500" />
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
