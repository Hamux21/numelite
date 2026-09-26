import React from 'react';
import { ShieldCheck, Award, MapPin, Landmark, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import trainingImg from '../assets/images/training_public_cadres_1790404144432.jpg';
import { INSTITUTIONAL_CREDENTIALS } from '../data/numeliteData';

interface InstitutionScreenProps {
  onStartConsultation: () => void;
}

export const InstitutionScreen: React.FC<InstitutionScreenProps> = ({ onStartConsultation }) => {
  return (
    <div className="py-12 md:py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D4A017]" />
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#795900] uppercase font-sans">
              Ancrage Institutionnel & Souveraineté
            </span>
            <span className="w-5 h-[2px] bg-[#D4A017]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B2545] tracking-tight">
            Au Cœur des Décisions Stratégiques de l'État
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#334E68] mt-4 leading-relaxed">
            Fondé par d'anciens hauts cadres de l'administration publique numérique et des experts internationaux des télécommunications, Numelite Conseil incarne la rencontre entre l'exigence régalienne et la rigueur multilatérale.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-[#0B2545]/10 p-6 rounded-lg shadow-xs">
            <div className="w-10 h-10 rounded bg-[#0B2545]/5 flex items-center justify-center text-[#0B2545] mb-4">
              <Landmark className="w-5 h-5 text-[#0B2545]" />
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#795900] block mb-1">
              Immatriculation Fiscale
            </span>
            <h3 className="font-mono text-lg font-bold text-[#0B2545]">
              NIF : {INSTITUTIONAL_CREDENTIALS.nif}
            </h3>
            <p className="text-xs text-[#74777F] mt-1">
              Société de conseil en stratégie statutairement enregistrée à Niamey.
            </p>
          </div>

          <div className="bg-white border border-[#0B2545]/10 p-6 rounded-lg shadow-xs">
            <div className="w-10 h-10 rounded bg-[#0B2545]/5 flex items-center justify-center text-[#0B2545] mb-4">
              <MapPin className="w-5 h-5 text-[#0B2545]" />
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#795900] block mb-1">
              Siège Social & Chancellerie
            </span>
            <h3 className="font-serif text-lg font-bold text-[#0B2545]">
              Niamey, Niger
            </h3>
            <p className="text-xs text-[#74777F] mt-1">
              Présence permanente au plus près des ministères et agences régaliennes.
            </p>
          </div>

          <div className="bg-white border border-[#0B2545]/10 p-6 rounded-lg shadow-xs">
            <div className="w-10 h-10 rounded bg-[#0B2545]/5 flex items-center justify-center text-[#0B2545] mb-4">
              <Globe className="w-5 h-5 text-[#0B2545]" />
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#795900] block mb-1">
              Rayonnement Géographique
            </span>
            <h3 className="font-serif text-lg font-bold text-[#0B2545]">
              Sahel & CEDEAO
            </h3>
            <p className="text-xs text-[#74777F] mt-1">
              Missions conduites au Niger, Mali, Burkina Faso, Sénégal, Côte d'Ivoire.
            </p>
          </div>

          <div className="bg-white border border-[#0B2545]/10 p-6 rounded-lg shadow-xs">
            <div className="w-10 h-10 rounded bg-[#0B2545]/5 flex items-center justify-center text-[#0B2545] mb-4">
              <Award className="w-5 h-5 text-[#0B2545]" />
            </div>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#795900] block mb-1">
              Diplomatie Multilatérale
            </span>
            <h3 className="font-serif text-lg font-bold text-[#0B2545]">
              UIT · PNUD · BAD
            </h3>
            <p className="text-xs text-[#74777F] mt-1">
              Respect absolu des procédures d'instruction et de passation des bailleurs.
            </p>
          </div>
        </div>

        {/* Narrative & Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 bg-white border border-[#0B2545]/10 rounded-lg p-6 sm:p-10 shadow-xs">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#795900] font-sans">
              Capital Humain de l'État
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Renforcer l'autonomie et les compétences souveraines de nos administrations
            </h2>
            <p className="text-sm text-[#44474E] leading-relaxed">
              La transformation numérique ne se limite pas à l'acquisition de serveurs ou au câblage de bureaux. Elle repose d'abord sur la capacité des directeurs généraux, secrétaires généraux et ingénieurs de l'État à concevoir, arbitrer et superviser leurs propres infrastructures en toute souveraineté.
            </p>
            <p className="text-sm text-[#44474E] leading-relaxed">
              Numelite Conseil intègre systématiquement dans chacune de ses missions d'assistance technique un volet structuré de transfert de compétences certifié, assurant ainsi qu'à la clôture du projet, les cadres nationaux disposent de la pleine maîtrise technique et administrative des solutions déployées.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#0B2545] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>Formations immersives pour inspecteurs généraux et magistrats des comptes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                <span>Acculturation aux enjeux de la cybersécurité souveraine et des lois de finances</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#0B2545]/15 aspect-[4/3] shadow-md group">
              <img
                src={trainingImg}
                alt="Formation et renforcement des capacités des hauts fonctionnaires"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/60 backdrop-blur-xs p-3 rounded border border-white/20">
                <span className="font-bold text-[#F6BE39] block text-[10px] uppercase font-mono tracking-wider">
                  Séminaire de Haut Niveau
                </span>
                Renforcement des capacités en gouvernance numérique pour cadres de l'administration publique
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Charter & Values */}
        <div className="bg-[#001026] text-white rounded-lg p-8 sm:p-12 border border-[#1E3A5F]">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#F6BE39] font-sans block mb-1">
              Charte Déontologique
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Les Trois Engagements Cardinaux du Cabinet Numelite
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-300">
            <div className="border-l-2 border-[#D4A017] pl-4 space-y-2">
              <h4 className="font-serif text-base font-bold text-white">
                1. Secret & Neutralité d'État
              </h4>
              <p className="leading-relaxed">
                Toutes les informations stratégiques, cartographies de vulnérabilité et données statistiques traitées restent sous le sceau absolu de la confidentialité d'État.
              </p>
            </div>

            <div className="border-l-2 border-[#D4A017] pl-4 space-y-2">
              <h4 className="font-serif text-base font-bold text-white">
                2. Intégrité Statistique Absolue
              </h4>
              <p className="leading-relaxed">
                Aucune complaisance dans les rapports d'audit ou les indicateurs : les résultats reflètent la réalité vérifiable du terrain, condition sine qua non de la confiance des partenaires au développement.
              </p>
            </div>

            <div className="border-l-2 border-[#D4A017] pl-4 space-y-2">
              <h4 className="font-serif text-base font-bold text-white">
                3. Pérennité & Transfert Réel
              </h4>
              <p className="leading-relaxed">
                Refus systématique des solutions "boîte noire" qui enferment les institutions dans une dépendance technologique continue vis-à-vis des prestataires extérieurs.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Prise de rendez-vous diplomatique ou audience ministérielle via notre secrétariat général.
            </span>
            <button
              onClick={onStartConsultation}
              className="px-6 py-2.5 bg-[#F6BE39] hover:bg-[#E5AC25] text-[#001026] rounded text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contacter la chancellerie</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
