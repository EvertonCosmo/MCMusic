module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app/components': './src/components/index.ts',
          '@app/hooks': './src/context',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
