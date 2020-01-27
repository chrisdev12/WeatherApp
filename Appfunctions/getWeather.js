const { getCoordenate } = require('./getCoordenates');
const axios = require('axios').default;


//Get the weather once We get the latitude and longitude.

const getWeather = async(lat,lon) => {
    
    let appid = '5cb72a2c67ca6208928515c6d5def077';
    let unitWished = 'metric'
         
    //Note: openWeather doesnt require headers, so We can use the axios.get instead of configure Axios first.
    
    const weatherResp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${unitWished}`)
    
    if (weatherResp.data.length === 0) {
        throw new Error(`Error to get the ${city} weather`)
    } 
    
    let currentWeather = weatherResp.data.main.temp
    
    return currentWeather
};

module.exports = {
    getWeather
}