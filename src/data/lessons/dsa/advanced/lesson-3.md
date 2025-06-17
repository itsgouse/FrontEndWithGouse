
## 1\. Two Pointers (General)

**What is it?**
The Two Pointers pattern involves using two pointers (indices or references) that traverse a data structure (like an array or string) to efficiently solve a problem. These pointers can move in the same direction, opposite directions, or at different speeds (though the latter is specifically covered by "Slow and Fast Pointers"). The goal is often to reduce nested loops to a single pass.

**Why use it?**

  * **Reduced Time Complexity:** Often transforms $O(N^2)$ brute-force solutions into $O(N)$ linear time complexity.
  * **In-Place Operations:** Can often solve problems with $O(1)$ space complexity by modifying the input array in-place.
  * **Sorted Data:** Particularly effective when dealing with sorted arrays or linked lists, as it allows for efficient searching and pairing.

**Common Scenarios:**

  * Finding pairs (sum, difference, etc.) in sorted arrays.
  * Reversing an array or string.
  * Removing duplicates from a sorted array.
  * Solving problems where order matters and elements need to be compared or rearranged.

**Example: Two Sum (Sorted Array)**
Given a **sorted** array of integers `numbers` and an integer `target`, return indices of the two numbers such that they add up to `target`.

```javascript
function twoSumSorted(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            return [left + 1, right + 1]; // LeetCode usually asks for 1-based indexing for this problem
        } else if (currentSum < target) {
            left++; // Need a larger sum, move left pointer right
        } else {
            right--; // Need a smaller sum, move right pointer left
        }
    }
    return [-1, -1]; // No such pair found (though problem usually guarantees one)
}

console.log("Two Sum Sorted [2,7,11,15], 9:", twoSumSorted([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log("Two Sum Sorted [1,2,3,4,5], 7:", twoSumSorted([1, 2, 3, 4, 5], 7)); // Output: [2, 5]
```

### 10 LeetCode Questions for Two Pointers (General):

1.  **Two Sum II - Input Array Is Sorted (Easy)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2.  **Valid Palindrome (Easy)**
      * **Concept:** Use two pointers from start and end, skipping non-alphanumeric characters, and comparing.
      * **Link:** [https://leetcode.com/problems/valid-palindrome/](https://leetcode.com/problems/valid-palindrome/)
3.  **Reverse String (Easy)**
      * **Concept:** Simple two pointers swapping elements from ends towards the middle.
      * **Link:** [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)
4.  **Remove Duplicates from Sorted Array (Easy)**
      * **Concept:** One pointer for reading (fast), one for writing unique elements (slow).
      * **Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
5.  **Move Zeroes (Easy)**
      * **Concept:** One pointer to track where to place non-zeroes, another to iterate.
      * **Link:** [https://leetcode.com/problems/move-zeroes/](https://leetcode.com/problems/move-zeroes/)
6.  **Container With Most Water (Medium)**
      * **Concept:** Two pointers from ends, move the pointer pointing to the shorter line inward to maximize area.
      * **Link:** [https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)
7.  **3Sum (Medium)**
      * **Concept:** Sort the array. Iterate with one pointer, then use two pointers on the remaining part to find the other two numbers that sum to zero. Handle duplicates carefully.
      * **Link:** [https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)
8.  **Trapping Rain Water (Hard)**
      * **Concept:** Use two pointers from ends towards the middle, keeping track of `max_left` and `max_right` boundaries.
      * **Link:** [https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)
9.  **Remove Element (Easy)**
      * **Concept:** Similar to remove duplicates, move elements to be removed to the end (or simply overwrite them).
      * **Link:** [https://leetcode.com/problems/remove-element/](https://leetcode.com/problems/remove-element/)
10. **Sort Colors (Medium)**
      * **Concept:** Use three pointers (low, mid, high) to sort an array of 0s, 1s, and 2s in a single pass. (Dutch National Flag problem).
      * **Link:** [https://leetcode.com/problems/sort-colors/](https://leetcode.com/problems/sort-colors/)

-----

## 2\. Sliding Window

**What is it?**
The Sliding Window pattern is used to solve problems that involve finding a "subarray" or "substring" in a given array or string, with certain properties. A "window" is maintained and moved across the data. The window can be fixed-size or dynamic.

**Why use it?**

  * **Efficiency:** Reduces redundant computations by re-evaluating only the elements entering and leaving the window, rather than re-computing for every possible subarray/substring.
  * **Optimization:** Excellent for problems asking for maximum/minimum sum, longest/shortest subarray/substring with certain characteristics.

**Common Scenarios:**

  * Finding the maximum/minimum sum subarray of a given size.
  * Finding the longest substring without repeating characters.
  * Finding the smallest substring containing all characters from a pattern.
  * Problems involving fixed-size or variable-size contiguous segments.

**Example: Longest Substring Without Repeating Characters**
Given a string `s`, find the length of the longest substring without repeating characters.

```javascript
function lengthOfLongestSubstring(s) {
    let windowStart = 0;
    let maxLength = 0;
    const charSet = new Set(); // To keep track of characters in the current window

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const char = s[windowEnd];

        // If character is already in the set, shrink the window from the left
        while (charSet.has(char)) {
            charSet.delete(s[windowStart]);
            windowStart++;
        }

        // Add the current character to the set
        charSet.add(char);
        // Update max length
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log("Longest Substring 'abcabcbb':", lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log("Longest Substring 'bbbbb':", lengthOfLongestSubstring("bbbbb"));     // Output: 1 ("b")
console.log("Longest Substring 'pwwkew':", lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
```

### 10 LeetCode Questions for Sliding Window:

1.  **Maximum Subarray (Easy)**
      * **Concept:** While Kadane's algorithm is commonly used (which is a form of DP/Greedy), a sliding window can also be adapted for this.
      * **Link:** [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)
2.  **Longest Substring Without Repeating Characters (Medium)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
3.  **Minimum Size Subarray Sum (Medium)**
      * **Concept:** Smallest contiguous subarray whose sum is greater than or equal to a target.
      * **Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/](https://leetcode.com/problems/minimum-size-subarray-sum/)
4.  **Permutation in String (Medium)**
      * **Concept:** Check if `s2` contains any permutation of `s1`. Use a fixed-size window and character frequency maps.
      * **Link:** [https://leetcode.com/problems/permutation-in-string/](https://leetcode.com/problems/permutation-in-string/)
5.  **Find All Anagrams in a String (Medium)**
      * **Concept:** Similar to "Permutation in String", but find all starting indices.
      * **Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
6.  **Sliding Window Maximum (Hard)**
      * **Concept:** Find the maximum in each fixed-size sliding window. Often uses a deque for $O(N)$ solution.
      * **Link:** [https://leetcode.com/problems/sliding-window-maximum/](https://leetcode.com/problems/sliding-window-maximum/)
7.  **Longest Repeating Character Replacement (Medium)**
      * **Concept:** Find the longest substring you can get by changing at most `k` characters.
      * **Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)
8.  **Subarray Sum Equals K (Medium)**
      * **Concept:** Count the total number of continuous subarrays whose sum equals `k`. Often uses a hash map to store prefix sums.
      * **Link:** [https://leetcode.com/problems/subarray-sum-equals-k/](https://leetcode.com/problems/subarray-sum-equals-k/)
9.  **Fruit Into Baskets (Medium)**
      * **Concept:** Find the longest subarray with at most two distinct types of "fruit". (Similar to longest substring with K distinct characters).
      * **Link:** [https://leetcode.com/problems/fruit-into-baskets/](https://leetcode.com/problems/fruit-into-baskets/)
10. **Binary Subarrays With Sum (Medium)**
      * **Concept:** Count the number of non-empty subarrays that have a sum `goal`. Can be solved efficiently using a sliding window or prefix sums.
      * **Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/](https://leetcode.com/problems/binary-subarrays-with-sum/)

-----

## 3\. Slow and Fast Pointers

**What is it?**
The Slow and Fast Pointers (also known as Tortoise and Hare algorithm) pattern uses two pointers that move at different speeds through a sequence (typically a linked list or an array that represents a sequence). This difference in speed is crucial for detecting cycles, finding specific elements, or determining properties of the sequence efficiently.

**Why use it?**

  * **Cycle Detection:** The classic use case is detecting cycles in linked lists or number sequences (e.g., Happy Number).
  * **Finding Middle/Nth from End:** Efficiently find the middle element or the Nth element from the end of a linked list in a single pass.
  * **Space Efficiency:** Often provides $O(1)$ space solutions.

**Common Scenarios:**

  * Linked List Cycle detection (and finding the start of the cycle).
  * Finding the middle of a linked list.
  * Finding the $N$-th node from the end of a linked list.
  * Finding duplicate numbers in an array (when numbers are in a specific range, can form a cycle).
  * Determining if a number is a "Happy Number".

**Example: Linked List Cycle Detection**
Given the `head` of a linked list, return `true` if there is a cycle in the linked list. Otherwise, return `false`.

```javascript
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle possible with 0 or 1 node
    }

    let slow = head;
    let fast = head.next; // Fast starts one step ahead

    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false; // No cycle
}

// Example Usage:
// Create a linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log("Has cycle (cyclic list)?", hasCycle(node1)); // Output: true

// Create a linked list without a cycle: 5 -> 6 -> 7
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
node5.next = node6;
node6.next = node7;

console.log("Has cycle (non-cyclic list)?", hasCycle(node5)); // Output: false
```

### 10 LeetCode Questions for Slow and Fast Pointers:

1.  **Linked List Cycle (Easy)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/linked-list-cycle/](https://leetcode.com/problems/linked-list-cycle/)
2.  **Linked List Cycle II (Medium)**
      * **Concept:** Detect a cycle and return the node where the cycle begins.
      * **Link:** [https://leetcode.com/problems/linked-list-cycle-ii/](https://leetcode.com/problems/linked-list-cycle-ii/)
3.  **Middle of the Linked List (Easy)**
      * **Concept:** Fast pointer moves twice as fast as slow. When fast reaches end, slow is at middle.
      * **Link:** [https://leetcode.com/problems/middle-of-the-linked-list/](https://leetcode.com/problems/middle-of-the-linked-list/)
4.  **Remove Nth Node From End of List (Medium)**
      * **Concept:** Move fast pointer `n` steps ahead, then move both pointers until fast reaches the end.
      * **Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
5.  **Happy Number (Easy)**
      * **Concept:** Detect if the sequence generated by summing squares of digits eventually enters a cycle that doesn't include 1.
      * **Link:** [https://leetcode.com/problems/happy-number/](https://leetcode.com/problems/happy-number/)
6.  **Find the Duplicate Number (Medium)**
      * **Concept:** If numbers are in range `[1, n]` and there's one duplicate, the array can be viewed as a linked list with a cycle.
      * **Link:** [https://leetcode.com/problems/find-the-duplicate-number/](https://leetcode.com/problems/find-the-duplicate-number/)
7.  **Sort List (Medium)**
      * **Concept:** Often involves finding the middle of the list (using fast/slow pointers) to split for merge sort.
      * **Link:** [https://leetcode.com/problems/sort-list/](https://leetcode.com/problems/sort-list/)
8.  **Palindrome Linked List (Easy)**
      * **Concept:** Find middle of list, reverse second half, then compare first and reversed second halves.
      * **Link:** [https://leetcode.com/problems/palindrome-linked-list/](https://leetcode.com/problems/palindrome-linked-list/)
9.  **Rearrange Linked List (Variation, not direct LC problem)**
      * **Concept:** Often involves splitting a list into two halves (using fast/slow) and then merging/rearranging.
      * **Link:** (Look for problems like "Reorder List" which uses this idea)
10. **Intersection of Two Linked Lists (Easy)**
      * **Concept:** Two pointers, one for each list. When one reaches the end, it points to the head of the *other* list. They will meet at the intersection (or null).
      * **Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/](https://leetcode.com/problems/intersection-of-two-linked-lists/)

-----

## 4\. Cyclic Sort

**What is it?**
The Cyclic Sort pattern is used to sort an array when the elements are within a specific range (e.g., $1$ to $N$, or $0$ to $N-1$). It works by iterating through the array and, for each element, placing it at its correct sorted position. If the element is already in place, it moves on; otherwise, it swaps the element with the one that *should* be in its current position until the current element is in its correct spot.

**Why use it?**

  * **In-Place Sorting:** Sorts the array without using any extra space ($O(1)$ space complexity).
  * **Linear Time Complexity:** Achieves $O(N)$ time complexity because, in the worst case, each number is swapped at most once to reach its correct position, and each element is visited at most twice.

**Common Scenarios:**

  * Problems involving arrays containing numbers in a given range (e.g., $1$ to $N$, or $0$ to $N-1$).
  * Finding missing numbers, duplicate numbers, or smallest missing positive numbers.

**Example: Sort Numbers in Range 1 to N**
Given an array `nums` containing `n` distinct numbers taken from $1$ to $n$, sort the array in-place.

```javascript
function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        // Correct position for `nums[i]` is `nums[i] - 1` (since numbers are 1 to N)
        const correctIndex = nums[i] - 1;

        // If the element at the current index is NOT in its correct position
        if (nums[i] !== nums[correctIndex]) {
            // Swap nums[i] with the element at its correct position
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            // Element is already in its correct position, move to the next
            i++;
        }
    }
    return nums;
}

console.log("Cyclic Sort [3, 1, 5, 4, 2]:", cyclicSort([3, 1, 5, 4, 2])); // Output: [1, 2, 3, 4, 5]
console.log("Cyclic Sort [5, 2, 1, 4, 3]:", cyclicSort([5, 2, 1, 4, 3])); // Output: [1, 2, 3, 4, 5]
```

### 10 LeetCode Questions for Cyclic Sort:

1.  **Missing Number (Easy)**
      * **Concept:** Place numbers in their correct indices (0 to N-1 for range 0 to N). The index that doesn't have its correct number is the missing one.
      * **Link:** [https://leetcode.com/problems/missing-number/](https://leetcode.com/problems/missing-number/)
2.  **Find All Duplicates in an Array (Medium)**
      * **Concept:** Place numbers in their correct indices. If you try to place a number `x` at `x-1` but `nums[x-1]` is already `x`, then `x` is a duplicate.
      * **Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
3.  **Find the Duplicate Number (Medium)**
      * **Concept:** Similar to finding all duplicates, but only one duplicate exists. Can also be solved with Floyd's cycle-finding (Slow & Fast Pointers), which is often more intuitive for this specific problem.
      * **Link:** [https://leetcode.com/problems/find-the-duplicate-number/](https://leetcode.com/problems/find-the-duplicate-number/)
4.  **First Missing Positive (Hard)**
      * **Concept:** Place positive numbers within the range $[1, N]$ into their correct positions. Then iterate to find the first index `i` where `nums[i] != i+1`.
      * **Link:** [https://leetcode.com/problems/first-missing-positive/](https://leetcode.com/problems/first-missing-positive/)
5.  **Find All Numbers Disappeared in an Array (Easy)**
      * **Concept:** Place numbers in their correct indices. Then iterate through the array; if `nums[i] != i+1`, then `i+1` is a missing number.
      * **Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
6.  **Set Mismatch (Easy)**
      * **Concept:** Find the number that occurs twice and the number that is missing. Combine ideas from "Find the Duplicate Number" and "Missing Number".
      * **Link:** [https://leetcode.com/problems/set-mismatch/](https://leetcode.com/problems/set-mismatch/)
7.  **Find the Kth Missing Positive Number (Medium)**
      * **Concept:** A variation that combines the cyclic sort idea with counting or other techniques, focusing on finding a specific missing number.
      * **Link:** [https://leetcode.com/problems/kth-missing-positive-number/](https://leetcode.com/problems/kth-missing-positive-number/)
8.  **Find Missing Gaps (Conceptual variation)**
      * **Concept:** Similar to finding all missing numbers, but perhaps looking for ranges of missing numbers.
      * **Link:** (Not a direct LeetCode problem by this name, but built upon the cyclic sort pattern for gaps).
9.  **Smallest K Missing Numbers (Conceptual variation)**
      * **Concept:** Find the `k` smallest missing numbers, extending the "First Missing Positive" idea.
      * **Link:** (Often found in interview prep courses, not a direct LC problem by this name).
10. **The Number of Missing Numbers in Range (Conceptual variation)**
      * **Concept:** Given a range and numbers, count how many are missing. Could use cyclic sort as a preprocess.

-----

## 5\. Tree BFS (Level Order Traversal)

**What is it?**
Breadth-First Search (BFS) for trees (or graphs) involves exploring nodes level by level. It starts at the root, then visits all its immediate children, then all their children, and so on. A queue data structure is typically used to implement BFS.

**Why use it?**

  * **Shortest Path/Minimum Depth:** Guarantees finding the shortest path in terms of the number of edges in an unweighted graph/tree. Useful for finding minimum depth or shortest distance problems.
  * **Level-by-Level Processing:** Ideal when you need to process nodes at each level or store information level by level.

**Common Scenarios:**

  * Finding the height/maximum depth of a tree.
  * Finding the minimum depth of a tree.
  * Checking if a tree is balanced.
  * Connecting nodes at the same level (e.g., `next` pointer in a perfect binary tree).
  * Problems where you need to process all nodes at a given level before moving to the next.

**Example: Binary Tree Level Order Traversal**
Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

```javascript
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function levelOrder(root) {
    const result = [];
    if (!root) {
        return result;
    }

    const queue = [root]; // Initialize queue with the root

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue
            currentLevelNodes.push(currentNode.val);

            // Enqueue children
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevelNodes); // Add all nodes of the current level to result
    }
    return result;
}

// Example usage:
// Create a sample tree:
//      3
//     / \
//    9  20
//       /  \
//      15   7
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log("Level Order Traversal:", levelOrder(root)); // Output: [[3], [9, 20], [15, 7]]
```

### 10 LeetCode Questions for Tree BFS:

1.  **Binary Tree Level Order Traversal (Medium)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)
2.  **Binary Tree Level Order Traversal II (Medium)**
      * **Concept:** Same as Level Order Traversal, but return levels from bottom to top. Just reverse the final result.
      * **Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
3.  **Average of Levels in Binary Tree (Easy)**
      * **Concept:** For each level, sum up node values and divide by count.
      * **Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
4.  **N-ary Tree Level Order Traversal (Medium)**
      * **Concept:** Similar to binary tree, but nodes can have multiple children.
      * **Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)
5.  **Minimum Depth of Binary Tree (Easy)**
      * **Concept:** First leaf node found during BFS gives the minimum depth.
      * **Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
6.  **Binary Tree Right Side View (Medium)**
      * **Concept:** For each level, the last node added to `currentLevelNodes` is the rightmost one.
      * **Link:** [https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/)
7.  **Populating Next Right Pointers in Each Node (Medium)**
      * **Concept:** During BFS, as you process nodes at a level, connect them using their `next` pointer.
      * **Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
8.  **Cousins in Binary Tree (Easy)**
      * **Concept:** Use BFS to find the level and parent of the two target nodes.
      * **Link:** [https://leetcode.com/problems/cousins-in-binary-tree/](https://leetcode.com/problems/cousins-in-binary-tree/)
9.  **Cut Off Trees for Golf Event (Hard - Graph BFS)**
      * **Concept:** A multi-source BFS problem on a grid, conceptually similar to finding shortest paths in a graph.
      * **Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/](https://leetcode.com/problems/cut-off-trees-for-golf-event/)
10. **Shortest Path in Binary Matrix (Medium - Graph BFS)**
      * **Concept:** Find the shortest path from top-left to bottom-right in a binary matrix, where 0s are open and 1s are blocked. Standard BFS.
      * **Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

-----

## 6\. Merge Intervals

**What is it?**
The Merge Intervals pattern is used for problems that involve lists of intervals (e.g., time ranges, coordinate ranges) where you need to combine overlapping intervals or find non-overlapping ones.

**Why use it?**

  * **Simplification:** Reduces a complex set of overlapping intervals into a simpler, non-overlapping representation.
  * **Efficiency:** Sorting and then iterating linearly provides an efficient $O(N \\log N)$ solution (due to sorting) or $O(N)$ if already sorted.

**Common Scenarios:**

  * Merging overlapping time slots or ranges.
  * Finding intersections of intervals.
  * Scheduling problems.
  * Minimum number of rooms required.

**Example: Merge Intervals**
Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

```javascript
function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // 1. Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    merged.push(intervals[0]); // Add the first interval to the result

    // 2. Iterate through the rest of the intervals
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];

        // Check for overlap: current interval's start <= last merged interval's end
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // Overlap: extend the end of the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // No overlap: add the current interval as a new merged interval
            merged.push(currentInterval);
        }
    }
    return merged;
}

console.log("Merge Intervals [[1,3],[2,6],[8,10],[15,18]]:", mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1, 6], [8, 10], [15, 18]]
console.log("Merge Intervals [[1,4],[4,5]]:", mergeIntervals([[1, 4], [4, 5]])); // Output: [[1, 5]]
```

### 10 LeetCode Questions for Merge Intervals:

1.  **Merge Intervals (Medium)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/merge-intervals/](https://leetcode.com/problems/merge-intervals/)
2.  **Insert Interval (Medium)**
      * **Concept:** Given a set of non-overlapping intervals and a new interval, insert the new interval into the intervals such that it remains sorted and non-overlapping.
      * **Link:** [https://leetcode.com/problems/insert-interval/](https://leetcode.com/problems/insert-interval/)
3.  **Non-overlapping Intervals (Medium)**
      * **Concept:** Find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
      * **Link:** [https://leetcode.com/problems/non-overlapping-intervals/](https://leetcode.com/problems/non-overlapping-intervals/)
4.  **Meeting Rooms (Easy - Premium)**
      * **Concept:** Determine if a person could attend all meetings. Sort by start time and check for overlaps.
      * **Link:** [https://leetcode.com/problems/meeting-rooms/](https://leetcode.com/problems/meeting-rooms/) (Premium)
5.  **Meeting Rooms II (Medium - Premium)**
      * **Concept:** Find the minimum number of conference rooms required. Uses sorting and a min-heap.
      * **Link:** [https://leetcode.com/problems/meeting-rooms-ii/](https://leetcode.com/problems/meeting-rooms-ii/) (Premium)
6.  **Minimum Number of Arrows to Burst Balloons (Medium)**
      * **Concept:** Similar to non-overlapping intervals. Sort balloons by their end points and shoot to cover as many as possible.
      * **Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
7.  **Interval List Intersections (Medium)**
      * **Concept:** Given two lists of sorted disjoint intervals, return their intersection.
      * **Link:** [https://leetcode.com/problems/interval-list-intersections/](https://leetcode.com/problems/interval-list-intersections/)
8.  **Employee Free Time (Hard)**
      * **Concept:** Given a list of schedules for employees, find their common free time. Involves merging intervals and finding gaps.
      * **Link:** [https://leetcode.com/problems/employee-free-time/](https://leetcode.com/problems/employee-free-time/)
9.  **Teemo Attacking (Easy)**
      * **Concept:** Calculate total time Teemo is poisoned. Involves understanding interval durations and overlaps.
      * **Link:** [https://leetcode.com/problems/teemo-attacking/](https://leetcode.com/problems/teemo-attacking/)
10. **Data Stream as Disjoint Intervals (Hard)**
      * **Concept:** Design a data structure that merges intervals as numbers are added to a stream.
      * **Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)

-----

## 7\. Binary Search on Answer

**What is it?**
This pattern is applied when the problem asks for a minimum/maximum value that satisfies a certain condition. Instead of directly calculating the answer, you perform a binary search over the *possible range of answers*. For each candidate answer, you use a helper function to check if it's "valid" or satisfies the problem's condition. The `check` function must be monotonic with respect to the answer.

**Why use it?**

  * **Optimization:** Converts problems that might seem complex (e.g., $N^2$ or $N \\log N$ for a greedy check) into $O(\\log R \\times \\text{CheckTime})$ where $R$ is the range of possible answers and `CheckTime` is the complexity of validating a candidate answer.
  * **Wide Applicability:** Useful when the solution space is sorted (or can be made sorted) and checking a candidate answer is easier than directly finding it.

**Common Scenarios:**

  * Finding the minimum maximum value (e.g., minimize the maximum sum of subarrays).
  * Finding the maximum minimum value.
  * Problems asking for the "k-th smallest/largest" or optimal division/allocation where a property is monotonic.
  * When a greedy approach isn't directly obvious, but validating a specific answer is straightforward.

**Example: Koko Eating Bananas**
Koko loves to eat bananas. There are `n` piles of bananas, the `i`-th pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours. Koko can decide her eating speed of `k` bananas per hour. Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

```javascript
function minEatingSpeed(piles, h) {
    // Helper function: can Koko eat all bananas with speed 'k' within 'h' hours?
    function canEat(k) {
        let hoursNeeded = 0;
        for (const pile of piles) {
            hoursNeeded += Math.ceil(pile / k); // Calculate hours for each pile
        }
        return hoursNeeded <= h;
    }

    // The range of possible answers for 'k'
    // Minimum k can be 1 (eat 1 banana per hour)
    // Maximum k can be the largest pile size (eat the largest pile in 1 hour)
    let left = 1;
    let right = Math.max(...piles); // Or max(piles)

    let ans = right; // Initialize with a possible (but not necessarily optimal) answer

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canEat(mid)) {
            ans = mid;    // This speed 'mid' is possible. Try for a smaller speed.
            right = mid - 1;
        } else {
            left = mid + 1; // This speed 'mid' is too slow. Need a faster speed.
        }
    }
    return ans;
}

console.log("Koko Eating Bananas [3,6,7,11], h=8:", minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
console.log("Koko Eating Bananas [30,11,23,4,20], h=5:", minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
```

### 10 LeetCode Questions for Binary Search on Answer:

1.  **Koko Eating Bananas (Medium)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/koko-eating-bananas/](https://leetcode.com/problems/koko-eating-bananas/)
2.  **Minimum Time to Complete Trips (Medium)**
      * **Concept:** Find minimum time `t` such that all trips can be completed. Check function determines if all trips are possible within time `t`.
      * **Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/](https://leetcode.com/problems/minimum-time-to-complete-trips/)
3.  **Capacity To Ship Packages Within D Days (Medium)**
      * **Concept:** Find the minimum weight capacity required to ship all packages within `D` days. Check function determines if a given capacity is sufficient.
      * **Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
4.  **Split Array Largest Sum (Hard)**
      * **Concept:** Split an array into `k` subarrays such that the largest sum among these subarrays is minimized. Binary search on the possible range of this maximum sum.
      * **Link:** [https://leetcode.com/problems/split-array-largest-sum/](https://leetcode.com/problems/split-array-largest-sum/)
5.  **Find the Duplicate Number (Medium)**
      * **Concept:** While also solvable with cyclic sort or fast/slow pointers, one approach uses binary search on the numbers `[1, n]` to count numbers less than or equal to `mid`.
      * **Link:** [https://leetcode.com/problems/find-the-duplicate-number/](https://leetcode.com/problems/find-the-duplicate-number/)
6.  **Find Kth Smallest Pair Distance (Hard)**
      * **Concept:** Given an integer array `nums`, return the `k`-th smallest distance among all pairs. Binary search on the range of possible distances.
      * **Link:** [https://leetcode.com/problems/find-kth-smallest-pair-distance/](https://www.google.com/search?q=https://leetcode.com/problems/find-kth-smallest-pair-distance/)
7.  **Minimize Max Distance to Gas Station (Medium)**
      * **Concept:** Given `N` gas stations and `K` new stations to add, minimize the maximum distance between adjacent stations. Binary search on the maximum distance.
      * **Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)
8.  **Divide Chocolate (Hard)**
      * **Concept:** Divide a chocolate bar into `k+1` pieces, maximize the minimum sweetness of any piece. Binary search on the minimum sweetness.
      * **Link:** [https://leetcode.com/problems/divide-chocolate/](https://leetcode.com/problems/divide-chocolate/) (Premium)
9.  **Swim in Rising Water (Hard)**
      * **Concept:** Find the least time `t` such that you can swim from top-left to bottom-right in a grid where `grid[i][j]` is elevation. Binary search on `t`, and for each `t`, use BFS/DFS to check path existence.
      * **Link:** [https://leetcode.com/problems/swim-in-rising-water/](https://leetcode.com/problems/swim-in-rising-water/)
10. **Smallest Divisor Given a Threshold (Medium)**
      * **Concept:** Find the smallest divisor `d` such that the sum of `ceil(nums[i] / d)` is less than or equal to `threshold`. Binary search for `d`.
      * **Link:** [https://leetcode.com/problems/smallest-divisor-given-a-threshold/](https://www.google.com/search?q=https://leetcode.com/problems/smallest-divisor-given-a-threshold/)

-----

## 8\. Monotonic Stack / Queue

**What is it?**
A Monotonic Stack (or Queue) is a stack (or queue) where the elements are always kept in a specific order (either strictly increasing or strictly decreasing). When a new element is to be pushed onto the stack, elements that violate the monotonic property are popped until the property is maintained.

**Why use it?**

  * **Efficiently Find Next/Previous Greater/Smaller Element:** Used to find the next greater/smaller element, previous greater/smaller element, or similar queries in $O(N)$ time, whereas a naive approach might be $O(N^2)$.
  * **Window Operations:** Monotonic queues are used in sliding window problems to quickly find the minimum/maximum element within the current window.

**Common Scenarios:**

  * Next Greater Element, Next Smaller Element, Previous Greater Element, Previous Smaller Element problems.
  * Calculating areas of histograms.
  * Finding maximums/minimums in a sliding window (using a monotonic queue/deque).
  * Problems involving sequences where you need to know about elements to the left/right that satisfy a certain ordering.

**Example: Next Greater Element I**
The **next greater element** of some element `x` in an array is the first element to its right that is strictly greater than `x`. Given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`, find the next greater element for each `nums1[i]` in `nums2`.

```javascript
function nextGreaterElement(nums1, nums2) {
    const result = [];
    const stack = []; // Monotonic decreasing stack
    const ngeMap = new Map(); // To store Next Greater Element for numbers in nums2

    // Iterate through nums2 to build the NGE map
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop(); // Pop elements that are smaller or equal (not NGE)
        }
        // The element at top of stack (if any) is the NGE for 'num'
        ngeMap.set(num, stack.length === 0 ? -1 : stack[stack.length - 1]);
        stack.push(num); // Push current num onto stack
    }

    // For each number in nums1, retrieve its NGE from the map
    for (const num1 of nums1) {
        result.push(ngeMap.get(num1));
    }

    return result;
}

console.log("Next Greater Element I [4,1,2] in [1,3,4,2]:", nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]
console.log("Next Greater Element I [2,4] in [1,2,3,4]:", nextGreaterElement([2, 4], [1, 2, 3, 4]));     // Output: [3, -1]
```

### 10 LeetCode Questions for Monotonic Stack / Queue:

1.  **Next Greater Element I (Easy)**
      * **Concept:** The exact example given above.
      * **Link:** [https://leetcode.com/problems/next-greater-element-i/](https://leetcode.com/problems/next-greater-element-i/)
2.  **Next Greater Element II (Medium)**
      * **Concept:** Find the next greater element in a circular array. Often involves processing the array twice or extending it.
      * **Link:** [https://leetcode.com/problems/next-greater-element-ii/](https://leetcode.com/problems/next-greater-element-ii/)
3.  **Largest Rectangle in Histogram (Hard)**
      * **Concept:** Find the largest rectangle in a histogram. Uses a monotonic stack to find the nearest smaller element to the left and right.
      * **Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/](https://leetcode.com/problems/largest-rectangle-in-histogram/)
4.  **Trapping Rain Water (Hard)**
      * **Concept:** While two pointers is common, a monotonic stack approach also exists to calculate water trapped.
      * **Link:** [https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)
5.  **Sum of Subarray Minimums (Medium)**
      * **Concept:** Calculate the sum of `min(B)` for every contiguous subarray `B`. Monotonic stack helps find ranges where an element is the minimum.
      * **Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/](https://leetcode.com/problems/sum-of-subarray-minimums/)
6.  **Remove K Digits (Medium)**
      * **Concept:** Remove `k` digits from a number to make it smallest. Build the new number greedily using a monotonic stack.
      * **Link:** [https://leetcode.com/problems/remove-k-digits/](https://leetcode.com/problems/remove-k-digits/)
7.  **Valid Parentheses (Easy)**
      * **Concept:** While not strictly monotonic, it uses a stack to check validity, a foundational stack problem.
      * **Link:** [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)
8.  **Daily Temperatures (Medium)**
      * **Concept:** For each day, calculate how many days you have to wait until a warmer temperature. Use a monotonic decreasing stack.
      * **Link:** [https://leetcode.com/problems/daily-temperatures/](https://leetcode.com/problems/daily-temperatures/)
9.  **Shortest Subarray with Sum at Least K (Hard)**
      * **Concept:** Uses a deque (monotonic queue) to optimize finding prefix sums.
      * **Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
10. **Constrained Subsequence Sum (Hard)**
      * **Concept:** Find the maximum sum of a non-empty subsequence such that for every two adjacent elements `nums[i]` and `nums[j]` in the subsequence with `i < j`, `j - i <= k`. Uses a monotonic deque to find the maximum in a sliding window.
      * **Link:** [https://leetcode.com/problems/constrained-subsequence-sum/](https://leetcode.com/problems/constrained-subsequence-sum/)

-----

This expanded set of 8 patterns should provide a solid framework for tackling a vast majority of LeetCode problems\! Happy coding\!