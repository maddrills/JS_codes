"use strict";

//inharitance between classes

// here we are trying to accomplish inharitace
// Student is a Person relationship 

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};


Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    //we shoud avoid the below as we want the do not repeat yourself principle 
    // this.firstName = firstName;
    // this.birthYear = birthYear;

    //The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.
    //instead
    //acts kinda like super() in java
    Person.call(this,firstName,birthYear);
    this.course = course;
}

//reason we declared this here is because if bellow the introduce function that function will be overwriten
//because at this point student.object is empty {} to which we add introduce
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};


const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); // which is in Person class


console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true

// switching the constructer of Student to be that of student insted of the parent which happens by default

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course)




