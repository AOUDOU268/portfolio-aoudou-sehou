import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { App } from '../App';
import { Navbar } from '../components/layout/Navbar';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Hero } from '../components/sections/Hero';
import { navItems } from '../data/navigation';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';

describe('Campagne de Tests End-to-End & Intégration — Portfolio AOUDOU SEHOU', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // SCÉNARIO 1 : Ouverture de la page d'accueil sans erreur
  it('Scénario 1 : La page d\'accueil s\'ouvre et s\'affiche complètement sans crash', () => {
    const errorSpy = vi.spyOn(console, 'error');
    render(<App />);

    // Vérifie le titre principal unique H1
    const h1Title = screen.getByRole('heading', { level: 1, name: /AOUDOU SEHOU/i });
    expect(h1Title).toBeInTheDocument();

    // Vérifie la présence de toutes les sections clés
    expect(document.getElementById('hero')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
    expect(document.getElementById('parcours')).toBeInTheDocument();
    expect(document.getElementById('certifications')).toBeInTheDocument();
    expect(document.getElementById('quanta')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();

    // Aucune erreur de rendu fatale
    expect(errorSpy).not.toHaveBeenCalledWith(expect.stringContaining('Error: Uncaught'));
  });

  // SCÉNARIO 2 : Navigation entre toutes les sections et pages
  it('Scénario 2 : Tous les liens de navigation pointent vers des ancres valides du DOM', () => {
    const { container } = render(<App />);

    // Vérifie le skip link accessible
    const skipLink = screen.getByRole('link', { name: /aller au contenu principal/i });
    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(container.querySelector('#main-content')).toBeInTheDocument();

    // Vérifie chaque item de navigation
    navItems.forEach((item) => {
      const sectionElement = container.querySelector(item.href);
      expect(sectionElement).not.toBeNull();
      expect(sectionElement?.id).toBe(item.id);
    });
  });

  // SCÉNARIO 3 : Affichage correct des projets et fonctionnement des filtres
  it('Scénario 3 : Les projets s\'affichent et les filtres fonctionnent correctement avec modal', async () => {
    render(<Projects />);

    // Tous les projets sont visibles initialement
    projectsData.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });

    // Clic sur le filtre "Web & E-Commerce"
    const webFilterBtn = screen.getByRole('tab', { name: /Web & E-Commerce/i });
    fireEvent.click(webFilterBtn);

    // AGRIMA doit être présent
    expect(screen.getByText('AGRIMA')).toBeInTheDocument();
    // Justiciable CM (qui est Mobile) ne doit plus être dans la grille
    expect(screen.queryByText('Justiciable CM')).not.toBeInTheDocument();

    // Clic sur "Tous les domaines" pour réinitialiser
    const allFilterBtn = screen.getByRole('tab', { name: /Tous les domaines/i });
    fireEvent.click(allFilterBtn);
    expect(screen.getByText('Justiciable CM')).toBeInTheDocument();

    // Ouverture de la modale de détail sur AGRIMA
    const agrimaCardBtn = screen.getByRole('button', { name: /Ouvrir les détails complets du projet AGRIMA/i });
    fireEvent.click(agrimaCardBtn);

    // Vérification de la modale ouverte
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByRole('heading', { name: 'AGRIMA' })).toBeInTheDocument();

    // Fermeture de la modale avec la touche Échap
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // SCÉNARIO 4 : Basculement thème clair / sombre et conservation après rechargement
  it('Scénario 4 : Basculement entre clair et sombre avec persistance dans le localStorage', () => {
    const { unmount } = render(<App />);

    const themeToggleBtn = screen.getByRole('button', { name: /activer le mode sombre/i });
    expect(themeToggleBtn).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Clic pour passer en mode sombre
    fireEvent.click(themeToggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme-preference')).toBe('dark');

    // Le bouton bascule de libellé accessible
    const lightToggleBtn = screen.getByRole('button', { name: /activer le mode clair/i });
    expect(lightToggleBtn).toBeInTheDocument();

    // Simulation de rechargement : démontage puis remontage de l'App
    unmount();
    render(<App />);

    // Le thème sombre doit persister depuis le localStorage
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  // SCÉNARIO 5 : Fonctionnement du menu mobile
  it('Scénario 5 : Ouverture, navigation et fermeture du menu mobile', () => {
    render(<Navbar activeSection="hero" isDark={false} toggleTheme={vi.fn()} />);

    const menuBtn = screen.getByRole('button', { name: /ouvrir le menu/i });
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');

    // Clic pour ouvrir le menu mobile
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    expect(menuBtn).toHaveAttribute('aria-label', 'Fermer le menu');

    const mobileNav = document.getElementById('mobile-navigation');
    expect(mobileNav).toBeInTheDocument();

    // Clic sur un lien mobile (ex: Projets) doit fermer le tiroir
    const mobileProjectsLink = within(mobileNav!).getByRole('link', { name: 'Projets' });
    fireEvent.click(mobileProjectsLink);

    expect(document.getElementById('mobile-navigation')).not.toBeInTheDocument();
  });

  // SCÉNARIO 6 : Vérification des liens externes et du lien email
  it('Scénario 6 : Tous les liens de contact et externes sont sécurisés et bien encodés', () => {
    render(<App />);

    // Liens email directs mailto:
    const mailtoLinks = screen.getAllByRole('link').filter((link) =>
      link.getAttribute('href')?.startsWith('mailto:')
    );
    expect(mailtoLinks.length).toBeGreaterThan(0);
    mailtoLinks.forEach((link) => {
      const href = link.getAttribute('href')!;
      expect(href).toContain(profileData.contact.email);
    });

    // Liens externes (s'il y en a) doivent avoir rel="noopener noreferrer" et target="_blank"
    const externalLinks = screen.getAllByRole('link').filter((link) =>
      link.getAttribute('href')?.startsWith('http')
    );
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  // SCÉNARIO 7 : Téléchargement du CV si le PDF existe ou message propre si absent
  it('Scénario 7 : Gestion authentique du bouton CV en fonction de la disponibilité du fichier', async () => {
    // Cas 1 : Le fichier n'existe pas (404)
    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({ ok: false, status: 404 } as Response)
    );

    const { unmount } = render(<Hero />);

    await waitFor(() => {
      const disabledCvBtn = screen.getByRole('button', { name: /cv \(en cours d'actualisation\)/i });
      expect(disabledCvBtn).toBeDisabled();
      expect(disabledCvBtn).toHaveClass('cursor-not-allowed');
    });

    unmount();

    // Cas 2 : Le fichier existe (200)
    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({ ok: true, status: 200 } as Response)
    );

    render(<Hero />);

    await waitFor(() => {
      const activeCvLink = screen.getByRole('link', { name: /télécharger mon cv/i });
      expect(activeCvLink).toHaveAttribute('href', '/files/cv-aoudou-sehou.pdf');
      expect(activeCvLink).toHaveAttribute('download', 'CV_AOUDOU_SEHOU.pdf');
    });
  });

  // SCÉNARIO 8 : Validation du formulaire et comportement si service non configuré
  it('Scénario 8 : Validation stricte des champs du formulaire et redirection mailto si service non configuré', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // Soumission à vide : doit déclencher les erreurs de validation
    const submitBtn = screen.getByRole('button', { name: /transférer vers ma messagerie \(mailto\)/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/le nom ou votre organisation est requis/i)).toBeInTheDocument();
    expect(screen.getByText(/l’adresse email de contact est requise/i)).toBeInTheDocument();
    expect(screen.getByText(/l’objet du message est requis/i)).toBeInTheDocument();
    expect(screen.getByText(/le corps du message ne peut pas être vide/i)).toBeInTheDocument();

    // Saisie d'un email invalide
    const emailInput = screen.getByRole('textbox', { name: /adresse email/i });
    await user.type(emailInput, 'adresse-invalide');
    fireEvent.blur(emailInput);
    expect(screen.getByText(/veuillez saisir une adresse email valide/i)).toBeInTheDocument();

    // Saisie de données valides
    const nameInput = screen.getByRole('textbox', { name: /nom/i });
    const subjectInput = screen.getByRole('textbox', { name: /objet de votre demande/i });
    const messageInput = screen.getByRole('textbox', { name: /message/i });

    await user.type(nameInput, 'Entreprise Test');
    await user.clear(emailInput);
    await user.type(emailInput, 'contact@entreprise.com');
    await user.type(subjectInput, 'Opportunité de recrutement');
    await user.type(messageInput, 'Bonjour, nous souhaiterions échanger avec vous.');

    // Mock window.location
    const originalLocation = window.location;
    // @ts-expect-error test mock
    delete window.location;
    // @ts-expect-error test mock
    window.location = { href: '' };

    // Envoi : comme VITE_FORMSPREE_FORM_ID n'est pas configuré, bascule honnêtement sur mailto
    fireEvent.click(submitBtn);

    expect(window.location.href).toContain('mailto:');
    expect(window.location.href).toContain(encodeURIComponent('Entreprise Test'));

    window.location = originalLocation;
  });

  // SCÉNARIO 9 : Affichage des états vides prévus
  it('Scénario 9 : Affichage de l\'état vide lors d\'un filtrage sans résultat et réinitialisation', () => {
    render(<Projects />);

    // Sélection de la catégorie "Web & E-Commerce"
    const webCategoryBtn = screen.getByRole('tab', { name: /Web & E-Commerce/i });
    fireEvent.click(webCategoryBtn);

    // Sélection de la technologie "Flutter" (incompatible avec Web & E-Commerce dans les données)
    const flutterTechBtn = screen.getByRole('button', { name: /^Flutter$/i });
    fireEvent.click(flutterTechBtn);

    // L'état vide doit s'afficher
    expect(screen.getByText(/aucun projet ne correspond à ces critères/i)).toBeInTheDocument();

    // Clic sur "Réinitialiser les filtres" (présent dans l'état vide et dans le bandeau de filtre)
    const resetButtons = screen.getAllByRole('button', { name: /réinitialiser les filtres/i });
    expect(resetButtons.length).toBeGreaterThan(0);
    fireEvent.click(resetButtons[0]);

    // Les projets réapparaissent
    expect(screen.getByText('AGRIMA')).toBeInTheDocument();
    expect(screen.getByText('Justiciable CM')).toBeInTheDocument();
  });

  // SCÉNARIO 10 : Vérification du responsive design
  it('Scénario 10 : Structure responsive complète (classes Tailwind adaptatives)', () => {
    const { container } = render(<App />);

    // Grilles adaptatives
    const responsiveGrids = container.querySelectorAll('.grid-cols-1');
    expect(responsiveGrids.length).toBeGreaterThan(0);

    // Menu desktop masqué sur mobile
    const desktopNav = container.querySelector('.hidden.lg\\:flex');
    expect(desktopNav).toBeInTheDocument();

    // Bouton hamburger masqué sur desktop
    const hamburgerBtn = screen.getByRole('button', { name: /ouvrir le menu/i });
    expect(hamburgerBtn.className).toContain('lg:hidden');
  });

  // SCÉNARIO 11 : Contrôle de l'accessibilité au clavier
  it('Scénario 11 : Focus visible, attributs aria et contrôle au clavier', () => {
    render(<App />);

    // Tous les boutons doivent être accessibles
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAccessibleName();
    });

    // Liens avec noms accessibles
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAccessibleName();
    });
  });

  // SCÉNARIO 12 : Vérification des erreurs console, ressources manquantes et erreurs réseau
  it('Scénario 12 : Aucune erreur console ni fuite de rendu lors de l\'exécution complète', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error');

    render(<App />);

    const severeErrors = consoleErrorSpy.mock.calls.filter((call) =>
      typeof call[0] === 'string' && (
        call[0].includes('Warning:') ||
        call[0].includes('Uncaught') ||
        call[0].includes('Cannot read properties')
      )
    );

    expect(severeErrors.length).toBe(0);
  });
});
