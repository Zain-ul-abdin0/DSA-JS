class Stack {
    constructor(){
    this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

let stack = new Stack();

stack.push(12)
stack.push(13)
stack.push(15)
stack.pop()
stack.print()