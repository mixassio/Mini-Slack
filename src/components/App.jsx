import React from 'react';
import Listchannels from './ListChannels';
import ListMessages from './ListMessages';
import FormMessage from './FormMessage';


const App = () => (
  <div className="container-fluid">
    <div className="row vh-100">
      <div className="col-sm-3" style={{ borderRight: '1px solid orange' }}>
        <Listchannels />
      </div>
      <div className="col-sm-9">
        <div style={{ overflow: 'auto', height: '90vh' }}>
          <ListMessages />
        </div>
        <div style={{ height: '10vh', borderTop: '1px solid orange' }}>
          <FormMessage />
        </div>
      </div>
    </div>
  </div>
);

export default App;
