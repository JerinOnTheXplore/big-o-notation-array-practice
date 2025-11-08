// problem Statement
// You are given two large arrays, listA and listB. Each array contains user objects.
// A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.
/**
 * Your task is to write an efficient function that takes both lists as input
 * and returns the total count of users that are present in both lists.

 * TODO has to be solved in Time Complexity O(n)

*/
const USER_COUNT = 50000;
let userA = [];
let userB = [];
// data toiri..
/**
 * userA te thakbe user_0, user_1,...,user_49999
 * userB te thakbe user_25000, user_25001,...,user_74999
 * etar mane user 25000 theke 49999 porjonto 2 jaygatei common
 */
const createUser = (id) => ({id: `user_${id}`, name: `User ${id}`});
for (let i=0; i<USER_COUNT; i++) {
    userA.push(createUser(i));
    userB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //
//slow...karon time complexity O(n^2)
const commonFriendsSlow = (userA, userB) => {
    const startTime = performance.now();
    const commonFriends = [];
    // O(n^2)
    userA.forEach((userA)=>{
        // O(n)
        userB.forEach((userB)=>{
            if (userA.id === userB.id){
                commonFriends.push(userB);
            }
        });
    });
    const endTime = performance.now();
    return {count: commonFriends.length, timeTookofFinish: endTime-startTime};
};
// console.log(commonFriendsSlow(usersA, usersB));
// fast...karon time complexity ekhane O(n)...
const commonFriendsFast = (usersA, usersB) => {
    const startTime = performance.now();
    const commonFriends = [];
    // O(n)
    //first e userA er sob id diye ekta Ser toiri kora hoy..Set mane emon ekta data structure jetay kono duplicate thakena..
    //R lookup kora jay O(1) time e..ekdom fast jeta..
    const idListA = new Set(usersA.map((user) => user.id));

    // O(n)
    usersA.forEach((userB) =>{
        // O(1) lookup
        // tarpor userB er protita user er upor loop chalano hoise..
        if (idListA.has(userB.id)) {
            commonFriends.push(userB);
        }//mane jodi userB.id already userA er modhdhe thake tahole seta common..
    }) ;
    const endTime = performance.now();
    return { count: commonFriends.length, timeTookofFinish: endTime - startTime};// ekhane kotojon common ase ar koto time lagse seta return kore..
};
// Time complexity : map() + forEach() prottekta user ekbar kore traverse hochche..
console.log(commonFriendsFast(userA, userB));
