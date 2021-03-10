import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuth} from '../../../context/auth';

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
  const {signIn} = useAuth(); // use redux

  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Text>SignIn Page</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => signIn('everton@gmail.com', '123')}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;
