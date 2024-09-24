import React from 'react';
import Screen from '../../components/Screen';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { EmailIcon, Icon, PasswordIcon } from '../../assets/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';
import SocialButtons from './components/SocialButtons';
import Text from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes, { RootStackParamList } from '../../navigation/routes';
import { useDispatch } from 'react-redux';
import { updateToken } from '../../store/slices/userSlice';

function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  return (
    <Screen className="flex-1 items-center justify-start bg-white">
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text className="text-[#000] top-7 font-medium text-[15px] mb-1">Giriş Yap</Text>
      <Image
        source={Icon}
        resizeMode="contain"
        className="h-[90px] w-[104px] mt-[45px]"
      />
      <View className="mt-[25px] w-full" style={{ rowGap: 15 }}>
        <Input placeholder="Email" icon={EmailIcon} />
        <Input placeholder="Şifre" icon={PasswordIcon} isPassword />
        <View className="items-end bottom-2">
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.FORGOT_PASSWORD_SCREEN)}
          >
            <Text className="text-[#66AE7B] text-[13px] font-medium">Şifreni mi unuttun?</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => {
            // dispatch(updateToken('test'));
          }}
          className="mt-[1px] rounded-[15px]">
          Giriş Yap
        </Button>
      </View>
      <View className="my-[15px]">
        <Divider text="VEYA" />
      </View>
      <SocialButtons
        googleOnPress={() => { }}
        appleOnPress={() => { }}
        fbOnPress={() => { }}
      />
      <View className="flex-row mt-[20px] ">
        <Text className='font-medium text-[#000]'>Hesabın yok mu? </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate(routes.SIGNUP_SCREEN)
          }
          }
        >
          <Text className="text-[#66AE7B] font-medium "
            style={{ textDecorationLine: 'underline', textDecorationColor: '#66AE7B', lineHeight: 20 }}
          >Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </Screen>

  );
}

export default LoginScreen;
