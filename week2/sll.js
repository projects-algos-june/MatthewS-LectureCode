/*
== vs. ===
OOP Refresher
Prototypes
ES6 Syntax
Singly Linked Lists
*/


// Implement a Linked List Node Class
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Implement the List Class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log(`added! ${val} as the head of the list!`)
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log(`added! ${val}`)
    }
    this.size++;
  }

  display() {
    let i = 0;
    let current = this.head;
    let str = "";
    while (current) {
      str += i + ". " + current.val + " ";
      current = current.next;
      i++
    }
    console.log(str);
  }

  addFront(val) {
    if (this.head === null) {
      this.head = new Node(val)
    } else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      console.log(`Added! ${val}`);
    }
    this.size++;
  }

  removeFront() {
    if (this.head === null) {
      return "list is empty";
    } else {
      this.head = this.head.next;
    }
  }

  insert(val, index) {
    if (index > 0 && index > this.size) {
      console.log(`Index is out of range`);
      return;
    }
    let newNode = new Node(val);
    let current = this.head;
    let prev;
    if (index === 0) {
      newNode.next = head;
      this.head = newNode;
    } else {
      current = this.head;
      let position = 0;
      while (position < index) {
        position++;
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.addFront(88);
list.display();
list.insert(99, 1);
list.display();






// Add Node / Add Node To End


// Display List


// Add Front


// Remove Front


// insertAt


// removeAt


// indexOF

