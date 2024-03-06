"use strict"

//a bit like abstraact classes in java
// when made there is no link to a parent prototype object 
// doesnt have a custructor nor can be initialised with a new keword


const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    // this is used to give fields to the object created by this prototype
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

}


const steven = Object.create(PersonProto);
console.log(steven); // {}


// now to actually give values
steven.init('steaven', 1998);
steven.calcAge(); //39


// can create other polimorfics of PersonProto with Object.create();








// non faking classes 
// object chaining

// now a child object of PersonProto
const StudentProtot = Object.create(PersonProto);

StudentProtot.init = function(firstName, birthYear, courses){
    PersonProto.init.call(this, firstName, birthYear);
    this.courses = courses;
}

StudentProtot.welcome = function(){
    console.log(`Hello My name is ${this.firstName}, ${this.birthYear}, ${this.courses}`);
}



//child of StudentProtot
const jay = Object.create(StudentProtot);

jay.init('Jay', 2010, 'Computer Science');
jay.welcome(); //Hello My name is Jay, 2010, Computer Science
jay.calcAge(); //27






