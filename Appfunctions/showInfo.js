const { getCoordenate } = require('./getCoordenates');
const { getWeather } = require('./getWeather');
var colors = require('colors');

const showInfo = async (city, country) => {
    
    try {
        const coordenates = await getCoordenate(city,country);
        const weather = await getWeather(coordenates.lat, coordenates.lng)
        
        return `The temperature of ${city} , with latitud "${coordenates.lat}" 
        and longitude "${coordenates.lng}" is = ${weather}`
        
    } catch (error) {      
        return 'PLEASE VERIFY THE CITY OR COUNTRY NAME'.red
    }
}


module.exports = {
    showInfo
}