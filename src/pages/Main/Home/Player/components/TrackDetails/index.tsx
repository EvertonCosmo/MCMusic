import {MusicCover} from '@app/components';
import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Subheading} from 'react-native-paper';
import {SongProps} from 'types';
import {CenterContainer} from '../styles';

interface TrackDetailsProps {
  track: SongProps;
}
const TrackDetails = ({track}: TrackDetailsProps) => {
  return (
    <View>
      <View>
        {track.cover ? (
          <FastImage
            source={{uri: track.cover}}
            style={{}}
            resizeMode={'contain'}
          />
        ) : (
          <MusicCover size={100} styles={{margin: 0}} />
        )}
      </View>
      <CenterContainer>
        <Text
          style={{fontFamily: 'Nunito-Bold', fontSize: 20}}
          numberOfLines={1}>
          {track.title}
        </Text>
        <Subheading numberOfLines={1}>
          {track.artist ? track.artist : track.album}
        </Subheading>
      </CenterContainer>
    </View>
  );
};

export default TrackDetails;
