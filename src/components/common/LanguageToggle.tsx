import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../utils/cn';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label={t('lang.toggle')}
      title={language === 'fr' ? 'Changer de langue (Switch to English)' : 'Switch language (Passer en Français)'}
      className={cn(
        'h-9 px-2 sm:px-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors inline-flex items-center gap-1 font-bold text-xs shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 shrink-0',
        className
      )}
    >
      <Globe className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
      <span className="tracking-wide uppercase text-[11px] font-bold">
        {language === 'fr' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};
