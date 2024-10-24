import React, { useEffect, useState } from "react";
import { readJSONFile } from "../../utils/file";
import './SankeyChart.css'

const SankeyChart = ({ category }) => {

    const [isLoading, setIsLoading] = useState(false)

    const buildTooltipContent = (data, isCiscoProduct = false) => {
        return `<div class='tooltip-box'>
                        <p>${isCiscoProduct ? data.cisco_product_description : data.description}</p>
                </div>`
    }

    const buildRows = (data) => {
        const rows = []

        if (!Array.isArray(data)) return

        data?.forEach(item => {
            rows.push(
                [item.cisco_product, item.splunk_addon, 1, buildTooltipContent(item, true)],
                [item.splunk_addon, item.splunk_platform, 2, buildTooltipContent(item)]
            )
        })

        return rows
    }

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const data = await readJSONFile(category)
            const rows = buildRows(data)

            if (window['google'] && rows) {
                window['google'].charts.load('current', { 'packages': ['sankey'] });
                window['google'].charts.setOnLoadCallback(drawChart(rows));
            }
            setIsLoading(false)
        }
        getData()
    }, [])





    const drawChart = (rows) => {
        if (!window['google'].visualization) return

        const data = new window['google'].visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
        data.addRows(rows);


        // Sets chart options.
        const options = {
            height: 500,
            sankey: {
                node: {
                    label: {
                        fontSize: 14,
                        color: '#232f48',
                    },
                    interactivity: true,
                    labelPadding: 5,     // Horizontal distance between the label and the node.
                    nodePadding: 7,     // Vertical distance between nodes.

                },
                link: {
                    color: {
                        fill: '#d8e1e4',     // Color of the link.
                    },
                },
            },
            tooltip: { isHtml: true }
        };

        // Instantiates and draws our chart, passing in some options.
        const chart = new window['google'].visualization.Sankey(document.getElementById('cisco-splunk-sankey'));
        chart.draw(data, options);
    }



    return (
        <div className="chart-container">
            {isLoading && (
                <p style={{ color: 'rgb(250, 250, 250)' }}>Loading.....</p>
            )}
            <div id="cisco-splunk-sankey" />
        </div>
    )
}

export default SankeyChart