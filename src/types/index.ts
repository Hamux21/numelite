export interface InterventionAxis {
  id: string;
  axeNumber: string; // e.g. "AXE 01"
  title: string;
  summary: string;
  tag: string;
  iconName: string;
  scopeDescription: string;
  deliverables: string[];
  stakeholders: string[];
  frameworkStandard: string;
  caseExample: {
    title: string;
    context: string;
    impact: string;
  };
}

export interface ConsultationRequest {
  fullName: string;
  officialTitle: string;
  institution: string;
  institutionType: 'ministere' | 'agence_publique' | 'bailleur' | 'operateur' | 'autre';
  email: string;
  phone: string;
  primaryAxis: string;
  notes: string;
  projectHorizon?: string;
  estimatedBudget?: string;
  submissionDate?: string;
  referenceCode?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
}
