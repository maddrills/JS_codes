const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const {response} = require("express");


mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));



const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    res.render('home');
});

// app.get('/makecampground', async (req, res) =>{
//     const camp  = new Campground({
//        title: 'my Backyard',
//         description: 'Cheep camping',
//     });
//
//     await camp.save();
//
//     res.send(camp);
//
//
//     res.render('home');
// });

app.get('/campgrounds', async (req, res) =>{
     const campgrounds = await Campground.find({});

    res.render("campgrounds/index", {campgrounds});
});

//form post
app.get('/campgrounds/new', (req, res) =>{
    res.render('campgrounds/new');
})


//route to show more details for the clicked camp ground
app.get('/campgrounds/:id', async (req, res) =>{

    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show',{campground});
})

app.post('/campgrounds', async (req, res) =>{
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground.id}`);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})