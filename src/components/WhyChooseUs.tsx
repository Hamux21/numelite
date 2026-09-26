import React from 'react';
import { ShieldCheck, Network, Globe, LineChart } from 'lucide-react';
import { WHY_CHOOSE_US_PILLARS } from '../data/numeliteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'LineChart': return <LineChart {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="pourquoi-nous-choisir" className="py-16 md:py-24 bg-[#FAF9F7] border-t border-[#0B2545]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Distinction Stratégique
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
            Pourquoi nous choisir
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#334E68] mt-3 leading-relaxed">
            Quatre atouts différentiateurs majeurs qui font de Numelite Conseil l'interlocuteur de premier choix pour les programmes à fort enjeu.
          </p>
        </div>

        {/* 2x2 Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_CHOOSE_US_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-[#0B2545]/10 rounded-lg p-6 sm:p-8 hover:border-[#0B2545]/30 transition-all hover:shadow-sm flex items-start gap-5 group"
            >
              {/* Dark Navy Square Icon Box */}
              <div className="w-12 h-12 rounded bg-[#001026] group-hover:bg-[#0B2545] border border-[#1E3A5F] flex items-center justify-center shrink-0 transition-colors shadow-xs">
                {getIcon(pillar.icon)}
              </div>

              {/* Text content */}
              <div className="flex-1 space-y-2">
                <h3 className="font-sans text-base sm:text-[17px] font-bold text-[#0B2545] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#44474E] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Detailed points */}
                <div className="pt-2 space-y-1.5">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11.5px] text-[#334E68]">
                      <span className="text-[#D4A017] font-bold text-xs leading-none mt-0.5">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
