import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import CardComponent from "./CardComponent";
import { readJSONFile } from "../../utils/file";


const CardLayout = ({ category, data }) => {
    // const [data, setData] = useState(null);

    useEffect(() => {
        // const getData = async () => {
        //     try {
        //         const data = await readJSONFile()
        //         setData(data);
        //     } catch (error) {
        //         console.error("Error reading data", error);
        //     }
        // }
        // getData();
    }, [])

    if (!data) {
        return <div style={{ color: 'rgb(250, 250, 250)' }}>Loading...</div>;
    }

    // const filteredData = data[category];

    const convertData = (data) => {
        const groupedData = data.reduce((acc, entry) => {
            const { cisco_product, splunk_platform, splunk_addon, description, link, documentation } = entry;

            if (!acc[cisco_product]) {
                acc[cisco_product] = {
                    title: cisco_product,
                    sections: []
                };
            }

            acc[cisco_product].sections.push({
                sectionTitle: splunk_platform.trim(),
                app: splunk_addon,
                description: description,
                links: [
                    { text: "Splunkbase", url: link },
                    { text: "Documentation", url: documentation }
                ]
            });

            return acc;
        }, {});

        return Object.values(groupedData);
    };

    const cardData = convertData(data);

    return (
        <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start">
            {cardData.map((card, index) => (
                <Grid key={index}>
                    <CardComponent title={card.title} sections={card.sections} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardLayout;
