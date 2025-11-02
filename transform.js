/* The Core Transformation Toolkit (map, filter, sort, slice) */

const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
];

//dhori, 3 ta elecktronics er product ami ui te dekhabo..tahole first of all filter kore ber korbo electronics er ki ki ache..
//Output=>[{name: "Phone"}, {name: "Smart Watch"}]..//uporer object er shape k convert kore emon array of object e convert kore niye ashbo..
//*process*//
  //TODO Filter => Electronics
  //TODO Sort by => Rating
  //TODO Slice => first 3 (top 3)
  //TODO Map => transform object shape to { name : "Name"}

const topElectronicProducts = rawApiData.filter((item)=>item.category === "Electronics").sort((a,b)=>b.rating - a.rating).slice(0, 3).map((item)=>{
    return {name: item.productName};
});
//* sort er jonno ekta function dibo jeta amader sort kore dibe..a,b k comparison er jonno use kora hoy..sort er basic dharona holo jodi number ta negative hoy tahole a nibe..ar jodi positive hoy taile b nibe...a-b korle ascending order e sort..R b-a hole descending order e sort hoy..
//* slice(0, 3) etar mane descending order e prothom 3 ta niye nibe..
//* .map((item)=>{}) jodi evabe likhi taile { } er vitor return obviously likhbo..
//* return na diye jodi object e mane { } er modhdhe rakhi taile [ undefined, undefined, undefined ] dibe...
//* R jodi return na likhi taile first bracket er modhdhe direct one liner hishebe return korbo
//* jokhon interaction korar dorkar hobe tokhon return diye likhbo karon return diye likhle puro jinishta meaningful hoy R reliability bare..
/* tahole emon pabo:
[
  { name: 'Quantum Laptop' },
  { name: 'Smart Watch' },
  { name: 'Noise-Cancelling Headphones' }
]
*/
console.log(topElectronicProducts);