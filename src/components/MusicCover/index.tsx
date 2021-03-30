import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface MusicCoverProps {
  size: number;
  styles: any;
}
const MusicCover = ({size, styles}: MusicCoverProps) => {
  return (
    <View style={[styles, {alignItems: 'center', justifyContent: 'center'}]}>
      <Icon name="music" color={'#fff'} size={size} />
    </View>
  );
};
export default MusicCover;
