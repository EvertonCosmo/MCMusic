import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {useMedia} from '../../../../context/media';

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
  color: {
    color: '#fff',
  },
});

const Feed = () => {
  const navigation = useNavigation();
  const {getOfflineSongs, getOfflineAlbums} = useMedia();

  useEffect(() => {
    getOfflineSongs();
    getOfflineAlbums();
  }, []);
  function goArtistPage() {
    navigation.navigate('artist');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inside}>
        <Text style={styles.color}>Feed Page</Text>
        <TouchableOpacity style={styles.button} onPress={() => goArtistPage()}>
          <Text> Página do Artista </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Feed;
