"use strict";

//they work exactly like prototype functions just with alot of ayntactic sugar 
//class declarations are not hoisted which means we can use them before they are declared in our code
//where as function class declarations are hoisted in the execution context and can be use before the code reaches the declration paart
//class are first-class citizens so they can be passed around 
//class works only with strict


//class expression
const PersonCll = class{

}


//prefered 
//class declaration
//the bellow behind the seens is const PersonCl = function(firstname, birthYear){} but bellow uses syntactic sugar 
class PersonCl{

    // its actually a method of the class
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }


    //methods yes we can write them incide

    //below method will be added to prototype
    //note this will not be on the object it will be on the classes prototype 
    //like i remember behind the seens this is actually PersonCl.prototype.calcAge = {};
    calcAge() {
        console.log(`The age is ${2037 - this.birthYear}`);
    }
}


//we can also make a prototype function outside
PersonCl.prototype.greet = function(){
    console.log(`Hello, ${this.firstName}`);
}



const jessica = new PersonCl('jissica', 1996)
jessica.calcAge(); //The age is 41
jessica.greet(); //Hello, jissica

// we can check that jessica's functions are actally a prototype function
console.log(jessica.__proto__ === PersonCl.prototype);//true










