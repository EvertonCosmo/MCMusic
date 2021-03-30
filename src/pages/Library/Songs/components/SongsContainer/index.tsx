import React from 'react';
import {SongProps} from 'types';
import {Animated, StyleSheet} from 'react-native';
import {Container, Title} from './styles';
import {MusicCover} from '@app/components';
import {Creators as playerCreators} from '../../../../../store/ducks/player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <Title> Tracks</Title>
      <Animated.FlatList
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
            onPress={() => {
              dispatch(playerCreators.play(item));
              //navigation.navigate('player', {track: item});
            }}
          />
        )}
      />
    </Container>
  );
};
export {SongsContainer};
