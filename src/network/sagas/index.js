/*
 * Root Saga
 */
import {all} from 'redux-saga/effects';
import {watchMoviesList} from './moviesList';

/**
 * single entry point to start all Sagas at once
 */
export default function* rootSaga() {
  yield all([watchMoviesList()]);
}
