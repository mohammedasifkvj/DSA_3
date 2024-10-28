class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Get parent, left child, and right child indices
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap two elements in the heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert a new value into the heap
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    // Restore heap property by bubbling up
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = this.getParentIndex(index);
        if (this.heap[index] >= this.heap[parentIndex]) break;
        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    // Remove and return the minimum element (root)
    extractMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }
  
    // Restore heap property by bubbling down
    bubbleDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (
          this.getRightChildIndex(index) < this.heap.length &&
          this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
        ) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index] <= this.heap[smallerChildIndex]) break;
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  }
  
  // Usage Example:
  const heap = new MinHeap();
  heap.insert(3);
  heap.insert(10);
  heap.insert(5);
  heap.insert(1);
  
  console.log(heap.extractMin()); // Output: 1
  console.log(heap.extractMin()); // Output: 3
  