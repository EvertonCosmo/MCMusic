import styled from 'styled-components';
import {ProgressBar as Progress} from 'react-track-player';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ProgressMusic = styled(Progress)`
  height: 20px;
  width: 100%;
`;
