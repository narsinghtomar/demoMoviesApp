import { makeNetworkCall, } from '../../../src/network';
import {
  API_RESPONSE_SUCCESS,
} from '../../../src/utils/constants/apiCodes';
import { BASE_SERVER_URL } from '../../../src/utils/constants/apiEndpoints';

describe('makeNetworkCall', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  test('calls fetch with provided config and returns response for successful API response', async () => {
    const responseData = { data: 'example response data' };
    const mockResponse = {
      status: API_RESPONSE_SUCCESS,
      json: jest.fn().mockResolvedValue(responseData),
    };
    fetch.mockResolvedValue(mockResponse);

    const config = { method: 'GET', headers: {}, data: {} };
    const response = await makeNetworkCall(config);
    expect(response).toEqual({
      status: API_RESPONSE_SUCCESS,
      data: responseData,
    });
  });

});
