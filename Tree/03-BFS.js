//  1-create a queue 
//  2-Enqueue the root node 
//  3-As long as a node exist in the queue
//      -Dequeue the node from the front
//      -Read the node's value
//      -Enqueue the node's left child if it exist
//      -Enqueue the node's right child if it exist

class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {  // if there is no left node,insert on left
                root.left = newNode
            } else {   //else recursively call the function with change in argument
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {  // if there is no rigth node,insert on right
                root.right = newNode
            } else {   //else recursively call the function with change in argument
                this.insertNode(root.right, newNode)
            }
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
}

const bst = new BinarySearchTree()
console.log("Tree is empty ?", bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(" ");
bst.levelOrder()
console.log("Tree is empty ?", bst.isEmpty());

