"use strict"

const bookings = [];


const createBooking = function(flightNum, numPassengers, price){

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}


createBooking('lh123'); //{flightNum: 'lh123', numPassengers: undefined, price: undefined}

// pram oder important for  price = 199 * numPassengers to work
const createBooking1 = function(flightNum = "std", numPassengers = 1, price = 199 * numPassengers){

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}


createBooking1('lh123'); //{flightNum: 'lh123', numPassengers: 1, price: 199}

// if you want to skip a parm make it undefined 
createBooking1('NH71', undefined, 500);// {flightNum: 'NH71', numPassengers: 1, price: 500}




//130. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jones = {
    name : 'jonas Schmedtman',
    passport : 246742893,
}

const checkIn = function(flightNum, passanger){

    flightNum = 'LH99'; // this will have no effect because its a premative datatype and wont effect flight 
    passanger.name = 'Mr.' + passanger.name; // this will because passenger is a non premitive datatype

    console.log(flightNum); //LH99
    console.log(passanger.name); // Mr.jonas Schmedtman
}

checkIn(flight, jones);

console.log(flight); //LH234
console.log(jones.name); //Mr.jonas Schmedtman








