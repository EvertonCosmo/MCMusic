import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Search from './Search';
import {MainStack} from './Main';
import Libray from './Main/Library';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#282828',
          borderTopWidth: 0,
          height: 54,
        },
        keyboardHidesTabBar: false,
        adaptive: true,

        tabStyle: {paddingBottom: 8},
        activeTintColor: '#fff',
        inactiveTintColor: '#b3b3b3',
      }}>
      <Bottom.Screen
        name="main-navigator"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return (
              <Icons
                style={{marginBottom: -3}}
                name={'home'}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="search-navigator"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => {
            return (
              <EvilIcons
                style={{marginBottom: -3}}
                name={'search'}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="library-navigator"
        component={Libray}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color}) => {
            return (
              <IoniconsIcons
                style={{marginBottom: -3}}
                name={'library'}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export {BottomNavigator};
