'use client';

import React, { useState } from 'react';
import { LayerId, KineticNode } from '@/types/kinetic';
import { KINETIC_NODES, KINETIC_LAYERS } from '@/data/kinetic-chain';

interface KineticCanvasProps {
  activeLayerId: LayerId;
  onSelectLayer: (layerId: LayerId) => void;
  showDysfunctionChain?: boolean;
}

export function KineticCanvas({
  activeLayerId,
  onSelectLayer,
  showDysfunctionChain = false,
}: KineticCanvasProps) {
  const [hoveredNode, setHoveredNode] = useState<KineticNode | null>(null);

  const activeLayer = KINETIC_LAYERS.find((l) => l.id === activeLayerId)!;

  // Layer bounds and color helper
  const getLayerColor = (layerId: LayerId) => {
    switch (layerId) {
      case 'foot-base':
        return '#10b981'; // emerald
      case 'torsion-stability':
        return '#0ea5e9'; // sky
      case 'core-cylinder':
        return '#f59e0b'; // amber
      case 'upper-carriage':
        return '#8b5cf6'; // violet
      case 'mind-presence':
        return '#ec4899'; // pink
      default:
        return '#64748b';
    }
  };

  const isLayerActive = (layerId: LayerId) => activeLayerId === layerId;

  return (
    <div className="relative w-full max-w-[440px] mx-auto bg-slate-950/80 rounded-2xl border border-slate-800/80 p-4 shadow-2xl backdrop-blur-sm overflow-hidden select-none">
      {/* HUD Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono uppercase tracking-wider text-slate-400 font-medium">
            Bio-Kinetic Vector HUD
          </span>
        </div>
        <div className="font-mono text-slate-400">
          MODE:{' '}
          <span
            className={
              showDysfunctionChain
                ? 'text-rose-400 font-semibold'
                : 'text-sky-400 font-semibold'
            }
          >
            {showDysfunctionChain ? 'CASCADE COLLAPSE' : 'GROUND-UP FLOW'}
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative my-2 aspect-[400/820] w-full">
        <svg
          viewBox="0 0 400 820"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern
              id="bio-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="20"
                y2="0"
                stroke="#1e293b"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="20"
                stroke="#1e293b"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
            </pattern>

            {/* Glowing filters */}
            <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-sky" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-amber" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-violet" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-pink" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-rose" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Background */}
          <rect width="400" height="820" fill="url(#bio-grid)" />

          {/* Earth Contact Baseline */}
          <g id="ground-baseline">
            <line
              x1="60"
              y1="765"
              x2="340"
              y2="765"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text
              x="200"
              y="790"
              textAnchor="middle"
              className="fill-slate-500 font-mono text-[10px] tracking-widest uppercase"
            >
              ▼ Earth Reaction Baseline (GRF Origin)
            </text>
          </g>

          {/* Layer Boundary Background Zones (Clickable) */}
          {/* Layer 1: Feet (660 - 765) */}
          <rect
            x="40"
            y="660"
            width="320"
            height="105"
            rx="12"
            fill={isLayerActive('foot-base') ? '#10b981' : 'transparent'}
            fillOpacity={isLayerActive('foot-base') ? 0.08 : 0}
            stroke={isLayerActive('foot-base') ? '#10b981' : '#1e293b'}
            strokeWidth={isLayerActive('foot-base') ? 1.5 : 1}
            strokeDasharray={isLayerActive('foot-base') ? 'none' : '3 3'}
            className="cursor-pointer transition-all duration-300 hover:fill-emerald-500/10"
            onClick={() => onSelectLayer('foot-base')}
          />
          <text
            x="50"
            y="678"
            className="font-mono text-[9px] uppercase font-bold fill-emerald-500/80 pointer-events-none"
          >
            L01 • FOOT & BASE
          </text>

          {/* Layer 2: Torsion & Stability (420 - 655) */}
          <rect
            x="40"
            y="420"
            width="320"
            height="235"
            rx="12"
            fill={isLayerActive('torsion-stability') ? '#0ea5e9' : 'transparent'}
            fillOpacity={isLayerActive('torsion-stability') ? 0.08 : 0}
            stroke={isLayerActive('torsion-stability') ? '#0ea5e9' : '#1e293b'}
            strokeWidth={isLayerActive('torsion-stability') ? 1.5 : 1}
            strokeDasharray={isLayerActive('torsion-stability') ? 'none' : '3 3'}
            className="cursor-pointer transition-all duration-300 hover:fill-sky-500/10"
            onClick={() => onSelectLayer('torsion-stability')}
          />
          <text
            x="50"
            y="438"
            className="font-mono text-[9px] uppercase font-bold fill-sky-400/80 pointer-events-none"
          >
            L02 • TORSION & HIPS
          </text>

          {/* Layer 3: Core & Cylinder (250 - 415) */}
          <rect
            x="40"
            y="250"
            width="320"
            height="165"
            rx="12"
            fill={isLayerActive('core-cylinder') ? '#f59e0b' : 'transparent'}
            fillOpacity={isLayerActive('core-cylinder') ? 0.08 : 0}
            stroke={isLayerActive('core-cylinder') ? '#f59e0b' : '#1e293b'}
            strokeWidth={isLayerActive('core-cylinder') ? 1.5 : 1}
            strokeDasharray={isLayerActive('core-cylinder') ? 'none' : '3 3'}
            className="cursor-pointer transition-all duration-300 hover:fill-amber-500/10"
            onClick={() => onSelectLayer('core-cylinder')}
          />
          <text
            x="50"
            y="268"
            className="font-mono text-[9px] uppercase font-bold fill-amber-400/80 pointer-events-none"
          >
            L03 • CORE CYLINDER
          </text>

          {/* Layer 4: Upper Carriage (130 - 245) */}
          <rect
            x="40"
            y="130"
            width="320"
            height="115"
            rx="12"
            fill={isLayerActive('upper-carriage') ? '#8b5cf6' : 'transparent'}
            fillOpacity={isLayerActive('upper-carriage') ? 0.08 : 0}
            stroke={isLayerActive('upper-carriage') ? '#8b5cf6' : '#1e293b'}
            strokeWidth={isLayerActive('upper-carriage') ? 1.5 : 1}
            strokeDasharray={isLayerActive('upper-carriage') ? 'none' : '3 3'}
            className="cursor-pointer transition-all duration-300 hover:fill-violet-500/10"
            onClick={() => onSelectLayer('upper-carriage')}
          />
          <text
            x="50"
            y="148"
            className="font-mono text-[9px] uppercase font-bold fill-violet-400/80 pointer-events-none"
          >
            L04 • UPPER CARRIAGE
          </text>

          {/* Layer 5: Mind & Presence (35 - 125) */}
          <rect
            x="40"
            y="35"
            width="320"
            height="90"
            rx="12"
            fill={isLayerActive('mind-presence') ? '#ec4899' : 'transparent'}
            fillOpacity={isLayerActive('mind-presence') ? 0.08 : 0}
            stroke={isLayerActive('mind-presence') ? '#ec4899' : '#1e293b'}
            strokeWidth={isLayerActive('mind-presence') ? 1.5 : 1}
            strokeDasharray={isLayerActive('mind-presence') ? 'none' : '3 3'}
            className="cursor-pointer transition-all duration-300 hover:fill-pink-500/10"
            onClick={() => onSelectLayer('mind-presence')}
          />
          <text
            x="50"
            y="52"
            className="font-mono text-[9px] uppercase font-bold fill-pink-400/80 pointer-events-none"
          >
            L05 • MIND & PRESENCE
          </text>

          {/* Central Biomechanical Silhouette Skeleton Lines */}
          <g
            id="skeleton-lines"
            stroke={showDysfunctionChain ? '#f43f5e' : '#475569'}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {/* Feet arches */}
            <path
              d="M 140 755 Q 160 735 180 755"
              fill="none"
              stroke={showDysfunctionChain ? '#f43f5e' : isLayerActive('foot-base') ? '#10b981' : '#475569'}
              strokeWidth={isLayerActive('foot-base') ? 3 : 2}
            />
            <path
              d="M 220 755 Q 240 735 260 755"
              fill="none"
              stroke={showDysfunctionChain ? '#f43f5e' : isLayerActive('foot-base') ? '#10b981' : '#475569'}
              strokeWidth={isLayerActive('foot-base') ? 3 : 2}
            />

            {/* Ankles to Knees (Tibial Spiral) */}
            <line
              x1="165"
              y1="690"
              x2="175"
              y2="520"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('torsion-stability')
                  ? '#0ea5e9'
                  : '#475569'
              }
              strokeWidth={isLayerActive('torsion-stability') ? 3 : 2}
            />
            <line
              x1="235"
              y1="690"
              x2="225"
              y2="520"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('torsion-stability')
                  ? '#0ea5e9'
                  : '#475569'
              }
              strokeWidth={isLayerActive('torsion-stability') ? 3 : 2}
            />

            {/* Knees to Femur/Hips */}
            <line
              x1="175"
              y1="520"
              x2="180"
              y2="430"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('torsion-stability')
                  ? '#0ea5e9'
                  : '#475569'
              }
              strokeWidth={isLayerActive('torsion-stability') ? 3 : 2}
            />
            <line
              x1="225"
              y1="520"
              x2="220"
              y2="430"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('torsion-stability')
                  ? '#0ea5e9'
                  : '#475569'
              }
              strokeWidth={isLayerActive('torsion-stability') ? 3 : 2}
            />

            {/* Pelvic Bowl Triangle */}
            <polygon
              points="175,415 225,415 200,445"
              fill="none"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('core-cylinder')
                  ? '#f59e0b'
                  : '#475569'
              }
              strokeWidth={isLayerActive('core-cylinder') ? 2.5 : 1.5}
            />

            {/* Lumbar & Core Cylinder */}
            <rect
              x="178"
              y="320"
              width="44"
              height="85"
              rx="8"
              fill="none"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('core-cylinder')
                  ? '#f59e0b'
                  : '#475569'
              }
              strokeDasharray="4 2"
              strokeWidth={isLayerActive('core-cylinder') ? 2.5 : 1.5}
            />

            {/* Diaphragm Dome */}
            <path
              d="M 172 310 Q 200 290 228 310"
              fill="none"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('core-cylinder')
                  ? '#f59e0b'
                  : '#475569'
              }
              strokeWidth={isLayerActive('core-cylinder') ? 3 : 2}
            />

            {/* Thoracic Spine & Ribcage */}
            <path
              d="M 155 240 Q 200 215 245 240"
              fill="none"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('upper-carriage')
                  ? '#8b5cf6'
                  : '#475569'
              }
              strokeWidth={isLayerActive('upper-carriage') ? 2.5 : 1.5}
            />
            {/* Clavicles */}
            <line
              x1="165"
              y1="220"
              x2="235"
              y2="220"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('upper-carriage')
                  ? '#8b5cf6'
                  : '#475569'
              }
              strokeWidth={isLayerActive('upper-carriage') ? 3 : 2}
            />

            {/* Cervical Spine (Neck) */}
            <line
              x1="200"
              y1="190"
              x2="200"
              y2="130"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('upper-carriage')
                  ? '#8b5cf6'
                  : '#475569'
              }
              strokeWidth={isLayerActive('upper-carriage') ? 3 : 2}
            />

            {/* Cranium / Head */}
            <circle
              cx="200"
              cy="85"
              r="24"
              fill="none"
              stroke={
                showDysfunctionChain
                  ? '#f43f5e'
                  : isLayerActive('mind-presence')
                  ? '#ec4899'
                  : '#475569'
              }
              strokeWidth={isLayerActive('mind-presence') ? 3 : 2}
            />

            {/* Gaze Horizon Arrow */}
            <line
              x1="200"
              y1="85"
              x2="255"
              y2="85"
              stroke={isLayerActive('mind-presence') ? '#ec4899' : '#475569'}
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <polygon
              points="255,81 262,85 255,89"
              fill={isLayerActive('mind-presence') ? '#ec4899' : '#475569'}
            />
          </g>

          {/* Dynamic Animated Kinetic Force Flow (Ground Up) */}
          {!showDysfunctionChain && (
            <path
              d="M 160 740 L 165 690 L 175 520 L 180 430 L 200 410 L 200 350 L 200 260 L 200 140 L 200 85"
              fill="none"
              stroke={getLayerColor(activeLayerId)}
              strokeWidth="2.5"
              className="animate-flow-up opacity-80"
            />
          )}

          {/* Dysfunction Collapse Red Wave */}
          {showDysfunctionChain && (
            <path
              d="M 155 750 Q 185 710 160 680 T 190 530 T 170 420 T 215 340 T 180 230 T 215 130 T 190 85"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3.5"
              className="animate-flow-up"
            />
          )}

          {/* Articulation Nodes (Interactive Hotspots) */}
          {KINETIC_NODES.map((node) => {
            const isNodeActiveLayer = node.layerId === activeLayerId;
            const nodeColor = getLayerColor(node.layerId);

            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => onSelectLayer(node.layerId)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Pulse halo if in active layer */}
                {isNodeActiveLayer && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="12"
                    fill={nodeColor}
                    fillOpacity="0.25"
                    className="animate-ping"
                  />
                )}

                {/* Node Outer Ring */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isNodeActiveLayer ? 7 : 4}
                  fill="#0b0f17"
                  stroke={isNodeActiveLayer ? nodeColor : '#64748b'}
                  strokeWidth={isNodeActiveLayer ? 2.5 : 1.5}
                  className="transition-all duration-200 group-hover:scale-125"
                />

                {/* Node Inner Core */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isNodeActiveLayer ? 3.5 : 2}
                  fill={isNodeActiveLayer ? nodeColor : '#94a3b8'}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip for Hovered Node */}
        {hoveredNode && (
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-700/80 p-2.5 rounded-lg text-xs shadow-xl backdrop-blur-md pointer-events-none transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-slate-200">
                {hoveredNode.name}
              </span>
              <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                {hoveredNode.layerId}
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-tight">
              {hoveredNode.description}
            </p>
          </div>
        )}
      </div>

      {/* Footer Instructions */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Click any layer or node to inspect</span>
        <span className="font-mono text-emerald-400">
          {activeLayer.romanNumeral} / 05 ACTIVE
        </span>
      </div>
    </div>
  );
}
