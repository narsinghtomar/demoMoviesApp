import { StyleSheet } from 'react-native';
import { COLOR_GRAY, COLOR_SECONDARY, COLOR_WHITE } from '../../utils/colors';
import { getDeviceWidth } from '../../utils/helper';
import { fontSize } from '../../utils/styles';

export const styles = StyleSheet.create({
  touchableHighlight: {
    paddingHorizontal: 13,
    alignSelf: 'center',
    alignItems: 'center',
    width: getDeviceWidth() * 0.9,
    height: 45,
    borderRadius: 4,
    backgroundColor: COLOR_SECONDARY,
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    color: COLOR_WHITE,
    alignSelf: 'center',
    letterSpacing: 0.25,
    fontWeight: '500',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingRight: 10,
    ...fontSize.fontSizeLarge(),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BGDefault: {
    backgroundColor: COLOR_SECONDARY,
  },
  BGDisabled: {
    backgroundColor: COLOR_GRAY,
  },
});
