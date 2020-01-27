const axios = require('axios').default;

const getCoordenate = async (city,country) => {
      
    const encodedUrl = encodeURI(city); //URL format for the city inserted as string. 
    let cityCountry = country
    
    const coordenateInstance = axios.create({  //Set up the API values required for CityGeo API.
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl},${cityCountry}`,
    headers: {'x-rapidapi-key': '28b0aa7a4fmshe964bb15e8f1fb2p184a35jsn1b0c2d499795'}
    });
    
    const coordResp = await coordenateInstance.get() // Await the AXIOS response of the GET request to CityGeo
    
    if (coordResp.data.Results.length === 0) {
        throw new Error(`Error to get the coordenates of ${city}. PLEASE VERIFY THE CITY OR THE COUNTRY`)
    } 
    
    let lat = coordResp.data.Results[0].lat
    let lng = coordResp.data.Results[0].lon
    
    return {
        city,
        lat,
        lng      
    }
}
   
module.exports = {
    getCoordenate
}


 
    
    
    