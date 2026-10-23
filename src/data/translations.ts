import { profileData } from './profile';
import { projectsData } from './projects';
import { skillGroups } from './skills';
import { timelineItems } from './timeline';
import type { ProfileData } from '../types/profile';
import type { Project } from '../types/project';
import type { SkillGroup } from '../types/skill';
import type { TimelineItem } from '../types/timeline';

export type Language = 'fr' | 'en';

export const uiTranslations: Record<string, { fr: string; en: string }> = {
  // Navigation
  'nav.hero': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.parcours': { fr: 'Parcours', en: 'Journey' },
  'nav.certifications': { fr: 'Certifications', en: 'Certifications' },
  'nav.quanta': { fr: 'QUANTA Dynamic', en: 'QUANTA Dynamic' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },

  // Header & Identity
  'identity.role': { fr: 'Ingénieur en Génie Logiciel', en: 'Software Engineer' },
  'btn.cv': { fr: 'Mon CV', en: 'My CV' },
  'btn.cv_short': { fr: 'Mon CV', en: 'My CV' },
  'btn.cv_soon': { fr: 'Mon CV (bientôt)', en: 'My CV (soon)' },
  'btn.contact': { fr: 'Me contacter', en: 'Contact me' },
  'btn.contact_short': { fr: 'Contact', en: 'Contact' },
  'theme.light': { fr: 'Activer le mode clair', en: 'Switch to light mode' },
  'theme.dark': { fr: 'Activer le mode sombre', en: 'Switch to dark mode' },
  'lang.toggle': { fr: 'Passer en anglais', en: 'Switch to French' },

  // Hero Section
  'hero.verified': { fr: 'Profil vérifié', en: 'Verified Profile' },
  'hero.portfolio_label': { fr: 'Portfolio Professionnel', en: 'Professional Portfolio' },
  'hero.title_headline': {
    fr: 'Ingénieur logiciel | Développeur web & mobile | Solutions numériques et IA',
    en: 'Software Engineer | Web & Mobile Developer | Digital Solutions & AI'
  },
  'hero.degree_info': {
    fr: 'Diplôme d\'Ingénieur ENSPM (2026) · Génie Logiciel',
    en: 'Engineering Degree ENSPM (2026) · Software Engineering'
  },
  'hero.location_info': {
    fr: 'Cameroun · Disponible à l\'international (Télétravail / Mobilité)',
    en: 'Cameroon · Available internationally (Remote / Relocation)'
  },
  'hero.view_projects': { fr: 'Découvrir mes projets', en: 'View My Projects' },
  'hero.download_cv': { fr: 'Télécharger mon CV', en: 'Download My CV' },
  'hero.cv_updating': { fr: 'CV (en cours d\'actualisation)', en: 'CV (updating)' },
  'hero.contact_btn': { fr: 'Me contacter', en: 'Contact Me' },

  // About Section
  'about.badge': { fr: 'À propos', en: 'About Me' },
  'about.title': {
    fr: 'Ingénieur logiciel engagé pour des solutions pérennes',
    en: 'Software Engineer Committed to Sustainable Solutions'
  },
  'about.subtitle': {
    fr: 'Parcours d\'ingénierie, démarche de conception et vision technologique axée sur l\'utilité réelle.',
    en: 'Engineering journey, design methodology, and tech vision focused on real utility.'
  },
  'about.philosophy_title': { fr: 'Philosophie d\'Ingénierie', en: 'Engineering Philosophy' },
  'about.academic_track': { fr: 'Parcours Académique Polyvalent', en: 'Comprehensive Academic Background' },
  'about.academic_desc': {
    fr: 'Double formation d\'excellence combinant la rigueur technique du DUT en Génie Informatique (IUT de Ngaoundéré) et la maîtrise conceptuelle approfondie du Diplôme d\'Ingénieur de Conception en Génie Logiciel (ENSPM Maroua, 2026).',
    en: 'Dual excellence background combining hands-on technical foundations from DUT Computer Engineering (IUT Ngaoundéré) and advanced system architecture from the Master of Engineering in Software Engineering (ENSPM Maroua, 2026).'
  },
  'about.applied_approach': { fr: 'Approche Appliquée & Résiliente', en: 'Applied & Resilient Approach' },
  'about.applied_desc': {
    fr: 'Chaque projet est pensé pour résoudre une problématique terrain concrète (marchés agricoles, accès au droit, compression algorithmique) grâce à des architectures découplées, maintenables et évolutives.',
    en: 'Every project addresses concrete real-world challenges (agricultural marketplaces, legal access, algorithmic data compression) through decoupled, maintainable, and scalable architectures.'
  },

  // Projects Section
  'projects.badge': { fr: 'Réalisations', en: 'Portfolio' },
  'projects.title': {
    fr: 'Projets majeurs & systèmes conçus',
    en: 'Major Projects & Engineered Systems'
  },
  'projects.subtitle': {
    fr: 'Solutions web, mobiles et algorithmiques développées avec une exigence stricte de transparence et de robustesse technique.',
    en: 'Web, mobile, and algorithmic software developed with strict standards of technical robustness and transparency.'
  },
  'projects.filter_all': { fr: 'Tous les projets', en: 'All Projects' },
  'projects.filter_web': { fr: 'Web', en: 'Web' },
  'projects.filter_mobile': { fr: 'Mobile', en: 'Mobile' },
  'projects.filter_systems': { fr: 'Systèmes & Algorithmes', en: 'Systems & Algorithms' },
  'projects.view_details': { fr: 'Consulter l\'architecture détaillée', en: 'View Detailed Architecture' },
  'projects.problem_label': { fr: 'Problématique résolue', en: 'Problem Solved' },
  'projects.architecture_label': { fr: 'Architecture & Choix techniques', en: 'Architecture & Tech Stack' },
  'projects.key_features': { fr: 'Fonctionnalités clés implémentées', en: 'Key Implemented Features' },
  'projects.future_roadmap': { fr: 'Évolutions & Roadmap planifiée', en: 'Planned Roadmap & Evolutions' },
  'projects.code_access': { fr: 'Code source', en: 'Source Code' },
  'projects.live_demo': { fr: 'Démonstration', en: 'Live Demo' },

  // Skills Section
  'skills.badge': { fr: 'Expertises', en: 'Expertise' },
  'skills.title': {
    fr: 'Compétences techniques & méthodologies',
    en: 'Technical Skills & Methodologies'
  },
  'skills.subtitle': {
    fr: 'Technologies, patrons d\'architecture et pratiques logicielles mis en œuvre dans mes réalisations concrètes.',
    en: 'Technologies, architectural design patterns, and engineering practices applied in my projects.'
  },

  // Parcours / Timeline Section
  'parcours.badge': { fr: 'Parcours', en: 'Journey' },
  'parcours.title': {
    fr: 'Formation académique & Expériences',
    en: 'Academic Background & Experience'
  },
  'parcours.subtitle': {
    fr: 'Trajectoire d\'ingénieur, jalons universitaires vérifiés et initiatives professionnelles.',
    en: 'Software engineering trajectory, verified academic milestones, and professional initiatives.'
  },
  'parcours.print_cv': { fr: 'Imprimer / Sauvegarder en PDF', en: 'Print / Save as PDF' },

  // Certifications Section
  'certifications.badge': { fr: 'Certifications', en: 'Certifications' },
  'certifications.title': {
    fr: 'Certifications & Formations validées',
    en: 'Validated Certifications & Courses'
  },
  'certifications.subtitle': {
    fr: 'Apprentissages continus certifiés sur les architectures modernes, le backend distribué et les frameworks récents.',
    en: 'Continuous certified learning in modern software architectures, distributed backend, and web frameworks.'
  },
  'certifications.verified_badge': { fr: 'Certificat vérifié', en: 'Verified Certificate' },

  // QUANTA Dynamic Section
  'quanta.badge': { fr: 'Initiative Technologique', en: 'Tech Venture' },
  'quanta.title': {
    fr: 'QUANTA Dynamic — R&D et solutions numériques',
    en: 'QUANTA Dynamic — R&D & Digital Solutions'
  },
  'quanta.subtitle': {
    fr: 'Structure technologique portée par AOUDOU SEHOU pour concevoir des logiciels utiles, innovants et à fort impact.',
    en: 'Technology initiative led by AOUDOU SEHOU to build high-impact, innovative, and sustainable software products.'
  },
  'quanta.pillars_title': { fr: 'Piliers d\'intervention', en: 'Core Focus Pillars' },

  // Contact Section
  'contact.badge': { fr: 'Contact', en: 'Contact' },
  'contact.title': {
    fr: 'Discutons d\'une opportunité ou d\'un projet',
    en: 'Let\'s Discuss an Opportunity or Project'
  },
  'contact.subtitle': {
    fr: 'Disponible pour recrutement en ingénierie logicielle, collaborations techniques et partenariats.',
    en: 'Available for software engineering roles, technical collaborations, and development partnerships.'
  },
  'contact.direct_btn': { fr: 'M\'écrire par email direct', en: 'Write Direct Email' },
  'contact.social_title': { fr: 'Réseaux & profils officiels', en: 'Official Profiles & Networks' },
  'contact.send_card_title': { fr: 'Envoyer un message', en: 'Send a Message' },
  'contact.form_secure_badge': { fr: 'Formulaire direct sécurisé', en: 'Direct Secure Form' },
  'contact.name_label': { fr: 'Nom / Organisation', en: 'Name / Organization' },
  'contact.email_label': { fr: 'Adresse email', en: 'Email address' },
  'contact.subject_label': { fr: 'Objet de votre demande', en: 'Subject of your request' },
  'contact.message_label': { fr: 'Message', en: 'Message' },
  'contact.submit_btn': { fr: 'Envoyer le message', en: 'Send Message' },
  'contact.sending_btn': { fr: 'Transmission en cours...', en: 'Sending...' },
  'contact.success_title': { fr: 'Message transmis avec succès !', en: 'Message Sent Successfully!' },
  'contact.success_desc': {
    fr: 'Votre demande a bien été envoyée à AOUDOU SEHOU. Une réponse vous parviendra dans les meilleurs délais.',
    en: 'Your inquiry has been delivered to AOUDOU SEHOU. You will receive a response promptly.'
  },
  'contact.send_another': { fr: 'Envoyer un autre message', en: 'Send another message' },
  'contact.copy_email': { fr: 'Copier l\'adresse', en: 'Copy email address' },
  'contact.copied': { fr: 'Copié !', en: 'Copied!' },
  'contact.response_time': { fr: 'Réponse habituelle sous 24h ouvrées', en: 'Typical response within 24 business hours' },

  // Footer Section
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.top': { fr: 'Haut', en: 'Top' },
  'footer.nav': { fr: 'Navigation', en: 'Navigation' },
  'footer.affiliations': { fr: 'Affiliations', en: 'Affiliations' },
  'footer.bio_short': {
    fr: "Ingénieur en génie logiciel diplômé de l'ENSPM Maroua (2026). Fondateur de l'initiative technologique QUANTA Dynamic.",
    en: "Software engineer graduated from ENSPM Maroua (2026). Founder of the QUANTA Dynamic tech initiative."
  },
  'footer.enspm_desc': { fr: 'Génie Logiciel · Promotion 2026', en: 'Software Engineering · Class of 2026' },
  'footer.quanta_desc': { fr: 'Solutions numériques, R&D & Formation', en: 'Digital solutions, R&D & Training' },

  // Additional Hero Keys
  'hero.key_technologies': { fr: 'Technologies clés :', en: 'Key technologies:' },
  'hero.cv_request_email': { fr: 'Demander le CV par email direct', en: 'Request CV via direct email' },
  'hero.official_photo': { fr: 'Photo professionnelle officielle', en: 'Official professional photo' },
  'hero.software_engineer_enspm': { fr: 'Ingénieur logiciel · ENSPM 2026', en: 'Software Engineer · ENSPM 2026' },
  'hero.active_venture': { fr: 'Initiative active', en: 'Active initiative' },
  'hero.enspm_field': { fr: 'Génie Logiciel (2026)', en: 'Software Engineering (2026)' },

  // Additional About Keys
  'about.engineering_degree_badge': { fr: "Diplôme d'Ingénieur", en: 'Engineering Degree' },
  'about.initial_training_badge': { fr: 'Formation Initiale', en: 'Initial Foundation' },
  'about.promotion_2026': { fr: 'Promotion Juillet 2026', en: 'Graduation Class July 2026' },
  'about.option_se': { fr: 'Option Génie Logiciel', en: 'Software Engineering Major' },
  'about.field_prefix': { fr: 'Filière Informatique et Télécommunications — ', en: 'Computer Science & Telecommunications — ' },
  'about.pillar1_title': { fr: 'Ingénierie Logicielle & Architectures Modernes', en: 'Software Engineering & Modern Architectures' },
  'about.pillar1_desc': {
    fr: 'Application rigoureuse de la Clean Architecture, des principes SOLID et du découplage système. Je veille à produire du code testable, documenté et maintenable, tant côté backend (Spring Boot) que sur les interfaces clientes (Angular, Flutter, React).',
    en: 'Rigorous implementation of Clean Architecture, SOLID principles, and system decoupling. I ensure testable, documented, and maintainable code across backends (Spring Boot) and client apps (Angular, Flutter, React).'
  },
  'about.pillar2_title': { fr: 'Intelligence Artificielle & Automatisation', en: 'Artificial Intelligence & Automation' },
  'about.pillar2_desc': {
    fr: "Exploration d’algorithmes intelligents, analyse d'entropie (projet de recherche QUANTA Core) et intégration d'outils d'automatisation des flux pour réduire les tâches manuelles et optimiser les processus opérationnels.",
    en: 'Exploration of intelligent algorithms, entropy analysis (QUANTA Core research) and workflow automation integration to eliminate manual friction and streamline operational processes.'
  },
  'about.pillar3_title': { fr: 'Entrepreneuriat Technologique — QUANTA Dynamic', en: 'Technology Entrepreneurship — QUANTA Dynamic' },
  'about.pillar3_desc': {
    fr: 'Volonté affirmée de transformer les avancées technologiques en produits viables à fort impact. À travers l’initiative QUANTA Dynamic, je pilote la conception de solutions logicielles utiles pour nos écosystèmes.',
    en: 'Strong drive to turn technological advancements into viable, high-impact products. Through the QUANTA Dynamic initiative, I direct the design of purposeful software for real ecosystems.'
  },

  // Additional Projects & Filters Keys
  'projects.transparency_text': {
    fr: 'Chaque projet affiche son statut vérifié : En développement actif, Expérimental / R&D ou Concept & Prototypage.',
    en: 'Each project displays its verified status: In active development, Experimental / R&D, or Concept & Prototyping.'
  },
  'projects.domains_title': { fr: "Domaines d'ingénierie", en: 'Engineering domains' },
  'projects.filter_tech_title': { fr: 'Filtrer par technologie', en: 'Filter by technology' },
  'projects.all_domains': { fr: 'Tous les domaines', en: 'All domains' },
  'projects.all_tech': { fr: 'Toutes', en: 'All' },
  'projects.empty_title': { fr: 'Aucun projet ne correspond à ces critères', en: 'No project matches these criteria' },
  'projects.empty_desc': {
    fr: 'Essayez de modifier votre sélection de domaine ou de technologie pour afficher les réalisations correspondantes.',
    en: 'Try modifying your domain or technology selection to display corresponding projects.'
  },
  'projects.reset_btn': { fr: 'Réinitialiser les filtres', en: 'Reset filters' },
  'projects.card_challenge': { fr: 'Défi :', en: 'Challenge:' },
  'projects.card_details': { fr: 'Détails', en: 'Details' },

  // Modal Keys
  'modal.validation_title': { fr: "Statut de validation d'ingénierie", en: 'Engineering validation status' },
  'modal.problem_title': { fr: 'Le Problème à Résoudre', en: 'The Problem to Solve' },
  'modal.solution_title': { fr: 'La Solution & Valeur Ajoutée', en: 'The Solution & Added Value' },
  'modal.features_title': { fr: 'Fonctionnalités Confirmées', en: 'Confirmed Features' },
  'modal.roadmap_title': { fr: 'Fonctionnalités Prévues (Feuille de route restante)', en: 'Planned Features (Remaining Roadmap)' },
  'modal.security_title': { fr: 'Enjeux & Principes de Sécurité (Protection des données)', en: 'Security & Privacy Principles' },
  'modal.experimental_title': { fr: 'Démarche Expérimentale & Périmètre R&D', en: 'Experimental Approach & R&D Scope' },
  'modal.architecture_title': { fr: "Choix d'Architecture Logicielle", en: 'Software Architecture Choices' },
  'modal.stack_title': { fr: 'Stack Technique Confirmée', en: 'Confirmed Tech Stack' },
  'modal.role_title': { fr: "Rôle d'Aoudou Sehou", en: 'Role of Aoudou Sehou' },
  'modal.close': { fr: 'Fermer la fenêtre de détails', en: 'Close details modal' },

  // Additional Skills Keys
  'skills.confirmed_count': { fr: 'compétences confirmées', en: 'confirmed skills' },

  // Additional Quanta Keys
  'quanta.partner_btn': { fr: 'Proposer un partenariat', en: 'Propose a partnership' },
  'quanta.core_focus': { fr: 'Focus R&D · QUANTA Core', en: 'R&D Focus · QUANTA Core' },
  'quanta.core_title': { fr: 'Compression de Fichiers Sans Perte — Sélection Adaptative', en: 'Lossless File Compression — Adaptive Selection' },
  'quanta.core_desc': {
    fr: "Exploration de l'analyse entropique temps-réel pour sélectionner dynamiquement la stratégie de codage optimale. Architecture pensée pour des contraintes edge computing.",
    en: 'Real-time entropy analysis exploration to dynamically select the optimal compression strategy. Designed for edge computing constraints.'
  },
  'quanta.collab_btn': { fr: 'Collaborer sur ce sujet', en: 'Collaborate on this topic' },

  // Additional Certifications Keys
  'certifications.transparency': {
    fr: "Certifications Coursera (Google Cloud, Cisco, IBM, Meta, UC Irvine). Tous les intitulés correspondent rigoureusement aux certificats d'achèvement de cours.",
    en: 'Coursera certifications (Google Cloud, Cisco, IBM, Meta, UC Irvine). All titles strictly match course completion certificates.'
  },
  'certifications.filter_title': { fr: 'Domaines de certification', en: 'Certification domains' },
  'certifications.validated_topics': { fr: 'Notions validées :', en: 'Validated topics:' },
  'certifications.other_topics': { fr: 'autres compétences', en: 'other skills' },

  // Additional Contact Validation Keys
  'contact.validation_name_req': { fr: 'Le nom ou votre organisation est requis.', en: 'Name or organization is required.' },
  'contact.validation_name_len': { fr: 'Le nom doit comporter au moins 2 caractères.', en: 'Name must have at least 2 characters.' },
  'contact.validation_email_req': { fr: 'L’adresse email de contact est requise.', en: 'Contact email address is required.' },
  'contact.validation_email_invalid': { fr: 'Veuillez saisir une adresse email valide.', en: 'Please enter a valid email address.' },
  'contact.validation_subject_req': { fr: 'L’objet du message est requis.', en: 'Subject is required.' },
  'contact.validation_subject_len': { fr: 'L’objet doit comporter au moins 3 caractères.', en: 'Subject must have at least 3 characters.' },
  'contact.validation_msg_req': { fr: 'Le corps du message ne peut pas être vide.', en: 'Message cannot be empty.' },
  'contact.validation_msg_len': { fr: 'Le message doit comporter au moins 10 caractères.', en: 'Message must have at least 10 characters.' },
};

// Localized Profile Data generator
export function getLocalizedProfile(lang: Language): ProfileData {
  if (lang === 'fr') return profileData;

  return {
    ...profileData,
    title: 'Software Engineer | Web & Mobile Developer | Digital Solutions & AI',
    positioning: [
      'Software Engineering',
      'Web & Mobile Development',
      'Modern Architectures',
      'Digital Solutions & AI',
      'Technology Entrepreneurship (QUANTA Dynamic)'
    ],
    bio: 'Software Engineering graduate from École Nationale Supérieure Polytechnique de Maroua (ENSPM) in July 2026, following initial studies in Computer Engineering at IUT Ngaoundéré (2021-2023). I engineer reliable, resilient, and scalable software systems. Driven by modern software architecture, artificial intelligence, and applied entrepreneurship with QUANTA Dynamic, I build robust technology to solve real-world problems.',
    philosophy: 'Building useful software begins with a deep comprehension of real needs, choosing sustainable architectures, and executing with strict engineering rigor.',
    availability: {
      status: 'open_to_opportunities',
      label: 'Open to opportunities & collaborations',
      details: 'Available for software engineering positions, technical collaborations, and engineering consulting.'
    },
    education: {
      ...profileData.education,
      degree: 'Master of Engineering in Software Engineering',
      field: 'Computer Science and Telecommunications, Software Engineering major',
      graduationDate: 'July 2026',
      status: 'Graduated in July 2026',
      highlights: [
        'Advanced engineering curriculum in software architecture, distributed systems, and design patterns',
        'Specialization in Software Engineering: UML modeling, databases, application security, and Clean Architecture',
        'Leadership of applied engineering projects (web platforms, mobile systems, and algorithmic engines)'
      ]
    },
    previousEducation: profileData.previousEducation ? {
      ...profileData.previousEducation,
      degree: 'University Technology Diploma (DUT)',
      field: 'Computer Engineering',
      status: 'Graduated (Class of 2023)',
      highlights: [
        'Strong foundations in algorithms, data structures, and object-oriented programming',
        'Operating systems (Linux/Windows), network administration, and relational databases (SQL)',
        'Design and delivery of applied software and database projects'
      ]
    } : undefined,
    venture: {
      name: 'QUANTA Dynamic',
      tagline: 'Applied software solutions, algorithmic R&D & tech acceleration',
      description: 'An entrepreneurial technology initiative led by AOUDOU SEHOU, QUANTA Dynamic builds high-value software products, tackles algorithmic challenges (data compression, automation, AI), and delivers sustainable digital tools.',
      pillars: [
        {
          title: 'Custom Software Engineering',
          description: 'Design and implementation of resilient web applications, mobile systems, and scalable APIs adhering to modern architecture standards.',
          icon: 'Code2'
        },
        {
          title: 'Algorithmic R&D & Systems',
          description: 'Research and development of innovative algorithmic solutions, including the proprietary QUANTA Core engine.',
          icon: 'Cpu'
        },
        {
          title: 'AI & Process Automation',
          description: 'Integration of intelligent tools and workflow automation to solve high-friction operational challenges.',
          icon: 'Sparkles'
        },
        {
          title: 'Technical Consulting & Mentorship',
          description: 'Sharing software engineering best practices, architectural reviews, and high-standard development guidance.',
          icon: 'GraduationCap'
        }
      ]
    },
    contact: {
      ...profileData.contact,
      location: 'Cameroon & International (Available for remote work)',
      responseTime: 'Typical response within 24 business hours'
    }
  };
}

// Localized Projects Data generator
export function getLocalizedProjects(lang: Language): Project[] {
  if (lang === 'fr') return projectsData;

  return projectsData.map((project) => {
    switch (project.id) {
      case 'agrima':
        return {
          ...project,
          subtitle: 'Agricultural marketplace connecting rural farmers and consumers in North Cameroon',
          categoryLabel: 'Web & Agritech E-Commerce',
          statusLabel: 'Active Development',
          statusDescription: 'Spring Boot backend architecture and hybrid persistence under active consolidation; Angular interface in development.',
          summary: 'Digital marketplace enabling direct transactions between local farmers and urban consumers, eliminating speculative intermediaries.',
          problemSolved: 'In northern Cameroon, rural isolation and multiple speculative middlemen cause heavy post-harvest losses, decrease producer incomes, and artificially inflate food prices for urban families.',
          solutionAndValue: 'AGRIMA provides a direct transaction channel, transparent regional price catalog, and tailored logistical grouping designed for intermittent network connectivity.',
          role: 'Architectural design, domain modeling, Spring Boot backend development & initial Angular integration'
        };
      case 'justiciable-cm':
        return {
          ...project,
          subtitle: 'Mobile application & backend for citizen legal guidance and justice services in Cameroon',
          categoryLabel: 'Mobile & LegalTech',
          statusLabel: 'Active Development',
          statusDescription: 'Flutter mobile application and Spring Boot REST API delivering accessible legal rights and procedures.',
          summary: 'Mobile LegalTech platform simplifying access to legal procedures, authorized practitioners, and civic rights in Cameroon.',
          problemSolved: 'Citizens face a lack of clear legal information, complex procedural jargon, and difficulty connecting with verified legal professionals.',
          solutionAndValue: 'Provides intuitive mobile search, clear procedural guides, and direct consultation booking with accredited lawyers.',
          role: 'End-to-end design, Flutter cross-platform mobile development & Spring Boot REST API integration'
        };
      case 'quanta-core':
        return {
          ...project,
          subtitle: 'High-performance lossless data compression engine and algorithmic R&D',
          categoryLabel: 'Systems & Algorithmic R&D',
          statusLabel: 'Research & Validation',
          statusDescription: 'Experimental compression engine exploring adaptive entropy coding and streaming efficiency.',
          summary: 'Proprietary lossless data compression engine optimized for resource-constrained environments and high-speed data transfer.',
          problemSolved: 'High data transmission costs and bandwidth bottlenecks in developing infrastructure demand lightweight, lossless compression algorithms.',
          solutionAndValue: 'Achieves superior compression ratios with predictable memory footprint, ideal for low-bandwidth networks.',
          role: 'Algorithmic design, benchmark suite development, data structures engineering & performance optimization'
        };
      case 'peag-cam':
        return {
          ...project,
          subtitle: 'Agricultural ecosystem management and cooperative planning platform',
          categoryLabel: 'Enterprise Web & Management',
          statusLabel: 'In Design & Prototyping',
          statusDescription: 'Cooperative resource planning platform and seasonal production tracking system.',
          summary: 'Enterprise web system enabling agricultural cooperatives to plan harvests, track inputs, and optimize group logistics.',
          problemSolved: 'Cooperatives struggle with manual record keeping, fragmented crop forecasting, and logistical delays.',
          solutionAndValue: 'Centralizes farmer inventories, automates yield forecasting, and streamlines bulk purchasing.',
          role: 'Full-stack architecture, relational database design with PostgreSQL & Angular interface prototyping'
        };
      default:
        return project;
    }
  });
}

// Localized Skills Data generator
export function getLocalizedSkills(lang: Language): SkillGroup[] {
  if (lang === 'fr') return skillGroups;

  return [
    {
      id: 'web_dev',
      title: 'Web Development',
      description: 'Building responsive, ergonomic, and modular enterprise web applications with modern standards.',
      iconName: 'Globe',
      skills: [
        { name: 'Angular (Modular Enterprise Architectures)', featured: true },
        { name: 'React & TypeScript (Modern Frontend Ecosystem)', featured: true },
        { name: 'Semantic HTML5 & Modern CSS3 Layouts', featured: true },
        { name: 'Tailwind CSS (Atomic Design Systems)' },
        { name: 'Web Accessibility (a11y & WCAG Compliance)' },
        { name: 'Responsive Web Design & Mobile-First Approach' }
      ]
    },
    {
      id: 'mobile_dev',
      title: 'Mobile Development',
      description: 'High-performance cross-platform native mobile applications for iOS and Android.',
      iconName: 'Smartphone',
      skills: [
        { name: 'Flutter & Dart (Cross-platform iOS / Android)', featured: true },
        { name: 'Reactive UI Architecture & State Management', featured: true },
        { name: 'Secure REST API Integration' },
        { name: 'Local Persistence & Offline-First Mode' },
        { name: 'Complex User Flows & Form Validation' }
      ]
    },
    {
      id: 'backend_api',
      title: 'Backend & APIs',
      description: 'Architecture of resilient microservices, secure RESTful APIs, and decoupled business logic.',
      iconName: 'Server',
      skills: [
        { name: 'Spring Boot (Java — Modular Monoliths & Microservices)', featured: true },
        { name: 'Clean Architecture & SOLID Principles', featured: true },
        { name: 'RESTful API Design & OpenAPI/Swagger Contracts', featured: true },
        { name: 'Security with JWT Tokens & Role-Based Access (RBAC)' },
        { name: 'Application Logging & Global Exception Handling' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Persistence',
      description: 'Relational data modeling, transactional ACID integrity, and high-throughput queries.',
      iconName: 'Database',
      skills: [
        { name: 'PostgreSQL (Relational Modeling, Constraints, Indexing)', featured: true },
        { name: 'Advanced SQL Queries & Query Plan Optimization', featured: true },
        { name: 'MongoDB (Flexible Documents & Aggregation Pipelines)', featured: true },
        { name: 'JPA / Hibernate (ORM Mapping & Transaction Management)' },
        { name: 'Referential Integrity & Scalable Schemas' }
      ]
    },
    {
      id: 'devops_tools',
      title: 'DevOps & Tooling',
      description: 'Reproducible environments, version control hygiene, and automated delivery pipelines.',
      iconName: 'Terminal',
      skills: [
        { name: 'Docker & Docker Compose (Containerized Development)', featured: true },
        { name: 'Git & GitHub (Conventional Commits, Branching, PRs)', featured: true },
        { name: 'Vite & Rolldown (Fast Production Bundling & Optimization)', featured: true },
        { name: 'Automated Testing (Vitest, React Testing Library)', featured: true },
        { name: 'Linux Server Administration & Bash Scripting' }
      ]
    },
    {
      id: 'ai_experimentation',
      title: 'AI & Software Experimentation',
      description: 'Advanced algorithms exploration, information theory, and intelligent tooling integration.',
      iconName: 'Cpu',
      skills: [
        { name: 'Lossless Adaptive File Compression (QUANTA Core)', featured: true },
        { name: 'Information Theory & Data Entropy Profiling', featured: true },
        { name: 'Intelligent Models & AI API Integration', featured: true },
        { name: 'Operational Workflow Automation' },
        { name: 'Rapid Prototyping & Algorithmic Benchmarking' }
      ]
    }
  ];
}

// Localized Timeline Data generator
export function getLocalizedTimeline(lang: Language): TimelineItem[] {
  if (lang === 'fr') return timelineItems;

  return timelineItems.map((item) => {
    switch (item.id) {
      case 'enspm-degree':
        return {
          ...item,
          title: 'Master of Engineering in Software Engineering',
          subtitle: 'Computer Science and Telecommunications — Software Engineering Major',
          period: '2023 — July 2026',
          location: 'Maroua, Cameroon',
          description: 'Engineering graduate degree focused on methodological excellence, conceptual rigor, and end-to-end software lifecycle mastery.',
          highlights: [
            'Modern software architectures, SOLID principles, and Gang of Four Design Patterns',
            'Advanced software engineering: UML modeling, relational and NoSQL databases',
            'Distributed systems, networking, cybersecurity, and advanced algorithms',
            'Applied engineering research and capstone system delivery'
          ],
          statusTag: 'Verified Engineering Degree'
        };
      case 'iut-degree':
        return {
          ...item,
          title: 'University Technology Diploma (DUT) in Computer Engineering',
          subtitle: 'Higher University Diploma — Computer Science & Engineering',
          period: '2021 — 2023',
          location: 'Ngaoundere, Cameroon',
          description: 'Intensive university degree delivering fundamental computer engineering, software development, and systems administration.',
          highlights: [
            'Core algorithms, data structures, and object-oriented programming',
            'Relational database design and SQL implementation',
            'Operating systems (Linux/Windows), computer networks, and protocols',
            'Delivery of practical software engineering team projects'
          ],
          statusTag: 'Verified DUT Degree'
        };
      case 'quanta-venture':
        return {
          ...item,
          title: 'Founder & Lead Software Engineer',
          subtitle: 'Technology initiative & software solution builder',
          period: '2024 — Present',
          location: 'Cameroon & International',
          description: 'Creation and direction of an entrepreneurial venture dedicated to building useful software products, algorithmic R&D, and automation.',
          highlights: [
            'Technical leadership, system architecture choices, and code quality oversight',
            'Research and development on the proprietary QUANTA Core engine',
            'Implementation of engineering best practices (Clean Code, CI/CD, Docker containerization)'
          ],
          statusTag: 'Active Initiative'
        };
      case 'applied-engineering':
        return {
          ...item,
          title: 'Design & Engineering of Production Software Systems',
          subtitle: 'Portfolio of real-world web, mobile, and algorithmic platforms',
          period: '2023 — Present',
          location: 'Cameroon & Remote',
          description: 'Architecture and delivery of enterprise software: AGRIMA (agritech marketplace), Justiciable CM (legal mobile platform), and PEAG CAM.',
          highlights: [
            'End-to-end full-stack architectures: Spring Boot microservices, Angular, Flutter, PostgreSQL',
            'Performance optimization, offline synchronization, and responsive cross-device interfaces',
            'Automated testing suites and continuous delivery integration'
          ],
          statusTag: 'Demonstrated Projects'
        };
      default:
        return item;
    }
  });
}
