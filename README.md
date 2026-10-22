# Portfolio Professionnel — AOUDOU SEHOU

> **Ingénieur en Génie Logiciel & Architecte Solutions**  
> Diplômé de l'École Nationale Supérieure Polytechnique de Maroua (ENSPM, Promotion Juillet 2026)  
> Fondateur de l'initiative technologique **QUANTA Dynamic**

Ce projet constitue le portfolio officiel d'AOUDOU SEHOU. Développé en frontend statique moderne, ultra-rapide et accessible, il met en valeur son parcours polytechnique, ses compétences en conception logicielle, ses 5 projets majeurs avec leurs statuts réels d'ingénierie, et l'écosystème entrepreneurial QUANTA Dynamic.

---

## 🚀 Stack Technologique

- **Framework :** React 19 (avec TypeScript en mode strict `strict: true`)
- **Build Tool :** Vite (HMR instantané, bundling Rollup optimisé)
- **Styling :** Tailwind CSS v3.4 (design system sur-mesure avec support Dark / Light mode)
- **Iconographie :** `lucide-react` et composants SVG accessibles
- **Qualité de code :** ESLint 9 (Flat config avec règles React Hooks et TypeScript)
- **Tests unitaires :** Vitest
- **Déploiement cible :** Vercel (configuration avec en-têtes de sécurité dans `vercel.json`)

---

## 📁 Structure du Projet

```text
portfolio/
├── public/                      # Assets statiques distribués tels quels
│   ├── favicon.svg              # Favicon vectoriel haute définition (monogramme AS)
│   ├── aoudou-sehou.png         # Photo officielle pour les aperçus Open Graph & Twitter
│   ├── robots.txt               # Directives pour l'indexation par les moteurs de recherche
│   ├── sitemap.xml              # Carte du site pour le référencement
│   └── cv/                      # Dossier d'accueil pour le CV PDF (cv-aoudou-sehou.pdf)
├── src/
│   ├── assets/                  # Images et médias importés dans le bundle
│   │   ├── aoudou-sehou.png     # Portrait professionnel officiel
│   │   └── screenshots/         # Captures d'écran réelles des projets
│   ├── components/
│   │   ├── common/              # Composants réutilisables (Badge, Button, Card, Modal, ThemeToggle, SocialIcons)
│   │   ├── layout/              # Squelette (Navbar, Footer, SkipLink d'accessibilité)
│   │   ├── projects/            # Composants projets (ProjectCard, ProjectDetailModal, ProjectFilters, ProjectStatusBadge)
│   │   └── sections/            # Sections de la page (Hero, About, Projects, Skills, QuantaDynamic, Contact)
│   ├── data/                    # Données découplées et strictement typées
│   │   ├── profile.ts           # Bio, parcours ENSPM, contacts et aventure QUANTA Dynamic
│   │   ├── projects.ts          # Fiches des 5 projets avec statuts transparents
│   │   ├── skills.ts            # Matrice des compétences organisée par domaines
│   │   └── navigation.ts        # Liens d'ancrage du menu
│   ├── hooks/                   # Hooks React personnalisés (useTheme, useScrollSpy)
│   ├── types/                   # Déclarations TypeScript (Project, Profile, Skill)
│   ├── utils/                   # Fonctions utilitaires (cn = clsx + tailwind-merge)
│   ├── __tests__/               # Tests unitaires Vitest
│   ├── App.tsx                  # Composant racine orchestrant les sections
│   ├── index.css                # Directives Tailwind et design tokens
│   └── main.tsx                 # Point d'entrée de l'application
├── eslint.config.js             # Configuration ESLint 9
├── tailwind.config.js           # Configuration du thème, des couleurs et des ombrages
├── postcss.config.js            # Configuration PostCSS
├── tsconfig.json                # Références TypeScript
├── tsconfig.app.json            # Configuration TypeScript stricte de l'application
├── vercel.json                  # Règles de routage, en-têtes HTTP de sécurité et cache
├── .env.example                 # Variables d'environnement optionnelles
├── .gitignore                   # Exclusion des fichiers temporaires, builds et secrets
└── package.json                 # Scripts npm et dépendances
```

---

## 🛠️ Prérequis et Installation

### Prérequis
- **Node.js :** Version 18 ou supérieure recommandée (testé sous Node v25.8.2)
- **npm :** Version 9 ou supérieure (testé sous npm v11.11.1)
- **Git :** Installé pour la gestion des versions

### Installation

Dans un terminal (Windows PowerShell ou Bash) :

```powershell
# Cloner le dépôt ou se positionner dans le dossier
cd c:\Projects\portfolio

# Installer les dépendances
npm install
```

---

## 💻 Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement local avec HMR (`http://localhost:5173`) |
| `npm run build` | Vérifie les types (`tsc -b`) et compile le bundle de production dans `dist/` |
| `npm run typecheck` | Exécute la vérification stricte des types sans émettre de fichiers |
| `npm run lint` | Analyse le code source avec ESLint |
| `npm run lint:fix` | Corrige automatiquement les avertissements de style ESLint |
| `npm run test` | Exécute la suite de tests unitaires avec Vitest |
| `npm run preview` | Prévisualise localement le build de production généré dans `dist/` |

---

## 🔍 Les 5 Projets et la Politique de Transparence

Les projets présentés respectent scrupuleusement la vérité d'avancement technique :

1. **AGRIMA :** Marketplace agricole pour le Grand Nord Cameroun (*Angular, Spring Boot, PostgreSQL, MongoDB, Docker*) — **Statut : En développement**.
2. **Justiciable CM :** Application de services juridiques et citoyens (*Flutter, Spring Boot, PostgreSQL, JWT*) — **Statut : En développement**.
3. **QUANTA Core / QUANTA Compress :** R&D sur la compression sans perte adaptative et analyse d'entropie — **Statut : Expérimental / R&D**.
4. **PEAG CAM :** Paiement numérique et dématérialisation des péages de bacs de franchissement (*QR signés, SMS, validation hors-ligne*) — **Statut : Concept & Prototypage**.
5. **QUANTA Dynamic :** Initiative entrepreneuriale en solutions logicielles, R&D et formation — **Statut : Initiative active**.

---

## 🚢 Déploiement sur Vercel

Le projet est configuré pour un déploiement continu et sans friction sur Vercel :

1. Pousser le code sur un dépôt GitHub :
   ```powershell
   git init
   git add .
   git commit -m "feat: portfolio professionnel complet AOUDOU SEHOU"
   git branch -M main
   git remote add origin https://github.com/<votre-identifiant>/portfolio.git
   git push -u origin main
   ```
2. Aller sur [vercel.com](https://vercel.com) et cliquer sur **Add New Project**.
3. Importer le dépôt `portfolio`.
4. Vercel détecte automatiquement le preset **Vite**.
5. Cliquer sur **Deploy**. Le fichier [vercel.json](file:///c:/Projects/portfolio/vercel.json) applique automatiquement :
   - Les en-têtes de sécurité HTTP (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
   - La mise en cache immuable d'un an pour les assets statiques (`/assets/*`)
   - La redirection SPA vers `/index.html`

---

## ♿ Accessibilité (a11y) & SEO

- **Conformité WCAG 2.1 AA :** Ratios de contrastes supérieurs à 4.5:1, navigation clavier fluide, lien d'évitement (`SkipLink`), gestion du focus sur la modale (`Escape` pour fermer).
- **SEO :** Balisage Open Graph, Twitter Cards, balises meta uniques, sitemap XML, robots.txt et microdonnées Schema.org (`Person`, `EducationalOrganization`).

---

## 📝 Personnalisation & Activation en Production

### 1. Dépôt du véritable CV PDF
Pour activer le bouton de téléchargement direct du CV :
1. Déposez votre document PDF à l'emplacement exact :
   `public/files/cv-aoudou-sehou.pdf`
2. Dès sa présence, le hook React détecte le fichier (`HEAD /files/cv-aoudou-sehou.pdf` = 200) et active automatiquement le bouton de téléchargement sous le nom `CV_AOUDOU_SEHOU.pdf`.
3. Tant que le fichier n'est pas présent, le bouton reste proprement désactivé avec une mention explicite et un lien vers une demande par email direct (`aoudousehou@gmail.com`).

### 2. Activation du Formulaire de Contact avec Formspree
Le formulaire de contact supporte l'envoi statique sécurisé via [Formspree](https://formspree.io) sans aucune clé secrète dans le frontend :
1. Créez un compte gratuit sur [formspree.io](https://formspree.io) et créez un nouveau formulaire.
2. Formspree vous fournit un identifiant d'endpoint de 8 caractères (ex: `xvgowpqk`).
3. En local : ajoutez dans un fichier `.env` :
   ```env
   VITE_FORMSPREE_FORM_ID=xvgowpqk
   ```
4. Sur Vercel : dans les **Project Settings > Environment Variables**, ajoutez la variable `VITE_FORMSPREE_FORM_ID` avec votre identifiant puis redéployez.
5. **Politique de transparence :** Si cette variable n'est pas configurée, l'envoi direct est automatiquement désactivé et l'interface propose immédiatement le transfert préformaté via le client email (`mailto:`) pour garantir qu'aucun faux message de succès n'est affiché.

### 3. Certifications Google Cloud Gen AI
Les certifications officielles Google Cloud sont centralisées et typées dans `src/data/certifications.ts`. Elles s'affichent avec leurs notions clés vérifiées sans extrapolation de métadonnées ou d'identifiants non fournis.

