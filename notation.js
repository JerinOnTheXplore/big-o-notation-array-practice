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

const firstArray = [];
const secondArray = [];

for (let i=0; i< 600000; i++){
    if (i < 300000){
        firstArray.push(i);
    }
    secondArray.push(i);
}
console.log("first array",firstArray.length);
console.log("second array", secondArray.length);
//first array 300000
//second array 600000

//second array te first array er double data ase..jekono map,find,search, forEach jeguloi chalaina keno egula muloto O(n)..karon array r element joto beshi hobe ..time toto beshi lagbe..
//sei hypothesis tai ekhane implement korbo..
console.time("map1");
const firstUserList = firstArray.map((number) =>({userId: number}));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) =>({userId: number}));
console.timeEnd("map2");
//ekhane dekha jabe first task ta korte jottuk time lage ...second task korte pray double time lagbe..exact half/double hobena...motamuti half / double hoy,,karon number of entry second task e beshi..tar mane jodi eta linear growth/order of n hoy taile time tao second task e beshi e lagbe..

//map1: 5.999ms
//map2: 39.493ms
//map1: 5.608ms
//map2: 53.364ms
//eta accurate na karon performance.now diye dekhinai..

const firstUserList2 = firstArray.map((number) =>({userId: number}));
const secondUserList2 = secondArray.map((number) =>({userId: number}));

console.time("find");
const user = secondUserList2.find((user)=> user.userId === 20);
console.timeEnd("find");
//find: 0.082ms
//jodi user.userId === 20000 hoy find: 0.404ms mane time ta bartese..

//ekhon jodi index diye access kori..
//find: 0.013ms 500000 dile
//500 dile find: 0.015ms
console.time("find");
const user2 = secondUserList2[500000];
console.timeEnd("find");
//mane index diye access korar try korle particular datakei get kore niye ashe.. const user = secondUserList2.find((user)=> user.userId === 20); evabe purotar upor iteration korar dorkar hoyna..etai hashMap er subidha..
