import React from 'react';
import Listchannels from './ListChannels';
import MessageBox from './MessageBox';


const App = () => (
  <div style={{ height: '100%', margin: '5px' }}>
    <div style={{
      float: 'left',
      height: '100vh',
      width: '25%',
      border: '1px solid gray',
      borderRadius: '5px',
      marginLeft: '-1px',
    }}
    >
      <Listchannels />
    </div>
    <div style={{
      float: 'right',
      height: '100vh',
      width: '75%',
    }}
    >
      <MessageBox />
    </div>
  </div>
);

export default App;
/**
border: '1px solid gray',
borderRadius: '5px',
marginRight: '-1px',
 */
