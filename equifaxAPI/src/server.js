const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


//Imports route
const UserRoute = require('./routes/user.route');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', UserRoute);


module.exports = app;