import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-xl p-6 sm:p-7',
        'bg-white dark:bg-slate-900',
        'border border-slate-200/90 dark:border-slate-800',
        'shadow-card',
        interactive && 'hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
