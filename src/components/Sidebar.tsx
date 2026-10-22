'use client';

import React from 'react';
import { CHAPTERS } from '@/data/book';

interface SidebarProps {
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  currentChapterId,
  onSelectChapter,
}: SidebarProps) {
  return (
    <aside className="w-full md:w-52 lg:w-56 shrink-0 md:sticky md:top-16 self-start">
      <div className="mb-8">
        <button
          onClick={() => {
            onSelectChapter('prologue');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left text-xl font-medium text-black tracking-tight hover:opacity-80 transition-opacity"
        >
          prehab
        </button>
        <p className="text-xs text-gray-400 mt-0.5">
          field manual
        </p>
      </div>

      <nav className="space-y-1">
        {CHAPTERS.map((ch) => {
          const isActive = ch.id === currentChapterId;

          return (
            <button
              key={ch.id}
              onClick={() => {
                onSelectChapter(ch.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-1 text-sm transition-colors ${
                isActive
                  ? 'text-black font-medium'
                  : 'text-gray-400 hover:text-gray-800'
              }`}
            >
              {ch.number !== '00' && ch.number !== '08' && (
                <span className="text-gray-300 mr-2 text-xs font-mono">
                  {ch.number}
                </span>
              )}
              <span>
                {ch.id === 'prologue'
                  ? 'Prologue'
                  : ch.id === 'epilogue'
                  ? 'Epilogue'
                  : ch.title.split(':')[0]}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
