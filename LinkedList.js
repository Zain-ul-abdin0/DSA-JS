// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // insertAt(element, location)
//   // removeFrom(location)
//   // removeElement(element)

//   // Helper Methods

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }

//   size_Of_List() {
//     return this.size;
//   }
//   // PrintList
// }

// let linked = new LinkedList();

// linked.prepend(10);

// linked.prepend(20);

// console.log(linked.head);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  size_of_list() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

  insert(value, index) {
    if (index < 0 || index >= this.size) {
      return;
    } else {
      let curr = this.head;
      let node = new Node(value);

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return;
    } else {
      let curr = this.head;
      let temp;
      for (let i = 0; i < index - 2; i++) {
        curr = curr.next;
      }
      temp = curr.next.next;
      curr.next = temp;
      this.size++;
    }
  }
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  search(value) {
    if (this.isEmpty()) {
      return;
    } else {
      let current = this.head;
      while (current) {
        if (current.value == value) {
          console.log("Searched value found");
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
  reverse() {
    if (this.isEmpty()) {
      return;
    } else {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }
  prependTail(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  appendTail(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
}

let linkedList = new LinkedList();

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.append(40);
linkedList.insert(99, 2);
linkedList.insert(44, 2);
linkedList.removeFrom(3);
console.log(linkedList.search(10));
linkedList.print();
linkedList.reverse();
linkedList.print();
