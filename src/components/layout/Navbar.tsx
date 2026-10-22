import React, { useState } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { ThemeToggle } from '../common/ThemeToggle';
import { LanguageToggle } from '../common/LanguageToggle';
import { useCvAvailability } from '../../hooks/useCvAvailability';
import { useLanguage } from '../../context/LanguageContext';
import profilePhoto from '../../assets/aoudou-sehou.png';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAvailable: isCvAvailable, cvPath } = useCvAvailability();
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 transition-colors">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-3 gap-2">
          {/* Identité personnelle AOUDOU SEHOU — Photo plus grande et Nom STRICTEMENT horizontal */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-xl p-1 shrink-0"
            aria-label="AOUDOU SEHOU - Retour en haut de page"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-500/30 dark:border-blue-400/30 ring-2 ring-brand-500/10 dark:ring-blue-400/10 shadow-sm bg-slate-100 dark:bg-slate-800 shrink-0 group-hover:border-brand-500 dark:group-hover:border-blue-400 transition-all">
              <img
                src={profilePhoto}
                alt="AOUDOU SEHOU"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col text-left shrink-0">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base xl:text-lg tracking-tight whitespace-nowrap leading-none group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors">
                AOUDOU SEHOU
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap leading-none mt-1 hidden sm:block">
                {t('identity.role')}
              </span>
            </div>
          </a>

          {/* Navigation principale Desktop parfaitement alignée et dynamique */}
          <nav
            className="hidden lg:flex items-center p-1 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs backdrop-blur-md mx-1 xl:mx-3"
            aria-label="Navigation principale"
          >
            <div className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const label = item.id === 'quanta' ? (
                  <>
                    <span className="xl:hidden">QUANTA</span>
                    <span className="hidden xl:inline">{t('nav.quanta')}</span>
                  </>
                ) : (
                  t(`nav.${item.id}`)
                );
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative inline-flex items-center justify-center px-2 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-medium whitespace-nowrap transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
                      isActive
                        ? 'text-brand-700 dark:text-blue-400 font-semibold bg-white dark:bg-slate-800 shadow-xs border border-slate-200/80 dark:border-slate-700/80 scale-[1.02]'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 rounded-full bg-brand-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Actions & Boutons parfaitement harmonisés */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Bouton de bascule de langue FR / EN sans bordure */}
            <LanguageToggle />

            {/* Bouton de bascule de thème clair / sombre sans bordure */}
            <ThemeToggle
              isDark={isDark}
              toggleTheme={toggleTheme}
            />

            {/* Bouton Mon CV */}
            <div className="hidden sm:block">
              {isCvAvailable ? (
                <a
                  href={cvPath}
                  download="CV_AOUDOU_SEHOU.pdf"
                  className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  title="Télécharger mon CV (PDF)"
                >
                  <Download className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0" />
                  <span>{t('btn.cv')}</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 opacity-60 cursor-not-allowed"
                  title="Fichier CV disponible sous peu"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{t('btn.cv')}</span>
                </button>
              )}
            </div>

            {/* Bouton Contact */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="h-9 px-3 xl:px-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xl:inline">{t('btn.contact')}</span>
                <span className="xl:hidden">Contact</span>
              </a>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden h-9 w-9 p-0 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tiroir mobile accessible */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-dropdown motion-safe:animate-fade-in"
        >
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const label = t(`nav.${item.id}`);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-700 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-950/60 font-semibold border-l-4 border-brand-600 dark:border-blue-400 pl-3'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-blue-400 animate-pulse" aria-hidden="true" />
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              {isCvAvailable ? (
                <a
                  href={cvPath}
                  download="CV_AOUDOU_SEHOU.pdf"
                  className="w-full h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 text-xs font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4 text-brand-600 dark:text-blue-400" />
                  <span>{t('btn.cv')} (PDF)</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 text-xs font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>{t('btn.cv_short')}</span>
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-10 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t('btn.contact')}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

