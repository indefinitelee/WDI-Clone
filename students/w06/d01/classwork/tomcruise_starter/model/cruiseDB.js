const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

// do your db stuff here
const dbConnection = 'mongodb://localhost:27017/cruisemovies';

function searchMovies(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('movies')
      .find(res.filteredQueryParams)
      .sort({ Year: -1, Title: 1 })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.filteredMovies = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

// middleware functions for save, get, and delete.
function saveFavoriteMovie(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .insert(req.body.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);

        res.saved = result;
        db.close();
        return next();
      });

    return false;
  });
  return false;
}

function getFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({})
      .sort({ Title: 1 })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.favorites = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

function deleteFavoriteMovie(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
      if (removeErr) return next(removeError);

      res.removed = doc;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

function getMovie(req, res, next) {
   MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('movies')
    .findOne({ _id: ObjectID(req.params.id) }, (findErr, movie) => {
      if (findErr)
    })
}

module.exports = {
  searchMovies,
  saveFavoriteMovie,
  getFavorite,
  deleteFavoriteMovie,
  editMovie,
  getMovie,
};
