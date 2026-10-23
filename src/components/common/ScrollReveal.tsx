import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

export type RevealAnimation = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number; // en millisecondes (ex: 100, 200)
  duration?: number; // en millisecondes (ex: 600, 800)
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration,
  className,
  as: Component = 'div',
  style,
  ...props
}) => {
  const { ref, isVisible } = useScrollReveal();

  const animationClass = {
    'fade-up': 'reveal-fade-up',
    'fade-in': 'reveal-fade-in',
    'fade-left': 'reveal-fade-left',
    'fade-right': 'reveal-fade-right',
    'scale-up': 'reveal-scale-up',
  }[animation];

  const inlineStyle: React.CSSProperties = {
    ...style,
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'reveal-base',
        animationClass,
        isVisible && 'revealed',
        className
      )}
      style={inlineStyle}
      {...props}
    >
      {children}
    </Component>
  );
};
