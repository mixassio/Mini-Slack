// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const user = (state = {}) => state;
const currentChannelId = (state = {}) => state;
const channels = (state = {}) => state;
const messages = handleActions({
  [actions.addMessageSuccess](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
}, {});

const addMessageToState = handleActions({
  [actions.addMessageSuccess]() {
    return 'successed';
  },
  [actions.addMessageFailure]() {
    return 'failed';
  },
  [actions.addMessageRequest]() {
    return 'requested';
  },
}, 'none');

export default combineReducers({
  user,
  currentChannelId,
  messages,
  channels,
  addMessageToState,
  form: formReducer,
});