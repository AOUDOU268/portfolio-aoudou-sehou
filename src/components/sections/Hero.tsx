import React, { useState } from 'react';
import { ArrowDown, Mail, Download, MapPin, GraduationCap, UserCheck, ShieldCheck } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useLanguage } from '../../context/LanguageContext';
import { useCvAvailability } from '../../hooks/useCvAvailability';
import profilePhoto from '../../assets/aoudou-sehou.png';

export const Hero: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const { isAvailable: isCvAvailable, cvPath } = useCvAvailability();
  const { t, profile, language } = useLanguage();

  const titleParts = profile.title.split('|').map((part) => part.trim());

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 bg-white dark:bg-surface-dark overflow-hidden">
      {/* Halos dynamiques et orbes ambiants animés */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-500/10 dark:bg-blue-600/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-sky-400/10 dark:bg-indigo-600/15 blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(59,130,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">

          {/* Colonne gauche : Présentation et actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1 animate-fade-up">

            {/* Disponibilité & statut professionnel */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full shadow-xs hover:scale-105 transition-transform duration-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {profile.availability.label}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
                {t('hero.verified')}
              </span>
            </div>

            {/* Nom complet */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-blue-400 mb-2">
                {t('hero.portfolio_label')}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {profile.fullName}
              </h1>
            </div>

            {/* Titre professionnel bilingue */}
            <h2 className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-slate-700 dark:text-slate-200 leading-snug">
              {titleParts.map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-brand-600 dark:text-blue-400"> | </span>}
                  {part}
                </React.Fragment>
              ))}
            </h2>

            {/* Courte présentation : logiciels utiles, architectures modernes, résolution de problèmes */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'fr' ? (
                <>
                  Diplômé de l’<strong className="font-semibold text-slate-900 dark:text-white">ENSPM Maroua (Juillet 2026)</strong>, je conçois des <strong className="font-semibold text-slate-900 dark:text-white">logiciels utiles</strong> et performants. Mon approche repose sur des <strong className="font-semibold text-slate-900 dark:text-white">architectures modernes</strong>, le découplage rigoureux et la <strong className="font-semibold text-slate-900 dark:text-white">résolution concrète de problèmes</strong> réels à travers mes projets et l’initiative <strong className="font-semibold text-slate-900 dark:text-white">QUANTA Dynamic</strong>.
                </>
              ) : (
                <>
                  Software Engineering graduate from <strong className="font-semibold text-slate-900 dark:text-white">ENSPM Maroua (July 2026)</strong>, I engineer high-performance, <strong className="font-semibold text-slate-900 dark:text-white">purpose-built software</strong>. My methodology is rooted in <strong className="font-semibold text-slate-900 dark:text-white">modern architectures</strong>, rigorous decoupling, and <strong className="font-semibold text-slate-900 dark:text-white">solving real-world problems</strong> through tangible projects and the <strong className="font-semibold text-slate-900 dark:text-white">QUANTA Dynamic</strong> initiative.
                </>
              )}
            </p>

            {/* Repères académiques et géographiques */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
                {t('hero.degree_info')}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {t('hero.location_info')}
              </span>
            </div>

            {/* Trois boutons d'action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                asLink
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
              >
                {t('hero.view_projects')}
              </Button>

              {isCvAvailable ? (
                <Button
                  asLink
                  href={cvPath}
                  download="CV_AOUDOU_SEHOU.pdf"
                  variant="outline"
                  size="lg"
                  icon={<Download className="w-4 h-4 text-brand-600 dark:text-blue-400" />}
                  iconPosition="left"
                >
                  {t('hero.download_cv')}
                </Button>
              ) : (
                <div className="flex flex-col items-center sm:items-start">
                  <Button
                    type="button"
                    disabled
                    variant="outline"
                    size="lg"
                    icon={<Download className="w-4 h-4 text-slate-400" />}
                    iconPosition="left"
                    className="opacity-60 cursor-not-allowed"
                    title={language === 'fr' ? "Le fichier CV officiel dans public/files/cv-aoudou-sehou.pdf est en cours de dépôt" : "Official CV file in public/files/cv-aoudou-sehou.pdf is being updated"}
                  >
                    {t('hero.cv_updating')}
                  </Button>
                  <a
                    href={`mailto:${profile.contact.email}?subject=${encodeURIComponent(language === 'fr' ? 'Demande de CV - AOUDOU SEHOU' : 'CV Request - AOUDOU SEHOU')}`}
                    className="text-[11px] text-brand-600 dark:text-blue-400 hover:underline mt-1 font-medium"
                  >
                    {t('hero.cv_request_email')}
                  </a>
                </div>
              )}

              <Button
                asLink
                href="#contact"
                variant="ghost"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
              >
                {t('hero.contact_btn')}
              </Button>
            </div>

            {/* Piliers techniques phares */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                {t('hero.key_technologies')}
              </span>
              {['Spring Boot', 'Flutter', 'Angular', 'React & TS', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Colonne droite : Emplacement photo professionnelle avec fallback élégant */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-down">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              
              {/* Halo d'aura dynamique respirant derrière la photo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600/25 via-sky-500/20 to-indigo-600/25 rounded-3xl blur-xl animate-pulse-subtle -z-10" />

              {/* Bordure externe et ombre élégante */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] group">
                
                {!photoError ? (
                  <img
                    src={profilePhoto}
                    alt={`${profile.fullName} — ${profile.title}`}
                    className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: '4/4.9' }}
                    onError={() => setPhotoError(true)}
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  /* Fallback élégant si la photo n'est pas encore fournie */
                  <div
                    className="w-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
                    style={{ aspectRatio: '4/4.9' }}
                  >
                    <div className="w-24 h-24 rounded-full bg-brand-50 dark:bg-blue-950/80 border-2 border-brand-200 dark:border-blue-800 flex items-center justify-center mb-4">
                      <span className="text-2xl font-black text-brand-700 dark:text-blue-400">AS</span>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-base">{profile.fullName}</p>
                    <p className="text-xs text-brand-600 dark:text-blue-400 font-semibold mt-1">
                      {language === 'fr' ? 'Ingénieur Génie Logiciel' : 'Software Engineer'}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 max-w-[200px]">
                      ENSPM Maroua · {language === 'fr' ? 'Promotion Juillet 2026' : 'Class of July 2026'}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t('hero.official_photo')}</span>
                    </div>
                  </div>
                )}

                {/* Cartouche d'identification en bas de la photo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent px-4 pb-4 pt-12 backdrop-blur-[1px]">
                  <p className="text-white font-bold text-sm tracking-tight">{profile.fullName}</p>
                  <p className="text-blue-300 text-[11px] font-medium tracking-wide mt-0.5">
                    {t('hero.software_engineer_enspm')}
                  </p>
                </div>
              </div>

              {/* Badges d'information flottants avec micro-animations */}
              <div className="absolute -top-3 -left-6 hidden sm:block animate-float-slow">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 shadow-dropdown px-3.5 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <GraduationCap className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 dark:text-white leading-tight">ENSPM Maroua</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">{t('hero.enspm_field')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-6 hidden sm:block animate-float-reverse">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 shadow-dropdown px-3 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <Badge variant="success" size="sm">{t('hero.active_venture')}</Badge>
                  <p className="text-[10px] font-bold text-slate-900 dark:text-white">QUANTA Dynamic</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
