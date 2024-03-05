"use strict";

// constructer functions are used for oop  and are initialised using the new keyword


const Person = function(firstName, birthYear){
    console.log(this);//{}
    this.firstName = firstName;
    this.birthYear = birthYear;

    console.log(this); // {} if the above two wasni there else its {firstName: 'Jones', birthYear: 1991} 
    //after that this  will be returned 

    //below is bad practice as it decreses perfirmace
    //reason for every new instance varaible asigned to fuction will take up memory
    // const calcAge = function(age){
    //     console.log(age > 18 ? 'welcome':'your to young');

    // }
    //instead do the bellow
}
//outside the object
//rember the prototype doesent belong to person it belongs to its instences
Person.prototype.calcAge = function(limit){

    console.log(this.birthYear + limit < 2024 ? 'welcome':'your to young');
};
 
const jones = new Person('Jones', 1991);
console.log(jones); //Person {firstName: 'Jones', birthYear: 1991}

// first a new empty object is created 
// fuction is called and this is pointed to the empty object this ={}
// empty object {} linked to prototype  object.__proto__ === object.prototype
// function is automatically returned {};


const jack = new Person('jack', 2000);
console.log(jack);

console.log(jones instanceof Person); //true



//prototype
//check line 23 
//age limit as paremetr age is part of the object check Person object
jones.calcAge(18);



// you can also add properties
Person.prototype.species = 'homosapian';

console.log(jones.__proto__);// this basicall is the same as Person.prototype but using jones.prototype wont work {species: 'homosapian', calcAge: ƒ}
console.log(jones); //similer to above  Person {firstName: 'Jones', birthYear: 1991}
console.log(jones.species); //homosapian



//however the species field isent directly incide the object Person but instead only has access to it by prototyping because it is in the prototype function of Person 
// eg

console.log(jones.hasOwnProperty('firstName')); //true
console.log(jones.hasOwnProperty('species')); //false








































