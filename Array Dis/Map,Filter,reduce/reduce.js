"use strict"

//for reduce
//startAccumulatingFrom = 0;
//array.reduce((accumulater, currentElement, pos, arr) => {
//     remember to return because the return is used by the next itration accumulater
//     return accumulater + currentElement;
//}, startAccumulatingFrom);

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


  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


  const balance = movements.reduce((acc,val,pos,full) => {

    return acc + val;
  }, 0);

  console.log(balance);// 3840  which is the sum of the whole array starting from 0