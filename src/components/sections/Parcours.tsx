import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { ScrollReveal } from '../common/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { GraduationCap, Briefcase, FolderGit2, HelpCircle, Calendar, MapPin, CheckCircle2, Printer } from 'lucide-react';
import type { TimelineItemType } from '../../types/timeline';

const typeIcons: Record<TimelineItemType, React.ReactNode> = {
  education: <GraduationCap className="w-5 h-5 text-brand-600 dark:text-blue-400" />,
  venture: <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  project: <FolderGit2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  pending: <HelpCircle className="w-5 h-5 text-slate-400 dark:text-slate-500" />,
};

const badgeClasses: Record<TimelineItemType, string> = {
  education: 'bg-blue-50 text-brand-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
  venture: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
  project: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
  pending: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
};

export const Parcours: React.FC = () => {
  const { t, timeline, profile } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="parcours" className="py-20 sm:py-24 print:py-4 print:bg-white relative overflow-hidden">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex-1">
              <SectionHeader
                badgeText={t('parcours.badge')}
                title={t('parcours.title')}
                subtitle={t('parcours.subtitle')}
              />
            </div>

            {/* Bouton d'impression propre pour recruteurs */}
            <div className="flex justify-center sm:justify-end pb-8 print:hidden shrink-0">
              <button
                onClick={handlePrint}
                type="button"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 dark:hover:text-blue-400 transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 hover:scale-105 transition-transform duration-200"
                aria-label={t('parcours.print_cv')}
              >
                <Printer className="w-4 h-4 text-brand-600 dark:text-blue-400" />
                <span>{t('parcours.print_cv')}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* En-tête uniquement visible à l'impression */}
        <div className="hidden print:block mb-6 pb-4 border-b border-slate-300">
          <h2 className="text-2xl font-bold text-slate-900">{profile.fullName}</h2>
          <p className="text-sm text-slate-700 font-medium">{profile.title}</p>
          <p className="text-xs text-slate-600 mt-1">
            Email : {profile.contact.email} | Formation : ENSPM (2026) & IUT de Ngaoundéré (2023)
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto print:max-w-none">
          {/* Ligne verticale de la frise chronologique avec dégradé moderne */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand-600 via-sky-500 to-indigo-600/40 print:left-4 print:bg-slate-300 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />

          <div className="space-y-8 sm:space-y-10 print:space-y-6">
            {timeline.map((item, index) => {
              const isPending = item.type === 'pending';

              return (
                <ScrollReveal key={item.id} animation="fade-up" delay={index * 65}>
                  <div className="relative flex items-start gap-5 sm:gap-8 print:gap-4 group">
                    
                    {/* Point d'ancrage timeline avec micro-interaction */}
                    <div className={`relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110 group-hover:shadow-md print:w-8 print:h-8 ${
                      isPending
                        ? 'bg-slate-50 dark:bg-slate-900 border-dashed border-slate-300 dark:border-slate-700 print:hidden'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-brand-500 dark:group-hover:border-blue-400 print:border-slate-400 print:shadow-none'
                    }`}>
                      {typeIcons[item.type]}
                    </div>

                    {/* Contenu de l'étape */}
                    <div className="flex-1 min-w-0 print:border-b print:border-slate-200 print:pb-4">
                      <Card className={`relative transition-all duration-300 print:shadow-none print:border-0 print:p-0 ${
                        isPending
                          ? 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                          : 'card-hover hover:border-brand-500/40 dark:hover:border-blue-500/40'
                      }`}>
                        
                        {/* En-tête : Badge et Période */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border print:border-slate-400 print:text-slate-800 ${badgeClasses[item.type]}`}>
                            {item.statusTag ?? item.organization}
                          </span>

                          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 print:text-slate-600">
                            <span className="flex items-center gap-1 font-medium">
                              <Calendar className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                              {item.period}
                            </span>
                            {item.location && (
                              <span className="hidden sm:flex items-center gap-1 print:inline">
                                <MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Titre et Sous-titre */}
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug print:text-slate-900 group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-brand-700 dark:text-blue-400 mt-0.5 print:text-slate-800">
                          {item.organization} — {item.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3 print:text-slate-700">
                          {item.description}
                        </p>

                        {/* Points clés vérifiés */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 print:border-slate-200 space-y-1.5">
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0 mt-0.5 print:text-slate-600" />
                                <span className="leading-relaxed">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                      </Card>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
