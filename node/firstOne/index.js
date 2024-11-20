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

//sub routes path variables
app.get("/dad/:joke", (req, res) => {
  //the url params a deconstructed and assigned to variable joke
  const { joke } = req.params;

  res.send(`<h1> the joker is ${joke}</h1>`);
});

//sub routes path variables but with more than two slashes
app.get("/dad/:joke/:pj", (req, res) => {
  //the url params a deconstructed and assigned to variable joke
  const { joke, pj } = req.params;

  res.send(`<h1> the joker is ${joke}</h1><br><h2>and the pj is ${pj}</h2>`);
});

//query string
app.get("/dad", (req, res) => {
  // gets the variable after eg ?q= in this example below the url must have http://localhost:8080/dad?age=40&pet=cat
  const { age, pet } = req.query;

  res.send(`<h1> age is ${age}, ${pet}</h1>`);
});

//genaric response has to be the last requeat last resort
app.get("*", (req, res) => {
  res.send("I dont know this path");
});
