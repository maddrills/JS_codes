"use strict";

const oners = ['Jones', 'Zoel', 'Alfa', 'Mathes'];

// here the array looks at its elements in this case a string
// and compares the next element to it 
console.log(oners.sort()); //(4) ['Alfa', 'Jones', 'Mathes', 'Zoel']


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// here the array looks at its elements in this case a string
//thats why the op is weard
console.log(movements.sort()); //(8) [-130, -400, -650, 1300, 200, 3000, 450, 70]

// a is current value and b is the next value
console.log(movements.sort((a, b) => a - b));//  [-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(movements.sort((a, b) => b - a));//(8) [3000, 1300, 450, 200, 70, -130, -400, -650]





