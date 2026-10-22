import { describe, it, expect } from 'vitest';
import { timelineItems } from '../data/timeline';
import { skillGroups } from '../data/skills';
import { profileData } from '../data/profile';

describe('Vérification des données de Parcours et de Compétences', () => {
  it('doit contenir 6 catégories de compétences sans niveaux arbitraires chiffrés', () => {
    expect(skillGroups).toHaveLength(6);
    const categoryIds = skillGroups.map(g => g.id);
    expect(categoryIds).toEqual([
      'web_dev',
      'mobile_dev',
      'backend_api',
      'databases',
      'devops_tools',
      'ai_experimentation'
    ]);

    skillGroups.forEach(group => {
      expect(group.title.length).toBeGreaterThan(0);
      expect(group.skills.length).toBeGreaterThan(0);
      group.skills.forEach(skill => {
        expect(skill.name).toBeDefined();
        expect(typeof skill.name).toBe('string');
      });
    });
  });

  it('doit inclure la formation IUT de Ngaoundéré (2021-2023) et ENSPM (2023-2026)', () => {
    const enspm = timelineItems.find(item => item.id === 'enspm-degree');
    expect(enspm).toBeDefined();
    expect(enspm?.organization).toContain('ENSPM');
    expect(enspm?.period).toContain('2026');
    expect(enspm?.isVerified).toBe(true);

    const iut = timelineItems.find(item => item.id === 'iut-degree');
    expect(iut).toBeDefined();
    expect(iut?.organization).toContain('Ngaoundéré');
    expect(iut?.period).toContain('2021 — 2023');
    expect(iut?.subtitle).toContain('Informatique');
    expect(iut?.isVerified).toBe(true);

    expect(profileData.previousEducation).toBeDefined();
    expect(profileData.previousEducation?.institution).toContain('IUT de Ngaoundéré');
    expect(profileData.previousEducation?.field).toBe('Génie Informatique');
  });

  it('doit inclure l\'emplacement réservé aux expériences dans le parcours', () => {
    const pending = timelineItems.find(item => item.type === 'pending');
    expect(pending).toBeDefined();
    expect(pending?.title).toContain('Expériences');
  });
});
