import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {
  COLOR_RED,
  COLOR_PRIMARY,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
} from '../../utils/colors';
import { getDeviceWidth } from '../../utils/helper';
import { fonts, fontSize } from '../../utils/styles';

interface InputFieldStyles {
  textInputContainer: ViewStyle;
  commonInputBox: TextStyle;
  error: TextStyle;
  inputLabel: TextStyle;
  multilineInputStyle: TextStyle;
}

const styles = StyleSheet.create<InputFieldStyles>({
  textInputContainer: {
    width: getDeviceWidth() * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  commonInputBox: {
    minHeight: 45,
    backgroundColor: COLOR_TRANSPARENT,
    color: COLOR_PRIMARY,
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 0.5,
    textAlign: 'left',
    ...fontSize.fontSizeLarge(),
    ...fonts.fontFamilyRegular(),
  },
  error: {
    color: COLOR_RED,
    marginTop: 0,
    marginBottom: 1,
    marginStart: 2,
    textAlign: 'left',
    width: getDeviceWidth() * 0.9,
    ...fontSize.fontSizeSmall(),
    ...fonts.fontFamilyRegular(),
  },
  inputLabel: {
    color: COLOR_BLACK,
    marginTop: 15,
    textAlign: 'left',
    ...fontSize.fontSizeMedium(),
    ...fonts.fontFamilyBold(),
  },
  multilineInputStyle: {
    height: 75, // Set your desired default height
  },
});

export default styles;
