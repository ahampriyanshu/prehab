'use client';

import React, { useState } from 'react';
import { CHAPTERS } from '@/data/book';
import { Sidebar } from '@/components/Sidebar';
import { Reader } from '@/components/Reader';

export default function Page() {
  const [currentChapterId, setCurrentChapterId] = useState<string>('prologue');

  const currentChapter =
    CHAPTERS.find((c) => c.id === currentChapterId) || CHAPTERS[0];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Centered Unified Reading Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
        {/* Sidebar Navigation */}
        <Sidebar
          currentChapterId={currentChapterId}
          onSelectChapter={setCurrentChapterId}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 max-w-xl">
          <Reader
            chapter={currentChapter}
            onNavigateChapter={setCurrentChapterId}
          />
        </main>
      </div>
    </div>
  );
}
