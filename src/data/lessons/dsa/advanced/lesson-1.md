## 1. Recursion

**What is it?**
Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. It's about breaking down a complex problem into smaller, similar sub-problems until a simple "base case" is reached, which can be solved directly. The solutions to these base cases are then combined to solve the original problem.

**Key Components of a Recursive Solution:**
1.  **Base Case:** The condition that stops the recursion. Without a base case, the function would call itself indefinitely, leading to a stack overflow.
2.  **Recursive Step (or Recursive Call):** The part where the function calls itself, typically with a smaller or simpler version of the original problem.
3.  **Progression Towards Base Case:** Each recursive call must make progress towards the base case, ensuring termination.

**Analogy:**
Imagine you want to count the number of leaves on a tree. You could say: "Count the leaves on this branch, plus the leaves on that branch, plus the leaves on the other branch." You keep breaking it down until you get to a single leaf (your base case), which you know is 1. Then you add them all up.

**When to Use:**
* Problems that can be naturally divided into smaller, self-similar subproblems.
* Tree and Graph traversals (DFS).
* Parsing and language processing.

**Example (Factorial):**
Calculating $n!$ (n factorial): $n! = n \times (n-1)!$
Base case: $0! = 1$

```javascript
function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
```

### 15 LeetCode Questions for Recursion:

Many of these can also be solved iteratively, but recursion provides an elegant solution.

1.  **Reverse Linked List (Easy)**
    * **Concept:** Reverse a linked list recursively by moving the head to the end of the reversed tail.
    * **Link:** [https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)
2.  **Merge Two Sorted Lists (Easy)**
    * **Concept:** Recursively merge two sorted lists by comparing their heads and attaching the smaller one.
    * **Link:** [https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)
3.  **Maximum Depth of Binary Tree (Easy)**
    * **Concept:** The max depth is 1 + max(depth of left subtree, depth of right subtree). Base case: null node has depth 0.
    * **Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
4.  **Same Tree (Easy)**
    * **Concept:** Recursively check if left subtrees are same and right subtrees are same, and values are equal.
    * **Link:** [https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)
5.  **Invert Binary Tree (Easy)**
    * **Concept:** Recursively invert left and right subtrees, then swap them.
    * **Link:** [https://leetcode.com/problems/invert-binary-tree/](https://leetcode.com/problems/invert-binary-tree/)
6.  **Symmetric Tree (Easy)**
    * **Concept:** Define a helper function to check if two nodes are mirrors of each other.
    * **Link:** [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)
7.  **Path Sum (Easy)**
    * **Concept:** Recursively subtract the current node's value from the target sum as you traverse. Check if a leaf node is reached with a remaining sum of 0.
    * **Link:** [https://leetcode.com/problems/path-sum/](https://leetcode.com/problems/path-sum/)
8.  **Fibonacci Number (Easy)**
    * **Concept:** Classic recursion example, $F(n) = F(n-1) + F(n-2)$. (Note: often better with memoization/DP for efficiency).
    * **Link:** [https://leetcode.com/problems/fibonacci-number/](https://leetcode.com/problems/fibonacci-number/)
9.  **Climbing Stairs (Easy)**
    * **Concept:** Similar to Fibonacci. Number of ways to climb `n` stairs is ways to climb `n-1` plus ways to climb `n-2`.
    * **Link:** [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)
10. **Pow(x, n) (Medium)**
    * **Concept:** Implement $x^n$ recursively using $x^n = (x^{n/2})^2$. Handle positive, negative, and zero exponents.
    * **Link:** [https://leetcode.com/problems/powx-n/](https://leetcode.com/problems/powx-n/)
11. **Lowest Common Ancestor of a Binary Tree (Medium)**
    * **Concept:** Recursively search for `p` and `q` in left and right subtrees. LCA is found when `p` and `q` are in different subtrees or one is the current node.
    * **Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
12. **Validate Binary Search Tree (Medium)**
    * **Concept:** Recursively check if the current node's value is within a valid range (min/max bounds) determined by its ancestors.
    * **Link:** [https://leetcode.com/problems/validate-binary-search-tree/](https://leetcode.com/problems/validate-binary-search-tree/)
13. **Generate Parentheses (Medium)**
    * **Concept:** Use recursion to build valid combinations of parentheses by tracking open and close counts.
    * **Link:** [https://leetcode.com/problems/generate-parentheses/](https://leetcode.com/problems/generate-parentheses/)
14. **Populating Next Right Pointers in Each Node (Medium)**
    * **Concept:** Recursively connect nodes at the same level.
    * **Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
15. **Convert BST to Greater Tree (Medium)**
    * **Concept:** Perform a reverse in-order traversal (right-root-left) and accumulate the sum.
    * **Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/](https://leetcode.com/problems/convert-bst-to-greater-tree/)

---

## 2. Divide and Conquer

**What is it?**
Divide and Conquer is an algorithmic paradigm that involves three steps:
1.  **Divide:** Break the problem into smaller sub-problems of the same type.
2.  **Conquer:** Solve these sub-problems recursively. If the sub-problems are small enough (base cases), solve them directly.
3.  **Combine:** Combine the solutions of the sub-problems to get the solution to the original problem.

**Relationship with Recursion:**
Divide and Conquer algorithms are inherently recursive. The "conquer" step explicitly involves recursive calls to solve smaller instances of the problem.

**Analogy:**
Sorting a deck of cards.
* **Divide:** Split the deck into two halves.
* **Conquer:** Recursively sort each half.
* **Combine:** Merge the two sorted halves back into a single sorted deck. (This is Merge Sort).

**When to Use:**
* Problems that naturally break down into independent sub-problems.
* Often leads to $O(N \log N)$ or $O(\log N)$ time complexities for many problems.

**Example (Merge Sort - conceptual):**

To sort an array `arr`:
1.  **Divide:** Split `arr` into two halves `left_half` and `right_half`.
2.  **Conquer:** Recursively sort `left_half` and `right_half`.
3.  **Combine:** Merge the sorted `left_half` and `right_half` into a single sorted `arr`.

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) { // Base case
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf); // Conquer
    const sortedRight = mergeSort(rightHalf); // Conquer

    return merge(sortedLeft, sortedRight); // Combine
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Merge Sort:", mergeSort([38, 27, 43, 3, 9, 82, 10]));
// Output: [3, 9, 10, 27, 38, 43, 82]
```

### 15 LeetCode Questions for Divide and Conquer:

1.  **Merge Sort (Conceptual / Implementation - not a direct LeetCode problem, but applied)**
    * **Concept:** Implement the merge sort algorithm.
    * **Link:** (No direct problem, but essential to know for related problems)
2.  **Quick Sort (Conceptual / Implementation - not a direct LeetCode problem, but applied)**
    * **Concept:** Implement the quick sort algorithm.
    * **Link:** (No direct problem, but essential to know for related problems)
3.  **Binary Search (Easy)**
    * **Concept:** Divide the search space in half repeatedly.
    * **Link:** [https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)
4.  **Search a 2D Matrix II (Medium)**
    * **Concept:** Can be solved by applying a modified binary search or by starting from a corner and eliminating rows/columns.
    * **Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/](https://leetcode.com/problems/search-a-2d-matrix-ii/)
5.  **Majority Element (Easy)**
    * **Concept:** A divide and conquer approach can recursively find the majority element in sub-arrays.
    * **Link:** [https://leetcode.com/problems/majority-element/](https://leetcode.com/problems/majority-element/)
6.  **Sort List (Medium)**
    * **Concept:** Implement merge sort on a linked list.
    * **Link:** [https://leetcode.com/problems/sort-list/](https://leetcode.com/problems/sort-list/)
7.  **Count of Smaller Numbers After Self (Hard)**
    * **Concept:** Can be solved efficiently using a modified merge sort where counts are updated during the merge step.
    * **Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
8.  **Different Ways to Add Parentheses (Medium)**
    * **Concept:** Recursively split the expression at each operator, solve sub-expressions, then combine results.
    * **Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/](https://leetcode.com/problems/different-ways-to-add-parentheses/)
9.  **Construct Binary Tree from Preorder and Inorder Traversal (Medium)**
    * **Concept:** The first element in preorder is the root. Find it in inorder to determine left/right subtrees. Recursively build.
    * **Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
10. **Construct Binary Tree from Inorder and Postorder Traversal (Medium)**
    * **Concept:** Similar to above, but the last element in postorder is the root.
    * **Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
11. **Kth Smallest Element in a BST (Medium)**
    * **Concept:** In-order traversal of a BST gives sorted elements. Stop at the Kth element.
    * **Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
12. **Search in Rotated Sorted Array (Medium)**
    * **Concept:** A modified binary search to handle the rotation point.
    * **Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/](https://leetcode.com/problems/search-in-rotated-sorted-array/)
13. **Find Peak Element (Medium)**
    * **Concept:** Use binary search to find a peak.
    * **Link:** [https://leetcode.com/problems/find-peak-element/](https://leetcode.com/problems/find-peak-element/)
14. **Maximum Subarray (Easy/Medium depending on approach)**
    * **Concept:** While Kadane's algorithm is linear, a divide and conquer approach also exists. Find max subarray in left half, right half, and crossing the midpoint.
    * **Link:** [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)
15. **Expression Add Operators (Hard)**
    * **Concept:** Recursively explore all possible ways to insert binary operators (+, -, *) between digits of a string such that the expression evaluates to a target value.
    * **Link:** [https://leetcode.com/problems/expression-add-operators/](https://leetcode.com/problems/expression-add-operators/)

---

## 3. Greedy Algorithm

**What is it?**
A Greedy algorithm is an algorithmic paradigm that makes the *locally optimal* choice at each stage with the hope of finding a *globally optimal* solution. It never reconsiders its choices.

**Key Idea:**
At each step, choose the option that seems best *right now*, without considering future consequences. This "local optimum" doesn't always lead to a "global optimum," but for some specific problems, it does.

**Analogy:**
Imagine you're trying to make change with the fewest coins possible. At each step, you pick the largest coin you can without going over the remaining amount. This works perfectly for standard coin denominations. If you had weird denominations (e.g., 1, 3, 4 cents, and need 6 cents), a greedy approach (4, 1, 1 = 3 coins) would be worse than (3, 3 = 2 coins). This highlights that greedy algorithms don't always work.

**When to Use:**
* Optimization problems where a local optimum genuinely leads to a global optimum.
* Problems like activity selection, Huffman coding, minimum spanning trees (Prim's, Kruskal's), shortest path (Dijkstra's).

**Example (Activity Selection Problem):**
Given a set of activities, each with a start and finish time, select the maximum number of non-overlapping activities.
**Greedy Strategy:** Sort activities by their finish times. Always pick the activity that finishes earliest among the available ones.

```javascript
function activitySelection(activities) {
    // Sort activities by finish time
    activities.sort((a, b) => a.finish - b.finish);

    let selectedActivities = [];
    if (activities.length > 0) {
        selectedActivities.push(activities[0]);
        let lastFinishTime = activities[0].finish;

        // Iterate through remaining activities
        for (let i = 1; i < activities.length; i++) {
            // If the current activity starts after or at the same time the last selected one finishes
            if (activities[i].start >= lastFinishTime) {
                selectedActivities.push(activities[i]);
                lastFinishTime = activities[i].finish;
            }
        }
    }
    return selectedActivities;
}

const activities = [
    { start: 1, finish: 2 },
    { start: 3, finish: 4 },
    { start: 0, finish: 6 },
    { start: 5, finish: 7 },
    { start: 8, finish: 9 },
    { start: 5, finish: 9 }
];
console.log("Selected Activities (Greedy):", activitySelection(activities));
// Output: [ { start: 1, finish: 2 }, { start: 3, finish: 4 }, { start: 5, finish: 7 }, { start: 8, finish: 9 } ]
```

### 15 LeetCode Questions for Greedy Algorithms:

1.  **Assign Cookies (Easy)**
    * **Concept:** Sort children's greed factors and cookie sizes. Greedily assign the smallest sufficient cookie to the child with the smallest greed factor.
    * **Link:** [https://leetcode.com/problems/assign-cookies/](https://leetcode.com/problems/assign-cookies/)
2.  **Best Time to Buy and Sell Stock II (Easy)**
    * **Concept:** Buy and sell every time there's a profit to maximize total profit.
    * **Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
3.  **Jump Game (Medium)**
    * **Concept:** At each step, try to reach the farthest possible index. If you can reach the end, return true.
    * **Link:** [https://leetcode.com/problems/jump-game/](https://leetcode.com/problems/jump-game/)
4.  **Lemonade Change (Easy)**
    * **Concept:** Greedily give change back using the largest denominations first.
    * **Link:** [https://leetcode.com/problems/lemonade-change/](https://leetcode.com/problems/lemonade-change/)
5.  **Non-overlapping Intervals (Medium)**
    * **Concept:** Sort intervals by end time. Greedily pick intervals that end earliest and don't overlap with previously picked ones.
    * **Link:** [https://leetcode.com/problems/non-overlapping-intervals/](https://leetcode.com/problems/non-overlapping-intervals/)
6.  **Minimum Number of Arrows to Burst Balloons (Medium)**
    * **Concept:** Similar to non-overlapping intervals. Sort balloons by their end points and shoot to cover as many as possible.
    * **Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
7.  **Can Place Flowers (Easy)**
    * **Concept:** Iterate through the flowerbed and place a flower whenever possible (if current, left, and right are empty) to maximize placements.
    * **Link:** [https://leetcode.com/problems/can-place-flowers/](https://leetcode.com/problems/can-place-flowers/)
8.  **Bag of Tokens (Medium)**
    * **Concept:** Sort tokens. Use a two-pointer approach: play smallest tokens for points, play largest tokens for power if needed.
    * **Link:** [https://leetcode.com/problems/bag-of-tokens/](https://leetcode.com/problems/bag-of-tokens/)
9.  **Queue Reconstruction by Height (Medium)**
    * **Concept:** Sort people strategically (e.g., by height descending, then by k ascending) and then insert them into a list.
    * **Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/](https://leetcode.com/problems/queue-reconstruction-by-height/)
10. **Partition Labels (Medium)**
    * **Concept:** Find the last occurrence of each character. Iterate through the string, expanding the current partition's end until it includes the last occurrence of all characters seen so far.
    * **Link:** [https://leetcode.com/problems/partition-labels/](https://leetcode.com/problems/partition-labels/)
11. **Gas Station (Medium)**
    * **Concept:** Iterate through the stations, keeping track of current gas. If cumulative gas drops below zero, start from the next station.
    * **Link:** [https://leetcode.com/problems/gas-station/](https://leetcode.com/problems/gas-station/)
12. **Wiggle Subsequence (Medium)**
    * **Concept:** Greedily pick numbers that form a "wiggle" (alternating increasing/decreasing).
    * **Link:** [https://leetcode.com/problems/wiggle-subsequence/](https://leetcode.com/problems/wiggle-subsequence/)
13. **Is Subsequence (Easy)**
    * **Concept:** Use two pointers, greedily advancing through the target string if characters match the source string.
    * **Link:** [https://leetcode.com/problems/is-subsequence/](https://leetcode.com/problems/is-subsequence/)
14. **Two City Scheduling (Medium)**
    * **Concept:** Calculate the difference in cost for sending a person to city A vs. city B. Sort by this difference and greedily send people to where they save more money.
    * **Link:** [https://leetcode.com/problems/two-city-scheduling/](https://leetcode.com/problems/two-city-scheduling/)
15. **Maximum Subarray (Easy)**
    * **Concept:** Kadane's algorithm is a classic greedy approach. At each element, decide whether to extend the current subarray or start a new one.
    * **Link:** [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

---

## 4. Backtracking

**What is it?**
Backtracking is an algorithmic technique for solving problems, typically constraint satisfaction problems or optimization problems, by systematically trying to build a solution incrementally. It explores all possible paths to find a solution. When a path is determined to be invalid or unpromising, the algorithm "backtracks" (undoes its last choice) and tries a different path.

**Key Idea:**
* **Recursive Search:** Backtracking is almost always implemented recursively.
* **State Space Tree:** Visualize the problem as a tree where each node represents a partial solution. Backtracking explores this tree using DFS.
* **Pruning:** If a partial solution (a node in the state space tree) cannot possibly lead to a valid full solution, the algorithm "prunes" that branch, avoiding unnecessary computations.

**Analogy:**
Solving a maze. You go down a path. If you hit a dead end, you backtrack to the last intersection and try another path. You continue until you find the exit or exhaust all possibilities.

**When to Use:**
* Problems that involve finding all possible combinations, permutations, or subsets.
* Constraint satisfaction problems (e.g., Sudoku solver, N-Queens).
* Any problem where you need to explore a search space exhaustively.

**Example (Generating Permutations):**
Given a set of distinct numbers, return all possible permutations.

```javascript
function permute(nums) {
    const result = [];

    function backtrack(currentPermutation, remainingNums) {
        // Base case: if current permutation is complete
        if (remainingNums.length === 0) {
            result.push([...currentPermutation]); // Add a copy
            return;
        }

        // Recursive step: try adding each remaining number
        for (let i = 0; i < remainingNums.length; i++) {
            const num = remainingNums[i];

            // 1. Choose: Add num to current permutation
            currentPermutation.push(num);
            // Create new array for remaining numbers, excluding 'num'
            const newRemainingNums = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1));

            // 2. Explore: Recurse with chosen num
            backtrack(currentPermutation, newRemainingNums);

            // 3. Unchoose (Backtrack): Remove num to try other options
            currentPermutation.pop();
        }
    }

    backtrack([], nums);
    return result;
}

console.log("Permutations of [1, 2, 3]:", permute([1, 2, 3]));
/*
Output:
[
  [ 1, 2, 3 ], [ 1, 3, 2 ],
  [ 2, 1, 3 ], [ 2, 3, 1 ],
  [ 3, 1, 2 ], [ 3, 2, 1 ]
]
*/
```

### 15 LeetCode Questions for Backtracking:

1.  **Permutations (Medium)**
    * **Concept:** Generate all possible orderings of elements.
    * **Link:** [https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)
2.  **Combinations (Medium)**
    * **Concept:** Generate all possible combinations of k numbers out of n.
    * **Link:** [https://leetcode.com/problems/combinations/](https://leetcode.com/problems/combinations/)
3.  **Subsets (Medium)**
    * **Concept:** Generate all possible subsets (the power set) of a given set.
    * **Link:** [https://leetcode.com/problems/subsets/](https://leetcode.com/problems/subsets/)
4.  **Combination Sum (Medium)**
    * **Concept:** Find all unique combinations in `candidates` where the numbers sum to `target`. Numbers can be used multiple times.
    * **Link:** [https://leetcode.com/problems/combination-sum/](https://leetcode.com/problems/combination-sum/)
5.  **Combination Sum II (Medium)**
    * **Concept:** Similar to Combination Sum, but each number can be used once, and solutions must be unique. Requires handling duplicates.
    * **Link:** [https://leetcode.com/problems/combination-sum-ii/](https://leetcode.com/problems/combination-sum-ii/)
6.  **Palindrome Partitioning (Medium)**
    * **Concept:** Partition a string such that every substring of the partition is a palindrome. Return all possible palindrome partitioning.
    * **Link:** [https://leetcode.com/problems/palindrome-partitioning/](https://leetcode.com/problems/palindrome-partitioning/)
7.  **N-Queens (Hard)**
    * **Concept:** Place `N` queens on an `N x N` chessboard such that no two queens attack each other. Find all distinct solutions.
    * **Link:** [https://leetcode.com/problems/n-queens/](https://leetcode.com/problems/n-queens/)
8.  **Sudoku Solver (Hard)**
    * **Concept:** Solve a Sudoku puzzle by filling in empty cells with digits such that the rules of Sudoku are satisfied.
    * **Link:** [https://leetcode.com/problems/sudoku-solver/](https://leetcode.com/problems/sudoku-solver/)
9.  **Word Search (Medium)**
    * **Concept:** Given a `board` and a `word`, find if the word exists in the grid. Can move horizontally and vertically.
    * **Link:** [https://leetcode.com/problems/word-search/](https://leetcode.com/problems/word-search/)
10. **Restore IP Addresses (Medium)**
    * **Concept:** Given a string containing only digits, restore it by returning all possible valid IP address combinations.
    * **Link:** [https://leetcode.com/problems/restore-ip-addresses/](https://leetcode.com/problems/restore-ip-addresses/)
11. **Letter Combinations of a Phone Number (Medium)**
    * **Concept:** Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
    * **Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
12. **Combinations Sum III (Medium)**
    * **Concept:** Find all valid combinations of `k` numbers that sum up to `n` such that only numbers 1 through 9 are used and each combination is a unique set of numbers.
    * **Link:** [https://leetcode.com/problems/combination-sum-iii/](https://leetcode.com/problems/combination-sum-iii/)
13. **Subsets II (Medium)**
    * **Concept:** Similar to Subsets, but input array may contain duplicates, and solution set must not contain duplicate subsets.
    * **Link:** [https://leetcode.com/problems/subsets-ii/](https://leetcode.com/problems/subsets-ii/)
14. **Permutations II (Medium)**
    * **Concept:** Similar to Permutations, but input array may contain duplicates, and solution set must not contain duplicate permutations.
    * **Link:** [https://leetcode.com/problems/permutations-ii/](https://leetcode.com/problems/permutations-ii/)
15. **Increasing Subsequences (Medium)**
    * **Concept:** Given an integer array `nums`, return all the different possible increasing subsequences of the given array with at least two elements.
    * **Link:** [https://leetcode.com/problems/increasing-subsequences/](https://leetcode.com/problems/increasing-subsequences/)

---
