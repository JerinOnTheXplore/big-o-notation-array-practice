//amra chaile array diyeo set create korte pari..

const arr = ["apple","mango","banana","apple"];
const set = new Set(arr);
console.log(set);//Set(3) { 'apple', 'mango', 'banana' }...karon set duplicate element remove kore..
set.add("tomato");
console.log(set);//Set(4) { 'apple', 'mango', 'banana', 'tomato' }
//normally set.add khub kom kora hoy..

const test = set.forEach((value)=>console.log(value));
console.log(test);//undefined dey ...time complexity O(n)
// upore forEach diye set er individual value loop kore dekha hochce..forEach kono kichu return korena..karon forEach muloto loop chalanor jonno toiri..eti ashole side-Effects er jonno use kora hoy...for example: console.log,DOM, API call etc.

//what is side-effect ?
//side effect holo kono function or code block er baire visible change ghotano..that means result directly return na kore..programme ba environment change kore..

//  const test = set.forEach((value)=>console.log(value)); etar time complexity holo O(n)..karon forEach mane holo Set /array er each an every elemnt ekbar kore transverse kora..
// dhori Set e n shongkhok element ache..tahole loop n bar chole..mane prottek element er upor callback function ekbar kore execute hoy..
// tahole Time Complexity hobe = O(n);
//Set.add();O(1) average;Hash-based insertion
//Set.has();O(1) average;Hash lookup
//Set.delete() ; O(1) average; Direct hash Removal
//Set.forEach();O(n);shob element transverse kore..

//forEach sideEffect er jonno thik ache
//jodi new data Structure / array nite chai tahole map()/filter() use korbo..

//Set e iteration er jonno shudhu forEach tai ache..map/filter/find egulo nai..
//jokhon amader set niye / duplication remove korar kaj sesh hoy tokhon oi set k array te convert kore test.push / habijabi kaj korte pari..

const test2 = Array.from(set);
console.log(test2);
///eta ekta array return kore: [ 'apple', 'mango', 'banana', 'tomato' ]
//normally set er modhdhe push/array er kichu kora jabena..

