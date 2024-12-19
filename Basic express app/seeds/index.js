const mongoose = require('mongoose');
const Campground = require('.././models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const seedDB = async () =>{
    await Campground.deleteMany({});
    // const c = new Campground({title: 'purple fields' })
    // await c.save();

    const sample = array => array[Math.floor(Math.random() * array.length)]

    for(let i =0; i < 50; i++){
        const random100 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random100].city}, ${cities[random100].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,

        })

        await camp.save();
    }
}

seedDB();