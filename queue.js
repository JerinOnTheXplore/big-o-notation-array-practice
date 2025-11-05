// Queue Implementation using Array
// queue implement korte 2 ta term lage enqueue R dequeue ..
// eta FIFO follow kore..eta 2 ta approach e kora jay..array diye o kora jay..abar link list diyeo kora jay...
// FIFO te list er shurute dhukbe..jokhon dequeue korbo tokhon list er first theke baad jabe..
// abar jodi peek() kori tahole array r first element ta user k dekhabo..

/* Array Implementation */

class Queue {
    constructor() {
        this.items = [] ;
    }
//Time complexity : O(1)
    enqueue(value) {
    this.items.push(value);
    }

// O(n)
    dequeue() {
        if (this.isEmpty()){
            return undefined;
        }
      return this.items.shift();
    }    
    
// O(1)
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
      return this.items[0];
    }   
// O(1)
    isEmpty(){
        return this.items.length === 0;
    } 
// O(n)
    print(){
        console.log("Start =>",this.items.join("=>"),"=> end");
    }

}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();

