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
        'p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 shrink-0',
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
