// NodeView.jsx
import React, { useEffect, useState } from "react";
import { getNodeDataForCategory } from "../../utils/helper";
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';

// Define the custom node and edge types
const nodeTypes = {
    customNode: CustomNode,
};

const edgeTypes = {
    customEdge: CustomEdge,
};

const NodeView = ({ category }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getNodeDataForCategory(category);
                setNodes(data.nodes);
                setEdges(data.links);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70vw',
            height: '70vh',
        }}>
            {isLoading ? (
                <div style={{ textAlign: 'center', color: 'rgb(250, 250, 250)' }}>
                    <p>Loading...</p>
                </div>
            ) : (
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                />
            )}
        </div>
    );
};

export default NodeView;
