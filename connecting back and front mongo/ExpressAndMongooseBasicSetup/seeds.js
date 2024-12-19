const Product = require("./models/product");

//seeding your data from  db just for dev
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log("Error");
//   });

const seedProducts = [
  { name: "Fairy Eggplant", price: 1.0, category: "vegetable" },
  { name: "Organic Goddess", price: 2.99, category: "vegetable" },
  { name: "Mathew Fresh", price: 1.4, category: "vegetable" },
  { name: "Violet don", price: 16.2, category: "vegetable" },
  { name: "joseph kurilal", price: 3.14, category: "vegetable" },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
