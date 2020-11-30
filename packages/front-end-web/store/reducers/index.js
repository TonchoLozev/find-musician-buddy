import { combineReducers } from 'redux';

import TestReducer from './testReducer';
import AnotherTestReducer from './anotherTestReducer';

export default combineReducers({
    TestReducer,
    AnotherTestReducer,
});
