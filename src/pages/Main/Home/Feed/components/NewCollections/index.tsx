import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 20,
  },
  nameAlbums: {
    width: '80%',
    fontSize: 16,
    color: 'black',
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: 'white',
    transform: [{translateY: -11}],
  },
});
const NewColletions = () => {
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
      <Text style={styles.nameAlbums}> New Colletions</Text>
    </TouchableOpacity>
  );
};

export default NewColletions;
