import React, { useState } from 'react';
import {
  Cpu,
  Radio,
  BarChart3,
  Lightbulb,
  GraduationCap,
  Crosshair,
  FileSpreadsheet,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Filter,
  FileText,
  ShieldCheck,
  Building
} from 'lucide-react';
import { INTERVENTION_AXES } from '../data/numeliteData';
import { InterventionAxis } from '../types';

interface AllDomainsScreenProps {
  onSelectAxis: (axis: InterventionAxis) => void;
  onConsultAxis: (axisTitle: string) => void;
  onOpenSimulatorForAxis: (axisId: string) => void;
}

export const AllDomainsScreen: React.FC<AllDomainsScreenProps> = ({
  onSelectAxis,
  onConsultAxis,
  onOpenSimulatorForAxis,
}) => {
  const [filterTag, setFilterTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredAxes = INTERVENTION_AXES.filter((axis) => {
    const matchesFilter = filterTag === 'all' || axis.tag.includes(filterTag);
    const matchesSearch = axis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          axis.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          axis.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Dossiers Techniques des 8 Piliers
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B2545] tracking-tight">
            Portfolio Intégral d'Intervention
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#334E68] mt-3 leading-relaxed">
            Examinez en détail la doctrine d'action, les livrables contractuels types, les normes de conformité internationales et les cas d'usage réels pour chaque axe d'expertise.
          </p>
        </div>

        {/* Filter controls */}
        <div className="bg-white border border-[#0B2545]/10 rounded-lg p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          {/* Tag filters */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'Tous les 8 Axes' },
              { id: 'INSTITUTIONNELLE', label: 'Stratégie & E-Gouv' },
              { id: 'INFRASTRUCTURES', label: 'Infrastructures & Télécoms' },
              { id: 'MÉTROLOGIE', label: 'Statistiques & Données' },
              { id: 'PERFORMANCE', label: 'GAR & Budgets' },
              { id: 'DIPLOMATIE', label: 'Multilatéral & Bailleurs' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterTag(btn.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  filterTag === btn.id
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'bg-[#FAF9F7] text-[#334E68] hover:bg-[#FAF9F7] hover:text-[#0B2545] border border-[#0B2545]/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un mot-clé ou livrable..."
              className="w-full px-3 py-1.5 bg-[#FAF9F7] border border-[#0B2545]/15 rounded text-xs text-[#0B2545] placeholder-[#74777F] focus:outline-none focus:border-[#0B2545]"
            />
          </div>

        </div>

        {/* Grid of All 8 Axes with rich preview */}
        <div className="space-y-8">
          {filteredAxes.map((axis) => (
            <div
              key={axis.id}
              className="bg-white border border-[#0B2545]/15 rounded-lg p-6 sm:p-8 hover:border-[#D4A017] transition-all hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left col: Title, Tag, Summary (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#FAF9F7] border border-[#0B2545]/10 flex items-center justify-center">
                      {renderIcon(axis.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#795900] tracking-wider uppercase font-sans">
                        {axis.axeNumber}
                      </span>
                      <span className="text-[10px] text-[#74777F] uppercase tracking-wider block">
                        {axis.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2545] leading-snug">
                    {axis.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44474E] leading-relaxed">
                    {axis.scopeDescription}
                  </p>

                  <div className="pt-2 text-xs text-[#0B2545] font-mono bg-[#FAF9F7] p-2.5 rounded border border-[#0B2545]/10">
                    <span className="font-bold text-[#795900]">Référentiel : </span>
                    {axis.frameworkStandard}
                  </div>

                  <div className="pt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => onSelectAxis(axis)}
                      className="px-3.5 py-2 bg-white text-[#0B2545] border border-[#0B2545]/20 hover:border-[#0B2545] rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Dossier complet & TDR
                    </button>
                    <button
                      onClick={() => onConsultAxis(axis.title)}
                      className="px-4 py-2 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#0B2545] rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Solliciter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right col: Deliverables & Case Example (7 cols) */}
                <div className="lg:col-span-7 bg-[#FAF9F7] p-5 sm:p-6 rounded-lg border border-[#0B2545]/10 space-y-4">
                  
                  {/* Livrables */}
                  <div>
                    <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-[#0B2545] font-sans mb-2 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-[#D4A017]" />
                      <span>Livrables types contractuels</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A1C1B]">
                      {axis.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white p-2 rounded border border-[#0B2545]/10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
                          <span className="text-[11.5px]">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="pt-3 border-t border-[#0B2545]/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#795900] font-sans block mb-1">
                      Cas Réel de Référence
                    </span>
                    <div className="bg-white p-3 rounded border border-[#0B2545]/10 text-xs">
                      <div className="font-bold text-[#0B2545] mb-0.5">{axis.caseExample.title}</div>
                      <p className="text-[#44474E] text-[11.5px]">{axis.caseExample.context}</p>
                      <p className="text-[#0B2545] font-medium text-[11.5px] mt-1">
                        <span className="text-[#795900] font-bold">Résultat :</span> {axis.caseExample.impact}
                      </p>
                    </div>
                  </div>

                  {/* Stakeholders */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold text-[#74777F] mr-1">Cible :</span>
                    {axis.stakeholders.map((s, idx) => (
                      <span key={idx} className="text-[10.5px] bg-white px-2 py-0.5 rounded border border-[#0B2545]/15 text-[#334E68]">
                        {s}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
