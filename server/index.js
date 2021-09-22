const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express()

app.use(bodyParser.json())

const PORT = 4000;

app.get('/', (req, res) => {
    console.log("here I am")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})