import React from 'react';

const InfoTile = ({ data }) => {
    if(data.level === 0 || data.level === 5){
        const overlayClass =data.level ===0 ? 'overlay-underlay overlay-underlay--overlay' : 'overlay-underlay overlay-underlay--underlay';

        return (
            
                
               <div className={overlayClass}>{data.label}</div>
          
        );
    }else{
        return (
            <div style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}>
            {data.label}
            </div>
        );
    }
   
};

export default InfoTile;