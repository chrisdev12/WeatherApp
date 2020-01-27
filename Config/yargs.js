const addressOption = {
    
    city: {
        alias: 'ci',
        desc: 'City to get the weather',
        demand: true       
    },
    country: {
        alias: 'co',
        desc: 'City country',
        demand: true   
    }
}

const argv = require("yargs").options(addressOption).help().argv;

module.exports = {
    argv
}