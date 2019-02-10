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
  [actions.deleteChannelSuccess](state, { payload }) {
    return _.omit(state, payload.id);
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
