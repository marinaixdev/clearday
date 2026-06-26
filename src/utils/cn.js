import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind class strings safely.
 *
 * clsx handles conditional logic (falsy values are dropped).
 * twMerge resolves conflicting Tailwind utilities so the last
 * one wins — e.g. cn('p-4', 'p-md') correctly yields 'p-md'.
 *
 * @param {...(string | boolean | null | undefined)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
