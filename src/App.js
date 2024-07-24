import React from 'react';
import './App.css';
import GraphComponent from './GraphComponent';
import { links, nodes } from './graphData';

function App() {
  return (
    <div className="App">
      <GraphComponent data={{nodes, links}} />
    </div>
  );
}

export default App;