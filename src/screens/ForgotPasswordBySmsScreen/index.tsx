import React, { useState } from 'react';
import Screen from '../../components/Screen';
import { Image, View } from 'react-native';
import { EmailIcon, ForgotPasswordLockImage } from '../../assets/images';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes, { RootStackParamList } from '../../navigation/routes';
import Header from '../../components/Header';
import Input from '../../components/Input';
import PhoneInput from '../../components/PhoneInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { OtpInput } from 'react-native-otp-entry';
import Text from '../../components/Text';

function ForgotPasswordBySmsScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [phone, setPhone] = useState('');
  const [isVerify, setIsVerify] = useState(false);
  if (isVerify) {
    return (
      <Screen
        header={<Header title="Şifre Sıfırlama" />}
        className="items-center justify-start px-[20px] pt-[35px] bg-white">
        <View className="flex-1 w-full ">
          <View className="flex-1 items-center">
            <View className="justify-center items-center">
              <Text className="text-[16px] font-[500] text-black">Hesabı Doğrula</Text>
              <Text className="mt-[14px text-[14px] ]">Size gelen 6 haneli kodu girin.</Text>
            </View>
            <View className="mt-[25px] w-full" style={{ rowGap: 20 }}>
              <OtpInput
                numberOfDigits={6}
                focusColor="green"
                focusStickBlinkingDuration={500}
                onTextChange={text => console.log(text)}
                onFilled={text => console.log(`OTP is ${text}`)}
                textInputProps={{
                  accessibilityLabel: 'One-Time Password',
                }}
                autoFocus
                theme={{
                  containerStyle: {
                    width: '80%',
                    alignSelf: 'center'
                  },
                  pinCodeContainerStyle: {
                    backgroundColor: '#fff',
                    borderColor: '#D0D5DD',
                    borderWidth: 1.5,
                    width: 39, // Set width to 40 pixels
                    height: 45, // Set height to 32 pixels
                    justifyContent: 'center', // Center content vertically
                    alignItems: 'center', // Center content horizontally
                  },
                }}
              />

            </View>
            <Text className="mt-[15px] text-center text-[14px] ">
              Kodu tekrar gönder 03:14
            </Text>
            <Button
              onPress={() => navigation.navigate(routes.SET_PASSWORD_SCREEN)}
              className="absolute bottom-4  transform -translate-x-1/2 rounded-[15px]">
              Devam Et
            </Button>
          </View>
        </View>
      </Screen>
    );
  }
  return (
    <Screen
      header={<Header title="Şifre Sıfırlama" />}
      className="items-center justify-start px-[20px] pt-[15px] bg-white">
      <Image
        source={ForgotPasswordLockImage}
        resizeMode="contain"
        className="h-[140px]"
      />
      <View className="flex-1 mt-[34px] w-full" style={{ rowGap: 20 }}>
        <PhoneInput
          onChangeNumber={text => setPhone(text)}
          placeholder="Telefon Numarası"
        />
        <Button
          onPress={() => setIsVerify(true)}
          className="absolute bottom-4  transform -translate-x-1/2 rounded-[15px]">
          Kod Gönder
        </Button>
      </View>
    </Screen>
  );
}

export default ForgotPasswordBySmsScreen;
