"use strict"

//parent class
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;


}

const EV = function(make, speed, charge){

    Car.call(this,make, speed);
    this.charge = charge;

}

//to impliment the inharitance 
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattry = function(chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){

    this.speed += 20;
    this.charge -= 1;

    console.log(`the car speed is : ${this.speed} The remaining battry is ${this.charge}`);

}


const tesla = new EV('tesla', 60, 90);

tesla.accelerate();
tesla.chargeBattry(100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();// the car speed is : 260 The remaining battry is 91

console.log("Hello");


console.log(tesla instanceof EV); // true
console.log(tesla instanceof Car); // true


// without EV.prototype = Object.create(Car.prototype);
Car.prototype = Object.create({});
console.log(tesla instanceof EV); // true
console.log(tesla instanceof Car); // false

