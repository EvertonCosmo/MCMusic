import createSagaMiddleware from 'redux-saga';
import {persistStore, Persistor} from 'redux-persist';
import {Store} from 'redux';
import createStore from './createStore';
import {rootReducer} from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware({});

const middlewares = [sagaMiddleware];

const store: Store<any> = createStore(
  persistReducers(rootReducer),
  middlewares,
);
const persistor: Persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export {store, persistor};
