export type CertificationCategoryKey = 
  | 'all'
  | 'architecture_backend'
  | 'frontend'
  | 'mobile'
  | 'ai_data'
  | 'networks'
  | 'systems_iot';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: 'Coursera';
  category: string;
  categoryKey: CertificationCategoryKey;
  summary: string;
  topics: string[];
}
