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

> const express = require('express');
> const app = express();

> // below will inject ejs dependency
> app.set('view engine', 'ejs');

> // a basic route to render template js or HTML or (js and HTML) code
> app.get('/',()=>{
> res.render('home.ejs');
> })

> app.listen(3000, ()=>{
> console.log("listen on port 3000");
> })

### Run the app

> nodemon index.js or node index.js
