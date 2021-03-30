import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const image = {
  uri:
    'https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj',
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 185,
    elevation: 2,
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 16,
    borderRadius: 10,
  },
  imageSong: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  nameSong: {
    fontSize: 17,
    width: '100%',
    marginTop: 10,
    color: 'gray',
    transform: [{translateY: -15}],
  },
  iconPlay: {
    zIndex: 1,
    fontSize: 25,
    color: 'gray',
    width: '100%',
    textAlign: 'right',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 30,
    transform: [{translateY: -13}],
  },
});
interface CardSongProps {
  onPress?(): void;
  name: string;
}
const CardSong = ({name, onPress}: CardSongProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.imageSong}
        source={{
          uri:
            'https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj',
        }}
      />
      <Icon name="caret-forward-circle" style={styles.iconPlay} />
      <Text style={styles.nameSong}> {name}</Text>
    </TouchableOpacity>
  );
};
export default CardSong;
