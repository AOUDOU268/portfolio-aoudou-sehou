import React, { useState } from 'react';
import { ArrowDown, Mail, Download, MapPin, GraduationCap, UserCheck, ShieldCheck } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { profileData } from '../../data/profile';
import { useCvAvailability } from '../../hooks/useCvAvailability';
import profilePhoto from '../../assets/aoudou-sehou.png';

export const Hero: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const { isAvailable: isCvAvailable, cvPath } = useCvAvailability();

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 bg-white dark:bg-surface-dark overflow-hidden">
      {/* Halo subtil d'arrière-plan sans saturation excessive */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(59,130,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Colonne gauche : Présentation et actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Disponibilité & statut professionnel */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {profileData.availability.label}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
                Profil vérifié
              </span>
            </div>

            {/* Nom complet */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-blue-400 mb-2">
                Portfolio Professionnel
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {profileData.fullName}
              </h1>
            </div>

            {/* Titre professionnel exact demandé */}
            <h2 className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-slate-700 dark:text-slate-200 leading-snug">
              Ingénieur logiciel{' '}
              <span className="text-brand-600 dark:text-blue-400">|</span> Développeur web & mobile{' '}
              <span className="text-brand-600 dark:text-blue-400">|</span> Solutions numériques et IA
            </h2>

            {/* Courte présentation : logiciels utiles, architectures modernes, résolution de problèmes */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Diplômé de l’<strong className="font-semibold text-slate-900 dark:text-white">ENSPM Maroua (Juillet 2026)</strong>, je conçois des <strong className="font-semibold text-slate-900 dark:text-white">logiciels utiles</strong> et performants. Mon approche repose sur des <strong className="font-semibold text-slate-900 dark:text-white">architectures modernes</strong>, le découplage rigoureux et la <strong className="font-semibold text-slate-900 dark:text-white">résolution concrète de problèmes</strong> réels à travers mes projets et l’initiative <strong className="font-semibold text-slate-900 dark:text-white">QUANTA Dynamic</strong>.
            </p>

            {/* Repères académiques et géographiques */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
                Diplôme d'Ingénieur ENSPM (2026) · Génie Logiciel
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                Cameroun · Disponible à l'international (Télétravail / Mobilité)
              </span>
            </div>

            {/* Trois boutons d'action obligatoires */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                asLink
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
              >
                Découvrir mes projets
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
                  Télécharger mon CV
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
                    title="Le fichier CV officiel dans public/files/cv-aoudou-sehou.pdf est en cours de dépôt"
                  >
                    CV (en cours d'actualisation)
                  </Button>
                  <a
                    href={`mailto:${profileData.contact.email}?subject=Demande%20de%20CV%20-%20AOUDOU%20SEHOU`}
                    className="text-[11px] text-brand-600 dark:text-blue-400 hover:underline mt-1 font-medium"
                  >
                    Demander le CV par email direct
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
                Me contacter
              </Button>
            </div>

            {/* Piliers techniques phares */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Technologies clés :
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              
              {/* Bordure externe et ombre élégante */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                
                {!photoError ? (
                  <img
                    src={profilePhoto}
                    alt="AOUDOU SEHOU — Ingénieur logiciel, diplômé de l'ENSPM (Juillet 2026)"
                    className="w-full object-cover object-top"
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
                    <p className="font-bold text-slate-900 dark:text-white text-base">AOUDOU SEHOU</p>
                    <p className="text-xs text-brand-600 dark:text-blue-400 font-semibold mt-1">
                      Ingénieur Génie Logiciel
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 max-w-[200px]">
                      ENSPM Maroua · Promotion Juillet 2026
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Photo professionnelle officielle</span>
                    </div>
                  </div>
                )}

                {/* Cartouche d'identification en bas de la photo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent px-4 pb-4 pt-12">
                  <p className="text-white font-bold text-sm tracking-tight">{profileData.fullName}</p>
                  <p className="text-blue-300 text-[11px] font-medium tracking-wide mt-0.5">
                    Ingénieur logiciel · ENSPM 2026
                  </p>
                </div>
              </div>

              {/* Badges d'information flottants */}
              <div className="absolute -top-3 -left-6 hidden sm:block">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-dropdown px-3.5 py-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 dark:text-white leading-tight">ENSPM Maroua</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Génie Logiciel (2026)</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-6 hidden sm:block">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-dropdown px-3 py-2 flex items-center gap-2">
                  <Badge variant="success" size="sm">Initiative active</Badge>
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
