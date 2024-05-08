import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';
import { COLOR_SECONDARY } from '../../utils/colors';
import ButtonLoader from '../buttonloader/index.tsx';

interface ButtonProps extends TouchableOpacityProps {
  buttonStyle?: any
  text: string
  textStyle?: any
  disabled?: boolean
  activeOpacity?: number
  isbuttonloader?: boolean
  testID?: string
}

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  onPress,
  text,
  textStyle,
  disabled = false,
  activeOpacity = 0.4,
  isbuttonloader = false,
  testID,
}) => {
  const backgroundColorStyle = disabled ? styles.BGDisabled : styles.BGDefault;
  return (
    <TouchableOpacity
      style={[styles.touchableHighlight, backgroundColorStyle, buttonStyle]}
      underlayColor={COLOR_SECONDARY}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}
      testID={testID}
    >
      <View style={styles.container}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {isbuttonloader && <ButtonLoader isbuttonloader={isbuttonloader} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
