import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme, className = '' }) => {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className={cn(
        'p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 shadow-subtle',
        className
      )}
    >
      {isDark
        ? <Sun className="w-4 h-4" />
        : <Moon className="w-4 h-4" />
      }
    </button>
  );
};
