//some
const numbers = [1,5,3,7,5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);//false return kore
// .some() ta role based feature implement korte kaje dey

const currentUserRoles = ["user" , "editor", "admin"];
const featureAccessRoles = ["admin","manager"];
const canAccess = currentUserRoles.some((role)=>featureAccessRoles.includes(role)
);
console.log(canAccess);//true

/* Array.form() eta pagination type kaj korte kaje lage.. */
//notun ekta array banate chai jekhane 5 ta element thakbe..amar ekhon kono actual array nai..ami array banabo..

// const arr = Array.from({ length: 5 });
// console.log(arr);
//[ undefined, undefined, undefined, undefined, undefined ] eta dey
// const array = Array.from({length:5 }).fill("");
// console.log(array);

// const arr = Array.from({length: 5},(_,i)=>i);
// console.log(arr);//[ 0, 1, 2, 3, 4 ]

//ekta array diye arekta array banano jay..
const array = Array.from([1,2,3],(value, i)=> value * value);

//python e range namer ekta function ache jeta diye array banano jay...javaScript eo array.form diye amra eta implement korte pari..

const range = (start,stop,step)=>Array.from(
    {length: Math.ceil((stop-start))},
    (_,i)=> start + i * step
);
console.log(range(0,11,2));
//range (start, stop, step)..ei function ti start theke shuru kore step kore songkha jog ore thake ..and stop er age porjonto mangulo firiye dey
//range(0,11,2)=>[0,2,4,8,10]
//ekhane stop excluded ar start included
// array.form kivabe use kora hoyeche?
// Array.from({length: N},(_,i)=> start + i*step)
// Array.from prothom argument e ekti array-like-object ney..ekhane {lenght:N} diye notun array toiri hoy jar lenght holo N..
//2nd argument e ekti mapping function ache (_,i)=>..ekhane _ holo current value (undefined ekhane), i holo index..ei mapping function prottek index er jonno notun value generate kore 
// length kivabe nirdharon kora hoy??
// Math.ceil((stop-start)/step)..eta holo kotogulo step doukar hobe ..eta sadharonoto fraction hote pare..jodi stop start theke thik proportion e na pore..
//Math.ceil diye jottuk fraction ashe setar ekta round figure man newa hoy..

//* Complexity: time and space 2 tai O(n) jekhane n= Math.ceil((stop-start)/step)..karon mapping function (_,i)=>start + i*step prottekta index er jonno execute hoy...
// jehetu protek element e mapping function ekbar execute hoy ...mane n bar chalano hoy tai O(n)