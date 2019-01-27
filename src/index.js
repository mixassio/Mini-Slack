import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import ReactDOM from 'react-dom';
import gon from 'gon';
import { ListChannels, App } from './components';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels } = gon;

ReactDOM.render(
  App(channels),
  document.getElementById('chat'),
);
