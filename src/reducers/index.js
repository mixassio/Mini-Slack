import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';


const currentChannelId = handleActions({
  [actions.setCurrentChannnelId](state, { payload: channelId }) {
    return channelId;
  },
}, '');

const channels = handleActions({
  [actions.addChannelSuccess](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.deleteChannelSuccess](state, { payload: channelId }) {
    return _.omit(state, channelId);
  },
}, {});

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
