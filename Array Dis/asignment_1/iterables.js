"use strict"

//here is an ojects with data
const daysPened = {
    thu : {
        open : 12,
        close : 22,
    },
    fir : {
        open : 11,
        close : 23,
    },
    sat : {
        open : 0,
        close : 24,
    }    
}

// this is how you get an iterable from an object

const days = Object.keys(daysPened);

for(let day of days){
    console.log(day); 
}// thu fri sat


//what if we wated the property values
const values = Object.values(daysPened);
for(let property of values){
    console.log(property);
}//{open: 12, close: 22}
//{open: 11, close: 23}
//{open: 0, close: 24}



const rest1 = {
    rName : 'reovani auditore',
    numberOfgust : 10,
    crimes : 0,
};
console.log(Object.entries(rest1));//[Array(2), Array(2), Array(2)] it is an array of arrays
//0: (2) ['rName', 'reovani auditore']
//1: (2) ['numberOfgust', 10]
//2: (2) ['crimes', 0]


// if you want both key value pairs 
const keyValuePair = Object.entries(daysPened);
for(let[key, value] of keyValuePair){
    console.log(key, value);
}// thu {open: 12, close: 22}
// fir {open: 11, close: 23}
// sat {open: 0, close: 24}

//if you want to spread the oject incide the iterable
for(let[key, {open, close}] of keyValuePair){

    console.log(`key : ${key} open: ${open} close: ${close}`);
}//key : thu open: 12 close: 22
//48 key : fir open: 11 close: 23
//48 key : sat open: 0 close: 24