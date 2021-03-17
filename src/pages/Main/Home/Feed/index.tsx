import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

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

const Feed = () => {
  const navigation = useNavigation();

  function goArtistPage() {
    navigation.navigate('artist');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Text>Feed Page</Text>
        <TouchableOpacity style={styles.button} onPress={() => goArtistPage()}>
          <Text> Página do Artista </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Feed;
