import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface ImageViewProps extends TouchableOpacityProps {
  containerstyle?: any
  style?: any
  url?: string
  uri?: any
  priority?: FastImage.priority
  resizeMode?: 'contain' | 'cover'
  isCentered?: boolean
  isClickable?: boolean
  activeOpacity?: number
  onPress?: () => void
}

const ImageView: React.FC<ImageViewProps> = ({
  containerstyle,
  style,
  url,
  uri,
  priority = FastImage.priority.normal,
  resizeMode = 'contain',
  isCentered = false,
  isClickable = false,
  onPress,
  activeOpacity = 0.8,
}) => {
  const imgAlign = isCentered ? 'center' : 'flex-start';
  const ViewWrapper = isClickable ? TouchableOpacity : View;

  return (
    <ViewWrapper
      style={[styles.container(imgAlign), containerstyle]}
      hitSlop={styles.hitSlop}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {url ? (
        <FastImage
          style={[style]}
          source={{
            uri: url,
            priority: priority,
          }}
          resizeMode={resizeMode}
        />
      ) : (
        <Image
          style={[styles.imgStyle, style]}
          source={uri}
          resizeMode={resizeMode}
        />
      )}
    </ViewWrapper>
  );
};

export default ImageView;
