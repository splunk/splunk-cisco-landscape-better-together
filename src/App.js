import logo from './logo.svg';
import './App.css';
import React from 'react';
import VerticalTabs from './components/MainView/MainPage';
import CardLayout from './components/CardView/CardLayout';
import SankeyChart from './components/SankeyChart/SankeyChart';

function App() {
  return (
    <div className="App">
      <VerticalTabs />
      <CardLayout category="Security" />
      <SankeyChart type={'Collaboration'} />
    </div>
  );
}

export default App;
