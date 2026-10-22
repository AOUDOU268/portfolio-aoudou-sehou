export type ProjectStatus = 
  | 'completed'        // Terminé / Déployé
  | 'in_development'   // En développement actif
  | 'experimental'     // Expérimental / R&D
  | 'concept';         // Concept & Prototypage

export type ProjectCategory = 
  | 'all'
  | 'web' 
  | 'mobile' 
  | 'rd_systems' 
  | 'fintech_iot' 
  | 'entrepreneurship';

export interface ProjectLink {
  label: string;
  url?: string;
  type: 'github' | 'live' | 'paper' | 'documentation';
  isAvailable: boolean;
  statusNote?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  statusLabel: string;
  statusDescription: string;
  summary: string;
  problemSolved: string;
  solutionAndValue: string;
  confirmedFeatures: string[];
  plannedFeatures?: string[];
  securityHighlights?: string[];
  experimentalApproach?: string[];
  technologies: string[];
  architecturalHighlights: string[];
  role: string;
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  metricsOrHighlight?: string;
}
