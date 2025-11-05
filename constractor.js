//Basic Class constructor and methods refresher

// const counter = (amount) =>{
//     let count = 0;
//     count = count + amount;
//     return count;
// };
// console.log(counter(3));
// console.log(counter(2));

// uporer ei function ta ami chaile stateful banate pari...

// let count = 0;
// const counter = (amount) =>{
//     count = count + amount;
//     return count;
// };
// console.log(counter(3));
// console.log(counter(2));
// ekhane variable ta lexical environment er baire rakhle first output 3 ashleo porer output 5 ashe...
//problem : global/outer state change hole vul side effects hoy..
// but functional programming e bola hoy amader prottekta function pure function hote hobe..

// pure function er concept hochche ami j input dibo sei input er jonno protibar same output generate korbe...
// but uporer function tay always same output dibena jodi same input dei..suppose jodi pritibar 2 dei...tahole first e 2, then 4, then 6 evabe dibe..er mane function ta bairer kono kichu dara provabito..tai ei approach e agabona..

// arekta jinsh kora jay seta holo closoure create kora..

const createCounter = () =>{
    let count = 0;
    return (amount) =>{
        count = count + amount;
        return count;
    };
};
const counter = createCounter();
//ekhane ekta function er vitor theke arekta function return korchi...higher order function type eer
console.log(counter(3));
console.log(counter(5));//output : 8
// ager tar tulonay eta little bit safer..


/**
 * return (amount) =>{
        count = count + amount;
        return count;
    }; ei inner function theke j amra outer function take access korte parchi etakei bole closoure..
 */

// amra ei approach e agabona..karon eta javaScript specific ekta jinish..Data structure and algorithm emon ek jinish jeta kono programming language dara bound na..karon DSA o javascript ekta abstruct idea..

//tai amra ekohn object diye class baniye korbo...Object oriented programming er ekta boro part holo class niye deal kora..shudhu class na..inharitence,abstruction,polimorphism soho onek kichu ache..
//class onekta bluePrint er moto kaj kore jeta amake bar bar similar kind of object reproduce korar sujog dey..

class Counter {
    constructor(count){
        this.count = count ;//ekhane class diye j object ta banabo..sei object er vitore j count amra hold korchi..setake muloto this indicate kore..
        //R j conut tar sathe this lekha nei seta outer world theke ashbe..mane class er baire theke ashbe..
    }
    add(amount){
        this.count = this.count + amount;
    }
    print(){
        console.log(this.count);
    }
}//eta ekta blueprint
const counter1 = new Counter(0);//jehetu class base hoye gese & counter ta jehetu ekta class tai obossoi amake constructor take trigger korar joono new dite hobe..
counter1.add(2);
counter1.add(3);

counter1.print();//5
//etar subidha holo ei class theke counter take reproduce korte parbo..
/**
 * basic rule of thumb hochche jodi object er vitorer kono ekti vatorer variable niye deal korte chai..setar samne this dibo
 * jodi variable ta outer world/object er baire theke ashe..tahole amra this dibona..
 */
const counter2 = new Counter(10);
counter2.add(20);
counter2.add(30);
counter2.print();//output: 60
// eta stateful ebong reproduceable..

