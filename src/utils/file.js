// WIP
export const readJSONFile = async (filterKey = null) => {
    const data = await fetch('./data.json').then(res => res.json())

    if (data[filterKey]) return data[filterKey]

    return data
}