// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const currentChannelId = (state = {}) => state;
const channels = (state = {}) => state;
const messages = handleActions({
  [actions.addMessageSuccess](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
}, {});

export default combineReducers({
  currentChannelId,
  messages,
  channels,
  form: formReducer,
});
