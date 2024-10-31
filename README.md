# Data Structures: Trees, Tries, Heaps, and Graphs
---------------------------------------------------
This repository contains implementations of fundamental data structures in JavaScript, designed for learning and practical application in various algorithmic problems. It includes Trees, Tries, Heaps, and Graphs, each with essential operations and example use cases.

## Table of Contents
--------------------
- [About the Repository](#about-the-repository)
- [Data Structures Implemented](#data-structures-implemented)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## About the Repository
-----------------------
This repository serves as a comprehensive resource for understanding and implementing the following data structures. Each data structure is implemented with common operations, test cases, and code examples for quick learning and reference.

## Data Structures Implemented
------------------------------
### 1. Tree
------------
- **Description**: A hierarchical data structure with nodes connected by edges, where each node has a value and children nodes.
- **Operations**: Insertion, Deletion, Traversal (In-Order, Pre-Order, Post-Order, Level-Order)
- **Types**:
  - Binary Tree
  - Binary Search Tree (BST)
  - AVL Tree (Self-balancing BST)

#-## 2. Trie (Prefix Tree)
-------------------------
- **Description**: A tree-like structure used for efficient storage and retrieval of strings, especially useful for prefix-based searching.
- **Operations**: Insertion, Search, Deletion, Auto-complete, Prefix search

### 3. Heap
-----------
- **Description**: A complete binary tree structure where elements follow the heap property (Max-Heap or Min-Heap).
- **Operations**: Insert, Delete, Peek, Extract-Max/Min
- **Types**:
  - Max-Heap
  - Min-Heap

### 4. Graph
-------------
- **Description**: A data structure consisting of nodes (vertices) and edges connecting them, suitable for modeling networks.
- **Operations**: Add Vertex, Add Edge, Remove Vertex, Remove Edge, Traversal (DFS, BFS), Shortest Path (Dijkstra's Algorithm)
- **Types**:
  - Directed Graph
  - Undirected Graph
  - Weighted Graph
  - Unweighted Graph

## Technologies Used
--------------------
- **Programming Language**: JavaScript (with Node.js for running examples)
- **Testing**: Jest or Mocha (for testing data structure functionalities)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammedasifkvj/DSA_3.git
   cd data-structures
   ```

2. **Install dependencies** (if required)
   ```bash
   npm install
   ```

## Usage

Each data structure is located in its own folder, with its class definition and associated methods. You can import and use these structures in your JavaScript projects.

```javascript
const BinarySearchTree = require('./Tree/BinarySearchTree');
const Heap = require('./Heap/MinHeap');
const Graph = require('./Graph/Graph');
```

## Examples

Here are some example use cases for each data structure:

1. **Binary Search Tree**
   ```javascript
   const bst = new BinarySearchTree();
   bst.insert(10);
   bst.insert(5);
   bst.insert(15);
   console.log(bst.search(10)); // true
   ```

2. **Trie**
   ```javascript
   const trie = new Trie();
   trie.insert("hello");
   trie.insert("helium");
   console.log(trie.search("hell")); // false
   console.log(trie.search("hello")); // true
   ```

3. **Min-Heap**
   ```javascript
   const minHeap = new MinHeap();
   minHeap.insert(3);
   minHeap.insert(10);
   minHeap.insert(1);
   console.log(minHeap.extractMin()); // 1
   ```

4. **Graph (Directed)**
   ```javascript
   const graph = new Graph();
   graph.addVertex('A');
   graph.addVertex('B');
   graph.addEdge('A', 'B');
   console.log(graph.bfs('A')); // ['A', 'B']
   ```
