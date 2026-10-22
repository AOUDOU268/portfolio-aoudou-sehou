import React, { useState } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { useCvAvailability } from '../../hooks/useCvAvailability';
import profilePhoto from '../../assets/aoudou-sehou.png';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAvailable: isCvAvailable, cvPath } = useCvAvailability();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-18 py-3.5">
          {/* Identité personnelle AOUDOU SEHOU */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1"
            aria-label="AOUDOU SEHOU - Retour en haut de page"
          >
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-subtle group-hover:border-brand-600 transition-colors">
              <img
                src={profilePhoto}
                alt="AOUDOU SEHOU"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                AOUDOU SEHOU
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Ingénieur en Génie Logiciel
              </span>
            </div>
          </a>

          {/* Navigation principale Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Téléchargement CV */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            {/* Bouton Télécharger le CV */}
            <div className="hidden sm:block">
              {isCvAvailable ? (
                <Button
                  asLink
                  href={cvPath}
                  download="CV_AOUDOU_SEHOU.pdf"
                  variant="outline"
                  size="sm"
                  icon={<Download className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />}
                  iconPosition="left"
                  className="text-xs font-semibold"
                >
                  Télécharger CV
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled
                  variant="outline"
                  size="sm"
                  icon={<Download className="w-3.5 h-3.5 text-slate-400" />}
                  iconPosition="left"
                  className="text-xs font-semibold opacity-60 cursor-not-allowed"
                  title="Fichier CV officiel en cours de dépôt dans public/files/cv-aoudou-sehou.pdf"
                >
                  CV (bientôt disponible)
                </Button>
              )}
            </div>

            {/* Bouton Contact */}
            <div className="hidden md:block">
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="sm"
                icon={<Mail className="w-3.5 h-3.5" />}
                iconPosition="left"
                className="text-xs font-semibold"
              >
                Me contacter
              </Button>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Tiroir mobile accessible */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-dropdown motion-safe:animate-fade-in"
        >
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              {isCvAvailable ? (
                <Button
                  asLink
                  href={cvPath}
                  download="CV_AOUDOU_SEHOU.pdf"
                  variant="outline"
                  size="md"
                  className="w-full text-xs font-semibold justify-center"
                  icon={<Download className="w-4 h-4 text-brand-600 dark:text-blue-400" />}
                  iconPosition="left"
                >
                  Télécharger le CV (PDF)
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled
                  variant="outline"
                  size="md"
                  className="w-full text-xs font-semibold justify-center opacity-60 cursor-not-allowed"
                  icon={<Download className="w-4 h-4 text-slate-400" />}
                  iconPosition="left"
                  title="Fichier CV officiel en cours de dépôt"
                >
                  CV (en cours d'actualisation)
                </Button>
              )}
              <Button
                asLink
                href="#contact"
                variant="primary"
                size="md"
                className="w-full text-xs font-semibold justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                Me contacter
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
