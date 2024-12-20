const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

//ued for put and patch
const methodOverride = require('method-override');
const {response} = require("express");


mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));



const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

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

app.get('/campgrounds/:id/edit', async (req, res) =>{

    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit',{campground});

})

app.put('/campgrounds/:id', async (req, res) =>{
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground}, );
    res.redirect(`/campgrounds/${campground.id}`);
});


app.delete('/campgrounds/:id', async (req, res) =>{
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})