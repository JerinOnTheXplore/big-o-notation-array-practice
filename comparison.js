const array = ["apple","mango","banana","apple"];
const set = new Set(array);
console.log(set.has("tomato"));// false return kore
console.log(set.has("banana"));// true return kore

//amar jodi delete korte chai..
console.log(set.delete("banana"));
console.log(set);//Set(2) { 'apple', 'mango' } return kore

//mane Set diye amra duplication removal er kaj gulo easily kore felte pari...

//[Brute Force]
const arr = ["apple","mango","banana","apple"];
const removeDuplicateArray = (arr)=>{
    const newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    });
    return newArr;
};
console.log(removeDuplicateArray(arr));//[ 'apple', 'mango', 'banana' ]

//brute-force e time complexity  holo O(n^2)..karon proti bar includes call hole seta arekbar puro array transverse kore..
//const removeDuplicateArray = arr =>[...new Set(arr)];
//ekhane time complesity pray O(n) karon set hash based..
//hash based abar ki ?
//iteration part: array er protita elemnet ekbar ghure dekha hoy tai O(n)..
//insertion part (protiti element e) set e insert kora hoy hash table er madhdhome..O(1)..average time
//sob miliye mot time : n*O(1)= O(n);


