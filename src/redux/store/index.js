/*
 * Redux Setup
 */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your reducers and sagas
import { appReducer } from '../reducers';
import rootSaga from '../../network/sagas';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'], // only authReducer will be persisted
};

// Create Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create persistedReducer
const persistedReducer = persistReducer(persistConfig, appReducer);

// Create the Redux store with Redux Toolkit, Redux Saga, and Redux Persist
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Define the serializableCheck options
        ignoredActions: ['persist/PERSIST'], // Ignore specific actions if needed
        ignoredPaths: ['register'], // Ignore specific state paths if needed
      },
    }).concat(sagaMiddleware),
});

// Run your Redux Saga
sagaMiddleware.run(rootSaga);

// Optionally, you can create a persisted version of the store
export const persistor = persistStore(store);
