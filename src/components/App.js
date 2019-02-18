import React from 'react';
import Stream from './Stream';
import Collection from './Collection';

const App = () => {
  return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-3 text-center">
            <Stream/>
          </div>
          <div className="col-md-9">
            <Collection/>
          </div>
        </div>
      </div>
  );
};

export default App;
