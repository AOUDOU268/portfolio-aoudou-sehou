import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    id: 'web_dev',
    title: 'Développement Web',
    description: 'Conception d’applications web réactives, ergonomiques et modulaires selon les standards modernes.',
    iconName: 'Globe',
    skills: [
      { name: 'Angular (Applications modulaires d’entreprise)', featured: true },
      { name: 'React & TypeScript (Écosystème frontend moderne)', featured: true },
      { name: 'HTML5 sémantique & CSS3 / Modern Layouts', featured: true },
      { name: 'Tailwind CSS (Systèmes de design atomiques)' },
      { name: 'Accessibilité numérique (a11y & WCAG)' },
      { name: 'Responsive Web Design & Mobile-First' }
    ]
  },
  {
    id: 'mobile_dev',
    title: 'Développement Mobile',
    description: 'Applications mobiles multiplateformes natives et performantes pour iOS et Android.',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart (Cross-platform iOS / Android)', featured: true },
      { name: 'Gestion d’état & Architecture d’UI réactive', featured: true },
      { name: 'Consommation d’APIs REST sécurisées' },
      { name: 'Gestion du stockage local et mode hors-ligne' },
      { name: 'Intégration de flux utilisateurs et formulaires complexes' }
    ]
  },
  {
    id: 'backend_api',
    title: 'Backend et API',
    description: 'Architecture de services robustes, API sécurisées et logique métier découplée.',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot (Java — Microservices & Monolithes modulaires)', featured: true },
      { name: 'Clean Architecture & Principes SOLID', featured: true },
      { name: 'Conception d’APIs RESTful & Contrats OpenAPI/Swagger', featured: true },
      { name: 'Sécurisation par jetons JWT & RBAC (Rôles & Permissions)' },
      { name: 'Gestion des exceptions et logs applicatifs' }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Données',
    description: 'Modélisation, persistance transactionnelle et intégrité des données critiques.',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL (Modélisation relationnelle, Clés, Contraintes)', featured: true },
      { name: 'SQL avancé & Indexation pour optimisation de requêtes', featured: true },
      { name: 'MongoDB (Documents flexibles & collections dénormalisées)', featured: true },
      { name: 'JPA / Hibernate (Mappage objet-relationnel & transactions)' },
      { name: 'Intégrité référentielle et cohérence des flux métiers' }
    ]
  },
  {
    id: 'devops_tools',
    title: 'DevOps et Outils',
    description: 'Reproductibilité des environnements, contrôle de version et automatisation des livraisons.',
    iconName: 'Container',
    skills: [
      { name: 'Docker (Conteneurisation d’applications & Docker Compose)', featured: true },
      { name: 'Git & Workflows de collaboration GitHub', featured: true },
      { name: 'Déploiement continu (Vercel, Cloud)', featured: true },
      { name: 'Environnements Linux & Commandes Shell / Bash' },
      { name: 'Outils de qualité de code (ESLint, Prettier, Tests Vitest)' }
    ]
  },
  {
    id: 'ai_experimentation',
    title: 'IA et Expérimentation Logicielle',
    description: 'Exploration d’algorithmes avancés, théorie de l’information et intégration d’outils intelligents.',
    iconName: 'Cpu',
    skills: [
      { name: 'Compression de fichiers sans perte adaptative (QUANTA Core)', featured: true },
      { name: 'Théorie de l’information & Évaluation d’entropie de données', featured: true },
      { name: 'Intégration de modèles intelligents & API IA', featured: true },
      { name: 'Automatisation de processus opérationnels' },
      { name: 'Prototypage rapide & Bancs d’essai de performance (Benchmarking)' }
    ]
  }
];
