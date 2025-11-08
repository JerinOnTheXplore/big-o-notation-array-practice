// Two Sum
/**
 * // Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

// Input
// [2, 11, 7, 15] and 9

// Output
// [0, 2] (because 2 + 7 = 9)
 */

// array er  2 ti songkhar index ber kortesi jeta jog korle target hoy..
// Time complexity : O(n)

const twoSum = (arr, target) => {
    const numMap = new Map();
    for (let i = 0; i< arr.length; i++) {//array transverse kore
        const currentNumber = arr[i]; //eta bortoman element
        const complement = target - currentNumber;
        console.log("Current Number", currentNumber);
        console.log("Complement", complement);
        if(numMap.has(complement)) {//dekhtesi complement age ashlo kina..
            return [numMap.get(complement), i];// jodi thke taile index pair return kore
        }
        numMap.set(currentNumber, i);// map e bortoman number index shoho rakhi...
        console.log(numMap);
    }
    return undefined;//kono pair na pawa gele...
};
console.log(twoSum([2,11,7,15],9));
/**
 * Current Number 2
   Complement 7
   Map(1) { 2 => 0 }
   Current Number 11
   Complement -2
   Map(2) { 2 => 0, 11 => 1 }
   Current Number 7
   Complement 2
   [ 0, 2 ]
 */