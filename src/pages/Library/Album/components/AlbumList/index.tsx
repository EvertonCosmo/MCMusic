import React, {useRef, useState} from 'react';
import {Container} from './styles';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {AlbumProps} from 'types';
import {Divider, List} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {MusicCover} from '@app/components';
import {useNavigation} from '@react-navigation/core';
import {useScrollToTop} from '@react-navigation/native';

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,

    padding: 10,
    borderColor: '#a3a3a3',
  },
  list: {
    alignItems: 'flex-start',
  },
});
interface AlbumListProps {
  albums: Array<any>;
  onRefresh(): void;
}
const AlbumList = ({albums, onRefresh}: AlbumListProps) => {
  const [refresh, setRefresh] = useState(false);
  const ref = useRef(null);
  useScrollToTop(ref);
  const navigation = useNavigation();

  function fetch(refreshing: Function) {
    setRefresh(true);
    refreshing();
    setRefresh(false);
  }
  return (
    <Container>
      <FlatList
        ref={ref}
        data={albums}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}: {item: AlbumProps}) => (
          <List.Item
            title={item.album}
            titleStyle={{fontWeight: 'bold', color: 'white'}}
            descriptionStyle={{color: 'white'}}
            left={(props) =>
              item.cover === 'file://null' ? (
                <MusicCover styles={styles.icon} size={60} />
              ) : (
                <FastImage
                  {...props}
                  source={{uri: item.cover}}
                  style={{borderRadius: 5}}
                />
              )
            }
            description={`${item.numberOfSongs} songs`}
            onPress={() => navigation.navigate('album-songs', {album: item})}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => fetch(onRefresh)}
          />
        }
      />
    </Container>
  );
};

export {AlbumList};
