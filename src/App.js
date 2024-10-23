import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardLayout from './components/CardView/CardLayout';
import SankeyChart from './components/SankeyChart/SankeyChart';

function App() {
  return (
    <div className="App">
      <CardLayout category="Security"  />
      <SankeyChart type={'Collaboration'} />
    </div>
  );
}

export default App;
