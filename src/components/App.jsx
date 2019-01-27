import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import Listchannels from './ListChannels';
// import Tabexp from './Tabexp';

const App = channels => (
  <div style={{ height: "100%", margin: "5px" }}>
    <div style={{ float: "left", height: "100vh", width: "25%", border: "1px solid gray", borderRadius: "5px", marginLeft: "-1px" }}>
      <Listchannels channels={channels} />
    </div>
    <div style={{ float: "right", height: "100vh", width: "75%", border: "1px solid gray", borderRadius: "5px", marginRight: "-1px" }}>
      fghh
    </div>
  </div>
);

export default App;
