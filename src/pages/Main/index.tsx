import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeStack} from './Home';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={HomeStack} />
    </Stack.Navigator>
  );
};
export {MainStack};
