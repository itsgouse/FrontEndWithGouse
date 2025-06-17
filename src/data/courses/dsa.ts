import { Course } from '../courses'; // Assuming your Course interface is in a file named courses.ts

import dsaBasicLesson1Markdown from '../lessons/dsa/basics/lesson-1.md?raw';
import dsaBasicLesson2Markdown from '../lessons/dsa/basics/lesson-2.md?raw';
import dsaBasicLesson3Markdown from '../lessons/dsa/basics/lesson-3.md?raw';
// import dsaLesson4Markdown from '../lessons/dsa-for-frontend/basics/lesson-4.md?raw';
// import dsaLesson5Markdown from '../lessons/dsa-for-frontend/basics/lesson-5.md?raw';
// import dsaLesson6Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-1.md?raw';
// import dsaLesson7Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-2.md?raw';
// import dsaLesson8Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-3.md?raw';
// import dsaLesson9Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-4.md?raw';
// import dsaLesson10Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-5.md?raw';
// import dsaLesson11Markdown from '../lessons/dsa-for-frontend/intermediate/lesson-16.md?raw';
// import dsaLesson12Markdown from '../lessons/dsa-for-frontend/advanced/lesson-1.md?raw';
// import dsaLesson13Markdown from '../lessons/dsa-for-frontend/advanced/lesson-2.md?raw';
// import dsaLesson14Markdown from '../lessons/dsa-for-frontend/advanced/lesson-.md?raw';
// import dsaLesson15Markdown from '../lessons/dsa-for-frontend/advanced/lesson-15.md?raw';
// import dsaLesson16Markdown from '../lessons/dsa-for-frontend/advanced/lesson-16.md?raw';
// import dsaLesson17Markdown from '../lessons/dsa-for-frontend/advanced/lesson-17.md?raw';
// import dsaLesson18Markdown from '../lessons/dsa-for-frontend/advanced/lesson-18.md?raw';


const dsaForFrontendCourse: Course = {
  id: 'dsa-for-frontend',
  title: 'Data Structures & Algorithms for Front-End Developers',
  description: 'A comprehensive Data Structures and Algorithms (DSA) curriculum, tailored for front-end developers, covering core foundations, intermediate structures, and advanced optimization, including resources, quizzes, projects, and example LeetCode questions.',
  icon: 'Code',
  color: 'bg-green-700',
  estimatedHours: 70,
  totalLessons: 18,
  sections: [
    {
      id: 'section-1-basics-dsa',
      title: 'Section 1: Basics (Core Foundations & Efficiency)',
      level: 'basic',
      lessons: [
        {
          id: 'dsa-lesson-1-intro-math',
          title: 'Math Fundamentals',
          duration: '180 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-2-javascipt',
          title: 'JavaScript Fundamentals',
          duration: '120 min',
          markdownContent: dsaBasicLesson2Markdown,
        },
        {
          id: 'dsa-lesson-3-bigO',
          title: 'Big O and Efficiency',
          duration: '60 min',
          markdownContent: dsaBasicLesson3Markdown,
        },
        {
          id: 'dsa-lesson-4-hashmaps-sets',
          title: 'Hash Maps (Objects in JS) & Sets',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-5-sorting-searching-basic',
          title: 'Sorting & Searching (Basic)',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
      ],
      quiz: {
        id: 'section-1-dsa-quiz',
        title: 'Quiz: Core Foundations & Efficiency',
        questions: [
          {
            "id": "q1-factorial-trailing-zeros",
            "question": "How many trailing zeros are there in 26! (26 factorial)?",
            "options": [
              "4",
              "5",
              "6",
              "7"
            ],
            "correctAnswer": 2
          },
          {
            "id": "q2-fibonacci-recursion-efficiency",
            "question": "Which of the following describes the most significant issue with a naive recursive implementation of the Fibonacci sequence (e.g., `fib(n) = fib(n-1) + fib(n-2)`)?",
            "options": [
              "It uses too much memory (stack overflow) for large 'n'.",
              "It performs redundant calculations, leading to exponential time complexity.",
              "It cannot handle negative numbers.",
              "It is always slower than an iterative solution regardless of 'n'."
            ],
            "correctAnswer": 1
          },
          {
            "id": "q3-prime-optimization",
            "question": "When checking if a number 'n' is prime, why is it sufficient to check for divisibility only up to `sqrt(n)`?",
            "options": [
              "Because numbers larger than `sqrt(n)` cannot be divisors.",
              "Because any factor larger than `sqrt(n)` must have a corresponding factor smaller than `sqrt(n)`.",
              "It reduces the space complexity.",
              "It's a mathematical approximation, not a strict rule."
            ],
            "correctAnswer": 1
          },
          {
            "id": "q4-modulo-cyclic-array",
            "question": "You have an array `arr` of length `L`. To move to the 'next' element in a circular fashion (after the last element, you go back to the first), which expression correctly calculates the next index from `currentIndex`?",
            "options": [
              "(currentIndex + 1) % L - 1",
              "currentIndex + 1 % L",
              "(currentIndex + 1) % L",
              "L % (currentIndex + 1)"
            ],
            "correctAnswer": 2
          },
          {
            "id": "q5-swap-arithmetic-limitation",
            "question": "What is a major limitation of using the arithmetic swapping method (`a = a + b; b = a - b; a = a - b;`) compared to using a temporary variable?",
            "options": [
              "It only works in JavaScript.",
              "It is generally slower due to more operations.",
              "It can lead to overflow issues with very large numbers.",
              "It does not work if one of the numbers is zero."
            ],
            "correctAnswer": 2
          },
          {
            "id": "q6-palindrome-string-handling",
            "question": "When checking if a phrase like 'A man, a plan, a canal: Panama' is a palindrome, what pre-processing step is crucial?",
            "options": [
              "Converting it to an array of characters.",
              "Reversing the string first.",
              "Removing spaces and punctuation, and converting to a consistent case.",
              "Checking only the first and last characters."
            ],
            "correctAnswer": 2
          },
          {
            "id": "q7-gp-sum-condition",
            "question": "The formula for the sum of the first 'n' terms of a Geometric Progression ($S_n = \frac{a_1 \times (r^n - 1)}{r-1}$) has a specific condition. What is it?",
            "options": [
              "r must be positive.",
              "n must be an even number.",
              "r cannot be equal to 1.",
              "a_1 cannot be zero."
            ],
            "correctAnswer": 2
          },
          {
            "id": "q8-gcd-lcm-relationship",
            "question": "Given two positive integers 'a' and 'b', which relationship between GCD and LCM is always true?",
            "options": [
              "GCD(a, b) + LCM(a, b) = a + b",
              "GCD(a, b) * LCM(a, b) = a * b",
              "LCM(a, b) % GCD(a, b) != 0",
              "GCD(a, b) - LCM(a, b) = 0"
            ],
            "correctAnswer": 1
          },
          {
            "id": "q9-array-sum-loop-choice",
            "question": "You need to sum all elements in an array. Which type of loop is generally most readable and common for this task when you know the array's length?",
            "options": [
              "A `while` loop with an external counter.",
              "A `for...in` loop.",
              "A `do...while` loop.",
              "A `for` loop with an index (e.g., `for (let i=0; i<arr.length; i++)`)."
            ],
            "correctAnswer": 3
          },
          {
            "id": "q10-random-integer-range",
            "question": "To generate a random integer between 1 (inclusive) and 100 (inclusive) in JavaScript, which expression is correct?",
            "options": [
              "`Math.floor(Math.random() * 100)`",
              "`Math.ceil(Math.random() * 100)`",
              "`Math.floor(Math.random() * 100) + 1`",
              "`Math.round(Math.random() * 99) + 1`"
            ],
            "correctAnswer": 2
          }, {
            "id": "q1-even-check",
            "question": "What does the function `isEven(8)` return in JavaScript?",
            "options": ["true", "false", "null", "undefined"],
            "correctAnswer": 0
          },
          {
            "id": "q2-prime-check",
            "question": "What will `isPrime(7)` return based on the given function?",
            "options": ["true", "false", "undefined", "TypeError"],
            "correctAnswer": 0
          },
          {
            "id": "q3-math-abs",
            "question": "What is the output of `Math.abs(-12)`?",
            "options": ["-12", "12", "0", "undefined"],
            "correctAnswer": 1
          },
          {
            "id": "q4-math-round",
            "question": "What does `Math.round(4.6)` return?",
            "options": ["4", "5", "6", "NaN"],
            "correctAnswer": 1
          },
          {
            "id": "q5-precedence",
            "question": "What is the output of `10 + 2 * 3` in JavaScript?",
            "options": ["36", "16", "30", "60"],
            "correctAnswer": 1
          },
          {
            "id": "q6-logical-operator",
            "question": "What does `true && false || true` evaluate to?",
            "options": ["true", "false", "undefined", "null"],
            "correctAnswer": 0
          },
          {
            "id": "q7-modulo-cycle",
            "question": "Given `let index = (3 + 1) % 3;`, what is `index`?",
            "options": ["0", "1", "2", "3"],
            "correctAnswer": 1
          },
          {
            "id": "q8-factorial-function",
            "question": "What is the output of `factorial(4)` using the given function?",
            "options": ["10", "12", "24", "16"],
            "correctAnswer": 2
          },
          {
            "id": "q9-palindrome-check",
            "question": "What does `isStringPalindrome('madam')` return?",
            "options": ["true", "false", "undefined", "TypeError"],
            "correctAnswer": 0
          },
          {
            "id": "q10-swap-values",
            "question": "What are the values of `x` and `y` after `[x, y] = [y, x]` if `x = 3, y = 5`?",
            "options": ["x=5, y=3", "x=3, y=5", "x=8, y=0", "Error"],
            "correctAnswer": 0
          },
          {
            "id": "ae-q1-big-o-definition",
            "question": "Big O notation primarily describes which aspect of an algorithm?",
            "options": [
              "The exact execution time in milliseconds.",
              "The number of lines of code.",
              "How its running time or space requirements grow as the input size grows.",
              "The memory usage for small inputs only."
            ],
            "correctAnswer": 2
          },
          {
            "id": "ae-q2-best-complexity",
            "question": "Which Big O complexity represents the most efficient growth rate (fastest performance for large inputs)?",
            "options": [
              "O(n^2)",
              "O(log n)",
              "O(n)",
              "O(2^n)"
            ],
            "correctAnswer": 1
          },
          {
            "id": "ae-q3-code-complexity-new",
            "question": "Consider an algorithm that sorts a list of 'N' items by comparing each item to every other item in the list using nested loops. What is its typical Big O time complexity?",
            "options": [
              "O(n)",
              "O(n log n)",
              "O(n^2)",
              "O(1)"
            ],
            "correctAnswer": 2
          },
          {
            "id": "ae-q4-space-complexity-example",
            "question": "An algorithm that creates a new array of the same size as its input array to store processed results would typically have which space complexity?",
            "options": [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n^2)"
            ],
            "correctAnswer": 2
          },
          {
            "id": "ae-q5-frontend-performance-reason",
            "question": "From a frontend developer's perspective, why is algorithmic performance critical?",
            "options": [
              "It directly impacts backend server costs.",
              "It determines the size of the JavaScript bundle.",
              "It significantly affects user experience and conversion rates.",
              "It ensures strict type checking in JavaScript."
            ],
            "correctAnswer": 2
          }

        ]
      },
      projects: [
        {
          id: 'dsa-project-1-sum-n',
          title: 'Project 1: Sum of N Numbers Complexity Analysis',
          description: 'Implement a function that calculates the sum of numbers from 1 to N using two different approaches (e.g., a for loop and a mathematical formula) and discuss their Big O complexities.',
          checkpoint: 'Accurately estimate the time and space complexity of basic algorithms.',
        },
        {
          id: 'dsa-project-2-task-manager',
          title: 'Project 2: Array-Based Task Manager',
          description: 'Build a "Task Manager" where tasks are stored in an array. Implement functionalities to add a task, remove a task by index, and mark a task as complete (updating a property).',
          checkpoint: 'Implement common array manipulations using built-in JS methods and manual loops, comparing their efficiency.',
        },
        {
          id: 'dsa-project-3-text-analyzer',
          title: 'Project 3: Simple Text Analyzer',
          description: 'Create a simple "Text Analyzer" that takes a string input and reports the number of words, characters, and unique characters.',
          checkpoint: 'Write a function to check if a string is a palindrome (ignoring case and non-alphanumeric characters).',
        },
        {
          id: 'dsa-project-4-unique-visitor-tracker',
          title: 'Project 4: Unique Visitor Tracker',
          description: 'Build a "Unique Visitor Tracker" that uses a Set to store unique IP addresses (simulated) visiting a page and counts the total unique visitors.',
          checkpoint: 'Use a Hash Map to count the frequency of characters in a string.',
        },
        {
          id: 'dsa-project-5-search-autocomplete',
          title: 'Project 5: Basic Search Autocomplete',
          description: 'Create a "Search Autocomplete" feature for a small, predefined list of words. Implement a basic linear search (or binary search if the list is sorted) to suggest matching words as the user types.',
          checkpoint: 'Implement Binary Search on a given sorted array.',
        }
      ]
    },
    {
      id: 'section-2-medium-dsa',
      title: 'Section 2: Medium (Intermediate Structures & Algorithms)',
      level: 'intermediate',
      lessons: [
        {
          id: 'dsa-lesson-6-stacks',
          title: 'Stacks',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-7-queues',
          title: 'Queues',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-8-linked-lists',
          title: 'Linked Lists',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-9-trees',
          title: 'Trees (Binary Trees & Binary Search Trees)',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-10-recursion-backtracking',
          title: 'Recursion & Backtracking',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-11-advanced-sorting',
          title: 'Advanced Sorting Algorithms',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        }
      ],
      quiz: {
        id: 'section-2-dsa-quiz',
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
            options: ['It can store more data.', 'Its nodes have more children.', 'Its elements are always sorted.', 'It allows for O(log n) average time searching.'],
            correctAnswer: 3
          },
          {
            id: 's2q3-dsa',
            question: 'Which sorting algorithm uses the "Divide and Conquer" paradigm and has a guaranteed O(n log n) worst-case time complexity?',
            options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'dsa-project-6-undo-feature',
          title: 'Project 6: Basic Undo Feature with Stack',
          description: 'Implement a basic "Undo" feature for a text editor using a stack to store states.',
          checkpoint: 'Implement a basic "Undo" feature for a text editor using a stack.'
        },
        {
          id: 'dsa-project-7-browser-history',
          title: 'Project 7: Browser History Navigator',
          description: 'Build a simple "Browser History" navigator where you can go back and forward between visited pages (represented by URLs) using two stacks.',
          checkpoint: 'Simulate a print queue or a customer service line using a queue.'
        },
        {
          id: 'dsa-project-8-download-manager',
          title: 'Project 8: Queue-Based Download Manager',
          description: 'Create a "Download Manager" that processes simulated download requests in the order they are added, using a queue.',
          checkpoint: 'Implement a function to reverse a singly linked list.'
        },
        {
          id: 'dsa-project-9-playlist-linked-list',
          title: 'Project 9: Playlist with Linked List',
          description: 'Create a simple "Playlist" where songs are nodes in a linked list, and you can add, remove, and play the next/previous song.',
          checkpoint: 'Implement pre-order and in-order traversal for a given binary tree.'
        },
        {
          id: 'dsa-project-10-simplified-dom',
          title: 'Project 10: Simplified DOM Tree Traversal',
          description: 'Model a simplified DOM structure using a tree data structure and implement a function to find an element by its "ID" (simulated attribute) using a traversal.',
          checkpoint: 'Implement a function to calculate factorial or Fibonacci sequence recursively.'
        },
        {
          id: 'dsa-project-11-string-permutations',
          title: 'Project 11: String Permutations with Backtracking',
          description: 'Write a function that generates all permutations of a given string using backtracking.',
          checkpoint: 'Implement Merge Sort or Quick Sort on an array of numbers.'
        },
        {
          id: 'dsa-project-12-custom-sorting',
          title: 'Project 12: Custom Product Sorting',
          description: 'For a list of products, implement a custom sorting function (e.g., sort by price, then by name) that leverages one of the advanced sorting algorithms.',
          checkpoint: 'Identify a problem that can be efficiently solved using the Divide and Conquer paradigm.'
        }
      ]
    },
    {
      id: 'section-3-advanced-dsa',
      title: 'Section 3: Advanced (Optimization & System-Level Thinking)',
      level: 'advanced',
      lessons: [
        {
          id: 'dsa-lesson-12-graphs',
          title: 'Graphs',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-13-dynamic-programming',
          title: 'Dynamic Programming (DP)',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-14-advanced-trees',
          title: 'Trees (Advanced: Heaps & Tries)',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-15-divide-conquer',
          title: 'Divide and Conquer',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-16-greedy-algorithms',
          title: 'Greedy Algorithms',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-17-advanced-string-algorithms',
          title: 'Advanced String Algorithms',
          duration: '60 min',
          markdownContent: dsaBasicLesson1Markdown,
        },
        {
          id: 'dsa-lesson-18-system-design-dsa',
          title: 'System Design Thinking with DSA',
          duration: '90 min',
          markdownContent: dsaBasicLesson1Markdown,
        }
      ],
      quiz: {
        id: 'section-3-dsa-quiz',
        title: 'Quiz: Advanced Optimization & System-Level Thinking',
        questions: [
          {
            id: 's3q1-dsa',
            question: 'Which graph traversal algorithm is typically used to find the shortest path in an unweighted graph?',
            options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Dijkstra\'s Algorithm', 'A* Search'],
            correctAnswer: 1
          },
          {
            id: 's3q2-dsa',
            question: 'Dynamic Programming is most effective when a problem exhibits which two main properties?',
            options: ['Greedy Choice & Optimal Substructure', 'Overlapping Subproblems & Optimal Substructure', 'Recursion & Iteration', 'Divide and Conquer & Randomization'],
            correctAnswer: 1
          },
          {
            id: 's3q3-dsa',
            question: 'Which data structure is ideal for implementing an autocomplete search feature?',
            options: ['Hash Map', 'Binary Search Tree', 'Heap', 'Trie'],
            correctAnswer: 3
          }
        ]
      },
      projects: [
        {
          id: 'dsa-project-13-social-network-paths',
          title: 'Project 13: Social Network Path Finder',
          description: 'Model a simplified social network as a graph and implement BFS and DFS to find if two users are connected and to list all friends of a friend (2 degrees of separation).',
          checkpoint: 'Implement BFS and DFS traversals for a given graph representation (adjacency list or matrix).'
        },
        {
          id: 'dsa-project-14-knapsack-solver',
          title: 'Project 14: Simple Knapsack Problem Solver',
          description: 'Implement a dynamic programming solution for a simplified 0/1 Knapsack problem (e.g., maximizing value of items that fit into a limited capacity "cart").',
          checkpoint: 'Solve a basic Dynamic Programming problem like the Fibonacci sequence with memoization and tabulation.'
        },
        {
          id: 'dsa-project-15-priority-task-queue',
          title: 'Project 15: Priority Task Queue with Heap',
          description: 'Build a "Priority Task Queue" for a front-end application where tasks have different priorities, and the highest priority task is always processed next, using a Min-Heap.',
          checkpoint: 'Implement the core operations (insert, extractMin/Max) of a Min-Heap or Max-Heap.'
        },
        {
          id: 'dsa-project-16-custom-autocomplete-trie',
          title: 'Project 16: Custom Autocomplete with Trie',
          description: 'Implement an autocomplete feature using a Trie data structure for a list of predefined search terms.',
          checkpoint: 'Implement a Trie and its basic operations (insert, search, startsWith).'
        },
        {
          id: 'dsa-project-17-shortest-path-map',
          title: 'Project 17: Basic Shortest Path Finder on a Grid',
          description: 'For a simplified grid-based map (like a game board), find the shortest path between two points, illustrating a basic pathfinding algorithm (e.g., using BFS).',
          checkpoint: 'Analyze and explain a common greedy algorithm like the Activity Selection Problem.'
        },
        {
          id: 'dsa-project-18-frontend-performance-case-study',
          title: 'Project 18: Front-End Performance Case Study with DSA Lens',
          description: 'Choose a common front-end performance problem (e.g., large lists, frequent DOM manipulations, complex filtering) and describe how DSA concepts (e.g., virtualized lists, efficient data structures for filters, memoization for components) can be applied to optimize it.',
          checkpoint: 'Propose and justify the choice of data structures and algorithms for a given front-end system design scenario.'
        }
      ]
    },
    {
      id: 'section-4-interview-prep',
      title: 'Section 4: Interview Preparation & Practice',
      level: 'advanced', // Can be considered advanced as it builds on all previous knowledge
      lessons: [
        {
          id: 'dsa-lesson-19-leetcode-patterns',
          title: 'Common LeetCode Patterns for Front-End Interviews',
          duration: '120 min',
          markdownContent: '', // Placeholder, content would be dynamic or curated links
        },
        {
          id: 'dsa-lesson-20-mock-interviews',
          title: 'Mock Interview Practice & Feedback',
          duration: '120 min',
          markdownContent: '', // Placeholder, content would be guidance for mock interviews
        },
      ],
      quiz: {
        id: 'section-4-dsa-quiz',
        title: 'Quiz: Interview Readiness Assessment',
        questions: [
          {
            id: 's4q1-dsa',
            question: 'Which data structure would you use to implement a "Least Recently Used (LRU)" cache?',
            options: ['Array', 'Stack', 'Queue', 'Doubly Linked List and Hash Map'],
            correctAnswer: 3
          },
          {
            id: 's4q2-dsa',
            question: 'When asked to optimize a recursive solution for performance due to repeated calculations, which technique would you consider?',
            options: ['Backtracking', 'Greedy Algorithm', 'Dynamic Programming (Memoization)', 'Divide and Conquer'],
            correctAnswer: 2
          },
          {
            id: 's4q3-dsa',
            question: 'For a problem involving finding all possible combinations or permutations, which algorithmic paradigm is often suitable?',
            options: ['Greedy Algorithms', 'Dynamic Programming', 'Backtracking', 'Binary Search'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'dsa-project-19-leetcode-easy',
          title: 'LeetCode Practice: Easy Problems (Arrays, Strings, Hash Maps)',
          description: 'Solve a selection of easy LeetCode problems relevant to front-end development, focusing on arrays, strings, and hash maps.',
          checkpoint: 'Successfully solve 3 easy LeetCode problems, explaining your thought process and complexity analysis.'
        },
        {
          id: 'dsa-project-20-leetcode-medium',
          title: 'LeetCode Practice: Medium Problems (Linked Lists, Trees, Recursion)',
          description: 'Tackle medium-level LeetCode problems involving linked lists, trees, and recursion, commonly encountered in interviews.',
          checkpoint: 'Successfully solve 2 medium LeetCode problems, explaining your approach and analyzing complexity.'
        },
        {
          id: 'dsa-project-21-leetcode-hard',
          title: 'LeetCode Practice: Hard Problems (Graphs, DP, Advanced Concepts)',
          description: 'Attempt challenging LeetCode problems that require advanced data structures and algorithms like graphs and dynamic programming.',
          checkpoint: 'Attempt at least 1 hard LeetCode problem, demonstrating an understanding of the problem\'s complexity and potential solutions.'
        },
        {
          id: 'dsa-project-22-frontend-specific-interview-question',
          title: 'Front-End Specific DSA Interview Question Simulation',
          description: 'Work through a mock interview question that combines a DSA problem with front-end specific considerations (e.g., optimizing rendering of a large list, implementing a custom data structure for UI state).',
          checkpoint: 'Articulate a clear solution and discuss trade-offs for a complex front-end problem using DSA principles.'
        }
      ]
    }
  ]
};

export default dsaForFrontendCourse;