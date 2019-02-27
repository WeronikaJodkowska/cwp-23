const ELEMENTS = {
    'H': {
        name: 'Hydrogen',
        number: 1,
        weight: 1.0079
    },
    'He': {
        name: 'Helium',
        number: 2,
        weight: 4.0026
    },
    'Li': {
        name: 'Lithium',
        number: 3,
        weight: 6.941
    },
    'Be': {
        name: 'Beryllium',
        number: 4,
        weight: 9.0122
    },

};

module.exports = (element) => {
    return ELEMENTS[element];
};