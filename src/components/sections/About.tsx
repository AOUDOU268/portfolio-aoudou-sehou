import React from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { GraduationCap, Code2, Sparkles, Rocket, CheckCircle2, Award } from 'lucide-react';
import { profileData } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-surface-light-subtle dark:bg-slate-950/50 border-y border-slate-200/80 dark:border-slate-800/60">
      <Container>
        <SectionHeader
          badgeText="À propos"
          title="Formation & Vision d'Ingénieur"
          subtitle="Un cursus d'excellence débuté à l'IUT de Ngaoundéré (Génie Informatique) et couronné à l'ENSPM Maroua (Diplôme d'Ingénieur en Génie Logiciel, Juillet 2026)."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* Bloc 1 : Formation Académique Officielle (ENSPM + IUT) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Diplôme d'Ingénieur ENSPM */}
            <Card className="border-brand-200/90 dark:border-blue-900/50 bg-gradient-to-br from-blue-50/50 via-white to-white dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-900">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-600 text-white shrink-0 shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-blue-400">
                      Diplôme d'Ingénieur
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      2023 — 2026
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {profileData.education.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                    {profileData.education.institutionFull} ({profileData.education.institution})
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 mb-3">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Filière Informatique et Télécommunications — <strong className="text-brand-700 dark:text-blue-400 font-semibold">Option Génie Logiciel</strong>
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Promotion Juillet 2026
                </p>
              </div>

              <div className="space-y-1.5">
                {profileData.education.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cursus initial IUT de Ngaoundéré */}
            {profileData.previousEducation && (
              <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                    <Award className="w-5 h-5 text-brand-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Formation Initiale
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                        {profileData.previousEducation.period}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {profileData.previousEducation.degree} — {profileData.previousEducation.field}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {profileData.previousEducation.institutionFull}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  {profileData.previousEducation.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

          </div>

          {/* Bloc 2 : Les trois centres d'intérêt majeurs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Centre 1 : Ingénierie logicielle */}
            <Card className="flex-1">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-brand-600 dark:text-blue-400 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Ingénierie Logicielle & Architectures Modernes
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Application rigoureuse de la <strong>Clean Architecture</strong>, des principes <strong>SOLID</strong> et du découplage système. Je veille à produire du code testable, documenté et maintenable, tant côté backend (Spring Boot) que sur les interfaces clientes (Angular, Flutter, React).
                  </p>
                </div>
              </div>
            </Card>

            {/* Centre 2 : IA & Expérimentation */}
            <Card className="flex-1">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Intelligence Artificielle & Automatisation
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Exploration d’algorithmes intelligents, analyse d'entropie (projet de recherche QUANTA Core) et intégration d'outils d'automatisation des flux pour réduire les tâches manuelles et optimiser les processus opérationnels.
                  </p>
                </div>
              </div>
            </Card>

            {/* Centre 3 : Entrepreneuriat technologique */}
            <Card className="flex-1">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Entrepreneuriat Technologique — QUANTA Dynamic
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Volonté affirmée de transformer les avancées technologiques en <strong>produits viables</strong> à fort impact. À travers l’initiative QUANTA Dynamic, je pilote la conception de solutions logicielles utiles pour nos écosystèmes.
                  </p>
                </div>
              </div>
            </Card>

          </div>

        </div>
      </Container>
    </section>
  );
};
