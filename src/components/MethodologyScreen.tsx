import React from 'react';
import { CheckCircle2, Clock, FileSpreadsheet, ArrowRight, Shield, Layers, Target } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/numeliteData';
import telecomImg from '../assets/images/telecom_infrastructure_sahel_1790404134582.jpg';

interface MethodologyScreenProps {
  onStartConsultation: () => void;
  onOpenSimulator: () => void;
}

export const MethodologyScreen: React.FC<MethodologyScreenProps> = ({
  onStartConsultation,
  onOpenSimulator,
}) => {
  return (
    <div className="py-12 md:py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Doctrine & Rigueur Opérationnelle
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B2545] tracking-tight">
            Méthodologie GAR & Budget-Programme
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#334E68] mt-4 leading-relaxed">
            Une démarche régalienne éprouvée, fondée sur la Gestion Axée sur les Résultats (GAR), la métrologie statistique certifiée et la stricte conformité aux directives budgétaires régionales de l'UEMOA.
          </p>
        </div>

        {/* Hero split with infrastructure visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-white border border-[#0B2545]/10 rounded-lg p-6 sm:p-10 shadow-xs">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10.5px] font-bold tracking-wider uppercase text-[#795900] font-sans">
              Le Savoir-Faire Terrain
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545]">
              De l'infrastructure physique à la décision macro-stratégique
            </h2>
            <p className="text-sm text-[#44474E] leading-relaxed">
              Dans les pays du Sahel et de l'Afrique de l'Ouest, les réformes numériques échouent fréquemment lorsqu'il existe un fossé entre les ingénieurs réseaux et les planificateurs budgétaires. Numelite Conseil brise ce cloisonnement : chaque indicateur stratégique est directement corrélé à la réalité physique des infrastructures et à la capacité d'absorption des crédits ministériels.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#0B2545] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>Respect intégral du cycle d'ordonnancement en AE/CP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>Indicateurs de performance alignés sur les standards UIT et CNUCED</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>Audits indépendants et traçabilité fiduciaire totale</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#0B2545]/15 aspect-[16/9] shadow-md group">
              <img
                src={telecomImg}
                alt="Supervision des réseaux et infrastructures critiques au Sahel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/60 backdrop-blur-xs p-2.5 rounded border border-white/20">
                <span className="font-bold text-[#F6BE39] block text-[10px] uppercase font-mono tracking-wider">
                  Contrôle & Métrologie Télécoms
                </span>
                Supervision des dorsales fibre et réseaux métropolitains d'État
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Methodology Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Les 4 Phases Fondamentales de l'Intervention Numelite
            </h3>
            <p className="text-xs sm:text-sm text-[#44474E] mt-2">
              Un cycle rigoureux garantissant la livraison de réformes tangibles et auditables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0B2545]/10 rounded-lg p-6 flex flex-col justify-between hover:border-[#D4A017] transition-all hover:shadow-md relative"
              >
                {/* Step indicator */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#0B2545]/10 pb-3">
                    <span className="font-serif text-3xl font-bold text-[#D4A017]">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] font-bold text-[#1E3A5F] bg-[#FAF9F7] px-2 py-1 rounded border border-[#0B2545]/10 font-mono">
                      {stepItem.duration}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#0B2545] leading-snug">
                    {stepItem.title}
                  </h4>

                  <p className="text-xs text-[#44474E] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0B2545]/10 bg-[#FAF9F7] -mx-6 -mb-6 p-4 rounded-b-lg">
                  <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-0.5">
                    Livrable Clé Attendu
                  </span>
                  <p className="text-xs font-semibold text-[#0B2545] leading-tight">
                    {stepItem.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table: Approche Classique vs Approche Numelite */}
        <div className="bg-white border border-[#0B2545]/15 rounded-lg p-6 sm:p-10 shadow-xs mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
              Analyse Comparative
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
              Pourquoi la Gestion Axée Résultats transforme la performance publique
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b-2 border-[#0B2545]/20 text-[#0B2545]">
                  <th className="py-3 px-4 font-bold text-sm w-1/3">Critère d'Exécution</th>
                  <th className="py-3 px-4 font-semibold text-slate-500 w-1/3">Approche Administrative Classique</th>
                  <th className="py-3 px-4 font-bold text-[#0B2545] bg-[#F6BE39]/10 rounded-t w-1/3">Méthodologie Numelite GAR & Budget-Programme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B2545]/10">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0B2545]">Pilotage budgétaire</td>
                  <td className="py-3.5 px-4 text-slate-600">Budget traditionnel de moyens, reconduction automatique</td>
                  <td className="py-3.5 px-4 font-medium text-[#0B2545] bg-[#F6BE39]/5">Programmation en AE/CP avec objectifs mesurables et cibles d'impact</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0B2545]">Données & Métrologie</td>
                  <td className="py-3.5 px-4 text-slate-600">Estimations approximatives ou études obsolètes non normées</td>
                  <td className="py-3.5 px-4 font-medium text-[#0B2545] bg-[#F6BE39]/5">Enquêtes de terrain selon le cadre international UIT et CNUCED</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0B2545]">Passation des Marchés</td>
                  <td className="py-3.5 px-4 text-slate-600">Cahiers des charges vagues générant contentieux et retards</td>
                  <td className="py-3.5 px-4 font-medium text-[#0B2545] bg-[#F6BE39]/5">Termes de Référence blindés conformes aux standards FIDIC et bailleurs</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0B2545]">Évaluation & Pérennité</td>
                  <td className="py-3.5 px-4 text-slate-600">Absence de dispositif de suivi après le départ des consultants</td>
                  <td className="py-3.5 px-4 font-medium text-[#0B2545] bg-[#F6BE39]/5">Tableau de bord pérenne et transfert de compétences certifié aux agents d'État</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Callout */}
        <div className="p-8 bg-[#001026] text-white rounded-lg border border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-bold text-white">
              Vous préparez un schéma directeur ou un projet sectoriel ?
            </h4>
            <p className="text-xs text-slate-300">
              Utilisez notre simulateur interactif pour cadrer vos Termes de Référence ou échangez directement avec notre chancellerie.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenSimulator}
              className="px-4 py-2.5 bg-white text-[#0B2545] hover:bg-slate-100 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cadrer un TDR
            </button>
            <button
              onClick={onStartConsultation}
              className="px-5 py-2.5 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#0B2545] rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Prendre contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
