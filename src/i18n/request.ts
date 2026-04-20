import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeMessages = (await import(`../locales/${locale}.json`)).default;
  const fallbackMessages = locale !== 'en'
    ? (await import('../locales/en.json')).default
    : localeMessages;

  return {
    locale,
    messages: localeMessages,
    // Silent fallback: missing keys fall back to English value, never crash
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') {
        // suppress — fallback handles it
      }
    },
    getMessageFallback({ key, namespace }) {
      const path = [namespace, key].filter(Boolean).join('.');
      // Walk the English messages object to find the fallback
      const parts = path.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let val: any = fallbackMessages;
      for (const part of parts) {
        val = val?.[part];
      }
      return typeof val === 'string' ? val : key;
    }
  };
});
