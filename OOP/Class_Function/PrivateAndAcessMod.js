"use strict"

// # means private

class Person{
    static counter = 0;

    //private transaction
    #transactions = [];

    //constructer private field
    #salary;

    constructor(name, age, salary){
        this.name = name;
        this.age = age;

        //if you want salary to be private do this 
        this.#salary = salary;
    }


    // make geters and setters for access modification 



    add(latestAmount){
        this.#transactions.push(latestAmount);
    }

    withdraw(latestAmount){
        this.#transactions.push(-latestAmount);
    }


    getSalary(){
       return this.#salary;
    }

    displaySayary(){
        this.#TransaactionIterator();
    }

    //private constructer 
    #TransaactionIterator(){
        this.#transactions.forEach((val, pos, array) => console.log(val));
    }

    static hello(){
        console.log('say hello');
    }
}



const jaki = new Person('Jacky Brown', 40, 30000);

//console.log(jaki.#salary); //error
console.log(jaki.getSalary()); //30000


jaki.add(500);
jaki.add(200);
jaki.add(700);
jaki.add(1200);
jaki.withdraw(120);


jaki.displaySayary();


try{
    jaki.TransaactionIterator();

}catch(error){
    console.log(error);//TypeError: jaki.TransaactionIterator is not a function at PrivateAndAcessMod.js:71:10
}















