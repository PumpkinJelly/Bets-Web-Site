import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = 'ru' | 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  const localValue = await requestLocale;
  const locale: Locale = routing.locales.includes(localValue as Locale) ? (localValue as Locale) : routing.defaultLocale;

  return{
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  }
});