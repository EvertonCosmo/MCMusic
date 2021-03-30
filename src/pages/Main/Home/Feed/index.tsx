import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NewCollections from './components/NewCollections/index';
import TopPicks from './components/TopPicks/index';
import TopSongs from './components/TopSongs/index';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    flex: 1,
    height: 100,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconHeader: {
    fontSize: 60,
    color: 'white',
  },
  topPicks: {
    height: 270,
    paddingVertical: 20,
  },
  newColletions: {
    height: 250,
    paddingVertical: 20,
  },
  topSongs: {
    height: '100%',
    paddingVertical: 20,
  },
  title: {
    fontSize: 23,
    color: 'gray',
    fontWeight: '700',
    paddingHorizontal: 15,
  },
  filter: {
    paddingVertical: 20,
    alignItems: 'flex-end',
  },
  lineTop: {
    width: 33,
    height: 4,
    margin: 2.5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  lineBottom: {
    width: 25,
    height: 4,
    margin: 2.5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

const Feed = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon style={styles.iconHeader} name="person-circle"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <View style={styles.lineTop}></View>
              <View style={styles.lineBottom}></View>
              {/* <Icon style={styles.iconHeader} name="reorder-two"></Icon> */}
            </TouchableOpacity>
          </View>
          <View style={styles.topPicks}>
            <Text style={styles.title}> Top Picks</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
              <TopPicks />
            </ScrollView>
          </View>
          <View style={styles.newColletions}>
            <Text style={styles.title}> New Collections</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <NewCollections />
              <NewCollections />
              <NewCollections />
              <NewCollections />
              <NewCollections />
            </ScrollView>
          </View>

          <View style={styles.topSongs}>
            <Text style={styles.title}> Top Songs</Text>
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
            <TopSongs />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
