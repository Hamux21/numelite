import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeScreen: 'home' | 'domains' | 'methodology' | 'institution' | 'contact' | 'simulator';
  setActiveScreen: (screen: 'home' | 'domains' | 'methodology' | 'institution' | 'contact' | 'simulator') => void;
  onConsultClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onConsultClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (screen: 'home' | 'domains' | 'methodology' | 'institution' | 'contact' | 'simulator', sectionId?: string) => {
    setActiveScreen(screen);
    setIsMobileMenuOpen(false);
    if (sectionId && screen === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#0B2545]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ZONE 1: BRAND LOGO */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded"
          >
            {/* Geometric Diamond Emblem SVG */}
            <div className="w-10 h-10 bg-[#0B2545] rounded flex items-center justify-center shadow-xs border border-[#D4A017]/30 shrink-0">
              <svg className="w-6 h-6 text-[#F6BE39]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
                <path d="M12 6L6 12l6 6 6-6-6-6z" />
                <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1" strokeDasharray="1 2" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-[#0B2545] leading-tight">
                NUMELITE
              </span>
              <span className="text-[9.5px] font-semibold tracking-[0.22em] text-[#795900] uppercase font-sans">
                Conseil & Stratégie
              </span>
            </div>
          </button>

          {/* ZONE 2: NAVIGATION LINKS (4-6 links) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium text-[#1E3A5F]">
            <button
              onClick={() => handleNavClick('institution', 'qui-sommes-nous')}
              className={`transition-colors hover:text-[#0B2545] relative py-1 ${activeScreen === 'institution' ? 'text-[#0B2545] font-semibold' : ''}`}
            >
              À propos
              {activeScreen === 'institution' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A017]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('domains', 'domaines-intervention')}
              className={`transition-colors hover:text-[#0B2545] relative py-1 ${activeScreen === 'domains' ? 'text-[#0B2545] font-semibold' : ''}`}
            >
              Domaines d'intervention
              {activeScreen === 'domains' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A017]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('home', 'pourquoi-nous-choisir')}
              className="transition-colors hover:text-[#0B2545] relative py-1"
            >
              Atouts
            </button>

            <button
              onClick={() => handleNavClick('methodology')}
              className={`transition-colors hover:text-[#0B2545] relative py-1 ${activeScreen === 'methodology' ? 'text-[#0B2545] font-semibold' : ''}`}
            >
              Méthodologie
              {activeScreen === 'methodology' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A017]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('simulator')}
              className={`transition-colors hover:text-[#0B2545] relative py-1 flex items-center gap-1 ${activeScreen === 'simulator' ? 'text-[#0B2545] font-semibold' : ''}`}
            >
              Cadrage TDR
              <span className="text-[10px] bg-[#0B2545]/10 text-[#0B2545] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Outil</span>
            </button>

            <button
              onClick={() => handleNavClick('contact', 'contact-section')}
              className={`transition-colors hover:text-[#0B2545] relative py-1 ${activeScreen === 'contact' ? 'text-[#0B2545] font-semibold' : ''}`}
            >
              Contact
              {activeScreen === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4A017]" />
              )}
            </button>
          </nav>

          {/* ZONE 3: PRIMARY ACTION */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onConsultClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#0B2545] bg-[#F6BE39] hover:bg-[#E5AC25] rounded transition-all duration-150 shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer active:translate-y-px"
            >
              <span>Nous consulter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0B2545] hover:bg-[#0B2545]/5 rounded-md focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F7] border-b border-[#0B2545]/15 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#0B2545]">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded"
            >
              Accueil
            </button>
            <button
              onClick={() => handleNavClick('institution', 'qui-sommes-nous')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded"
            >
              À propos & Institution
            </button>
            <button
              onClick={() => handleNavClick('domains', 'domaines-intervention')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded"
            >
              Domaines d'intervention (8 Axes)
            </button>
            <button
              onClick={() => handleNavClick('methodology')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded"
            >
              Méthodologie GAR & Budget-Programme
            </button>
            <button
              onClick={() => handleNavClick('simulator')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded flex items-center justify-between"
            >
              <span>Simulateur de Cadrage TDR</span>
              <span className="text-[10px] bg-[#D4A017]/20 text-[#795900] px-2 py-0.5 rounded font-bold">Outil d'État</span>
            </button>
            <button
              onClick={() => handleNavClick('contact', 'contact-section')}
              className="text-left py-2 px-3 hover:bg-[#0B2545]/5 rounded"
            >
              Chancellerie & Contact
            </button>
          </div>

          <div className="pt-2 border-t border-[#0B2545]/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onConsultClick();
              }}
              className="w-full py-2.5 text-xs font-semibold tracking-wide uppercase text-[#0B2545] bg-[#F6BE39] hover:bg-[#E5AC25] rounded text-center block"
            >
              Nous consulter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
