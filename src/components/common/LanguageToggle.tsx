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
        'px-2 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors inline-flex items-center gap-1 font-bold text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 shrink-0',
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
