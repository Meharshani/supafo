import React, { useState } from 'react';
import Screen from '../../components/Screen';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../assets/images';
import Button from '../../components/Button';
import AuthBanner from './components/AuthBanner';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes, { RootStackParamList } from '../../navigation/routes';
import { Text } from 'react-native';

function AuthScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <Screen className="justify-center items-center px-[20px] bg-white  ">
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Image source={Icon} resizeMode="contain" className="h-[204px]" />
      {/* <View className="h-10 " ></View> */}

      <View className="top-[110px] w-full bottom-0 mb-2   ">
        <Button
          onPress={() => {
            navigation.navigate(routes.LOGIN_SCREEN);
          }}
          className="mb-[16px] rounded-[14px]	">
          Giriş Yap
        </Button>
        <Button
          onPress={() => {
            navigation.navigate(routes.SIGNUP_SCREEN);
          }}
          variant="light"
          className="mb-[16px] rounded-[14px]	">
          Kayıt Ol
        </Button>
        <View className="  w-full mt-6    left-1		  ">
          <View className="flex-row items-start ">
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              className="top-1"
              style={{
                height: 24,
                width: 24,
                borderWidth: 2,
                borderColor: '#66AE7B',
                backgroundColor: checked ? '#66AE7B' : 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                // top:5,
                marginRight: 10, // Space between checkbox and text
              }}
            >
              {/* Show a checkmark if checked */}
              {checked && (
                <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
              )}
            </TouchableOpacity>
            <Text className="flex-1 text-black text-[14px] font-medium	 ">
              Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun şekilde saklamasına izin
              veriyorum.
            </Text>

          </View>
          <View className="mt-2" ></View>
          <View className="flex-row items-start ">
            <TouchableOpacity
              onPress={() => setChecked2(!checked2)}
              className="top-1"
              style={{
                height: 24,
                width: 24,
                borderWidth: 2,
                borderColor: '#66AE7B',
                backgroundColor: checked2 ? '#66AE7B' : 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                // top:5,
                marginRight: 10, // Space between checkbox and text
              }}
            >
              {/* Show a checkmark if checked */}
              {checked2 && (
                <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity className="flex-1">
              <Text className="text-black text-[14px] font-medium">
                <Text style={{ color: '#66AE7B', textDecorationLine: 'underline', textDecorationColor: '#66AE7B', lineHeight: 20 }}>
                  Şartlar & Koşullar
                </Text>
                <Text> ve </Text>
                <Text style={{ color: '#66AE7B', textDecorationLine: 'underline', textDecorationColor: '#66AE7B', lineHeight: 20 }}>
                  Gizlilik Politikasını
                </Text>
                <Text> kabul ediyorum.</Text>
              </Text>
            </TouchableOpacity>


            {/* <TouchableOpacity className="flex-1">
              <Text className=" text-black text-[14px] font-medium">
                <Text style={{ color: '#66AE7B', textDecorationLine: 'underline' }}>
                  Şartlar & Koşullar
                </Text> ve <Text style={{ color: '#66AE7B', textDecorationLine: 'underline' }}>
                  Gizlilik Politikasını
                </Text> kabul ediyorum.
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>

    </Screen>
  );
}

export default AuthScreen;
