
## Understanding the Queue Data Structure

A **Queue** is a linear data structure that follows a particular order in which operations are performed. The order is **FIFO (First In, First Out)** or **FCFS (First Come, First Served)**. Think of a line of people at a ticket counter: the first person to join the line is the first person to get served.

### Key Characteristics:

* **FIFO/FCFS Principle:** The first element added to the queue is the first one to be removed.
* **Restricted Access:** Elements are added only to one end (typically called the "rear" or "tail") and removed only from the other end (typically called the "front" or "head").

### Analogy:

* **Waiting Line:** People waiting for a bus, at a supermarket checkout, or customer service.
* **Print Spooler:** Documents waiting to be printed are processed in the order they were sent.
* **Task Scheduling:** Operating systems use queues to manage tasks waiting for the CPU.

---

## Queue Implementation in JavaScript

Similar to stacks, JavaScript doesn't have a built-in `Queue` class, but it can be efficiently implemented using an `Array`. The `push()` method can add to the rear, and `shift()` can remove from the front.

### Implementation using an Array:

```javascript
class Queue {
    constructor() {
        this.items = []; // The array to store queue elements
    }

    // Basic Operations:

    // 1. enqueue(element): Adds an element to the rear of the queue.
    enqueue(element) {
        this.items.push(element);
        console.log(`${element} enqueued.`);
    }

    // 2. dequeue(): Removes and returns the element from the front of the queue.
    //               Returns undefined if the queue is empty.
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return "Underflow"; // Or throw an error
        }
        const dequeuedElement = this.items.shift(); // shift() removes from the beginning
        console.log(`${dequeuedElement} dequeued.`);
        return dequeuedElement;
    }

    // 3. front(): Returns the element at the front of the queue without removing it.
    //             Returns undefined if the queue is empty.
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty. No element at front.");
            return "Queue is empty";
        }
        const frontElement = this.items[0];
        console.log(`Front element is: ${frontElement}`);
        return frontElement;
    }

    // 4. isEmpty(): Checks if the queue is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // 5. size(): Returns the number of elements in the queue.
    size() {
        return this.items.length;
    }

    // 6. printQueue(): (Helper method) Prints the elements of the queue.
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        console.log("Queue elements (front to rear):", this.items.join(" "));
    }

    // 7. clear(): Empties the queue.
    clear() {
        this.items = [];
        console.log("Queue cleared.");
    }
}

// --- Usage Example ---
console.log("--- Initializing Queue ---");
const myQueue = new Queue();
console.log(`Is queue empty? ${myQueue.isEmpty()}`); // true

console.log("\n--- Enqueuing Elements ---");
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.printQueue(); // Queue elements (front to rear): 10 20 30

console.log("\n--- Checking Front Element ---");
myQueue.front(); // Front element is: 10

console.log("\n--- Dequeuing Elements ---");
myQueue.dequeue(); // 10 dequeued.
myQueue.printQueue(); // Queue elements (front to rear): 20 30
myQueue.dequeue(); // 20 dequeued.
myQueue.printQueue(); // Queue elements (front to rear): 30

console.log("\n--- Checking Size and Emptiness ---");
console.log(`Queue size: ${myQueue.size()}`); // 1
console.log(`Is queue empty? ${myQueue.isEmpty()}`); // false

console.log("\n--- Dequeuing Last Element ---");
myQueue.dequeue(); // 30 dequeued.
myQueue.printQueue(); // Queue is empty.
console.log(`Is queue empty? ${myQueue.isEmpty()}`); // true

console.log("\n--- Attempting to Dequeue from Empty Queue ---");
myQueue.dequeue(); // Queue is empty. Cannot dequeue.
myQueue.front(); // Queue is empty. No element at front.

console.log("\n--- Clearing Queue ---");
myQueue.enqueue(5);
myQueue.enqueue(15);
myQueue.printQueue();
myQueue.clear();
myQueue.printQueue();
```

**Important Note on Array-based Implementation Performance:**
While simple, using `Array.prototype.shift()` for `dequeue` can be inefficient for very large queues. When `shift()` is called, all subsequent elements in the array need to be re-indexed, which can lead to $O(N)$ time complexity in the worst case (where $N$ is the number of elements). For competitive programming, this might be acceptable for smaller `N`, but for very large datasets, a more optimized implementation (e.g., using a linked list or circular array) might be preferred.

### Basic Operations (Summary)

1.  **`enqueue(element)`:** Adds `element` to the rear of the queue.
    * **Time Complexity:** $O(1)$ (constant time) using `Array.prototype.push()`.
2.  **`dequeue()`:** Removes and returns the element from the front of the queue.
    * **Time Complexity:** $O(N)$ (linear time) using `Array.prototype.shift()` in JavaScript. If implemented with a linked list or optimized array, it can be $O(1)$.
3.  **`front()`:** Returns the element at the front of the queue without removing it.
    * **Time Complexity:** $O(1)$ (constant time).
4.  **`isEmpty()`:** Checks if the queue is empty.
    * **Time Complexity:** $O(1)$ (constant time).
5.  **`size()`:** Returns the number of elements in the queue.
    * **Time Complexity:** $O(1)$ (constant time).

---

## Types of Queues

While the basic queue is FIFO, there are specialized types that adapt its behavior for specific use cases:

1.  **Simple Queue (Linear Queue):**
    * This is the standard FIFO queue we've discussed. Elements are added at the rear and removed from the front.
    * **Limitation:** After a series of `dequeue` operations, the front part of the array might become empty, leading to "wasted" space. If you `enqueue` again, elements are added to the end, even if there's space at the beginning. This is often solved by using a **circular queue**.

2.  **Circular Queue:**
    * Also known as a Ring Buffer. It treats the array as a circular structure. When the rear reaches the end of the array, it wraps around to the beginning (if there's space).
    * This efficiently utilizes space and avoids the "wasted space" issue of a simple queue.
    * Requires managing `front` and `rear` pointers carefully and handling the "full" and "empty" conditions.

    ```javascript
    // Conceptual idea of Circular Queue (More complex to implement fully than simple array queue)
    class CircularQueue {
        constructor(capacity) {
            this.items = new Array(capacity);
            this.capacity = capacity;
            this.currentSize = 0;
            this.front = -1; // Index of the front element
            this.rear = -1;  // Index of the rear element
        }

        isFull() {
            return this.currentSize === this.capacity;
        }

        isEmpty() {
            return this.currentSize === 0;
        }

        enqueue(element) {
            if (this.isFull()) {
                console.log("Queue is full.");
                return false;
            }
            if (this.isEmpty()) {
                this.front = 0;
            }
            this.rear = (this.rear + 1) % this.capacity; // Circular increment
            this.items[this.rear] = element;
            this.currentSize++;
            console.log(`${element} enqueued.`);
            return true;
        }

        dequeue() {
            if (this.isEmpty()) {
                console.log("Queue is empty. Cannot dequeue.");
                return "Underflow";
            }
            const dequeuedElement = this.items[this.front];
            this.items[this.front] = undefined; // Optional: clear reference
            this.front = (this.front + 1) % this.capacity; // Circular increment
            this.currentSize--;
            if (this.isEmpty()) { // Reset pointers if queue becomes empty
                this.front = -1;
                this.rear = -1;
            }
            console.log(`${dequeuedElement} dequeued.`);
            return dequeuedElement;
        }

        front() { /* ... similar logic ... */ }
        // ... other methods
    }
    ```

3.  **Priority Queue:**
    * Unlike a regular queue, elements are not removed purely based on their arrival order. Instead, each element has a "priority," and the element with the highest priority is served first. If priorities are the same, FIFO usually applies.
    * Often implemented using a **heap** data structure for efficient `enqueue` and `dequeue` (getting the highest priority element).
    * **Use Cases:** Task scheduling in operating systems (high-priority tasks get CPU first), event simulation, Dijkstra's algorithm.

    ```javascript
    // Conceptual Priority Queue (Often implemented with a Min/Max Heap)
    class PriorityQueue {
        constructor() {
            this.elements = []; // Could be an array acting as a min-heap
        }

        enqueue(element, priority) {
            // Logic to insert element based on priority, maintaining heap property
            this.elements.push({ element, priority });
            this.elements.sort((a, b) => a.priority - b.priority); // Simple sort for demo
            console.log(`${element} (priority ${priority}) enqueued.`);
        }

        dequeue() {
            if (this.isEmpty()) {
                console.log("Priority Queue is empty.");
                return "Underflow";
            }
            // Logic to remove and return highest priority element (root of heap)
            const dequeued = this.elements.shift(); // Remove from front after sorting
            console.log(`${dequeued.element} (priority ${dequeued.priority}) dequeued.`);
            return dequeued.element;
        }

        isEmpty() {
            return this.elements.length === 0;
        }
        // ... other methods
    }
    ```

4.  **Double-Ended Queue (Deque / pronounced "deck"):**
    * A more flexible queue where elements can be added or removed from **both** the front and the rear.
    * Combines the functionalities of both a stack and a queue.
    * **Operations:** `addFront`, `addRear`, `removeFront`, `removeRear`, `peekFront`, `peekRear`, `isEmpty`, `size`.
    * **Use Cases:** Implementing other data structures (like stacks or queues), finding sliding window maximums/minimums, checking palindromes.
    * In JavaScript, you can simulate a Deque efficiently using an array with `push()`, `pop()`, `unshift()`, and `shift()`.

    ```javascript
    // Deque (Double-Ended Queue) using Array
    class Deque {
        constructor() {
            this.items = [];
        }

        addFront(element) {
            this.items.unshift(element); // Add to beginning
            console.log(`${element} added to front.`);
        }

        addRear(element) {
            this.items.push(element); // Add to end
            console.log(`${element} added to rear.`);
        }

        removeFront() {
            if (this.isEmpty()) return "Underflow";
            const removed = this.items.shift();
            console.log(`${removed} removed from front.`);
            return removed;
        }

        removeRear() {
            if (this.isEmpty()) return "Underflow";
            const removed = this.items.pop();
            console.log(`${removed} removed from rear.`);
            return removed;
        }

        peekFront() { /* ... */ }
        peekRear() { /* ... */ }
        isEmpty() { return this.items.length === 0; }
        size() { return this.items.length; }
        printDeque() { console.log("Deque elements:", this.items.join(" ")); }
    }
    ```

---

## Common Approaches and Use Cases for Queues

Queues are predominantly used in problems involving:

1.  **Breadth-First Search (BFS):**
    * The most common application. When traversing a tree or graph level by level, a queue is used to store nodes to visit. You `enqueue` neighbors, and `dequeue` nodes to process them.

2.  **Task Scheduling/Processing:**
    * Any scenario where tasks need to be processed in the order they arrive (e.g., CPU scheduling, print queues, message queues).

3.  **Caching:**
    * LRU (Least Recently Used) cache implementations often use a queue (or a deque) to keep track of element access order.

4.  **Simulations:**
    * Modeling real-world scenarios where entities wait in line (e.g., customer service lines, manufacturing processes).

5.  **Level Order Traversal of Trees:**
    * Equivalent to BFS for trees.

6.  **Finding Shortest Path (Unweighted Graphs):**
    * BFS naturally finds the shortest path in unweighted graphs because it explores all nodes at a given depth before moving to the next depth.

---

## Top 15 LeetCode Questions Involving Queues (Basic to Medium)

These questions cover fundamental queue applications, especially in graph/tree traversal, and specific patterns that leverage the FIFO property.

1.  **Number of Islands**
    * **Description:** Given an `m x n` 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
    * **Concept:** BFS to explore connected components (islands).
    * **Link:** [https://leetcode.com/problems/number-of-islands/](https://leetcode.com/problems/number-of-islands/)

2.  **Rotting Oranges**
    * **Description:** You are given an `m x n` grid where each cell can have one of three values: `0` representing an empty cell, `1` representing a fresh orange, or `2` representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no fresh oranges remain. If this is impossible, return -1.
    * **Concept:** Multi-source BFS (all rotten oranges are sources).
    * **Link:** [https://leetcode.com/problems/rotting-oranges/](https://leetcode.com/problems/rotting-oranges/)

3.  **Walls and Gates** (Often found on platforms other than LeetCode directly, but a classic BFS grid problem)
    * **Description:** You are given an `m x n` `rooms` grid. Each room is either a wall (-1), a gate (0), or an empty room (INF). Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should remain INF.
    * **Concept:** Multi-source BFS.
    * **Link:** (Similar problems are available on LeetCode; exact link might vary) e.g., similar to "01 Matrix" [https://leetcode.com/problems/01-matrix/](https://leetcode.com/problems/01-matrix/)

4.  **Binary Tree Level Order Traversal**
    * **Description:** Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
    * **Concept:** BFS on a tree.
    * **Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)

5.  **Zigzag Level Order Traversal**
    * **Description:** Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and so on).
    * **Concept:** BFS with a flag to reverse array for alternating levels.
    * **Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

6.  **Cousins in Binary Tree**
    * **Description:** Given the `root` of a binary tree and two nodes `x` and `y`, return `true` if they are cousins, `false` otherwise. Two nodes are cousins if they have the same depth with different parents.
    * **Concept:** BFS to track depth and parent for each node.
    * **Link:** [https://leetcode.com/problems/cousins-in-binary-tree/](https://leetcode.com/problems/cousins-in-binary-tree/)

7.  **Open the Lock**
    * **Description:** You have a lock with 4 wheels. Each wheel has 10 slots '0'-'9'. The wheels can be rotated. You are given a list of `deadends` and a `target` combination. Find the minimum total number of turns to open the lock.
    * **Concept:** BFS to find the shortest path in a graph where nodes are lock combinations.
    * **Link:** [https://leetcode.com/problems/open-the-lock/](https://leetcode.com/problems/open-the-lock/)

8.  **Perfect Squares**
    * **Description:** Given an integer `n`, return the least number of perfect square numbers that sum to `n`.
    * **Concept:** BFS where states are numbers, and transitions are subtracting a perfect square.
    * **Link:** [https://leetcode.com/problems/perfect-squares/](https://leetcode.com/problems/perfect-squares/)

9.  **01 Matrix**
    * **Description:** Given a `m x n` binary matrix `mat`, return the distance of the nearest `0` for each cell. The distance between two adjacent cells is 1.
    * **Concept:** Multi-source BFS starting from all '0's.
    * **Link:** [https://leetcode.com/problems/01-matrix/](https://leetcode.com/problems/01-matrix/)

10. **Course Schedule**
    * **Description:** There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return `true` if you can finish all courses, otherwise `false`.
    * **Concept:** Topological sort using BFS (Kahn's algorithm). Detects cycles.
    * **Link:** [https://leetcode.com/problems/course-schedule/](https://leetcode.com/problems/course-schedule/)

11. **Find the Celebrity** (This is an interactive problem, but the concept often involves a queue-like elimination)
    * **Description:** Suppose you are at a party with `n` people labeled from `0` to `n - 1`. There is a secret celebrity whom everyone else knows, but they don't know anyone else. Find the celebrity.
    * **Concept:** Can be solved with a stack or queue-like elimination process.
    * **Link:** [https://leetcode.com/problems/find-the-celebrity/](https://leetcode.com/problems/find-the-celebrity/)

12. **Sliding Window Maximum** (Deque is primarily used here)
    * **Description:** You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Return the max sliding window.
    * **Concept:** Monotonic Deque.
    * **Link:** [https://leetcode.com/problems/sliding-window-maximum/](https://leetcode.com/problems/sliding-window-maximum/)

13. **Design Circular Deque**
    * **Description:** Design your implementation of the circular double-ended queue (deque).
    * **Concept:** Direct implementation of a circular deque.
    * **Link:** [https://leetcode.com/problems/design-circular-deque/](https://leetcode.com/problems/design-circular-deque/)

14. **Shortest Path in Binary Matrix**
    * **Description:** Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. A clear path is a path from the top-left cell to the bottom-right cell such that all visited cells are `0` and are 8-directionally connected.
    * **Concept:** BFS to find the shortest path in an unweighted grid.
    * **Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

15. **Pacific Atlantic Water Flow**
    * **Description:** Given an `m x n` matrix `heights` representing the height of each unit cell in a continent, find a list of grid coordinates `(row, col)` where water can flow to both the Pacific and Atlantic oceans.
    * **Concept:** Multi-source BFS/DFS starting from the ocean borders.
    * **Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/](https://leetcode.com/problems/pacific-atlantic-water-flow/)

---

Queues are fundamental for any kind of level-by-level processing or managing tasks in a strict order. Mastering BFS and its variations, often powered by queues, is crucial for graph and tree problems.