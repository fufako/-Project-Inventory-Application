const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const indexRouter = require("./routes/index")
const moviesRouter = require("./routes/movies")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "/public")))

app.use("/", indexRouter)
app.use("/movies", moviesRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
module.exports = app
