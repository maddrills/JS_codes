// spread an array' unlocking individual elements
const aar = [7, 8, 9];
//below is the old way
const badNewArray = [1, 2, aar[0], aar[1], aar[2]];
console.log(badNewArray);
//op
// (5) [1, 2, 7, 8, 9]
// 0:1
// 1:2
// 2:7
// 3:8
// 4:9




const arr = [1,2,aar];
console.log(arr);
// (3) [1, 2, Array(3)]
// 0:1
// 1:2
// 2:Array(3)
//  0:7
//  1:8
//  2:9
//length:3


const newArr = [1, 2, ...aar];
console.log(newArr);
// (5) [1, 2, 7, 8, 9]
// 0:1
// 1:2
// 2:7
// 3:8
// 4:9
//the above is basically
//const newArr = [1, 2, 7, 8, 9];

//Iterables are arrays, strings, maps, sets. Not ojects

const str = "Walooo achi";
console.log(...str);
//W a l o o o   a c h i
const wordArray = [...str];
console.log(wordArray);
// (11) ['W', 'a', 'l', 'o', 'o', 'o', ' ', 'a', 'c', 'h', 'i']

const str1 = "Walooo achi";
console.log(...str1[1]);
//a
const wordArray1 = [...str1[1]];
console.log(wordArray1);
// (1) ['a']

//another way of array asignment
const [a, b, ...othere] = [1,2,3,4,5,6];
console.log(a, b,othere);
//output
//1 2 (4) [3, 4, 5, 6]

//rest sintax the opposite of spread when declared in a function parameter it conversts a range of values into an array
const add = function (...numbers){

    //numbers is now an array
    console.log(numbers);
}

add(2, 3);
add(5, 3, 7, 2);
add(3, 6, 9, 1, 10, 4);
// (2) [2, 3]
// (4) [5, 3, 7, 2]
// (6) [3, 6, 9, 1, 10, 4]








console.log("Oject operations");
//ES6 spread for Objects
const testaObject = {
    fname : 'mathew francis',
    age : 25,
    hobby : 'music'
};

console.log({...testaObject});

//add stuff to objects
const object2 = {...testaObject, fun : 'cycling'};
console.log(object2);

//obect asignment spread

const testObject2 = {
    iname : 'mat',
    age : 25,

    hobies : {
        first : {
            theName : 'sing',
            duration : 2
        },
        second : {
            theName : 'cycling',
            duration : 2
        },
        third : {
            theName : 'video editing',
            duration : 1
        }
    }
}

//asignment spread 
const {first, ...rest} = testObject2.hobies;

console.log(first, rest);

// {theName: 'sing', duration: 2} {second: {…}, third: {…}}
// second : {theName: 'cycling', duration: 2}
// third : {theName: 'video editing', duration: 1}


//you can aso ad function or a value 
testObject2.adder = 'the data';
testObject2.groin = function (){
    console.log(this.age);
};

console.log(testObject2);
// op {iname: 'mat', age: 25, hobies: {…}, adder: 'the data', groin: ƒ}















