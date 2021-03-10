import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignIn from './Signin';
import SignUp from './SignUp';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator mode={'modal'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="sign-in" component={SignIn} />
      <Stack.Screen name={'sign-up'} component={SignUp} />
    </Stack.Navigator>
  );
};
export {AuthStack};
