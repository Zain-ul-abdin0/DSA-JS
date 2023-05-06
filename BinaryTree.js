class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(node, this.root);
    }
  }

  insertNode(node, root) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(node, root.left);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(node, root.right);
      }
    }
  }
  isEmpty() {
    return this.root == null;
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
        if(root.value===value){
            return true;
        }else if(root.value>value){
            return this.search(root.left, value);
        }
        else if(root.value<value){
            return  this.search(root.right, value);
        }
        return false
    }
  }
  preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);        
    }
  }
  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
  }
  postOrder(root){
    if(root){
        this.inOrder(root.left);
        this.inOrder(root.right);
        console.log(root.value);
    }
  }
  min(root){
    if(!root.left){
        return root.value
    }
    else{
        return this.min(root.left)
    }
  }
  
  max(root){
    if(!root.right){
        return root.value
    }
    else{
        return this.max(root.right)
    }
  }
  btsSearch(root){
    let queue =[]
    queue.push(this.root)
    while(queue.length){
        let curr= queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left    )
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
  }
}

const bts = new BinarySearchTree();

bts.insert(10);
bts.insert(5);
bts.insert(15);
bts.insert(3);
bts.insert(7);
// bts.preOrder(bts.root)

// bts.btsSearch(bts.root)

console.log(bts.max(bts.root)); 
