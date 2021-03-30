import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    width: 300,
    height: 170,
    marginTop: 20,
    borderRadius: 14,
    paddingHorizontal: 20,
  },
  nameAlbums: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    paddingHorizontal: 20,
    transform: [{translateY: -50}],
  },
});
const TopPicks = () => {
  const navigation = useNavigation();
  function goArtistPage() {
    navigation.navigate('artist');
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => goArtistPage()}>
      <Image
        resizeMode={'cover'}
        style={styles.card}
        source={require('../../../../../../assets/malu.png')}
      />
      <Text style={styles.nameAlbums}> Top Picks</Text>
    </TouchableOpacity>
  );
};

export default TopPicks;
