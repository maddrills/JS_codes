"use strict"





//set






//set is just a colection of only unique values
//a set is iterable and holds only unique value
//below is a set that jolds an array of values
// has a .size
const orderedSet = new Set([
    'Pasta',
    'Somosa',
    'Candy',
    'Lemon',
    'Pasta',
    'Pasta',
]);


console.log(orderedSet);
// op Set(4) {'Pasta', 'Somosa', 'Candy', 'Lemon'}

console.log(..."hello world");//its an iterable thats why we can use a spread operation
// so we can use it for sets to 
console.log(new Set("hello world"));//Set(8) {'h', 'e', 'l', 'o', ' ', …}

console.log(`number of dishes ${orderedSet.size}`);// 4

//check if something is in the set
console.log(orderedSet.has('resoto')); // false
console.log(orderedSet.has('Pasta')); // true

// you can add to a set 

orderedSet.add("brownee");
orderedSet.add("brownee");
console.log(orderedSet); //Set(5) {'Pasta', 'Somosa', 'Candy', 'Lemon', 'brownee'}

//remove an ele from set
orderedSet.delete("brownee");
console.log(orderedSet);// Set(4) {'Pasta', 'Somosa', 'Candy', 'Lemon'}

// you cant use a set like an array [0] cant do that because a set is uique values and unorderd
// this will clear the whol;e set
// orderedSet.clear();

// now you can iterate over a set also using a for loop 
for(let foodItem of orderedSet){

    console.log(foodItem);
}//Pasta
// Somosa
// Candy
// Lemon

orderedSet.forEach((ele,pos,full) => {
    //now because its a set pos is redundent
    console.log(`elsement : ${ele} full array ${full}`);
})//elsement : Pasta full array [object Set]
// elsement : Somosa full array [object Set]
// elsement : Candy full array [object Set]
// elsement : Lemon full array [object Set]

//we can spread the values of a set 
console.log(...orderedSet); // Pasta Somosa Candy Lemon
// below will conver it into an array
console.log([...orderedSet]) // (4) ['Pasta', 'Somosa', 'Candy', 'Lemon']

//size of the set
console.log(orderedSet.size);//4








//maps








// its a key value type
// what the diffrence between an object and a map a map can have a key of any type 
// an object has a key of only one type 
// map can also have a key of mixed data type
// map has a builder patern when using the map.set(key, value)
// if you use arrays as key it wount work inorder to do that you woud need to save its has code ed aar = [1, 2] if that is the key then use aar as rest.get(aar);

const restrontMap = new Map();

restrontMap.set('day', 'today is sunday');

restrontMap.set(1, 'first in line').set(2, 'second in line');

console.log(restrontMap); // Map(3) {'day' => 'today is sunday', 1 => 'first in line', 2 => 'second in line'}

//search by key
console.log(restrontMap.get(1)); //first in line
console.log(restrontMap.get('day')); //today is sunday

//check if a map has a key
console.log(restrontMap.has(2)); //true

// you can delete by position also
console.log(restrontMap); //Map(3) {'day' => 'today is sunday', 1 => 'first in line', 2 => 'second in line'}
restrontMap.delete(2); // deleting by key 2
console.log(restrontMap); //Map(2) {'day' => 'today is sunday', 1 => 'first in line'}
restrontMap.set(47, 'second in line');

// you can also delet by key
console.log(restrontMap);
restrontMap.delete(47);
console.log(restrontMap);
restrontMap.delete('day');
console.log(restrontMap); //Map(1) {1 => 'first in line'}

//size
console.log(restrontMap.size); // 3



//iterables in map



// you can also create a map like this
//shoud be formated as an array of arrays
 const testMap2 = new Map(
    [
        ['mat','grate'],
        [3,'three'],
        [25,'twenty five']
    ]
 );

 console.log(testMap2); //Map(3) {'mat' => 'grate', 3 => 'three', 25 => 'twenty five'}

 //we can iterrate over a map just like you woud for an object 
 console.log(testMap2.entries()); //MapIterator {'mat' => 'grate', 3 => 'three', 25 => 'twenty five'}

 // iterating with for loop
 for(let [key, value] of testMap2){
    console.log(key, value);
 }//mat grate
 //3 'three'
//25 'twenty five'



// Object to Map
const rest1 = {
    rName : 'reovani auditore',
    numberOfgust : 10,
    crimes : 0,
};

console.log(Object.entries(rest1));//[Array(2), Array(2), Array(2)] it is an array of arrays
//0: (2) ['rName', 'reovani auditore']
//1: (2) ['numberOfgust', 10]
//2: (2) ['crimes', 0]

const objectMapCoverted = new Map(Object.entries(rest1)); // rest1 is an object

console.log(objectMapCoverted);// Map(3) {'rName' => 'reovani auditore', 'numberOfgust' => 10, 'crimes' => 0}

console.log([...objectMapCoverted]); //[Array(2), Array(2), Array(2)] you will get back an array of arrays
//0: (2) ['rName', 'reovani auditore']
//1: (2) ['numberOfgust', 10]
//2: (2) ['crimes', 0]

console.log(objectMapCoverted.entries());// MapIterator {'rName' => 'reovani auditore', 'numberOfgust' => 10, 'crimes' => 0}
console.log(objectMapCoverted.keys()); //MapIterator {'rName', 'numberOfgust', 'crimes'}
console.log(objectMapCoverted.values()) //MapIterator {'reovani auditore', 10, 0}


objectMapCoverted.forEach((val, key, full) =>{

    console.log(val); // reovani auditore
    console.log(key); // rName
})



