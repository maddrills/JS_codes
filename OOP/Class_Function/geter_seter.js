"use strict"

const account = {
    owner : 'Jones',
    movement :[200,530,120,300],

    //getter 
    //its like a property that why when calling it you dont have to use ()
    get latest(){
        return this.movement.slice(-1).pop();
    },

    //setter noice we can use the same name as get 
    set latest(movement){
        this.movement.push(movement);
    }
}

//getter 
console.log(account.latest);//300
//setter use
account.latest = 50;
console.log(account.latest); // 50





// in termas of classes ES6 getter and setter properties are declared on the prototype

class PersonCl{
    // its actually a method of the class
    constructor(completeName, birthYear){
        this.completeName = completeName;
        this.birthYear = birthYear;
    }


    //methods yes we can write them incide

    //below method will be added to prototype
    //note this will not be on the object it will be on the classes prototype 
    //like i remember behind the seens this is actually PersonCl.prototype.calcAge = {};
    calcAge() {
        console.log(`The age is ${2037 - this.birthYear}`);
    }

    // these are properties and dont have to be called with () when used 
    // property is declared on the prototype object
    get age(){
        return this.birthYear;
    }

    set age(birthYear){
        this.birthYear = birthYear;
    }
    //seters can be used to inflict a check
    //here seter has the same name as the property name to prevent an infinit loop use _ when setting
    //used to create constructer check 
    //in othere words the constructer uses the setter when seting its value
    set completeName(name){
        if(name.includes(' ')) this._completeName = name;// remeber it creates a new variable _complaint
        //if(name.includes(' ')) this.completeName = name; if you dont want the counstructer to be effected 
        //if(name.includes(' ')) thist completeName = name;t completeName will create a new cariable / property on the class which can be used speratly
        else  alert(`${name} is not a full name`);
    }

    get completeName(){
        return this._completeName;
    }
}



//this will throw an elert that you need a full name because of the setter check
const james = new PersonCl('James', 1978);
console.log(james.completeName); // undefined

//get the age
console.log(james.age);// 1978
//set the age
james.age = 1998;
console.log(james.age);// 1998


// full name check using setter 
james.completeName = 'Heler';

//if you try a name that is full
james.completeName = 'Hellen Keller';
console.log(james.completeName); //Hellen Keller


const walter = new PersonCl('Walter White', 30); // will work
console.log(walter.completeName); // Walter White

//get the age
console.log(walter.age);// 30













//useless code but i just put it there
try{
    
}catch(err){
    console.log(err);
}finally{
    console.log("try catch end");
}








