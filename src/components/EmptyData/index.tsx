import React from 'react';
import {Text, View} from 'react-native';
import {Container} from './styles';
import {Button} from 'react-native';

interface EmptyProps {
  message: string;
  fetch(): void;
}
const EmptyData = ({message, fetch}: EmptyProps) => {
  return (
    <Container>
      <View>
        <Text>{message} </Text>
        <Button title={'refresh'} onPress={fetch} />
      </View>
    </Container>
  );
};

export default EmptyData;
