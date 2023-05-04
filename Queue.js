class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
    isEmpty(){
        return this.queue.length === 0
    }
    peek(){
        if(!this.isEmpty){
            return this.queue[0]
        }
    return null;
    }
    size(){
        return this.queue.length
    }

    print(){
        console.log(this.queue.toString());
    }
}

let queue = new Queue();
queue.enqueue(23);
queue.enqueue(24);
queue.enqueue(25);
queue.dequeue()
queue.print();
