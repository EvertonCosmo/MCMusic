import {combineReducers} from 'redux';
import {session} from '../ducks/';
export const rootReducer = combineReducers({
  session,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
