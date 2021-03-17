import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import {ProgressBar} from './components';
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Player = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text> Player Page</Text>
        <View style={styles.progress}>
          <ProgressBar />
        </View>
      </View>
      <Divider />
    </View>
  );
};
export default Player;
