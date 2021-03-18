import {useMedia} from '@app/hooks/media';
import {useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SongsContainer} from './components/SongsContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
const Songs = () => {
  const {params} = useRoute();
  const album = params?.album;
  console.log(params);
  const {getOfflineSongsByAlbum, songsByAlbum} = useMedia();
  useEffect(() => {
    getOfflineSongsByAlbum(album?.name || album?.album);
  }, []);

  return (
    <View style={styles.container}>
      <SongsContainer songs={songsByAlbum} />
    </View>
  );
};

export default Songs;
