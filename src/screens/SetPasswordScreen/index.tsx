import React, {useState, useEffect} from 'react';
import Screen from '../../components/Screen';
import {Image, View} from 'react-native';
import {Icon, PasswordIcon, SetPasswordSuccessImage} from '../../assets/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import routes, {RootStackParamList} from '../../navigation/routes';
import Header from '../../components/Header';
import ValueCheck from './components/ValueCheck';

function SetPasswordScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidations, setPasswordValidations] = useState({
    lengthCheck: false,
    uppercaseCheck: false,
    numberCheck: false,
  });

  useEffect(() => {
    const validatePassword = () => {
      const lengthCheck = password.length >= 6 && password.length <= 15;
      const uppercaseCheck = /[A-Z]/.test(password);
      const numberCheck = /\d/.test(password);

      setPasswordValidations({
        lengthCheck,
        uppercaseCheck,
        numberCheck,
      });
    };

    validatePassword();
  }, [password]);

  const handleContinue = () => {
    if (
      passwordValidations.lengthCheck &&
      passwordValidations.uppercaseCheck &&
      passwordValidations.numberCheck
    ) {
      setSuccess(true);
    } else {
      console.log('Please fulfill all password requirements.');
    }
  };

  if (success) {
    return (
      <Screen
        header={<Header noBackButton={false} title="Yeni Şifre Oluştur" />}
        className="items-center justify-center px-[20px] pt-[150px] bg-white">
        <Image
          source={SetPasswordSuccessImage}
          resizeMode="contain"
          className="h-[180px]"
        />
        <View className="mt-[43px] flex-1 w-full" style={{rowGap: 15}}>
          <Text className="text-center text-black">Şifreniz Başarıyla Güncellendi!</Text>
          <Button
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
            className="absolute bottom-4  transform -translate-x-1/2 rounded-[15px]">
            Giriş Yap
          </Button>
        </View>
      </Screen>
    );
  }

  return (
    <Screen
      header={<Header title="Yeni Şifre Oluştur" />}
      className="items-center bg-white ">
      <Image
        source={Icon}
        resizeMode="contain"
        className="h-[90px] w-[104px] mt-[15px]"
      />
      <View className="mt-[34px] w-full flex-1" style={{rowGap: 15}}>
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Şifre"
          icon={PasswordIcon}
          isPassword
        />
        <Input
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          placeholder="Şifre Tekrar"
          icon={PasswordIcon}
          isPassword
        />
        <View
          className="bg-white  p-[10px]"
          style={{gap: 12}}>
          <ValueCheck
            check={passwordValidations.lengthCheck}
            text="6 ile 15 karakter arasında olmalıdır."
          />
          <ValueCheck
            check={passwordValidations.uppercaseCheck}
            text="Büyük harf içermeli."
          />
          <ValueCheck
            check={passwordValidations.numberCheck}
            text="Rakam içermeli."
          />
        </View>
        <Button onPress={handleContinue} 
          className="absolute bottom-4  transform -translate-x-1/2 rounded-[15px]">
          Devam Et
        </Button>
      </View>
    </Screen>
  );
}

export default SetPasswordScreen;
