
## What is a Tree (General Concept)?

In computer science, a **Tree** is a hierarchical data structure composed of nodes connected by edges. It simulates a hierarchical tree structure with a *root value* and subtrees of children with a parent node, represented as a set of linked nodes.

### Key Tree Terminology:

* **Node:** The fundamental unit of a tree, containing data and references/pointers to its children.
* **Root:** The topmost node in the tree. It has no parent. Every tree has exactly one root node.
* **Edge:** The link or connection between two nodes.
* **Parent:** A node that has one or more child nodes.
* **Child:** A node that has a parent node.
* **Sibling:** Nodes that share the same parent.
* **Leaf (or External Node):** A node that has no children.
* **Internal Node:** A node that has at least one child.
* **Ancestors:** All nodes on the path from the root to a node.
* **Descendants:** All nodes on any path from a node to a leaf.
* **Subtree:** A portion of a tree that can be considered a tree itself, starting from any node.
* **Depth of a Node:** The number of edges from the root node to that node. The root node has a depth of 0.
* **Height of a Node:** The number of edges on the longest path from the node to a leaf. A leaf node has a height of 0.
* **Height of a Tree:** The height of its root node.

---

## What is a Binary Tree?

A **Binary Tree** is a special type of tree in which each node can have at most two children. These children are conventionally referred to as the **left child** and the **right child**.

### Why "Binary"?

The "binary" in "binary tree" refers to the fact that each node has a maximum of two children (0, 1, or 2).

### Key Properties of Binary Trees:

* **Unordered Children:** Unlike some other tree types (like Binary Search Trees), there's no inherent order between the left and right children based on their values.
* **Recursive Definition:** A binary tree is either empty, or it consists of a root node, a left binary subtree, and a right binary subtree.

---

## Types of Binary Trees

Binary trees can be categorized based on their structural properties:

1.  ### Full Binary Tree
    * Every node has either **zero or two children**. No node has only one child.
    * **Example:**
        ```
            A
           / \
          B   C
         / \
        D   E
        ```
        (C, D, E are leaves)

2.  ### Complete Binary Tree
    * Every level, except possibly the last, is completely filled, and all nodes at the last level are as far left as possible.
    * **Example:**
        ```
            A
           / \
          B   C
         / \ /
        D  E F
        ```
        (Level 0: A; Level 1: B, C; Level 2: D, E, F, with F being the rightmost node at this level)

3.  ### Perfect Binary Tree
    * Every internal node has **exactly two children**, and all leaf nodes are at the **same level (same depth)**.
    * A perfect binary tree is both a Full and a Complete binary tree.
    * **Example:**
        ```
            A
           / \
          B   C
         / \ / \
        D  E F  G
        ```

4.  ### Degenerate (or Skewed) Tree
    * Each parent node has **only one child**. It essentially becomes a linked list.
    * **Example (Left Skewed):**
        ```
            A
           /
          B
         /
        C
        ```
5.  ### Balanced Binary Tree (General Concept)
    * A binary tree where the heights of the left and right subtrees of any node differ by at most 1. This prevents the tree from becoming skewed and ensures efficient operations.
    * **Examples of self-balancing binary search trees (which are also binary trees):** AVL Trees, Red-Black Trees. These automatically adjust their structure to maintain balance during insertions and deletions.

---

## Binary Tree Representation/Implementation in JavaScript

In JavaScript, a binary tree is typically represented using objects for nodes, where each node object contains its `value` and references to its `left` and `right` children.

### 1. Node Class

```javascript
/**
 * Represents a single node in a Binary Tree.
 */
class TreeNode {
    constructor(val) {
        this.val = val;     // The value/data stored in the node
        this.left = null;   // Reference to the left child node
        this.right = null;  // Reference to the right child node
    }
}
```

### 2. Basic Binary Tree Class (with simple insertion)

This example demonstrates a very basic insertion. For a proper Binary Search Tree (BST), insertion would involve comparing values to decide left/right placement. This simple `insert` just shows how to build a tree structure.

```javascript
/**
 * Implements a basic Binary Tree structure.
 * Note: This `insert` method is for demonstration of structure creation,
 * not a self-balancing or BST-specific insertion.
 */
class BinaryTree {
    constructor() {
        this.root = null; // The root node of the tree
    }

    /**
     * Helper to create a tree from an array (BFS level-order input).
     * `null` in array signifies no child.
     * @param {Array} arr The array representing the tree in level order.
     * @returns {TreeNode} The root of the constructed tree.
     */
    buildTreeFromArray(arr) {
        if (!arr || arr.length === 0 || arr[0] === null) {
            this.root = null;
            return null;
        }

        this.root = new TreeNode(arr[0]);
        const queue = [this.root];
        let i = 1;

        while (queue.length > 0 && i < arr.length) {
            const current = queue.shift();

            // Left child
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;

            // Right child
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
        console.log("Tree built from array:", arr.filter(x => x !== null).join(', '));
        return this.root;
    }

    // You would typically have more complex insertion methods for specific tree types (e.g., BST)
    // For a simple demo of building, buildTreeFromArray is more direct.
}

// --- Usage Example of Node and Basic Tree Structure ---
console.log("--- Building a simple Binary Tree ---");
const tree = new BinaryTree();

// Manually constructing a small tree
//      1
//     / \
//    2   3
//   / \
//  4   5
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log("Tree root value:", tree.root.val); // Output: 1
console.log("Tree left child value:", tree.root.left.val); // Output: 2
console.log("Tree right child value:", tree.root.right.val); // Output: 3

console.log("\n--- Building a tree using the helper function ---");
const anotherTree = new BinaryTree();
const rootFromArray = anotherTree.buildTreeFromArray([1, 2, 3, 4, 5, null, 6]);
// Visual:
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
console.log("Root of array-built tree:", rootFromArray.val);
```

---

## Tree Traversals (The Core of Binary Tree Operations)

Traversing a tree means visiting each node in a systematic way. There are two main categories:

1.  **Depth-First Search (DFS):** Explores as far as possible down each branch before backtracking.
    * **Pre-order Traversal:** Visit the **Root** first, then recursively traverse the **Left** subtree, then recursively traverse the **Right** subtree. (Root -> Left -> Right)
    * **In-order Traversal:** Recursively traverse the **Left** subtree, then visit the **Root**, then recursively traverse the **Right** subtree. (Left -> Root -> Right)
    * **Post-order Traversal:** Recursively traverse the **Left** subtree, then recursively traverse the **Right** subtree, then visit the **Root**. (Left -> Right -> Root)

2.  **Breadth-First Search (BFS) / Level-Order Traversal:** Explores the tree level by level.
    * Visit all nodes at the current level before moving to the next level. This typically uses a **Queue** data structure.

### JavaScript Implementation of Traversals:

```javascript
// Assume TreeNode class as defined above

/**
 * Performs Pre-order traversal (Root -> Left -> Right).
 * @param {TreeNode} node The current node to visit.
 * @param {Array} result An array to store the traversal order.
 */
function preorderTraversal(node, result = []) {
    if (node === null) {
        return;
    }
    result.push(node.val);      // Visit Root
    preorderTraversal(node.left, result);  // Traverse Left
    preorderTraversal(node.right, result); // Traverse Right
    return result;
}

/**
 * Performs In-order traversal (Left -> Root -> Right).
 * @param {TreeNode} node The current node to visit.
 * @param {Array} result An array to store the traversal order.
 */
function inorderTraversal(node, result = []) {
    if (node === null) {
        return;
    }
    inorderTraversal(node.left, result);   // Traverse Left
    result.push(node.val);       // Visit Root
    inorderTraversal(node.right, result);  // Traverse Right
    return result;
}

/**
 * Performs Post-order traversal (Left -> Right -> Root).
 * @param {TreeNode} node The current node to visit.
 * @param {Array} result An array to store the traversal order.
 */
function postorderTraversal(node, result = []) {
    if (node === null) {
        return;
    }
    postorderTraversal(node.left, result);  // Traverse Left
    postorderTraversal(node.right, result); // Traverse Right
    result.push(node.val);       // Visit Root
    return result;
}

/**
 * Performs Level-order (BFS) traversal.
 * @param {TreeNode} root The root node of the tree.
 * @returns {Array} An array storing the traversal order.
 */
function levelorderTraversal(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root]; // Use a queue for BFS

    while (queue.length > 0) {
        const current = queue.shift(); // Dequeue the front node
        result.push(current.val);      // Visit the current node

        if (current.left !== null) {
            queue.push(current.left);  // Enqueue left child
        }
        if (current.right !== null) {
            queue.push(current.right); // Enqueue right child
        }
    }
    return result;
}

// --- Usage Example of Traversals ---
console.log("\n--- Demonstrating Traversals ---");
// Re-using the manually built tree:
//      1
//     / \
//    2   3
//   / \
//  4   5
const treeRoot = tree.root;

console.log("Pre-order Traversal (Root, Left, Right):", preorderTraversal(treeRoot)); // Output: [1, 2, 4, 5, 3]
console.log("In-order Traversal (Left, Root, Right):", inorderTraversal(treeRoot));   // Output: [4, 2, 5, 1, 3]
console.log("Post-order Traversal (Left, Right, Root):", postorderTraversal(treeRoot)); // Output: [4, 5, 2, 3, 1]
console.log("Level-order Traversal (BFS):", levelorderTraversal(treeRoot)); // Output: [1, 2, 3, 4, 5]

const anotherTreeRoot = anotherTree.root;
console.log("\nLevel-order Traversal for second tree:", levelorderTraversal(anotherTreeRoot)); // Output: [1, 2, 3, 4, 5, 6]
```

---

## Common Approaches and Use Cases for Binary Trees

* **Hierarchical Data Representation:** Organizing data in a parent-child relationship (e.g., file systems, organization charts, XML/HTML document structure).
* **Efficient Searching and Sorting:** Binary Search Trees (a special type of binary tree) allow for very fast searching, insertion, and deletion of data ($O(\log N)$ average time complexity).
* **Expression Parsing:** Representing mathematical expressions where internal nodes are operators and leaf nodes are operands.
* **Decision Making:** Decision trees in machine learning.
* **Data Compression:** Huffman coding uses binary trees.
* **Heaps:** A specific type of complete binary tree used to implement Priority Queues.

---

## Top 15 LeetCode Questions on Binary Trees

These questions are foundational for understanding binary trees and practicing traversal, manipulation, and property calculations. They range from easy to medium difficulty.

1.  **Maximum Depth of Binary Tree**
    * **Description:** Given the `root` of a binary tree, return its maximum depth.
    * **Concept:** DFS (post-order or pre-order) or BFS.
    * **Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

2.  **Same Tree**
    * **Description:** Given the roots of two binary trees `p` and `q`, return `true` if they are structurally identical, and have the same node values, or `false` otherwise.
    * **Concept:** Recursive comparison (DFS).
    * **Link:** [https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)

3.  **Invert Binary Tree**
    * **Description:** Given the `root` of a binary tree, invert the tree, and return its root.
    * **Concept:** Recursion (swap left and right children).
    * **Link:** [https://leetcode.com/problems/invert-binary-tree/](https://leetcode.com/problems/invert-binary-tree/)

4.  **Symmetric Tree**
    * **Description:** Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
    * **Concept:** Recursive comparison of two subtrees (one left-to-right, one right-to-left).
    * **Link:** [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)

5.  **Binary Tree Inorder Traversal**
    * **Description:** Given the `root` of a binary tree, return the inorder traversal of its nodes' values.
    * **Concept:** Direct application of In-order DFS (recursive or iterative using a stack).
    * **Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/](https://leetcode.com/problems/binary-tree-inorder-traversal/)

6.  **Binary Tree Preorder Traversal**
    * **Description:** Given the `root` of a binary tree, return the preorder traversal of its nodes' values.
    * **Concept:** Direct application of Pre-order DFS (recursive or iterative using a stack).
    * **Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/](https://leetcode.com/problems/binary-tree-preorder-traversal/)

7.  **Binary Tree Postorder Traversal**
    * **Description:** Given the `root` of a binary tree, return the postorder traversal of its nodes' values.
    * **Concept:** Direct application of Post-order DFS (recursive or iterative using two stacks).
    * **Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/](https://leetcode.com/problems/binary-tree-postorder-traversal/)

8.  **Binary Tree Level Order Traversal**
    * **Description:** Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
    * **Concept:** BFS using a queue.
    * **Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)

9.  **Minimum Depth of Binary Tree**
    * **Description:** Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
    * **Concept:** BFS (first leaf found gives minimum depth) or DFS.
    * **Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

10. **Path Sum**
    * **Description:** Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.
    * **Concept:** DFS, backtracking.
    * **Link:** [https://leetcode.com/problems/path-sum/](https://leetcode.com/problems/path-sum/)

11. **Balanced Binary Tree**
    * **Description:** Given the `root` of a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
    * **Concept:** Recursion, calculating height and checking balance simultaneously.
    * **Link:** [https://leetcode.com/problems/balanced-binary-tree/](https://leetcode.com/problems/balanced-binary-tree/)

12. **Convert Sorted Array to Binary Search Tree** (Often involves BST properties, but good for general tree building)
    * **Description:** Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
    * **Concept:** Recursion, finding the middle element as root.
    * **Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

13. **Subtree of Another Tree**
    * **Description:** Given the roots of two binary trees `root` and `subRoot`, return `true` if `subRoot` is a subtree of `root`.
    * **Concept:** Compare trees recursively, potentially checking for sameness multiple times.
    * **Link:** [https://leetcode.com/problems/subtree-of-another-tree/](https://leetcode.com/problems/subtree-of-another-tree/)

14. **Lowest Common Ancestor of a Binary Tree**
    * **Description:** Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.
    * **Concept:** Recursion, checking for `p` or `q` in subtrees.
    * **Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

15. **Count Complete Tree Nodes**
    * **Description:** Given the `root` of a complete binary tree, return the number of nodes in the tree.
    * **Concept:** Optimized counting for complete trees (leveraging properties of complete trees), or simple DFS/BFS.
    * **Link:** [https://leetcode.com/problems/count-complete-tree-nodes/](https://leetcode.com/problems/count-complete-tree-nodes/)

---

Binary trees are a gateway to understanding more complex tree structures like Binary Search Trees (BSTs), Heaps, and Tries. Mastering their concepts and traversals is essential for a strong DSA foundation!