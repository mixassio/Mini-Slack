import React from 'react';
import Channels from './Channels';
import Messages from './Messages';
import FormMessage from './FormMessage';


const App = () => (
  <div className="container-fluid">
    <div className="row vh-100">
      <div className="col-sm-3 border-right border-warning">
        <Channels />
      </div>
      <div className="col-sm-9">
        <div style={{ overflow: 'auto', height: '90vh' }}>
          <Messages />
        </div>
        <div style={{ height: '10vh', borderTop: '1px solid orange' }}>
          <FormMessage />
        </div>
      </div>
    </div>
  </div>
);

export default App;
