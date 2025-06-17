## Introduction to Algorithmic Efficiency

Understanding how efficiently your code runs is crucial, especially for frontend development. Algorithmic efficiency is about measuring how an algorithm's performance (time and memory) scales with the size of its input.

### Measuring Performance - Why Performance Matters (A Front-End Perspective)

For frontend developers, performance isn't just an abstract concept; it directly impacts user experience, search engine ranking, and business metrics.

* **User Experience (UX):** Slow-loading pages or unresponsive UIs frustrate users, leading to high bounce rates. A fast UI feels snappy and professional.
* **Conversion Rates:** Studies show that even a few hundred milliseconds of delay can significantly reduce conversions (e.g., sales, sign-ups).
* **SEO (Search Engine Optimization):** Search engines (like Google) prioritize faster-loading websites, impacting your visibility.
* **Accessibility:** Performance issues can disproportionately affect users on slower networks or older devices.
* **Resource Consumption:** Efficient code uses less CPU and battery on the user's device, contributing to a better overall experience.

**In short: Performance is paramount for a successful web application.**

---

### "Before & After" Demo: Inefficient vs. Efficient Summation

Let's look at a simple example: calculating the sum of all natural numbers up to 'n'.

**Scenario:** Sum numbers from 1 to `N`.

**Inefficient (Loop-based) Approach:**

```javascript
function sumUpToNLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Repeated addition
    }
    return sum;
}

console.log("--- Loop-based Summation Demo ---");
const largeNLoop = 100000000; // 100 million

// Measure 'Before'
const startTimeLoop = performance.now(); // High-resolution time in milliseconds
const resultLoop = sumUpToNLoop(largeNLoop);
// Measure 'After'
const endTimeLoop = performance.now();

console.log(`Sum (Loop): ${resultLoop}`);
console.log(`Time taken (Loop): ${endTimeLoop - startTimeLoop} milliseconds`);
```

**Efficient (Formula-based) Approach:**

We learned this formula in the "Fundamental Logic & Algorithms" section: `Sum = n * (n + 1) / 2`

```javascript
function sumUpToNFormula(n) {
    return (n * (n + 1)) / 2; // Single calculation
}

console.log("\n--- Formula-based Summation Demo ---");
const largeNFormula = 100000000; // 100 million

// Measure 'Before'
const startTimeFormula = performance.now();
const resultFormula = sumUpToNFormula(largeNFormula);
// Measure 'After'
const endTimeFormula = performance.now();

console.log(`Sum (Formula): ${resultFormula}`);
console.log(`Time taken (Formula): ${endTimeFormula - startTimeFormula} milliseconds`);
```

**Expected Output (Illustrative - actual times vary based on system):**

```
--- Loop-based Summation Demo ---
Sum (Loop): 5000000050000000
Time taken (Loop): 150.78999999999996 milliseconds  // Noticeable time

--- Formula-based Summation Demo ---
Sum (Formula): 5000000050000000
Time taken (Formula): 0.019999999999999974 milliseconds // Extremely fast!
```

**Observation:** Even for a simple task, choosing the right algorithm can lead to dramatic performance improvements, especially as the input size (`N`) grows. The loop takes hundreds of milliseconds, while the formula takes almost no measurable time for the same large input.

---

### Big O Notation - The Language of Efficiency

Big O notation is a mathematical notation that describes the **limiting behavior** of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to how their running time or space requirements grow as the input size grows.

It describes the **upper bound** of an algorithm's growth rate. We usually care about the **worst-case scenario**.

* **`N`**: Represents the size of the input.
* **`f(N)`**: The function describing the number of operations or memory usage.

**Common Big O Complexities:**

* **`O(1)` - Constant Time:**
    * **Concept:** The number of operations remains constant regardless of the input size.
    * **Example:** Accessing an element in an array by its index, pushing/popping from a stack, the `sumUpToNFormula` above.
    * **Code Analysis:**
        ```javascript
        function getFirstElement(arr) {
            return arr[0]; // Always one operation, regardless of arr.length
        }
        // Big O: O(1)
        ```

* **`O(log n)` - Logarithmic Time:**
    * **Concept:** The time required grows proportionally to the logarithm of the input size. This typically happens when the algorithm cuts the problem size in half with each step.
    * **Example:** Binary search.
    * **Code Analysis:**
        ```javascript
        // Hypothetical binary search
        function binarySearch(sortedArr, target) {
            let low = 0, high = sortedArr.length - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (sortedArr[mid] === target) return mid;
                if (sortedArr[mid] < target) low = mid + 1;
                else high = mid - 1;
            }
            return -1;
        }
        // Big O: O(log n)
        ```

* **`O(n)` - Linear Time:**
    * **Concept:** The time required grows directly and linearly with the input size. If the input doubles, the time roughly doubles.
    * **Example:** Iterating through an array once, finding an element in an unsorted array, the `sumUpToNLoop` above.
    * **Code Analysis:**
        ```javascript
        function printAllElements(arr) {
            for (let i = 0; i < arr.length; i++) { // Loops 'n' times
                console.log(arr[i]);
            }
        }
        // Big O: O(n)
        ```

* **`O(n log n)` - Linearithmic Time:**
    * **Concept:** Time grows proportionally to `n` times `log n`. Common in efficient sorting algorithms.
    * **Example:** Merge Sort, Quick Sort.

* **`O(n^2)` - Quadratic Time:**
    * **Concept:** The time required grows proportionally to the square of the input size. Often seen with nested loops where each element is compared with every other element.
    * **Example:** Naive sorting algorithms like Bubble Sort, Selection Sort.
    * **Code Analysis:**
        ```javascript
        function printAllPairs(arr) {
            for (let i = 0; i < arr.length; i++) { // Outer loop: 'n' times
                for (let j = 0; j < arr.length; j++) { // Inner loop: 'n' times
                    console.log(arr[i], arr[j]);
                }
            }
        }
        // Big O: O(n^2)
        ```

* **`O(2^n)` - Exponential Time:**
    * **Concept:** Time doubles with each additional input. Very slow for even moderately sized inputs.
    * **Example:** Naive recursive Fibonacci calculation.

**Understanding Best, Worst, and Average Cases:**

* **Best Case:** The minimum time an algorithm needs to complete. (e.g., finding an element at the very beginning of an unsorted array).
* **Worst Case:** The maximum time an algorithm needs to complete. This is usually what Big O notation describes, as it's the most critical performance guarantee. (e.g., finding an element at the very end or not at all in an unsorted array).
* **Average Case:** The expected running time given a typical input. Often harder to calculate precisely.

---

### Space Complexity - Memory Usage

Space complexity measures the amount of auxiliary (extra) memory an algorithm needs to run, as a function of the input size (N). We typically ignore the space taken by the input itself and focus on the extra space allocated during the algorithm's execution.

* **`O(1)` - Constant Space:**
    * **Concept:** The amount of memory used remains constant, regardless of the input size. The algorithm only needs a few variables.
    * **Example:** Summing numbers with a formula or loop (only `sum`, `i`, `n` variables needed).
    * **Code Analysis:**
        ```javascript
        function addTwoNumbers(a, b) {
            let result = a + b; // Only one extra variable 'result'
            return result;
        }
        // Space O: O(1)
        ```

* **`O(n)` - Linear Space:**
    * **Concept:** The amount of memory used grows proportionally to the input size.
    * **Example:** Creating a new array that is a copy of the input array, or storing results in an array of the same size as the input.
    * **Code Analysis:**
        ```javascript
        function copyArray(arr) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                newArr.push(arr[i]); // newArr grows with arr.length
            }
            return newArr;
        }
        // Space O: O(n)
        ```

* **`O(n^2)` - Quadratic Space:**
    * **Concept:** Memory usage grows proportionally to the square of the input size.
    * **Example:** Creating a 2D matrix where both dimensions depend on the input size.

---

### Visual Representation of Big O Notation

![Big O graphs](/bigO.png)

*Source: [Big O Cheat Sheet](http://bigocheatsheet.com/)*

### Performance Comparison

The following table summarizes the performance of different Big O notations as the input size increases:

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

Understanding the complexities of various data structures is crucial for optimizing performance. The following table outlines the complexities for key operations in different data structures:

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

The efficiency of various sorting algorithms can greatly affect performance. Here’s a comparison of common sorting algorithms:

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

---


