const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express()

app.use(bodyParser.json())

const PORT = 4000;

app.get('/', async(req, res) => {
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=new%20york` 
    const response = await fetch(apiURL)
    const json = await response.json()
    console.log(json);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})