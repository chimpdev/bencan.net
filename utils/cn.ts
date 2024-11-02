import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from '@/types/index';

export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}