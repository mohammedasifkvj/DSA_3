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

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return value
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
// DFS tree traveersal
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
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
bst.preOrder(bst.root)
console.log(" ");
bst.inOrder(bst.root)
console.log(" ");
bst.postOrder(bst.root)
console.log("Tree is empty ?", bst.isEmpty());

