import React, { useState } from 'react';
import Screen from '../../components/Screen';
import { Image, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { EmailIcon, Icon, PasswordIcon, UserIcon } from '../../assets/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';
import SocialButtons from './components/SocialButtons';
import Text from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes, { RootStackParamList } from '../../navigation/routes';
import PhoneInput from '../../components/PhoneInput';

function SignupScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen scrollview className="items-center bg-white ">
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text className="text-[#000] top-7 font-medium text-[15px] mb-1">Kayıt Ol</Text>

      <Image
        source={Icon}
        resizeMode="contain"
        className="h-[90px] w-[104px] mt-[45px]"
      />
      <View className="mt-[34px] w-full" style={{ rowGap: 15 }}>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Ad Soyad"
          icon={UserIcon}
        />
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="E-mail"
          icon={EmailIcon}
        />
        <PhoneInput
          onChangeNumber={text => setPhone(text)}
          placeholder="Telefon Numarası"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Şifre"
          icon={PasswordIcon}
          isPassword
        />
        <Button className="mt-[7px] rounded-[15px]">Giriş Yap</Button>
      </View>
      <View className="my-[15px]">
        <Divider text="VEYA" />
      </View>
      <SocialButtons
        googleOnPress={() => { }}
        appleOnPress={() => { }}
        fbOnPress={() => { }}
      />
      <View className="flex-row mt-[10px]">
        <Text className='font-medium text-[#000]'>Hesabın var mı? </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
          <Text className="text-[#66AE7B] font-medium"
            style={{ textDecorationLine: 'underline', textDecorationColor: '#66AE7B', lineHeight: 20 }}
          >Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

export default SignupScreen;
