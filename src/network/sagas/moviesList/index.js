/**
 * Watch Movies List
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STRING,
} from '../../../utils/constants/apiCodes';
import { POPULAR_MOVIES } from '../../../utils/constants/apiEndpoints';
import { makeNetworkCall } from '../..';
import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} from '../../../redux/reducers/moviesListReducer';

/**
 * fetchMoviesList
 * @param {*} action
 * @returns
 */
export function fetchMoviesList(action) {
  const { headers, bodyData } = action?.payload || {};
  const { language, page } = bodyData || {};
  const url = POPULAR_MOVIES.replace('LANG', language).replace('PAGENO', page);
  const config = {
    headers: headers,
    method: 'GET',
    url: url,
  };
  return makeNetworkCall(config);
}

/**
 * Handle Fetch Movies List
 * @param {*} action
 */
export function* handleFetchMoviesList(action) {
  const { payload = {} } = action || {};
  let genericMsg = DEFAULT_ERROR_STRING;
  try {
    // Make an API call to fetch data
    const response = yield call(fetchMoviesList, action);
    const { data = {} } = response;
    genericMsg = response?.error || DEFAULT_ERROR_STRING;
    if (response?.status === API_RESPONSE_SUCCESS) {
      yield put(
        fetchPopularMoviesSuccess({ data, isRefresh: payload?.isRefresh })
      );
    } else {
      yield put(fetchPopularMoviesFailure(genericMsg));
    }
  } catch (error) {
    yield put(fetchPopularMoviesFailure(genericMsg));
  }
}

// Our watcher Saga
export function* watchMoviesList() {
  yield takeEvery(fetchPopularMoviesRequest, handleFetchMoviesList);
}
