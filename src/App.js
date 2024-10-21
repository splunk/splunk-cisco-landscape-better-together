import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CardLayout from './components/CardView/CardLayout';
import SankeyChart from './components/SankeyChart/SankeyChart';
import { Button } from '@mui/material';

function App() {

  const data = ['Collaboration', 'Security', 'Networking', 'Application Performance']
  const [type, setType] = useState('Collaboration')
  const [index, setIndex] = useState(0)

  return (
    <>
      <Button type='button' variant='contained' style={{ margin: '1rem' }} onClick={() => {
        let value = 0
        if (index + 1 !== 4) value = index + 1
        setType(data[value])
        setIndex(value)
      }}>Next {index + 1}</Button>
      <div className="App">
        <SankeyChart type={type} />
      </div>
    </>
  );
}

export default App;
