import {BaseAction, GenericBaseAction, SongProps} from 'types';
import {setupPlayer} from '../sagas/player';
export const Types = {
  PLAYER_STATUS: 'player/PLAYER_STATUS',
  PLAYER_STATUS_UPDATE: 'player/PLAYER_STATUS_UPDATE',
  PLAYER_PLAY: 'player/PLAYER_PLAY',
  PLAYER_PLAY_TRACK: 'player/PLAYER_PLAY_TRACK',
  PLAYER_DESTROY: 'player/PLAYER_DESTROY',
};

interface PlayerState {
  active: SongProps;
  status: 'init' | 'playing' | 'loading' | 'paused' | 'stopped';
}
const INITIAL_STATE: PlayerState = {
  active: null,
  status: 'init',
};

const player = (state = INITIAL_STATE, {type, payload}: BaseAction) => {
  switch (type) {
    case Types.PLAYER_STATUS_UPDATE:
      return {...state, status: payload?.status};
    case Types.PLAYER_PLAY_TRACK:
      console.log({payload});
      return {...state, active: payload?.track};
    case Types.PLAYER_DESTROY:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};
export const Creators = {
  play: (data: SongProps): GenericBaseAction<SongProps> => ({
    type: Types.PLAYER_PLAY,
    payload: data,
  }),
  setupPlayer,

  playerDestroy: (): BaseAction => ({
    type: Types.PLAYER_DESTROY,
  }),
};

export default player;
