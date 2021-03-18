import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {AuthStack} from './pages/Auth';
import {BottomNavigator} from './pages/Root';
import {RootReducerType} from './store/modules/rootReducer';

import {StatusBar} from 'react-native';
import Player from './pages/Main/Home/Player';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isAuthenticated} = useSelector(
    (state: RootReducerType) => state.session,
  );
  return (
    <Fragment>
      <StatusBar
        animated
        showHideTransition="fade"
        barStyle={'light-content'}
        backgroundColor={'#141414'}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Fragment>
            <Stack.Screen name={'main-app'} component={BottomNavigator} />
            <Stack.Screen name={'player'} component={Player} />
          </Fragment>
        ) : (
          <Stack.Screen name={'auth-app'} component={AuthStack} />
        )}
      </Stack.Navigator>
    </Fragment>
  );
};

export {RootNavigator};
