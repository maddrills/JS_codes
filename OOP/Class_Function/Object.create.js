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






