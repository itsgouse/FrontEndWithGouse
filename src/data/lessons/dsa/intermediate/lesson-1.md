
## Understanding the Stack Data Structure

A **Stack** is a linear data structure that follows a particular order in which operations are performed. The order is **LIFO (Last In, First Out)** or **FILO (First In, Last Out)**. Think of a stack of plates: you can only add a new plate to the top, and you can only remove the topmost plate.

### Key Characteristics:

* **LIFO/FILO Principle:** The last element added to the stack is the first one to be removed.
* **Restricted Access:** Elements can only be added or removed from one end, traditionally called the "top" of the stack.

### Analogy:

* **Stack of Books:** You add a book to the top, and you take a book from the top.
* **Browser History (Back Button):** Each page you visit is "pushed" onto a stack. When you hit the "back" button, the last page visited is "popped" off the stack.
* **Undo/Redo Functionality:** Each action is pushed onto an "undo" stack. "Undo" pops from this stack and pushes onto a "redo" stack.

---

## Stack Implementation in JavaScript

While JavaScript doesn't have a built-in `Stack` class, it's very straightforward to implement one using an `Array`. Arrays naturally support the LIFO behavior with `push()` and `pop()`.

### Implementation using an Array:

```javascript
class Stack {
    constructor() {
        this.items = []; // The array to store stack elements
    }

    // Basic Operations:

    // 1. push(element): Adds an element to the top of the stack.
    push(element) {
        this.items.push(element);
        console.log(`${element} pushed to stack.`);
    }

    // 2. pop(): Removes and returns the element from the top of the stack.
    //            Returns undefined if the stack is empty.
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return "Underflow"; // Or throw an error
        }
        const poppedElement = this.items.pop();
        console.log(`${poppedElement} popped from stack.`);
        return poppedElement;
    }

    // 3. peek(): Returns the element at the top of the stack without removing it.
    //            Returns undefined if the stack is empty.
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty. No element to peek.");
            return "Stack is empty";
        }
        const topElement = this.items[this.items.length - 1];
        console.log(`Top element is: ${topElement}`);
        return topElement;
    }

    // 4. isEmpty(): Checks if the stack is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // 5. size(): Returns the number of elements in the stack.
    size() {
        return this.items.length;
    }

    // 6. printStack(): (Helper method) Prints the elements of the stack.
    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return;
        }
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log("Stack elements:", str.trim());
    }

    // 7. clear(): Empties the stack.
    clear() {
        this.items = [];
        console.log("Stack cleared.");
    }
}

// --- Usage Example ---
console.log("--- Initializing Stack ---");
const myStack = new Stack();
console.log(`Is stack empty? ${myStack.isEmpty()}`); // true

console.log("\n--- Pushing Elements ---");
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.printStack(); // Stack elements: 10 20 30

console.log("\n--- Peeking ---");
myStack.peek(); // Top element is: 30

console.log("\n--- Popping Elements ---");
myStack.pop(); // 30 popped from stack.
myStack.printStack(); // Stack elements: 10 20
myStack.pop(); // 20 popped from stack.
myStack.printStack(); // Stack elements: 10

console.log("\n--- Checking Size and Emptiness ---");
console.log(`Stack size: ${myStack.size()}`); // 1
console.log(`Is stack empty? ${myStack.isEmpty()}`); // false

console.log("\n--- Popping Last Element ---");
myStack.pop(); // 10 popped from stack.
myStack.printStack(); // Stack is empty.
console.log(`Is stack empty? ${myStack.isEmpty()}`); // true

console.log("\n--- Attempting to Pop from Empty Stack ---");
myStack.pop(); // Stack is empty. Cannot pop.
myStack.peek(); // Stack is empty. No element to peek.

console.log("\n--- Clearing Stack ---");
myStack.push(5);
myStack.push(15);
myStack.printStack();
myStack.clear();
myStack.printStack();
```

---

## Basic Operations (Summary)

1.  **`push(element)`:** Adds `element` to the top of the stack.
    * **Time Complexity:** $O(1)$ (constant time), as `Array.prototype.push()` on average takes constant time.
2.  **`pop()`:** Removes and returns the element from the top of the stack.
    * **Time Complexity:** $O(1)$ (constant time), as `Array.prototype.pop()` takes constant time.
3.  **`peek()`:** Returns the element at the top of the stack without removing it.
    * **Time Complexity:** $O(1)$ (constant time).
4.  **`isEmpty()`:** Checks if the stack is empty.
    * **Time Complexity:** $O(1)$ (constant time).
5.  **`size()`:** Returns the number of elements in the stack.
    * **Time Complexity:** $O(1)$ (constant time).

---

## Common Approaches and Use Cases for Stacks

Stacks are incredibly useful for problems involving:

1.  **Reversing Order:** Since the last element in is the first element out, stacks are perfect for reversing sequences (e.g., reversing a string, reversing a linked list).

2.  **Parentheses/Bracket Matching:**
    * When you encounter an opening bracket `(`, `{`, `[`, push it onto the stack.
    * When you encounter a closing bracket `)`, `}`, `]`, check if the stack's top element is the corresponding opening bracket. If it is, pop. If not, or if the stack is empty, it's an invalid match.
    * At the end, if the stack is empty, all brackets were matched.

3.  **Expression Evaluation (Infix to Postfix/Prefix, Postfix Evaluation):**
    * Used in compilers and calculators to convert and evaluate arithmetic expressions. Operators and operands are pushed/popped based on their precedence.

4.  **Backtracking/DFS (Depth-First Search):**
    * Stacks are implicitly used in recursive DFS (call stack). For iterative DFS, you explicitly use a stack to keep track of nodes to visit and their paths.

5.  **Function Call Stack:**
    * Every time a function is called, its execution context is pushed onto the call stack. When it returns, it's popped off. This manages local variables and return addresses.

6.  **Keeping Track of State:**
    * If you need to remember previous states or values to make decisions later (e.g., finding the next greater element).

---

## Top 15 LeetCode Questions Involving Stacks (Basic to Medium)

These questions illustrate various common stack patterns. They are designed to solidify your understanding of how and when to apply stacks.

1.  **Valid Parentheses**
    * **Description:** Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.
    * **Concept:** Matching opening and closing brackets.
    * **Link:** [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

2.  **Min Stack**
    * **Description:** Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element in constant time.
    * **Concept:** Using an auxiliary stack or storing min with each element.
    * **Link:** [https://leetcode.com/problems/min-stack/](https://leetcode.com/problems/min-stack/)

3.  **Implement Queue using Stacks**
    * **Description:** Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).
    * **Concept:** Simulating queue behavior (FIFO) with LIFO stacks.
    * **Link:** [https://leetcode.com/problems/implement-queue-using-stacks/](https://leetcode.com/problems/implement-queue-using-stacks/)

4.  **Implement Stack using Queues**
    * **Description:** Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).
    * **Concept:** Simulating stack behavior (LIFO) with FIFO queues.
    * **Link:** [https://leetcode.com/problems/implement-stack-using-queues/](https://leetcode.com/problems/implement-stack-using-queues/)

5.  **Remove All Adjacent Duplicates In String**
    * **Description:** Given a string `s` and an integer `k`, a `k` duplicate removal consists of choosing `k` adjacent identical letters and removing them. Repeat until no more `k` duplicate removals can be made.
    * **Concept:** Using a stack to keep track of characters and their counts.
    * **Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

6.  **Simplify Path**
    * **Description:** Given a string `path`, which is an absolute path (starting with a `/`) for a Unix-style file system, convert it to the simplified canonical path.
    * **Concept:** Processing directory names and `.` `..` using a stack.
    * **Link:** [https://leetcode.com/problems/simplify-path/](https://leetcode.com/problems/simplify-path/)

7.  **Evaluate Reverse Polish Notation**
    * **Description:** Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN).
    * **Concept:** Using a stack to store operands and apply operators.
    * **Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

8.  **Asteroid Collision**
    * **Description:** We are given an array `asteroids` of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction. If two asteroids meet, the smaller one explodes. If both are the same size, both explode. If they move in the same direction, they never meet.
    * **Concept:** Simulating collisions using a stack.
    * **Link:** [https://leetcode.com/problems/asteroid-collision/](https://leetcode.com/problems/asteroid-collision/)

9.  **Next Greater Element I**
    * **Description:** The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array. Find the next greater element for all numbers of `nums1` in `nums2`.
    * **Concept:** Monotonic stack (decreasing).
    * **Link:** [https://leetcode.com/problems/next-greater-element-i/](https://leetcode.com/problems/next-greater-element-i/)

10. **Basic Calculator II**
    * **Description:** Given a string `s` which represents an expression, evaluate this expression and return its value. Integer division should truncate toward zero.
    * **Concept:** Handling operator precedence using a stack.
    * **Link:** [https://leetcode.com/problems/basic-calculator-ii/](https://leetcode.com/problems/basic-calculator-ii/)

11. **Remove K Digits**
    * **Description:** Given string `num` representing a non-negative integer `num`, remove `k` digits from `num` such that the new number is the smallest possible.
    * **Concept:** Monotonic stack (increasing) for finding the smallest possible number.
    * **Link:** [https://leetcode.com/problems/remove-k-digits/](https://leetcode.com/problems/remove-k-digits/)

12. **Daily Temperatures**
    * **Description:** Given an array of integers `temperatures` representing the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.
    * **Concept:** Monotonic stack (decreasing) to efficiently find the next greater element.
    * **Link:** [https://leetcode.com/problems/daily-temperatures/](https://leetcode.com/problems/daily-temperatures/)

13. **Online Stock Span**
    * **Description:** Design an algorithm that collects daily stock prices and returns the span of that stock's price on the current day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.
    * **Concept:** Monotonic stack (decreasing) to find the "previous greater element".
    * **Link:** [https://leetcode.com/problems/online-stock-span/](https://leetcode.com/problems/online-stock-span/)

14. **Trapping Rain Water** (More challenging, but a classic stack problem)
    * **Description:** Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
    * **Concept:** Using a stack to keep track of potential walls and calculate trapped water.
    * **Link:** [https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)

15. **Largest Rectangle in Histogram** (Another challenging classic)
    * **Description:** Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1. Find the area of the largest rectangle in the histogram.
    * **Concept:** Using a monotonic stack to find the nearest smaller elements.
    * **Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/](https://leetcode.com/problems/largest-rectangle-in-histogram/)

---

By working through these examples and understanding the underlying stack principles, you'll be well-equipped to tackle many other algorithm problems! Remember to focus on the LIFO property and how it can help simplify problem logic.