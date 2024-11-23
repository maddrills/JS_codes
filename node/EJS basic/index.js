"use strict";
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // sends back a rendered template from views/home.ejs
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("App is running and listening on port 30000");
});
