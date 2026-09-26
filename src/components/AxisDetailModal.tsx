import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileText, Building2 } from 'lucide-react';
import { InterventionAxis } from '../types';

interface AxisDetailModalProps {
  axis: InterventionAxis | null;
  onClose: () => void;
  onSelectForConsultation: (axisTitle: string) => void;
  onSelectForSimulator: (axisId: string) => void;
}

export const AxisDetailModal: React.FC<AxisDetailModalProps> = ({
  axis,
  onClose,
  onSelectForConsultation,
  onSelectForSimulator,
}) => {
  if (!axis) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001026]/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-[#0B2545]/20 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header with Deep Navy background */}
        <div className="bg-[#001026] text-white p-6 relative border-b border-[#1E3A5F]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10.5px] font-bold tracking-[0.14em] text-[#F6BE39] uppercase font-sans">
              {axis.axeNumber}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-[10px] tracking-wider text-slate-300 uppercase">
              {axis.tag}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white leading-snug">
            {axis.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Scope description */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider uppercase text-[#0B2545] font-sans mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
              <span>Périmètre d'intervention institutionnelle</span>
            </h4>
            <p className="text-sm text-[#334E68] leading-relaxed bg-[#FAF9F7] p-4 rounded border border-[#0B2545]/10">
              {axis.scopeDescription}
            </p>
          </div>

          {/* Standard & Conformité */}
          <div className="flex items-center justify-between text-xs bg-[#0B2545]/5 px-4 py-2.5 rounded border border-[#0B2545]/10">
            <span className="font-medium text-[#74777F]">Référentiel international :</span>
            <span className="font-semibold text-[#0B2545] text-right">{axis.frameworkStandard}</span>
          </div>

          {/* Livrables types */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider uppercase text-[#0B2545] font-sans mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#D4A017]" />
              <span>Livrables contractuels types</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {axis.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1C1B] bg-white border border-[#0B2545]/10 p-3 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bénéficiaires & Institutions cibles */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider uppercase text-[#0B2545] font-sans mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#D4A017]" />
              <span>Parties prenantes & Organismes cibles</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {axis.stakeholders.map((sh, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#FAF9F7] border border-[#0B2545]/15 text-[#0B2545] px-2.5 py-1 rounded font-medium"
                >
                  {sh}
                </span>
              ))}
            </div>
          </div>

          {/* Cas d'usage type */}
          <div className="border-t border-[#0B2545]/10 pt-5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
              Référence représentative dans l'espace Sahel
            </span>
            <div className="bg-[#FAF9F7] border-l-3 border-[#D4A017] p-4 rounded-r">
              <h5 className="font-sans text-xs font-bold text-[#0B2545]">
                {axis.caseExample.title}
              </h5>
              <p className="text-xs text-[#44474E] mt-1">
                <span className="font-medium text-[#1A1C1B]">Contexte :</span> {axis.caseExample.context}
              </p>
              <p className="text-xs text-[#0B2545] font-medium mt-1">
                <span className="font-bold text-[#795900]">Impact mesurable :</span> {axis.caseExample.impact}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF9F7] border-t border-[#0B2545]/10 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectForSimulator(axis.id);
            }}
            className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0B2545] border border-[#0B2545]/20 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cadrer dans le simulateur TDR
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectForConsultation(axis.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#0B2545] rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Solliciter pour cet axe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
