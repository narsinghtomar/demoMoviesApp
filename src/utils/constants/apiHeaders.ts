import {
  API_HEADER_AUTHORIZATION_KEY,
  API_HEADER_CONTENT_TYPE_KEY,
  API_HEADER_CONTENT_TYPE_JSON_VALUE,
  API_HEADER_SOURCE,
  API_HEADER_VERSION,
} from './apiCodes';
import { isIOS } from '../helper';
import { version as appVersion } from '../../../package.json';
import { ANDROID, IOS } from '.';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmFhMmEwMDdlZTg0NmYwMmVlZjQ1ZTEzMWI4NjY1ZSIsInN1YiI6IjY2Mzk5YzM0OTRkOGE4MDEyYjMzZmNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxqzzrIfia32TNHnWWqpGiH4sfj2mGJPGfmIQp9Mhsg';

const generateHeaders = async (): Promise<Record<string, string>> => {
  const headers: Record<string, string> = {
    [API_HEADER_CONTENT_TYPE_KEY]: API_HEADER_CONTENT_TYPE_JSON_VALUE,
    [API_HEADER_SOURCE]: isIOS() ? IOS : ANDROID,
    [API_HEADER_VERSION]: appVersion as string,
  };

  if (accessToken) {
    headers[API_HEADER_AUTHORIZATION_KEY] = `Bearer ${accessToken}`;
  }

  return headers;
};

export { generateHeaders };
