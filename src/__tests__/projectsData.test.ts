import { describe, it, expect } from 'vitest';
import { projectsData } from '../data/projects';
import type { ProjectStatus, ProjectCategory } from '../types/project';

describe('Vérification de l\'intégrité des données de projets', () => {
  it('doit contenir exactement les 5 projets confirmés', () => {
    expect(projectsData).toHaveLength(5);
    const projectIds = projectsData.map(p => p.id);
    expect(projectIds).toContain('agrima');
    expect(projectIds).toContain('justiciable-cm');
    expect(projectIds).toContain('quanta-compress');
    expect(projectIds).toContain('peag-cam');
    expect(projectIds).toContain('quanta-dynamic');
  });

  it('chaque projet doit détailler le problème résolu, la solution et les fonctionnalités confirmées', () => {
    projectsData.forEach(project => {
      expect(project.problemSolved).toBeTruthy();
      expect(project.solutionAndValue).toBeTruthy();
      expect(project.confirmedFeatures.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.architecturalHighlights.length).toBeGreaterThan(0);
      expect(project.role).toBeTruthy();
    });
  });

  it('doit distinguer les fonctionnalités prévues pour AGRIMA', () => {
    const agrima = projectsData.find(p => p.id === 'agrima');
    expect(agrima).toBeDefined();
    expect(agrima?.technologies).toEqual(
      expect.arrayContaining(['Angular', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker'])
    );
    expect(agrima?.plannedFeatures).toBeDefined();
    expect(agrima?.plannedFeatures?.length).toBeGreaterThan(0);
  });

  it('doit expliciter les enjeux de sécurité pour Justiciable CM sans divulguer de secrets', () => {
    const justiciable = projectsData.find(p => p.id === 'justiciable-cm');
    expect(justiciable).toBeDefined();
    expect(justiciable?.technologies).toEqual(
      expect.arrayContaining(['Flutter', 'Riverpod', 'GoRouter', 'Spring Boot', 'PostgreSQL', 'JWT'])
    );
    expect(justiciable?.securityHighlights).toBeDefined();
    expect(justiciable?.securityHighlights?.length).toBeGreaterThan(0);
  });

  it('doit préciser la démarche R&D et les limites pour QUANTA Core / Compress', () => {
    const quanta = projectsData.find(p => p.id === 'quanta-compress');
    expect(quanta).toBeDefined();
    expect(quanta?.status).toBe('experimental');
    expect(quanta?.experimentalApproach).toBeDefined();
    expect(quanta?.experimentalApproach?.some(a => a.includes('tous les formats'))).toBe(true);
  });

  it('doit présenter PEAG CAM comme un concept et prototypage', () => {
    const peag = projectsData.find(p => p.id === 'peag-cam');
    expect(peag).toBeDefined();
    expect(peag?.status).toBe('concept');
    expect(peag?.confirmedFeatures.some(f => f.includes('concept'))).toBe(true);
  });

  it('chaque projet doit avoir un statut transparent et valide', () => {
    const validStatuses: ProjectStatus[] = ['completed', 'in_development', 'experimental', 'concept'];
    projectsData.forEach(project => {
      expect(validStatuses).toContain(project.status);
      expect(project.statusLabel).toBeTruthy();
      expect(project.statusDescription).toBeTruthy();
    });
  });

  it('les catégories doivent être valides', () => {
    const validCategories: ProjectCategory[] = ['all', 'web', 'mobile', 'rd_systems', 'fintech_iot', 'entrepreneurship'];
    projectsData.forEach(project => {
      expect(validCategories).toContain(project.category);
    });
  });
});
