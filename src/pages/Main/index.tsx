import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeStack} from './Home';
import Libray from './Library';
import Settings from './Settings';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={HomeStack} />
      <Stack.Screen name={'settings'} component={Settings} />
      <Stack.Screen name={'library'} component={Libray} />
    </Stack.Navigator>
  );
};
export {MainStack};
