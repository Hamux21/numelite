import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_STATS } from '../data/numeliteData';

interface HeroProps {
  onDiscoverClick: () => void;
  onContactClick: () => void;
  onOpenSovereignModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscoverClick,
  onContactClick,
  onOpenSovereignModal,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#FAF9F7]">
      {/* Subtle institutional parchment watermark/grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B2545 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial & Sovereign Authority (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545]/5 border border-[#0B2545]/10 rounded w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D4A017] shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.08em] text-[#0B2545] uppercase font-sans">
                Stratégie & Transformation Numérique
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B2545] leading-[1.14] tracking-[-0.02em] text-balance">
              Au service des institutions, entreprises et partenaires au développement
            </h1>

            {/* Explanatory Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#334E68] leading-relaxed max-w-2xl">
              Un cabinet de conseil au service des institutions, entreprises et partenaires au développement, porté par une expertise de terrain en télécommunications, économie numérique et statistiques publiques.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDiscoverClick}
                className="px-6 py-3.5 text-xs font-semibold tracking-wide uppercase text-[#0B2545] bg-[#F6BE39] hover:bg-[#E5AC25] rounded transition-all duration-150 shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer active:translate-y-px"
              >
                <span>Découvrir nos expertises</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#001026] hover:bg-[#0B2545] border border-[#001026] hover:border-[#1E3A5F] rounded transition-all duration-150 flex items-center gap-2 cursor-pointer active:translate-y-px"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats row: exactly as in screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#0B2545]/10">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <span className="font-sans text-xl sm:text-2xl font-bold text-[#0B2545] tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[12px] font-semibold text-[#1E3A5F] leading-tight">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#74777F] leading-snug">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Sovereign Institutional Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#001026] text-white rounded-lg p-6 sm:p-8 border border-[#1E3A5F]/60 shadow-xl relative overflow-hidden group">
              
              {/* Subtle architectural gold linear accents */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent opacity-80" />
              
              {/* Card Header */}
              <div className="flex items-start justify-between pb-6 border-b border-[#1E3A5F]/60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B2545] border border-[#D4A017]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#F6BE39]" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-bold tracking-[0.1em] text-[#F6BE39] uppercase block">
                      Souveraineté Numérique
                    </span>
                    <h2 className="text-xs font-semibold text-white/95">
                      Chambre Stratégique & Réformes
                    </h2>
                  </div>
                </div>

                <div className="border border-[#D4A017]/30 bg-[#0B2545]/60 px-2 py-1 rounded text-right">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-mono">NIF</span>
                  <span className="text-[11px] font-bold font-mono text-[#F6BE39] tracking-wider">119354</span>
                </div>
              </div>

              {/* Center Emblem Visual */}
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-5 relative flex items-center justify-center">
                  {/* Glowing subtle ring */}
                  <div className="absolute inset-0 bg-[#D4A017]/10 rounded-full blur-md" />
                  
                  {/* 3D Geometric Gold Wireframe Diamond SVG */}
                  <svg className="w-20 h-20 text-[#F6BE39] drop-shadow-[0_2px_10px_rgba(246,190,57,0.3)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                    {/* Outer Diamond */}
                    <polygon points="50,6 94,50 50,94 6,50" stroke="#F6BE39" strokeWidth="2.5" fill="rgba(11, 37, 69, 0.4)" />
                    {/* Inner Diamond */}
                    <polygon points="50,22 78,50 50,78 22,50" stroke="#FFDF85" strokeWidth="1.8" fill="rgba(212, 160, 23, 0.15)" />
                    {/* Center Core */}
                    <polygon points="50,36 64,50 50,64 36,50" stroke="#F6BE39" strokeWidth="1.5" fill="#001026" />
                    {/* Crosshair axes */}
                    <line x1="50" y1="6" x2="50" y2="94" stroke="#D4A017" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="6" y1="50" x2="94" y2="50" stroke="#D4A017" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  </svg>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  Cabinet Numelite Conseil
                </h3>
                <p className="text-[12px] text-slate-300 font-sans tracking-wide">
                  Ancrage institutionnel souverain • Siège officiel Niamey, Niger
                </p>
              </div>

              {/* Institutional Parameters Matrix */}
              <div className="bg-[#0B2545]/70 rounded border border-[#1E3A5F] divide-y divide-[#1E3A5F]/60 text-xs">
                <div className="grid grid-cols-12 px-3.5 py-2.5 items-center">
                  <span className="col-span-5 text-slate-400 font-medium">Rayonnement</span>
                  <span className="col-span-7 font-semibold text-slate-100 text-right">Afrique de l'Ouest & Sahel</span>
                </div>
                <div className="grid grid-cols-12 px-3.5 py-2.5 items-center">
                  <span className="col-span-5 text-slate-400 font-medium">Méthodologie</span>
                  <span className="col-span-7 font-semibold text-[#F6BE39] text-right">GAR & Budget-Programme</span>
                </div>
                <div className="grid grid-cols-12 px-3.5 py-2.5 items-center">
                  <span className="col-span-5 text-slate-400 font-medium">Cadre Opérationnel</span>
                  <span className="col-span-7 font-semibold text-slate-100 text-right">Télécoms, Données & E-Gouv</span>
                </div>
              </div>

              {/* Verification button / click */}
              {onOpenSovereignModal && (
                <button
                  onClick={onOpenSovereignModal}
                  className="w-full mt-4 py-2 px-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded text-[11px] font-medium transition-colors border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Consulter le statut d'agrément régalien</span>
                  <ArrowRight className="w-3 h-3 text-[#F6BE39]" />
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
