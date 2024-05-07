import AsyncStorage from '@react-native-async-storage/async-storage';
import { LANGUAGE_CODE_ASYNC_KEY } from '../constants';

/**
 *
 * @param key
 * @param value
 * @returns
 */
const setItem = async (key: string, value: string | null): Promise<boolean> => {
  try {
    if (value) {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (e) {
    return false;
  }
};

/**
 *
 * @param key
 * @returns
 */
const getItem = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

/**
 *
 * @param key
 * @returns
 */
const removeItem = async (key: string): Promise<void | null> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return null;
  }
};

/**
 *
 * @param language
 * @returns
 */
const saveLanguage = async (language: string): Promise<boolean> => {
  return setItem(LANGUAGE_CODE_ASYNC_KEY, language);
};

/**
 *
 * @returns
 */
const loadLanguageCode = async (): Promise<string | null> => {
  return getItem(LANGUAGE_CODE_ASYNC_KEY);
};

export { setItem, getItem, removeItem, saveLanguage, loadLanguageCode };
