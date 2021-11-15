const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
//require('dotenv').config();
const axios = require('axios');
const app = express();
const cors = require('cors');
require('dotenv').config({path: path.join(__dirname, '.env')});
const api_key = process.env.API_KEY;

app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: true
  }));

app.use(cors());

const PORT = 4000;
var city;
console.log(api_key);


app.get('/', async (req, res) => {
	try {
		const response = await axios({
			url: `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=boston`,
			method: "get",
			headers: { 'content-type': 'application/json' },

		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})


app.get('/week', async (req, res) => {
	try {
		const response = await axios({
			url: `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=boston&days=7`,
			method: "get",
			headers: { 'content-type': 'application/json' },

		});
		res.status(200).json(response.data);
		console.log("server",response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})

app.post('/city', function (request, response) {
	var data = request.body;
	console.log("data to Server", data);
	 city = request.body.city;
	console.log("city value",request.body.city);
	app.get('/listdata', async (req, res) => {
		console.log("city inside listdata", city);
		try {
			const response = await axios({
				url: `http://api.weatherapi.com/v1/search.json?key=${api_key}&q=${city}`,
				method: "get",
			});
			res.status(200).json(response.data);
			console.log("server",response.data);
		} catch (err) {
			res.status(500).json({ message: err });
		}
	})
	

})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


