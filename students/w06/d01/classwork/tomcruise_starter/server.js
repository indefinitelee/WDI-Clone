/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* set up the Tom Cruise Movie  DB */

const express        = require('express');
const logger         = require('morgan');
const dbService      = require('./model/cruiseDB');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const app            = express();
const PORT           = process.argv[2] || process.env.PORT || 3000;

// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static('./public'));

// set default templating engine
app.set('view engine', 'ejs');

// middleware to receive form inputs
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for method override, a bit of a dirty way to delete iemts
app.use(methodOverride('_method'));

app.listen(PORT, () => console.warn('server up and running on port ', PORT));

const filterQS = (req, res, next) => {
  const filterObj = {};
  const qs = req.query;

  if ('id' in qs) filterObj.imdbID = qs.id;
  if ('y' in qs) filterObj.Year = qs.y;

  // \b is word boundary
  if ('t' in qs) filterObj.Title = new RegExp(`\\b${qs.t}`, 'i');
  if ('d' in qs) filterObj.Director = new RegExp(`\\b${qs.d}`, 'i');

  // todo validate data

  // re structured the values into a new obj
  res.filteredQueryParams = filterObj;
  return next();
};

/* ------------------------ */

app.get('/', dbService.getFavorite, filterQS, dbService.searchMovies, (req, res) => {
  res.render('index', {
    favorites: res.favorites || [],
    movies: res.filteredMovies,
  });
});

// route that shows us the edit view
app.get('/edit/:id', (req, res) => {
  res.render('edit', { movie: res.movie });
});

app.put('/:id', dbService.editMovie, (req, res) => {

})
// new post form route to save to favorites collection  - requires another function on cruise dbs
app.post('/favorites', dbService.saveFavoriteMovie, (req, res) => {
  res.redirect('/');
});

app.delete('/favorites/:id', dbService.deleteFavoriteMovie, (req, res) => {
  res.redirect('/');
});



