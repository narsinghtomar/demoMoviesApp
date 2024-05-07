import moviesListReducer, {
  initialState,
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  fetchPopularMoviesReset,
} from '../../../../src/redux/reducers/moviesListReducer'

describe('moviesListSlice reducer', () => {
  it('should handle fetchPopularMoviesRequest', () => {
    const newState = moviesListReducer(
      initialState,
      fetchPopularMoviesRequest({ bodyData: { page: 1 } })
    )
    expect(newState.isPopularMoviesLoading).toEqual(false)
    expect(newState.page).toEqual(1)
  })

  it('should handle fetchPopularMoviesSuccess', () => {
    const mockData = {
      results: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
      ],
      total_results: 2,
    }
    const newState = moviesListReducer(
      initialState,
      fetchPopularMoviesSuccess({ data: mockData })
    )
    expect(newState.isPopularMoviesLoading).toEqual(false)
    expect(newState.popularMoviesList).toEqual(mockData.results)
    expect(newState.moviesCount).toEqual(mockData.total_results)
  })

  it('should handle fetchPopularMoviesFailure', () => {
    const errorPayload = { message: 'An error occurred' }
    const newState = moviesListReducer(
      initialState,
      fetchPopularMoviesFailure(errorPayload)
    )
    expect(newState.isPopularMoviesLoading).toEqual(false)
    expect(newState.popularMoviesFailure).toEqual(true)
    expect(newState.popularMoviesError).toEqual(errorPayload)
    expect(newState.popularMoviesList).toEqual([])
  })

  it('should handle fetchPopularMoviesReset', () => {
    // First, simulate a failure state
    const errorPayload = { message: 'An error occurred' }
    const stateWithError = moviesListReducer(
      initialState,
      fetchPopularMoviesFailure(errorPayload)
    )
    // Reset the state
    const newState = moviesListReducer(
      stateWithError,
      fetchPopularMoviesReset()
    )
    expect(newState.isPopularMoviesLoading).toEqual(false)
    expect(newState.popularMoviesSuccess).toEqual(false)
    expect(newState.popularMoviesFailure).toEqual(false)
    expect(newState.popularMoviesError).toBeNull()
    expect(newState.popularMoviesList).toEqual([])
  })
})
