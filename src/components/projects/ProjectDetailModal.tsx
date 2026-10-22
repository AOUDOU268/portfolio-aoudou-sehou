import React, { useEffect, useRef } from 'react';
import { X, Info, ShieldCheck, Layers, GitFork, ExternalLink, AlertCircle, CheckCircle2, Clock, Lock, FlaskConical } from 'lucide-react';
import type { Project } from '../../types/project';
import { ProjectStatusBadge } from './ProjectStatusBadge';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        previousFocus.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Overlay avec flou subtil */}
      <div
        className="absolute inset-0 bg-slate-950/50 dark:bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panneau principal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-[0_24px_80px_-12px_rgba(15,23,42,0.22)] dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in zoom-in-95 duration-150">

        {/* En-tête de modale */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 shrink-0">
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-brand-700 dark:text-blue-400 uppercase tracking-wider mb-1 block">
              {project.categoryLabel}
            </span>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 pt-1">
            <ProjectStatusBadge status={project.status} label={project.statusLabel} />
            <button
              ref={closeBtnRef}
              onClick={onClose}
              type="button"
              aria-label="Fermer la fenêtre de détails"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Corps défilable */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-6">

          {/* Bandeau de transparence & statut vérifié */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50">
            <Info className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-slate-900 dark:text-white mb-0.5">Statut de validation d'ingénierie</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.statusDescription}</p>
            </div>
          </div>

          {/* 1. Problème à résoudre */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Le Problème à Résoudre
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-amber-50/40 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
              {project.problemSolved}
            </p>
          </div>

          {/* 2. Solution & Valeur ajoutée */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                La Solution & Valeur Ajoutée
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40">
              {project.solutionAndValue}
            </p>
          </div>

          {/* 3. Fonctionnalités confirmées (réalisées) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-brand-600 dark:text-blue-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Fonctionnalités Confirmées
              </h3>
            </div>
            <ul className="space-y-2">
              {project.confirmedFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Fonctionnalités prévues (Feuille de route) — distinction claire si présent */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2.5">
                <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Fonctionnalités Prévues (Feuille de route restante)
                </h3>
              </div>
              <ul className="space-y-1.5">
                {project.plannedFeatures.map((plan, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
                    <span className="leading-relaxed">{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Enjeux de sécurité (Justiciable CM) */}
          {project.securityHighlights && project.securityHighlights.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2.5">
                <Lock className="w-4 h-4 text-brand-600 dark:text-blue-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Enjeux & Principes de Sécurité (Protection des données)
                </h3>
              </div>
              <ul className="space-y-1.5">
                {project.securityHighlights.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-blue-400 shrink-0" />
                    <span className="leading-relaxed">{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. Démarche expérimentale & R&D (QUANTA Core) */}
          {project.experimentalApproach && project.experimentalApproach.length > 0 && (
            <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40">
              <div className="flex items-center gap-2 mb-2.5">
                <FlaskConical className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                  Démarche Expérimentale & Périmètre R&D
                </h3>
              </div>
              <ul className="space-y-1.5">
                {project.experimentalApproach.map((app, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                    <span className="leading-relaxed">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 7. Architecture logicielle */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-blue-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Choix d'Architecture Logicielle
              </h3>
            </div>
            <ul className="space-y-2">
              {project.architecturalHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-blue-500 shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Stack technique confirmée */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Stack Technique Confirmée
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Pied de modale */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Rôle d'Aoudou Sehou
            </p>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
              {project.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {project.links.map((link, i) =>
              link.isAvailable && link.url ? (
                <a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith('#') ? undefined : '_blank'}
                  rel={link.url.startsWith('#') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span
                  key={i}
                  title={link.statusNote}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 cursor-default"
                >
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  <span>{link.label}</span>
                  {link.statusNote && (
                    <span className="text-[10px] text-slate-400">({link.statusNote.split('—')[0].trim()})</span>
                  )}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
