import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import ReactDOM from 'react-dom';
import listChannels from './ListChannels';

// import faker from 'faker';
// import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const {channels} = window.gon;
console.log('catch gon ----->', channels);

ReactDOM.render(
  listChannels(channels),
  document.getElementById('chat'),
);