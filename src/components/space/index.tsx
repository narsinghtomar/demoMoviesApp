import React from 'react'
import { View, ViewStyle } from 'react-native'
import { COLOR_TRANSPARENT } from '../../utils/colors'

interface SpaceProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
}

const Space: React.FC<SpaceProps> = ({
  height = 0,
  width = 0,
  backgroundColor = COLOR_TRANSPARENT,
}) => {
  const spaceStyle: ViewStyle = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
  }

  return <View style={spaceStyle} />
}

export default Space
