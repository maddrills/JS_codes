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
















