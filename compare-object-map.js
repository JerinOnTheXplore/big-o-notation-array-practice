//map ar object khub kachakachi...jodio jinista  vinno but idea kachakachi..amra key value pair akare rakhbo
//object er khtre j key ta initialize kori seta string e convert kore fele..
const obj = {
    nextLevel: {courseId: "level2"},
    "Programming Hero": {courseId: "level1"},

};
console.log(obj.nextLevel)//{ courseId: 'level2' } dekha jay console e...eta dot notation/square bracket notation diye easily access kora jay..
console.log(obj["Programming Hero"]);//{ courseId: 'level1' } return kore jeta square bracket notation diye access korte hobe..dot notation diye access kora jabena..
//jodi boolean rakha hoy mane.. true: {courseId: "level1"}, evabe rakha hoy 
//ei true ta boolean howar por o string e convert kore ar access kora jay

const object = {};
object.nextLevel={ courseId: "level2" };
object[true] = {courseId: "level1"};
console.log(object);// ekhane abar string e convert hoy: { nextLevel: { courseId: 'level2' }, true: { courseId: 'level1' } }
//object er limitation holo key hishebe kono object rakhte parbona..either symbool or string rakhte parbo

const course1 = { name: "Programming Hero"};//eta nijei ekta object
const course2 = { name: "Next Level Web Development"};
const obj1 = {};
obj1[course1] = {courseId: "level1"}
console.log(obj1);// ekhane convert kore object object kore fele..{ '[object Object]': { courseId: 'level1' } }
//abar square bracket notation diye object ocject k string hishebe access kora jay
console.log(obj1["[object Object]"]);//{ courseId: 'level1' }

//object er limitation overcome korte amra map use korte pari..
//map e jekono data type (string, number, boolean,object,array,function) egulo key hishebe use korte pari..eta key k convert kore string e niye jabena..
// .size property diye easily total entries jana jay..
// directly forEach , for..of  diye iterate kora jay

const map = new Map();
console.log(map);// Map(0) {} ekhane set  er motoi size dichche..
map.set(1, "Programming Hero");
console.log(map);//Map(1) { 1 => 'Programming Hero' } ekhane number take number e rakhse..string e convert kintu korenai

//abar hodi 1 er jaygay false dei..tahole setake boolean e rakhbe..string e convert korbena..map.set(false, "Programming Hero");Map(1) { false => 'Programming Hero' }

// sobcheye mojar bepar holo ami chaile object keo key hishebe set korte pari

const course3 = {name: "Programming Hero"};
const course4 = {name: "level2"};
const map1 = new Map();
map1.set(course3, {courseId: "level1"});
map1.set(course4, {courseId: "level2"});
console.log(map1);
// Map(2) {
//   { name: 'Programming Hero' } => { courseId: 'level1' },
//   { name: 'level2' } => { courseId: 'level2' }
// }

// ei dhoroner code cache ba unique tracking er jonnno khub e useful

/* problem scenario*/
//dhori amar website e onek user ache ar ami chai protiti user kotobar visit korse...ba kon course access korse seta track korte..
 
/*jodi Object use kori*/
const userObj = {};
const user1 = {name: "Jerin"};
userObj[user1] = "level1";
console.log(userObj);//{ '[object Object]': 'level1' }//dekha jay j Object always string hoye jay tai alada user distinguish kora possible na..user1 ar user2 2 joner key same hoye jay...// { '[object Object]': 'level1' } ...Problem!!!

/*map use korle*/
const course5 = {name: "Programming Hero"};
const course6 = {name: "level2"};
const map2 = new Map();
map2.set(course5, {courseId: "level1"});
map2.set(course6, {courseId: "level1"});
console.log(map2);

// Map(2) {
//   { name: 'Programming Hero' } => { courseId: 'level1' },
//   { name: 'level2' } => { courseId: 'level1' }
// }....ekhane course5 r 6 object key hishebe perfectly distinct thake..Map object reference k internally use kore jar fole course5 o course6 alada key hishebe store hoy..

//cache /visit tracking e why useful?
//1.karon protiti user ba course k key hishebe rakhte pare..eki user multiple visit korle key reuse hoy..easily update kora jay..
//2. map average timeLookup provide kore..O(1)..onek fast
// JavaScript e map internally hash table er moto kaj kore..ami jokhon key diye value set kori map.set(key, value),map key k hash kore ekta unique address toiri kore

// Map approach
 const map3 = new Map();
map.set(user1, "level1");
map.get(user1); // O(1)
//ekhane map hash table use kore..hashing kore directly memory location ber kore

// Array approach
 const arr = [{id:1}, {id:2}, {id:3}];
arr.find(u => u.id === 5000); // O(n) karon protiti element check korte hobe

