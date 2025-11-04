// Stateless vs Stateful //
// maximum time e data structure gulo object diye implement kora hoy..but why not function ??
// ekhanei mainly stateful vs stateless er arguement chole ashe...
// stateful / stateless holo amar code er emon ekta component or part jeta kina ekta specific value k hold kore rakhte pare...in the multiple iterations..mane multiple line run korle pichoner data gula hold kore rakhte pare..
// jeta amar data guloke hold kore rakhte pare..setake stateful bole..ar jeta amar data guloke hold kore rakhte parena..setake stateless boli..
// JavaScript er perspective e amader j function gulo ache segulo holo stateless....ar object gulo ache segulo stateful..

// first e function diye counter banai...

const counter = (amount) =>{
    let count = 0;
    count = count + amount;
    return count;
};
console.log(counter(3));
console.log(counter(2));
// Output 5 dilona karon function stateless...2nd counter execute korar time e function er lexical environment mane curly bracket er vitore ja ache segulo k destroy kore dey...porobortite abar execute korar time e notun kore egulo abar create kore..

/*e jinish ta theke ber hoye ashar easiest way holo object diye kora..*/
//ingeneral sob object e stateful hoy..

//object er under e j function thake take method bole..

const counter1 = {
    count1:0,
    add(amount){
        this.count1 = this.count1 + amount;
    },
    print(){
        console.log(this.count1);
    },
};
counter1.add(2);
counter1.add(3);
counter1.print();//ekhon output 5 dibe..