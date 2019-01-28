import axios from 'axios';
import { createAction } from 'redux-actions';

export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const addChannelFailure = createAction('CHANNEL_ADD_FAILURE');
export const addChannelRequest = createAction('CHANNEL_ADD_REQUEST');

export const removeChannelSuccess = createAction('CHANNEL_REMOVE_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE_FAILURE');
export const removeChannelRequest = createAction('CHANNEL_REMOVE_REQUEST');

export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILURE');
export const renameChannelRequest = createAction('CHANNEL_RENAME_REQUEST');

export const addMessage = ({ message, channelId }) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    const url = `/channels/${channelId}/messages`;
    const response = await axios.post(url, { message: { ...message } });
    dispatch(addMessageSuccess({ task: response.data }));
  } catch (e) {
    dispatch(addMessageFailure({ message }));
  }
};
