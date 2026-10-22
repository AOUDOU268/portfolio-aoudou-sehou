import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'agrima',
    title: 'AGRIMA',
    subtitle: 'Marketplace agricole reliant producteurs et consommateurs dans le Grand Nord Cameroun',
    category: 'web',
    categoryLabel: 'Web & E-Commerce Agricole',
    status: 'in_development',
    statusLabel: 'En développement actif',
    statusDescription: 'Architecture backend Spring Boot et modules de persistance hybride en cours de consolidation ; interface Angular en développement.',
    summary: 'Marketplace digitale mettant en relation directe les producteurs agricoles et les consommateurs dans le Grand Nord Cameroun, réduisant la spéculation des intermédiaires.',
    problemSolved: 'Dans le Grand Nord Cameroun, l’enclavement des zones vivrières et la multiplicité des intermédiaires spéculateurs causent des pertes post-récolte importantes, déprécient les revenus des producteurs et augmentent artificiellement les prix pour les ménages urbains.',
    solutionAndValue: 'AGRIMA crée un canal direct de transaction et de réservation, offrant un catalogue transparent des productions locales, des prix justes et une organisation logistique adaptée aux contraintes locales de connectivité.',
    confirmedFeatures: [
      'Conception de l’architecture backend modulaire avec Spring Boot',
      'Modélisation de la persistance hybride (PostgreSQL pour transactions/comptes, MongoDB pour documents catalogues)',
      'Conteneurisation complète de l’environnement de développement sous Docker et Docker Compose',
      'Spécification et implémentation des endpoints REST pour la gestion des producteurs et des stocks',
      'Maquettage et intégration initiale des composants Angular'
    ],
    plannedFeatures: [
      'Passerelle de paiement intégrée par Mobile Money (Orange Money / MTN MoMo)',
      'Mode dégradé et synchronisation hors-ligne pour zones à connectivité réseau intermittente',
      'Module de géolocalisation des points de collecte et groupage logistique',
      'Tableau de bord d’analyses de prix et tendances saisonnières régionales'
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'MongoDB', 'Docker', 'REST API'],
    architecturalHighlights: [
      'Backend modulaire Spring Boot articulé en Clean Architecture avec séparation stricte des couches',
      'Persistance hybride : PostgreSQL pour l’intégrité ACID transactionnelle et MongoDB pour la flexibilité des catalogues',
      'Conteneurisation Docker assurant la reproductibilité des environnements de dev et de staging',
      'Interface frontend Angular conçue pour une navigation fluide et responsive'
    ],
    role: 'Conception architecturale, modélisation des données, développement backend Spring Boot & intégration initiale Angular',
    links: [
      {
        label: 'Code source',
        type: 'github',
        isAvailable: false,
        statusNote: 'Dépôt sous licence privée — Accès sur demande d\'évaluation'
      },
      {
        label: 'Démonstration',
        type: 'live',
        isAvailable: false,
        statusNote: 'Environnement de prévisualisation en cours de déploiement'
      }
    ],
    featured: true,
    metricsOrHighlight: 'Grand Nord Cameroun'
  },
  {
    id: 'justiciable-cm',
    title: 'Justiciable CM',
    subtitle: 'Application mobile et backend de services juridiques et citoyens',
    category: 'mobile',
    categoryLabel: 'Mobile & LegalTech',
    status: 'in_development',
    statusLabel: 'En développement',
    statusDescription: 'Application mobile Flutter avec gestion d’état Riverpod connectée à une API Spring Boot sécurisée.',
    summary: 'Application mobile citoyenne facilitant l’accès au droit, la consultation de procédures judiciaires, la recherche d’avocats et le suivi sécurisé de dossiers.',
    problemSolved: 'L’opacité des procédures judiciaires, le coût de l’information juridique et la difficulté d’identifier des professionnels de justice assermentés créent une asymétrie majeure d’accès au droit pour les citoyens au Cameroun.',
    solutionAndValue: 'Justiciable CM vulgarise l’accès aux textes juridiques, offre un annuaire vérifié d’avocats, une messagerie interne encadrée et un suivi chronologique sécurisé des dossiers judiciaires.',
    confirmedFeatures: [
      'Module Authentification : Inscription et connexion sécurisée par jetons JWT avec gestion fine des rôles (justiciable, avocat, administrateur)',
      'Module Procédures : Consultation et recherche de fiches pédagogiques sur les démarches juridiques courantes',
      'Module Documents : Espace documentaire sécurisé pour le téléversement et le partage des pièces justificatives',
      'Module Annuaire des avocats : Répertoire vérifié avec recherche multicritère par spécialité et localisation',
      'Module Messagerie interne : Échanges textuels directs et encadrés entre justiciable et conseil',
      'Module Dossiers judiciaires : Suivi chronologique de l’évolution des dossiers et des échéances clés',
      'Module Administration : Outils de vérification des profils professionnels et modération'
    ],
    securityHighlights: [
      'Authentification stateless avec jetons JWT signés et expiration contrôlée',
      'Contrôle d’accès basé sur les rôles (RBAC) isolant strictement les données d’un dossier au justiciable et à son avocat assigné',
      'Chiffrement des communications en transit via TLS et stockage sécurisé des pièces jointes',
      'Validation systématique des entrées et prévention des failles (injections SQL, fuites de données)'
    ],
    technologies: ['Flutter', 'Riverpod', 'GoRouter', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'REST API'],
    architecturalHighlights: [
      'Application mobile cross-platform performante avec Flutter (iOS / Android)',
      'Gestion d’état réactive et immuable avec Riverpod, navigation déclarative typée avec GoRouter',
      'Backend robuste et sécurisé sous Spring Boot avec isolation stricte des données sensibles',
      'Modélisation relationnelle rigoureuse sous PostgreSQL pour l’intégrité des dossiers judiciaires'
    ],
    role: 'Architecte logiciel & Développeur Fullstack (Mobile Flutter & Backend Spring Boot)',
    links: [
      {
        label: 'Dépôt du projet',
        type: 'github',
        isAvailable: false,
        statusNote: 'Codebase sous licence propriétaire / privée'
      },
      {
        label: 'Version de test',
        type: 'live',
        isAvailable: false,
        statusNote: 'Version de test fermée sur invitation pour un panel d\'utilisateurs'
      }
    ],
    featured: true,
    metricsOrHighlight: 'Protection des données & LegalTech'
  },
  {
    id: 'quanta-compress',
    title: 'QUANTA Core / QUANTA Compress',
    subtitle: 'R&D sur la compression sans perte et la sélection adaptative de modèles',
    category: 'rd_systems',
    categoryLabel: 'R&D & Algorithmique Système',
    status: 'experimental',
    statusLabel: 'Expérimental / R&D',
    statusDescription: 'Projet de recherche exploratoire évaluant la sélection heuristique et dynamique de schémas de compression sans perte selon la distribution entropique des flux.',
    summary: 'Projet de recherche et développement visant à concevoir un moteur de compression sans perte multiplateforme avec sélection adaptative d’algorithmes.',
    problemSolved: 'Les algorithmes de compression généralistes classiques appliquent une stratégie uniforme sans considération fine de la variabilité d’entropie interne des blocs, entraînant des compromis sous-optimaux entre ratio et temps de calcul sur des cibles contraintes.',
    solutionAndValue: 'QUANTA Compress explore une approche adaptative : un pré-processeur évalue l’entropie du flux de données en amont afin d’appliquer dynamiquement la stratégie algorithmique optimale (dictionnaires, codages statistiques, transformées), avec l’objectif de fournir des bibliothèques légères et multiplateformes.',
    confirmedFeatures: [
      'Formalisation mathématique et analyse spectrale de l’entropie des blocs de données en temps réel',
      'Développement d’un banc d’essai comparatif (benchmarking) évaluant ratios de compression et cycles CPU sur formats textuels et binaires spécifiques',
      'Moteur modulaire capable de basculer entre différentes stratégies de codage sans perte',
      'Pipeline de décompression à garantie d’intégrité stricte vérifiée par sommes de contrôle (checksums)'
    ],
    experimentalApproach: [
      'Démarche expérimentale rigoureuse : mesure systématique sur des corpus de test calibrés',
      'Évaluation objective des compromis : temps de pré-analyse vs gain effectif en volume',
      'Conception orientée haute performance avec minimisation des allocations mémoire dynamiques',
      'Avertissement de transparence : tous les formats de fichiers ne sont pas universellement supportés à ce stade ; la R&D se concentre sur des flux textuels, logiques et structurés'
    ],
    technologies: ['Théorie de l’information', 'Algorithmique d’entropie', 'Architecture multiplateforme', 'Benchmarks CPU/RAM', 'Tests d’intégrité'],
    architecturalHighlights: [
      'Analyse spectrale de l’entropie du bloc de données en temps réel',
      'Moteur modulaire avec pipeline de transformation découplé',
      'Architecture pensée pour une intégration native sur micro-serveurs et cibles edge computing',
      'Garantie absolue d’absence de perte vérifiée bit à bit'
    ],
    role: 'Chercheur principal en algorithmique & Concepteur du banc d’essai',
    links: [
      {
        label: 'Documentation R&D',
        type: 'documentation',
        isAvailable: false,
        statusNote: 'Notes de recherche internes et spécifications QUANTA Core'
      }
    ],
    featured: true,
    metricsOrHighlight: 'Recherche sans perte'
  },
  {
    id: 'peag-cam',
    title: 'PEAG CAM',
    subtitle: 'Concept de paiement numérique et billetterie QR pour bacs de franchissement',
    category: 'fintech_iot',
    categoryLabel: 'Systèmes Dématérialisés & Paiement',
    status: 'concept',
    statusLabel: 'Concept & Prototypage',
    statusDescription: 'Modélisation fonctionnelle, conception de l’architecture de billets numériques et spécifications de contrôle hors-ligne ; concept non déployé en production.',
    summary: 'Système dématérialisé de paiement et de contrôle des titres de passage pour les bacs de franchissement fluviaux par QR code et confirmation SMS.',
    problemSolved: 'Le paiement manuel en espèces aux bacs de franchissement engendre d’importantes déperditions de recettes, de longues files d’attente aux embarcadères et une absence quasi totale de traçabilité financière pour les exploitants publics.',
    solutionAndValue: 'PEAG CAM propose une infrastructure légère permettant aux usagers de régler leur droit de passage via monnaie électronique, d’obtenir un ticket numérique sécurisé par QR code et de recevoir une confirmation par SMS, même en zone à connectivité limitée.',
    confirmedFeatures: [
      'Modélisation du protocole de ticket QR à signature cryptographique asymétrique',
      'Spécification du mécanisme de validation instantanée hors-ligne sans connexion permanente',
      'Conception du flux transactionnel d’interface avec les passerelles d’envoi SMS',
      'Maquettage du tableau de bord de réconciliation comptable des traversées journalières',
      'Clarification : Ce projet constitue un concept architectural documenté et prototypé, non encore en exploitation commerciale'
    ],
    technologies: ['Architecture QR Code sécurisé', 'Passerelle SMS', 'Mobile Money', 'Contrôle hors-ligne', 'Cryptographie asymétrique'],
    architecturalHighlights: [
      'Génération de QR codes cryptographiquement signés pour validation sans connexion Internet permanente',
      'Modèle de synchronisation asynchrone pour les terminaux de contrôle aux embarcadères',
      'Interface avec les passerelles d’envoi de notifications SMS transactionnelles',
      'Piste d’audit infalsifiable pour la traçabilité des recettes de transport public'
    ],
    role: 'Architecte système & Spécificateur fonctionnel et technique',
    links: [
      {
        label: 'Spécifications',
        type: 'documentation',
        isAvailable: false,
        statusNote: 'Livre blanc et architecture conceptuelle communicables sur demande'
      }
    ],
    featured: false,
    metricsOrHighlight: 'Validation hors-ligne'
  },
  {
    id: 'quanta-dynamic',
    title: 'QUANTA Dynamic',
    subtitle: 'Initiative technologique consacrée aux solutions numériques, à l’IA et à la formation',
    category: 'entrepreneurship',
    categoryLabel: 'Entrepreneuriat Technologique',
    status: 'in_development',
    statusLabel: 'Initiative active',
    statusDescription: 'Structuration et développement de produits numériques à fort impact, services d’ingénierie logicielle et programmes de transfert de compétences tech.',
    summary: 'Initiative entrepreneuriale dédiée à la conception de logiciels critiques, aux applications intelligentes et au renforcement des compétences en ingénierie.',
    problemSolved: 'Le besoin croissant de logiciels pérennes, conçus selon les standards industriels mondiaux (Clean Architecture, DevOps), tout en répondant avec agilité aux défis des écosystèmes émergents et africains.',
    solutionAndValue: 'QUANTA Dynamic fédère des compétences de haut niveau pour concevoir des logiciels métiers robustes, propulser des innovations en intelligence artificielle et automatisation, et accompagner les organisations dans leur transformation digitale.',
    confirmedFeatures: [
      'Pôle Ingénierie & Développement Sur Mesure : Conception de plateformes web, mobiles et d’APIs d’entreprise',
      'Pôle R&D Algorithmique & Systèmes : Recherche et incubation de briques propriétaires telles que QUANTA Core',
      'Pôle IA & Automatisation des Processus : Intégration de modèles intelligents et d’outils d’automatisation',
      'Pôle Formation & Transfert de Compétences : Programmes d’accompagnement aux bonnes pratiques d’ingénierie logicielle'
    ],
    technologies: ['Ingénierie Logicielle', 'Clean Architecture', 'Intelligence Artificielle', 'Automatisation', 'Mentorat & Formation'],
    architecturalHighlights: [
      'Standardisation des pratiques d’ingénierie moderne (Clean Architecture, DevOps, tests automatisés)',
      'Développement de solutions adaptées aux réalités des marchés émergents et globaux',
      'Incubation de briques technologiques propriétaires (telles que QUANTA Core)',
      'Approche centrée sur la valeur mesurable et la pérennité logicielle'
    ],
    role: 'Fondateur & Lead Ingénieur',
    links: [
      {
        label: 'Découvrir l’initiative',
        type: 'documentation',
        isAvailable: true,
        url: '#quanta'
      }
    ],
    featured: true,
    metricsOrHighlight: 'Innovation & Impact'
  }
];

export const keyTechnologies: string[] = [
  'Toutes',
  'Spring Boot',
  'Flutter',
  'Angular',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'JWT',
  'Théorie de l’information',
];
