/**
 * LoginPage
 */
import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { LoginPage } from '../../../../src/containers'
import configureStore from 'redux-mock-store'

it('LoginPage component renders correctly', async () => {
  const initialState = {}
  const mockStore = configureStore()
  let store
  jest.useFakeTimers()

  store = mockStore(initialState)
  const tree = await renderer
    .create(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
