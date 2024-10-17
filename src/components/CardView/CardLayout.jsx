import React from "react";
import Grid from "@mui/material/Grid2";
import CardComponent from "./CardComponent"; // Import your CardComponent

const CardLayout = () => {
    // TODO: Replace the cardData with a mapping function that will read the data for the json or csv file
    const cardData = [
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
        {
            title: "Cisco Secure Firewall ASA",
            sections: [
                {
                    sectionTitle: "Splunk Cloud / CMP",
                    app: "Splunk Add-on for Cisco ASA",
                    description:
                        "The Splunk Add-on for Cisco Meraki lets you monitor network and security events in your environment. The the Splunk Add-on for Cisco Meraki can collect the following data via the Cisco Meraki REST APIs: Configuration changes Organization security events Events from devices (such as access points, cameras, switches and security appliances) The Splunk Add-on for Cisco Meraki provides the inputs and CIM-compatible knowledge to use with other Splunk apps, such as Splunk Enterprise Security and the Splunk App for PCI Compliance.",
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/5580" },
                        { text: "Documentation", url: "https://docs.splunk.com/Documentation/AddOns/released/Meraki/AboutAddon://docs.splunk.com" },
                    ],
                },
                {
                    sectionTitle: "Splunk SOAR",
                    app: "Cisco Meraki Dashboard Connector",
                    description: "This app interfaces with the Cisco Meraki cloud managed devices. The search string specified is used to match a value in the client MAC address or description field. The default dashboard URL is dashboard.meraki.com. The API Key is generated in your account profile. An account with read only privileges is acceptable." ,
                    links: [
                        { text: "Splunkbase", url: "https://splunkbase.splunk.com/app/6086" },
                        { text: "Documentation", url: "https://github.com/splunk-soar-connectors/meraki" },
                    ],
                },
            ],
        },
       
    ];

    return (
        <Grid container spacing={1} justifyContent="flex-start" sx={{ paddingLeft: '150px' }}>
            {cardData.map((card, index) => (
                <Grid item key={index}>
                    <CardComponent title={card.title} sections={card.sections} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardLayout;
