//Scenario Based Activity - Denormalizing Data (Client-Side Join)

//normalization holo data gulo k venge venge sundor vabe neat and cean way te rakha..jate pore seta khuje pete shubidha hoy..
// denormalization holo data guloke jora lagiye construct kora

//nested for loop othoba nested for each korle problem kothay ??
// nexted for loop korle algorithm er angle theke jodi dekhi nested for loop manei O(n^2)..jeta time efficiency dichchena..
// tai find er kaj tuku ami jodi nested vabe na kore..somehow jodi O(n) e convert korte pari..mane nested for loop use na kore jodi kaj ta korte pari tahole eta onek beshi efficient hoy..tai post er age hash table banay nibo..


//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

/**
 * client side join er jonno target hobe nexted loop e na giye linear e kora..
 */
//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//TODO create a hashtable of posts

//O(n)
// 1) Build hash table: group posts by userId (O(p))
const postByUserId = posts.reduce((table,post)=>{
    const {userId} = post;
    if (!table[userId]){
        table[userId] = [];
    }
    table[userId].push(post);

    return table;
},{});
// ekhane amra reduce diye ekta khali object banahchi..jekhane key=userId and value = oi user er sob post er array..
// Time complexity :
// post gulor hash table banate O(p)
// user er sathe match korte O(u)
// total O(p+u)..linear
console.log(postByUserId)
// 2) Map users to include posts using O(1) lookup per user (O(u))
//O(n)
const userWithPosts = users.map((user)=>{
    return {
        ...user,
        //O(1)
        posts: postByUserId[user.id] || [],
    };
});

console.log(JSON.stringify(userWithPosts));

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]

