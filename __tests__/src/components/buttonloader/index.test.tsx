/**
 * ButtonLoader
 */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonLoader } from '../../../../src/components'

it('ButtonLoader component renders correctly', () => {
  const tree = renderer.create(<ButtonLoader />).toJSON()
  expect(tree).toMatchSnapshot()
})
