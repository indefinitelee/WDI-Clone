//SET UP EXPRESS SERVER IN HERE!
const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./index.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

const port            = process.env.PORT || process.argv[2] || 3000;
app.listen(port, () => console.log('server is listening on port ', port));


app.get('/', indexRouter);

app.post('/tasks');

app.put('/tasks:id');

app.delete('/tasks/:id/edit');
