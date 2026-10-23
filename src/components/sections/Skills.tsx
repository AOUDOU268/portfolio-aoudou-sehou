import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Server, Smartphone, Cpu, Container as DockerIcon, Database, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Globe': <Globe className="w-5 h-5" />,
  'Smartphone': <Smartphone className="w-5 h-5" />,
  'Server': <Server className="w-5 h-5" />,
  'Database': <Database className="w-5 h-5" />,
  'Container': <DockerIcon className="w-5 h-5" />,
  'Cpu': <Cpu className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const { t, skills } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-24 bg-surface-light-subtle dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/60">
      <Container>
        <SectionHeader
          badgeText={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.map(group => (
            <Card key={group.id} className="flex flex-col h-full hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              {/* En-tête de catégorie */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-brand-600 dark:text-blue-400 shrink-0 border border-blue-100 dark:border-blue-900/60">
                  {iconMap[group.iconName] ?? <Server className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {group.title}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    {group.skills.length} {t('skills.confirmed_count')}
                  </span>
                </div>
              </div>

              {/* Description synthétique du domaine */}
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {group.description}
              </p>

              {/* Liste des compétences vérifiées */}
              <ul className="mt-auto space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className={skill.featured ? 'font-semibold text-slate-900 dark:text-white' : ''}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
