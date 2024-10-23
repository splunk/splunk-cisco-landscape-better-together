import React, { useEffect, useState } from "react";
import { readJSONFile } from "../../utils/file";

const SankeyChart = ({ type }) => {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const getData = async () => {
            setIsLoading(true)
            const data = await readJSONFile(type)
            console.log(data);
            if (window['google']) {
                window['google'].charts.load('current', { 'packages': ['sankey'] });
                window['google'].charts.setOnLoadCallback(drawChart);
            }
            setIsLoading(false)
        }

        getData()

    }, [])

    function drawChart() {
        const data = new window['google'].visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
            ['A', 'X', 5],
            ['A', 'Y', 7],
            ['A', 'Z', 6],
            ['B', 'X', 2],
            ['B', 'Y', 9],
            ['B', 'Z', 4]
        ]);

        // Sets chart options.
        const options = {
            width: 600,
        };

        // Instantiates and draws our chart, passing in some options.
        const chart = new window['google'].visualization.Sankey(document.getElementById('cisco_splunk_sankey'));
        chart.draw(data, options);
    }

    return (
        <div>
            {isLoading && (
                <p>Loading.....</p>
            )}
            <div id="cisco_splunk_sankey" />
        </div>
    )
}

export default SankeyChart