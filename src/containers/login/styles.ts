/**
 * LoginPage styles
 */
import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../utils/colors';
import { getDeviceWidth } from '../../utils/helper';
import { fontSize, fonts } from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: COLOR_PRIMARY,
    textAlign: 'center',
    marginTop: -50,
    marginBottom: 20,
  },
  buttonStyle: {
    width: getDeviceWidth() * 0.5,
    marginTop: 50,
  },
  languageText: {
    ...fontSize.fontSizeLarge(),
    ...fonts.fontSemiBold(),
    color: COLOR_PRIMARY,
    textDecorationLine: 'underline',
  },
});

export default styles;
