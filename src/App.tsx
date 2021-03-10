import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootNavigator} from './RootNavigator';
import {AuthProvider} from './context/auth';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};
export default App;
