import MapView from 'react-native-maps';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 37.1251,
        longitude: 27.4085,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
