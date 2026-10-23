import React from 'react';
import type { Project } from '../../types/project';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ArrowRight, Code2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { t, language } = useLanguage();

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpenDetails(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(project);
        }
      }}
      aria-label={language === 'fr' ? `Ouvrir les détails complets du projet ${project.title}` : `Open full details for project ${project.title}`}
      className="group flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-card hover:border-brand-500/50 dark:hover:border-blue-500/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div className="p-6 flex flex-col h-full gap-4">

        {/* Domaine & Badge Statut vérifié */}
        <div className="flex items-start justify-between gap-2.5">
          <span className="text-[11px] font-bold text-brand-700 dark:text-blue-400 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <ProjectStatusBadge status={project.status} label={project.statusLabel} />
        </div>

        {/* Titre & Sous-titre */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-700 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-snug line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Résumé */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
          {project.summary}
        </p>

        {/* Problème & Solution en aperçu concis */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 space-y-1">
          <p className="line-clamp-1">
            <strong className="text-slate-700 dark:text-slate-300">{t('projects.card_challenge')}</strong> {project.problemSolved}
          </p>
        </div>

        {/* Stack technique confirmée */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Pied de carte : Rôle et Action */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono truncate max-w-[65%] flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{project.role.split('&')[0].trim()}</span>
          </span>

          <span className="inline-flex items-center gap-1 font-semibold text-brand-600 dark:text-blue-400 group-hover:gap-1.5 transition-all duration-150">
            {t('projects.card_details')}
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>
    </article>
  );
};
