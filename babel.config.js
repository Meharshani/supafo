module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    // Correctly structured react-native-reanimated plugin
    ['react-native-reanimated/plugin', { relativeSourceLocation: true }]
  ],
};
