import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import { AR, EN } from '../utils/constants';
import { I18n, LanguageTag } from 'i18n-js';

export const DefaultLanguage: LanguageTag = EN;
const i18n = new I18n();

const translationGetters = {
  en: {
    common: require('./locales/en/common.json'),
    auth: require('./locales/en/auth.json'),
  },
  ar: {
    common: require('./locales/ar/common.json'),
    auth: require('./locales/ar/auth.json'),
  },
};

export const setI18nConfig = (appLang?: LanguageTag) => {
  const isRTLBool = appLang === AR;
  i18n.fallbacks = true;
  const translations = appLang ? [appLang] : Object.keys(translationGetters);

  const fallback = {
    languageTag: appLang ?? DefaultLanguage,
    isRTL: isRTLBool,
  };

  const { languageTag } = RNLocalize?.findBestLanguageTag(translations) || fallback;
  i18n.translations = { [languageTag]: translationGetters[languageTag] };
  i18n.locale = languageTag;
  I18nManager.allowRTL(isRTLBool);
  I18nManager.forceRTL(isRTLBool);
};

// The method we'll use instead of a regular string
export function strings(key: string, params: Record<string, any> = {}): string | null {
  return key ? i18n.t(key, params) : null;
}

export function getLocale(): LanguageTag {
  return i18n.locale as LanguageTag;
}

export function getLocaleInitials(): string {
  return i18n.locale.slice(0, 2);
}

export function isRTL(): boolean {
  return I18nManager.isRTL;
}

export default i18n;
