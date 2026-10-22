'use client';

import React from 'react';
import { CHAPTERS } from '@/data/book';

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
  return (
    <>
      {/* Mobile overlay */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-30 bg-black/10 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white p-8 overflow-y-auto transition-transform duration-150 ease-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8">
          <button
            onClick={() => {
              onSelectChapter('prologue');
              onCloseMobile();
            }}
            className="text-left text-lg font-medium text-black tracking-tight"
          >
            prehab
          </button>
          <div className="text-xs text-gray-400 mt-0.5">
            field manual
          </div>
        </div>

        <nav className="space-y-1">
          {CHAPTERS.map((ch) => {
            const isActive = ch.id === currentChapterId;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(ch.id);
                  onCloseMobile();
                }}
                className={`block w-full text-left py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'text-black font-medium'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {ch.number !== '00' && ch.number !== '08' && (
                  <span className="text-gray-400 mr-2 text-xs font-mono">
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
    </>
  );
}
