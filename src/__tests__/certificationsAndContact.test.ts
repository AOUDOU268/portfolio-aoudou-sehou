import { describe, it, expect } from 'vitest';
import { certificationsData, certificationCategories } from '../data/certifications';
import { profileData } from '../data/profile';

describe('Vérification des 14 Certifications Coursera officielles', () => {
  it('doit contenir exactement les 14 certifications Coursera de la pièce jointe', () => {
    expect(certificationsData).toHaveLength(14);
    const titles = certificationsData.map((c) => c.title);

    expect(titles).toContain('Advanced Angular Development and RxJS');
    expect(titles).toContain('Building Scalable Java Microservices with Spring Boot and Spring Cloud');
    expect(titles).toContain('Capstone: Applying Project Management in the Real World');
    expect(titles).toContain('CCNA: Networking Basics, Switching, Addressing, and Routing');
    expect(titles).toContain('CCNP: Architecture and Virtualization');
    expect(titles).toContain('Exploratory Data Analysis for Machine Learning');
    expect(titles).toContain('Flutter and Dart: Developing iOS, Android, and Mobile Apps');
    expect(titles).toContain('Gen AI: Navigate the Landscape');
    expect(titles).toContain('GenAI: Unlock Foundational Concepts');
    expect(titles).toContain('Introduction to Mobile App Development');
    expect(titles).toContain('Programming in Python');
    expect(titles).toContain('Real-World Angular Projects, Testing, and Interview Prep');
    expect(titles).toContain('Software Architecture and Monolithic Systems');
    expect(titles).toContain('The Arduino Platform and C Programming');
  });

  it('chaque certification doit avoir Coursera comme plateforme de délivrance', () => {
    certificationsData.forEach((cert) => {
      expect(cert.platform).toBe('Coursera');
      expect(cert.summary).toBeTruthy();
      expect(cert.topics.length).toBeGreaterThan(0);
    });
  });

  it('les catégories de certification doivent couvrir les 6 grands domaines d’ingénierie', () => {
    expect(certificationCategories.length).toBeGreaterThanOrEqual(7); // 'all' + 6 domaines
    const keys = certificationsData.map((c) => c.categoryKey);
    expect(keys).toContain('architecture_backend');
    expect(keys).toContain('frontend');
    expect(keys).toContain('mobile');
    expect(keys).toContain('ai_data');
    expect(keys).toContain('networks');
    expect(keys).toContain('systems_iot');
  });

  it('ne doit comporter aucune fausse date ni url arbitraire', () => {
    certificationsData.forEach((cert) => {
      const record = cert as unknown as Record<string, unknown>;
      expect(record.credentialId).toBeUndefined();
      expect(record.verificationUrl).toBeUndefined();
      expect(record.issueDate).toBeUndefined();
    });
  });
});

describe('Vérification des coordonnées et validation du formulaire de contact', () => {
  it('doit comporter la nouvelle adresse email officielle aoudousehou@gmail.com', () => {
    expect(profileData.contact.email).toBe('aoudousehou@gmail.com');
  });

  it('doit valider correctement les adresses emails avec une expression régulière stricte', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test('aoudousehou@gmail.com')).toBe(true);
    expect(emailRegex.test('test.user@domain.co')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
    expect(emailRegex.test('missing-domain@')).toBe(false);
    expect(emailRegex.test('@missing-user.com')).toBe(false);
  });

  it('doit encoder proprement les paramètres de l’URL mailto', () => {
    const subject = 'Opportunité ingénieur logiciel';
    const body = 'Bonjour Aoudou,\nNous souhaitons vous rencontrer.';
    const encodedSubject = encodeURIComponent(`[Portfolio] ${subject}`);
    const encodedBody = encodeURIComponent(body);
    const mailto = `mailto:${profileData.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    expect(mailto).toContain('mailto:aoudousehou@gmail.com');
    expect(mailto).toContain(encodedSubject);
    expect(mailto).toContain('%0A'); // saut de ligne encodé
  });

  it('les réseaux professionnels officiels (GitHub, LinkedIn, Facebook) doivent être configurés et disponibles', () => {
    const github = profileData.socials.find((s) => s.name === 'GitHub');
    const linkedin = profileData.socials.find((s) => s.name === 'LinkedIn');
    const facebook = profileData.socials.find((s) => s.name === 'Facebook');

    expect(github?.isAvailable).toBe(true);
    expect(github?.url).toBe('https://github.com/AOUDOU268');

    expect(linkedin?.isAvailable).toBe(true);
    expect(linkedin?.url).toBe('https://www.linkedin.com/in/aoudou-sehou-7b8020440');

    expect(facebook?.isAvailable).toBe(true);
    expect(facebook?.url).toBe('https://www.facebook.com/profile.php?id=100091392117097');
  });
});
