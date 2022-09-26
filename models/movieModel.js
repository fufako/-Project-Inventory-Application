const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MovieSchema = new Schema(
  {
    title: String,
    plot: String,
    poster: String,
    imdb: Object,
    year: Number,
  },
  {
    collection: "movies",
  }
)
MovieSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/movies/${this._id}`
})
module.exports = mongoose.model("Movie", MovieSchema)
