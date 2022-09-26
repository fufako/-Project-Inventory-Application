const express = require("express")
const router = express.Router()
const movies_controller = require("../controllers/moviesController")
const detail_movies_controller = require("../controllers/detailMovieController")

/* GET home page. */
router.get("/", movies_controller.movies)

router.get("/:id", detail_movies_controller.detailMovie)

router.post("/", movies_controller.moreMovies)

module.exports = router
