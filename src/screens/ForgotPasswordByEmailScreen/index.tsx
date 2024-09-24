import React from 'react';
import Screen from '../../components/Screen';
import { Image, StatusBar, View } from 'react-native';
import { EmailIcon, ForgotPasswordLockImage } from '../../assets/images';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes, { RootStackParamList } from '../../navigation/routes';
import Header from '../../components/Header';
import Input from '../../components/Input';

function ForgotPasswordByEmailScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Screen
      header={<Header title="Şifre Sıfırlama" />}
      className="items-center justify-start px-[20px] pt-[15px] bg-white">
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Image
        source={ForgotPasswordLockImage}
        resizeMode="contain"
        className="h-[140px]"
      />
      <View className="mt-[34px] flex-1 w-full" style={{ rowGap: 20 }}>
        <Input placeholder="Email" icon={EmailIcon} />
        <Button
          onPress={() => navigation.navigate(routes.SET_PASSWORD_SCREEN)}
          className="absolute bottom-4  transform -translate-x-1/2 rounded-[15px]">
          Kod Gönder
        </Button>
      </View>
    </Screen>
  );
}

export default ForgotPasswordByEmailScreen;
