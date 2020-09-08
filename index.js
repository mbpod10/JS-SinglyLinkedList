class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let newHead = this.head;
    let current = newHead;
    while (current.next) {
      newHead = current;
      current = current.next;
    }
    this.tail = newHead;
    newHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    let node = this.get(index);
    node.value = value;
    return node;
  }
  print() {
    let returnArray = [];
    for (let i = 0; i < this.length; i++) {
      returnArray.push(this.get(i).value);
    }
    return returnArray;
  }
}

let list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
// console.log(list.unshift(0));
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.get(3));
// console.log(list.print());
console.log(list.set(2, 55555));
console.log(list.print());
