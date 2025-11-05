//stack e array r moto thakena borong ektar upor ekta sajano thake....stack er main distingguishing feature holo eta LIFO(Last In First Out) akaare chole
//user action gulo stack e rakha hoy..jodi user undo korte chay tahole sobar seshe j ashche take sobar age biday dite hobe..
// stack er basic kichu terminology ache seta holo pop kore dewa..mane ber kore dewa
// stack amra 2 vabe imeplement korte pari..ekta array diye arekta linkList diye...
// but amra array diye implement korbo...array take class diye stack e convert kore use korbo..
//stack e mainly 3 ta operation hote pare..
/**
 * push();pop();peek()eta uporer element k dekhanor jonno..
 * peek korle sobar uporer element ta dekhte parbo
 * j sobar last e ashbe ..sei sobar age ber hobe..
 **/

class Stack {
    constructor() {
        this.items = [];//jehetu array diye stack korbo tai initial value hobe ekta empty array..
    }
//O(1)
    push(value){
      this.items.push(value);
    }
// O(1)
    pop(){
       if (this.isEmpty()){
        return undefined;
       }
      return this.items.pop();
    }
//O(1)
    peek(){
      if (this.isEmpty()){
        return undefined;
      }
      return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
//O(n)
    print(){
        console.log(this.items.slice().reverse().join(" "));
    }
}
//class er vitor nijossho method gulio call korte pari..jokgon amra class er vitore thaka value guli niye deal korbo..tokhon setar samne ekta this boshay nibo..

const stack = new Stack();
console.log(stack.peek());
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.peek());
console.log(stack.pop());