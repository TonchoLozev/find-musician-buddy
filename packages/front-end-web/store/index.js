import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { mergeDeep } from 'immutable';
import logger from 'redux-logger';

import combinedReducer from './reducers';
import rootSaga from './saga';

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = mergeDeep(
            state, // use previous state
            action.payload, // apply delta from hydration
        );
        if (state.count) {
            nextState.set('count', state.count); // preserve count value on client side navigation
        }

        return nextState;
    }
    return combinedReducer(state, action);
};

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore);
