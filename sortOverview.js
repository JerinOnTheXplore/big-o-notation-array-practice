/* Sorting and flattening array explained */

const numbers = [40,100,1,5,25,10];
// sorting algorithm : prottek browser nijer moto efficient sorting algorithm use kore..more or less sob modern browser chrome,edge,safari,firefox egulo "Timsort algorithm" use kore..
//* Timsort = Merge Sort + Insertion Sort er combination
//* Timsort efficient karon oneksomoy real world datate angshik vabe sorte data thake..product list / students marks..timsort ei pattern bujhe fele..se onujayi kom comparison kore
//*  tai average and best case 2 e pray O(n log n)..
const sortedNumber = numbers.sort();
console.log(sortedNumber);/*jodi sshudhu matro  sort() likhe chere dei tahole khub weird vabe sort kore... */
// etar main reason holo ami jokhon sort er modhdhe kono anonymous compare function provide korchina...tokhon Array.prototype.sort() by default etake string e convert kore..then etake unicode priority wise purota arrange kore..eta onujayi 1 always 2,4 er age ashbe,,[ 1, 10, 100, 25, 40, 5 ] evabe..
//correctly sort korte hole always ekta compare function dibo..
//mone rakhbo .sort() default vabe string comparison kore...tai sort korte hole always (a, b) => a - b /  (a, b) => b - a  dibo..

/* in-place sorting ki jinsh? */
//* => ekhane asole notun kono array toiri hoyna...rather original array er vitorei element gulor order change hoy..er mane memory te eki array reference modify hoy..
//space efficient karon ei array te jodi 1000 element thakto tahole oi 1000 ta element sort korte  notun kore abar array toiri korte time lagto..
// but downside is original array ta hariye jachche..mane mutated hoye jay..
const number = [30,100,1,5,24,10] ;
const sorted = number.sort((a,b)=>a-b)
console.log("Sorted:",sorted);
console.log("Original:", number);
/**
 * Sorted [ 1, 5, 10, 24, 30, 100 ]
 * Original: [ 1, 5, 10, 24, 30, 100 ]
 * sorted and original 2 tai same array er reference..ekhanei in-place sort hoise..mane original array er modhdhei element gulor order change hoise..tai memory Efficiency bare..
**/

/* String er khetre tahole ki ghote ??*/
 
const fruits = ["Banana","apple","Cherry","date"];
fruits.sort();//eta korle fruits er array ta internally alphabetic priority R capital to small letter onujayi sort kore..but eta to chaina..egulo small/capital jai hok alphabetical manner e chai..
//* ei problem ta overcome korte compare function apply korbo..sekhane localCompare use korbo..karon localCompare oi priority takee overwrite kore..
console.log(fruits);
const fruits2 = ["Banana","apple","Cherry","date"];
fruits2.sort((a,b)=>a.localeCompare(b));
console.log(fruits2);//[ 'apple', 'Banana', 'Cherry', 'date' ]

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"], 
];