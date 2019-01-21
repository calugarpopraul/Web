const config = require('./config/config')
const debug = require('debug')('app:startup')
const express = require('express')
const Joi = require('joi')
const bodyParser = require('body-parser')
const app = express()
const home = require('./routes/home')
const helmet = require('helmet')
const morgan = require('morgan')
const mysql = require('mysql');
const mongoose = require('mongoose');

//mysql server
// const con = mysql.createConnection({
//     host: config.host,
//     user: config.user,
//     password: config.password
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

mongoose.connect('mongodb://localhost');

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); 

app.use(express.static('public'));

app.use(helmet());

app.use('/', home);

//Configuration


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...')
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));