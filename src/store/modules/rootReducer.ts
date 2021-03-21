import {combineReducers} from 'redux';
import {session, media} from '../ducks/';
export const rootReducer = combineReducers({
  session,
  media,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
