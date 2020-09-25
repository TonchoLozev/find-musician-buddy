import { SET_TEST_VALUE } from '../constants/testActionTypes';

export default (testValue) => ({type: SET_TEST_VALUE, payload: { testValue }});