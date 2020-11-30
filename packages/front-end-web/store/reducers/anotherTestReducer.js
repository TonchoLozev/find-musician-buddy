import { Map } from 'immutable';
import { SET_TEST_VALUE } from '../constants/testActionTypes';

const initialState = Map({ anotherTest: '' });

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_TEST_VALUE:
        return state.set('test', payload.test);
    default:
        return state;
    }
};
