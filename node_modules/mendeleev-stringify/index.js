const mendeleev = require('mendeleev');

module.exports = (elementName) => {
    const element = mendeleev(elementName);
    if (element) {
        return `${element.number}. ${element.name} / ${element.weight}`
    } else {
        console.log('No such element');
    }
};