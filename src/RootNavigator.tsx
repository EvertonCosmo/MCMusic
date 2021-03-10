import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useAuth} from './context/auth';
import {AuthStack} from './pages/Auth';
import {BottomNavigator} from './pages/Root';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name={'main-app'} component={BottomNavigator} />
      ) : (
        <Stack.Screen name={'auth-app'} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
