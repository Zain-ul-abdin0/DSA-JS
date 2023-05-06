class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentlength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    if (this.capacity === this.currentlength) {
      return true;
    }
  }
  isEmpty() {
    return this.currentlength === 0;
  }

  enqueue(element) {
    if (!this.isFull) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentlength += 1;
      if (this.front === -1) {
        this.rear = this.front;
      }
    }
  }
  dequeue() {
    if (this.isEmpty) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentlength -= 1;
    if (this.isEmpty) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty) {
      console.log("Queue empty");
    } else {
      console.log(this.items);
    }
  }
}

const queue = new CircularQueue(5);

queue.enqueue(12);
queue.enqueue(12);
queue.enqueue(12);

queue.print();
