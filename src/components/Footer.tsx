import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { INSTITUTIONAL_CREDENTIALS } from '../data/numeliteData';

interface FooterProps {
  onNavigate: (screen: 'home' | 'domains' | 'methodology' | 'institution' | 'contact' | 'simulator') => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  return (
    <footer className="bg-[#000B1A] text-white border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E3A5F]/70">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#0B2545] rounded flex items-center justify-center border border-[#D4A017]/40 shadow-xs">
                <svg className="w-5 h-5 text-[#F6BE39]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  <path d="M12 6L6 12l6 6 6-6-6-6z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                NUMELITE CONSEIL
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Cabinet de conseil d'élite en Stratégie & Transformation Numérique. Partenaire souverain des institutions publiques, ministères et leaders industriels en Afrique de l'Ouest.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-wider text-[#F6BE39] uppercase font-sans block mb-0.5">
                Identité Légale & Récépissé
              </span>
              <span className="text-xs text-slate-300 font-mono">
                Numéro d'Identification Fiscale (NIF) : {INSTITUTIONAL_CREDENTIALS.nif}
              </span>
            </div>
          </div>

          {/* Orientation & Domaines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F6BE39] font-sans">
              Orientation & Domaines
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('domains')}
                  className="hover:text-white transition-colors text-left"
                >
                  Stratégies Numériques Nationales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domains')}
                  className="hover:text-white transition-colors text-left"
                >
                  Gouvernance des Systèmes d'Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domains')}
                  className="hover:text-white transition-colors text-left"
                >
                  Modernisation Administrative
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domains')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ingénierie de Déploiement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('domains')}
                  className="hover:text-white transition-colors text-left"
                >
                  Conduite du Changement
                </button>
              </li>
            </ul>
          </div>

          {/* Chancellerie & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#F6BE39] font-sans">
              Chancellerie & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F6BE39] shrink-0 mt-0.5" />
                <span>Siège : {INSTITUTIONAL_CREDENTIALS.siege}</span>
              </li>
              <li className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-[#F6BE39] shrink-0" />
                <span>{INSTITUTIONAL_CREDENTIALS.contacts.tel1} / {INSTITUTIONAL_CREDENTIALS.contacts.tel2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F6BE39] shrink-0" />
                <span>{INSTITUTIONAL_CREDENTIALS.contacts.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F6BE39] shrink-0 mt-0.5" />
                <span>{INSTITUTIONAL_CREDENTIALS.contacts.horaires}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 Numelite Conseil. Tous droits statutaires réservés. République du Niger.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal('Mentions Légales', 'Numelite Conseil est une entité agréée de conseil en stratégie numérique immatriculée sous le NIF 119354 à Niamey, République du Niger. Les missions d’audit et d’appui institutionnel s’exécutent sous le respect strict de la confidentialité étatique et des accords multilatéraux.')}
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </button>
            <button
              onClick={() => onOpenLegalModal('Confidentialité Souveraine', 'Numelite Conseil applique le protocole de confidentialité diplomatique de niveau régalien. Toute donnée collectée dans le cadre des missions d’assistance technique est sanctuarisée et reste la propriété exclusive de l’institution mandante.')}
              className="hover:text-white transition-colors"
            >
              Confidentialité
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Correspondance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
