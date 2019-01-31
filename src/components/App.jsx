import React from 'react';
import Listchannels from './ListChannels';
import ListMessages from './ListMessages';
import FormMessage from './FormMessage';


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
      <div
        style={{
          overflow: 'auto',
          height: '80vh',
          border: '1px solid gray',
          borderRadius: '5px',
          marginBottom: '5px',
        }}
      >
        <ListMessages />
      </div>
      <div style={{
        height: '19vh',
        border: '1px solid gray',
        borderRadius: '5px',
        marginTop: '5px',
      }}
      >
        <FormMessage />
      </div>
    </div>
  </div>
);

export default App;
