import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Album from './Album';

const Stack = createStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'album'} component={Album} />
      {/* <Stack.Screen name="album-songs" component={null} /> */}
    </Stack.Navigator>
  );
};
export {LibraryStack};
