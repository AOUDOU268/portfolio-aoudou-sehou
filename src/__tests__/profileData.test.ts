import { describe, it, expect } from 'vitest';
import { profileData } from '../data/profile';

describe('Vérification des données de profil et formation ENSPM', () => {
  it('doit contenir le nom officiel AOUDOU SEHOU', () => {
    expect(profileData.fullName).toBe('AOUDOU SEHOU');
    expect(profileData.shortName).toBe('Aoudou');
  });

  it('doit référencer exactement l\'École Nationale Supérieure Polytechnique de Maroua et la promotion juillet 2026', () => {
    expect(profileData.education.institution).toBe('ENSPM');
    expect(profileData.education.institutionFull).toContain('Polytechnique de Maroua');
    expect(profileData.education.field).toContain('Génie Logiciel');
    expect(profileData.education.graduationDate).toContain('2026');
  });

  it('doit valoriser l\'initiative QUANTA Dynamic avec ses 4 piliers', () => {
    expect(profileData.venture.name).toBe('QUANTA Dynamic');
    expect(profileData.venture.pillars).toHaveLength(4);
  });
});
