import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Provider as PaperProvider} from 'react-native-paper';

import {RootNavigator} from './RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {store, persistor} from './store';
import EStyleSheet from 'react-native-extended-stylesheet';
import {MediaProvider} from './context/media';

enableScreens();
EStyleSheet.build();
const App = () => {
  return (
    <Provider store={store}>
      <MediaProvider>
        <NavigationContainer>
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
