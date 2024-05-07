import { Dimensions, I18nManager, Platform } from 'react-native';
import RNRestart from 'react-native-restart';
import { loadLanguageCode, saveLanguage } from '../storage';
import { AR, EN } from '../constants';
import { setI18nConfig } from '../../i18n';

/**
 * isIOS
 */
const isIOS = (): boolean => {
  return Platform.OS === 'ios';
};

/**
 * return device width
 */
const getDeviceWidth = (): number => {
  return Dimensions.get('window').width;
};

/**
 * return device height
 */
const getDeviceHeight = (): number => {
  return Dimensions.get('window').height;
};

/**
 * return true if @param a is empty or non empty valid string
 */
const isString = (a: any): boolean => {
  return typeof a === 'string';
};

/**
 * return true if @param a is non empty valid string
 */
const isNonEmptyString = (a: any): boolean => {
  return isString(a) && a !== '';
};

/**
 * return true if @param a is non empty valid string
 */
const isNonEmpty = (a: any): boolean => {
  return a?.toString()?.length > 0;
};

const changeAppLang = async (): Promise<void> => {
  try {
    const lastSelectedLanguage = await loadLanguageCode();
    const changeLanguage = lastSelectedLanguage === EN ? AR : EN;
    await saveLanguage(changeLanguage);
    setI18nConfig(changeLanguage);
    I18nManager.allowRTL(changeLanguage === AR);
    I18nManager.forceRTL(changeLanguage === AR);
    setTimeout(() => {
      RNRestart.Restart();
    }, 100);
  } catch (error) {
    // Handle error if needed
  }
};

/**
 * Export
 */
export {
  isIOS,
  getDeviceWidth,
  getDeviceHeight,
  isNonEmptyString,
  isNonEmpty,
  changeAppLang,
};
