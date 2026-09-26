import { InterventionAxis, PillarItem, StatItem } from '../types';

export const HERO_STATS: StatItem[] = [
  {
    value: '+15 ans',
    label: 'Haute administration TIC',
    sublabel: 'Expertise régalienne & pilotage d’État'
  },
  {
    value: 'Directeur',
    label: 'Programmes sectoriels',
    sublabel: 'Pilotage de politiques nationales'
  },
  {
    value: 'UIT & PNUD',
    label: 'Réseau international',
    sublabel: 'Alignement sur les standards mondiaux'
  },
  {
    value: '100%',
    label: 'Résultats mesurables',
    sublabel: 'Gestion Axée sur les Résultats (GAR)'
  }
];

export const INTERVENTION_AXES: InterventionAxis[] = [
  {
    id: 'axe-01',
    axeNumber: 'AXE 01',
    title: 'Stratégie & transformation numérique',
    summary: 'Schémas directeurs, politiques publiques TIC, e-gouvernance.',
    tag: 'ORIENTATION INSTITUTIONNELLE',
    iconName: 'Cpu',
    scopeDescription: 'Accompagnement de haut niveau des ministères et institutions publiques dans l’élaboration et la révision de politiques nationales, schémas directeurs sectoriels et feuilles de route de digitalisation des services publics.',
    deliverables: [
      'Schémas directeurs des systèmes d’information (SDSI)',
      'Stratégies nationales de développement de l’économie numérique',
      'Architecture d’interopérabilité des services administratifs (e-Gouv)',
      'Avant-projets de lois, décrets et textes d’application'
    ],
    stakeholders: ['Ministères en charge de l’Économie Numérique', 'Primature & Présidence', 'Agences Nationales de la Société de l’Information (ANSI)'],
    frameworkStandard: 'Cadre UIT / Référentiel Général d’Interopérabilité (RGI)',
    caseExample: {
      title: 'Schéma Directeur Sectoriel de la Modernisation Administrative',
      context: 'Harmonisation des registres publics et intégration des plateformes ministérielles dans une république du Sahel.',
      impact: 'Réduction de 45% des délais de traitement des dossiers administratifs et sécurisation des identifiants uniques des usagers.'
    }
  },
  {
    id: 'axe-02',
    axeNumber: 'AXE 02',
    title: 'Ingénierie télécoms & réseaux',
    summary: 'Audit, déploiement et optimisation d’infrastructures.',
    tag: 'INFRASTRUCTURES CRITIQUES',
    iconName: 'Radio',
    scopeDescription: 'Expertise technique pointue pour le dimensionnement, l’audit de qualité de service (QoS/QoE), la planification des fréquences et le suivi de déploiement de dorsales nationales de fibre optique et réseaux sans fil.',
    deliverables: [
      'Audits de conformité technique et de performance de réseaux fibre/cellulaire',
      'Cahiers des charges techniques et dimensionnement de backbones',
      'Plans de gestion et d’attribution des fréquences hertziennes',
      'Stratégies de couverture des zones blanches et service universel'
    ],
    stakeholders: ['Autorités de régulation (ARCEP / ART&P)', 'Opérateurs d’infrastructures télécoms', 'Fonds d’Accès Universel'],
    frameworkStandard: 'Recommandations ITU-T & ITU-R / Standards 3GPP',
    caseExample: {
      title: 'Audit de Disponibilité et de Résilience de la Dorsale Nationale',
      context: 'Évaluation indépendante de plus de 2 500 km de fibre optique transfrontalière pour le compte d’un bailleur multilatéral.',
      impact: 'Identification de 14 points critiques de rupture et proposition d’un plan d’investissement prioritaire amorti sur 36 mois.'
    }
  },
  {
    id: 'axe-03',
    axeNumber: 'AXE 03',
    title: 'Statistiques & données TIC',
    summary: 'Enquêtes sectorielles, indicateurs UIT, aide à la décision.',
    tag: 'MÉTROLOGIE & ENQUÊTES',
    iconName: 'BarChart3',
    scopeDescription: 'Conception et mise en œuvre d’enquêtes nationales auprès des ménages, entreprises et administrations sur l’accès et l’usage des TIC, selon les méthodologies d’échantillonnage et indicateurs fondamentaux de l’UIT.',
    deliverables: [
      'Rapports d’enquêtes statistiques nationales TIC (méthodologie UIT/CNUCED)',
      'Tableaux de bord macroéconomiques et baromètres annuels du secteur',
      'Systèmes d’Information Statistique Sectoriel (SISS)',
      'Notes de conjoncture et cartographies de pénétration numérique'
    ],
    stakeholders: ['Instituts Nationaux de la Statistique (INS)', 'Observatoires des Marchés Numériques', 'Bailleurs de fonds multilatéraux'],
    frameworkStandard: 'Partnership on Measuring ICT for Development (UIT / UNESCO / ONU)',
    caseExample: {
      title: 'Enquête Nationale de Référence sur les Usages Numériques',
      context: 'Échantillonnage représentatif sur 8 régions administratives avec collecte assistée par tablette (CAPI).',
      impact: 'Fourniture de données probantes fiables ayant permis de calibrer une convention de financement de 30 millions USD.'
    }
  },
  {
    id: 'axe-04',
    axeNumber: 'AXE 04',
    title: 'Prospective & innovation',
    summary: 'Veille technologique, études de faisabilité, incubation.',
    tag: 'VISION D’AVENIR',
    iconName: 'Lightbulb',
    scopeDescription: 'Anticipation des ruptures technologiques (Intelligence Artificielle souveraine, données massives, connectivité satellitaire basse orbite LEO) et formulation de stratégies d’innovation adaptées au contexte africain.',
    deliverables: [
      'Études de faisabilité technique et économique de parcs technologiques',
      'Notes de veille stratégique et prospective sur les ruptures numériques',
      'Cadres d’incubation et d’amorçage pour l’écosystème Tech local',
      'Feuilles de route d’adoption de l’IA dans les services étatiques'
    ],
    stakeholders: ['Incubateurs & Pôles d’excellence', 'Universités & Instituts de recherche', 'Partenaires de coopération technique'],
    frameworkStandard: 'Stratégie de Transformation Numérique pour l’Afrique (Union Africaine 2020-2030)',
    caseExample: {
      title: 'Étude d’Opportunité pour un Data Center National Souverain',
      context: 'Analyse d’implantation, d’efficacité énergétique (PUE) et de souveraineté des données pour les applications régaliennes.',
      impact: 'Validation du modèle économique hybride garantissant l’hébergement in situ de 100% des données sensibles de l’État.'
    }
  },
  {
    id: 'axe-05',
    axeNumber: 'AXE 05',
    title: 'Formation & renforcement des capacités',
    summary: 'Élus locaux, cadres publics, agents TIC.',
    tag: 'CAPITAL HUMAIN DE L’ÉTAT',
    iconName: 'GraduationCap',
    scopeDescription: 'Programmes certifiants et séminaires d’immersion de haut niveau destinés aux directeurs d’administration centrale, inspecteurs généraux, directeurs de systèmes d’information et cadres territoriaux.',
    deliverables: [
      'Curricula de formation professionnelle certifiés en gouvernance du numérique',
      'Guides méthodologiques et manuels de procédures de la gestion TIC',
      'Ateliers immersifs de prise de décision pour hauts fonctionnaires',
      'Évaluations des compétences numériques de l’administration publique'
    ],
    stakeholders: ['Écoles Nationales d’Administration (ENA)', 'Ministères sectoriels', 'Associations de collectivités territoriales'],
    frameworkStandard: 'Cadre de compétences numériques pour le secteur public (UNESCO / UIT)',
    caseExample: {
      title: 'Programme National d’Acculturation Numérique des Décideurs Publics',
      context: 'Formation de 240 secrétaires généraux, directeurs de cabinet et directeurs financiers ministériels.',
      impact: 'Adoption accélérée des outils de dématérialisation budgétaire et sécurisation des échanges interministériels.'
    }
  },
  {
    id: 'axe-06',
    axeNumber: 'AXE 06',
    title: 'Gestion de projets axée résultats',
    summary: 'Budget-programme, AE/CP, rédaction de TDR.',
    tag: 'RÉGULARITÉ & PERFORMANCE',
    iconName: 'Crosshair',
    scopeDescription: 'Assistance à maîtrise d’ouvrage (AMO) pour la structuration de programmes pluriannuels, la mise en œuvre de la gestion budgétaire en Autorisations d’Engagement et Crédits de Paiement (AE/CP) et la passation de marchés.',
    deliverables: [
      'Termes de Référence (TDR) et Dossiers d’Appel d’Offres (DAO) internationaux',
      'Cadres logiques et matrices de planification pluriannuelle axée résultats (GAR)',
      'Budgets-programmes conformes aux directives de l’UEMOA et de la CEDEAO',
      'Manuels d’exécution de projets financés par les bailleurs multilatéraux'
    ],
    stakeholders: ['Unités de Gestion de Projets (UGP)', 'Ministères des Finances et du Budget', 'Cellules de passation des marchés publics'],
    frameworkStandard: 'Directives Budgétaires UEMOA / Normes FIDIC / Passation de Marchés Banque Mondiale',
    caseExample: {
      title: 'Structuration du Budget-Programme d’un Ministère Régalien',
      context: 'Passation d’un budget traditionnel de moyens à un budget par objectifs assorti d’indicateurs de performance tangibles.',
      impact: 'Conformité totale avec la directive n°06/2009/CM/UEMOA et taux d’exécution des crédits porté à 92% dès l’exercice suivant.'
    }
  },
  {
    id: 'axe-07',
    axeNumber: 'AXE 07',
    title: 'Suivi & évaluation de projets',
    summary: 'Dispositifs de suivi, indicateurs de performance, évaluations.',
    tag: 'CONTRÔLE & TRANSPARENCE',
    iconName: 'FileSpreadsheet',
    scopeDescription: 'Conception de dispositifs intégrés de suivi-évaluation (S&E), audits de performance à mi-parcours et évaluations d’impact final pour les grands programmes de développement numérique.',
    deliverables: [
      'Systèmes informatisés de suivi-évaluation des programmes sectoriels',
      'Rapports d’évaluation à mi-parcours et évaluations d’impact ex-post',
      'Plans de gestion des risques opérationnels et fiduciaires',
      'Matrices de redevabilité institutionnelle et bilans de performance'
    ],
    stakeholders: ['Comités de pilotage interministériels', 'Bailleurs de fonds multilatéraux', 'Société civile et organes de contrôle d’État'],
    frameworkStandard: 'Critères CAD/OCDE d’évaluation du développement (Pertinence, Efficacité, Efficience, Impact, Durabilité)',
    caseExample: {
      title: 'Évaluation à Mi-Parcours d’un Projet Sectoriel de Connectivité Rurale',
      context: 'Examen indépendant de l’efficacité des investissements réalisés dans 120 localités désenclavées.',
      impact: 'Réallocation stratégique de 4,2 millions USD vers les infrastructures les plus productives et pérennisation du modèle économique.'
    }
  },
  {
    id: 'axe-08',
    axeNumber: 'AXE 08',
    title: 'Partenariats internationaux',
    summary: 'Montage de dossiers UIT/PNUD, coopération régionale.',
    tag: 'DIPLOMATIE MULTILATÉRALE',
    iconName: 'Globe2',
    scopeDescription: 'Appui diplomatique et stratégique pour la négociation de conventions multilatérales, la formulation de requêtes de dons/crédits concessionnels et la représentation lors des conférences internationales.',
    deliverables: [
      'Dossiers de requête de financement et fiches conceptuelles de projet (Concept Notes)',
      'Notes de positionnement stratégique pour les conférences UIT, CNUCED et UA',
      'Protocoles d’accord et accords de siège bilatéraux / multilatéraux',
      'Stratégies d’harmonisation des politiques numériques au sein de la CEDEAO'
    ],
    stakeholders: ['Union Internationale des Télécommunications (UIT)', 'Banque Mondiale', 'Banque Africaine de Développement (BAD)', 'PNUD'],
    frameworkStandard: 'Normes de diplomatie multilatérale et protocoles de coopération internationale',
    caseExample: {
      title: 'Montage d’une Requête de Financement Multilatéral pour le Haut Débit',
      context: 'Préparation du dossier technique et financier complet pour un appui conjoint UIT-Bailleur de fonds.',
      impact: 'Approbation sans réserve par le Conseil d’Administration et décaissement d’une première tranche de subvention de 12 millions USD.'
    }
  }
];

export const WHY_CHOOSE_US_PILLARS: PillarItem[] = [
  {
    id: 'pillar-01',
    title: 'Expérience directe de la haute administration publique numérique au Niger',
    description: 'Une connaissance intime des rouages décisionnels étatiques, de l’ordonnancement budgétaire, des réformes institutionnelles et des cadres réglementaires nationaux et sous-régionaux.',
    icon: 'ShieldCheck',
    points: [
      'Maîtrise approfondie des circuits de validation gouvernementaux et parlementaires',
      'Capacité à anticiper les contraintes juridiques, statutaires et administratives',
      'Implantation directe à Niamey avec un ancrage solide au cœur des institutions sahéliennes'
    ]
  },
  {
    id: 'pillar-02',
    title: 'Double compétence technique (ingénierie télécoms) et stratégique (économie numérique)',
    description: 'Une capacité rare et précieuse à jeter un pont infranchissable entre la rigueur de l’ingénierie physique et la vision économique macro-sectorielle requise par les bailleurs.',
    icon: 'Network',
    points: [
      'Dialogue fluide avec les ingénieurs réseaux comme avec les ministres et directeurs généraux',
      'Conception d’architectures technologiques réalistes et pérennes',
      'Modélisation économique solide et bancabilité éprouvée des projets d’infrastructures'
    ]
  },
  {
    id: 'pillar-03',
    title: 'Réseau international actif (UIT, PNUD, coopérations régionales)',
    description: 'Application directe des standards multilatéraux les plus exigeants, tout en garantissant une adéquation immédiate et sans friction avec les réalités sociotechniques du terrain ouest-africain.',
    icon: 'Globe',
    points: [
      'Interlocuteur reconnu auprès des instances de Genève, New York, Addis-Abeba et Abuja',
      'Maîtrise parfaite des processus d’instruction et de passation des bailleurs',
      'Capacité de mobilisation rapide d’experts spécialisés de premier plan'
    ]
  },
  {
    id: 'pillar-04',
    title: 'Approche fondée sur la donnée et les résultats mesurables',
    description: 'Désamorçage des incertitudes grâce à des méthodologies d’enquêtes statistiques rigoureuses, des indicateurs probants et une Gestion Axée sur les Résultats (GAR) infaillible.',
    icon: 'LineChart',
    points: [
      'Remplacement des conjectures par des statistiques certifiées aux standards de l’UIT',
      'Pilotage fin axé sur les résultats réels et les impacts socio-économiques durables',
      'Transparence intégrale et traçabilité rigoureuse de chaque étape de la mission'
    ]
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Empirique & Métrologie de Terrain',
    description: 'Collecte exhaustive de données statistiques quantitatives et qualitatives, analyse des infrastructures existantes et cartographie des acteurs institutionnels.',
    duration: '2 à 4 semaines',
    output: 'Rapport d’état des lieux et matrice diagnostique chiffrée'
  },
  {
    step: '02',
    title: 'Cadrage Stratégique & Budgétaire (GAR / AE-CP)',
    description: 'Élaboration du schéma directeur, définition des cibles de performance, arbitrage budgétaire pluriannuel et alignement sur les directives sous-régionales.',
    duration: '4 à 8 semaines',
    output: 'Document de stratégie sectorielle et maquette budgétaire programme'
  },
  {
    step: '03',
    title: 'Ingénierie de Mise en Œuvre & Passation de Marchés',
    description: 'Rédaction des Termes de Référence (TDR), constitution des Dossiers d’Appel d’Offres (DAO) et accompagnement rigoureux dans le dépouillement technique.',
    duration: 'Continu',
    output: 'TDR validés, dossiers d’appels d’offres et rapports de conformité'
  },
  {
    step: '04',
    title: 'Suivi-Évaluation & Capitalisation Institutionnelle',
    description: 'Déploiement du tableau de bord de suivi axé résultats, évaluation périodique des indicateurs de progrès et transfert de compétences aux cadres de l’État.',
    duration: 'Pluriannuel',
    output: 'Rapports d’évaluation périodiques et plan de transfert de compétences'
  }
];

export const INSTITUTIONAL_CREDENTIALS = {
  denomination: 'Cabinet Numelite Conseil & Stratégie',
  statut: 'Société de conseil en stratégie et transformation numérique',
  nif: '119354',
  siege: 'Niamey, République du Niger',
  rayonnement: 'Afrique de l’Ouest, Espace Sahel & CEDEAO',
  contacts: {
    tel1: '+227 93 04 35 08',
    tel2: '+227 81 44 44 43',
    email: 'numeliteconseil@gmail.com',
    horaires: 'Lundi - Vendredi : 08h00 - 18h30 (GMT+1)'
  }
};
