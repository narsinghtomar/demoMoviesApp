import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLOR_SECONDARY, COLOR_WHITE } from '../../utils/colors';
import { isIOS } from '../../utils/helper';

interface HeaderStyles {
  container: (paddingHorizontal: number, paddingBottom?: number) => ViewStyle;
  headerTitle: (isTitleCentered: boolean) => TextStyle;
  safeAreaView: ViewStyle;
  logOutStyle: ViewStyle;
  touchLogout: ViewStyle;
}

export const styles = StyleSheet.create<HeaderStyles>({
  container: (paddingHorizontal, paddingBottom = 0) => ({
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: isIOS() ? 0 : 14,
    paddingBottom: paddingBottom,
  }),
  headerTitle: isTitleCentered => ({
    color: COLOR_WHITE,
    alignSelf: 'center',
    textAlign: isTitleCentered ? 'center' : 'left',
    fontSize: 18,
    flex: 1,
    marginLeft: isTitleCentered ? 0 : 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingRight: isTitleCentered ? 16 : 0,
  }),
  safeAreaView: {
    backgroundColor: COLOR_SECONDARY,
  },
  logOutStyle: {
    height: 28,
    width: 28,
    tintColor: COLOR_WHITE,
  },
  touchLogout: {
    position: 'absolute',
    right: 10,
    bottom: 2,
    padding: 5,
  },
});
