export type Locale = (typeof locales)[number];

export const locales = ['he', 'es'] as const;
export const defaultLocale: Locale = 'he';