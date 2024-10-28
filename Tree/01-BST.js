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

    min(root){
        if(!root.left){
            return root.value  // base case for recursion
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value  // base case for recursion
        }else{
            return this.max(root.right)
        }
    }

// This is Breadth First Search
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

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }else{  // so this is the node value to be deleted
            if(!root.left && ! root.left){  // it is a leaf node(it has no child nodes)
                return null   // remove the node
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            } // so itn has left and right child nodes
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }


}

const bst = new BinarySearchTree()
console.log("Tree is empty ?", bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

bst.levelOrder()
console.log(" ");
bst.delete(15)
bst.levelOrder()


