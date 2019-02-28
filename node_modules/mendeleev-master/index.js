const getElementInfo = require('mendeleev-stringify');
const fs = require('fs');

module.exports = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('Problems with file');
        } else {
            data.split('\n').forEach((element) => {
                console.log(getElementInfo(element));
            })
        }
    });
};
