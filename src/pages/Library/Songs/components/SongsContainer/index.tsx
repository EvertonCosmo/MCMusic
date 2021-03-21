import React from 'react';
import {SongProps} from 'types';
import {FlatList, StyleSheet} from 'react-native';
import {Container, Title} from './styles';
import {MusicCover} from '@app/components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';

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
interface SongsContainerProps {
  songs: Array<any>;
}
const SongsContainer = ({songs}: SongsContainerProps) => {
  return (
    <Container>
      <Title> Tracks</Title>
      <FlatList
        data={songs}
        renderItem={({item}: {item: SongProps}) => (
          <List.Item
            title={item.title}
            titleStyle={{color: 'white'}}
            left={(props) => <MusicCover styles={styles.icon} size={30} />}
            right={(props) => (
              <MaterialCommunityIcons
                {...props}
                name={'play'}
                color={'#fff'}
                size={24}
              />
            )}
            description={`${item.artist} `}
            // onPress={() => navigation.navigate('album-songs', {album: item})}
          />
        )}
      />
    </Container>
  );
};
export {SongsContainer};
