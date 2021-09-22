const axios = require('axios');

async function getWeatherData(){
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=new%20york` 
    const response = await axios.get(apiURL)
    const json = await response.json()

    console.log(json)
}