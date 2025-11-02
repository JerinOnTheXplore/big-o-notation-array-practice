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