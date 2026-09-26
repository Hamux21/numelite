import React from 'react';
import {
  Cpu,
  Radio,
  BarChart3,
  Lightbulb,
  GraduationCap,
  Crosshair,
  FileSpreadsheet,
  Globe2,
  ArrowRight
} from 'lucide-react';
import { INTERVENTION_AXES } from '../data/numeliteData';
import { InterventionAxis } from '../types';

interface DomainsSectionProps {
  onSelectAxis: (axis: InterventionAxis) => void;
  onExploreAll?: () => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({
  onSelectAxis,
  onExploreAll,
}) => {
  // Map icon strings to Lucide components
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#795900]" };
    switch (iconName) {
      case 'Cpu': return <Cpu {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Crosshair': return <Crosshair {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'Globe2': return <Globe2 {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="domaines-intervention" className="py-16 md:py-24 bg-[#FAF9F7] border-t border-[#0B2545]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Portfolio d'Excellence
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
            Nos domaines d'intervention
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#334E68] mt-3 leading-relaxed">
            Huit piliers d'intervention stratégique et opérationnelle calibrés pour répondre aux impératifs d'efficacité, de pérennité et de modernisation.
          </p>
        </div>

        {/* 8-Card Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERVENTION_AXES.map((axis) => (
            <div
              key={axis.id}
              onClick={() => onSelectAxis(axis)}
              className="bg-white border border-[#0B2545]/10 hover:border-[#D4A017] rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md group cursor-pointer relative"
            >
              {/* Top Row: Icon + AXE number */}
              <div className="space-y-4">
                <div className="w-10 h-10 rounded bg-[#F4F3F1] group-hover:bg-[#F6BE39]/20 transition-colors flex items-center justify-center">
                  {renderIcon(axis.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-bold tracking-[0.08em] text-[#795900] font-sans block mb-1">
                    {axis.axeNumber}
                  </span>
                  <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#0B2545] leading-snug group-hover:text-[#001026] transition-colors">
                    {axis.title}
                  </h3>
                </div>

                <p className="text-xs text-[#44474E] leading-relaxed line-clamp-3">
                  {axis.summary}
                </p>
              </div>

              {/* Bottom tag & action hint */}
              <div className="pt-6 mt-6 border-t border-[#0B2545]/10 flex items-center justify-between">
                <span className="text-[9.5px] font-bold tracking-[0.08em] text-[#74777F] group-hover:text-[#0B2545] uppercase font-sans truncate">
                  {axis.tag}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner with Quick CTA to Full Dossiers or Simulator */}
        <div className="mt-12 p-6 bg-[#001026] rounded-lg text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#1E3A5F]">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-white">
              Besoin d'un cadrage technique sur-mesure pour votre ministère ou agence ?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Consultez les livrables détaillés, les cadres de conformité UIT et nos modèles de TDR.
            </p>
          </div>
          {onExploreAll && (
            <button
              onClick={onExploreAll}
              className="px-4 py-2.5 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#001026] rounded text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explorer les 8 dossiers complets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
