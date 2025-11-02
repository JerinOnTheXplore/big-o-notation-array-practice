/* flattening array explained */
//ei type scenario beshi ghote jokhon large data/ graph/chart/plot niye kaj korbo 
const arr = [1,2,3,[4,5]];
const flatArr = arr.flat();//etar kaj holo array ta R nested thakbe nah...venge simple ekta array te convert hoye jabe..1 layer er nested e .flat() use korbo..
console.log(flatArr);

//ekhon jodi 1 layer er nested na hoy tahole??
const array = [1,2,3,[4,5,[6,7]]];
const flatArray = array.flat(2);
console.log(flatArray);/*
[
  1, 2, 3, 4,
  5, 6, 7
]
*/

// ekhon koto layer er nested eta jodi gona possible na hoy ??
const array2 = [1,2,3,[4,5,[6,7,[8,9,[10,11]]]]];
const flatArray2 = array2.flat(Infinity);
console.log(flatArray2);/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
*/
/* filter er upor base kore user interaction*/
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"], 
]

const filterTags = [...new Set(tagsFromPosts.flat())];
console.log(filterTags);// [ 'javascript', 'react', 'css', 'node', 'express', 'html' ]

