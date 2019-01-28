import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import gon from 'gon';
import faker from 'faker';
// import cookies from 'js-cookie';
import io from 'socket.io-client';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { App } from './components';
import * as actions from './actions';
import reducers from './reducers';


/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const initState = {
  channels: _.keyBy(gon.channels, 'id'),
  messages: _.keyBy(gon.messages, 'id'),
  user: faker.name.findName(),
  currentChannelId: gon.currentChannelId,
};
const store = createStore(
  reducers,
  initState,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

const socket = io();

socket.on('newMessage', ({ data: { attributes } }) => {
  store.dispatch(actions.addMessageSuccess(attributes));
});

socket.on('newChannel', ({ data: { attributes } }) => {
  store.dispatch(actions.addChannelSuccess(attributes));
});

socket.on('removeChannel', ({ data }) => {
  store.dispatch(actions.removeChannelSuccess(data));
});

socket.on('renameChannel', ({ data: { attributes } }) => {
  store.dispatch(actions.renameChannelSuccess(attributes));
});

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels } = gon;

ReactDOM.render(
  App(channels),
  document.getElementById('chat'),
);
