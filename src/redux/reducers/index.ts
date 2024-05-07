import { combineReducers } from 'redux';
import moviesListReducer from './moviesList';
import authReducer from './authReducer';

/**
 * App Reducer
 */
export const appReducer = combineReducers({
  authReducer,
  moviesListReducer,
});

export type RootState = ReturnType<typeof appReducer>;
