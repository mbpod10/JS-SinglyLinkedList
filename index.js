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
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let next = this.get(index);
    previous.next = newNode;
    newNode.next = next;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let deleteNode = this.get(index);
    let previous = this.get(index - 1);
    let nextNode = this.get(index + 1);
    previous.next = nextNode;
    this.length--;
    return deleteNode;
  }
  indexOf(value) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.get(i).value === value) return counter;
      else counter++;
    }
    return false;
  }
  includes(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.get(i).value === value) {
        return true;
      }
    }
    return false;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
  frequency() {
    if (this.length === 0) return undefined;
    let returnObj = {};
    for (let i = 0; i < this.length; i++) {
      returnObj[this.get(i).value] = (returnObj[this.get(i).value] || 0) + 1;
    }
    return returnObj;
  }
  toString() {
    let returnArray = [];
    for (let i = 0; i < this.length; i++) {
      if (typeof this.get(i).value === "string") {
        returnArray.push(this.get(i).value);
      } else {
        returnArray.push(this.get(i).value.toString());
      }
    }
    return returnArray;
  }
  mostFreq() {
    let returnObj = this.frequency();
    let sortArray = [];
    for (const [key, value] of Object.entries(returnObj)) {
      sortArray.push([key, value]);
    }
    let newSortArray = sortArray.sort((element, index) => {
      return element[1] - index[1];
    });
    let length = newSortArray.length;
    if (newSortArray[length - 1][1] === newSortArray[length - 2][1]) {
      return "Two Or More Elements With Same Frequency";
    } else {
      return newSortArray[length - 1][0];
    }
  }
  switch(index1, index2) {
    let node1 = this.get(index1);
    let node1Prev = this.get(index1 - 1);
    let node1Next = this.get(index1 + 1);

    let node2 = this.get(index2);
    let node2Prev = this.get(index2 - 1);
    let node2Next = this.get(index2 + 1);

    node2Prev.next = node1;
    node1.next = node2Next;

    node1Prev.next = node2;
    node2.next = node1Next;
    return this;
  }
  count(value) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.get(i).value === value) {
        counter++;
      }
    }
    if (counter > 0) return counter;
    return false;
  }
  tailToHead() {
    let newTail = this.get(this.length - 2);
    let newHead = this.get(this.length - 1);
    newHead.next = this.head;
    this.head = newHead;
    newTail.next = null;
    this.tail = newTail;
    return this;
  }
}

let list = new SinglyLinkedList();
