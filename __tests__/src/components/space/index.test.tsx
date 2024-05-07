/**
 * Space
 */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Space } from '../../../../src/components'

it('Space component renders correctly', () => {
  const tree = renderer.create(<Space />).toJSON()
  expect(tree).toMatchSnapshot()
})
