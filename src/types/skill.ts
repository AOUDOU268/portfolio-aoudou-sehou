export type SkillCategory = 
  | 'web_dev'
  | 'mobile_dev'
  | 'backend_api'
  | 'databases'
  | 'devops_tools'
  | 'ai_experimentation';

export interface SkillItem {
  name: string;
  context?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}
