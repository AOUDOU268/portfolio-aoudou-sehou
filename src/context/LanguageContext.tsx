import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  uiTranslations,
  getLocalizedProfile,
  getLocalizedProjects,
  getLocalizedSkills,
  getLocalizedTimeline,
  type Language,
} from '../data/translations';
import { certificationsData } from '../data/certifications';
import type { ProfileData } from '../types/profile';
import type { Project } from '../types/project';
import type { SkillGroup } from '../types/skill';
import type { TimelineItem } from '../types/timeline';
import type { Certification } from '../types/certification';

export type { Language };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  profile: ProfileData;
  projects: Project[];
  skills: SkillGroup[];
  timeline: TimelineItem[];
  certifications: Certification[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'portfolio_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored === 'en' || stored === 'fr') return stored;
    } catch {
      // Fallback
    }
    return 'fr';
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch {
      // Ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return uiTranslations[key]?.[language] || key;
  };

  const profile = useMemo(() => getLocalizedProfile(language), [language]);
  const projects = useMemo(() => getLocalizedProjects(language), [language]);
  const skills = useMemo(() => getLocalizedSkills(language), [language]);
  const timeline = useMemo(() => getLocalizedTimeline(language), [language]);
  const certifications = certificationsData;

  const value = {
    language,
    toggleLanguage,
    setLanguage,
    t,
    profile,
    projects,
    skills,
    timeline,
    certifications,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'fr',
      toggleLanguage: () => {},
      setLanguage: () => {},
      t: (key: string) => uiTranslations[key]?.['fr'] || key,
      profile: getLocalizedProfile('fr'),
      projects: getLocalizedProjects('fr'),
      skills: getLocalizedSkills('fr'),
      timeline: getLocalizedTimeline('fr'),
      certifications: certificationsData,
    };
  }
  return context;
};
