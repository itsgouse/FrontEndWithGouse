
## Understanding the Linked List Data Structure

A **Linked List** is a linear data structure, similar to an array, that consists of a sequence of *nodes*. However, unlike arrays, which store elements in contiguous memory locations, linked list elements are not stored at contiguous locations. Instead, each element (node) stores a reference (or "pointer") to the next element in the sequence.

### Key Concepts:

* **Node:** The fundamental building block of a linked list. Each node typically contains:
    * **Data:** The actual value or information stored in the node.
    * **Next Pointer (or Reference):** A reference to the next node in the sequence. For the last node, this pointer is usually `null`.
* **Head:** A pointer to the first node in the linked list. If the list is empty, the `head` is `null`.
* **Tail (optional but common):** A pointer to the last node in the linked list, useful for efficient appending.

### Analogy:

Imagine a scavenger hunt where each clue (node) tells you where to find the *next* clue (next pointer), until you reach the final treasure (the last node pointing to `null`). You can't just jump to the 5th clue; you have to follow the path from the start.

### Linked List vs. Array:

| Feature           | Array                                      | Linked List                                      |
| :---------------- | :----------------------------------------- | :----------------------------------------------- |
| **Memory** | Contiguous memory locations                | Scattered memory locations                       |
| **Access** | Direct access (by index) - $O(1)$         | Sequential access (traverse from head) - $O(N)$  |
| **Insertion/Deletion** | Costly ($O(N)$) as elements shift       | Efficient ($O(1)$) if node is found, $O(N)$ for search |
| **Size** | Fixed or dynamically resized (costly)      | Dynamic, grows/shrinks easily without reallocation |

---

## Types of Linked Lists

Linked lists come in several variations, each with slightly different properties and use cases:

1.  ### Singly Linked List (SLL)
    * **Description:** The most basic type. Each node points to the *next* node in the sequence. Traversal is only possible in one direction (forward).
    * **Node Structure:** `data | next`
    * **Diagram:** `Head -> [Data|Next] -> [Data|Next] -> [Data|null]`

2.  ### Doubly Linked List (DLL)
    * **Description:** Each node has two pointers: one pointing to the *next* node and another pointing to the *previous* node. This allows for bidirectional traversal (forward and backward).
    * **Node Structure:** `prev | data | next`
    * **Diagram:** `Head <-> [Prev|Data|Next] <-> [Prev|Data|Next] <-> [Prev|Data|null]`
    * **Advantages:** Easier insertion/deletion (if you have a reference to the node) and reverse traversal.
    * **Disadvantages:** Requires more memory per node (for the `prev` pointer) and slightly more complex logic for operations.

3.  ### Circular Linked List (CLL)
    * **Description:** A linked list where the last node's `next` pointer points back to the `head` node, forming a circle. It can be singly or doubly linked.
    * **Diagram (Singly Circular):** `Head -> [Data|Next] -> ... -> [Data|Next] ---`
        `^---------------------------------------------------------|`
    * **Advantages:** Can traverse the entire list from any node, useful for continuous looping applications (e.g., round-robin scheduling).
    * **Disadvantages:** Requires careful handling of termination conditions for traversal to avoid infinite loops.

---

## Singly Linked List Implementation in JavaScript

Let's implement a `SinglyLinkedList` with common operations.

### 1. Node Class

First, we define the `Node` class.

```javascript
/**
 * Represents a single node in a linked list.
 */
class Node {
    constructor(data) {
        this.data = data; // The actual value stored in the node
        this.next = null; // A pointer to the next node in the list, initially null
    }
}
```

### 2. SinglyLinkedList Class

Now, the `SinglyLinkedList` class, which manages the nodes.

```javascript
/**
 * Implements a Singly Linked List data structure.
 */
class SinglyLinkedList {
    constructor() {
        this.head = null; // The first node in the list
        this.tail = null; // The last node in the list (for O(1) append)
        this.size = 0;    // The number of nodes in the list
    }

    // --- Basic Operations ---

    /**
     * Checks if the linked list is empty.
     * @returns {boolean} True if the list is empty, false otherwise.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Returns the number of nodes in the linked list.
     * @returns {number} The current size of the list.
     * Time Complexity: O(1)
     */
    getSize() {
        return this.size;
    }

    /**
     * Adds a new node to the end (tail) of the linked list.
     * @param {*} data The data to be stored in the new node.
     * Time Complexity: O(1) (with a tail pointer)
     */
    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Link current tail to new node
            this.tail = newNode;      // Update tail to new node
        }
        this.size++;
        console.log(`Appended: ${data}`);
    }

    /**
     * Adds a new node to the beginning (head) of the linked list.
     * @param {*} data The data to be stored in the new node.
     * Time Complexity: O(1)
     */
    prepend(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; // Link new node to current head
            this.head = newNode;      // Update head to new node
        }
        this.size++;
        console.log(`Prepended: ${data}`);
    }

    /**
     * Inserts a new node at a specific index in the linked list.
     * @param {*} data The data to be stored in the new node.
     * @param {number} index The position to insert the new node (0-based).
     * @returns {boolean} True if insertion was successful, false otherwise.
     * Time Complexity: O(N) in worst case (traverse to index)
     */
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index for insertion.");
            return false;
        }
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        if (index === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        // Traverse to the node *before* the insertion point
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next; // New node points to the node currently at 'index'
        current.next = newNode;      // Previous node points to new node
        this.size++;
        console.log(`Inserted ${data} at index ${index}`);
        return true;
    }

    /**
     * Removes the node at a specific index from the linked list.
     * @param {number} index The position of the node to remove (0-based).
     * @returns {*} The data of the removed node, or null if invalid index.
     * Time Complexity: O(N) in worst case (traverse to index)
     */
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index for removal.");
            return null;
        }

        let removedData;
        if (index === 0) {
            removedData = this.head.data;
            this.head = this.head.next; // New head is the second node
            if (this.size === 1) { // If it was the only node
                this.tail = null;
            }
        } else {
            let current = this.head;
            // Traverse to the node *before* the node to be removed
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            removedData = current.next.data;
            current.next = current.next.next; // Skip the node to be removed
            if (current.next === null) { // If the removed node was the tail
                this.tail = current;
            }
        }
        this.size--;
        console.log(`Removed ${removedData} from index ${index}`);
        return removedData;
    }

    /**
     * Removes the first occurrence of a specific data value from the linked list.
     * @param {*} data The data value to remove.
     * @returns {*} The data of the removed node, or null if not found.
     * Time Complexity: O(N) in worst case (traverse entire list)
     */
    removeValue(data) {
        if (this.isEmpty()) {
            console.log("List is empty. Cannot remove.");
            return null;
        }

        if (this.head.data === data) { // If head needs to be removed
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
            this.size--;
            console.log(`Removed first occurrence of value: ${data}`);
            return data;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) { // Found the node to remove
            const removedData = current.next.data;
            current.next = current.next.next;
            if (current.next === null) { // If the removed node was the tail
                this.tail = current;
            }
            this.size--;
            console.log(`Removed first occurrence of value: ${removedData}`);
            return removedData;
        }

        console.log(`Value ${data} not found in the list.`);
        return null;
    }

    /**
     * Searches for a node containing specific data.
     * @param {*} data The data to search for.
     * @returns {number} The index of the first occurrence of the data, or -1 if not found.
     * Time Complexity: O(N) in worst case (traverse entire list)
     */
    search(data) {
        if (this.isEmpty()) {
            console.log("List is empty. Cannot search.");
            return -1;
        }

        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                console.log(`Found ${data} at index ${index}.`);
                return index;
            }
            current = current.next;
            index++;
        }
        console.log(`Value ${data} not found.`);
        return -1;
    }

    /**
     * Prints all elements of the linked list from head to tail.
     * Time Complexity: O(N) (traverse entire list)
     */
    printList() {
        if (this.isEmpty()) {
            console.log("List is empty.");
            return;
        }
        let current = this.head;
        let listStr = "";
        while (current) {
            listStr += current.data + " -> ";
            current = current.next;
        }
        console.log("Linked List:", listStr + "null");
    }

    /**
     * Clears the entire linked list.
     * Time Complexity: O(1)
     */
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        console.log("Linked list cleared.");
    }
}

// --- Usage Example ---
console.log("--- Initializing Linked List ---");
const myList = new SinglyLinkedList();
console.log(`Is list empty? ${myList.isEmpty()}`); // true
console.log(`List size: ${myList.getSize()}`);    // 0

console.log("\n--- Appending Elements ---");
myList.append(10);  // List: 10 -> null
myList.append(20);  // List: 10 -> 20 -> null
myList.append(30);  // List: 10 -> 20 -> 30 -> null
myList.printList(); // Linked List: 10 -> 20 -> 30 -> null
console.log(`List size: ${myList.getSize()}`); // 3

console.log("\n--- Prepending Element ---");
myList.prepend(5);  // List: 5 -> 10 -> 20 -> 30 -> null
myList.printList(); // Linked List: 5 -> 10 -> 20 -> 30 -> null
console.log(`List size: ${myList.getSize()}`); // 4

console.log("\n--- Inserting at Specific Index ---");
myList.insertAt(15, 2); // Insert 15 at index 2 (after 10)
myList.printList(); // Linked List: 5 -> 10 -> 15 -> 20 -> 30 -> null
myList.insertAt(0, 0);  // Insert 0 at index 0 (new head)
myList.printList(); // Linked List: 0 -> 5 -> 10 -> 15 -> 20 -> 30 -> null
myList.insertAt(100, 7); // Insert 100 at the end (invalid index for direct append but handled)
myList.printList(); // Linked List: 0 -> 5 -> 10 -> 15 -> 20 -> 30 -> 100 -> null
console.log(`List size: ${myList.getSize()}`); // 7

console.log("\n--- Searching for Elements ---");
myList.search(15); // Found 15 at index 3.
myList.search(99); // Value 99 not found.

console.log("\n--- Removing Elements by Index ---");
myList.removeAt(0); // Remove head (0)
myList.printList(); // Linked List: 5 -> 10 -> 15 -> 20 -> 30 -> 100 -> null
myList.removeAt(4); // Remove 30
myList.printList(); // Linked List: 5 -> 10 -> 15 -> 20 -> 100 -> null
console.log(`List size: ${myList.getSize()}`); // 5

console.log("\n--- Removing Elements by Value ---");
myList.removeValue(10); // Remove 10
myList.printList(); // Linked List: 5 -> 15 -> 20 -> 100 -> null
myList.removeValue(99); // Value 99 not found.
myList.printList(); // Linked List: 5 -> 15 -> 20 -> 100 -> null
console.log(`List size: ${myList.getSize()}`); // 4

console.log("\n--- Clearing List ---");
myList.clear();
myList.printList(); // List is empty.
console.log(`Is list empty? ${myList.isEmpty()}`); // true
```

---

## Advantages of Linked Lists:

* **Dynamic Size:** Can grow or shrink in size as needed during runtime without needing to reallocate or copy elements.
* **Efficient Insertions/Deletions:** If you have a reference to the node before the insertion/deletion point, operations take $O(1)$ time. This is a significant advantage over arrays where elements might need to be shifted.
* **Flexible Memory Allocation:** Nodes can be stored anywhere in memory, not necessarily contiguous.

## Disadvantages of Linked Lists:

* **No Random Access:** To access the $k$-th element, you must traverse from the `head`, leading to $O(N)$ time complexity.
* **More Memory:** Each node requires extra memory to store the `next` (and `prev` for doubly linked lists) pointer.
* **Slower Traversal:** Due to scattered memory, cache performance can be worse than arrays.

---

## Common Approaches and Use Cases for Linked Lists

Linked lists are particularly well-suited for problems where:

1.  **Frequent Insertions/Deletions:** When you need to add or remove elements often, especially from the middle of a collection.
2.  **Unknown Size:** When the number of elements is not known beforehand or changes frequently.
3.  **Implementing Other Data Structures:**
    * **Stacks:** Can be efficiently implemented using a linked list (prepend as push, remove head as pop).
    * **Queues:** Can be efficiently implemented using a linked list (append as enqueue, remove head as dequeue).
    * **Hash Maps (Separate Chaining):** Linked lists are often used internally in hash tables to handle collisions (multiple keys mapping to the same bucket).
    * **LRU Cache:** Often implemented using a Doubly Linked List combined with a Hash Map.
4.  **Polynomial Representation:** Each term in a polynomial can be a node.
5.  **Undo/Redo Functionality:** A doubly linked list can easily support moving forward and backward through actions.

---

## Top 15 LeetCode Questions Involving Linked Lists

These problems cover various techniques and concepts for working with linked lists. For most, you'll be given the `head` of a `ListNode` (which is analogous to our `Node` class).

1.  **Reverse Linked List**
    * **Description:** Given the `head` of a singly linked list, reverse the list, and return the reversed list.
    * **Concept:** Iterative or recursive reversal, tracking `prev`, `curr`, `next` pointers.
    * **Link:** [https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)

2.  **Merge Two Sorted Lists**
    * **Description:** You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    * **Concept:** Iterative or recursive merging, comparing node values.
    * **Link:** [https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

3.  **Remove Duplicates from Sorted List**
    * **Description:** Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
    * **Concept:** Traversal and skipping duplicate nodes.
    * **Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

4.  **Linked List Cycle**
    * **Description:** Given the `head` of a linked list, return `true` if there is a cycle in the linked list. Otherwise, return `false`.
    * **Concept:** Floyd's Cycle-Finding Algorithm (slow and fast pointers).
    * **Link:** [https://leetcode.com/problems/linked-list-cycle/](https://leetcode.com/problems/linked-list-cycle/)

5.  **Remove Nth Node From End of List**
    * **Description:** Given the `head` of a linked list, remove the $n$-th node from the end of the list and return its head.
    * **Concept:** Two pointers (one advanced `n` steps ahead), dummy node.
    * **Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

6.  **Middle of the Linked List**
    * **Description:** Given the `head` of a singly linked list, return the middle node of the list. If there are two middle nodes, return the second middle node.
    * **Concept:** Slow and fast pointers.
    * **Link:** [https://leetcode.com/problems/middle-of-the-linked-list/](https://leetcode.com/problems/middle-of-the-linked-list/)

7.  **Delete Node in a Linked List**
    * **Description:** Write a function to delete a node in a singly linked list. You will not be given access to the `head` of the list, instead, you will be given access to the node to be deleted directly.
    * **Concept:** Copy data from the next node and skip the next node.
    * **Link:** [https://leetcode.com/problems/delete-node-in-a-linked-list/](https://leetcode.com/problems/delete-node-in-a-linked-list/)

8.  **Palindrome Linked List**
    * **Description:** Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.
    * **Concept:** Find middle, reverse second half, compare.
    * **Link:** [https://leetcode.com/problems/palindrome-linked-list/](https://leetcode.com/problems/palindrome-linked-list/)

9.  **Remove Linked List Elements**
    * **Description:** Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new `head`.
    * **Concept:** Iteration, handling head removal, dummy node.
    * **Link:** [https://leetcode.com/problems/remove-linked-list-elements/](https://leetcode.com/problems/remove-linked-list-elements/)

10. **Intersection of Two Linked Lists**
    * **Description:** Given the heads of two singly linked lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.
    * **Concept:** Two pointers, adjusting for length differences.
    * **Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/](https://leetcode.com/problems/intersection-of-two-linked-lists/)

11. **Odd Even Linked List**
    * **Description:** Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
    * **Concept:** Separating odd and even parts and then merging.
    * **Link:** [https://leetcode.com/problems/odd-even-linked-list/](https://leetcode.com/problems/odd-even-linked-list/)

12. **Reorder List**
    * **Description:** You are given the `head` of a singly linked list. Reorder the list to be in the following form: $L_0 \to L_n \to L_1 \to L_{n-1} \to L_2 \to L_{n-2} \to \ldots$
    * **Concept:** Find middle, reverse second half, then merge.
    * **Link:** [https://leetcode.com/problems/reorder-list/](https://leetcode.com/problems/reorder-list/)

13. **Flatten a Multilevel Doubly Linked List** (Requires understanding DLL)
    * **Description:** You are given a doubly linked list which has nodes containing a `child` pointer, in addition to `next` and `prev`. Flatten the list.
    * **Concept:** DFS-like traversal, adjusting pointers for flattening.
    * **Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)

14. **Rotate List**
    * **Description:** Given the `head` of a linked list, rotate the list to the right by `k` places.
    * **Concept:** Form a circle, find the new head/tail, break the circle.
    * **Link:** [https://leetcode.com/problems/rotate-list/](https://leetcode.com/problems/rotate-list/)

15. **Swap Nodes in Pairs**
    * **Description:** Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).
    * **Concept:** Iterative or recursive swapping of pointers.
    * **Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/](https://leetcode.com/problems/swap-nodes-in-pairs/)

---

Understanding linked lists is foundational for more complex data structures and algorithms. Pay close attention to pointer manipulation, especially when dealing with insertions, deletions, and reversals!