import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
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
    <section id="quanta" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          badgeText={t('quanta.badge')}
          title={t('quanta.title')}
          subtitle={profile.venture.tagline}
        />

        {/* Bannière officielle QUANTA Dynamic */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-card mb-10 bg-slate-950">
          {/* Fond sobre uni */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

          <div className="relative px-8 sm:px-12 py-10 sm:py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              {/* Contenu */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* Logo officiel QUANTA Dynamic — affiché tel quel, sans modification */}
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

        {/* Quatre piliers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.venture.pillars.map((pillar, i) => (
            <Card key={i} className="flex flex-col">
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-700 dark:text-blue-400 w-fit mb-4">
                {pillarIcons[pillar.icon] ?? <Code2 className="w-5 h-5" />}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Encart R&D QUANTA Core */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-surface-light-muted dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
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

      </Container>
    </section>
  );
};
