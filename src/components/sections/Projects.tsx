import React, { useState, useMemo } from 'react';
import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectFilters } from '../projects/ProjectFilters';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { projectsData } from '../../data/projects';
import type { Project, ProjectCategory } from '../../types/project';
import { Info, FolderSearch, RotateCcw } from 'lucide-react';
import { Button } from '../common/Button';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedTech, setSelectedTech] = useState<string>('Toutes');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filtrage combiné par domaine et technologie
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchTech = selectedTech === 'Toutes' || project.technologies.some(
        (t) => t.toLowerCase().includes(selectedTech.toLowerCase())
      );
      return matchCategory && matchTech;
    });
  }, [activeCategory, selectedTech]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSelectedTech('Toutes');
  };

  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          badgeText="Projets"
          title="Réalisations & Travaux R&D"
          subtitle="Cinq projets illustrant des problématiques réelles — avec leur statut d'ingénierie exact, sans sur-promesse."
        />

        {/* Bandeau de transparence méthodologique */}
        <div className="flex items-center gap-2.5 max-w-2xl mx-auto mb-8 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
          <Info className="w-4 h-4 text-brand-600 dark:text-blue-400 shrink-0" />
          <span>
            Chaque projet affiche son statut vérifié :{' '}
            <strong className="text-slate-800 dark:text-slate-200">En développement actif</strong>,{' '}
            <strong className="text-slate-800 dark:text-slate-200">Expérimental / R&D</strong> ou{' '}
            <strong className="text-slate-800 dark:text-slate-200">Concept & Prototypage</strong>.
          </span>
        </div>

        {/* Système de filtres par domaine et technologie */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
          onResetFilters={handleResetFilters}
          totalFiltered={filteredProjects.length}
          totalCount={projectsData.length}
        />

        {/* Grille de projets ou État vide */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          /* Gestion de l'état vide */
          <div className="max-w-md mx-auto text-center py-12 px-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-400 dark:text-slate-500">
              <FolderSearch className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Aucun projet ne correspond à ces critères
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
              Essayez de modifier votre sélection de domaine ou de technologie pour afficher les réalisations correspondantes.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleResetFilters}
              icon={<RotateCcw className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* Fenêtre de détails modale accessible */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};
