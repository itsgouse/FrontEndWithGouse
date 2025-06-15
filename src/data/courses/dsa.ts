import { Course } from '../courses'; // Assuming you have this interface

const dsaForFrontendCourse: Course = {
  id: 'dsa-for-frontend',
  title: 'Data Structures & Algorithms for Front-End Developers',
  description: 'A comprehensive Data Structures and Algorithms (DSA) curriculum, tailored for front-end developers, covering core foundations, intermediate structures, and advanced optimization, including resources, quizzes, projects, and example LeetCode questions.',
  icon: 'Code', // Example icon for coding/algorithms
  color: 'bg-green-700', // A suitable color for a tech/learning course
  estimatedHours: 70, // Estimated based on content depth
  totalLessons: 19, // Total lessons across all sections
  sections: [
    {
      id: 'section-1-basics-dsa',
      title: 'Section 1: Basics (Core Foundations & Efficiency)',
      level: 'basic',
      lessons: [
        {
          id: 'dsa-lesson-1-intro-complexity',
          title: 'Introduction to DSA & Complexity Analysis (Big O Notation)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Why DSA for Front-End? (Performance, Scalability, Interview Prep)',
              description: 'Understanding the relevance of Data Structures and Algorithms for front-end development, performance optimization, and technical interviews.',
              codeLessons: []
            },
            {
              title: 'Understanding Time Complexity: How execution time grows with input size',
              description: 'Introducing the concept of Big O Notation to analyze algorithm efficiency based on time.',
              codeLessons: []
            },
            {
              title: 'Common Time Complexities: O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!)',
              description: 'Exploring different categories of time complexity with practical examples.',
              codeLessons: []
            },
            {
              title: 'Understanding Space Complexity: How memory usage grows with input size',
              description: 'Analyzing algorithm efficiency based on memory consumption.',
              codeLessons: []
            },
            {
              title: 'Analyzing simple code snippets for Big O',
              description: 'Practical exercises in determining the Big O of basic JavaScript code.',
              codeLessons: [
                {
                  lessonTitle: 'Analyzing Loop Complexity',
                  codeSnippet: `function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Time Complexity: O(N) - Linear
// Space Complexity: O(1) - Constant`,
                  explanation: 'This code iterates through the array once, so its time complexity is linear with respect to the array size (N). It uses a constant amount of extra space.',
                  imageUrl: ''
                },
                {
                  lessonTitle: 'Analyzing Nested Loop Complexity',
                  codeSnippet: `function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// Time Complexity: O(N^2) - Quadratic
// Space Complexity: O(1) - Constant`,
                  explanation: 'This code has nested loops, where the inner loop runs N times for each iteration of the outer loop, resulting in quadratic time complexity. Extra space used is constant.',
                  imageUrl: ''
                }
              ]
            }
          ]
        },
        {
          id: 'dsa-lesson-2-arrays',
          title: 'Arrays',
          duration: '60 min',
          subtopics: [
            {
              title: 'Basic Array Operations: Access, Insertion (push/unshift), Deletion (pop/shift), Update',
              description: 'Fundamental operations on array data structures.',
              codeLessons: []
            },
            {
              title: 'JavaScript Array Methods: map, filter, reduce, forEach, slice, splice, concat',
              description: 'Exploring commonly used built-in JavaScript array methods and their applications.',
              codeLessons: []
            },
            {
              title: 'Fixed-size vs. Dynamic Arrays (conceptual)',
              description: 'Understanding the underlying differences between array implementations.',
              codeLessons: []
            },
            {
              title: 'Time Complexity of Array Operations',
              description: 'Analyzing the efficiency of various array operations.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-3-strings',
          title: 'Strings',
          duration: '60 min',
          subtopics: [
            {
              title: 'String Immutability in JavaScript (conceptual)',
              description: 'Understanding that JavaScript strings cannot be changed after creation.',
              codeLessons: []
            },
            {
              title: 'Basic String Operations: Accessing characters, concatenation, substrings',
              description: 'Core operations for manipulating string data.',
              codeLessons: []
            },
            {
              title: 'JavaScript String Methods: split, join, substring, slice, indexOf, includes, toLowerCase, toUpperCase',
              description: 'Common and useful built-in JavaScript string methods.',
              codeLessons: []
            },
            {
              title: 'Time Complexity of String Operations',
              description: 'Analyzing the efficiency of various string operations.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-4-hashmaps-sets',
          title: 'Hash Maps (Objects in JS) & Sets',
          duration: '60 min',
          subtopics: [
            {
              title: 'Hash Maps (Hash Tables) / Objects: Key-Value pairs for O(1) average time complexity for insert, delete, lookup',
              description: 'Understanding the efficiency and use cases of hash maps.',
              codeLessons: []
            },
            {
              title: 'JavaScript Object and Map (new Map())',
              description: 'Exploring different ways to implement key-value storage in JavaScript.',
              codeLessons: []
            },
            {
              title: 'JavaScript Set (new Set()): Storing unique values',
              description: 'Using Sets for managing collections of unique items.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Frequency counters, caching, unique item tracking',
              description: 'Practical applications of hash maps and sets.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-5-sorting-searching-basic',
          title: 'Sorting & Searching (Basic)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Linear Search: O(n)',
              description: 'A straightforward but less efficient search algorithm.',
              codeLessons: []
            },
            {
              title: 'Binary Search: O(log n) on sorted arrays',
              description: 'An efficient search algorithm for sorted data.',
              codeLessons: []
            },
            {
              title: 'Implementing Binary Search (iterative and recursive)',
              description: 'Hands-on implementation of the binary search algorithm.',
              codeLessons: []
            },
            {
              title: 'Introduction to Common Sorting Algorithms (conceptual): Bubble Sort, Selection Sort, Insertion Sort (understand their basic mechanism and O(N^2) complexity)',
              description: 'An overview of basic sorting algorithms and their efficiency characteristics.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-1-dsa-quiz',
        title: 'Quiz: Core Foundations & Efficiency',
        questions: [
          {
            id: 's1q1-dsa',
            question: 'What is the time complexity of searching for an element in an unsorted array?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
            correctAnswer: 2
          },
          {
            id: 's1q2-dsa',
            question: 'Which JavaScript data structure is most efficient for storing unique values?',
            options: ['Array', 'Object', 'Set', 'Map'],
            correctAnswer: 2
          },
          {
            id: 's1q3-dsa',
            question: 'What is the average time complexity for insertion, deletion, and lookup operations in a JavaScript `Map`?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
            correctAnswer: 0
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
          checkpoint: 'Write a function to check if a string is a palindrome (ignoring case and non-alphanumeric characters).', // Reused from quiz, demonstrating application
        },
        {
          id: 'dsa-project-4-unique-visitor-tracker',
          title: 'Project 4: Unique Visitor Tracker',
          description: 'Build a "Unique Visitor Tracker" that uses a Set to store unique IP addresses (simulated) visiting a page and counts the total unique visitors.',
          checkpoint: 'Use a Hash Map to count the frequency of characters in a string.', // Reused from quiz
        },
        {
          id: 'dsa-project-5-search-autocomplete',
          title: 'Project 5: Basic Search Autocomplete',
          description: 'Create a "Search Autocomplete" feature for a small, predefined list of words. Implement a basic linear search (or binary search if the list is sorted) to suggest matching words as the user types.',
          checkpoint: 'Implement Binary Search on a given sorted array.', // Reused from quiz
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
          subtopics: [
            {
              title: 'LIFO (Last-In, First-Out) Principle',
              description: 'Understanding the core behavior of a stack.',
              codeLessons: []
            },
            {
              title: 'Operations: push, pop, peek (or top), isEmpty, size',
              description: 'The fundamental methods for interacting with a stack.',
              codeLessons: []
            },
            {
              title: 'Implementing a Stack using an Array or Linked List (conceptual)',
              description: 'Conceptualizing how to build a stack from more basic data structures.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Undo/redo functionality, browser history, expression evaluation, call stack understanding',
              description: 'Practical applications of stacks in software development.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-7-queues',
          title: 'Queues',
          duration: '60 min',
          subtopics: [
            {
              title: 'FIFO (First-In, First-Out) Principle',
              description: 'Understanding the core behavior of a queue.',
              codeLessons: []
            },
            {
              title: 'Operations: enqueue, dequeue, front (or peek), isEmpty, size',
              description: 'The fundamental methods for interacting with a queue.',
              codeLessons: []
            },
            {
              title: 'Implementing a Queue using an Array or Linked List (conceptual)',
              description: 'Conceptualizing how to build a queue from more basic data structures.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Task scheduling, breadth-first search (BFS), message queues (event loop understanding)',
              description: 'Practical applications of queues.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-8-linked-lists',
          title: 'Linked Lists',
          duration: '90 min',
          subtopics: [
            {
              title: 'Nodes: Data + Pointer to next',
              description: 'The basic building block of a linked list.',
              codeLessons: []
            },
            {
              title: 'Singly Linked List: Operations (Insertion, Deletion, Traversal)',
              description: 'Working with a basic singly linked list.',
              codeLessons: []
            },
            {
              title: 'Doubly Linked List (conceptual): Pointers to next and previous',
              description: 'Understanding the concept of a doubly linked list for bi-directional traversal.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Implementing stacks/queues, caches (LRU), managing dynamic data where insertions/deletions are frequent',
              description: 'When and why to use linked lists.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-9-trees',
          title: 'Trees (Binary Trees & Binary Search Trees)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Terminology: Root, Node, Parent, Child, Leaf, Subtree, Depth, Height',
              description: 'Key vocabulary for understanding tree data structures.',
              codeLessons: []
            },
            {
              title: 'Binary Tree: Each node has at most two children',
              description: 'The definition and properties of a binary tree.',
              codeLessons: []
            },
            {
              title: 'Binary Search Tree (BST): Left children < parent, Right children > parent',
              description: 'A specialized binary tree for efficient searching and ordering.',
              codeLessons: []
            },
            {
              title: 'BST Operations: Insertion, Searching, Deletion (conceptual)',
              description: 'The core operations for manipulating Binary Search Trees.',
              codeLessons: []
            },
            {
              title: 'Tree Traversals: In-order, Pre-order, Post-order (DFS) and Level-order (BFS)',
              description: 'Different ways to visit nodes in a tree.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Hierarchical data (DOM!), efficient searching (BSTs), file systems',
              description: 'Practical applications of tree data structures.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-10-recursion-backtracking',
          title: 'Recursion & Backtracking',
          duration: '90 min',
          subtopics: [
            {
              title: 'What is Recursion? Base Case, Recursive Step',
              description: 'Defining recursion and its essential components.',
              codeLessons: []
            },
            {
              title: 'Call Stack and Recursion',
              description: 'Understanding how recursion utilizes the call stack.',
              codeLessons: []
            },
            {
              title: 'When to use Recursion (problems with self-similar subproblems)',
              description: 'Identifying problems suitable for a recursive approach.',
              codeLessons: []
            },
            {
              title: 'Backtracking: Exploring all possible solutions by systematically trying and undoing choices',
              description: 'A powerful algorithmic technique for solving combinatorial problems.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Tree/Graph traversals, permutations/combinations, solving puzzles (e.g., Sudoku, N-Queens)',
              description: 'Common applications of recursion and backtracking.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-11-advanced-sorting',
          title: 'Advanced Sorting Algorithms',
          duration: '90 min',
          subtopics: [
            {
              title: 'Merge Sort: Divide and Conquer, O(n log n)',
              description: 'A stable, efficient, comparison-based sorting algorithm.',
              codeLessons: []
            },
            {
              title: 'Quick Sort: Divide and Conquer, O(n log n) average, O(n^2) worst-case',
              description: 'A widely used, efficient sorting algorithm with an emphasis on pivoting.',
              codeLessons: []
            },
            {
              title: 'Heap Sort (conceptual): Using a heap data structure',
              description: 'An efficient, in-place sorting algorithm based on the heap data structure.',
              codeLessons: []
            },
            {
              title: 'When to choose which sort (stability, space complexity, average vs. worst-case)',
              description: 'Making informed decisions about which sorting algorithm to use.',
              codeLessons: []
            }
          ]
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
          checkpoint: 'Implement a basic "Undo" feature for a text editor using a stack.' // Reused from quiz
        },
        {
          id: 'dsa-project-7-browser-history',
          title: 'Project 7: Browser History Navigator',
          description: 'Build a simple "Browser History" navigator where you can go back and forward between visited pages (represented by URLs) using two stacks.',
          checkpoint: 'Simulate a print queue or a customer service line using a queue.' // Reused from quiz
        },
        {
          id: 'dsa-project-8-download-manager',
          title: 'Project 8: Queue-Based Download Manager',
          description: 'Create a "Download Manager" that processes simulated download requests in the order they are added, using a queue.',
          checkpoint: 'Implement a function to reverse a singly linked list.' // Reused from quiz
        },
        {
          id: 'dsa-project-9-playlist-linked-list',
          title: 'Project 9: Playlist with Linked List',
          description: 'Create a simple "Playlist" where songs are nodes in a linked list, and you can add, remove, and play the next/previous song.',
          checkpoint: 'Implement pre-order and in-order traversal for a given binary tree.' // Reused from quiz
        },
        {
          id: 'dsa-project-10-simplified-dom',
          title: 'Project 10: Simplified DOM Tree Traversal',
          description: 'Model a simplified DOM structure using a tree data structure and implement a function to find an element by its "ID" (simulated attribute) using a traversal.',
          checkpoint: 'Implement a function to calculate factorial or Fibonacci sequence recursively.' // Reused from quiz
        },
        {
          id: 'dsa-project-11-string-permutations',
          title: 'Project 11: String Permutations with Backtracking',
          description: 'Write a function that generates all permutations of a given string using backtracking.',
          checkpoint: 'Implement Merge Sort or Quick Sort on an array of numbers.' // Reused from quiz
        },
        {
          id: 'dsa-project-12-custom-sorting',
          title: 'Project 12: Custom Product Sorting',
          description: 'For a list of products, implement a custom sorting function (e.g., sort by price, then by name) that leverages one of the advanced sorting algorithms.',
          checkpoint: 'Identify a problem that can be efficiently solved using the Divide and Conquer paradigm.' // Reused from quiz
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
          subtopics: [
            {
              title: 'Terminology: Vertex, Edge, Directed/Undirected, Weighted/Unweighted',
              description: 'Understanding the fundamental concepts and components of graphs.',
              codeLessons: []
            },
            {
              title: 'Graph Representations: Adjacency Matrix, Adjacency List',
              description: 'Different ways to store and represent graph data.',
              codeLessons: []
            },
            {
              title: 'Graph Traversal Algorithms: Breadth-First Search (BFS): Shortest path in unweighted graphs, Depth-First Search (DFS): Connectivity, topological sort',
              description: 'Algorithms for systematically visiting all nodes in a graph.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Social networks, routing, dependency graphs (build tools like Webpack, package managers like npm/yarn), UI navigation flows',
              description: 'Real-world applications of graph theory in front-end and general software.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-13-dynamic-programming',
          title: 'Dynamic Programming (DP)',
          duration: '90 min',
          subtopics: [
            {
              title: 'What is Dynamic Programming? (Solving problems by breaking them into overlapping subproblems and optimal substructure)',
              description: 'Introducing the concept of Dynamic Programming for efficient problem-solving.',
              codeLessons: []
            },
            {
              title: 'Memoization (Top-down DP) vs. Tabulation (Bottom-up DP)',
              description: 'Two main approaches to implementing dynamic programming solutions.',
              codeLessons: []
            },
            {
              title: 'Identifying DP problems',
              description: 'Recognizing characteristics of problems that can be solved with DP.',
              codeLessons: []
            },
            {
              title: 'Common patterns: Fibonacci, knapsack, coin change, longest common subsequence',
              description: 'Illustrative examples of dynamic programming problems.',
              codeLessons: []
            },
            {
              title: 'Use Cases: UI animation path optimization, complex form validation, resource allocation',
              description: 'Applying DP concepts to front-end specific challenges.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-14-advanced-trees',
          title: 'Trees (Advanced: Heaps & Tries)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Heaps (Binary Heaps): Min-Heap, Max-Heap',
              description: 'Understanding heap data structures for efficient priority queue implementations.',
              codeLessons: []
            },
            {
              title: 'Operations: insert, extractMin/extractMax',
              description: 'The core operations for heaps.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Priority Queues, efficient selection (e.g., top K elements)',
              description: 'Practical applications of heaps.',
              codeLessons: []
            },
            {
              title: 'Tries (Prefix Trees): Structure and operations: Insertion, Search, Prefix Search',
              description: 'A specialized tree structure for efficient string retrieval and searching.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Autocomplete, spell checkers, dictionary lookups, IP routing',
              description: 'Applications of Tries in various software domains.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-15-divide-conquer',
          title: 'Divide and Conquer',
          duration: '60 min',
          subtopics: [
            {
              title: 'Paradigm: Breaking down a problem into smaller, independent subproblems',
              description: 'The core concept of the Divide and Conquer algorithmic paradigm.',
              codeLessons: []
            },
            {
              title: 'Solving subproblems recursively',
              description: 'The recursive nature of Divide and Conquer.',
              codeLessons: []
            },
            {
              title: 'Combining solutions',
              description: 'How solutions to subproblems are merged to solve the original problem.',
              codeLessons: []
            },
            {
              title: 'Examples: Merge Sort, Quick Sort, Binary Search (revisited as D&C)',
              description: 'Illustrative algorithms that utilize Divide and Conquer.',
              codeLessons: []
            },
            {
              title: 'Master Theorem (conceptual, for analyzing recurrence relations)',
              description: 'A conceptual overview of a theorem for analyzing the time complexity of recursive algorithms.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-16-greedy-algorithms',
          title: 'Greedy Algorithms',
          duration: '60 min',
          subtopics: [
            {
              title: 'Principle: Making the locally optimal choice at each step with the hope of finding a global optimum',
              description: 'The core idea behind greedy algorithms.',
              codeLessons: []
            },
            {
              title: 'When Greedy works (and when it doesn\'t)',
              description: 'Understanding the applicability and limitations of greedy approaches.',
              codeLessons: []
            },
            {
              title: 'Common examples: Coin change (if standard denominations), Activity Selection Problem',
              description: 'Illustrative problems solvable with greedy algorithms.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-17-advanced-string-algorithms',
          title: 'Advanced String Algorithms',
          duration: '60 min',
          subtopics: [
            {
              title: 'Rabin-Karp Algorithm (conceptual for substring search)',
              description: 'An algorithm for efficient substring searching using hashing.',
              codeLessons: []
            },
            {
              title: 'Knuth-Morris-Pratt (KMP) Algorithm (conceptual for pattern matching)',
              description: 'A linear-time string matching algorithm.',
              codeLessons: []
            },
            {
              title: 'Manacher\'s Algorithm (conceptual for longest palindromic substring)',
              description: 'An algorithm to find the longest palindromic substring in linear time.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Text search, string compression, plagiarism detection',
              description: 'Practical applications of advanced string algorithms.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-18-system-design-dsa',
          title: 'System Design Thinking with DSA',
          duration: '90 min',
          subtopics: [
            {
              title: 'Applying DSA to real-world front-end problems (e.g., virtualized lists, efficient search filters, infinite scroll, debouncing/throttling, component state management).',
              description: 'Bridging the gap between theoretical DSA and practical front-end challenges.',
              codeLessons: []
            },
            {
              title: 'Choosing the right data structure for specific UI challenges',
              description: 'Making informed decisions about data structure selection for optimal performance.',
              codeLessons: []
            },
            {
              title: 'Performance bottlenecks in the browser\'s rendering pipeline (revisited with DSA lens)',
              description: 'Understanding how DSA can address browser performance issues.',
              codeLessons: []
            },
            {
              title: 'Trade-offs: Time vs. Space, Simplicity vs. Optimization',
              description: 'Balancing different factors in system design and algorithm selection.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'dsa-lesson-19-bit-manipulation',
          title: 'Bit Manipulation (Conceptual for JavaScript)',
          duration: '45 min',
          subtopics: [
            {
              title: 'Bitwise Operators (&, |, ^, ~, <<, >>, >>>)',
              description: 'Understanding the fundamental bitwise operators in JavaScript.',
              codeLessons: []
            },
            {
              title: 'Use Cases: Flags, permissions, optimizing certain numeric operations (less common in high-level JS, but good for interview depth)',
              description: 'Applications of bit manipulation, especially in lower-level or highly optimized scenarios.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-3-dsa-quiz',
        title: 'Quiz: Optimization & System-Level Thinking with DSA',
        questions: [
          {
            id: 's3q1-dsa',
            question: 'Which graph traversal algorithm is typically used to find the shortest path in an unweighted graph?',
            options: ['Depth-First Search (DFS)', 'Dijkstra\'s Algorithm', 'Breadth-First Search (BFS)', 'A* Search'],
            correctAnswer: 2
          },
          {
            id: 's3q2-dsa',
            question: 'Dynamic Programming solves problems by breaking them into overlapping subproblems and what other key property?',
            options: ['Optimal Substructure', 'Randomization', 'Local Optimality', 'Greedy Choice Property'],
            correctAnswer: 0
          },
          {
            id: 's3q3-dsa',
            question: 'A Trie (Prefix Tree) is most suitable for which of the following use cases?',
            options: ['Implementing a Priority Queue', 'Finding the shortest path in a graph', 'Autocomplete and spell checkers', 'Sorting large arrays'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'dsa-project-13-web-app-routing-graph',
          title: 'Project 13: Web Application Routing as a Graph',
          description: 'Model a simplified web application\'s routing structure as a graph (pages as nodes, links as edges). Implement BFS to find the shortest path between two pages or DFS to list all reachable pages from a starting point.',
          checkpoint: 'Implement BFS or DFS to find if a path exists between two nodes in a graph.' // Reused from quiz
        },
        {
          id: 'dsa-project-14-ui-layout-dp',
          title: 'Project 14: Conceptual UI Layout Optimization with DP',
          description: '(Conceptual) For a UI layout problem where elements have certain weights and need to fit within a maximum width, consider how DP might be used to find an optimal arrangement.',
          checkpoint: 'Implement a solution to the Fibonacci sequence using both a naive recursive approach and a memoized DP approach, comparing their performance.' // Reused from quiz
        },
        {
          id: 'dsa-project-15-autocomplete-trie',
          title: 'Project 15: Autocomplete Feature with Trie',
          description: 'Build a basic "Autocomplete" feature for a search bar. Use a Trie to store a dictionary of words and efficiently suggest words as the user types.',
          checkpoint: 'Design a PriorityQueue using a Min-Heap.' // Reused from quiz
        },
        {
          id: 'dsa-project-16-max-subarray-sum',
          title: 'Project 16: Max Subarray Sum Implementation',
          description: 'Implement a function to find the maximum subarray sum (Kadane\'s Algorithm or Divide and Conquer approach) in an array.',
          checkpoint: 'Identify a problem that can be efficiently solved using the Divide and Conquer paradigm.' // Reused from quiz
        },
        {
          id: 'dsa-project-17-meeting-scheduler',
          title: 'Project 17: Meeting Room Scheduler (Greedy)',
          description: 'Implement a "Meeting Room Scheduler" that maximizes the number of meetings that can be scheduled given a list of start and end times, using a greedy approach.',
          checkpoint: 'Determine if a given problem can be solved with a greedy approach.' // Reused from quiz
        },
        {
          id: 'dsa-project-18-text-editor-find-conceptual',
          title: 'Project 18: Conceptual Text Editor "Find" Functionality',
          description: '(Conceptual) Research and understand how a text editor\'s "find" functionality might leverage advanced string searching algorithms for performance.',
          checkpoint: '(Conceptual) Given a text and a pattern, explain how a specific advanced string algorithm would find occurrences.' // Reused from quiz
        },
        {
          id: 'dsa-project-19-virtualized-list-design',
          title: 'Project 19: Virtualized List Component Design',
          description: 'Design a conceptual solution for a "Virtualized List" component (e.g., for a chat application with many messages), specifying the data structures and algorithms needed to efficiently render only visible items.',
          checkpoint: 'Translate complex front-end requirements into appropriate DSA choices.' // Reused from quiz
        },
        {
          id: 'dsa-project-20-permission-system-conceptual',
          title: 'Project 20: Conceptual Permission System with Bit Flags',
          description: '(Conceptual) Design a simple permission system where user roles are represented by bit flags, and you can check if a user has a specific permission.',
          checkpoint: 'Use bitwise operators to check if a number is even/odd or to swap two numbers without a temporary variable.' // Reused from quiz
        }
      ]
    }
  ]
};

export default dsaForFrontendCourse;