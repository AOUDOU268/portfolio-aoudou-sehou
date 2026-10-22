import { describe, it, expect } from 'vitest';
import { projectsData, keyTechnologies } from '../data/projects';

describe('Tests du filtrage des projets par domaine et technologie', () => {
  it('doit filtrer correctement par domaine web', () => {
    const webProjects = projectsData.filter(p => p.category === 'web');
    expect(webProjects.length).toBeGreaterThan(0);
    expect(webProjects.map(p => p.id)).toContain('agrima');
  });

  it('doit filtrer correctement par domaine mobile', () => {
    const mobileProjects = projectsData.filter(p => p.category === 'mobile');
    expect(mobileProjects.map(p => p.id)).toContain('justiciable-cm');
  });

  it('doit filtrer correctement par technologie Flutter', () => {
    const flutterProjects = projectsData.filter(p =>
      p.technologies.some(t => t.toLowerCase().includes('flutter'))
    );
    expect(flutterProjects.map(p => p.id)).toContain('justiciable-cm');
  });

  it('doit filtrer correctement par technologie Spring Boot', () => {
    const springProjects = projectsData.filter(p =>
      p.technologies.some(t => t.toLowerCase().includes('spring boot'))
    );
    const ids = springProjects.map(p => p.id);
    expect(ids).toContain('agrima');
    expect(ids).toContain('justiciable-cm');
  });

  it('doit retourner un résultat vide pour une combinaison inexistante', () => {
    const impossible = projectsData.filter(p =>
      p.category === 'rd_systems' && p.technologies.some(t => t.includes('Flutter'))
    );
    expect(impossible).toHaveLength(0);
  });

  it('la liste des technologies clés doit être définie et inclure les technologies phares', () => {
    expect(keyTechnologies).toContain('Spring Boot');
    expect(keyTechnologies).toContain('Flutter');
    expect(keyTechnologies).toContain('Angular');
    expect(keyTechnologies).toContain('PostgreSQL');
    expect(keyTechnologies).toContain('Docker');
  });
});
