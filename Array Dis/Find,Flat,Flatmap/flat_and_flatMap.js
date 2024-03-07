"use strict";

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

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr); //(4) [Array(3), Array(3), 7, 8]
console.log(arr.flat()); //(8) [1, 2, 3, 4, 5, 6, 7, 8]


const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep);// [Array(2), Array(2), 7, 8]
// [Array(2), 3]
//[1, 2]
console.log(arrDeep.flat()); //[Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); //(8) [1, 2, 3, 4, 5, 6, 7, 8] // flaten 2 levels deep





// accounts array hold all the objects in an array
const accounts = [account1, account2, account3, account4];

const transactionArray = accounts.map((val, pos, fullArray) =>{
    //returns all the ransactions in a 2 level deep array
    return val.movements;
});

//FLAT 2
console.log(transactionArray);// (4) [Array(8), Array(8), Array(8), Array(5)]
console.log(transactionArray.flat(2)); //(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

const flatenedArray = transactionArray.flat(2)
.reduce((acumulater, val, pos, full) => {
    //sums up the flatened array 
    return acumulater + val;
}, 0)


console.log(flatenedArray); //17840






// FLAT MAP





//const accounts = [account1, account2, account3, account4];

const flatendMapArray = accounts
.flatMap((val, pos, full) =>{
    return val.movements
}).reduce((accumulater, val, pos, fullArray) => {
    return val + accumulater;
},0);

console.log(flatendMapArray);// 17840


const flatendMapArray2 = accounts
.map((val, pos, full) =>{
    return val.movements
});

console.log(flatendMapArray2);// [Array(8), Array(8), Array(8), Array(5)]





