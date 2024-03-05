"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//find doesnt return a new array but the first value found 
//finds the first withdrawl
const findTheFirstWithdrawel = movements.find((val, pos, full) => val = 200);
console.log(findTheFirstWithdrawel);



//declarations
movements.find((val, pos, full) => console.log(val));
movements.find((val, pos, full) => console.log(pos));
movements.find((val, pos, full) => console.log(full));


