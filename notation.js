//browser er Node.js er performance api use kore ei code tuku run hote koto somoy ney seta bujha jay...
//performance.now timeStamp toiri kore..
//eta diye ms e precise time pawa jay...

const startTime = performance.now();
for (let i=0; i<= 5000; i++){
    console.log(i);
}

const endTime = performance.now();
console.log(`This code took ${endTime - startTime} ms`);
//This code took 370.70050000000003 ms
//eta always same hobena..

//item joto barbe time toto beshii lagbe..

console.time("task");
for (let i=0; i<= 5000; i++){
    console.log(i);
}

console.timeEnd("task");
//task: 313.587 ms..etar precision or granularity performance.now er chye kom..
//console.timeEnd() ..eta fast,easy check (rought timing)....
//performance.now...eta granular,high resolution timing..accurate measure dey..