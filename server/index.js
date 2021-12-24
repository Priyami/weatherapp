const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const axios = require('axios');
const app = express();
const cors = require('cors');
require('dotenv').config({path: path.join(__dirname, '.env')});
const api_key = process.env.API_KEY;
const buildPath = path.join(__dirname, '..', 'dist');
app.use(express.static(buildPath));

app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: true
  }));

app.use(cors());

const PORT = process.env.PORT || 4000






app.post('/api/week', async (req, res) => {
	try {
		const cityName = req.body.cityname;
		const response = await axios({
			url: `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${cityName}&days=7`,
			method: "get",
			headers: { 'content-type': 'application/json' },
		});
		 res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

app.post('/api/listdata', async (req, res) => {
	try {
		const  city  = req.body.city;
		const response = await axios({
			url: `http://api.weatherapi.com/v1/search.json?key=${api_key}&q=${city}`,
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


