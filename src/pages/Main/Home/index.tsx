import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Artist from './Artist';
import Feed from './Feed';
import Player from './Player';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'feed'} component={Feed} />
      <Stack.Screen name={'artist'} component={Artist} />
      <Stack.Screen name={'player'} component={Player} />
    </Stack.Navigator>
  );
};
export {HomeStack};
