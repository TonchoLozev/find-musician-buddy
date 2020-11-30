import { SET_TEST_VALUE } from '../constants/testActionTypes';

export default (test) => ({ type: SET_TEST_VALUE, payload: { test } });
