"use strict";
const express = require("express");
const app = express();
// get the absolute path of the project folder
//get the path module
const path = require("path");

app.set("view engine", "ejs");
//join the path with the /views dir ... this is done so that we can exe this app form outside the project folder
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // sends back a rendered template from views/home.ejs
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("App is running and listening on port 30000");
});
