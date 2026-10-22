import type { TimelineItem } from '../types/timeline';

export const timelineItems: TimelineItem[] = [
  {
    id: 'enspm-degree',
    type: 'education',
    title: 'Diplôme d’Ingénieur de Conception',
    subtitle: 'Filière Informatique et Télécommunications — Option Génie Logiciel',
    organization: 'École Nationale Supérieure Polytechnique de Maroua (ENSPM)',
    period: '2023 — Juillet 2026',
    location: 'Maroua, Cameroun',
    description: 'Formation polytechnique d’ingénieur axée sur l’excellence méthodologique, la rigueur conceptuelle et la maîtrise du cycle de vie complet du logiciel.',
    highlights: [
      'Architectures logicielles modernes, principes SOLID et patrons de conception (Design Patterns)',
      'Génie logiciel avancé : modélisation UML, spécifications formelles, bases de données relationnelles et NoSQL',
      'Systèmes distribués, réseaux, sécurité informatique et algorithmique avancée',
      'Conduite de projets d’ingénierie et recherche appliquée'
    ],
    isVerified: true,
    statusTag: 'Diplôme d’Ingénieur vérifié'
  },
  {
    id: 'iut-degree',
    type: 'education',
    title: 'DUT en Génie Informatique',
    subtitle: 'Diplôme Universitaire de Technologie — Informatique',
    organization: 'Institut Universitaire de Technologie (IUT) de Ngaoundéré',
    period: '2021 — 2023',
    location: 'Ngaoundéré, Cameroun',
    description: 'Formation technique universitaire intensive fournissant les bases fondamentales en génie informatique, développement logiciel et administration des systèmes.',
    highlights: [
      'Algorithmique fondamentale, structures de données et programmation orientée objet',
      'Modélisation et gestion de bases de données relationnelles (SQL)',
      'Systèmes d’exploitation (Linux/Windows), réseaux et télécommunications',
      'Conception et réalisation de projets informatiques appliqués'
    ],
    isVerified: true,
    statusTag: 'Diplôme DUT vérifié'
  },
  {
    id: 'quanta-venture',
    type: 'venture',
    title: 'Fondateur & Lead Ingénieur',
    subtitle: 'Initiative technologique & éditeur de solutions logicielles',
    organization: 'QUANTA Dynamic',
    period: '2024 — Présent',
    location: 'Cameroun & International',
    description: 'Création et pilotage d’une initiative entrepreneuriale dédiée au développement de produits logiciels utiles, à la R&D algorithmique et à l’intégration d’outils d’automatisation.',
    highlights: [
      'Pilotage des développements techniques et des choix d’architecture logicielle',
      'Recherche et développement sur le projet propriétaire QUANTA Core / QUANTA Compress',
      'Mise en place de bonnes pratiques de développement (Clean Code, CI/CD, conteneurisation)'
    ],
    isVerified: true,
    statusTag: 'Initiative active'
  },
  {
    id: 'applied-engineering',
    type: 'project',
    title: 'Conception & Réalisation de Systèmes Logiciels',
    subtitle: 'Projets d’application à fort impact (AGRIMA, Justiciable CM, PEAG CAM)',
    organization: 'Projets d’Ingénierie',
    period: '2023 — Présent',
    location: 'Cameroun',
    description: 'Mise en œuvre concrète des compétences en génie logiciel pour résoudre des problématiques socio-économiques réelles.',
    highlights: [
      'AGRIMA : Conception backend Spring Boot et architecture pour le désenclavement agricole',
      'Justiciable CM : Développement d’une plateforme mobile Flutter et API sécurisée d’accès au droit',
      'PEAG CAM : Spécifications et modélisation de dématérialisation de péage par QR code hors-ligne'
    ],
    isVerified: true,
    statusTag: 'Réalisations concrètes'
  },
  {
    id: 'complementary-experiences',
    type: 'pending',
    title: 'Expériences & Missions Industrielles Complémentaires',
    subtitle: 'Stages industriels et collaborations techniques',
    organization: 'Espace réservé aux validations d’expérience',
    period: 'Consultable sur demande',
    location: 'Sous convention',
    description: 'Les références détaillées, conventions de stage et attestations d’expériences spécifiques en entreprise sont communiquées sur demande motivée pour respecter la confidentialité des organisations partenaires.',
    highlights: [
      'Dossier technique et références professionnelles transmissibles aux recruteurs',
      'Mise à jour continue au fur et à mesure des officialisations'
    ],
    isVerified: true,
    statusTag: 'À compléter sur demande'
  }
];
