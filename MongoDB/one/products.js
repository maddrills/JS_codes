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
//   qty: {
//     online: {
//       type: Number,
//       default: 0,
//     },
//     inStore: {
//       type: Number,
//       default: 0,
//     },
//   },
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // you can pass an array where maxLength[20, 'error message']
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

const bike = new Product({
  name: "Tire Pump",
  price: 19.5,
  categories: ["cycling", "racing"],
});
bike
  .save()
  .then((data) => {
    console.log("It WORKED!");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH  NO ERROR!");
    console.log(err);
  });

const Product = mongoose.model("Product", productSchema);

// when it comes to updating remember that it will not enforce rules unless you specify
Product.findOneAndUpdate(
  { name: "Tire Pump" },
  { price: 19.5 },
  { new: true, runValidators: true }
)
  .then((data) => {
    console.log("It WORKED!");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH  NO ERROR!");
    console.log(err);
  });
