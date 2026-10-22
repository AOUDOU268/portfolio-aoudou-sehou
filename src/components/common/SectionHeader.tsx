import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn('mb-12 sm:mb-16', centered ? 'text-center' : 'text-left', className)}>
      {badgeText && (
        <div className={cn('mb-3 flex', centered ? 'justify-center' : 'justify-start')}>
          <Badge variant="primary" size="sm">
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
