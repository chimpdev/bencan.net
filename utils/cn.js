import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes when necessary.
 *
 * @param {...string} inputs - The class names to combine.
 * @returns {string} The combined class names.
 */
export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}