/**
 * Header
 */
import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { Header } from '../../../../src/components'
import configureStore from 'redux-mock-store'

it('Header component renders correctly', async () => {
  const initialState = {}
  const mockStore = configureStore()
  let store
  jest.useFakeTimers()

  store = mockStore(initialState)
  const tree = await renderer
    .create(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
