import React, { useEffect } from 'react'
import { View, Animated, Easing } from 'react-native'
import { IMAGES } from '../../assets'
import { styles } from './styles'

interface ButtonLoaderProps {
  isbuttonloader?: boolean
  isRevampLocation?: boolean
  imageName?: any
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  isbuttonloader = false,
  isRevampLocation = false,
  imageName = IMAGES.LOADER,
}) => {
  let rotateValueHolder = new Animated.Value(0)

  useEffect(() => {
    const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0)
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => startImageRotateFunction())
    }
    if (isbuttonloader) {
      startImageRotateFunction()
    }
  }, [isbuttonloader, rotateValueHolder])

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.container}>
      {isbuttonloader && (
        <View style={styles.paddingLeft}>
          <Animated.Image
            resizeMode={'contain'}
            style={[styles.loader, { transform: [{ rotate: RotateData }] }]}
            source={isRevampLocation ? imageName : IMAGES.LOADER}
          />
        </View>
      )}
    </View>
  )
}

export default ButtonLoader
