import { call, put, takeEvery } from 'redux-saga/effects'
import {
  watchMoviesList,
  handleFetchMoviesList,
  fetchMoviesList,
} from '../../../../../src/network/sagas/moviesList'
import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} from '../../../../../src/redux/reducers/moviesListReducer'

describe('watchMoviesList Saga', () => {
  const genObject = watchMoviesList()

  it('should wait for fetchPopularMoviesRequest action and call handleFetchMoviesList', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(fetchPopularMoviesRequest, handleFetchMoviesList)
    )
  })

  it('should be done on the next iteration', () => {
    expect(genObject.next().done).toBe(true)
  })
})

describe('handleFetchMoviesList Saga', () => {
  const mockAction = {
    payload: {
      headers: {},
      bodyData: { language: 'en', page: 1 },
      isRefresh: false,
    },
  }

  const genObject = handleFetchMoviesList(mockAction)

  it('should call fetchMoviesList with action', () => {
    expect(genObject.next().value).toEqual(call(fetchMoviesList, mockAction))
  })

  it('should dispatch fetchPopularMoviesSuccess action if API call succeeds', () => {
    const mockResponse = {
      status: 200,
      data: { results: [], total_results: 0 },
    }
    expect(genObject.next(mockResponse).value).toEqual(
      put(
        fetchPopularMoviesSuccess({
          data: mockResponse.data,
          isRefresh: mockAction.payload.isRefresh,
        })
      )
    )
  })

  it('should dispatch fetchPopularMoviesFailure action if API call fails', () => {
    const mockErrorResponse = { status: 500, error: 'Something went wrong try again after sometime' }
    const genFail = handleFetchMoviesList(mockAction)
    genFail.next() // Start the saga
    expect(genFail.throw(mockErrorResponse).value).toEqual(
      put(fetchPopularMoviesFailure(mockErrorResponse.error))
    )
  })

  it('should dispatch fetchPopularMoviesFailure action on catch block', () => {
    const genError = handleFetchMoviesList(mockAction)
    genError.next() // Start the saga
    expect(genError.throw(new Error('Something went wrong try again after sometime')).value).toEqual(
      put(fetchPopularMoviesFailure('Something went wrong try again after sometime'))
    )
  })
})
