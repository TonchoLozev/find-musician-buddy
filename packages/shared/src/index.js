import createSagaMiddleware  from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';

import reducer from './reducers';
import rootSaga from './saga';

const initialState = Map({});

export const makeStore = (state = initialState) => {
  console.log(state);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, state, applyMiddleware(sagaMiddleware));
  console.log(store.getState())
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store;
};