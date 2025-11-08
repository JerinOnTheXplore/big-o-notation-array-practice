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
console.log(getData(123));
console.log(getData(123));
