const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// console.log(process.env.API_KEY)
const axios = require('axios');
const address = process.argv[2]; // query the place you want to know the weather from
const app = express()
const cors = require('cors');
// const { response } = require('express');
// let request = require('request');
const apiRouter = require('./routes/handler.js')
//app.use(express.bodyParser());
//app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser());

app.use(cors());

const PORT = 4000;
var city;

// app.use("/", apiRouter);

if(!address) {
    console.log('Please enter the name of the city')
}
app.get('/', async (req, res) => {
	try {
		const response = await axios({
			url: `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=boston`,
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})


app.get('/week', async (req, res) => {
	try {
		const response = await axios({
			url: `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=boston&days=7`,
			method: "get",
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
				url: `http://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${city}`,
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


