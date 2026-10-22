import { describe, it, expect } from 'vitest';
import { cn } from '../utils/cn';

describe('Utilitaire de classes cn (clsx + twMerge)', () => {
  it('doit combiner correctement plusieurs classes Tailwind', () => {
    const result = cn('px-4 py-2', 'bg-blue-600', 'text-white');
    expect(result).toBe('px-4 py-2 bg-blue-600 text-white');
  });

  it('doit résoudre les conflits Tailwind au profit de la dernière classe', () => {
    const result = cn('px-2 text-red-500', 'px-4 text-blue-500');
    expect(result).toBe('px-4 text-blue-500');
  });

  it('doit ignorer les valeurs falsy ou conditionnelles', () => {
    const isPrimary = false;
    const isRounded = true;
    const result = cn('base-class', isPrimary && 'bg-primary', isRounded && 'rounded-xl');
    expect(result).toBe('base-class rounded-xl');
  });
});
