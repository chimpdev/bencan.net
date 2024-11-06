import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from '@/types/index';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes when necessary.
 *
 * @param {...ClassValue[]} inputs - An array of class values to be combined.
 * @returns {string} - A single string containing the combined class names.
 */
export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}