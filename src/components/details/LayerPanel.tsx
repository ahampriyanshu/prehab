'use client';

import React, { useState } from 'react';
import { KineticLayer } from '@/types/kinetic';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Flame,
  Activity,
  Brain,
  Sparkles,
  ArrowRight,
  BookOpen,
  Dumbbell,
  Clock,
  Target,
} from 'lucide-react';

interface LayerPanelProps {
  layer: KineticLayer;
  diagnosticResults: Record<string, boolean | null>;
  onToggleDiagnostic: (testId: string, passed: boolean) => void;
}

type TabType = 'principles' | 'dysfunctions' | 'diagnostics' | 'drills' | 'cues' | 'confidence';

export function LayerPanel({
  layer,
  diagnosticResults,
  onToggleDiagnostic,
}: LayerPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('principles');

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'principles', label: 'First Principles', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'dysfunctions', label: 'Dysfunctions', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'diagnostics', label: 'Room Self-Audit', icon: <Activity className="w-4 h-4" /> },
    { id: 'drills', label: 'Corrective Drills', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'cues', label: 'Cue Simulator', icon: <Flame className="w-4 h-4" /> },
    { id: 'confidence', label: 'Mind & Presence', icon: <Brain className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-2xl flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${layer.accentColor}20`,
                color: layer.accentColor,
              }}
            >
              Layer {layer.romanNumeral}
            </span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
              {layer.subtitle}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {layer.title}
          </h2>
        </div>

        {/* Tagline Callout */}
        <p className="text-xs md:text-sm text-slate-300 max-w-md italic border-l-2 pl-3 py-0.5 border-slate-700">
          &ldquo;{layer.tagline}&rdquo;
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-800/80">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
            style={{
              borderBottom:
                activeTab === tab.id ? `2px solid ${layer.accentColor}` : '2px solid transparent',
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: First Principles & Kinetic Link */}
      {activeTab === 'principles' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Anatomical Focus Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Primary Anatomical Hardware
            </h4>
            <div className="flex flex-wrap gap-2">
              {layer.anatomicalFocus.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-200 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* First Principle Card */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              The Physics & Biological Baseline
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {layer.firstPrinciple}
            </p>
          </div>

          {/* Kinetic Link Warning */}
          <div className="bg-amber-950/20 border border-amber-900/50 rounded-xl p-4 md:p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 font-semibold">
              <ArrowRight className="w-4 h-4" />
              Upstream / Downstream Cascading Link
            </div>
            <p className="text-amber-200/90 leading-relaxed text-sm">
              {layer.kineticLink}
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Common Dysfunctions & Cascade Effects */}
      {activeTab === 'dysfunctions' && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs text-slate-400">
            How modern sitting, footwear, and bro-split dogma break this layer, and how the collapse propagates up the chain:
          </p>

          <div className="grid gap-4">
            {layer.dysfunctions.map((dys, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-4.5 space-y-3"
              >
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  {dys.name}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 font-mono block mb-1">
                      SYMPTOM
                    </span>
                    <span className="text-slate-200">{dys.symptom}</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-amber-400 font-mono block mb-1">
                      ROOT CAUSE
                    </span>
                    <span className="text-slate-200">{dys.rootCause}</span>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <span className="text-rose-400 font-mono block mb-1">
                      CHAIN CASCADE
                    </span>
                    <span className="text-slate-200">{dys.cascadeEffect}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Room Diagnostics (Interactive Self-Audit) */}
      {activeTab === 'diagnostics' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">
              Stand up right now. Perform these tests to audit your kinetic baseline:
            </p>
          </div>

          <div className="grid gap-4">
            {layer.diagnostics.map((test) => {
              const result = diagnosticResults[test.id];

              return (
                <div
                  key={test.id}
                  className={`bg-slate-950/70 border rounded-xl p-4 md:p-5 transition-all ${
                    result === true
                      ? 'border-emerald-500/50 bg-emerald-950/10'
                      : result === false
                      ? 'border-rose-500/50 bg-rose-950/10'
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {test.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {test.timeEstimate}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {test.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Result Selector */}
                    <div className="flex items-center gap-2 self-start md:self-auto">
                      <button
                        onClick={() => onToggleDiagnostic(test.id, true)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          result === true
                            ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Pass
                      </button>
                      <button
                        onClick={() => onToggleDiagnostic(test.id, false)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          result === false
                            ? 'bg-rose-500 text-white font-bold shadow-md'
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <XCircle className="w-4 h-4" />
                        Deficit
                      </button>
                    </div>
                  </div>

                  {/* Step by step instructions */}
                  <div className="space-y-1.5 mb-4 text-xs md:text-sm text-slate-300">
                    <span className="font-mono text-slate-400 text-xs block uppercase">
                      Execution Steps:
                    </span>
                    <ol className="list-decimal list-inside space-y-1 pl-1">
                      {test.instructions.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Pass / Fail criteria box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-800/80">
                    <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                      <span className="text-emerald-400 font-semibold block mb-0.5">
                        PASSING BENCHMARK:
                      </span>
                      <span className="text-slate-300">{test.passingCriteria}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40">
                      <span className="text-rose-400 font-semibold block mb-0.5">
                        FAILING RED FLAG:
                      </span>
                      <span className="text-slate-300">{test.failingSignal}</span>
                    </div>
                  </div>

                  {/* Prescription */}
                  <div className="mt-3 text-xs bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-sky-400 font-semibold">
                      PRESCRIPTION IF DEFICIT:{' '}
                    </span>
                    <span className="text-slate-300">
                      {test.prescriptionIfFailed}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Corrective Drills */}
      {activeTab === 'drills' && (
        <div className="space-y-5 animate-fadeIn">
          <p className="text-xs text-slate-400">
            Targeted drills and exercises that restore function to this segment of the chain:
          </p>

          <div className="grid gap-4">
            {layer.drills.map((drill, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 md:p-5 space-y-3"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Dumbbell
                      className="w-4 h-4"
                      style={{ color: layer.accentColor }}
                    />
                    {drill.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {drill.difficulty}
                    </span>
                    <span className="text-slate-400">{drill.frequency}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  <span className="text-slate-300 font-semibold">Target: </span>
                  {drill.target}
                </div>

                <div className="space-y-1.5 text-xs md:text-sm text-slate-300">
                  <span className="font-mono text-slate-400 text-xs block uppercase">
                    Protocol:
                  </span>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {drill.howTo.map((step, sIdx) => (
                      <li key={sIdx} className="leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mental cues */}
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    Internal Bio-Cues:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {drill.cues.map((cue, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-amber-950/20 border border-amber-900/40 text-amber-200"
                      >
                        &ldquo;{cue}&rdquo;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Cue Simulator */}
      {activeTab === 'cues' && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs text-slate-400">
            Compare conventional bro-science cues against biomechanically locked-in cues for{' '}
            <span className="text-white font-semibold">{layer.cueVisualizer.movement}</span>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Broken Cue */}
            <div className="bg-rose-950/20 border border-rose-900/60 rounded-xl p-4 md:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <XCircle className="w-4 h-4" />
                  Broken Conventional Advice
                </div>
                <h4 className="text-lg font-bold text-rose-200 mb-2">
                  {layer.cueVisualizer.brokenCue.title}
                </h4>
                <p className="text-xs md:text-sm text-rose-300/80 leading-relaxed mb-4">
                  {layer.cueVisualizer.brokenCue.description}
                </p>
              </div>

              <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-900/40">
                <span className="font-mono text-[11px] text-rose-400 uppercase block mb-1">
                  Hidden Consequences:
                </span>
                <ul className="text-xs text-rose-200/90 space-y-1 list-disc list-inside">
                  {layer.cueVisualizer.brokenCue.consequences.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Locked-in Cue */}
            <div className="bg-emerald-950/20 border border-emerald-900/60 rounded-xl p-4 md:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Locked-In Biomechanics
                </div>
                <h4 className="text-lg font-bold text-emerald-200 mb-2">
                  {layer.cueVisualizer.lockedInCue.title}
                </h4>
                <p className="text-xs md:text-sm text-emerald-300/80 leading-relaxed mb-4">
                  {layer.cueVisualizer.lockedInCue.description}
                </p>
              </div>

              <div className="bg-emerald-950/40 p-3 rounded-lg border border-emerald-900/40">
                <span className="font-mono text-[11px] text-emerald-400 uppercase block mb-1">
                  Mechanical Advantage:
                </span>
                <ul className="text-xs text-emerald-200/90 space-y-1 list-disc list-inside">
                  {layer.cueVisualizer.lockedInCue.mechanics.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Mind & Confidence (Somatic Transmutation) */}
      {activeTab === 'confidence' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="bg-gradient-to-br from-pink-950/30 to-purple-950/20 border border-pink-900/40 rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-2 text-pink-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Brain className="w-4 h-4" />
              The Somatic Feedback Loop
            </div>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6">
              Confidence is not an intellectual concept or affirmations spoken into a mirror. It is the direct biological byproduct of your nervous system reading stability in your physical vessel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                  1. The Physical State
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {layer.mentalTransmutation.physicalState}
                </p>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-purple-400 uppercase block mb-1">
                  2. Neurological Shift
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {layer.mentalTransmutation.neurologicalImpact}
                </p>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-pink-400 uppercase block mb-1">
                  3. Transmuted Confidence
                </span>
                <p className="text-xs text-pink-200 leading-relaxed font-medium">
                  {layer.mentalTransmutation.confidenceShift}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
