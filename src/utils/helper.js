import dagre from '@dagrejs/dagre';
import { readJSONFile } from './file';
import { CISCO_PRODUCT_BG_COLOR, CISCO_PRODUCT_OPACITY, LEFT, RIGHT, SPLUNK_ADDON_BG_COLOR, SPLUNK_ADDON_OPACITY, SPLUNK_PLATFORM_BG_COLOR, SPLUNK_PLATFORM_OPACITY } from './constants';

const calculateGraphPositions = (nodes, links) => {
    const nodeWidth = 350;
    const nodeHeight = 50;
    const graph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    graph.setGraph({ rankdir: 'LR' });
    nodes.forEach(node => {
        graph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    links.forEach(link => {
        graph.setEdge(link.source, link.target);
    });
    dagre.layout(graph);
    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = graph.node(node.id);
        return {
            ...node,
            position: {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            },
            targetPosition: LEFT,
            sourcePosition: RIGHT,
        };
    });
    return { nodes: layoutedNodes, links };
}

function extractNodeLevelData(data, selectedAttributes) {
    const result = {};
    const ciscoProductSet = new Set();
    const splunkAddonSet = new Set();
    const soarAddonSet = new Set();
    const SplunkPlatformSet = new Set();





    // Loop through each entry in the category
    data.forEach(entry => {

        const { cisco_product, splunk_addon, splunk_platform } = entry;
        ciscoProductSet.add(cisco_product);
        if (entry.splunk_platform === 'SOAR') {
            soarAddonSet.add(splunk_addon);
        } else {
            splunkAddonSet.add(splunk_addon);
        }
        SplunkPlatformSet.add(splunk_platform);
        const key = splunk_addon;
        result[key] = entry;
    });

    return {
        nodes: result,
        ciscoProductSet,
        splunkAddonSet,
        soarAddonSet,
        SplunkPlatformSet
    };
}

const generateGraph = (result) => {
    const nodes = [];
    const links = [];
    const ciscoProductSet = result.ciscoProductSet;
    const splunkAddonSet = result.splunkAddonSet
    const SplunkPlatformSet = result.SplunkPlatformSet;
    const soarAddonSet = result.soarAddonSet;
    let count = 0;
    for (const key of ciscoProductSet) {
        nodes.push({ id: key, type: 'customNode', data: { label: key, row: 1, background: CISCO_PRODUCT_BG_COLOR, opacity: CISCO_PRODUCT_OPACITY } });
        count++;
    }
    count = 0;
    for (const key of splunkAddonSet) {
        nodes.push({ id: key, type: 'customNode', data: { label: key, row: 2, background: SPLUNK_ADDON_BG_COLOR, opacity: SPLUNK_ADDON_OPACITY } });
        links.push({ source: key, target: result.nodes[key].splunk_platform });
        links.push({ source: result.nodes[key].cisco_product, target: result.nodes[key].splunk_addon });
        count++;
    }
    for (const key of soarAddonSet) {
        nodes.push({ id: key, type: 'customNode', data: { label: key, row: 2, background: SPLUNK_ADDON_BG_COLOR, opacity: SPLUNK_ADDON_OPACITY } });
        links.push({ source: key, target: result.nodes[key].splunk_platform });
        links.push({ source: result.nodes[key].cisco_product, target: result.nodes[key].splunk_addon });
        count++;
    }
    count = 0;

    for (const key of SplunkPlatformSet) {
        nodes.push({ id: key, type: 'customNode', data: { label: key, row: 3, background: SPLUNK_PLATFORM_BG_COLOR, opacity: SPLUNK_PLATFORM_OPACITY } });
        count++;
    }

    const calculatedGraphData = calculateGraphPositions(nodes, links);
    return calculatedGraphData;

}


export const getNodeDataForCategory = async (category) => {
    const data = await readJSONFile(category);
    const result = extractNodeLevelData(data);
    return generateGraph(result);
}