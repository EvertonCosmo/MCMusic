import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootNavigator} from './RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {AuthProvider} from './context/auth';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <PaperProvider>
            <PersistGate persistor={persistor} loading={null}>
              <RootNavigator />
            </PersistGate>
          </PaperProvider>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};
export default App;
