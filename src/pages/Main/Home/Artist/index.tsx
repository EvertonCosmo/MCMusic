import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputSearch: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1
  },

});

const Artist = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
        style={styles.inputSearch}
        defaultValue="You can type in me"
      />
      </View>
    </View>
  );
};
export default Artist;
