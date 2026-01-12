import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';

import {getLocaleFromCookies, getMessages, isLocale} from '@/lib/locale';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = getLocaleFromCookies(cookieStore);

  // next-intl may call this without cookies in some edge cases; keep it safe.
  const locale = isLocale(cookieLocale) ? cookieLocale : 'fr';

  return {
    locale,
    messages: await getMessages(locale),
    timeZone: 'Africa/Abidjan'
  };
});
