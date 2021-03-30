import {call, put} from '@redux-saga/core/effects';
import {Types as SessionTypes, Types} from '../ducks/session';
import {User, AuthType, GenericBaseAction} from 'types';
import {ToastAndroid} from 'react-native';

interface PromiseResponse {
  data: {
    user: User;
  };
}

function _loginFake() {
  return new Promise<PromiseResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: {
            id: 1,
            name: 'Cosmo',
            email: 'email@gmail.com',
          },
        },
      });
    }, 1500);
  });
}
export function* signIn({payload}: GenericBaseAction<AuthType>) {
  const {email} = payload;
  try {
    yield put({type: SessionTypes.SESSION_LOADING});
    const {data} = yield call(_loginFake);
    ToastAndroid.show(`Logged with ${email}`, ToastAndroid.SHORT);
    yield put({type: Types.SESSION_SIGNIN_SUCCESS, payload: {user: data.user}});
  } catch (error) {
    yield put({type: Types.SESSION_SIGNIN_ERROR, payload: {error: error}});
  }
}
