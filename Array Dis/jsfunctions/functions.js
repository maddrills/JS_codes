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
"use strict";

const testFunction = (firstMessage) => {
    return (message) => {
        console.log(`hello ${message} and the first message ${firstMessage}`);
    }
} 

testFunction("Mathew")("Hello");

const flight747 = {
    fname : 'lufthwafth',
    data : 42
}



// the bind function is a call back that is used to bind an object to a function having a this keyword
const incrementer = {
    number : 0,
    incr : function(){
        console.log(`number is up by ${++this.number}`);
    }
}


//click will inc the value
document.querySelector(".inc")
.addEventListener('click',() => console.log("click"));

//incrementer.incr is a standalone function and when called like this
// it has no ties to incrementer object 
// to over come this use bind which is a callback method 
// that ties the object with the function, function.bind(object)
document.querySelector(".inc")
.addEventListener('click',incrementer.incr.bind(incrementer));




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






// you can also use bing on no object this is used for partail arument 
const higherOrder = (firstName, age) => firstName = firstName +" " + age;
//null because the function doesnt have any this keyword
//but we use bind because we want a partial compleate 
//basicall providing one argument for higherOrder and later the second
const person = higherOrder.bind(null, "Mathew");
console.log(person()) // Mathew undefined
console.log(person("Francis")); // Mathew Francis



const higherOrder2 = (firstName, age) => {
    // sumtimes you may have to be explisit with the return when returning functions
    return (secondName) => {
        console.log(`The First Name ${firstName} age ${age} inner Function ${secondName}`);
    } 
}
const ale2 = higherOrder2.bind(null, "Violet");
ale2()();//he First Name Violet age undefined inner Function undefined
ale2(23)("Francis"); // The First Name Violet age 23 inner Function Francis

(() => console.log("welooooo"))();
