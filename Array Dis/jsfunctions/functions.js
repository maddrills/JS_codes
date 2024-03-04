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