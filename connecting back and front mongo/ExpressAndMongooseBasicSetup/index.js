const express = require("express");
const app = express();
const path = require("path");

const Product = require("./models/product");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
  res.send("WOOF!");
});

//show all products
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  //   res.send("ALL PRODUCTS WILL BE HERE!");
  //send to view
  res.render("products/index", { products });
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
