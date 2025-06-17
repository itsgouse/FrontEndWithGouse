
## Understanding the Heap Data Structure

A **Heap** is a specialized tree-based data structure that satisfies the **heap property**. It is a crucial implementation for **Priority Queues**.

Despite being tree-based, heaps are almost always implemented as an array, taking advantage of the specific "shape" property of a heap to map tree nodes to array indices efficiently.

### Key Characteristics:

1.  **Heap Property:** Defines the relationship between a parent node and its children. There are two main types:
    * **Min-Heap:** For every node, its value is less than or equal to the values of its children. The smallest element is always at the root.
    * **Max-Heap:** For every node, its value is greater than or equal to the values of its children. The largest element is always at the root.
    * *(Note: There is no ordering among sibling nodes.)*

2.  **Shape Property:** A heap must always be a **complete binary tree**.
    * A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes at the last level are as far left as possible.
    * This property ensures that the tree is relatively balanced and allows for efficient array representation.

### Analogy:

Imagine a hierarchical corporate structure where:
* **Min-Heap:** The person at any level (parent) always earns less or the same as their direct reports (children). The lowest earner is always the CEO (root).
* **Max-Heap:** The person at any level (parent) always earns more or the same as their direct reports (children). The highest earner is always the CEO (root).

---

## Array Representation of a Heap

The complete binary tree nature of a heap allows it to be stored efficiently in a simple array without using explicit pointers.

* The **root** is at index `0`.
* For a node at index `i`:
    * Its **left child** is at index `2 * i + 1`.
    * Its **right child** is at index `2 * i + 2`.
    * Its **parent** is at index `floor((i - 1) / 2)`.

This representation is incredibly memory-efficient because it doesn't require storing pointers for `left`, `right`, and `parent`.

**Example (Max-Heap visualized as array):**

```
Array: [100, 80, 90, 50, 70, 60]

Tree Visualization:
          100 (idx 0)
         /   \
    80(idx 1)   90(idx 2)
   /  \       /
50(idx 3) 70(idx 4) 60(idx 5)
```

---

## Core Heap Operations

The primary operations on a heap involve maintaining the heap property after an insertion or deletion. These are often referred to as `heapifyUp` (or `bubbleUp`) and `heapifyDown` (or `bubbleDown`).

1.  **`insert(value)` (or `add(value)`):**
    * Add the new `value` to the next available position in the array (at the end).
    * Perform `heapifyUp` (or `bubbleUp`): Compare the new element with its parent. If it violates the heap property (e.g., in a Min-Heap, child is smaller than parent), swap them. Continue this process up the tree until the heap property is restored or the root is reached.

2.  **`extractMin/Max()` (or `remove()`):**
    * The minimum/maximum element is always at the root (`items[0]`).
    * Swap the root element with the last element in the heap.
    * Remove the last element (which was the original root).
    * Perform `heapifyDown` (or `bubbleDown`): Compare the new root with its children. If it violates the heap property, swap it with its smaller child (for Min-Heap) or larger child (for Max-Heap). Continue this process down the tree until the heap property is restored or a leaf node is reached.

3.  **`peek()` (or `getMin/getMax()`):**
    * Return the root element (`items[0]`) without removing it.

4.  **`buildHeap(array)`:**
    * Converts an arbitrary array into a heap.
    * The most efficient way is to start from the last non-leaf node (parent of the last element) and apply `heapifyDown` upwards to the root.

---

## Min-Heap Implementation in JavaScript

We'll implement a Min-Heap, as it's commonly used for Priority Queues.

```javascript
/**
 * Represents a Min-Heap data structure.
 * Implemented using an array.
 */
class MinHeap {
    constructor() {
        this.heap = []; // The array to store heap elements
    }

    /**
     * Gets the number of elements in the heap.
     * Time Complexity: O(1)
     */
    size() {
        return this.heap.length;
    }

    /**
     * Checks if the heap is empty.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.heap.length === 0;
    }

    /**
     * Returns the minimum element (root) without removing it.
     * Time Complexity: O(1)
     */
    peek() {
        if (this.isEmpty()) {
            return null; // Or throw error
        }
        return this.heap[0];
    }

    // --- Helper Methods for Index Calculation ---
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    hasParent(i) { return this.getParentIndex(i) >= 0; }
    hasLeftChild(i) { return this.getLeftChildIndex(i) < this.size(); }
    hasRightChild(i) { return this.getRightChildIndex(i) < this.size(); }

    getParent(i) { return this.heap[this.getParentIndex(i)]; }
    getLeftChild(i) { return this.heap[this.getLeftChildIndex(i)]; }
    getRightChild(i) { return this.heap[this.getRightChildIndex(i)]; }

    // --- Swap Helper ---
    swap(indexOne, indexTwo) {
        [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
    }

    /**
     * Inserts a new value into the heap.
     * Time Complexity: O(log N) - N is number of elements
     */
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(); // Restore heap property by bubbling up the new element
        console.log(`Inserted: ${value}. Heap: [${this.heap}]`);
    }

    /**
     * Removes and returns the minimum element from the heap.
     * Time Complexity: O(log N)
     */
    extractMin() {
        if (this.isEmpty()) {
            return null; // Or throw error
        }
        if (this.size() === 1) {
            const min = this.heap.pop();
            console.log(`Extracted: ${min}. Heap is now empty.`);
            return min;
        }

        const min = this.heap[0]; // The root is the min element
        this.heap[0] = this.heap.pop(); // Move the last element to the root
        this.heapifyDown(); // Restore heap property by bubbling down the new root
        console.log(`Extracted: ${min}. Heap: [${this.heap}]`);
        return min;
    }

    /**
     * Restores the heap property by moving an element up the tree.
     * Called after insertion.
     * Time Complexity: O(log N)
     */
    heapifyUp() {
        let currentIndex = this.size() - 1; // Start from the newly added element

        // While the current node has a parent AND current node is smaller than its parent
        while (this.hasParent(currentIndex) && this.getParent(currentIndex) > this.heap[currentIndex]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex); // Move up to the parent's position
        }
    }

    /**
     * Restores the heap property by moving an element down the tree.
     * Called after extraction (removal of root).
     * Time Complexity: O(log N)
     */
    heapifyDown() {
        let currentIndex = 0; // Start from the root (where the swapped element is)

        // While the current node has at least one child (left child is always present if it has children)
        while (this.hasLeftChild(currentIndex)) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);

            // If there's a right child and it's smaller than the left child
            if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)) {
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }

            // If the current node is already smaller than or equal to its smallest child, we're done
            if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerChildIndex);
            }
            currentIndex = smallerChildIndex; // Move down to the smaller child's position
        }
    }

    /**
     * Builds a heap from an unsorted array.
     * Time Complexity: O(N) - surprisingly, not O(N log N) for building.
     */
    buildHeap(array) {
        this.heap = [...array];
        // Start from the last non-leaf node and heapifyDown upwards to the root
        // The last non-leaf node is at (size/2 - 1) for 0-indexed array
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
            let currentIndex = i;
            while (this.hasLeftChild(currentIndex)) {
                let smallerChildIndex = this.getLeftChildIndex(currentIndex);
                if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)) {
                    smallerChildIndex = this.getRightChildIndex(currentIndex);
                }
                if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
                    break;
                } else {
                    this.swap(currentIndex, smallerChildIndex);
                }
                currentIndex = smallerChildIndex;
            }
        }
        console.log(`Heap built from array. Result: [${this.heap}]`);
    }

    printHeap() {
        if (this.isEmpty()) {
            console.log("Heap is empty.");
        } else {
            console.log(`Heap elements (array form): [${this.heap}]`);
        }
    }
}

// --- Usage Example ---
console.log("--- Initializing Min-Heap ---");
const minHeap = new MinHeap();
console.log(`Is heap empty? ${minHeap.isEmpty()}`); // true

console.log("\n--- Inserting Elements ---");
minHeap.insert(10);
minHeap.insert(4);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(12);
// Heap should be something like: [2, 4, 12, 20, 10, 15] (exact structure depends on insertions)

console.log("\n--- Peeking ---");
console.log(`Min element: ${minHeap.peek()}`); // Should be 2

console.log("\n--- Extracting Min Elements ---");
minHeap.extractMin(); // Extracts 2
minHeap.extractMin(); // Extracts 4
minHeap.extractMin(); // Extracts 10

console.log("\n--- Current Heap State ---");
minHeap.printHeap(); // Expected: [12, 15, 20] (or some valid permutation)

console.log("\n--- Building Heap from Array ---");
const unsortedArray = [50, 30, 20, 100, 10, 40, 60];
const newMinHeap = new MinHeap();
newMinHeap.buildHeap(unsortedArray); // Will print the array representation of the heap
console.log(`Min element after build: ${newMinHeap.peek()}`); // Should be 10
newMinHeap.extractMin(); // Extracts 10
newMinHeap.extractMin(); // Extracts 20
```

---

## Time Complexity of Heap Operations:

* **`peek()`:** $O(1)$
* **`insert()`:** $O(\log N)$
* **`extractMin/Max()`:** $O(\log N)$
* **`buildHeap()` from an array:** $O(N)$ (This is a common interview trick question; it's not $N \log N$)

Where $N$ is the number of elements in the heap.

---

## Advantages of Heaps:

* **Efficient Priority Queue Implementation:** Provides $O(\log N)$ time for `insert` and `extractMin/Max`, which is optimal for many priority-based scenarios.
* **Heap Sort:** An efficient sorting algorithm with $O(N \log N)$ time complexity.
* **Space Efficient:** When implemented as an array, it's space-efficient as it doesn't require extra space for pointers.

## Disadvantages of Heaps:

* **Accessing Arbitrary Elements:** Unlike arrays, accessing elements by index (other than the root) or searching for an arbitrary element is not efficient ($O(N)$).
* **Not a full sorting mechanism:** While the root is the min/max, the rest of the array is not fully sorted.
* **Cache Performance:** Array-based heaps can sometimes have poorer cache performance compared to tree-based structures (though generally good due to contiguous allocation).

---

## Common Approaches and Use Cases for Heaps

1.  **Priority Queues:** This is the most common and direct application. When you need to process elements based on their priority (e.g., shortest job first, event scheduling, Dijkstra's algorithm).
2.  **Heap Sort:** An in-place comparison-based sorting algorithm.
3.  **Finding K-th Smallest/Largest Element:** Heaps can find the $k$-th smallest/largest element efficiently (e.g., maintain a min-heap of size `k` for largest `k` elements, or max-heap for smallest `k` elements).
4.  **Median of a Stream:** Maintain two heaps (a max-heap for the lower half and a min-heap for the upper half) to find the median efficiently as elements are added.
5.  **Graph Algorithms:** Used in Dijkstra's shortest path algorithm and Prim's minimum spanning tree algorithm to efficiently select the next edge/vertex.
6.  **External Sorting:** For datasets too large to fit in memory.

---

## Top 15 LeetCode Questions Involving Heaps

These questions effectively demonstrate when and how to leverage heaps for optimal solutions. Many of them can also be solved with sorting or other techniques, but heaps offer an efficient approach.

1.  **Kth Largest Element in an Array**
    * **Description:** Find the $k$-th largest element in an unsorted array.
    * **Concept:** Use a Min-Heap of size `k`. Iterate through array, adding elements. If heap size exceeds `k`, remove the minimum. The root of the heap will be the $k$-th largest element.
    * **Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

2.  **K Closest Points to Origin**
    * **Description:** Given an array of `points` and an integer `k`, return the `k` closest points to the origin `(0, 0)`.
    * **Concept:** Use a Max-Heap to store `k` points, ordered by their distance from origin. If a new point is closer than the max in the heap, remove max and insert new.
    * **Link:** [https://leetcode.com/problems/k-closest-points-to-origin/](https://leetcode.com/problems/k-closest-points-to-origin/)

3.  **Top K Frequent Elements**
    * **Description:** Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
    * **Concept:** First, count frequencies (using a Map/Object). Then, use a Min-Heap of size `k` to store (frequency, number) pairs, ordered by frequency.
    * **Link:** [https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)

4.  **Merge K Sorted Lists**
    * **Description:** You are given an array of `k` linked-lists `lists`, each sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
    * **Concept:** Use a Min-Heap to store the current node from each list. Continuously extract the minimum, add it to the result, and insert the next node from that list into the heap.
    * **Link:** [https://leetcode.com/problems/merge-k-sorted-lists/](https://leetcode.com/problems/merge-k-sorted-lists/)

5.  **Find Median from Data Stream**
    * **Description:** Design a data structure that supports adding new numbers and finding the median of all the numbers added so far.
    * **Concept:** Use two heaps: a Max-Heap for the lower half of numbers and a Min-Heap for the upper half. Keep their sizes balanced.
    * **Link:** [https://leetcode.com/problems/find-median-from-data-stream/](https://leetcode.com/problems/find-median-from-data-stream/)

6.  **Last Stone Weight**
    * **Description:** You are given an array of integers `stones` where `stones[i]` is the weight of the `i`-th stone. In each turn, we choose the two heaviest stones and smash them. Return the weight of the last remaining stone.
    * **Concept:** Use a Max-Heap to quickly get the two largest stones.
    * **Link:** [https://leetcode.com/problems/last-stone-weight/](https://leetcode.com/problems/last-stone-weight/)

7.  **Hand of Straights**
    * **Description:** Given an integer array `hand` of cards, and an integer `groupSize`. Return `true` if you can arrange every card in `hand` into groups of `groupSize` consecutive cards.
    * **Concept:** Use a Min-Heap (or sorted map) to keep cards sorted and pick the smallest available card for a group.
    * **Link:** [https://leetcode.com/problems/hand-of-straights/](https://leetcode.com/problems/hand-of-straights/)

8.  **Reorganize String**
    * **Description:** Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same.
    * **Concept:** Use a Max-Heap to store (frequency, character) pairs. Greedily pick the two most frequent characters.
    * **Link:** [https://leetcode.com/problems/reorganize-string/](https://leetcode.com/problems/reorganize-string/)

9.  **Ugly Number II**
    * **Description:** An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer `n`, return the `n`-th ugly number.
    * **Concept:** Use a Min-Heap to generate ugly numbers by multiplying existing ugly numbers by 2, 3, and 5, avoiding duplicates.
    * **Link:** [https://leetcode.com/problems/ugly-number-ii/](https://leetcode.com/problems/ugly-number-ii/)

10. **Kth Smallest Element in a Sorted Matrix**
    * **Description:** Given an `n x n` matrix where each of the rows and columns are sorted in ascending order, return the `k`-th smallest element in the matrix.
    * **Concept:** Similar to merging K sorted lists. Use a Min-Heap storing `[value, row, col]` tuples.
    * **Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

11. **Super Ugly Number**
    * **Description:** A super ugly number is a positive integer whose prime factors are in the array `primes`. Given integers `n` and an array of integers `primes`, return the `n`-th super ugly number.
    * **Concept:** Extension of Ugly Number II, using a min-heap to manage multiplications by a given set of primes.
    * **Link:** [https://leetcode.com/problems/super-ugly-number/](https://leetcode.com/problems/super-ugly-number/)

12. **The K Weakest Rows in a Matrix**
    * **Description:** You are given an `m x n` binary matrix `mat`. A row `i` is weaker than a row `j` if `sum(mat[i]) < sum(mat[j])` or `(sum(mat[i]) == sum(mat[j]) and i < j)`. Return the indices of the `k` weakest rows in the matrix ordered from weakest to strongest.
    * **Concept:** Calculate strength for each row, then use a Max-Heap of size `k` to store `[strength, index]` pairs.
    * **Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)

13. **Minimum Cost to Connect Sticks**
    * **Description:** You have some sticks with positive integer lengths. You can connect two sticks of lengths `x` and `y` into one stick of length `x + y`. The cost of this connection is `x + y`. Return the minimum cost to connect all the sticks into one stick.
    * **Concept:** Use a Min-Heap to repeatedly extract the two smallest sticks, sum them, and insert the sum back into the heap.
    * **Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)

14. **Process Tasks Using Servers**
    * **Description:** You are given `n` servers and `m` tasks. Servers have weights and are available at certain times. Tasks have processing times. Assign tasks to servers prioritizing by weight, then by index.
    * **Concept:** Often involves two heaps: one for available servers (min-heap by weight then index) and one for busy servers (min-heap by finish time).
    * **Link:** [https://leetcode.com/problems/process-tasks-using-servers/](https://leetcode.com/problems/process-tasks-using-servers/)

15. **Task Scheduler**
    * **Description:** Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks can be done in any order. Each task takes one unit of time. There is a non-negative integer `n` that represents the cooldown period between two same tasks. Return the least number of units of time the CPU will take to finish all the given tasks.
    * **Concept:** Use a Max-Heap to manage task frequencies and a queue (or custom tracking) to handle the cooldown.
    * **Link:** [https://leetcode.com/problems/task-scheduler/](https://leetcode.com/problems/task-scheduler/)

---

Heaps are a versatile data structure, especially when prioritizing elements or needing quick access to the minimum/maximum. Their array-based implementation makes them efficient in both time and space.