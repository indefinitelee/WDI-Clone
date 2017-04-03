const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => console.log('server is listening on port ', port));

app.get('/', (req, res) => {
 res.send('here i am baby');
 });
