import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesListState {
  isPopularMoviesLoading: boolean;
  popularMoviesList: Array<any>;
  page: number;
  isMoviesPageFinished: boolean;
  isMoviesPaginating: boolean;
  isMoviesPaginationError: boolean;
  popularMoviesError: any | null;
}

const initialState: MoviesListState = {
  isPopularMoviesLoading: false,
  popularMoviesList: [],
  page: 0,
  isMoviesPageFinished: false,
  isMoviesPaginating: false,
  isMoviesPaginationError: false,
  popularMoviesError: null,
};

export const moviesListSlice = createSlice({
  name: 'moviesListReducer',
  initialState,
  reducers: {
    fetchPopularMoviesRequest: (state, action: PayloadAction<{ bodyData?: { page?: number } }>) => {
      const { payload = {} } = action || {};
      const paginating = payload?.bodyData?.page > 0;
      state.popularMoviesError = null;
      state.isPopularMoviesLoading = !paginating;
      state.popularMoviesFailure = false;
      state.popularMoviesSuccess = false;
      state.isMoviesPaginationError = false;
      state.isMoviesPaginating = paginating;
      state.page = payload?.bodyData?.page || 0;
      state.moviesCount = paginating ? state.moviesCount : 0;
    },
    fetchPopularMoviesSuccess: (state, action: PayloadAction<{ data: any; isRefresh?: boolean }>) => {
      const { data, isRefresh } = action.payload || {};
      const { results: moviesList, total_results: moviesCount } = data || {};

      if (!moviesList || moviesList.length === 0) {
        state.isPopularMoviesLoading = false;
        state.popularMoviesFailure = false;
        state.popularMoviesSuccess = true;
        state.isMoviesPageFinished = true;
        state.isMoviesPaginating = false;
        state.isMoviesPaginationError = false;
        state.moviesCount = moviesCount;
      } else if (isRefresh) {
        state.isPopularMoviesLoading = false;
        state.popularMoviesFailure = false;
        state.popularMoviesSuccess = true;
        state.isMoviesPageFinished = false;
        state.isMoviesPaginating = false;
        state.isMoviesPaginationError = false;
        state.popularMoviesList = moviesList;
      } else {
        state.isPopularMoviesLoading = false;
        state.popularMoviesFailure = false;
        state.popularMoviesSuccess = true;
        state.isMoviesPageFinished = false;
        state.isMoviesPaginating = false;
        state.isMoviesPaginationError = false;
        state.popularMoviesList =
          state.page === 0
            ? moviesList
            : state.popularMoviesList.concat(moviesList);
        state.moviesCount = moviesCount;
      }
    },
    fetchPopularMoviesFailure: (state, action: PayloadAction<any>) => {
      state.isPopularMoviesLoading = false;
      state.popularMoviesSuccess = false;
      state.popularMoviesFailure = true;
      state.popularMoviesError = action.payload;
      state.popularMoviesList = [];
    },
    fetchPopularMoviesReset: (state) => {
      state.isPopularMoviesLoading = false;
      state.popularMoviesSuccess = false;
      state.popularMoviesFailure = false;
      state.popularMoviesError = null;
    },
  },
});

export const {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  fetchPopularMoviesReset,
} = moviesListSlice.actions;

export default moviesListSlice.reducer;
