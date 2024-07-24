import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import MyComponent from './InfoTile';
import ReactDOM from 'react-dom';
import { nodes, links } from './graphData';

const GraphComponent = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const radius = 200;
    const padding = 0.1; // 10% padding
    const paddedWidth = width * (1 - 2 * padding);
    const paddedHeight = height * (1 - 2 * padding);

    // Clear any previous SVG
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3.select(ref.current)
      .attr('width', '100%')
      .attr('height', '100%')

    // Add group with transform to center it
    const vis = svg.append('g')
      .attr('transform', `translate(${width * 0.05}, ${height * 0.05})`);
    console.log(vis.node().getBoundingClientRect());
    
    // Calculate node positions
    const nodesInLevels = data.nodes.reduce((acc, node) => {
      if (!acc[node.level]) {
        acc[node.level] = [];
      }
      acc[node.level].push(node);
      return acc;
    }, []);
    let widthLevelEnd = width*0.1;
    let heightNodeEnd = height*0.1;
    const levelWidth = 400; // Adjust this value to set the horizontal gap between levels
    const levelHeight = 50; // Adjust this value to set the vertical gap between levels
    console.log(nodesInLevels);
    nodesInLevels.forEach((nodes, i) => {
      if(i === 0 || i === nodesInLevels.length - 1) {
        heightNodeEnd = height*0.1;
        nodes.forEach((node) => {
          node.x = (i ===0 ?widthLevelEnd : widthLevelEnd + levelWidth);
          node.y = heightNodeEnd;
        });
      }else if(i !== 1 && i !== nodesInLevels.length - 2) {
        heightNodeEnd = height*0.1;
        nodes.forEach((node, k) => {
          node.x = widthLevelEnd + levelWidth;
          node.y = heightNodeEnd + (k ===0 ? 0 :levelHeight);
          heightNodeEnd = node.y + node.length;
        });
        heightNodeEnd = height*0.1;
        widthLevelEnd = nodes[nodes.length - 1].x + nodes[nodes.length - 1].width;
      }else if(i === 1 || i === nodesInLevels.length - 2) {
        heightNodeEnd = height*0.15;
        nodes.forEach((node, j) => {
          node.x = (i ===1 ?widthLevelEnd : widthLevelEnd + levelWidth);
          node.y = heightNodeEnd + (j ===0 ? 0 :levelHeight);
          heightNodeEnd = node.y + node.length;
        });
      }
    });

    const links = vis.selectAll('line.link').data(data.links);
    links.enter().append('line')
      .attr('class', 'link')
      .attr('stroke', '#000')
      .attr('x1', d => data.nodes.find(n => n.id === d.source).x + data.nodes.find(n => n.id === d.source).width / 2)
      .attr('y1', d => data.nodes.find(n => n.id === d.source).y + data.nodes.find(n => n.id === d.source).length / 2)
      .attr('x2', d => data.nodes.find(n => n.id === d.target).x + data.nodes.find(n => n.id === d.target).width / 2)
      .attr('y2', d => data.nodes.find(n => n.id === d.target).y + data.nodes.find(n => n.id === d.target).length / 2);

    // Draw nodes
    const nodes = vis.selectAll('g.node').data(data.nodes);
    const nodeEnter = nodes.enter().append('g').attr('class', 'node')
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    nodeEnter.each(function(d) {
      if (d.level !== nodesInLevels.length - 2) {
        console.log('Rendering node:', d.name, 'Level:', d.level);
      const node = d3.select(this);
      const foreignObject = node.append('foreignObject')
        .attr('width', d.width)
        .attr('height', d.length)
        .node();

      ReactDOM.render(<MyComponent data={d} />, foreignObject);
      }
    });
    nodeEnter.each(function(d) {
      if (d.level === nodesInLevels.length - 2) {
        console.log('Rendering node:', d.name, 'Level:', d.level);
      const node = d3.select(this);
      const foreignObject = node.append('foreignObject')
        .attr('width', d.width)
        .attr('height', d.length)
        .node();

      ReactDOM.render(<MyComponent data={d} />, foreignObject);
      }
    });
    

    
  }, [data]);
  return (
    <svg ref={ref}></svg>
  );
};



export default GraphComponent;
