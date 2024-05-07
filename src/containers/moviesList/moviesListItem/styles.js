/**
 * App Header Components Styles.
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_GRAY_DDD,
  COLOR_GRAY_EEE,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from '../../../utils/colors';
import {fontSize, fonts} from '../../../utils/styles';
import {getDeviceWidth} from '../../../utils/helper';
const itemSize = (getDeviceWidth() - 30) / 2;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    marginBottom: 18,
    borderColor: COLOR_GRAY_DDD,
    borderRadius: 12,
    borderWidth: 1,
    width: itemSize,
    overflow: 'hidden',
    marginLeft: 12,
  },
  itemStyle: index => ({
    width: itemSize,
    overflow: 'hidden',
  }),
  imgView: {
    backgroundColor: COLOR_GRAY_EEE,
    height: 200,
    width: '100%',
  },
  titleViewStyle: {
    height: 50,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieTitle: {
    textAlign: 'center',
    paddingHorizontal: 5,
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyBold(),
    color: COLOR_PRIMARY,
  },
});
