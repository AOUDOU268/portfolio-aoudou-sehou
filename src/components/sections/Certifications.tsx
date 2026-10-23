import React, { useState, useMemo } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { certificationsData, certificationCategories } from '../../data/certifications';
import type { CertificationCategoryKey } from '../../types/certification';
import { useLanguage } from '../../context/LanguageContext';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Certifications: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CertificationCategoryKey>('all');

  const filteredCertifications = useMemo(() => {
    if (activeCategory === 'all') return certificationsData;
    return certificationsData.filter((c) => c.categoryKey === activeCategory);
  }, [activeCategory]);

  const getCategoryLabel = (id: string, defaultLabel: string): string => {
    if (language === 'fr') return defaultLabel;
    switch (id) {
      case 'all': return 'All Certifications';
      case 'architecture': return 'Architecture & Systems';
      case 'web_mobile': return 'Web, Mobile & Frontend';
      case 'backend_devops': return 'Backend, Cloud & DevOps';
      case 'ai_data': return 'AI & Data';
      case 'networking_security': return 'Networking & Security';
      default: return defaultLabel;
    }
  };

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-surface-light-subtle dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/60">
      <Container>
        <SectionHeader
          badgeText={t('certifications.badge')}
          title={t('certifications.title')}
          subtitle={
            language === 'fr'
              ? `Un ensemble de ${certificationsData.length} certifications spécialisées délivrées sur Coursera, validant des compétences en architecture logicielle, développement web & mobile, IA, réseaux Cisco et systèmes.`
              : `A verified portfolio of ${certificationsData.length} specialized certifications issued on Coursera, validating skills in software architecture, web & mobile engineering, AI, Cisco networking, and systems.`
          }
        />

        {/* Note de transparence */}
        <div className="flex items-center gap-2.5 max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
          <span>{t('certifications.transparency')}</span>
        </div>

        {/* Filtres par domaine technique */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <Filter className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
            <span>{t('certifications.filter_title')}</span>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label={language === 'fr' ? 'Filtrer les certifications par domaine' : 'Filter certifications by domain'}
          >
            {certificationCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? certificationsData.length
                : certificationsData.filter((c) => c.categoryKey === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id as CertificationCategoryKey)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600',
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  {getCategoryLabel(cat.id, cat.label)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => (
            <Card
              key={cert.id}
              className="flex flex-col h-full border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              {/* En-tête */}
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-brand-600 dark:text-blue-400 shrink-0 border border-blue-100 dark:border-blue-900/60 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/60">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 block truncate">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-2.5">
                {cert.title}
              </h3>

              {/* Résumé */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
                {cert.summary}
              </p>

              {/* Thématiques validées */}
              <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-600 dark:text-blue-400" />
                  {t('certifications.validated_topics')}
                </p>
                <ul className="space-y-1">
                  {cert.topics.slice(0, 3).map((topic, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed line-clamp-1">{topic}</span>
                    </li>
                  ))}
                  {cert.topics.length > 3 && (
                    <li className="text-[11px] text-slate-400 italic pl-5">
                      +{cert.topics.length - 3} {t('certifications.other_topics')}
                    </li>
                  )}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
