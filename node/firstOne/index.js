// require express
const express = require("express");

//execute express and store in variable

const app = express();

//anytime a request is made this callback will run regardless if it a get or a post
// app.use(() => {
//   console.log("We got a new request");
// });
//all 8080 request with get and post
// app.use((req, res) => {
//   console.log("We got a new request");
//   res.send("Woooow we got a response");
// });

//home route
app.get("/", (req, res) => {
  res.send("You are at the home page");
});

// get request
app.get("/cats", (req, res) => {
  res.send("Shaten butain");
});

//post
app.post("/pstCat", (req, res) => {
  res.send("meeeuuu post");
});

//now create a port to listen for incoming requests

app.listen(8080, () => {
  console.log("Listing on port 8080!");
});

//genaric response has to be the last requeat last resort
app.get("*", (req, res) => {
  res.send("I dont know this path");
});
