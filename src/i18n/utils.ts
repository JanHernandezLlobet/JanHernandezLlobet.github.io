import { ui, type Locale } from './ui';
export type { Locale } from './ui';

export const locales = ['fr', 'es', 'en'] as const satisfies readonly Locale[];
export const defaultLocale: Locale = 'fr';

export function getLangFromUrl(url: URL): Locale {
  const firstSegment = url.pathname.split('/').filter(Boolean)[0];
  return locales.includes(firstSegment as Locale) ? firstSegment as Locale : defaultLocale;
}

export function useTranslations(lang: Locale) {
  return ui[lang] ?? ui[defaultLocale];
}

export function getLocalizedPath(path: string, lang: Locale): string {
  const leadingSlashPath = path.startsWith('/') ? path : `/${path}`;
  const hasTrailingSlash = leadingSlashPath.endsWith('/');
  const segments = leadingSlashPath.split('/').filter(Boolean);

  if (segments[0] && locales.includes(segments[0] as Locale)) segments.shift();

  const route = segments.length ? `/${segments.join('/')}` : '/';
  const localized = lang === defaultLocale ? route : `/${lang}${route === '/' ? '' : route}`;
  return hasTrailingSlash && localized !== '/' ? `${localized}/` : localized;
}
