import React from 'react';
import type { ProjectStatus } from '../../types/project';
import { CheckCircle2, Clock, FlaskConical, Lightbulb } from 'lucide-react';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  label?: string;
}

const statusConfig: Record<ProjectStatus, {
  icon: React.ReactNode;
  className: string;
  label: string;
}> = {
  completed: {
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800',
    label: 'Terminé',
  },
  in_development: {
    icon: <Clock className="w-3.5 h-3.5" />,
    className: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800',
    label: 'En développement',
  },
  experimental: {
    icon: <FlaskConical className="w-3.5 h-3.5" />,
    className: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-400 dark:border-indigo-800',
    label: 'Expérimental / R&D',
  },
  concept: {
    icon: <Lightbulb className="w-3.5 h-3.5" />,
    className: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
    label: 'Concept',
  },
};

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({ status, label }) => {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${config.className}`}>
      {config.icon}
      {label ?? config.label}
    </span>
  );
};
