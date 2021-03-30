import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDisc: {
    fontSize: 60,
    color: 'blue',
    borderRadius: 100,
  },
  description: {
    width: '60%',
    paddingHorizontal: 20,
  },
  contentTime: {
    width: '23%',
    textAlign: 'justify',
    alignItems: 'flex-end',
  },
  textInfo: {
    color: 'gray',
  },
});
const TopSongs = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Icon style={styles.iconDisc} name="disc-sharp"></Icon>
        <View style={styles.description}>
          <Text style={styles.textInfo}> Name song</Text>
          <Text style={styles.textInfo}> Name Artist</Text>
        </View>
        <View style={styles.contentTime}>
          <Text style={styles.textInfo}> 04:00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopSongs;
