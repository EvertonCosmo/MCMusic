import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Provider as PaperProvider} from 'react-native-paper';

import {RootNavigator} from './RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {store, persistor} from './store';
import EStyleSheet from 'react-native-extended-stylesheet';
import {MediaProvider} from './context/media';
const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#141414',
    background: '#121212',
    card: '#141414',
    text: '#FFF',
    border: '#000',
  },
};
enableScreens();
EStyleSheet.build();
const App = () => {
  return (
    <Provider store={store}>
      <MediaProvider>
        <NavigationContainer theme={MyTheme}>
          <PaperProvider>
            <PersistGate persistor={persistor} loading={null}>
              <RootNavigator />
            </PersistGate>
          </PaperProvider>
        </NavigationContainer>
      </MediaProvider>
    </Provider>
  );
};
export default App;
