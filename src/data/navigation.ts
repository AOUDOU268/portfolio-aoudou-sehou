export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#hero', id: 'hero' },
  { label: 'À propos', href: '#about', id: 'about' },
  { label: 'Projets', href: '#projects', id: 'projects' },
  { label: 'Compétences', href: '#skills', id: 'skills' },
  { label: 'Parcours', href: '#parcours', id: 'parcours' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'QUANTA Dynamic', href: '#quanta', id: 'quanta' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];
