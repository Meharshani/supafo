import React from 'react';
import { Image, StatusBar, TouchableOpacity, View, } from 'react-native';
import Screen from '../../components/Screen';
import Swiper from 'react-native-swiper';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { ONBOARING_DATA } from '../../data/onboarding';
import routes from '../../navigation/routes';
import { OnboardingScreenComponentType } from './onboarding.type';

function OnboardingScreenComponent({
  swiperRef,
  setSwipeIndex,
  navigation,
  isLastIndex,
  isStartIndex,
}: OnboardingScreenComponentType) {
  return (
    <Screen className='bg-white'>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle={'dark-content'}
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Swiper
        ref={swiperRef}
        onIndexChanged={index => setSwipeIndex(index)}
        loop={false}
        activeDotColor="#66AE7B"
        dotColor="#FEFEFE"
        dotStyle={{ borderWidth: 1, borderColor: '#66AE7B', }}>
        {ONBOARING_DATA.map(item => (
          <View
            key={item.id}
            className="flex-1 justify-center items-center px-2 mb-28 ">
            <View className="mb-8">
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: item.w, height: item.h }} // Use item.w for width and item.h for height

              // className="w-[250px] h-[250px]"
              />
            </View>
            <Text className="text-black font-medium	 text-[14px] text-center px-4">
              {item.text}
            </Text>
          </View>
        ))}
      </Swiper>

      <View className="flex-row  w-full absolute  justify-between	text-center 	 mb-6 bottom-0	px-2  self-center		 ">
        <View className="">
          <TouchableOpacity
            disabled={isStartIndex}
            onPress={() => {
              swiperRef.current?.scrollBy(-1);
            }}
            className="" // Add background and padding styles as needed
          >
            <Text className="text-black text-center font-medium text-[14px] 	">Atla</Text>
          </TouchableOpacity>
        </View>
        <View className="">
          <TouchableOpacity
            onPress={() => {
              if (isLastIndex) {
                navigation.navigate(routes.AUTH_SCREEN);
              } else {
                swiperRef.current?.scrollBy(1);
              }
            }}
            className=" " // Add background and padding styles as needed
          >
            <Text className="text-black text-center font-medium text-sm">
              {isLastIndex ? 'Sona Ermek' : 'Sonraki'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

export default OnboardingScreenComponent;
