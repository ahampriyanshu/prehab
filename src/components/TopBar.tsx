'use client';

import React from 'react';
import { Menu, Type, Minus, Plus } from 'lucide-react';

interface TopBarProps {
  onOpenMobileSidebar: () => void;
  fontType: 'serif' | 'sans';
  onChangeFontType: (type: 'serif' | 'sans') => void;
  fontSize: 'sm' | 'md' | 'lg';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg') => void;
  scrollProgress: number;
}

export function TopBar({
  onOpenMobileSidebar,
  fontType,
  onChangeFontType,
  fontSize,
  onChangeFontSize,
  scrollProgress,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#fcfbf9]/90 backdrop-blur-md border-b border-[#e8e6df]">
      {/* Top thin reading progress line */}
      <div
        className="h-[2px] bg-zinc-800 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileSidebar}
            className="p-1.5 -ml-1.5 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-[#eeece6] lg:hidden transition-colors"
            aria-label="Open Table of Contents"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-serif font-bold text-zinc-900 tracking-tight lg:hidden">
            prehab
          </span>
        </div>

        {/* Reader Comfort Settings */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-sans text-zinc-600">
          {/* Serif vs Sans Toggle */}
          <div className="flex items-center bg-[#f2f0ea] p-0.5 rounded-md border border-[#e4e2da]">
            <button
              onClick={() => onChangeFontType('serif')}
              className={`px-2 py-0.5 rounded text-[11px] font-serif transition-colors ${
                fontType === 'serif'
                  ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Serif
            </button>
            <button
              onClick={() => onChangeFontType('sans')}
              className={`px-2 py-0.5 rounded text-[11px] font-sans transition-colors ${
                fontType === 'sans'
                  ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Sans
            </button>
          </div>

          {/* Font Size Adjuster */}
          <div className="flex items-center bg-[#f2f0ea] p-0.5 rounded-md border border-[#e4e2da]">
            <button
              onClick={() => onChangeFontSize('sm')}
              className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                fontSize === 'sm'
                  ? 'bg-white text-zinc-900 shadow-2xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Small text"
            >
              A-
            </button>
            <button
              onClick={() => onChangeFontSize('md')}
              className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                fontSize === 'md'
                  ? 'bg-white text-zinc-900 shadow-2xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => onChangeFontSize('lg')}
              className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                fontSize === 'lg'
                  ? 'bg-white text-zinc-900 shadow-2xs font-bold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Large text"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
