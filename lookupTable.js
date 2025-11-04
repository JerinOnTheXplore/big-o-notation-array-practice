//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];
const lookupTable = postsArray.reduce((table,post) => {
    table[post.id] = post;
    return table;
}, {});
console.log(lookupTable);//ekhane first jehetu database theke ashtese tai at first eta O(n) hobe ..karon ekhane reduce chalate hochche..R reduce chalano manei purotar upor go through korano..
//kintu er por theke user jokhon e search korbe tokhon eta easily lookup table thekei get kora jay
// amra jokhon search kori..ekta 2 ta word likhar por j automatically related jinish niche show korte thake ei kaj ta lookup table diye kora jay..

/**
  {
  'p-101': { id: 'p-101', title: 'Intro to SQL', author: 'Alex' },
  'p-102': { id: 'p-102', title: 'Data Structures in JS', author: 'Beth' },
  'p-103': { id: 'p-103', title: 'Understanding Reduce', author: 'Chris' },
  'p-104': { id: 'p-104', title: 'CSS Grid Tricks', author: 'Alex' }
  }
 */

//   const post = postsArray.find((post)=>post.id === 'p-103');
//   console.log(post);//O(n)

  // lookup table bananor madhdhome O(1) e niye ashte  parbo karon ekhane puro object tate go throught kora lagchena
  const post = lookupTable['p-103'];
   for (let post in lookupTable){
    console.log(post);//evabe individual key gulo peye jai
    console.log(lookupTable[post]);// R evabe individual post gulo peye jai..
   }
  console.log();

  // lookup table diye O(n) k mane linear Big-O-Notation k constant Big-O-Notation O(1) e convert kore felte pari...
  
