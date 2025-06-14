import { Course } from '../courses';

const dsa: Course = {
  id: 'dsa',
  title: 'Data Structures & Algorithms',
  description: 'Essential DSA concepts for frontend developers',
  icon: 'GitBranch',
  color: 'bg-red-500',
  estimatedHours: 35,
  totalLessons: 40,
  sections: [
    {
      id: 'dsa-basics',
      title: 'DSA Basics',
      level: 'basic',
      lessons: [
        {
          id: 'dsa-intro',
          title: 'Introduction to DSA',
          duration: '50 min',
          content: `
# Introduction to Data Structures & Algorithms

## What are Data Structures?
Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently.

## What are Algorithms?
Algorithms are step-by-step procedures or formulas for solving problems. They define how to manipulate data structures to achieve desired results.

## Why DSA for Frontend Developers?
- **Performance Optimization**: Write efficient code that scales
- **Problem Solving**: Break down complex problems systematically
- **Technical Interviews**: Most tech companies test DSA knowledge
- **Better Code Quality**: Understand time and space complexity

## Big O Notation
Big O describes the performance or complexity of an algorithm.

### Common Time Complexities:
- **O(1)**: Constant time - accessing array element
- **O(log n)**: Logarithmic time - binary search
- **O(n)**: Linear time - iterating through array
- **O(n log n)**: Linearithmic time - efficient sorting
- **O(n²)**: Quadratic time - nested loops
- **O(2^n)**: Exponential time - recursive fibonacci

## Arrays
Arrays are collections of elements stored in contiguous memory locations.

\`\`\`javascript
// Array operations
const arr = [1, 2, 3, 4, 5];

// Access - O(1)
console.log(arr[0]); // 1

// Search - O(n)
const index = arr.indexOf(3); // 2

// Insert at end - O(1)
arr.push(6);

// Insert at beginning - O(n)
arr.unshift(0);

// Delete - O(n)
arr.splice(2, 1);
\`\`\`

## Objects/Hash Maps
Objects provide key-value storage with fast lookup times.

\`\`\`javascript
// Hash map operations
const map = {};

// Insert/Update - O(1)
map['key'] = 'value';

// Access - O(1)
console.log(map['key']);

// Delete - O(1)
delete map['key'];

// Check existence - O(1)
console.log('key' in map);
\`\`\`

## Common Array Algorithms

### Two Pointer Technique
\`\`\`javascript
// Find pair that sums to target
function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
}
\`\`\`

### Sliding Window
\`\`\`javascript
// Find maximum sum of k consecutive elements
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
\`\`\`

## Recursion
Recursion is when a function calls itself to solve smaller instances of the same problem.

\`\`\`javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimized Fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
\`\`\`

Understanding DSA helps you write more efficient code and solve complex problems systematically!
          `
        }
      ]
    }
  ]
};

export default dsa;