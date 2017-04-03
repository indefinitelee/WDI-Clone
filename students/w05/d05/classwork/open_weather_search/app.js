require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home'); // equivalent to router object in home.js
const weatherRoute = require('./routes/weather');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(logger('dev'));

// app.get('/', (req, res) => {
//   res.render('index');
// }); can delete because we added const homeRoute

app.use('/', homeRoute);
app.use('/weather', weatherRoute);

app.listen(port, () => console.log('server is listening on port ', port));
