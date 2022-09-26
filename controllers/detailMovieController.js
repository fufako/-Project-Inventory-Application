const detailMovie = require("../models/detailMovieModel")
const async = require("async")

exports.detailMovie = function (req, res, next) {
  detailMovie.findById(req.params.id).exec((err, movie) => {
    if (err) {
      return next(err)
    }
    if (movie === null) {
      const err = new Error("Movie not found")
      err.status = 404
      res.send(err)
    }
    res.render("detail_movie", { movie })
  })
}
