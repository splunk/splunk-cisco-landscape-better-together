import React from "react";
import Tile from "./components/Tile";

const TilesOverview = () => {

    const tiles = [
        { id: "23", label: "Networking", length: 125, level: 1, width: 225 },
        { id: "25", label: "Cisco ASA Connector", length: 125, level: 2, width: 225 },
        { id: '3', label: 'Splunk Add-on for Cisco Meraki', level: 3, width: 150, length: 50 }, 
        {id : '39', label : 'Splunk Cloud', level : 4, width : 150, length : 50},
    ]

    return (
        <div className="tiles-overview-container">
            {tiles.map(data => {
                return (
                    <Tile data={data} />
                )
            })}
        </div>
    )
}

export default TilesOverview