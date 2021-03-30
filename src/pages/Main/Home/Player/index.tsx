import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import {PlayerController, ProgressBar, TrackDetails} from './components';
import {
  CenterContainer,
  ContainerPlayer,
  PlayerToolBox,
} from './components/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Player = () => {
  const {params} = useRoute();
  console.log(params);
  const track = params?.track;

  return (
    <View style={styles.container}>
      <ContainerPlayer>
        <TrackDetails track={track} />
      </ContainerPlayer>
      <CenterContainer>
        <ProgressBar />
      </CenterContainer>
      <PlayerToolBox>
        <PlayerController />
      </PlayerToolBox>
      <Divider />
    </View>
  );
};
export default Player;
