const Movie = require("../models/movieModel")
const async = require("async")
const { startSession } = require("../models/movieModel")

let seenMovies = []
let seenIds = []

exports.movies = function (req, res, next) {
  seenMovies = []
  seenIds = []
  Movie.find()
    .limit(10)
    .exec(function (err, list_movies) {
      if (err) {
        return next(err)
      }

      //Successful, so render

      list_movies.forEach((movie) => {
        seenMovies.push(movie)
        seenIds.push(movie._id)
      })
      res.render("movies", {
        movies: seenMovies,
      })

      console.log(seenIds)
    })
}

exports.moreMovies = function (req, res, next) {
  Movie.find({ _id: { $nin: seenIds } })
    .limit(10)
    .exec(function (err, list_movies) {
      if (err) {
        return next(err)
      }
      //Successful, so render

      list_movies.forEach((movie) => {
        seenMovies.push(movie)
        seenIds.push(movie._id)
      })
      res.render("movies", {
        movies: seenMovies,
      })

      console.log(seenIds)
    })
}
