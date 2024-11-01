// An AVL tree is a type of self-balancing binary search tree (BST).
//Named after its inventors Adelson-Velsky and Landis, 
//an AVL tree maintains balance by ensuring that the heights of the left and right subtrees of any node differ by at most one.
// This balance condition keeps the tree height small and guarantees efficient operations.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1; // Initialize height for balancing
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Utility to get the height of a node
    height(node) {
      return node ? node.height : 0;
    }
  
    // Calculate balance factor of a node
    getBalanceFactor(node) {
      return node ? this.height(node.left) - this.height(node.right) : 0;
    }
  
    // Right rotate subtree rooted with y
    rightRotate(y) {
      const x = y.left;
      const T2 = x.right;
  
      // Perform rotation
      x.right = y;
      y.left = T2;
  
      // Update heights
      y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
      x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
  
      // Return new root
      return x;
    }
  
    // Left rotate subtree rooted with x
    leftRotate(x) {
      const y = x.right;
      const T2 = y.left;
  
      // Perform rotation
      y.left = x;
      x.right = T2;
  
      // Update heights
      x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
      y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
  
      // Return new root
      return y;
    }
  
    // Insert a node and perform balancing
    insert(node, value) {
      // Standard BST insert
      if (!node) return new Node(value);
  
      if (value < node.value) node.left = this.insert(node.left, value);
      else if (value > node.value) node.right = this.insert(node.right, value);
      else return node; // No duplicates allowed
  
      // Update height of this ancestor node
      node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  
      // Get the balance factor to check if this node became unbalanced
      const balanceFactor = this.getBalanceFactor(node);
  
      // Balance the tree
      // Left Left Case
      if (balanceFactor > 1 && value < node.left.value) return this.rightRotate(node);
  
      // Right Right Case
      if (balanceFactor < -1 && value > node.right.value) return this.leftRotate(node);
  
      // Left Right Case
      if (balanceFactor > 1 && value > node.left.value) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
  
      // Right Left Case
      if (balanceFactor < -1 && value < node.right.value) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
  
      return node; // Return the (unchanged) node pointer
    }
  
    // Public insert function to handle root update
    insertValue(value) {
      this.root = this.insert(this.root, value);
    }
  
    // Helper function to print the tree in-order for testing
    inOrderTraversal(node) {
      if (node) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Usage 
  const avlTree = new AVLTree();
  avlTree.insertValue(10);
  avlTree.insertValue(20);
  avlTree.insertValue(5);
  avlTree.insertValue(6);
  avlTree.insertValue(15);
  
  console.log("In-order traversal of the AVL Tree:");
  avlTree.inOrderTraversal(avlTree.root); 
  