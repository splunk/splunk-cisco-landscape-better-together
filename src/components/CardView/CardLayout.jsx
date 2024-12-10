import React from "react";
import Grid from "@mui/material/Grid2";
import CardComponent from "./CardComponent";


const CardLayout = ({ data }) => {

    if (!data) {
        return <div style={{ color: 'rgb(250, 250, 250)' }}>Loading...</div>;
    }


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
