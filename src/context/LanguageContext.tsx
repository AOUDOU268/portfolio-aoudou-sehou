import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.hero': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.parcours': { fr: 'Parcours', en: 'Journey' },
  'nav.certifications': { fr: 'Certifications', en: 'Certifications' },
  'nav.quanta': { fr: 'QUANTA Dynamic', en: 'QUANTA Dynamic' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },

  // Header & Identity
  'identity.role': { fr: 'Ingénieur en Génie Logiciel', en: 'Software Engineer' },
  'btn.cv': { fr: 'Mon CV', en: 'My CV' },
  'btn.cv_short': { fr: 'Mon CV', en: 'My CV' },
  'btn.cv_soon': { fr: 'Mon CV (bientôt)', en: 'My CV (soon)' },
  'btn.contact': { fr: 'Me contacter', en: 'Contact me' },
  'btn.contact_short': { fr: 'Contact', en: 'Contact' },
  'theme.light': { fr: 'Activer le mode clair', en: 'Switch to light mode' },
  'theme.dark': { fr: 'Activer le mode sombre', en: 'Switch to dark mode' },
  'lang.toggle': { fr: 'Passer en anglais', en: 'Switch to French' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
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
      t: (key: string) => translations[key]?.['fr'] || key,
    };
  }
  return context;
};
