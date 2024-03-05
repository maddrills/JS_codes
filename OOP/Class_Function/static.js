"use strict"

// in prototype function

const Person = function(firstName, age){

    this.firstName = firstName;
    this.age = age;

    // static methods declared here 
}

//prototype function 
Person.prototype.ageIn50years = function(){
    return this.age + 50;
}

//static function
Person.displayNameInUpper = function(staticName){
    console.log(staticName.toUpperCase());
    console.log("incide static function");
}



const jack = new Person('jack', 30);

//static call using person will be an error
try{
    jack.displayNameInUpper();//Uncaught TypeError: jack.displayNameInUpper is not a function
    //Its a static method
}catch(error){
    console.log("Its a static method");
}

console.log(jack.ageIn50years());//80

Person.displayNameInUpper("Mat");// MAT statically called









// using class sintactic sugar 


class People{

    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
        console.log(this);
    }

    //normal function
    //on the prortotye
    calcAge(){
        return this.age * 4;
    }


    //static method
    static thisIsStatic(numberOfTimes){
        for(let i = 0; i < numberOfTimes; i++){
            console.log("in static");
        }
    }

}


console.log(new People('mat', 25).calcAge());//100

People.thisIsStatic(3); //3 static






