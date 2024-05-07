/**
 * MoviesListPage
 */
import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { MoviesListPage } from '../../../../src/containers'
import configureStore from 'redux-mock-store'

it('MoviesListPage component renders correctly', async () => {
  const initialState = {}
  const mockStore = configureStore()
  let store
  jest.useFakeTimers()

  store = mockStore(initialState)
  const tree = await renderer
    .create(
      <Provider store={store}>
        <MoviesListPage />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
