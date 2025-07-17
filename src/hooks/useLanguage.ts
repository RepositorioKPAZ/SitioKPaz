
import { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageProvider = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('kpaz-language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('kpaz-language', language);
  }, [language]);

  return { language, setLanguage };
};

export { LanguageContext };
