import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import { Code2, Cpu, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import quantaLogoDark from '../../assets/quanta/logo_dark.jpg';

const pillarIcons: Record<string, React.ReactNode> = {
  'Code2': <Code2 className="w-5 h-5" />,
  'Cpu': <Cpu className="w-5 h-5" />,
  'Sparkles': <Sparkles className="w-5 h-5" />,
  'GraduationCap': <GraduationCap className="w-5 h-5" />,
};

export const QuantaDynamic: React.FC = () => {
  const { t, profile, language } = useLanguage();

  return (
    <section id="quanta" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Orbes ambiants dynamiques aux accents technologiques */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-brand-600/10 dark:bg-blue-600/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none animate-float-reverse" />

      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeader
            badgeText={t('quanta.badge')}
            title={t('quanta.title')}
            subtitle={profile.venture.tagline}
          />
        </ScrollReveal>

        {/* Bannière officielle QUANTA Dynamic */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-card mb-10 bg-slate-950 group">
            {/* Lueur d'aura au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 via-sky-500/10 to-indigo-600/20 opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />
            {/* Fond sobre uni */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

            <div className="relative px-8 sm:px-12 py-10 sm:py-12">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Contenu */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  {/* Logo officiel QUANTA Dynamic */}
                  <div className="flex justify-center md:justify-start mb-2">
                    <img
                      src={quantaLogoDark}
                      alt={language === 'fr' ? "QUANTA Dynamic — Logo officiel" : "QUANTA Dynamic — Official Logo"}
                      className="h-10 sm:h-12 object-contain"
                      style={{ maxWidth: 280 }}
                    />
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                    {profile.venture.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                    <Button
                      asLink
                      href="#contact"
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      {t('quanta.partner_btn')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quatre piliers avec animation décalée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.venture.pillars.map((pillar, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 90} className="h-full">
              <Card className="group flex flex-col h-full card-hover hover:border-brand-500/40 dark:hover:border-blue-500/40">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-700 dark:text-blue-400 w-fit mb-4 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300">
                  {pillarIcons[pillar.icon] ?? <Code2 className="w-5 h-5" />}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                  {pillar.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Encart R&D QUANTA Core */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-surface-light-muted dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-blue-500/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700 dark:text-blue-400">
                  {t('quanta.core_focus')}
                </p>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t('quanta.core_title')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  {t('quanta.core_desc')}
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  asLink
                  href="#contact"
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {t('quanta.collab_btn')}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
};
