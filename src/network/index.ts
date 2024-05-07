import {
  DEFAULT_ERROR_STATUS,
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STRING,
} from '../utils/constants/apiCodes';
import { BASE_SERVER_URL } from '../utils/constants/apiEndpoints';

interface NetworkResponse<T> {
  status: number;
  data?: T;
  message?: string;
  error?: string;
}

interface NetworkConfig {
  url: string;
  method: string;
  headers?: Record<string, string>;
  data?: Record<string, any>;
}

/**
 * Make Fetch NetworkCall
 * @param config
 * @returns
 */
async function makeAdvanceNetworkCall<T>(config: NetworkConfig): Promise<NetworkResponse<T>> {
  const response: NetworkResponse<T> = { status: DEFAULT_ERROR_STATUS };
  const url = BASE_SERVER_URL + config.url;

  const res = await fetch(url, {
    method: config.method,
    headers: config.headers,
    body: JSON.stringify(config.data),
  });

  try {
    if (res) {
      if (res.status === API_RESPONSE_SUCCESS) {
        response.status = API_RESPONSE_SUCCESS;
        response.data = await res.json();
      } else {
        response.data = await res.json();
        response.status = res.status || DEFAULT_ERROR_STATUS;
      }
    }
  } catch (error) {
    console.log('error', error);
    response.data = { error: DEFAULT_ERROR_STRING };
    response.message = DEFAULT_ERROR_STRING;
    response.error = DEFAULT_ERROR_STRING;
  }
  return response;
}

/*
 * Make NetworkCall
 */
function makeNetworkCall<T>(config: NetworkConfig): Promise<NetworkResponse<T>> {
  return makeAdvanceNetworkCall<T>(config);
}

export { makeNetworkCall, NetworkResponse, NetworkConfig };
