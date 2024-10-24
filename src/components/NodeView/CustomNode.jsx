import React from 'react';
import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { OPACITY } from '../../utils/constants';

const CustomNode = ({ data }) => {
  const renderHandles = () => {
    switch (data.row) {
      case 1:
        return <Handle type="source" position={Position.Right} id="row1-right" style={{ top: '10%' }} />;
      case 2:
        return (
          <>
            <Handle type="target" position={Position.Left} id="row2-left" style={{ top: '50%' }} />
            <Handle type="source" position={Position.Right} id="row2-right" style={{ top: '50%' }} />
          </>
        );
      case 3:
        return <Handle type="target" position={Position.Left} id="row3-left" style={{ top: '90%' }} />;
      default:
        return null;
    }
  };

return (
    <div style={{ padding: 10, borderRadius: 5, backgroundColor: data.background, width: 300, opacity: OPACITY, color : data.color }}>
        <div>{data.label }</div>
        {renderHandles()}
    </div>
);
};

export default CustomNode;
