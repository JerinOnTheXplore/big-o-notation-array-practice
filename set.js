//Basic interactions of Set datastructure
//Set holo ekta data Structure jeta JavaScript by default amader diye thake..
//set initialize korte hole new diye korte hoy..

const set = new Set();
console.log(set);
//Set(0) {} return kore...karon ei set e kichui nei
//set er modhdhe kivabe kono kichu add korte pari ?
set.add("apple");
set.add("banana");
set.add("mango");
console.log(set);
//ekhon Set(3) { 'apple', 'banana', 'mango' } return kore..karon ei set e ekhon 3 ta element add hoise..
//set er main feature holo set er modhdhe duplicate entry dewa jayna..
//jodi kono interaction korte chai jekhane duplication remove korte hobe or comparison korte hobe dupplication er modhdhe..sei jinish gulote set shubidha diye thake..


// FOR EXample, ...amar kache 3 jon user ache jeta diyye viewConut type er kichu ekta banate chai..dhori website e unique visitor kotojon seta dekhte chai..

const ami = {userName: "Jerin"};
const brother = {userName: "Tawhid"};
const friend = {userName: "Ritu"};

const set2 = new Set();
set2.add(ami);
set2.add(brother);
set2.add(friend);
set2.add(ami);
console.log(set2);
console.log(set2.size);
//tahole return kore 
// Set(3) {
//   { userName: 'Jerin' },
//   { userName: 'Tawhid' },
//   { userName: 'Ritu' }
// }
// 3
//dekha jachche duplicate nichchena..
