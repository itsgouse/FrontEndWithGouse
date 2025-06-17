
## 1. Algorithm Basics

An **algorithm** is a step-by-step procedure or a set of rules to be followed in calculations or other problem-solving operations, especially by a computer. Think of it as a recipe for a computer to achieve a specific task.

### 1.1. Key Characteristics of an Algorithm

* **Input:** An algorithm takes zero or more inputs.
* **Output:** It produces one or more outputs.
* **Definiteness:** Each step must be clear and unambiguous.
* **Finiteness:** It must terminate after a finite number of steps.
* **Effectiveness:** Each step must be sufficiently basic to be executable.

### 1.2. Importance of Algorithms

* **Efficiency:** Algorithms determine how quickly a program can run and how much memory it uses. A well-designed algorithm can process vast amounts of data in seconds, while a poor one might take hours or even days.
* **Scalability:** Good algorithms ensure that your software can handle increased data loads or user bases without significant performance degradation.
* **Problem Solving:** They provide a structured way to break down complex problems into smaller, manageable parts.
* **Foundation of Computer Science:** Algorithms are a core concept in almost every aspect of computing, from artificial intelligence to database management.

### 1.3. How to Approach Algorithm Design

1.  **Understand the Problem:** Clearly define what needs to be solved, including inputs, outputs, and any constraints.
2.  **Devise a Plan:** Brainstorm different ways to solve the problem. Consider existing algorithms or adapt them. Think about edge cases.
3.  **Implement the Algorithm:** Write the code for your chosen approach.
4.  **Test and Debug:** Verify that the algorithm works correctly for various inputs, including edge cases.
5.  **Analyze Performance:** Evaluate its time and space complexity. Can it be optimized further?

---

## 2. Importance of Understanding Complexity (Big O Notation)

Throughout this document, you'll see "Time Complexity" and "Space Complexity" expressed using **Big O Notation**. This is a crucial concept in algorithm analysis.

* **Big O Notation** describes the **upper bound** or **worst-case performance** of an algorithm as the input size ($N$) grows very large. It helps us understand how an algorithm scales.
* **Why it matters:** When comparing algorithms, especially for large datasets, the difference between an $O(N^2)$ algorithm and an $O(N \log N)$ algorithm can be astronomical. For example:
    * If $N = 1,000$: $N^2 = 1,000,000$, $N \log N \approx 10,000$.
    * If $N = 1,000,000$: $N^2 = 1,000,000,000,000$, $N \log N \approx 20,000,000$.

Understanding Big O allows developers to choose the most appropriate algorithm for a given problem and data scale, ensuring efficient and performant applications.

---

## 3. Searching Algorithms

**Searching algorithms** are used to find the location of a specific element (or a set of elements) within a data structure.

### 3.1. Importance of Searching

Searching is a ubiquitous operation in computing:

* Finding a contact in your phone.
* Looking up a product on an e-commerce site.
* Locating a file on your hard drive.
* Database queries.

Efficient searching is critical for user experience and system performance.

### 3.2. Linear Search

#### 3.2.1. Approach

Linear search (or sequential search) is the simplest searching algorithm. It sequentially checks each element of the list until a match is found or the whole list has been searched.

#### 3.2.2. When to Use

* When the list is **unsorted**.
* When the list is **small**.
* When it's guaranteed that the element exists (though it will still iterate until found).

#### 3.2.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(1)$ (element found at the first position).
    * **Average Case:** $O(N)$ (element found in the middle).
    * **Worst Case:** $O(N)$ (element at the end or not present).
* **Space Complexity:** $O(1)$ (constant extra space).

#### 3.2.4. JavaScript Coding Example

```javascript
/**
 * Implements linear search to find an element in an array.
 * @param {Array<any>} arr The array to search within.
 * @param {any} target The element to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element found, return its index
        }
    }
    return -1; // Element not found
}

// Example Usage:
const numbersForLinearSearch = [10, 5, 8, 12, 3, 7];
console.log("--- Linear Search ---");
console.log(`Index of 8: ${linearSearch(numbersForLinearSearch, 8)}`);   // Output: 2
console.log(`Index of 15: ${linearSearch(numbersForLinearSearch, 15)}`); // Output: -1
console.log(`Index of 10: ${linearSearch(numbersForLinearSearch, 10)}`); // Output: 0
```

### 3.3. Binary Search

#### 3.3.1. Approach

Binary search is a much more efficient search algorithm, but it requires the data structure to be **sorted**. It works by repeatedly dividing the search interval in half.

1.  Start with an interval covering the whole array.
2.  If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
3.  Otherwise, narrow it to the upper half.
4.  Repeatedly check until the value is found or the interval is empty.

#### 3.3.2. When to Use

* When the list is **sorted**.
* When the list is **large**, as it's significantly faster than linear search.

#### 3.3.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(1)$ (target is the middle element).
    * **Average Case:** $O(\log N)$.
    * **Worst Case:** $O(\log N)$.
* **Space Complexity:** $O(1)$ (iterative) or $O(\log N)$ (recursive due to call stack).

#### 3.3.4. JavaScript Coding Example

```javascript
/**
 * Implements binary search to find an element in a sorted array.
 * @param {Array<number>} arr The sorted array to search within.
 * @param {number} target The element to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    return -1; // Target not found
}

// Example Usage:
const sortedNumbersForBinarySearch = [3, 5, 7, 8, 10, 12];
console.log("\n--- Binary Search ---");
console.log(`Index of 8: ${binarySearch(sortedNumbersForBinarySearch, 8)}`);   // Output: 3
console.log(`Index of 3: ${binarySearch(sortedNumbersForBinarySearch, 3)}`);   // Output: 0
console.log(`Index of 12: ${binarySearch(sortedNumbersForBinarySearch, 12)}`); // Output: 5
console.log(`Index of 9: ${binarySearch(sortedNumbersForBinarySearch, 9)}`);   // Output: -1
```

---

## 4. Sorting Algorithms

**Sorting algorithms** arrange elements of a list or array in a specific order (numerical, alphabetical, etc.).

### 4.1. Importance of Sorting

Sorting is fundamental to many computer science problems and applications:

* **Efficient Searching:** As seen with binary search, many algorithms require data to be sorted.
* **Data Organization and Presentation:** Making data readable and understandable (e.g., sorting products by price, emails by date).
* **Finding Min/Max/Median:** Once sorted, finding these values is trivial.
* **Data Structures:** Many data structures, like binary search trees, inherently maintain sorted order.
* **Algorithm Optimization:** Sorting is often a preprocessing step that enables faster subsequent operations.

### 4.2. Bubble Sort

#### 4.2.1. Approach

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

#### 4.2.2. When to Use

* For educational purposes (it's easy to understand).
* For very **small datasets** or nearly sorted data, though even then, other simple sorts like insertion sort often perform better.
* **Avoid for large datasets** due to its poor performance.

#### 4.2.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N)$ (list is already sorted, only one pass needed).
    * **Average Case:** $O(N^2)$.
    * **Worst Case:** $O(N^2)$ (list is sorted in reverse order).
* **Space Complexity:** $O(1)$ (constant extra space).

#### 4.2.4. JavaScript Coding Example

```javascript
/**
 * Implements Bubble Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSort(arr) {
    const n = arr.length;
    let swapped; // Flag to optimize: if no swaps in a pass, array is sorted

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap them if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Example Usage:
const unsortedBubble = [64, 34, 25, 12, 22, 11, 90];
console.log("\n--- Bubble Sort ---");
console.log(`Original: ${unsortedBubble}`);
console.log(`Sorted: ${bubbleSort(unsortedBubble.slice())}`); // Use slice() to avoid modifying original array
```

### 4.3. Selection Sort

#### 4.3.1. Approach

Selection Sort sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.

1.  Iterate from the first element to the second-to-last element.
2.  In each iteration, assume the current element is the minimum.
3.  Iterate through the *rest* of the unsorted array to find the true minimum element.
4.  If a smaller element is found, update the minimum.
5.  After the inner loop, swap the found minimum element with the element at the current iteration's starting position.

#### 4.3.2. When to Use

* Like Bubble Sort, primarily for **educational purposes**.
* It performs well for **very small datasets** or when memory writes are costly (as it minimizes swaps).

#### 4.3.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N^2)$.
    * **Average Case:** $O(N^2)$.
    * **Worst Case:** $O(N^2)$.
* **Space Complexity:** $O(1)$ (constant extra space).

#### 4.3.4. JavaScript Coding Example

```javascript
/**
 * Implements Selection Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the first element of the unsorted part is the minimum
        let minIndex = i;

        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example Usage:
const unsortedSelection = [64, 25, 12, 22, 11];
console.log("\n--- Selection Sort ---");
console.log(`Original: ${unsortedSelection}`);
console.log(`Sorted: ${selectionSort(unsortedSelection.slice())}`);
```

### 4.4. Insertion Sort

#### 4.4.1. Approach

Insertion Sort builds the final sorted array (or list) one item at a time. It iterates through the input elements and at each iteration, removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

#### 4.4.2. When to Use

* For **small datasets**.
* When the data is **mostly sorted** (it has a $O(N)$ best case).
* When the cost of insertion is low, or the dataset is being built piece-by-piece and needs to remain sorted.

#### 4.4.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N)$ (array is already sorted).
    * **Average Case:** $O(N^2)$.
    * **Worst Case:** $O(N^2)$ (array is sorted in reverse order).
* **Space Complexity:** $O(1)$ (constant extra space).

#### 4.4.4. JavaScript Coding Example

```javascript
/**
 * Implements Insertion Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than currentElement,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
    }
    return arr;
}

// Example Usage:
const unsortedInsertion = [12, 11, 13, 5, 6];
console.log("\n--- Insertion Sort ---");
console.log(`Original: ${unsortedInsertion}`);
console.log(`Sorted: ${insertionSort(unsortedInsertion.slice())}`);
```

### 4.5. Merge Sort

#### 4.5.1. Approach

Merge Sort is a divide-and-conquer algorithm. It recursively divides an array into two halves until it has single-element arrays (which are inherently sorted). Then, it merges these smaller sorted arrays back together to produce a larger sorted array.

The "merge" step is crucial: it takes two sorted sub-arrays and combines them into a single sorted array by comparing elements from both sub-arrays and picking the smaller one.

#### 4.5.2. When to Use

* For **large datasets** where $O(N \log N)$ performance is required.
* When a **stable sort** is needed (maintains the relative order of equal elements).
* When sorting **linked lists** efficiently (as it doesn't require random access).

#### 4.5.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N \log N)$.
    * **Average Case:** $O(N \log N)$.
    * **Worst Case:** $O(N \log N)$.
* **Space Complexity:** $O(N)$ (due to the temporary arrays created during merging).

#### 4.5.4. JavaScript Coding Example

```javascript
/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array<number>} leftArr The left sorted sub-array.
 * @param {Array<number>} rightArr The right sorted sub-array.
 * @returns {Array<number>} The merged sorted array.
 */
function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

/**
 * Implements Merge Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array with 0 or 1 element is sorted
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);    // Recursively sort left half
    const sortedRight = mergeSort(rightHalf);  // Recursively sort right half

    return merge(sortedLeft, sortedRight); // Merge the sorted halves
}

// Example Usage:
const unsortedMerge = [38, 27, 43, 3, 9, 82, 10];
console.log("\n--- Merge Sort ---");
console.log(`Original: ${unsortedMerge}`);
console.log(`Sorted: ${mergeSort(unsortedMerge.slice())}`);
```

### 4.6. Quick Sort

#### 4.6.1. Approach

Quick Sort is also a divide-and-conquer algorithm. It picks an element as a **pivot** and partitions the given array around the picked pivot. All elements smaller than the pivot come before it, and all greater elements come after it. This process is applied recursively to the sub-arrays.

There are different strategies for picking the pivot (first element, last element, random, median-of-three). The choice of pivot significantly impacts performance.

#### 4.6.2. When to Use

* Generally one of the **fastest sorting algorithms** for average-case performance.
* When **in-place sorting** is preferred (it requires minimal auxiliary space).
* For **large datasets** where average-case $O(N \log N)$ performance is crucial.

#### 4.6.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N \log N)$ (pivot partitions the array into roughly equal halves).
    * **Average Case:** $O(N \log N)$.
    * **Worst Case:** $O(N^2)$ (occurs when the pivot always results in highly unbalanced partitions, e.g., already sorted array and choosing first/last element as pivot).
* **Space Complexity:** $O(\log N)$ (due to recursive call stack, average case) or $O(N)$ (worst case, recursive call stack).

#### 4.6.4. JavaScript Coding Example

```javascript
/**
 * Partitions the array around a pivot element.
 * Elements smaller than the pivot are moved to its left, larger elements to its right.
 * @param {Array<number>} arr The array to partition.
 * @param {number} low The starting index of the partition.
 * @param {number} high The ending index of the partition.
 * @returns {number} The final index of the pivot element.
 */
function partition(arr, low, high) {
    const pivot = arr[high]; // Choosing the last element as pivot
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its correct position
    return i + 1;
}

/**
 * Implements Quick Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @param {number} low The starting index (default 0).
 * @param {number} high The ending index (default arr.length - 1).
 * @returns {Array<number>} The sorted array.
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        const pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

// Example Usage:
const unsortedQuick = [10, 7, 8, 9, 1, 5];
console.log("\n--- Quick Sort ---");
console.log(`Original: ${unsortedQuick}`);
console.log(`Sorted: ${quickSort(unsortedQuick.slice())}`); // Use slice() to avoid modifying original array
```

### 4.7. Heap Sort

#### 4.7.1. Approach

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It can be thought of as an improved selection sort: it repeatedly extracts the maximum (or minimum) element from the heap and places it at the end (or beginning) of the array.

The main steps are:
1.  **Build a max-heap:** Convert the input array into a max-heap (where the value of each parent node is greater than or equal to the value of its children).
2.  **Extract elements:** Repeatedly extract the root (maximum element) from the heap, swap it with the last element of the heap, and reduce the heap size. Then, heapify the root to restore the heap property.

#### 4.7.2. When to Use

* When you need an $O(N \log N)$ sorting algorithm that sorts **in-place** (or nearly in-place), making it memory-efficient.
* Useful when you need to find the $k$ largest/smallest elements (can build a min/max heap of size $k$).

#### 4.7.3. Complexity

* **Time Complexity:**
    * **Best Case:** $O(N \log N)$.
    * **Average Case:** $O(N \log N)$.
    * **Worst Case:** $O(N \log N)$.
* **Space Complexity:** $O(1)$ (in-place sorting).

#### 4.7.4. JavaScript Coding Example

```javascript
/**
 * Heapifies a subtree rooted with node `i` in an array `arr` of size `n`.
 * Assumes that the subtrees are already heapified.
 * @param {Array<number>} arr The array representing the heap.
 * @param {number} n The size of the heap (number of elements to consider).
 * @param {number} i The root index of the subtree to heapify.
 */
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

/**
 * Implements Heap Sort to sort an array in ascending order.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function heapSort(arr) {
    const n = arr.length;

    // Build max-heap (rearrange array)
    // Start from the last non-leaf node and go up to the root
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

// Example Usage:
const unsortedHeap = [12, 11, 13, 5, 6, 7];
console.log("\n--- Heap Sort ---");
console.log(`Original: ${unsortedHeap}`);
console.log(`Sorted: ${heapSort(unsortedHeap.slice())}`);
```
