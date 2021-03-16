import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {AuthStack} from './pages/Auth';
import {BottomNavigator} from './pages/Root';
import {RootReducerType} from './store/modules/rootReducer';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isAuthenticated} = useSelector(
    (state: RootReducerType) => state.session,
  );
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
