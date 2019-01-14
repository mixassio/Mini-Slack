import React from 'react';

const listChannels = channels => (
  <ul>
    {channels.map(el => <li key={el.id}>{el.name}</li>)}
  </ul>
);

export default listChannels;
