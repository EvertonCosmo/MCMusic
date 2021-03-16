import {applyMiddleware, createStore, Middleware, Reducer} from 'redux';

export default (reducers: Reducer, middlewares: Middleware<any>[]) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
