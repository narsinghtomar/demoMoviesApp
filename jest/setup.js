/**
 * Jest SetUp
 */
import fetchMock from 'jest-fetch-mock'

// Mock fetch function
global.fetch = fetchMock

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// @ts-expect-error
global.__reanimatedWorkletInit = jest.fn()

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist')
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  }
})

jest.useFakeTimers()
Date.now = jest.fn(() => 1503187200000)

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
    findBestAvailableLanguage: jest.fn(),
  }
})
