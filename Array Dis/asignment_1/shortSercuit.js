"use strict"

console.log(3 || "hello");
console.log('' || "Jones");
console.log(true || 0);
console.log(false || 0);
// 3
// Jones
// true
// 0

//cycles till it hits a true value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// Hello

const testObject = {
    myName : 'Mat',
    age : 25,
    rollNumber : 1003541,
}

console.log(testObject?.myName);
console.log(testObject?.ddlx);
// Mat
// undefined

testObject.ddlx = 'wello';
console.log(testObject?.ddlx);
// wello

console.log('------AND------');
//here it will stop till it reaches a false value and return that 
// its bascally a walk 
console.log('Hello' && 23 && null && 'Jones');
//null

//nullish if undefined or null but not o or '' then the rhs will be evaluated else LHS
// .gggt is non existent
console.log(testObject.gggt ?? 10);// 10
console.log(testObject.ddlx ?? 10);// wello


const rest1 = {
    rName : 'reovani auditore',
    numberOfgust : 10,
    crimes : 0,
};


const rest2 = {
    rName : 'Atzio auditore de faranze',
    age : 23,
}

//normal short serquting
rest1.numberOfgust = rest1.numberOfgust || 30; // 10 because rest1.numberOfgust does exist
rest1.numberOfgust ||= 30; // can also be writen as this

rest1.age ||= 30 // 30 becase rest1.age is not an object field

//now if you encounter a false is value but you want to evaluate for null or undefined use ?? insted of || as || evaluates falseish and truish values
rest1.crimes ??= 30; // op is 0 as the field does exist else it would have bin 30
rest1.crimes ||= 30 // will be 30 as the or operator will detect a 0 and move till it finds a trueish value









