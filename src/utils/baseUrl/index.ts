import { IMAGE_BASE_URL } from '../constants/apiEndpoints';

const getCompleteUrl = (fileName: string, baseUrl: string = IMAGE_BASE_URL): string => {
  return baseUrl + '/t/p/w440_and_h660_face/' + fileName;
};

const getThumbnailUrl = (fileName: string, baseUrl: string = IMAGE_BASE_URL): string => {
  return baseUrl + '/t/p/w440_and_h660_face/' + fileName;
};

export { getCompleteUrl, getThumbnailUrl };
