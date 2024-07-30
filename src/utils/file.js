
export const readCSVFile = async () => {
    const csvData = await fetch('./data.csv').then(res => res.text())
    const data = csvData.split('\n').map(row => row.split(',').slice(0, 4))

    //remove headers from the original array and store in a separate array
    const headers = data.splice(0, 1)

    const categories = new Set()
    const ciscoProducts = new Set()
    const splunkProducts = new Set()

    data.forEach(content => {
        categories.add(content[0])
        ciscoProducts.add(content[1])
        splunkProducts.add(content[2])
    })

    let index = 0
    const defaultNodeWidth = 150
    const defaultNodeLength = 50
    const headNodeLength = 1000

    //build the nodes
    const nodes = [
        { id: '0', label: 'Cisco', level: 0, width: defaultNodeWidth, length: headNodeLength },
        ...Array.from(categories).map(cat => {
            index++;
            return { id: `${index}`, level: 1, label: cat, width: defaultNodeWidth, length: defaultNodeLength }
        }),
        ...Array.from(ciscoProducts).map(prod => {
            index++;
            return { id: `${index}`, level: 2, label: prod, width: defaultNodeWidth, length: defaultNodeLength }
        }),
        ...Array.from(splunkProducts).map(prod => {
            index++;
            return { id: `${index}`, level: 3, label: prod, width: defaultNodeWidth, length: defaultNodeLength }
        }),
        { id: `${index + 1}`, label: 'Splunk Cloud', level: 4, width: defaultNodeWidth, length: defaultNodeLength },
        { id: `${index + 2}`, label: 'SOAR', level: 4, width: defaultNodeWidth, length: defaultNodeLength },
        { id: `${index + 3}`, label: 'Splunk', level: 5, width: defaultNodeWidth, length: headNodeLength },
    ]

    const links = []

    // create links with information from the nodes and the csv data 
    data.forEach(content => {
        const categoryNode = nodes.find(node => node.label === content[0])
        const ciscoProductNode = nodes.find(node => node.label === content[1])
        const splunkProductNode = nodes.find(node => node.label === content[2])
        const splunkPlatformNode = nodes.find(node => node.label === (content[3] === 'Splunk Cloud / Splunk CMP' ? 'Splunk Cloud' : content[3]))

        if (categoryNode && ciscoProductNode && splunkPlatformNode && splunkProductNode) {
            links.push(
                { source: categoryNode.id, target: ciscoProductNode.id },
                { source: ciscoProductNode.id, target: splunkProductNode.id },
                { source: splunkProductNode.id, target: splunkPlatformNode.id },
            )
        }
    })

    return { nodes, links }
}