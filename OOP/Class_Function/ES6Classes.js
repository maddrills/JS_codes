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






// extends




class StudentCl extends PersonCl{

    //aparently the constructer is optional 
    //because of the default constructer that if it is extending hists the super also provided you give the supers argument count
    // but ill be using it for readability 
    constructor(firstName, year, subject){
        super(firstName, year);
        this.subject = subject;
    }

    //local method
    displaySubject(){
        console.log(`Student: ${this.firstName} born of ${this.year} took a subject ${this.subject}`);

    }


    //overiding method
    greet(){
        console.log(`Overide Hello, ${this.firstName}`);
    }

}



class StudentOld extends PersonCl{

    constructor(firstName, year, subject){
        super(firstName, year);
        this.subject = subject;
    }

}


console.log(new StudentOld("Old Man", 1998, 'phy').greet());
try{
    console.log(new StudentOld("Older Man", 1998, 'phy').displaySubject());
}
catch(error){console.log(error)}
//// TypeError: (intermediate value).displaySubject is not a function
    //at ES6Classes.js:101:58




const kevin = new StudentCl("Kevin", 1998, 'hesoyam')
console.log(kevin.greet());// Overide Hello, Kevin
console.log(kevin.displaySubject());//Student: Kevin born of undefined took a subject hesoyam







