/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DomainsSection } from './components/DomainsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AxisDetailModal } from './components/AxisDetailModal';
import { SuccessReceiptModal } from './components/SuccessReceiptModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { MethodologyScreen } from './components/MethodologyScreen';
import { InstitutionScreen } from './components/InstitutionScreen';
import { SimulationTool } from './components/SimulationTool';
import { AllDomainsScreen } from './components/AllDomainsScreen';
import { InterventionAxis, ConsultationRequest } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<
    'home' | 'domains' | 'methodology' | 'institution' | 'contact' | 'simulator'
  >('home');

  const [selectedAxisModal, setSelectedAxisModal] = useState<InterventionAxis | null>(null);
  const [submissionReceipt, setSubmissionReceipt] = useState<ConsultationRequest | null>(null);
  const [preselectedContactAxis, setPreselectedContactAxis] = useState<string | undefined>(undefined);
  const [simulatorInitialAxisId, setSimulatorInitialAxisId] = useState<string | undefined>(undefined);

  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Navigation handlers
  const handleScrollToSection = (sectionId: string) => {
    setActiveScreen('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleConsultClick = () => {
    handleScrollToSection('contact-section');
  };

  const handleSelectAxis = (axis: InterventionAxis) => {
    setSelectedAxisModal(axis);
  };

  const handleSelectForConsultation = (axisTitle: string) => {
    setSelectedAxisModal(null);
    setPreselectedContactAxis(axisTitle);
    handleScrollToSection('contact-section');
  };

  const handleSelectForSimulator = (axisId: string) => {
    setSelectedAxisModal(null);
    setSimulatorInitialAxisId(axisId);
    setActiveScreen('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSimulatorTransferToConsultation = (summaryNotes: string, primaryAxis: string) => {
    setActiveScreen('home');
    setPreselectedContactAxis(primaryAxis);
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Populate textarea if present
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.value = summaryNotes;
      }
    }, 120);
  };

  const handleOpenLegalModal = (title: string, content: string) => {
    setLegalModalState({
      isOpen: true,
      title,
      content,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#1A1C1B] flex flex-col font-sans selection:bg-[#F6BE39]/30 selection:text-[#001026]">
      
      {/* Top Banner Navigation Bar */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onConsultClick={handleConsultClick}
      />

      {/* Screen Routing Switcher Bar */}
      <div className="bg-[#FAF9F7] border-b border-[#0B2545]/8 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0 py-0.5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] mr-2 hidden sm:inline">
              Vues & Modules :
            </span>
            <button
              onClick={() => setActiveScreen('home')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeScreen === 'home'
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#334E68] hover:bg-[#FAF9F7] border border-[#0B2545]/10'
              }`}
            >
              Portail Général (Accueil)
            </button>
            <button
              onClick={() => setActiveScreen('domains')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeScreen === 'domains'
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#334E68] hover:bg-[#FAF9F7] border border-[#0B2545]/10'
              }`}
            >
              8 Domaines d'Intervention
            </button>
            <button
              onClick={() => setActiveScreen('methodology')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeScreen === 'methodology'
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#334E68] hover:bg-[#FAF9F7] border border-[#0B2545]/10'
              }`}
            >
              Méthodologie GAR
            </button>
            <button
              onClick={() => setActiveScreen('institution')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeScreen === 'institution'
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#334E68] hover:bg-[#FAF9F7] border border-[#0B2545]/10'
              }`}
            >
              Institution & Souveraineté
            </button>
            <button
              onClick={() => setActiveScreen('simulator')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeScreen === 'simulator'
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-white text-[#334E68] hover:bg-[#FAF9F7] border border-[#0B2545]/10'
              }`}
            >
              Simulateur TDR
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-[#74777F] shrink-0 font-mono">
            <span>Région Sahel • NIF 119354</span>
          </div>
        </div>
      </div>

      {/* Main Content Render */}
      <main className="flex-1">
        {activeScreen === 'home' && (
          <>
            {/* Exact hero section from screenshot */}
            <Hero
              onDiscoverClick={() => {
                const el = document.getElementById('domaines-intervention');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onContactClick={handleConsultClick}
              onOpenSovereignModal={() =>
                handleOpenLegalModal(
                  "Agrément & Immatriculation Statutaire",
                  "Numelite Conseil est officiellement enregistré auprès des autorités compétentes sous le Numéro d'Identification Fiscale (NIF) 119354 avec siège établi à Niamey, République du Niger. Le cabinet dispose de l'ensemble des prérogatives statutaires pour exécuter des missions d'assistance technique de haut niveau, de maîtrise d'ouvrage déléguée et d'audit pour l'administration publique et les bailleurs multilatéraux."
                )
              }
            />

            {/* Qui sommes-nous */}
            <AboutSection
              onLearnMore={() => {
                setActiveScreen('institution');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Nos domaines d'intervention */}
            <DomainsSection
              onSelectAxis={handleSelectAxis}
              onExploreAll={() => {
                setActiveScreen('domains');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Pourquoi nous choisir */}
            <WhyChooseUs />

            {/* Engagez la transformation numérique */}
            <ContactSection
              onSubmitSuccess={(receipt) => setSubmissionReceipt(receipt)}
              preselectedAxis={preselectedContactAxis}
            />
          </>
        )}

        {activeScreen === 'domains' && (
          <AllDomainsScreen
            onSelectAxis={handleSelectAxis}
            onConsultAxis={(axisTitle) => {
              handleSelectForConsultation(axisTitle);
            }}
            onOpenSimulatorForAxis={(axisId) => {
              handleSelectForSimulator(axisId);
            }}
          />
        )}

        {activeScreen === 'methodology' && (
          <MethodologyScreen
            onStartConsultation={handleConsultClick}
            onOpenSimulator={() => {
              setActiveScreen('simulator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'institution' && (
          <InstitutionScreen onStartConsultation={handleConsultClick} />
        )}

        {activeScreen === 'simulator' && (
          <SimulationTool
            initialSelectedAxisId={simulatorInitialAxisId}
            onSendToConsultation={handleSimulatorTransferToConsultation}
          />
        )}

        {activeScreen === 'contact' && (
          <div className="pt-4">
            <ContactSection
              onSubmitSuccess={(receipt) => setSubmissionReceipt(receipt)}
              preselectedAxis={preselectedContactAxis}
            />
          </div>
        )}
      </main>

      {/* Global Institutional Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Interactive Modals */}
      <AxisDetailModal
        axis={selectedAxisModal}
        onClose={() => setSelectedAxisModal(null)}
        onSelectForConsultation={handleSelectForConsultation}
        onSelectForSimulator={handleSelectForSimulator}
      />

      <SuccessReceiptModal
        receipt={submissionReceipt}
        onClose={() => setSubmissionReceipt(null)}
      />

      <LegalNoticeModal
        isOpen={legalModalState.isOpen}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
        title={legalModalState.title}
        content={legalModalState.content}
      />

    </div>
  );
}
