import React, { useState } from 'react';

const Tile = ({ data }) => {

    const COLORS = {
        1: '#0d274d',
        2: '#00bceb',
        3: 'linear-gradient(171.84deg, rgba(255, 171, 15, 1.0) 4%, rgba(255, 113, 43, 1.0) 40%, rgba(255, 15, 123, 1.0) 83%)',
        4: '#FF712B'
    }

    const [showDescription, setShowDescription] = useState(false)

    const openDescription = () => {
        setShowDescription(!showDescription)
    }

    const getHeaderColor = (level) => {
        return COLORS[level] || '#0499d0'
    }

    console.log(data);

    return (
        <div className='info-card-container'>
            <div className='header-box' style={{background: getHeaderColor(data.level)}} />
            <p className={`card-title ${showDescription ? 'open' : ''}`} onClick={openDescription}>{data.label}</p>
            {showDescription ?
                <p className={`${showDescription ? 'description' : ''}`}>
                </p> : null}
        </div>
    )
};

export default Tile;