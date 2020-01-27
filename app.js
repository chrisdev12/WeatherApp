var colors = require('colors');
var { argv } = require('./Config/yargs');
var { showInfo } = require('./Appfunctions/showInfo');

showInfo(argv.city,argv.country)
    .then((response) => {
        console.log(response.yellow)
    }).catch((error) => {
        console.log(error.red)
    });
