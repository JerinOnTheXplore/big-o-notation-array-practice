//Linked List Implementation - Basic concept of Node
//singly linked list & doubly linked list
// singly linked list e jekono ekdike jete parbo..but doubly linked list e dan thke bam e or bam theke dan e jete parbo..
// circular linked list
// linked list diye stack, queue,dequeue, soho onek data structure implement kora jay..
//linked list e kono kichu delete korle O(n) hoyna..constant time e hoy..
//node=data+next

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30)
console.log(head);

let temp = head;
while (temp !== null){
    console.log(temp.value, " ");
    temp = temp.next;
}

/*step by step */
//* class Node { ... }
 // ekhane amra Node namer blueprint class banaisi
 // proti Node er 2 ti ongsho..value: Node e rakha data ( jekono number 10,20,30)..next: poroborti Node e jawar jonno pointer / reference(shurute null rakha hoy)
 // linkedList holo ekadhik node jegulo ekta arektar sathe Next pointer diye jukto thake...next = null mane R kono node nei
 // const head = new Node(10);
  // new Node(10) = ekta notun node nanaisi jar value =10 o next=null
  // head: eta first node k dhore rakhe ...linked list e normally shuruta head diye nirdesh kora hoy....//head -> Node { value: 10, next: null }
 // head.next = new Node(20);
 // amra head node er next property k ekta notun Node diye set korsi..// head -> Node(10) -> Node(20) -> null
// head.next.next = new Node(30);
 // head.next.next holo Node(20).next
// console.head puro linkedList er start (head) print kore...output: Node { value: 10, next: Node { value: 20, next: Node { value: 30, next: null } } }
// let temp = head; while (temp !== null) { ... }
 // temp namer pointer banaisi r shurutei head k disi..
 // while (temp !== null) mane jotokhon current node temp ache..loop cholbe..loop er vitor node er value print korsi...
 // temp = temp.next kore poroborti node e jai..
 // ? keno next = null rakhe?
  // null diye bujhay list sesh..r kono node nei
  // eta traversal off korar natural stopping point..

// Time Complexity:
  /**
   * Traversal (sob nodes print kora) : O(n)..n=number of nodes
   * Insert all head: O(1) ..notun node banay head.next adjust korle druto hoy..
   * Insert all tail : O(n)
   */