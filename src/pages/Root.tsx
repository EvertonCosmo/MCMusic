import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './Search';
import {MainStack} from './Main';
import Libray from './Main/Library';

const Bottom = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="main-navigator"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <Icons name={'home'} size={24} color={'#333'} />;
          },
        }}
      />
      <Bottom.Screen
        name="search-navigator"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => {
            return <Icons name={'search'} size={24} color={'#333'} />;
          },
        }}
      />
      <Bottom.Screen
        name="library-navigator"
        component={Libray}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: () => {
            return (
              <Ionicons name={'library-outline'} size={24} color={'#333'} />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export {BottomNavigator};
