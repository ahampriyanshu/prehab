'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { LayerId } from '@/types/kinetic';
import { KINETIC_LAYERS } from '@/data/kinetic-chain';
import { KineticCanvas } from '@/components/atlas/KineticCanvas';
import { LayerSelector } from '@/components/atlas/LayerSelector';
import { LayerPanel } from '@/components/details/LayerPanel';
import {
  Activity,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Compass,
  Box,
  Layers,
} from 'lucide-react';

// Dynamic import for WebGL Three.js 3D Canvas (SSR disabled)
const KineticCanvas3D = dynamic(
  () =>
    import('@/components/atlas/KineticCanvas3D').then(
      (mod) => mod.KineticCanvas3D
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[4/5] bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-3 text-xs font-mono text-slate-400">
        <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
        INITIALIZING 3D WEBGL ENGINE...
      </div>
    ),
  }
);

export default function HomePage() {
  const [activeLayerId, setActiveLayerId] = useState<LayerId>('foot-base');
  const [showDysfunctionChain, setShowDysfunctionChain] =
    useState<boolean>(false);
  const [dimensionMode, setDimensionMode] = useState<'3d' | '2d'>('3d');
  const [diagnosticResults, setDiagnosticResults] = useState<
    Record<string, boolean | null>
  >({
    'wall-ankle-test': true,
    'hallux-windlass-test': null,
    'single-leg-trendelenburg-test': null,
    '360-iap-breath-test': null,
    'back-to-wall-shoulder-slide': null,
    'eyes-closed-proprioception-test': null,
  });

  const activeLayer = KINETIC_LAYERS.find((l) => l.id === activeLayerId)!;

  // Toggle diagnostic test
  const handleToggleDiagnostic = (testId: string, passed: boolean) => {
    setDiagnosticResults((prev) => ({
      ...prev,
      [testId]: prev[testId] === passed ? null : passed,
    }));
  };

  // Calculate Kinetic Chain Integrity Score
  const totalTests = Object.keys(diagnosticResults).length;
  const passedTests = Object.values(diagnosticResults).filter(
    (v) => v === true
  ).length;
  const testedCount = Object.values(diagnosticResults).filter(
    (v) => v !== null
  ).length;
  const integrityScore =
    testedCount > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/30">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
              S10
            </div>
            <div>
              <span className="font-bold tracking-tight text-white font-mono text-base">
                SUBTEN
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-400 font-mono">
                / 3D Human Kinetic Space
              </span>
            </div>
          </div>

          {/* Quick HUD Metrics & GitHub */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-400">Audit Score:</span>
              <span className="font-mono font-semibold text-emerald-400">
                {integrityScore}%
              </span>
              <span className="text-[10px] text-slate-500">
                ({passedTests}/{totalTests} passed)
              </span>
            </div>

            <a
              href="https://github.com/ahampriyanshu/subten"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative border-b border-slate-800/60 py-8 px-4 sm:px-6 bg-radial-gradient">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              3D Interactive Biomechanical Space
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The Unbroken Kinetic Chain.
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Rotate, zoom, and inspect the human body in 3D space. From the 33 joints of the foot to pelvic cylinder pressurization, thoracic carriage, and unshakeable somatic confidence.
            </p>
          </div>

          {/* Controls Cluster */}
          <div className="shrink-0 flex flex-wrap items-center gap-2">
            {/* 3D vs 2D Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setDimensionMode('3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dimensionMode === '3d'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                3D Space
              </button>
              <button
                onClick={() => setDimensionMode('2d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  dimensionMode === '2d'
                    ? 'bg-slate-800 text-white font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                2D CAD
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setShowDysfunctionChain(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  !showDysfunctionChain
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                Flow
              </button>
              <button
                onClick={() => setShowDysfunctionChain(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  showDysfunctionChain
                    ? 'bg-rose-950/80 border border-rose-800/80 text-rose-300 shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Collapse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Dual-View Explorer */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full space-y-6">
        {/* Layer Scrubber / Quick Navigation */}
        <LayerSelector
          activeLayerId={activeLayerId}
          onSelectLayer={(id) => setActiveLayerId(id)}
        />

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 3D / 2D Human Body Viewport (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {dimensionMode === '3d' ? (
              <KineticCanvas3D
                activeLayerId={activeLayerId}
                onSelectLayer={(id) => setActiveLayerId(id)}
                showDysfunctionChain={showDysfunctionChain}
              />
            ) : (
              <KineticCanvas
                activeLayerId={activeLayerId}
                onSelectLayer={(id) => setActiveLayerId(id)}
                showDysfunctionChain={showDysfunctionChain}
              />
            )}

            {/* Quick Diagnostic Checklist Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs">
                <span className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Kinetic Audit Checklist
                </span>
                <button
                  onClick={() =>
                    setDiagnosticResults({
                      'wall-ankle-test': null,
                      'hallux-windlass-test': null,
                      'single-leg-trendelenburg-test': null,
                      '360-iap-breath-test': null,
                      'back-to-wall-shoulder-slide': null,
                      'eyes-closed-proprioception-test': null,
                    })
                  }
                  className="text-slate-500 hover:text-slate-300 flex items-center gap-1 text-[11px] transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {KINETIC_LAYERS.map((l) => (
                  <div key={l.id} className="space-y-1">
                    <span
                      className="text-[10px] font-mono uppercase font-bold"
                      style={{ color: l.accentColor }}
                    >
                      L0{l.number} • {l.title}
                    </span>
                    {l.diagnostics.map((d) => {
                      const res = diagnosticResults[d.id];
                      return (
                        <div
                          key={d.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80"
                        >
                          <span className="text-slate-300 truncate max-w-[220px]">
                            {d.title}
                          </span>
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                              res === true
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                                : res === false
                                ? 'bg-rose-950 text-rose-400 border border-rose-800/60'
                                : 'bg-slate-800 text-slate-500'
                            }`}
                          >
                            {res === true
                              ? 'PASSED'
                              : res === false
                              ? 'DEFICIT'
                              : 'UNTESTED'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Layer Inspection & Deep Content (7 cols) */}
          <div className="lg:col-span-7">
            <LayerPanel
              layer={activeLayer}
              diagnosticResults={diagnosticResults}
              onToggleDiagnostic={handleToggleDiagnostic}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 sm:px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            SubTen &bull; An exploration in biomechanical engineering, physical autonomy, and grounded presence.
          </p>
          <p className="font-mono">
            Ground Contact &rarr; Kinetic Torque &rarr; Pressurized Cylinder &rarr; Presence
          </p>
        </div>
      </footer>
    </div>
  );
}
