import React from 'react';
import type { ProjectCategory } from '../../types/project';
import { cn } from '../../utils/cn';
import { Filter, Layers, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { keyTechnologies } from '../../data/projects';

interface ProjectFiltersProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  selectedTech: string;
  onSelectTech: (tech: string) => void;
  onResetFilters: () => void;
  totalFiltered: number;
  totalCount: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  selectedTech,
  onSelectTech,
  onResetFilters,
  totalFiltered,
  totalCount,
}) => {
  const { t, language } = useLanguage();

  const categoryOptions: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: language === 'fr' ? 'Tous les domaines' : 'All Domains' },
    { id: 'web', label: language === 'fr' ? 'Web & E-Commerce' : 'Web & E-Commerce' },
    { id: 'mobile', label: language === 'fr' ? 'Mobile & LegalTech' : 'Mobile & LegalTech' },
    { id: 'rd_systems', label: language === 'fr' ? 'R&D & Compression' : 'R&D & Compression' },
    { id: 'fintech_iot', label: language === 'fr' ? 'Fintech & QR' : 'Fintech & QR' },
    { id: 'entrepreneurship', label: language === 'fr' ? 'Entrepreneuriat' : 'Entrepreneurship' },
  ];

  const isFiltered = activeCategory !== 'all' || selectedTech !== 'Toutes';

  return (
    <div className="space-y-4 mb-10 max-w-4xl mx-auto">
      {/* 1. Filtres par Domaine (Catégorie) */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          <Layers className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
          <span>{t('projects.domains_title')}</span>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label={language === 'fr' ? 'Filtrer les projets par domaine' : 'Filter projects by domain'}
        >
          {categoryOptions.map((option) => {
            const isActive = activeCategory === option.id;
            return (
              <button
                key={option.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => onSelectCategory(option.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600',
                  isActive
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Filtres par Technologie */}
      <div className="flex flex-col items-center pt-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          <Filter className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
          <span>{t('projects.filter_tech_title')}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {keyTechnologies.map((tech) => {
            const isSelected = selectedTech === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onSelectTech(tech)}
                aria-pressed={isSelected}
                className={cn(
                  'px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600',
                  isSelected
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                )}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      {/* Compteur et bouton de réinitialisation si filtré */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
        <span>
          {language === 'fr' ? (
            <>Affichage de <strong className="text-slate-800 dark:text-slate-200">{totalFiltered}</strong> sur {totalCount} projets</>
          ) : (
            <>Showing <strong className="text-slate-800 dark:text-slate-200">{totalFiltered}</strong> of {totalCount} projects</>
          )}
        </span>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-blue-400 hover:text-brand-700 dark:hover:text-blue-300 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            {t('projects.reset_btn')}
          </button>
        )}
      </div>
    </div>
  );
};
