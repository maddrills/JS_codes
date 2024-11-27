const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// the table name has to be capitalized and singular eg 'Movie'
const Movie = mongoose.model("Movie", movieSchema);

//now make an instance of movie class
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: 8.2,
});

Movie.insertMany([
  { title: "Amelie", year: 1986, score: 9.2, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1986, score: 9.2, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 9.2, rating: "R" },
  { title: "Moonrise Kingdom", year: 1986, score: 9.2, rating: "PG-13" },
]).then((data) => {
  console.log("IT WORKED !");
  console.log(data);
});
