import React, { useEffect, useState } from 'react';
import './App.css';
import GraphComponent from './GraphComponent';
// import { links, nodes } from './graphData';
import { readCSVFile } from './utils/file';
import TilesOverview from './TilesOverview';

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    generateTree()
  }, [])

  const generateTree = async () => {
    setIsLoading(true)
    const data = await readCSVFile()
    setData(data)
    setIsLoading(false)
  }

  return (
    isLoading ? <div>...Loading</div> :
      <div className="App">
        <TilesOverview/>
        {/* <GraphComponent data={data} generateTree={generateTree} /> */}
        {/* <GraphComponent data={{links: links, nodes: nodes}} generateTree={generateTree} /> */}
      </div>
  );
}

export default App;