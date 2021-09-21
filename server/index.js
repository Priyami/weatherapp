const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express()
let request = require('request');
app.use(bodyParser.json())

const PORT = 4000;
const apiURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=new%20york` 
app.get('/', (req, res) => {

    
})

request(apiURL, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      console.log(weather);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})