import {GenericBaseAction, SongProps} from 'types';
import {Types as PlayerTypes} from '../ducks/player';
import {TrackPlayer} from 'react-track-player';
import {DeviceEventEmitter, EmitterSubscription} from 'react-native';
import {put} from '@redux-saga/core/effects';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

let subscription: EmitterSubscription;

// not saga function
export const setupPlayer = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  console.log('[SETUP] Setup player in progress...');
  try {
    subscription = DeviceEventEmitter.addListener('media', (event) => {
      console.log('from event listener', event);
      if (event === 'skip_to_next') {
        dispatch(skipToNext());
      } else if (event === 'skip_to_previous') {
        dispatch(skipToNext());
      } else if (event === 'completed') {
        dispatch(skipToNext());
      } else {
        console.log({event});
        dispatch({type: PlayerTypes.PLAYER_STATUS, playload: {status: event}});
      }
    });
    dispatch({type: PlayerTypes.PLAYER_STATUS, status: {status: 'paused'}});
  } catch (error) {
    console.log('[error]: setup player', error);
  }
};
const skipToNext = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  getState: any,
) => {
  const track = getState().player.active;

  if (track) {
    dispatch(
      TrackPlayer.load(track.path).then(() => {
        TrackPlayer.play();
      }),
    );
    dispatch({type: PlayerTypes.PLAYER_PLAY_TRACK, payload: {track: track}});
  } else {
    TrackPlayer.pause();
    dispatch({type: PlayerTypes.PLAYER_STATUS, payload: {status: 'paused'}});
  }
};
export function* play({payload: song}: GenericBaseAction<SongProps>) {
  console.log(`[PLAY]song to play: ${song.title}`);
  const {path} = song;
  if (path) {
    TrackPlayer.load(path).then(() => {
      TrackPlayer.play();
    });
    yield put({type: PlayerTypes.PLAYER_PLAY_TRACK, payload: {track: song}});
    yield put({
      type: PlayerTypes.PLAYER_STATUS_UPDATE,
      payload: {status: 'playing'},
    });
  } else {
    console.log('[error]: player not could play song');
  }
}

export function* playerDestroy() {
  TrackPlayer.destroy();
  subscription.remove();
  yield put({type: PlayerTypes.PLAYER_STATUS, payload: {status: 'paused'}});
}
