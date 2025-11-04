// *Grouping and Aggregating data * //

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

// **ToDo init empty object//
//TODO init obj category
//TODO calculate the revenue

const totalSalesByCategory = sales.reduce((table,sale)=>{
    console.log(table, ":" , sale);
    const {category,price,quantity} = sale;

    if(!table[category]){
        table[category]={
            totalRevenue: 0,
            itemCount: 0,
        };
    }
    table[category].totalRevenue += price * quantity ;
    table[category].itemCount +=quantity ;

    return table;

},{});

console.log(totalSalesByCategory);

/* Step By Step: */
/*
  * reduce() diye ekta object banaisi table namer jekhane each category ekta key hobe...
  * protiti category er value abar ekta object...{ totalRevenue, itemCount }
  * table = {} empty object
  * iteration 1(first sale)
  
* Iteration 1:
 sale = { category: "Electronics", price:1200, quantity:1 }
  table["Electronics"] nai..tai toiri kora holo:
  table["Electronics"] = { totalRevenue: 0, itemCount: 0 }
update: totalRevenue += 1200*1 => 1200
  itemCount += 1 => 1
  table becomes : 
  
  { Electronics: { totalRevenue: 1200, itemCount: 1 } }

 Iteration 2:
  sale = { category: "Books", price:30, quantity:2 }
  table["Books"] nai ... { totalRevenue:0, itemCount:0 }..create kore
 
update: 
  totalRevenue += 30 * 2 = 60
  itemCount += 2 = 2

table becomes:
  {
  Electronics: { totalRevenue: 1200, itemCount: 1 },
  Books: { totalRevenue: 60, itemCount: 2 }
}
  Iteration 3:
sale = { category: "Electronics", price:25, quantity:2 }
  table["Electronics"] age thekei ase..

update:
 totalRevenue += 25*2 =>50..previous 1200+50 = 1250
 itemCount += 2 =>ager 1+2 =>3

table hobe:
 {
  Electronics: { totalRevenue: 1250, itemCount: 3 },
  Books: { totalRevenue: 60, itemCount: 2 }
}
  
Iteration 4
  sale = { category: "Home", price:150, quantity:1 }

notun category =create and update:
Home.totalRevenue = 150
Home.itemCount = 1
table becomes:

{
  Electronics: { totalRevenue: 1250, itemCount: 3 },
  Books: { totalRevenue: 60, itemCount: 2 },
  Home: { totalRevenue: 150, itemCount: 1 }
}

Iteration 5
sale = { category: "Books", price:50, quantity:1 }
Books agei chilo ...
 update:

totalRevenue =previous 60 + 50 = 110
itemCount =previous 2 + 1 = 3
table becomes:

{
  Electronics: { totalRevenue: 1250, itemCount: 3 },
  Books: { totalRevenue: 110, itemCount: 3 },
  Home: { totalRevenue: 150, itemCount: 1 }
}

Iteration 6 (last)
  sale = { category: "Electronics", price:80, quantity:1 }
Electronics update:
totalRevenue =previous 1250 + 80 = 1330
itemCount = 3 + 1 = 4
final table:
{
  Electronics: { totalRevenue: 1330, itemCount: 4 },
  Books: { totalRevenue: 110, itemCount: 3 },
  Home: { totalRevenue: 150, itemCount: 1 }
}
 */

// Output:
/**
 * {
  Electronics: { totalRevenue: 1330, itemCount: 4 },
  Books: { totalRevenue: 110, itemCount: 3 },
  Home: { totalRevenue: 150, itemCount: 1 }
}
 */
   