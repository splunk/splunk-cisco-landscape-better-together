import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardLayout from './components/CardView/CardLayout'; 
import VerticalTabs from './components/MainView/MainPage';

function App() {
  return (
    <div className="App">
      <VerticalTabs />
      {/* <CardLayout /> */}
    </div>
  );
}

export default App;
