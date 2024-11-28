const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection open");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });

//enforce for sanity
// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//   },
// });

// default value
// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//   },
//   onSale: {
//     type: Boolean,
//     default: false,
//   },
// });

// max length
// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   price: {
//     type: Number,
//   },
//   onSale: {
//     type: Boolean,
//     default: false,
//   },
// });

// have array in mongo
// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   price: {
//     type: Number,
//   },
//   onSale: {
//     type: Boolean,
//     default: false,
//   },
//   //can save a array with categories : ['Cycling','Safety',...]
//   //categories: [String],
//   //could also
//   categories: {
//     type: [String],
//     default: ["cycling"],
//   },
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  //can save a array with categories : ['Cycling','Safety',...]
  //categories: [String],
  //could also
  categories: {
    type: [String],
    default: ["cycling"],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});
