const mongoose = require("mongoose")

const Schema = mongoose.Schema

const detailMovieSchema = new Schema(
  {
    title: String,
    fullplot: String,
    poster: String,
    imdb: Object,
    year: Number,
    cast: Array,
    directors: Array,
  },
  {
    collection: "movies",
  }
)

module.exports = mongoose.model("detailMovie", detailMovieSchema)
