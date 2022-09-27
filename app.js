const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const indexRouter = require("./routes/index")
const moviesRouter = require("./routes/movies")

const app = express()

// const { MongoClient } = require("mongodb")

const mongoose = require("mongoose")

const mongoDB =
  "mongodb+srv://fufako:lubieplacki1@cluster0.qtnxcjt.mongodb.net/sample_mflix?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

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

app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on port 3000")
})
module.exports = app
