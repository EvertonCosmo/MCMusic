import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import React from 'react';
import Album from './Album';
import Songs from './Songs';

// type RootStackParamList = {
//   album: {album: AlbumProps};
// };

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const LibraryTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        scrollEnabled: true,
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        style: {
          backgroundColor: '#121212',
        },
        tabStyle: {
          marginTop: 16,
          width: 140,
        },
        indicatorStyle: {
          backgroundColor: '#c9580e',
        },
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'Albums'}}
        name={'album'}
        component={Album}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Songs'}}
        name={'songs'}
        component={Songs}
      />
    </Tab.Navigator>
  );
};
const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Library'}
        component={LibraryTab}
      />
      <Stack.Screen
        name={'album-songs'}
        component={Songs}
        options={({route}) => {
          const {album} = route.params;

          return {
            headerTitle: album?.name || album?.album,
          };
        }}
      />
      {/* <Stack.Screen name={'album'} component={Album} /> */}

      {/* <Stack.Screen name="album-songs" component={null} /> */}
    </Stack.Navigator>
  );
};
export {LibraryStack};
