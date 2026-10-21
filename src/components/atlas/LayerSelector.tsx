'use client';

import React from 'react';
import { LayerId } from '@/types/kinetic';
import { KINETIC_LAYERS } from '@/data/kinetic-chain';
import { Footprints, Compass, Shield, Layers, Zap } from 'lucide-react';

interface LayerSelectorProps {
  activeLayerId: LayerId;
  onSelectLayer: (layerId: LayerId) => void;
}

export function LayerSelector({
  activeLayerId,
  onSelectLayer,
}: LayerSelectorProps) {
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Footprints':
        return <Footprints className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex items-center justify-between gap-2 overflow-x-auto p-1.5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-md">
      {KINETIC_LAYERS.map((layer) => {
        const isActive = layer.id === activeLayerId;

        return (
          <button
            key={layer.id}
            onClick={() => onSelectLayer(layer.id)}
            className={`flex-1 min-w-[130px] flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-200 border ${
              isActive
                ? 'bg-slate-800 border-slate-600 shadow-lg text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-transform"
              style={{
                backgroundColor: isActive
                  ? `${layer.accentColor}20`
                  : '#1e293b',
                color: isActive ? layer.accentColor : '#94a3b8',
              }}
            >
              {getIcon(layer.iconName, 'w-4 h-4')}
            </div>

            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: isActive ? layer.accentColor : '#64748b' }}
                >
                  {layer.romanNumeral}
                </span>
                <span className="text-xs font-semibold truncate">
                  {layer.title.split('&')[0].trim()}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block truncate">
                {layer.subtitle.split(',')[0]}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
