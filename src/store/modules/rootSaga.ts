import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import {signIn} from '../sagas/session';
import {Types as sessionTypes} from '../ducks/session';
import {Types as playerTypes} from '../ducks/player';
import {play, playerDestroy} from '../sagas/player';
export default function* rootSaga() {
  return yield all([
    takeLatest(sessionTypes.SESSION_SIGNIN, signIn),
    takeEvery(playerTypes.PLAYER_PLAY, play),
    takeLatest(playerTypes.PLAYER_DESTROY, playerDestroy),
  ]);
}
