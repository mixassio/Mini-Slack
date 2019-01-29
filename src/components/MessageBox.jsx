import React from 'react';
import ListMessages from './ListMessages';
import FormMessage from './FormMessage';


const MessageBox = () => (
  <div style={{ height: '100%' }}>
    <div style={{
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
);

export default MessageBox;
