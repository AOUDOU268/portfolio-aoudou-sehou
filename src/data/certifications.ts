import type { Certification } from '../types/certification';

export const certificationsData: Certification[] = [
  // 1. Architecture & Backend
  {
    id: 'scalable-java-microservices-spring-boot',
    title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Architecture & Backend',
    categoryKey: 'architecture_backend',
    summary: 'Conception et déploiement de microservices résilients et élastiques avec l’écosystème Spring Boot et Spring Cloud.',
    topics: [
      'Architecture microservices & découplage de services',
      'Service Discovery, API Gateway et configuration centralisée',
      'Résilience applicative (Circuit Breakers) et communication inter-services',
      'Bonnes pratiques de scalabilité et monitoring'
    ]
  },
  {
    id: 'software-architecture-monolithic-systems',
    title: 'Software Architecture and Monolithic Systems',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Architecture & Backend',
    categoryKey: 'architecture_backend',
    summary: 'Maîtrise des principes de structuration des architectures logicielles, des monolithes modulaires et des compromis de conception.',
    topics: [
      'Patrons architecturaux et séparation des responsabilités',
      'Monolithes modulaires et architectures en couches',
      'Principes SOLID, couplage faible et haute cohésion',
      'Évolution architecturale et transition vers les services distribués'
    ]
  },

  // 2. Frontend Web
  {
    id: 'advanced-angular-development-rxjs',
    title: 'Advanced Angular Development and RxJS',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Frontend Web',
    categoryKey: 'frontend',
    summary: 'Développement d’interfaces web complexes avec Angular et la programmation réactive avancée avec RxJS.',
    topics: [
      'Programmation réactive avec Observables et opérateurs RxJS',
      'Gestion d’état avancée et flux asynchrones',
      'Optimisation des performances et détection des changements (OnPush)',
      'Routage avancé, guards et lazy-loading de modules'
    ]
  },
  {
    id: 'real-world-angular-projects-testing',
    title: 'Real-World Angular Projects, Testing, and Interview Prep',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Frontend Web',
    categoryKey: 'frontend',
    summary: 'Conception d’applications Angular de production, mise en place de tests automatisés et assurance qualité logicielle.',
    topics: [
      'Architecture modulaire d’applications d’entreprise',
      'Tests unitaires de composants et de services Angular',
      'Patterns de conception frontend et bonnes pratiques de code',
      'Intégration d’APIs REST sécurisées et gestion globale des erreurs'
    ]
  },

  // 3. Développement Mobile
  {
    id: 'flutter-dart-ios-android-mobile-apps',
    title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Développement Mobile',
    categoryKey: 'mobile',
    summary: 'Développement d’applications mobiles cross-platform performantes et natives pour iOS et Android avec Flutter et Dart.',
    topics: [
      'Développement multiplateforme avec le framework Flutter',
      'Conception d’interfaces déclaratives réactives et animations fluides',
      'Gestion d’état applicative et persistance locale',
      'Consommation d’APIs distantes et synchronisation de données'
    ]
  },
  {
    id: 'introduction-to-mobile-app-development',
    title: 'Introduction to Mobile App Development',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Développement Mobile',
    categoryKey: 'mobile',
    summary: 'Fondations du cycle de vie du développement mobile, de l’ergonomie utilisateur et des contraintes d’exécution sur smartphones.',
    topics: [
      'Cycle de vie d’une application mobile et gestion des ressources',
      'Principes d’ergonomie UI/UX sur écrans tactiles',
      'Contraintes de connectivité et stockage sur terminal',
      'Workflow de compilation et préparation aux plateformes mobiles'
    ]
  },

  // 4. Intelligence Artificielle & Data Science
  {
    id: 'genai-unlock-foundational-concepts',
    title: 'GenAI: Unlock Foundational Concepts',
    issuer: 'Google Cloud / Coursera',
    platform: 'Coursera',
    category: 'IA & Data Science',
    categoryKey: 'ai_data',
    summary: 'Compréhension rigoureuse des concepts fondamentaux de l’IA générative et du fonctionnement des modèles de fondation.',
    topics: [
      'Fondements théoriques de l’intelligence artificielle générative',
      'Architecture des modèles de fondation (Large Language Models)',
      'Différences clés entre apprentissage automatique classique et IA générative',
      'Principes directeurs du prompt design et ingénierie de requêtes'
    ]
  },
  {
    id: 'gen-ai-navigate-the-landscape',
    title: 'Gen AI: Navigate the Landscape',
    issuer: 'Google Cloud / Coursera',
    platform: 'Coursera',
    category: 'IA & Data Science',
    categoryKey: 'ai_data',
    summary: 'Panorama stratégique et méthodologique de l’écosystème de l’IA générative et de l’intégration applicative.',
    topics: [
      'Cartographie de l’écosystème et des outils d’IA générative',
      'Critères d’évaluation et de sélection de modèles pour des cas concrets',
      'Principes d’ingénierie logicielle pour l’intégration d’APIs d’IA',
      'Responsabilité, sûreté et bonnes pratiques d’implémentation'
    ]
  },
  {
    id: 'exploratory-data-analysis-machine-learning',
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'IA & Data Science',
    categoryKey: 'ai_data',
    summary: 'Analyse exploratoire de données, nettoyage, modélisation statistique et préparation de jeux de données pour le Machine Learning.',
    topics: [
      'Analyse statistique descriptive et détection de distributions',
      'Prétraitement, nettoyage de données et ingénierie des caractéristiques',
      'Visualisation analytique et détection des valeurs aberrantes',
      'Préparation de pipelines de données pour modèles prédictifs'
    ]
  },

  // 5. Réseaux & Virtualisation (Cisco)
  {
    id: 'ccna-networking-basics-switching-routing',
    title: 'CCNA: Networking Basics, Switching, Addressing, and Routing',
    issuer: 'Cisco / Coursera',
    platform: 'Coursera',
    category: 'Réseaux & Infrastructure',
    categoryKey: 'networks',
    summary: 'Fondations des réseaux informatiques, adressage IP, protocoles de routage et commutation de paquets.',
    topics: [
      'Modèles OSI et TCP/IP, encapsulation et protocoles réseau',
      'Adressage IPv4 et IPv6, calculs de sous-réseaux (VLSM)',
      'Principes de commutation Ethernet, VLANs et trunking',
      'Routage statique et dynamique, tables de routage et passerelles'
    ]
  },
  {
    id: 'ccnp-architecture-and-virtualization',
    title: 'CCNP: Architecture and Virtualization',
    issuer: 'Cisco / Coursera',
    platform: 'Coursera',
    category: 'Réseaux & Infrastructure',
    categoryKey: 'networks',
    summary: 'Architectures de réseaux d’entreprise avancées, technologies de virtualisation et segmentation d’infrastructures.',
    topics: [
      'Architectures réseaux d’entreprise haute disponibilité',
      'Virtualisation de réseaux et plans de contrôle/données',
      'Technologies de tunneling, VPNs et segmentation de flux',
      'Principes de supervision, sécurité d’infrastructure et résilience'
    ]
  },

  // 6. Systèmes Embarqués & IoT
  {
    id: 'arduino-platform-c-programming',
    title: 'The Arduino Platform and C Programming',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Systèmes & IoT',
    categoryKey: 'systems_iot',
    summary: 'Programmation en langage C pour microcontrôleurs, gestion des entrées/sorties et prototypage de systèmes embarqués.',
    topics: [
      'Programmation C appliquée aux microcontrôleurs',
      'Gestion des entrées/sorties numériques, analogiques et interruptions',
      'Interfaçage avec des capteurs, actionneurs et bus de communication',
      'Contraintes temps réel, gestion de la mémoire et optimisation de code bas niveau'
    ]
  },

  // 7. Langages & Méthodologie
  {
    id: 'programming-in-python',
    title: 'Programming in Python',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Langages & Algorithmique',
    categoryKey: 'ai_data',
    summary: 'Maîtrise de la syntaxe, des structures de données et des paradigmes de programmation avec le langage Python.',
    topics: [
      'Structures de données natives (listes, tuples, dictionnaires, ensembles)',
      'Programmation orientée objet en Python (classes, héritage, modules)',
      'Traitement de fichiers, manipulation de flux et gestion des exceptions',
      'Écriture de scripts automatisés et tests unitaires'
    ]
  },
  {
    id: 'capstone-project-management-real-world',
    title: 'Capstone: Applying Project Management in the Real World',
    issuer: 'Coursera',
    platform: 'Coursera',
    category: 'Gestion de Projet & Méthodologies',
    categoryKey: 'architecture_backend',
    summary: 'Mise en pratique approfondie des méthodologies de gestion de projets techniques sur des cas d’application réels.',
    topics: [
      'Cadrage de projet, définition du périmètre et charte de projet',
      'Planification des livrables, gestion des risques et matrice RACI',
      'Méthodologies agiles (Scrum/Kanban) et gestion de sprints',
      'Documentation technique et communication avec les parties prenantes'
    ]
  }
];

export const certificationCategories: { id: string; label: string }[] = [
  { id: 'all', label: 'Toutes les certifications' },
  { id: 'architecture_backend', label: 'Architecture & Backend' },
  { id: 'frontend', label: 'Frontend Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai_data', label: 'IA & Data Science' },
  { id: 'networks', label: 'Réseaux (Cisco)' },
  { id: 'systems_iot', label: 'Systèmes & IoT' },
];
