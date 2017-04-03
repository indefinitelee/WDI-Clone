const express = require('express'); // requiring the express module and saving it in a constant
const logger = require('morgan');

const app = express(); //this constant is our express object - saves an instance of the express server
const port = process.env.PORT || 3000; // environmental variable since process.env.PORT is not defined, will use 3000

app.set('view engine', 'ejs'); // tells express app to set view enging to ejs, embedded javascript templace for server-side rendering
app.set('views', './views'); //views is a reserved word, first is setting what we are grabbing, second is where they are located


app.use(logger('dev')); //middleware takes the use method middleware happens between the request and response

app.listen(port, () => console.log('server is listening on port ', port)); //what port should the app listen on?

app.get('/', (req, res) => { //req, and res are arbitrary names but represent the request and response
 const links = ['/about', '/contact'];
 res.render('index', {
  message: 'this is the homepage',
  links: links
 });
});

app.get('/about', (req, res) => {
  const links = ['/', '/contact'];
  res.render('index', {
    message: 'About Aboot Abut A butt',
    links: links
  });
 });

app.get('/contact', (req, res) => {
  const links = ['/', '/about'];
  res.render('index', {
    message: 'Contact Page',
    links: links
  });
});
