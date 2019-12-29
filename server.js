const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

// Setting up the cors config
app.use(cors());

// Tell the app to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import Routes
const api = require('./server/routes/api');

//Use Middleware
app.use('/api',api);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
  console.log('Connected to DB!');
});

//listening to Server
app.listen(3000);
