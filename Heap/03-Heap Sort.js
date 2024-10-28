function heapSort(arr) {
    let n = arr.length;

    // Step 1: Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    for (let i = n - 1; i >= 0; i--) {
        // Move the current root (max element) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Helper function to maintain the max-heap property
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child index
    let right = 2 * i + 2; // Right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted array:", heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
