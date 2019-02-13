import React from 'react';
import Channels from './Channels';
import Messages from './Messages';
import FormMessage from './FormMessage';


const App = () => (
  <div className="d-flex justify-content-center m-2 flex-row vh-100">
    <div className="flex-column ml-5 pr-2 border-right border-warning">
      <Channels />
    </div>
    <div className="flex-column mr-5 pl-2 w-50">
      <div className="overflow-auto pb-1 h-75">
        <Messages />
      </div>
      <div className="mt-2 border-top border-warning ">
        <FormMessage />
      </div>
    </div>
  </div>
);

export default App;
