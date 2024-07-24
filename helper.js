const fs = require('fs');

function readFileAndLogData() {
    fs.readFile('data.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        return data;
    });
}

const data = readFileAndLogData();

const filteredData = data.split('\n').map(row => row.split(',').slice(0, 4));
console.log(filteredData);
const sets = [];
for (let i = 0; i < filteredData[0].length; i++) {
    const set = new Set();
    for (let j = 0; j < filteredData.length; j++) {
        set.add(filteredData[j][i]);
    }
    sets.push(set);
}


