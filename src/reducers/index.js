import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const user = (state = {}) => state;
const currentChannelId = (state = {}) => state;
const messages = (state = {}) => state;
const channels = (state = {}) => state;


export default combineReducers({
  user,
  currentChannelId,
  messages,
  channels,
  form: formReducer,
});
