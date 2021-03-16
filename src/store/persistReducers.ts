import {Reducer} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['session'],
    },
    reducers,
  );
  return persistedReducer;
};
