/**
 * InputField
 */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { InputField } from '../../../../src/components'

it('InputField component renders correctly', () => {
  const tree = renderer.create(<InputField />).toJSON()
  expect(tree).toMatchSnapshot()
})
