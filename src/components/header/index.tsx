import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { IMAGES } from '../../assets';
import { styles } from './styles';
import { resetAuthCompleted } from '../../redux/reducers/authReducer';

interface HeaderProps {
  headerTitle?: string
  headerTextStyle?: StyleProp<TextStyle>
  paddingHorizontal?: number
  isTitleCentered?: boolean
  paddingBottom?: number
  style?: StyleProp<ViewStyle>
  customHeaderContainerStyle?: StyleProp<ViewStyle>
  isShowLogOut?: boolean
  navigation?: any
}

const Header: React.FC<HeaderProps> = ({
  headerTitle,
  headerTextStyle = {},
  paddingHorizontal,
  isTitleCentered = true,
  paddingBottom = 8,
  style,
  customHeaderContainerStyle,
  isShowLogOut = true,
}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(resetAuthCompleted());
  };

  return (
    <SafeAreaView style={[styles.safeAreaView, customHeaderContainerStyle]}>
      <View style={[styles.container(paddingHorizontal, paddingBottom), style]}>
        {headerTitle && (
          <Text style={[styles.headerTitle(isTitleCentered), headerTextStyle]}>
            {headerTitle}
          </Text>
        )}
        {isShowLogOut && (
          <TouchableOpacity onPress={logOut} style={styles.touchLogout}>
            <Image
              style={styles.logOutStyle}
              source={IMAGES.LOGOUT}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
