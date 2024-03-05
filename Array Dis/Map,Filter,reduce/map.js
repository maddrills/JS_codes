"use strict";

//transforming data in arrays
// MAP FILTER REDUCE


const transactions = [1000, 400, -200, 10000, -100, 8000, 500, 100, -400];

console.log(transactions);

// following args work with map
transactions.map((val,pos,full) => console.log(val));
transactions.map((val,pos,full) => console.log(pos));
transactions.map((val,pos,full) => console.log(full));
console.log('-'.repeat(30))



const rupee = 75

//returns a brand new modified array
const movementusd = transactions.map((val,pos,full) => val * rupee); //[75000, 30000, -15000, 750000, -7500, 600000, 37500, 7500, -30000]
console.log(movementusd);


// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  


  //say we want to take the initials of an owner in the above data
  //remember split returns an array
  //map returns a new array
  const initialsOfaccount3 = account3.owner
  .split(' ')
  .map((val, pos, fullArray) => val[0].toUpperCase());

  console.log(initialsOfaccount3); //['S', 'T', 'W']
  console.log(initialsOfaccount3.join('')); //STW
  console.log(...initialsOfaccount3); //S T W








  // accounts array hold all the objects in an array
  const accounts = [account1, account2, account3, account4];


  // this function will take an accounts array thenabreviate all the acount holders first name

  const abreveationArray = function(acc){
    //rember forEach doesnt return a new array
    acc.forEach((account, pos, fullArray) => {
        //here we are adding a new field to the object as a returning new array
        account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map((val, pos, fullArray) => val[0])
        .join('');
    });
  }


abreveationArray(accounts);
console.log(account4);









