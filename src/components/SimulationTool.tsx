import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Copy,
  Printer,
  ArrowRight,
  ShieldCheck,
  Building,
  Calendar,
  DollarSign,
  Sparkles,
  Check
} from 'lucide-react';
import { INTERVENTION_AXES } from '../data/numeliteData';

interface SimulationToolProps {
  initialSelectedAxisId?: string;
  onSendToConsultation: (summaryText: string, primaryAxis: string) => void;
}

export const SimulationTool: React.FC<SimulationToolProps> = ({
  initialSelectedAxisId,
  onSendToConsultation,
}) => {
  const [institutionType, setInstitutionType] = useState<'ministere' | 'agence' | 'bailleur' | 'operateur'>('ministere');
  const [selectedAxes, setSelectedAxes] = useState<string[]>(
    initialSelectedAxisId ? [initialSelectedAxisId] : ['axe-01', 'axe-06']
  );
  const [horizon, setHorizon] = useState<'court' | 'moyen' | 'pluriannuel'>('moyen');
  const [fundingMode, setFundingMode] = useState<'budget_etat' | 'multilateral' | 'ppp'>('multilateral');
  const [projectName, setProjectName] = useState('Projet d’Appui à la Gouvernance Numérique & Modernisation Sectorielle');
  const [isCopied, setIsCopied] = useState(false);

  const toggleAxis = (id: string) => {
    if (selectedAxes.includes(id)) {
      if (selectedAxes.length > 1) {
        setSelectedAxes(selectedAxes.filter(a => a !== id));
      }
    } else {
      setSelectedAxes([...selectedAxes, id]);
    }
  };

  const getInstitutionLabel = () => {
    switch (institutionType) {
      case 'ministere': return 'Ministère Sectoriel / Présidence / Primature';
      case 'agence': return 'Agence Nationale (Régulation ARCEP / ANSI / Observatoire)';
      case 'bailleur': return 'Bailleur Multilatéral (UIT / PNUD / Banque Mondiale / BAD)';
      case 'operateur': return 'Opérateur de Réseaux & Infrastructures Publiques';
    }
  };

  const getHorizonLabel = () => {
    switch (horizon) {
      case 'court': return 'Mission d’audit & diagnostic d’urgence (1 à 3 mois)';
      case 'moyen': return 'Élaboration de Schéma Directeur & Cadrage (6 à 12 mois)';
      case 'pluriannuel': return 'Programme Stratégique Pluriannuel d’État (2 à 3 ans)';
    }
  };

  const getFundingLabel = () => {
    switch (fundingMode) {
      case 'budget_etat': return 'Budget Général de l’État (Autorisations d’Engagement & Crédits de Paiement - AE/CP)';
      case 'multilateral': return 'Facilité Multilatérale / Prêt Concessionnel ou Don (UIT / PNUD / BAD)';
      case 'ppp': return 'Partenariat Public-Privé (PPP) & Fonds du Service Universel des Télécoms';
    }
  };

  const activeAxesData = INTERVENTION_AXES.filter(a => selectedAxes.includes(a.id));

  // Generate complete Memorandum text
  const generateMemorandumText = () => {
    return `RÉPUBLIQUE DU NIGER / ESPACE SAHEL & CEDEAO
CABINET NUMELITE CONSEIL & STRATÉGIE
NIF : 119354 — SIÈGE : NIAMEY
-------------------------------------------------------------------
MEMORANDUM DE CADRAGE INSTITUTIONNEL & PROJET DE TDR
INTITULÉ DE LA MISSION : ${projectName.toUpperCase()}
ORGANISME MANDANT : ${getInstitutionLabel()}
HORIZON D'EXÉCUTION : ${getHorizonLabel()}
SOURCE DE FINANCEMENT ENVISAGÉE : ${getFundingLabel()}

1. CONTEXTE & JUSTIFICATION STRATÉGIQUE
L'institution sollicite l'assistance technique de haut niveau du Cabinet Numelite Conseil pour concevoir, structurer et sécuriser la mise en œuvre de ses réformes numériques selon les principes de la Gestion Axée sur les Résultats (GAR) et les directives budgétaires communautaires.

2. COMPOSANTES & AXES D'INTERVENTION RETENUS :
${activeAxesData.map((a, i) => `${i + 1}. [${a.axeNumber}] ${a.title} (${a.tag})
   - Objectif : ${a.summary}
   - Référentiel : ${a.frameworkStandard}`).join('\n')}

3. LIVRABLES CONTRACTUELS ATTENDUS :
${activeAxesData.flatMap(a => a.deliverables).map(d => ` • ${d}`).join('\n')}

4. PROFILS D'EXPERTS MOBILISÉS PAR NUMELITE CONSEIL :
 • 01 Chef de Mission, Ancien Directeur de Haute Administration Publique Numérique (+15 ans d'expérience)
 • 01 Ingénieur en Chef Télécoms & Réseaux (Spécialiste Fibre Optique et Régulation des Fréquences)
 • 01 Statisticien Économiste Principal (Certifié méthodologies UIT & CNUCED)
 • 01 Spécialiste Marchés Publics & Budgets-Programmes (AE/CP)

5. CRITÈRES DE SUIVI & ASSURANCE QUALITÉ :
Alignement strict sur la directive n°06/2009/CM/UEMOA et soumission des livrables aux standards de contrôle international.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMemorandumText());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleTransfer = () => {
    const primaryAxisTitle = activeAxesData[0]?.title || 'Stratégie & transformation numérique';
    const notesSummary = `Demande issue du simulateur de TDR institutionnel :
Projet : ${projectName}
Organisme : ${getInstitutionLabel()}
Axes retenus : ${activeAxesData.map(a => a.axeNumber).join(', ')}
Horizon : ${getHorizonLabel()}
Financement : ${getFundingLabel()}`;

    onSendToConsultation(notesSummary, primaryAxisTitle);
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Outil Régalien d'Assistance à Maîtrise d'Ouvrage
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B2545] tracking-tight">
            Simulateur de Cadrage de Projet & TDR
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#334E68] mt-3 leading-relaxed">
            Configurez les paramètres institutionnels de votre mission, sélectionnez vos axes d'intervention prioritaires et générez instantanément un projet officiel de Termes de Référence conforme aux exigences de l'État et des bailleurs multilatéraux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Configuration Matrix (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#0B2545]/15 rounded-lg p-6 sm:p-7 shadow-xs space-y-6">
            
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
                Étape 1
              </span>
              <label className="text-sm font-bold text-[#0B2545] block mb-2">
                Type d'Institution Commanditaire
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'ministere', label: 'Ministère / Présidence' },
                  { id: 'agence', label: 'Agence de Régulation' },
                  { id: 'bailleur', label: 'Bailleur Multilatéral' },
                  { id: 'operateur', label: 'Opérateur d’Infrastructures' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInstitutionType(item.id as any)}
                    className={`p-3 rounded border text-left font-medium transition-all ${
                      institutionType === item.id
                        ? 'border-[#0B2545] bg-[#0B2545] text-white shadow-xs'
                        : 'border-[#0B2545]/15 bg-[#FAF9F7] text-[#1A1C1B] hover:border-[#0B2545]/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
                Étape 2
              </span>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-[#0B2545]">
                  Axes d'Intervention Concernés ({selectedAxes.length})
                </label>
                <span className="text-[10.5px] text-[#74777F]">Sélection multiple</span>
              </div>
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {INTERVENTION_AXES.map((axis) => {
                  const isSelected = selectedAxes.includes(axis.id);
                  return (
                    <button
                      key={axis.id}
                      type="button"
                      onClick={() => toggleAxis(axis.id)}
                      className={`w-full p-2.5 rounded border text-left text-xs transition-all flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'border-[#D4A017] bg-[#F6BE39]/10 text-[#0B2545] font-semibold'
                          : 'border-[#0B2545]/10 bg-white text-[#44474E] hover:bg-[#FAF9F7]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-[#795900] block">{axis.axeNumber}</span>
                        <span>{axis.title}</span>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-1 ${isSelected ? 'bg-[#0B2545] text-white' : 'border border-slate-300'}`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
                Étape 3
              </span>
              <label className="text-sm font-bold text-[#0B2545] block mb-2">
                Horizon Temporel Souhaité
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'court', label: '1 - 3 mois', sub: 'Urgence / Audit' },
                  { id: 'moyen', label: '6 - 12 mois', sub: 'Schéma Directeur' },
                  { id: 'pluriannuel', label: '2 - 3 ans', sub: 'Programme d’État' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHorizon(item.id as any)}
                    className={`p-2.5 rounded border text-center transition-all ${
                      horizon === item.id
                        ? 'border-[#0B2545] bg-[#0B2545] text-white'
                        : 'border-[#0B2545]/15 bg-[#FAF9F7] text-[#1A1C1B]'
                    }`}
                  >
                    <span className="block font-bold">{item.label}</span>
                    <span className="text-[9.5px] opacity-80 block truncate">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans block mb-1">
                Étape 4
              </span>
              <label className="text-sm font-bold text-[#0B2545] block mb-2">
                Modalité de Financement
              </label>
              <select
                value={fundingMode}
                onChange={(e) => setFundingMode(e.target.value as any)}
                className="w-full p-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#0B2545] font-medium focus:outline-none"
              >
                <option value="multilateral">Financement Multilatéral Concessionnel (UIT / PNUD / BAD / BM)</option>
                <option value="budget_etat">Budget de l’État (AE / CP - Directives UEMOA)</option>
                <option value="ppp">Partenariat Public-Privé (PPP) & Fonds Service Universel</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#0B2545] block mb-1">
                Intitulé Provisoire du Projet
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full p-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] font-medium"
              />
            </div>

          </div>

          {/* RIGHT: Generated Formal Institutional TDR Memorandum (7 cols) */}
          <div className="lg:col-span-7 bg-[#001026] text-white rounded-lg p-6 sm:p-8 shadow-xl border border-[#1E3A5F]">
            
            {/* Memorandum Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1E3A5F] gap-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#F6BE39] uppercase font-sans block">
                  Projet de Termes de Référence (TDR)
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Mémorandum d'Assistance Technique
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#F6BE39]" />}
                  <span>{isCopied ? 'Copié !' : 'Copier'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#F6BE39]" />
                  <span>Imprimer</span>
                </button>
              </div>
            </div>

            {/* Memorandum Parchment Box */}
            <div className="my-6 bg-[#FAF9F7] text-[#1A1C1B] rounded p-6 font-mono text-xs max-h-[500px] overflow-y-auto leading-relaxed border border-white/20 shadow-inner">
              <div className="text-center pb-4 mb-4 border-b border-[#0B2545]/20 font-sans">
                <div className="text-[10px] font-bold text-[#74777F] uppercase tracking-widest">
                  République du Niger • Espace Sahel & CEDEAO
                </div>
                <div className="font-serif text-base font-bold text-[#0B2545] tracking-wide mt-1">
                  CABINET NUMELITE CONSEIL & STRATÉGIE
                </div>
                <div className="text-[10px] text-[#795900] font-mono mt-0.5">
                  NIF : 119354 — SIÈGE : NIAMEY
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-bold text-[#0B2545] block font-sans">PROJET :</span>
                  <span className="text-xs uppercase font-bold text-[#795900]">{projectName}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded border border-[#0B2545]/10">
                  <div>
                    <span className="text-[#74777F] block">Commanditaire :</span>
                    <span className="font-bold text-[#0B2545]">{getInstitutionLabel()}</span>
                  </div>
                  <div>
                    <span className="text-[#74777F] block">Horizon :</span>
                    <span className="font-bold text-[#0B2545]">{getHorizonLabel()}</span>
                  </div>
                  <div className="sm:col-span-2 pt-1 border-t border-[#0B2545]/10">
                    <span className="text-[#74777F] block">Financement cible :</span>
                    <span className="font-semibold text-[#0B2545]">{getFundingLabel()}</span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#0B2545] block font-sans mb-1">
                    1. PÉRIMÈTRE & AXES D'INTERVENTION ({activeAxesData.length}) :
                  </span>
                  <div className="space-y-2">
                    {activeAxesData.map((axis, i) => (
                      <div key={axis.id} className="bg-white p-2.5 rounded border border-[#0B2545]/10 text-[11px]">
                        <span className="font-bold text-[#795900]">{axis.axeNumber} - {axis.title}</span>
                        <p className="text-[#44474E] mt-0.5">{axis.scopeDescription}</p>
                        <span className="text-[10px] text-[#74777F] block mt-1">Norme : {axis.frameworkStandard}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-[#0B2545] block font-sans mb-1">
                    2. LIVRABLES CONTRACTUELS ENVISAGÉS :
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-[#334E68]">
                    {activeAxesData.flatMap(a => a.deliverables).map((deliv, idx) => (
                      <li key={idx}>{deliv}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-[#0B2545] block font-sans mb-1">
                    3. ASSURANCE QUALITÉ & GARANTIES NUMELITE :
                  </span>
                  <p className="text-[11px] text-[#44474E]">
                    Conformité intégrale avec la directive budgétaire n°06/2009/CM/UEMOA et les règles de passation des marchés applicables dans l'Espace Sahel. Respect strict du secret d'État.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Prêt à formaliser ce cadrage auprès du cabinet ?
              </span>
              <button
                onClick={handleTransfer}
                className="w-full sm:w-auto px-6 py-3 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#001026] rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Transférer au protocole officiel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
