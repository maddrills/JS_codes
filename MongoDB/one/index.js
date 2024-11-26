const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/moviesApp")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
