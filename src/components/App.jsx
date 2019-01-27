import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import Listchannels from './ListChannels';
// import Tabexp from './Tabexp';

const App = channels => (
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div className="channel-list">
        <Listchannels channels={channels} />
      </div>
      <div className="col pr-0 d-flex flex-column my-3">
        <div className="bg-white messages-window flex-grow-1 mx-100">
          ffff
        </div>
        <div className="row input mw-100">
          khjhgj
        </div>
      </div>
    </div>
  </div>
);

export default App;
