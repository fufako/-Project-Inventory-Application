const mongoose = require("mongoose")

const Schema = mongoose.Schema
const MovieSchema = new Schema({
  title: String,
  plot: String,
  poster: String,
  imdb: Object,
  year: Number,
})

module.exports = mongoose.model("Movie", MovieSchema)
