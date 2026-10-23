import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/SocialIcons';
import { Container } from '../common/Container';
import { ScrollReveal } from '../common/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { navItems } from '../../data/navigation';
import profilePhoto from '../../assets/aoudou-sehou.png';

export const Footer: React.FC = () => {
  const { t, profile } = useLanguage();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-14 pb-10 transition-colors">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-200 dark:border-slate-800/60">

          {/* Identité */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0">
                <img src={profilePhoto} alt={profile.fullName} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">{profile.fullName}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{profile.title}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              {t('footer.bio_short')}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`mailto:${profile.contact.email}?subject=Prise%20de%20contact%20-%20AOUDOU%20SEHOU`}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label={`Envoyer un email à ${profile.contact.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/AOUDOU268"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Profil GitHub d'AOUDOU SEHOU"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aoudou-sehou-7b8020440"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Profil LinkedIn d'AOUDOU SEHOU"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091392117097"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Profil Facebook d'AOUDOU SEHOU"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">{t('footer.nav')}</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a href={item.href} className="text-xs text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 transition-colors">
                    {t(`nav.${item.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">{t('footer.affiliations')}</h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">ENSPM Maroua</p>
                <p className="text-slate-500 dark:text-slate-400">{t('footer.enspm_desc')}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">QUANTA Dynamic</p>
                <p className="text-slate-500 dark:text-slate-400">{t('footer.quanta_desc')}</p>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Barre inférieure */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500">
            <p>© {new Date().getFullYear()} {profile.fullName}. {t('footer.rights')}</p>
            <div className="flex items-center gap-5">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-brand-700 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
                aria-label={t('footer.top')}
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t('footer.top')}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </footer>
  );
};
