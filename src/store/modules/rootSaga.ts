import {all, takeLatest} from 'redux-saga/effects';
import {signIn} from '../sagas/session';
import {Types as sessionTypes, Types} from '../ducks/session';

export default function* rootSaga() {
  return yield all([takeLatest(sessionTypes.SESSION_SIGNIN, signIn)]);
}
