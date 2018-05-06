/*
combine all reducers into one root reducer
*/

import { combineReducers } from 'redux';
import exampleReducer from './example';

const rootReducer = combineReducers({
  _example: exampleReducer
});

export default rootReducer;
