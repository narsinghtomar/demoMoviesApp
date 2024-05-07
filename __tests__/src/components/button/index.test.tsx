/**
 * Button
 */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../../../../src/components'

it('Button component renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
