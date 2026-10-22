'use client';

import React, { useState, useEffect } from 'react';
import { CHAPTERS } from '@/data/book';
import { Sidebar } from '@/components/Sidebar';
import { Reader } from '@/components/Reader';
import { TopBar } from '@/components/TopBar';

export default function BookHomePage() {
  const [currentChapterId, setCurrentChapterId] = useState<string>('prologue');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState<boolean>(false);
  const [fontType, setFontType] = useState<'serif' | 'sans'>('serif');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Active chapter
  const currentChapter =
    CHAPTERS.find((c) => c.id === currentChapterId) || CHAPTERS[0];

  // Scroll listener for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (window.scrollY / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 flex flex-col font-serif antialiased selection:bg-[#e8dece]">
      {/* Table of Contents Sidebar */}
      <Sidebar
        currentChapterId={currentChapterId}
        onSelectChapter={(id) => {
          setCurrentChapterId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area (Offset by sidebar on desktop) */}
      <div className="lg:pl-80 flex flex-col flex-1 min-w-0">
        <TopBar
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          fontType={fontType}
          onChangeFontType={setFontType}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
          scrollProgress={scrollProgress}
        />

        <main className="flex-1 w-full flex justify-center">
          <Reader
            chapter={currentChapter}
            onNavigateChapter={(id) => {
              setCurrentChapterId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            fontType={fontType}
            fontSize={fontSize}
          />
        </main>

        <footer className="py-12 border-t border-[#e8e6df] text-center text-xs font-sans text-zinc-500">
          <div className="max-w-xl mx-auto px-4 space-y-1">
            <p className="font-serif italic text-zinc-700">
              prehab &bull; a quiet, first-principles handbook
            </p>
            <p>Authored by Priyanshu Tiwari &bull; All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
