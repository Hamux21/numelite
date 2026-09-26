import React, { useState } from 'react';
import {
  MapPin,
  FileText,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Printer
} from 'lucide-react';
import { INSTITUTIONAL_CREDENTIALS, INTERVENTION_AXES } from '../data/numeliteData';
import { ConsultationRequest } from '../types';

interface ContactSectionProps {
  onSubmitSuccess: (receipt: ConsultationRequest) => void;
  preselectedAxis?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSubmitSuccess,
  preselectedAxis,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    email: '',
    phone: '',
    primaryAxis: preselectedAxis || 'Stratégie & transformation numérique (Schéma directeur / e-Gouv)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic form validation
    if (!formData.fullName.trim() || !formData.institution.trim()) {
      setErrorMsg('Veuillez renseigner votre nom, titre officiel ainsi que l’organisme sollicitant.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Veuillez renseigner une adresse électronique officielle valide.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Veuillez spécifier une ligne téléphonique directe pour la chancellerie.');
      return;
    }

    setIsSubmitting(true);

    // Simulate fast institutional registration and transmission
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceNumber = `REF-NUMELITE-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const submission: ConsultationRequest = {
        fullName: formData.fullName,
        officialTitle: 'Représentant Mandaté',
        institution: formData.institution,
        institutionType: 'ministere',
        email: formData.email,
        phone: formData.phone,
        primaryAxis: formData.primaryAxis,
        notes: formData.notes,
        submissionDate: new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        referenceCode: referenceNumber
      };

      onSubmitSuccess(submission);

      // Reset form
      setFormData({
        fullName: '',
        institution: '',
        email: '',
        phone: '',
        primaryAxis: 'Stratégie & transformation numérique (Schéma directeur / e-Gouv)',
        notes: '',
      });
    }, 700);
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-[#001026] text-white relative overflow-hidden">
      {/* Background subtle geometric blueprint pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F6BE39 1px, transparent 1px), linear-gradient(90deg, #F6BE39 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* LEFT: Sovereign Mission Statement & Official Chancellerie (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017] shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.14em] text-[#F6BE39] uppercase font-sans">
                Diplomatie & Missions
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight tracking-tight">
              Engagez la transformation numérique de vos institutions
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Les experts de Numelite Conseil interviennent pour auditer vos systèmes, concevoir vos politiques sectorielles ou cadrer vos requêtes de financement multilatéral.
            </p>

            {/* Statutory Details Box */}
            <div className="space-y-4 pt-4 border-t border-[#1E3A5F]">
              
              {/* Localisation */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#0B2545] border border-[#1E3A5F] flex items-center justify-center shrink-0 text-[#F6BE39] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans block">
                    Localisation & Siège
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {INSTITUTIONAL_CREDENTIALS.siege}
                  </span>
                </div>
              </div>

              {/* NIF */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#0B2545] border border-[#1E3A5F] flex items-center justify-center shrink-0 text-[#F6BE39] mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans block">
                    Immatriculation Statutaire
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white font-mono">
                    Numéro d'Identification Fiscale : NIF: {INSTITUTIONAL_CREDENTIALS.nif}
                  </span>
                </div>
              </div>

              {/* Lignes directes */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#0B2545] border border-[#1E3A5F] flex items-center justify-center shrink-0 text-[#F6BE39] mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans block">
                    Lignes Directes
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white font-mono">
                    {INSTITUTIONAL_CREDENTIALS.contacts.tel1} / {INSTITUTIONAL_CREDENTIALS.contacts.tel2}
                  </span>
                </div>
              </div>

              {/* Chancellerie */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-[#0B2545] border border-[#1E3A5F] flex items-center justify-center shrink-0 text-[#F6BE39] mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans block">
                    Chancellerie Électronique
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white underline underline-offset-4 decoration-[#D4A017]/50">
                    {INSTITUTIONAL_CREDENTIALS.contacts.email}
                  </span>
                </div>
              </div>

            </div>

            {/* Operating hours note */}
            <div className="bg-[#0B2545]/60 border border-[#1E3A5F] p-3.5 rounded-lg flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-[#F6BE39] shrink-0" />
              <span>Chancellerie ouverte du Lundi au Vendredi : 08h00 - 18h30 (GMT+1). Réponse officielle sous 48h.</span>
            </div>

          </div>

          {/* RIGHT: Correspondence Protocol Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#1A1C1B] rounded-lg p-6 sm:p-8 shadow-2xl border border-white/20">
              
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#795900] uppercase font-sans block mb-1">
                  Protocole de Correspondance
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Demande d'audit ou mission d'accompagnement
                </h3>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Nom & Titre + Institution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                      Nom & Titre Officiel *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="ex. S.E. M. le Secrétaire Général"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] placeholder-[#74777F]/70 focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                      Institution ou Organisme *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="ex. Ministère / Agence / Bailleur"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] placeholder-[#74777F]/70 focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                      Adresse Électronique *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@institution.gov"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] placeholder-[#74777F]/70 focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                      Téléphone Professionnel *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+227 00 00 00 00"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] placeholder-[#74777F]/70 focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                </div>

                {/* Row 3: Domaine principal */}
                <div>
                  <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                    Domaine Principal de Sollicitation *
                  </label>
                  <select
                    value={formData.primaryAxis}
                    onChange={(e) => setFormData({ ...formData, primaryAxis: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                  >
                    <option value="Stratégie & transformation numérique (Schéma directeur / e-Gouv)">
                      Axe 01 - Stratégie & transformation numérique (Schéma directeur / e-Gouv)
                    </option>
                    <option value="Ingénierie télécoms & réseaux (Audit d'infrastructure / fibre)">
                      Axe 02 - Ingénierie télécoms & réseaux (Audit d'infrastructure / fibre)
                    </option>
                    <option value="Statistiques & données TIC (Enquêtes nationales / indicateurs UIT)">
                      Axe 03 - Statistiques & données TIC (Enquêtes nationales / indicateurs UIT)
                    </option>
                    <option value="Prospective & innovation (Veille technologique / Data center)">
                      Axe 04 - Prospective & innovation (Veille technologique / Data center)
                    </option>
                    <option value="Formation & renforcement des capacités (Cadres publics / Élus)">
                      Axe 05 - Formation & renforcement des capacités (Cadres publics / Élus)
                    </option>
                    <option value="Gestion de projets axée résultats (Budget-programme / AE-CP)">
                      Axe 06 - Gestion de projets axée résultats (Budget-programme / AE-CP)
                    </option>
                    <option value="Suivi & évaluation de projets (Dispositifs de suivi / audits)">
                      Axe 07 - Suivi & évaluation de projets (Dispositifs de suivi / audits)
                    </option>
                    <option value="Partenariats internationaux (Requêtes UIT / PNUD / BAD)">
                      Axe 08 - Partenariats internationaux (Requêtes UIT / PNUD / BAD)
                    </option>
                    <option value="Mission globale d'audit stratégique et institutionnel">
                      Mission globale d'audit stratégique et institutionnel
                    </option>
                  </select>
                </div>

                {/* Row 4: Synthèse des besoins */}
                <div>
                  <label className="text-[10.5px] font-bold tracking-wider uppercase text-[#0B2545] block mb-1 font-sans">
                    Synthèse des Besoins ou Termes de Référence
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Précisez le contexte du projet, le calendrier institutionnel souhaité ou les attentes..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#0B2545]/20 rounded text-xs text-[#1A1C1B] placeholder-[#74777F]/70 focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>

                {/* Submit button: exactly as in screenshot */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#F6BE39] hover:bg-[#E5AC25] disabled:bg-[#F6BE39]/60 text-[#0B2545] font-bold text-xs tracking-wider uppercase rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:translate-y-px"
                >
                  {isSubmitting ? (
                    <span>Enregistrement du protocole en cours...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmettre la demande de consultation</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#74777F] text-center pt-1">
                  Traitement confidentiel sous le sceau institutionnel. Un récépissé officiel avec numéro d'enregistrement vous sera délivré.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
