import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Creators as sessionCreators} from '../../../store/ducks/session';
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  inside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const SignIn = () => {
  //const {signIn} = useAuth(); // use redux
  const dispatch = useDispatch();

  function signIn() {
    dispatch(
      sessionCreators.login({email: 'everton@gmail.com', password: '123'}),
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Text style={{color: 'white'}}>SignIn Page</Text>

        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;
