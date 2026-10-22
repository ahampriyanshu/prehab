'use client';

import React, { useState } from 'react';
import { CHAPTERS } from '@/data/book';
import { Sidebar } from '@/components/Sidebar';
import { Reader } from '@/components/Reader';

export default function Page() {
  const [currentChapterId, setCurrentChapterId] = useState<string>('prologue');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  const currentChapter =
    CHAPTERS.find((c) => c.id === currentChapterId) || CHAPTERS[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Sidebar on the Left */}
      <Sidebar
        currentChapterId={currentChapterId}
        onSelectChapter={(id) => {
          setCurrentChapterId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area on the Right */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Mobile-only header button */}
        <div className="lg:hidden p-4 border-b border-gray-100 flex items-center justify-between">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="text-sm font-medium text-black"
          >
            &equiv; Contents
          </button>
          <span className="text-sm text-gray-400">prehab</span>
        </div>

        <main className="flex-1 flex justify-center">
          <Reader
            chapter={currentChapter}
            onNavigateChapter={(id) => {
              setCurrentChapterId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      </div>
    </div>
  );
}
