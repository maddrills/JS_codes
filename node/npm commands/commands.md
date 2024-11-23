# code to set up express and ejs

### create a new project y here optionally skips the ask for project name etc

> npm init -y

## Install express

> npm I express

> touch index.js

### install ejs a templating engine using npm

> npm i ejs

### by default express tell all templating engines to check the views/.. folder to render content ... this behaviour can be changed

> touch views/home.ejs

### note in the app (index.js) you must do this

````md
```js
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
```
````

### Run the app

> nodemon index.js or node index.js
