'use client';

import React, { useState } from 'react';
import { CHAPTERS, BOOK_METADATA } from '@/data/book';
import { Chapter } from '@/types/book';
import { Search, BookOpen, Clock, Printer, X } from 'lucide-react';

interface SidebarProps {
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  currentChapterId,
  onSelectChapter,
  isOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = CHAPTERS.filter((ch) => {
    const q = searchQuery.toLowerCase();
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.subtitle.toLowerCase().includes(q) ||
      ch.summary.toLowerCase().includes(q) ||
      ch.part.toLowerCase().includes(q)
    );
  });

  // Group chapters by Part
  const groupedParts = filteredChapters.reduce((acc, ch) => {
    if (!acc[ch.part]) acc[ch.part] = [];
    acc[ch.part].push(ch);
    return acc;
  }, {} as Record<string, Chapter[]>);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-zinc-900/30 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-[#f7f6f2] border-r border-[#e8e6df] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Book Header */}
        <div className="p-6 border-b border-[#e8e6df] bg-[#f7f6f2]">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-serif font-bold tracking-tight text-zinc-900 lowercase">
              {BOOK_METADATA.title}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="text-zinc-600 hover:text-zinc-800 p-1 rounded transition-colors hidden sm:block"
                title="Print Book / Save PDF"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onCloseMobile}
                className="text-zinc-600 hover:text-zinc-800 p-1 rounded lg:hidden"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed font-sans">
            {BOOK_METADATA.subtitle}
          </p>
          <div className="mt-3 text-[11px] font-sans text-zinc-600 uppercase tracking-widest">
            {BOOK_METADATA.edition}
          </div>
        </div>

        {/* Search Input */}
        <div className="px-4 py-3 border-b border-[#e8e6df] bg-[#faf9f6]">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, drills, topics..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#e4e2da] rounded-md text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 font-sans transition-colors"
            />
          </div>
        </div>

        {/* Chapters Table of Contents */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {Object.entries(groupedParts).map(([partTitle, chapters]) => (
            <div key={partTitle} className="space-y-1.5">
              <div className="px-2 py-1 text-[10px] font-sans font-semibold uppercase tracking-wider text-zinc-600">
                {partTitle}
              </div>

              <div className="space-y-0.5">
                {chapters.map((chapter) => {
                  const isActive = chapter.id === currentChapterId;

                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        onSelectChapter(chapter.id);
                        onCloseMobile();
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-all group flex items-start gap-2.5 ${
                        isActive
                          ? 'bg-white shadow-xs border border-[#e4e2da] text-zinc-900 font-medium'
                          : 'text-zinc-600 hover:text-zinc-900 hover:bg-[#eeece6]/60 border border-transparent'
                      }`}
                    >
                      <span
                        className={`text-[11px] font-mono mt-0.5 shrink-0 ${
                          isActive ? 'text-zinc-900 font-bold' : 'text-zinc-600'
                        }`}
                      >
                        {chapter.number}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-serif leading-snug truncate">
                          {chapter.title}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px] text-zinc-600 font-sans">
                          <span>{chapter.readingTime}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredChapters.length === 0 && (
            <div className="text-center py-8 text-xs text-zinc-600 font-sans">
              No articles match &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>

        {/* Quiet Footer */}
        <div className="p-4 border-t border-[#e8e6df] text-[11px] font-sans text-zinc-600 flex items-center justify-between">
          <span>{CHAPTERS.length} Articles</span>
          <span>© {BOOK_METADATA.author}</span>
        </div>
      </aside>
    </>
  );
}
