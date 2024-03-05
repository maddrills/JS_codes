"use strict"


const Car = function(model, speed){

    this.model = model;
    this.speed = speed;
}

//adding functions to the car prototype function
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(this.speed);
}


//two cars BMW and Mercedes
const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);


console.log(bmw);
console.log(merc);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();









