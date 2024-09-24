import React from 'react';
import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes, { RootStackParamList } from '../../navigation/routes';
import Screen from '../../components/Screen';
import { SplashIcon, Icon } from '../../assets/images';
import { StackNavigationProp } from '@react-navigation/stack';

function SplashScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  setTimeout(() => {
    navigation.navigate(routes.ONBOARDING_SCREEN);
  }, 2500);
  return (
    <Screen className={'justify-center items-center bg-white'}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Image source={Icon} className="w-[150px] h-[211px]" />
    </Screen>
  );
}

export default SplashScreen;
