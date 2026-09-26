import React from 'react';
import { CheckCircle2, Printer, X, Download, ShieldCheck, Mail, Building2 } from 'lucide-react';
import { ConsultationRequest } from '../types';
import { INSTITUTIONAL_CREDENTIALS } from '../data/numeliteData';

interface SuccessReceiptModalProps {
  receipt: ConsultationRequest | null;
  onClose: () => void;
}

export const SuccessReceiptModal: React.FC<SuccessReceiptModalProps> = ({
  receipt,
  onClose,
}) => {
  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001026]/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-[#0B2545]/20 overflow-hidden my-8">
        
        {/* Top diplomatic banner */}
        <div className="bg-[#001026] text-white p-6 relative border-b border-[#D4A017]/40">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#0B2545] border border-[#D4A017]/60 flex items-center justify-center text-[#F6BE39]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#F6BE39] uppercase font-sans block">
                Récépissé Officiel d'Enregistrement
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Chancellerie Numelite Conseil
              </h3>
            </div>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-6 sm:p-8 space-y-6 print:p-0">
          
          <div className="bg-[#FAF9F7] border border-[#0B2545]/15 rounded p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#795900] block">
                Numéro d'Ordre & Réf. Unique
              </span>
              <span className="font-mono text-base font-bold text-[#0B2545] tracking-wider">
                {receipt.referenceCode}
              </span>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#74777F] block">
                Date & Heure d'Enregistrement
              </span>
              <span className="text-xs text-[#1A1C1B] font-medium">
                {receipt.submissionDate}
              </span>
            </div>
          </div>

          {/* Institutional Applicant Box */}
          <div className="border border-[#0B2545]/10 rounded divide-y divide-[#0B2545]/10 text-xs">
            <div className="grid grid-cols-12 p-3 bg-white">
              <span className="col-span-4 font-semibold text-[#74777F]">Demandeur officiel :</span>
              <span className="col-span-8 font-bold text-[#0B2545]">{receipt.fullName}</span>
            </div>
            <div className="grid grid-cols-12 p-3 bg-[#FAF9F7]">
              <span className="col-span-4 font-semibold text-[#74777F]">Institution / Organisme :</span>
              <span className="col-span-8 font-medium text-[#1A1C1B]">{receipt.institution}</span>
            </div>
            <div className="grid grid-cols-12 p-3 bg-white">
              <span className="col-span-4 font-semibold text-[#74777F]">Chancellerie électronique :</span>
              <span className="col-span-8 font-mono text-[#0B2545]">{receipt.email}</span>
            </div>
            <div className="grid grid-cols-12 p-3 bg-[#FAF9F7]">
              <span className="col-span-4 font-semibold text-[#74777F]">Ligne directe :</span>
              <span className="col-span-8 font-mono text-[#1A1C1B]">{receipt.phone}</span>
            </div>
            <div className="grid grid-cols-12 p-3 bg-white">
              <span className="col-span-4 font-semibold text-[#74777F]">Domaine sollicité :</span>
              <span className="col-span-8 font-bold text-[#795900]">{receipt.primaryAxis}</span>
            </div>
            {receipt.notes && (
              <div className="grid grid-cols-12 p-3 bg-[#FAF9F7]">
                <span className="col-span-4 font-semibold text-[#74777F]">Synthèse des besoins :</span>
                <span className="col-span-8 text-[#44474E] italic leading-relaxed">
                  "{receipt.notes}"
                </span>
              </div>
            )}
          </div>

          {/* Assurance statement */}
          <div className="p-4 bg-[#F4F3F1] border-l-3 border-[#D4A017] rounded-r text-xs text-[#334E68] space-y-1">
            <p className="font-semibold text-[#0B2545]">
              Instruction statutaire engagée :
            </p>
            <p>
              Votre demande a été directement transmise à la Direction des Programmes Sectoriels et au Bureau de Liaison de Niamey. Un accusé de réception formel doublé d'une première note de cadrage vous sera adressé sous 48 heures ouvrées.
            </p>
          </div>

          {/* Legal references */}
          <div className="text-[11px] text-[#74777F] flex items-center justify-between border-t border-[#0B2545]/10 pt-4 font-mono">
            <span>Cabinet Numelite Conseil • NIF {INSTITUTIONAL_CREDENTIALS.nif}</span>
            <span>Niamey, République du Niger</span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-[#FAF9F7] border-t border-[#0B2545]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0B2545] border border-[#0B2545]/20 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#D4A017]" />
            <span>Imprimer le récépissé</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#001026] hover:bg-[#0B2545] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Fermer le récépissé
          </button>
        </div>

      </div>
    </div>
  );
};
