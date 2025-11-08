// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.
//cache ...hit and miss

const dataCache = new Map();// ekhane map banale empty cache toiri hoy..Map use korsi karon Map e key hishebe number/string/objects sob rokom value rakha jay..(.has(),.get() apply korte pari..) R O(1)..
// first console.log(dataCache) dekhabe: Map(0) {} — empty cache।

const expensiveTask = (id) => {
    console.log("Run the expensive task for: ",id);
    return {
        id: id,
        data: `Some data for id: ${id}`,
        timestamp: new Date().getTime(),
    };
};

const getData = (id) =>{
   if (dataCache.has(id)){
    console.log("Cache HIT for id:", id);
    return dataCache.get(id);
   }
   console.log("Cache Miss for id:", id);
   const data = expensiveTask(id);
   dataCache.set(id, data);
   return data;
};
console.log(dataCache);
console.log(getData(123));//first bar getData(123) call korle getData er modhdhe dataCache.has(123) check kore ekhno cache khali tai false..
// tai console.log("Cache Miss for id:", 123); print hobe (Cache Miss)
// erpor expensiveTask(123) chalano hoy..ekhane ami simulate kortesi j kichu extensive kaj hochche..(DB/APi)
// dataCache.set(123, data) diye Map-e sei result store kora hoy.. ekhon cache e entry ache
console.log(getData(123));
// 2nd bar getData(123) call korle ebar dataCache.has(123) true hobe...karon ager step e set kore disi..
// console.log("Cache HIT for id:", 123); print hobe..
// dataCache.get(123) sorasori cached object return korbe..kono extensive kaj chala te hobena..tai druto pawa jabe..

/**
 * first bar kom cost e extensive data newa hoy..cache e joma rakaha hoy..porerbar same id hole extensive task chalanor bodole cache thke O(1) lookup kore data ferot dewa hoy..evabe delay r resource use kome..
 * // eta memorization / caching er basic pattern
 */

/**
 * Complexity: dataCache.has() o dataCache.get() er average time complexity = O(1) map hash like lookup....
 *  first bar cache banate extensiveTask khoroch sapekhkho.. but lookup O(1);
 */
