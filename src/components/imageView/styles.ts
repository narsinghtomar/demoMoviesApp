import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: (isCentered: boolean) => ViewStyle;
  imgStyle: ViewStyle;
  hitSlop: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: isCentered => ({
    alignSelf: isCentered ? 'center' : 'flex-start',
  }),
  imgStyle: {
    height: '100%',
    width: '100%',
  },
  hitSlop: {
    top: 6,
    bottom: 6,
    left: 6,
    right: 6,
  },
});

export default styles;
