import React from 'react';
import { Landmark, BarChart3, Compass, CheckCircle2 } from 'lucide-react';
import boardroomImg from '../assets/images/cabinet_meeting_boardroom_1790404121799.jpg';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="qui-sommes-nous" className="py-16 md:py-24 bg-[#FAF9F7] border-t border-[#0B2545]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* LEFT: Meeting Photography & Executive Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Image container */}
            <div className="relative rounded-lg overflow-hidden border border-[#0B2545]/15 shadow-md bg-[#0B2545]/5 aspect-[4/3] group">
              <img
                src={boardroomImg}
                alt="Comité stratégique et délibération de haut niveau - Numelite Conseil"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for badge readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Badge: MISSION SOUVERAINE • SAHEL & CEDEAO */}
              <div className="absolute bottom-3 left-3 bg-[#001026]/90 backdrop-blur-xs text-white border border-[#D4A017]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-md">
                <Compass className="w-3.5 h-3.5 text-[#F6BE39]" />
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-white/95 font-sans">
                  Mission Souveraine • Sahel & CEDEAO
                </span>
              </div>
            </div>

            {/* Quotation card underneath */}
            <div className="bg-[#EFEEEC] border-l-3 border-[#D4A017] p-5 rounded-r-lg relative">
              <span className="text-3xl font-serif text-[#D4A017] leading-none absolute -top-1 left-2 select-none opacity-40">
                “
              </span>
              <p className="font-serif italic text-sm md:text-base text-[#1A1C1B] leading-relaxed pl-3">
                Conduire la transformation avec la rigueur des statistiques probantes et l'exigence des hauts standards d'État.
              </p>
            </div>

          </div>

          {/* RIGHT: Narrative & 2 Pillar Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Section kicker */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A017]" />
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#795900] uppercase font-sans">
                Institution & Expertise
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-[-0.015em]">
              Qui sommes-nous
            </h2>

            {/* Main Narrative */}
            <p className="text-base sm:text-[17px] text-[#334E68] leading-relaxed">
              Numelite Conseil accompagne les institutions publiques, les entreprises et les partenaires techniques et financiers dans la conception et la mise en œuvre de leurs stratégies numériques. Le cabinet s'appuie sur une expérience institutionnelle solide : direction de programmes d'économie numérique, conduite d'enquêtes statistiques nationales sur les TIC, et pilotage de projets de gouvernance numérique en Afrique de l'Ouest.
            </p>

            {/* Two Structural Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Card 1: Haute Administration */}
              <div className="bg-white border border-[#0B2545]/12 rounded-lg p-5 hover:border-[#0B2545]/30 transition-all hover:shadow-xs flex flex-col space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#0B2545]">
                  <div className="w-8 h-8 rounded bg-[#0B2545]/5 flex items-center justify-center text-[#0B2545]">
                    <Landmark className="w-4 h-4 text-[#0B2545]" />
                  </div>
                  <h3 className="font-sans text-sm font-bold text-[#0B2545]">
                    Haute Administration
                  </h3>
                </div>
                <p className="text-xs text-[#44474E] leading-relaxed">
                  Connaissance aiguë des schémas directeurs ministériels, des mécanismes budgétaires et de l'appareil d'État.
                </p>
              </div>

              {/* Card 2: Données Probantes */}
              <div className="bg-white border border-[#0B2545]/12 rounded-lg p-5 hover:border-[#0B2545]/30 transition-all hover:shadow-xs flex flex-col space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#0B2545]">
                  <div className="w-8 h-8 rounded bg-[#D4A017]/10 flex items-center justify-center text-[#795900]">
                    <BarChart3 className="w-4 h-4 text-[#795900]" />
                  </div>
                  <h3 className="font-sans text-sm font-bold text-[#0B2545]">
                    Données Probantes
                  </h3>
                </div>
                <p className="text-xs text-[#44474E] leading-relaxed">
                  Pilotage empirique et mesure d'impact fondée sur les standards statistiques internationaux (UIT, CNUCED).
                </p>
              </div>

            </div>

            {/* Quick trust metrics line */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#334E68]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Membre des réseaux d'experts TIC CEDEAO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Interventions conformes directives UEMOA</span>
              </div>
              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="text-xs font-semibold text-[#0B2545] hover:text-[#795900] underline ml-auto cursor-pointer"
                >
                  Voir notre gouvernance institutionnelle →
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
