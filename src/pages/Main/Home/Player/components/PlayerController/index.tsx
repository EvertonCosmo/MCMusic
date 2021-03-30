import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootReducerType} from 'src/store/modules/rootReducer';
const styles = StyleSheet.create({
  playerToolbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 2,
  },
});
const PlayerController = () => {
  const {status} = useSelector((state: RootReducerType) => state.player);
  return (
    <View style={styles.playerToolbox}>
      <IconButton icon={'skip-back-outline'} size={40} onPress={() => {}} />
      <FAB
        icon={status === 'playing' ? 'pause' : 'play'}
        onPress={() => {}}
        loading={status === 'loading'}
      />
      <IconButton icon={'skip-forward-outline'} size={40} onPress={() => {}} />
    </View>
  );
};

export default PlayerController;
