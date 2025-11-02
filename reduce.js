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