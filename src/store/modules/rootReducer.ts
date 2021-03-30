import {combineReducers} from 'redux';
import {session, player} from '../ducks/';
export const rootReducer = combineReducers({
  session,
  player,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
