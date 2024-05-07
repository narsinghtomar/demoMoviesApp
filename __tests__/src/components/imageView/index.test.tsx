/**
 * ImageView
 */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { ImageView } from '../../../../src/components'

it('ImageView component renders correctly', () => {
  const tree = renderer.create(<ImageView />).toJSON()
  expect(tree).toMatchSnapshot()
})
