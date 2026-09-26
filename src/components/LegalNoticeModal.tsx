import React from 'react';
import { X, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { INSTITUTIONAL_CREDENTIALS } from '../data/numeliteData';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001026]/75 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full border border-[#0B2545]/20 overflow-hidden">
        <div className="bg-[#001026] text-white p-5 flex items-center justify-between border-b border-[#1E3A5F]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F6BE39]" />
            <h3 className="font-serif text-lg font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#334E68] leading-relaxed">
          <div className="bg-[#FAF9F7] p-3 rounded border border-[#0B2545]/10 font-mono text-[11px] space-y-1">
            <div className="flex justify-between">
              <span className="text-[#74777F]">Entité :</span>
              <span className="font-bold text-[#0B2545]">{INSTITUTIONAL_CREDENTIALS.denomination}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#74777F]">NIF Répertoire Officiel :</span>
              <span className="font-bold text-[#D4A017]">{INSTITUTIONAL_CREDENTIALS.nif}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#74777F]">Juridiction d'enregistrement :</span>
              <span className="text-[#0B2545]">{INSTITUTIONAL_CREDENTIALS.siege}</span>
            </div>
          </div>

          <p>{content}</p>

          <div className="pt-2 border-t border-[#0B2545]/10 space-y-1.5 text-[11px]">
            <div className="flex items-center gap-2 text-[#0B2545]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>Habilitation aux marchés publics et conventions multilatérales</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B2545]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>Sanctuarisation des données étatiques souveraines</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#FAF9F7] border-t border-[#0B2545]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0B2545] hover:bg-[#1E3A5F] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Compris
          </button>
        </div>
      </div>
    </div>
  );
};
