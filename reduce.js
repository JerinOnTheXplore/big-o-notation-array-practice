//From Simple Totals to Powerful Aggregation (reduce)

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Logitech USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurti", price: 2200, quantity: 1 },
];
const subtotal = cartItems.reduce((subtotal, product)=>{
    console.log(subtotal, product);
    return subtotal + product.price * product.quantity
},0);
//  ekhane subtotal holo accumulator
//  product holo current value
//  initialValue holo 0
/**
 ** step 1:
 * subtotal = 0,
 * product = Daraz laptop bag
 * return subtotal + (1500 * 1)= 1500
 ** step 2:
 * subtotal = 1500
 * product = Logitech USB-C Cable
 * return subtotal + (350 * 2) = 2200
 * step 3:
 * subtotal = 2200
 * product = Aarong Kurti
 * return subtotal + (2200 * 1)= 4400
 * final accumulated value : 4400
 */
console.log(subtotal);
// 0 { id: 'p-001', name: 'Daraz Laptop Bag', price: 1500, quantity: 1 }
// 1500 { id: 'p-002', name: 'Logitech USB-C Cable', price: 350, quantity: 2 }
// 2200 { id: 'p-003', name: 'Aarong Kurti', price: 2200, quantity: 1 }
// 4400  

/* what is reduce() ? */

//*  reduce() mane ekta array theke ekta single value ber kora...eta accumulator pattern follow kore jekhane proti step e ekta man jog ba save kore..
//*  array.reduce((accumulator, currentValue)=>{...}, initialValue)
//  accumulator => ager dhaper jogfol ba jomaman
//  currentValue=> bortoman looper item
//  initialValue => accumulator er primary value

 const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player)=>{
    console.log(bestPlayer,player);
    if (bestPlayer.score > player.score){
        return bestPlayer;
    }
    return player;
},players[0]);
console.log(bestScorer);

/* ekhane reduce() ki korche?*/

/**
 * reduce ekhane use kora hoise array theke sobcheye beshi score er player ber korar jonno..
 * bestPlayer: step by step sobcheye valo score er player k dhore rakhe accumulator
 * player: current iteration er player object
 * initialValue: players[0] first player = {name: "Jamal Bhuiyan", score: 88}
 * step 1: first iteration
 * bestPlayer = {name: "Jamal Bhuyan", score: 88}
 * player = { name: "Shekh Morsalin", score: 81 }
 * if (bestPlayer.score > player.score) // 88 > 81 → true
 return bestPlayer // Jamal Bhuyan keeps

 */