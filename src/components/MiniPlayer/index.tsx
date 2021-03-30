import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {
  Surface,
  Text,
  Caption,
  IconButton,
  ActivityIndicator,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootReducerType} from 'src/store/modules/rootReducer';
import MusicCover from '../MusicCover';
import {IconsContainer, RightContainer, TextContainer} from './styles';

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#d7d1c9',
    borderRadius: 4,
    height: 50,
    width: 50,
  },
  surface: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    elevation: 0,
  },
});

const MiniPlayer = () => {
  const {active} = useSelector((state: RootReducerType) => state.player);
  const {status} = useSelector((state: RootReducerType) => state.player);
  console.log({active});

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        height: 60,
        width: '100%',
      }}
      onPress={() => {}}>
      <Surface style={styles.surface}>
        {active?.cover ? (
          <FastImage source={{uri: active?.cover}} />
        ) : (
          <MusicCover size={50} styles={styles.cover} />
        )}
        <RightContainer>
          <TextContainer>
            <Text>{active?.title} </Text>
            <Caption
              numberOfLines={1}
              style={{margin: 0, includeFontPadding: false}}>
              {active?.artist | active?.album}
            </Caption>
          </TextContainer>
        </RightContainer>
        <IconsContainer>
          {status === 'loading' ? (
            <ActivityIndicator animating={status === 'loading'} />
          ) : (
            <IconButton
              icon={status === 'playing' ? 'pause' : 'play'}
              size={32}
              animated
              style={{margin: 0, padding: 0}}
            />
          )}
        </IconsContainer>
      </Surface>
    </TouchableOpacity>
  );
};
export default MiniPlayer;
