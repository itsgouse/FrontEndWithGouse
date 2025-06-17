import { Course } from '../courses'; // Assuming your Course interface is in a file named courses.ts

import dsaBasicLesson1Markdown from '../lessons/dsa/basics/lesson-1.md?raw';
import dsaBasicLesson2Markdown from '../lessons/dsa/basics/lesson-2.md?raw';
import dsaBasicLesson3Markdown from '../lessons/dsa/basics/lesson-3.md?raw';
import dsaBasicLesson4Markdown from '../lessons/dsa/basics/lesson-4.md?raw';
import dsaBasicLesson5Markdown from '../lessons/dsa/basics/lesson-5.md?raw';
import dsaIntermediateLesson1Markdown from '../lessons/dsa/intermediate/lesson-1.md?raw';
import dsaIntermediateLesson2Markdown from '../lessons/dsa/intermediate/lesson-2.md?raw';
import dsaIntermediateLesson3Markdown from '../lessons/dsa/intermediate/lesson-3.md?raw';
import dsaIntermediateLesson4Markdown from '../lessons/dsa/intermediate/lesson-4.md?raw';
import dsaIntermediateLesson5Markdown from '../lessons/dsa/intermediate/lesson-5.md?raw';
import dsaIntermediateLesson6Markdown from '../lessons/dsa/intermediate/lesson-6.md?raw';
import dsaAdvancedLesson1Markdown from '../lessons/dsa/advanced/lesson-1.md?raw'; 
import dsaAdvancedLesson2Markdown from '../lessons/dsa/advanced/lesson-2.md?raw'; 
import dsaAdvancedLesson3Markdown from '../lessons/dsa/advanced/lesson-3.md?raw'; 
import dsaAdvancedLesson4Markdown from '../lessons/dsa/advanced/lesson-4.md?raw'; 
import dsaAdvancedLesson5Markdown from '../lessons/dsa/advanced/lesson-5.md?raw'; 


const dsaForFrontendCourse: Course = {
  id: 'dsa-for-frontend',
  title: 'Data Structures & Algorithms for Front-End Developers',
  description: 'A comprehensive Data Structures and Algorithms (DSA) curriculum, tailored for front-end developers, covering core foundations, intermediate structures, and advanced optimization, including resources, quizzes, projects, and example LeetCode questions.',
  icon: 'Code',
  color: 'bg-green-700',
  estimatedHours: 400, 
  totalLessons: 20, 
  sections: [
    {
      id: 'section-1-fundamentals',
      title: 'Section 1: Core Fundamentals & Efficiency',
      level: 'basic',
      lessons: [
        {
          id: 'dsa-lesson-1-math-basics',
          title: 'Math Fundamentals for DSA',
          duration: '180 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-2-js-essentials',
          title: 'JavaScript Essentials for Algorithms',
          duration: '120 min',
          markdownContent: dsaBasicLesson2Markdown,
        },
        {
          id: 'dsa-lesson-3-big-o',
          title: 'Understanding Big O Notation & Efficiency',
          duration: '90 min', 
          markdownContent: dsaBasicLesson3Markdown,
        },
        {
          id: 'dsa-lesson-4-array-string-basics',
          title: 'Basic Array & String Operations',
          duration: '90 min', 
          markdownContent: dsaBasicLesson4Markdown,
        },
        {
          id: 'dsa-lesson-5-sorting-searching-intro',
          title: 'Introduction to Sorting & Searching Algorithms',
          duration: '240 min', 
          markdownContent: dsaBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-fundamentals-quiz',
        title: 'Quiz: Core Fundamentals & Efficiency',
        questions: [
          {
            id: "q1-factorial-trailing-zeros",
            question: "How many trailing zeros are there in 26! (26 factorial)?",
            options: [
              "4",
              "5",
              "6",
              "7"
            ],
            correctAnswer: 2
          },
          {
            id: "q2-fibonacci-recursion-efficiency",
            question: "Which of the following describes the most significant issue with a naive recursive implementation of the Fibonacci sequence (e.g., `fib(n) = fib(n-1) + fib(n-2)`)?",
            options: [
              "It uses too much memory (stack overflow) for large 'n'.",
              "It performs redundant calculations, leading to exponential time complexity.",
              "It cannot handle negative numbers.",
              "It is always slower than an iterative solution regardless of 'n'."
            ],
            correctAnswer: 1
          },
          {
            id: "q3-prime-optimization",
            question: "When checking if a number 'n' is prime, why is it sufficient to check for divisibility only up to $\\sqrt{n}$?",
            options: [
              "Because numbers larger than $\\sqrt{n}$ cannot be divisors.",
              "Because any factor larger than $\\sqrt{n}$ must have a corresponding factor smaller than $\\sqrt{n}$.",
              "It reduces the space complexity.",
              "It's a mathematical approximation, not a strict rule."
            ],
            correctAnswer: 1
          },
          {
            id: "q4-javascript-variable-declaration",
            question: "What is the primary difference between `let`, `const`, and `var` in JavaScript for variable declaration?",
            options: [
              "`var` is block-scoped, while `let` and `const` are function-scoped.",
              "`let` and `const` allow re-declaration, while `var` does not.",
              "`const` variables can be re-assigned, while `let` cannot.",
              "`var` is function-scoped, while `let` and `const` are block-scoped. `const` also prevents re-assignment."
            ],
            correctAnswer: 3
          },
          {
            id: "q5-javascript-hoisting",
            question: "Which of the following best describes 'hoisting' in JavaScript?",
            options: [
              "Moving variable declarations to the bottom of their scope during compilation.",
              "Moving function expressions to the top of their scope during compilation.",
              "Moving declarations (variables and functions) to the top of their scope during compilation.",
              "A type of error that occurs when variables are used before they are declared."
            ],
            correctAnswer: 2
          },
          {
            id: "q6-javascript-closure",
            question: "What is a 'closure' in JavaScript?",
            options: [
              "A way to prevent external access to variables.",
              "A function that returns another function.",
              "A function bundled together with references to its surrounding state (lexical environment).",
              "A way to stop the execution of a function."
            ],
            correctAnswer: 2
          },
          {
            id: "q7-big-o-notation-best-case",
            question: "Big O notation describes the asymptotic behavior of an algorithm. What does $O(N)$ typically represent?",
            options: [
              "The best-case scenario.",
              "The average-case scenario.",
              "The upper bound (worst-case scenario) for the algorithm's growth rate.",
              "The exact time an algorithm will take to execute."
            ],
            correctAnswer: 2
          },
          {
            id: "q8-big-o-constant-time",
            question: "Which Big O notation represents an algorithm whose execution time remains constant regardless of the input size?",
            options: [
              "$O(N)$",
              "$O(\\log N)$",
              "$O(1)$",
              "$O(N^2)$"
            ],
            correctAnswer: 2
          },
          {
            id: "q9-big-o-common-example",
            question: "A linear search algorithm has a time complexity of:",
            options: [
              "$O(1)$",
              "$O(\\log N)$",
              "$O(N)$",
              "$O(N^2)$"
            ],
            correctAnswer: 2
          },
          {
            id: "q10-array-access-time",
            question: "What is the time complexity for accessing an element by its index in a static array?",
            options: [
              "$O(1)$",
              "$O(N)$",
              "$O(\\log N)$",
              "$O(N^2)$"
            ],
            correctAnswer: 0
          },
          {
            id: "q11-linked-list-insertion-middle",
            question: "What is the worst-case time complexity for inserting an element in the middle of a singly linked list (assuming you have a pointer to the previous node)?",
            options: [
              "$O(1)$",
              "$O(N)$",
              "$O(\\log N)$",
              "$O(N^2)$"
            ],
            correctAnswer: 0
          },
          {
            id: "q12-stack-data-structure",
            question: "Which fundamental data structure operates on a Last-In, First-Out (LIFO) principle?",
            options: [
              "Queue",
              "Stack",
              "Array",
              "Linked List"
            ],
            correctAnswer: 1
          },
          {
            id: "q13-queue-data-structure",
            question: "Which fundamental data structure operates on a First-In, First-Out (FIFO) principle?",
            options: [
              "Stack",
              "Queue",
              "Tree",
              "Hash Table"
            ],
            correctAnswer: 1
          },
          {
            id: "q14-hash-table-average-case",
            question: "What is the average-case time complexity for searching an element in a well-implemented hash table?",
            options: [
              "$O(N)$",
              "$O(\\log N)$",
              "$O(1)$",
              "$O(N^2)$"
            ],
            correctAnswer: 2
          },
          {
            id: "q15-algorithm-definition",
            question: "What is the best definition of an 'algorithm'?",
            options: [
              "A piece of code written in a specific programming language.",
              "A set of data structures used to store information.",
              "A step-by-step procedure for solving a computational problem.",
              "A graphical representation of program flow."
            ],
            correctAnswer: 2
          },
          {
            id: "q16-sorting-algorithm-purpose",
            question: "The primary goal of a sorting algorithm is to:",
            options: [
              "Find the largest element in a collection.",
              "Arrange elements of a list in a specific order (e.g., ascending or descending).",
              "Remove duplicate elements from a list.",
              "Search for a specific element efficiently."
            ],
            correctAnswer: 1
          },
          {
            id: "q17-searching-algorithm-purpose",
            question: "The primary goal of a searching algorithm is to:",
            options: [
              "Arrange elements in a specific order.",
              "Insert new elements into a data structure.",
              "Determine if a specific element exists within a collection and, if so, its location.",
              "Delete elements from a collection."
            ],
            correctAnswer: 2
          },
          {
            id: "q18-recursion-definition",
            question: "What is 'recursion' in the context of algorithms?",
            options: [
              "A loop that repeats a block of code a fixed number of times.",
              "A function that calls itself to solve a smaller instance of the same problem.",
              "A technique for optimizing memory usage.",
              "A method for parallelizing computations."
            ],
            correctAnswer: 1
          },
          {
            id: "q19-iterative-vs-recursive",
            question: "Compared to an iterative solution, a recursive solution often involves:",
            options: [
              "Less memory usage.",
              "More explicit control over iteration.",
              "A higher chance of stack overflow for deep recursion.",
              "Simpler debugging."
            ],
            correctAnswer: 2
          },
          {
            id: "q20-time-complexity-definition",
            question: "What does 'time complexity' in algorithm analysis primarily measure?",
            options: [
              "The amount of memory an algorithm uses.",
              "The number of lines of code in an algorithm.",
              "The amount of time an algorithm takes to complete as a function of its input size.",
              "The difficulty of implementing an algorithm."
            ],
            correctAnswer: 2
          },
          {
            id: "q21-space-complexity-definition",
            question: "What does 'space complexity' in algorithm analysis primarily measure?",
            options: [
              "The number of operations an algorithm performs.",
              "The amount of memory an algorithm requires to run as a function of its input size.",
              "The time it takes to execute an algorithm.",
              "The readability of an algorithm's code."
            ],
            correctAnswer: 1
          },
          {
            id: "q22-logarithmic-complexity-example",
            question: "Which of the following algorithms typically exhibits logarithmic time complexity ($O(\\log N)$)?",
            options: [
              "Iterating through an array.",
              "Searching in an unsorted linked list.",
              "Binary search on a sorted array.",
              "Bubble Sort."
            ],
            correctAnswer: 2
          },
          {
            id: "q23-quadratic-complexity-example",
            question: "Which of the following sorting algorithms typically exhibits quadratic time complexity ($O(N^2)$) in its worst-case scenario?",
            options: [
              "Merge Sort",
              "Quick Sort",
              "Insertion Sort",
              "Heap Sort"
            ],
            correctAnswer: 2
          },
          {
            id: "q24-modular-arithmetic-purpose",
            question: "In mathematics, what is the primary purpose of 'modular arithmetic'?",
            options: [
              "To perform complex number calculations.",
              "To deal with remainders of division and cyclic patterns.",
              "To approximate continuous functions.",
              "To solve linear equations."
            ],
            correctAnswer: 1
          },
          {
            id: "q25-javascript-truthy-falsy",
            question: "In JavaScript, which of the following values is considered 'falsy'?",
            options: [
              "`true`",
              "`1`",
              "`'hello'`",
              "`0`"
            ],
            correctAnswer: 3
          }
        ]
      },
    },
    {
      id: 'section-2-intermediate-structures',
      title: 'Section 2: Intermediate Data Structures & Patterns',
      level: 'intermediate',
      lessons: [
        {
          id: 'dsa-lesson-6-stacks',
          title: 'Stack Data Structure & Applications',
          duration: '90 min', 
          markdownContent: dsaIntermediateLesson1Markdown,
        },
        {
          id: 'dsa-lesson-7-queues',
          title: 'Queue Data Structure & Applications',
          duration: '90 min', 
          markdownContent: dsaIntermediateLesson2Markdown,
        },
        {
          id: 'dsa-lesson-8-hash-maps-sets',
          title: 'Hash Maps, Hash Sets & Their Use Cases',
          duration: '120 min', 
          markdownContent: dsaIntermediateLesson3Markdown,
        },
        {
          id: 'dsa-lesson-9-linked-lists',
          title: 'Linked Lists: Singly, Doubly, & Circular',
          duration: '120 min', 
          markdownContent: dsaIntermediateLesson4Markdown,
        },
        {
          id: 'dsa-lesson-10-trees-basics',
          title: 'Trees: Binary, BSTs & Basic Traversals',
          duration: '150 min', 
          markdownContent: dsaIntermediateLesson5Markdown,
        },
        {
          id: 'dsa-lesson-11-heaps-priority-queues',
          title: 'Heaps & Priority Queues',
          duration: '120 min', 
          markdownContent: dsaIntermediateLesson6Markdown,
        },
      ],
      quiz: {
        id: 'section-2-intermediate-quiz',
        title: 'Quiz: Intermediate Structures & Algorithms',
        questions: [
          {
            id: 's2q1-dsa',
            question: 'Which principle describes the behavior of a Stack?',
            options: ['FIFO (First-In, First-Out)', 'LIFO (Last-In, First-Out)', 'Random Access', 'Priority Queue'],
            correctAnswer: 1
          },
          {
            id: 's2q2-dsa',
            question: 'What is the primary advantage of a Binary Search Tree (BST) over a simple Binary Tree for searching?',
            options: ['It can store more data.', 'Its nodes have more children.', 'Its elements are always sorted.', 'It allows for $O(\\log N)$ average time searching.'],
            correctAnswer: 3
          },
          {
            id: 's2q3-dsa',
            question: 'Which sorting algorithm uses the "Divide and Conquer" paradigm and has a guaranteed $O(N \\log N)$ worst-case time complexity?',
            options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'],
            correctAnswer: 2
          },
          {
            id: 's2q4-stack-real-world',
            question: 'A browser\'s "back" button functionality is a real-world application of which data structure?',
            options: ['Queue', 'Linked List', 'Stack', 'Hash Map'],
            correctAnswer: 2
          },
          {
            id: 's2q5-queue-real-world',
            question: 'Which data structure is best suited for managing tasks in a print spooler (first print job submitted, first printed)?',
            options: ['Stack', 'Array', 'Queue', 'Hash Table'],
            correctAnswer: 2
          },
          {
            id: 's2q6-hash-map-collision',
            question: 'What is a "collision" in a hash table?',
            options: ['When two different keys generate the same hash value.', 'When a key cannot be found in the table.', 'When the hash table runs out of memory.', 'When elements are inserted in sorted order.'],
            correctAnswer: 0
          },
          {
            id: 's2q7-linked-list-vs-array-insertion',
            question: 'For frequent insertions/deletions at arbitrary positions, which data structure is generally more efficient than a dynamic array (assuming you have a reference to the insertion point)?',
            options: ['Hash Map', 'Linked List', 'Stack', 'Queue'],
            correctAnswer: 1
          },
          {
            id: 's2q8-bst-property',
            question: 'In a Binary Search Tree (BST), for any given node, what is true about its left and right children?',
            options: [
              'All nodes in the left subtree are greater than the node, and all in the right subtree are smaller.',
              'All nodes in the left subtree are smaller than the node, and all in the right subtree are greater.',
              'All nodes in both subtrees are greater than the node.',
              'The order of nodes doesn\'t matter.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q9-bfs-data-structure',
            question: 'Which data structure is typically used to implement Breadth-First Search (BFS) for graph or tree traversal?',
            options: ['Stack', 'Heap', 'Queue', 'Linked List'],
            correctAnswer: 2
          },
          {
            id: 's2q10-dfs-data-structure',
            question: 'Which data structure is typically used to implement Depth-First Search (DFS) for graph or tree traversal (iteratively)?',
            options: ['Queue', 'Heap', 'Stack', 'Hash Map'],
            correctAnswer: 2
          },
          {
            id: 's2q11-heap-property',
            question: 'In a Max Heap, what property must be true for every node with respect to its children?',
            options: [
              'The node\'s value must be smaller than or equal to its children\'s values.',
              'The node\'s value must be greater than or equal to its children\'s values.',
              'The node\'s value must be equal to its children\'s values.',
              'The children\'s values must always be equal.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q12-priority-queue-implementation',
            question: 'Which data structure is commonly used to implement a Priority Queue?',
            options: ['Array', 'Linked List', 'Heap', 'Queue'],
            correctAnswer: 2
          },
          {
            id: 's2q13-tree-traversal-order',
            question: 'What is the order of nodes visited in an Inorder Traversal of a Binary Search Tree (BST)?',
            options: [
              'Root, Left, Right',
              'Left, Root, Right',
              'Left, Right, Root',
              'Right, Left, Root'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q14-cyclic-linked-list-detection',
            question: 'Which common algorithm is used to detect a cycle in a linked list?',
            options: [
              'Merge Sort',
              'Floyd\'s Cycle-Finding Algorithm (Tortoise and Hare)',
              'Binary Search',
              'Dijkstra\'s Algorithm'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q15-hash-map-worst-case',
            question: 'What is the worst-case time complexity for searching an element in a hash table (e.g., due to many collisions)?',
            options: [
              '$O(1)$',
              '$O(\\log N)$',
              '$O(N)$',
              '$O(N^2)$'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q16-stack-balanced-parentheses',
            question: 'A common application of stacks is to check for:',
            options: [
              'The sum of elements in an array.',
              'Balanced parentheses in an expression.',
              'The shortest path in a graph.',
              'The median of a stream of numbers.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q17-queue-bfs-example',
            question: 'In a social network graph, if you want to find all friends within 2 degrees of separation, which traversal algorithm would be most suitable?',
            options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Topological Sort', 'Dijkstra\'s Algorithm'],
            correctAnswer: 1
          },
          {
            id: 's2q18-tree-height',
            question: 'What defines the "height" of a binary tree?',
            options: [
              'The total number of nodes in the tree.',
              'The number of nodes along the longest path from the root to a leaf node.',
              'The number of nodes at the lowest level.',
              'The number of edges along the longest path from the root to a leaf node.'
            ],
            correctAnswer: 3
          },
          {
            id: 's2q19-hash-collision-resolution',
            question: 'Which of the following is a common method for resolving collisions in hash tables?',
            options: [
              'Binary Search',
              'Linear Probing (Open Addressing)',
              'Merge Sort',
              'Tree Traversal'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q20-doubly-linked-list-advantage',
            question: 'What is a key advantage of a Doubly Linked List over a Singly Linked List?',
            options: [
              'It uses less memory.',
              'It allows traversal in both forward and backward directions.',
              'It has faster random access.',
              'It is easier to implement.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q21-level-order-traversal-name',
            question: 'What is another common name for Breadth-First Traversal of a tree?',
            options: [
              'Preorder Traversal',
              'Inorder Traversal',
              'Postorder Traversal',
              'Level Order Traversal'
            ],
            correctAnswer: 3
          },
          {
            id: 's2q22-heap-sort-complexity',
            question: 'What is the time complexity of Heap Sort?',
            options: [
              '$O(N^2)$',
              '$O(N \\log N)$',
              '$O(N)$',
              '$O(\\log N)$'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q23-bst-deletion-cases',
            question: 'When deleting a node from a Binary Search Tree (BST), which case typically requires finding the in-order predecessor or successor?',
            options: [
              'The node to be deleted is a leaf node.',
              'The node to be deleted has only one child.',
              'The node to be deleted has two children.',
              'Deleting the root node.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q24-linked-list-head-node',
            question: 'In a singly linked list, which node must you always have access to in order to traverse the entire list?',
            options: [
              'The tail node',
              'Any middle node',
              'The head node',
              'The last visited node'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q25-tree-vs-graph',
            question: 'What is a fundamental difference between a Tree and a Graph?',
            options: [
              'Trees have cycles, while graphs do not.',
              'Trees are a type of graph that has no cycles and a single root.',
              'Graphs are always directed, while trees are undirected.',
              'Trees can only have 2 children per node, graphs can have unlimited.'
            ],
            correctAnswer: 1
          }
        ]
      },
    },
    {
      id: 'section-3-advanced-algorithms-patterns',
      title: 'Section 3: Advanced Algorithms & Interview Patterns',
      level: 'advanced',
      lessons: [
        {
          id: 'dsa-lesson-12-dynamic-programming',
          title: 'Dynamic Programming: Memoization & Tabulation',
          duration: '120 min', 
          markdownContent: dsaAdvancedLesson2Markdown,
        },
        {
          id: 'dsa-lesson-13-recursion-backtracking',
          title: 'Advanced Recursion & Backtracking',
          duration: '120 min', 
          markdownContent: dsaAdvancedLesson1Markdown, 
        },
        {
          id: 'dsa-lesson-14-interview-patterns',
          title: 'Common LeetCode & Interview Patterns',
          duration: '480 min', 
          markdownContent: dsaAdvancedLesson3Markdown, 
        },
        {
          id: 'dsa-lesson-15-must-solve-questions',
          title: '75 Must-Solve LeetCode Questions for Front-End Interviews',
          duration: '960 min', 
          markdownContent: dsaAdvancedLesson4Markdown, 
        },
        {
          id: 'dsa-lesson-16-company-wise-questions',
          title: 'Company-Wise DSA Question Breakdown',
          duration: '960 min', 
          markdownContent: dsaAdvancedLesson5Markdown, 
        },
      ],
    }
  ]
};

export default dsaForFrontendCourse;