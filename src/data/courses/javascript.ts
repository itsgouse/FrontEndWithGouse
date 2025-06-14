import { Course } from '../courses'; // Assuming you have this interface

const javascriptFrontendCourse: Course = {
  id: 'javascript-for-frontend',
  title: 'JavaScript for Front-End Developers',
  description: 'A comprehensive JavaScript curriculum designed for front-end developers, covering everything from core basics and modern ES6+ features to advanced topics like the Event Loop, Web Workers, and performance optimization.',
  icon: 'Hexagon', // Example icon for JavaScript
  color: 'bg-yellow-500', // A suitable color for JavaScript
  estimatedHours: 90, // Estimated based on content depth
  totalLessons: 34, // Sum of lessons across all sections
  sections: [
    {
      id: 'section-1-basics-js',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 'js-lesson-1-intro-variables',
          title: 'Introduction to JavaScript & Variables',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is JavaScript? Role in web development',
              description: 'Understanding the fundamental purpose and application of JavaScript in building interactive web experiences.',
              codeLessons: []
            },
            {
              title: 'How JavaScript runs (browser console, `<script>` tags)',
              description: 'Exploring the different environments where JavaScript code executes.',
              codeLessons: []
            },
            {
              title: 'Variables: `var`, `let`, `const` (differences and best practices)',
              description: 'Detailed explanation of variable declaration keywords and modern recommendations.',
              codeLessons: [
                {
                  lessonTitle: 'Declaring Variables with var, let, and const',
                  codeSnippet: `var oldSchool = "This is var";
let modernVariable = 123;
const immutableValue = "Cannot reassign this";

console.log(oldSchool); // "This is var"
console.log(modernVariable); // 123
console.log(immutableValue); // "Cannot reassign this"

// var allows re-declaration and re-assignment (not recommended)
var oldSchool = "Var is re-declared";
oldSchool = "Var is re-assigned";

// let allows re-assignment but not re-declaration in the same scope
modernVariable = 456;
// let modernVariable = 789; // Uncaught SyntaxError: Identifier 'modernVariable' has already been declared

// const does not allow re-assignment
// immutableValue = "Trying to reassign"; // Uncaught TypeError: Assignment to constant variable.`,
                  explanation: 'This code demonstrates the key differences between `var`, `let`, and `const` in terms of re-declaration and re-assignment. `let` and `const` offer block-scoping and are preferred for modern JavaScript development.',
                  imageUrl: ''
                }
              ]
            },
            {
              title: 'Data Types: Primitive (String, Number, Boolean, Undefined, Null, Symbol, BigInt)',
              description: 'Comprehensive overview of JavaScript\'s built-in primitive data types.',
              codeLessons: []
            },
            {
              title: '`typeof` operator',
              description: 'Using the `typeof` operator to determine the type of a variable.',
              codeLessons: []
            },
            {
              title: 'Type Coercion (basic understanding)',
              description: 'Introduction to how JavaScript implicitly converts types during operations.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-2-operators-expressions',
          title: 'Operators & Expressions',
          duration: '60 min',
          subtopics: [
            {
              title: 'Arithmetic Operators (`+`, `-`, `*`, `/`, `%`, `**`)',
              description: 'Performing mathematical calculations in JavaScript.',
              codeLessons: []
            },
            {
              title: 'Assignment Operators (`=`, `+=`, `-=`, etc.)',
              description: 'Shorthand for assigning values after an operation.',
              codeLessons: []
            },
            {
              title: 'Comparison Operators (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`)',
              description: 'Comparing values for equality and order, with emphasis on strict vs. loose equality.',
              codeLessons: []
            },
            {
              title: 'Logical Operators (`&&`, `||`, `!`)',
              description: 'Combining and negating boolean expressions.',
              codeLessons: []
            },
            {
              title: 'Increment/Decrement Operators (`++`, `--`)',
              description: 'Shorthand for increasing or decreasing numeric values.',
              codeLessons: []
            },
            {
              title: 'Operator Precedence',
              description: 'Understanding the order in which operators are evaluated in an expression.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-3-control-flow-conditionals',
          title: 'Control Flow (Conditionals)',
          duration: '60 min',
          subtopics: [
            {
              title: '`if`, `else if`, `else` statements',
              description: 'Executing code blocks based on conditions.',
              codeLessons: []
            },
            {
              title: 'Ternary Operator (`condition ? true : false`)',
              description: 'A concise way to write simple conditional expressions.',
              codeLessons: []
            },
            {
              title: '`switch` statement',
              description: 'Handling multiple conditions based on a single value.',
              codeLessons: []
            },
            {
              title: 'Falsy and Truthy values',
              description: 'Understanding values that evaluate to `false` or `true` in a boolean context.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-4-control-flow-loops',
          title: 'Control Flow (Loops)',
          duration: '60 min',
          subtopics: [
            {
              title: '`for` loop',
              description: 'Iterating a specific number of times.',
              codeLessons: []
            },
            {
              title: '`while` loop',
              description: 'Looping as long as a condition is true.',
              codeLessons: []
            },
            {
              title: '`do...while` loop',
              description: 'Similar to `while`, but guarantees at least one execution.',
              codeLessons: []
            },
            {
              title: '`break` and `continue` statements',
              description: 'Controlling loop execution flow.',
              codeLessons: []
            },
            {
              title: 'Iterating over arrays and simple data structures',
              description: 'Basic methods for traversing collections of data.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-5-functions-basics',
          title: 'Functions (Basics)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Function Declaration',
              description: 'Defining functions using the `function` keyword.',
              codeLessons: []
            },
            {
              title: 'Function Expression',
              description: 'Assigning functions to variables.',
              codeLessons: []
            },
            {
              title: 'Arrow Functions (basic syntax)',
              description: 'A concise syntax for writing functions.',
              codeLessons: []
            },
            {
              title: 'Parameters and Arguments',
              description: 'Passing data into functions and receiving data from them.',
              codeLessons: []
            },
            {
              title: '`return` statement',
              description: 'Specifying the output of a function.',
              codeLessons: []
            },
            {
              title: 'Scope (Global vs. Local/Function Scope)',
              description: 'Understanding variable accessibility within different parts of code.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-6-arrays',
          title: 'Arrays',
          duration: '60 min',
          subtopics: [
            {
              title: 'Declaring Arrays',
              description: 'Creating ordered lists of data.',
              codeLessons: []
            },
            {
              title: 'Accessing elements by index',
              description: 'Retrieving specific items from an array.',
              codeLessons: []
            },
            {
              title: 'Array methods: `push()`, `pop()`, `shift()`, `unshift()`',
              description: 'Modifying arrays by adding or removing elements from ends.',
              codeLessons: []
            },
            {
              title: '`length` property',
              description: 'Determining the number of elements in an array.',
              codeLessons: []
            },
            {
              title: 'Iterating over arrays (`for` loop, `for...of` loop)',
              description: 'Looping through array elements.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-7-objects',
          title: 'Objects',
          duration: '60 min',
          subtopics: [
            {
              title: 'Object Literals: Creating objects with key-value pairs',
              description: 'Defining collections of related data and functionality.',
              codeLessons: []
            },
            {
              title: 'Accessing properties (dot notation vs. bracket notation)',
              description: 'Retrieving values from object properties.',
              codeLessons: []
            },
            {
              title: 'Adding and deleting properties',
              description: 'Modifying the structure of an object.',
              codeLessons: []
            },
            {
              title: 'Nested Objects',
              description: 'Structuring complex data within objects.',
              codeLessons: []
            },
            {
              title: 'Iterating over object properties (`for...in` loop, `Object.keys()`)',
              description: 'Looping through an object\'s properties.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-8-dom-manipulation-basic',
          title: 'DOM Manipulation (Basic)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is the DOM? (Document Object Model)',
              description: 'Understanding the tree-like representation of HTML documents that JavaScript can interact with.',
              codeLessons: []
            },
            {
              title: 'Selecting elements: `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, `querySelectorAll()`',
              description: 'Various methods for finding specific HTML elements on a page.',
              codeLessons: []
            },
            {
              title: 'Modifying content: `textContent`, `innerHTML`',
              description: 'Changing the text or HTML content within an element.',
              codeLessons: []
            },
            {
              title: 'Modifying attributes: `setAttribute()`, `getAttribute()`',
              description: 'Setting and retrieving HTML attribute values.',
              codeLessons: []
            },
            {
              title: 'Modifying styles: `element.style.property`',
              description: 'Changing inline CSS properties of elements.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-9-event-handling-basic',
          title: 'Event Handling (Basic)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Event Listeners: `addEventListener()`',
              description: 'Attaching functions to respond to specific user or browser events.',
              codeLessons: []
            },
            {
              title: 'Common events: `click`, `mouseover`, `mouseout`, `keydown`',
              description: 'Popular events that trigger JavaScript functions.',
              codeLessons: []
            },
            {
              title: 'Event Object: `event.target`, `event.preventDefault()`',
              description: 'Accessing information about the event that occurred and controlling default browser behavior.',
              codeLessons: []
            },
            {
              title: 'Event Bubbling (brief introduction)',
              description: 'A conceptual understanding of how events propagate through the DOM tree.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-10-intro-async-callbacks',
          title: 'Introduction to Asynchronous JavaScript (Callbacks)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Understanding Asynchronous vs. Synchronous execution',
              description: 'Distinguishing between code that runs sequentially and code that can execute independently.',
              codeLessons: []
            },
            {
              title: 'Callbacks: Functions passed as arguments',
              description: 'A fundamental pattern for handling asynchronous operations in older JavaScript.',
              codeLessons: []
            },
            {
              title: 'Simulating asynchronous operations with `setTimeout()` and `setInterval()`',
              description: 'Using built-in browser functions to practice asynchronous patterns.',
              codeLessons: []
            },
            {
              title: 'Callback Hell (conceptual understanding of the problem)',
              description: 'Identifying the challenges of deeply nested callbacks.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-1-js-quiz',
        title: 'Quiz: Core JavaScript Foundations',
        questions: [
          {
            id: 's1q1-js',
            question: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
            options: ['var', 'let', 'const', 'function'],
            correctAnswer: 2
          },
          {
            id: 's1q2-js',
            question: 'What will `console.log("5" + 3);` output?',
            options: ['8', '53', 'NaN', 'Error'],
            correctAnswer: 1
          },
          {
            id: 's1q3-js',
            question: 'Which DOM method is used to select the first element that matches a specified CSS selector?',
            options: ['getElementById()', 'getElementsByClassName()', 'querySelector()', 'querySelectorAll()'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'js-project-1-variables-display',
          title: 'Project 1: Variables and Data Types Display',
          description: 'Write a simple script that declares variables of different types and logs their values and types to the console.',
          checkpoint: 'Variables are declared correctly with `let`/`const`, and data types are understood.'
        },
        {
          id: 'js-project-2-simple-calculator',
          title: 'Project 2: Simple Calculator Script',
          description: 'Create a simple calculator script that takes two numbers and performs various arithmetic operations, logging the results.',
          checkpoint: 'Operators are used correctly, and expression results are predictable.'
        },
        {
          id: 'js-project-3-guess-number-game',
          title: 'Project 3: Guess the Number Game',
          description: 'Build a "Guess the Number" game where the script generates a random number and the user gets feedback (too high, too low, correct) based on their guess.',
          checkpoint: 'Logic branches correctly based on conditions.'
        },
        {
          id: 'js-project-4-multiplication-table',
          title: 'Project 4: Multiplication Table Generator',
          description: 'Generate a multiplication table (1-10) using nested loops and print it to the console.',
          checkpoint: 'Loops execute correctly, and `break`/`continue` are used appropriately.'
        },
        {
          id: 'js-project-5-math-functions',
          title: 'Project 5: Basic Math Functions',
          description: 'Create a set of functions for common mathematical operations (add, subtract, multiply, divide) and use them to calculate results.',
          checkpoint: 'Functions are defined and called correctly, and return expected values.'
        },
        {
          id: 'js-project-6-shopping-list',
          title: 'Project 6: Simple Shopping List Application',
          description: 'Build a simple "Shopping List" application that allows users to add items, remove items, and display the current list.',
          checkpoint: 'Arrays are managed effectively, and items can be added/removed.'
        },
        {
          id: 'js-project-7-book-catalog',
          title: 'Project 7: Book Catalog with Objects',
          description: 'Create a "Book Catalog" where each book is an object with properties like title, author, and year. Store multiple book objects in an array and display their details.',
          checkpoint: 'Objects are structured logically, and properties are accessed correctly.'
        },
        {
          id: 'js-project-8-light-switch',
          title: 'Project 8: Light Switch (DOM Manipulation)',
          description: 'Build a simple "Light Switch" where clicking a button toggles a light bulb image between on/off states and changes its background color.',
          checkpoint: 'JavaScript interacts with HTML elements, changing their appearance and content.'
        },
        {
          id: 'js-project-9-counter-app',
          title: 'Project 9: Click Counter Application',
          description: 'Create a "Click Me" button. Each click should increment a counter displayed on the page. Add another button to reset the counter.',
          checkpoint: 'User interactions trigger JavaScript functions correctly.'
        },
        {
          id: 'js-project-10-delayed-messages',
          title: 'Project 10: Delayed Message Sequence',
          description: 'Create a sequence of messages that appear one after another with delays using `setTimeout` (e.g., "Loading...", "Fetching data...", "Done!").',
          checkpoint: 'Asynchronous operations are understood and basic callbacks are implemented.'
        }
      ]
    },
    {
      id: 'section-2-medium-js',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'js-lesson-11-es6-features',
          title: 'ES6+ Features (Modern JavaScript Syntax)',
          duration: '90 min',
          subtopics: [
            {
              title: '`let` and `const` revisited (block scope)',
              description: 'A deeper dive into the scoping rules of `let` and `const`.',
              codeLessons: []
            },
            {
              title: 'Template Literals (backticks for strings and expressions)',
              description: 'Using template literals for easy string interpolation and multi-line strings.',
              codeLessons: [
                {
                  lessonTitle: 'Using Template Literals',
                  codeSnippet: `const name = "Alice";
const age = 30;
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting); // "Hello, my name is Alice and I am 30 years old."

const multiLine = \`
  This is a
  multi-line
  string.
\`;
console.log(multiLine);`,
                  explanation: 'Template literals, defined by backticks (`` ` ``), allow for easy embedding of expressions using `${expression}` and support multi-line strings without special characters.',
                  imageUrl: ''
                }
              ]
            },
            {
              title: 'Destructuring Assignment (Array and Object)',
              description: 'Extracting values from arrays or properties from objects into distinct variables.',
              codeLessons: []
            },
            {
              title: 'Spread Syntax (`...`) for arrays and objects',
              description: 'Expanding iterables (like arrays) into individual elements or object properties.',
              codeLessons: []
            },
            {
              title: 'Rest Parameters (`...`) in function arguments',
              description: 'Collecting an indefinite number of arguments into an array.',
              codeLessons: []
            },
            {
              title: 'Default Parameters',
              description: 'Setting default values for function parameters if none are provided.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-12-promises-deep-dive',
          title: 'Asynchronous JavaScript (Promises Deep Dive)',
          duration: '90 min',
          subtopics: [
            {
              title: 'What are Promises? (States: Pending, Fulfilled, Rejected)',
              description: 'Understanding Promises as objects representing the eventual completion or failure of an asynchronous operation.',
              codeLessons: []
            },
            {
              title: '`new Promise()` constructor',
              description: 'Manually creating new Promise objects.',
              codeLessons: []
            },
            {
              title: '`then()`, `catch()`, `finally()` methods',
              description: 'Handling the different outcomes of a Promise.',
              codeLessons: []
            },
            {
              title: 'Chaining Promises',
              description: 'Sequencing multiple asynchronous operations.',
              codeLessons: []
            },
            {
              title: '`Promise.all()`, `Promise.race()`, `Promise.any()`, `Promise.allSettled()`',
              description: 'Methods for handling multiple Promises concurrently.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-13-async-await',
          title: 'Asynchronous JavaScript (Async/Await)',
          duration: '60 min',
          subtopics: [
            {
              title: '`async` keyword for functions',
              description: 'Defining an asynchronous function that implicitly returns a Promise.',
              codeLessons: []
            },
            {
              title: '`await` keyword for pausing execution until a Promise resolves',
              description: 'Making asynchronous code look and behave more like synchronous code.',
              codeLessons: []
            },
            {
              title: 'Error handling with `try...catch` in `async/await`',
              description: 'Implementing robust error handling in `async/await` functions.',
              codeLessons: []
            },
            {
              title: 'Benefits over traditional Promise chaining',
              description: 'Advantages of `async/await` for readability and maintainability.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-14-fetch-api',
          title: 'Fetch API & HTTP Requests',
          duration: '90 min',
          subtopics: [
            {
              title: 'Making GET requests with `fetch()`',
              description: 'Fetching data from external resources using the Fetch API.',
              codeLessons: []
            },
            {
              title: 'Handling JSON responses (`response.json()`)',
              description: 'Parsing JSON data received from an API.',
              codeLessons: []
            },
            {
              title: 'Making POST, PUT, DELETE requests (`method`, `headers`, `body`)',
              description: 'Performing various types of HTTP requests for data manipulation.',
              codeLessons: []
            },
            {
              title: 'Cross-Origin Resource Sharing (CORS) - conceptual understanding',
              description: 'A brief overview of security mechanisms related to cross-origin requests.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-15-error-handling',
          title: 'Error Handling',
          duration: '60 min',
          subtopics: [
            {
              title: '`try...catch` block for synchronous errors',
              description: 'Handling errors that occur during synchronous code execution.',
              codeLessons: []
            },
            {
              title: 'Error object properties (`name`, `message`)',
              description: 'Inspecting the details of an error object.',
              codeLessons: []
            },
            {
              title: 'Custom Error types (brief introduction)',
              description: 'Creating specialized error classes for specific scenarios.',
              codeLessons: []
            },
            {
              title: 'Error handling in asynchronous code (`.catch()` with Promises, `try...catch` with `async/await`)',
              description: 'Implementing robust error handling for asynchronous operations.',
              codeLessons: []
            },
            {
              title: 'Global error handling (e.g., `window.onerror`, `unhandledrejection`)',
              description: 'Catching unhandled errors at the global level.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-16-modern-modules',
          title: 'Modern JavaScript Modules (ESM)',
          duration: '60 min',
          subtopics: [
            {
              title: 'The module system: `import` and `export` statements',
              description: 'Organizing and reusing code across multiple JavaScript files.',
              codeLessons: []
            },
            {
              title: 'Named vs. Default exports/imports',
              description: 'Different ways to export and import module members.',
              codeLessons: []
            },
            {
              title: 'Module Scope',
              description: 'Understanding how variables and functions are scoped within modules.',
              codeLessons: []
            },
            {
              title: 'Dynamic Imports (`import()`)',
              description: 'Loading modules conditionally or on demand.',
              codeLessons: []
            },
            {
              title: 'When to use modules (code organization, reusability)',
              description: 'Best practices for structuring large JavaScript applications.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-17-higher-order-functions',
          title: 'Higher-Order Functions & Array Methods',
          duration: '90 min',
          subtopics: [
            {
              title: 'What are Higher-Order Functions? (Functions as arguments/return values)',
              description: 'Understanding functions that operate on or return other functions.',
              codeLessons: []
            },
            {
              title: 'Array iteration methods: `forEach()`, `map()`, `filter()`, `reduce()`',
              description: 'Powerful methods for transforming, filtering, and aggregating array data.',
              codeLessons: []
            },
            {
              title: '`find()`, `findIndex()`, `some()`, `every()`',
              description: 'Additional array methods for searching and checking conditions.',
              codeLessons: []
            },
            {
              title: 'Chaining array methods',
              description: 'Combining multiple array methods for complex data transformations.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-18-oop-classes',
          title: 'Object-Oriented Programming (OOP) in JavaScript',
          duration: '90 min',
          subtopics: [
            {
              title: 'Classes (ES6 `class` syntax)',
              description: 'Using the modern `class` syntax for object-oriented programming.',
              codeLessons: []
            },
            {
              title: '`constructor` method',
              description: 'Initializing objects when they are created.',
              codeLessons: []
            },
            {
              title: 'Class properties and methods',
              description: 'Defining data and behavior within a class.',
              codeLessons: []
            },
            {
              title: '`extends` keyword for inheritance',
              description: 'Creating new classes based on existing ones.',
              codeLessons: []
            },
            {
              title: '`super` keyword for calling parent methods',
              description: 'Accessing methods and constructors of the parent class.',
              codeLessons: []
            },
            {
              title: '`static` methods',
              description: 'Methods that belong to the class itself, not to instances.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-19-prototypal-inheritance',
          title: 'Prototypal Inheritance',
          duration: '60 min',
          subtopics: [
            {
              title: 'Understanding Prototypes (`__proto__`, `prototype`)',
              description: 'The fundamental mechanism for inheritance in JavaScript.',
              codeLessons: []
            },
            {
              title: '`Object.create()`',
              description: 'Creating new objects with a specified prototype object.',
              codeLessons: []
            },
            {
              title: '`new` keyword and constructor functions',
              description: 'Traditional way of creating objects and defining their prototypes.',
              codeLessons: []
            },
            {
              title: '`this` keyword context in traditional functions (brief intro to `call`, `apply`, `bind`)',
              description: 'A conceptual introduction to controlling the `this` context.',
              codeLessons: []
            },
            {
              title: 'Prototype chain lookup',
              description: 'How JavaScript resolves property and method lookups through the prototype chain.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-20-json-data-serialization',
          title: 'JSON and Data Serialization',
          duration: '45 min',
          subtopics: [
            {
              title: 'What is JSON? (JavaScript Object Notation)',
              description: 'Understanding JSON as a lightweight data-interchange format.',
              codeLessons: []
            },
            {
              title: '`JSON.parse()`: Converting JSON string to JavaScript object',
              description: 'Deserializing JSON data into native JavaScript objects.',
              codeLessons: []
            },
            {
              title: '`JSON.stringify()`: Converting JavaScript object to JSON string',
              description: 'Serializing JavaScript objects into JSON strings for storage or transmission.',
              codeLessons: []
            },
            {
              title: 'Common use cases: API communication, local storage',
              description: 'Practical scenarios where JSON is extensively used.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-21-web-storage-apis',
          title: 'Web Storage APIs',
          duration: '45 min',
          subtopics: [
            {
              title: '`localStorage` and `sessionStorage` (deep dive from HTML5 lesson)',
              description: 'Understanding persistent and session-based client-side storage.',
              codeLessons: []
            },
            {
              title: 'Storing and retrieving data (revisit `setItem`, `getItem`, `removeItem`, `clear`)',
              description: 'Core methods for interacting with Web Storage.',
              codeLessons: []
            },
            {
              title: 'Differences and use cases',
              description: 'When to choose `localStorage` versus `sessionStorage`.',
              codeLessons: []
            },
            {
              title: 'Handling JSON data with Storage APIs',
              description: 'Best practices for storing complex data structures in Web Storage.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-22-browser-apis',
          title: 'Browser APIs (Geolocation, History, etc.)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Geolocation API: Accessing user\'s location (`navigator.geolocation`)',
              description: 'Using the Geolocation API to get location data.',
              codeLessons: []
            },
            {
              title: 'History API: `history.pushState()`, `history.replaceState()`, `popstate` event',
              description: 'Manipulating browser history programmatically.',
              codeLessons: []
            },
            {
              title: '`window.location` object',
              description: 'Accessing and modifying the current URL.',
              codeLessons: []
            },
            {
              title: 'Clipboard API (conceptual, for copy/paste)',
              description: 'A conceptual introduction to interacting with the system clipboard.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-2-js-quiz',
        title: 'Quiz: Intermediate & Real-World JavaScript',
        questions: [
          {
            id: 's2q1-js',
            question: 'Which ES6+ feature allows you to extract values from arrays or properties from objects into distinct variables concisely?',
            options: ['Template Literals', 'Spread Syntax', 'Destructuring Assignment', 'Rest Parameters'],
            correctAnswer: 2
          },
          {
            id: 's2q2-js',
            question: 'What are the three states a Promise can be in?',
            options: ['Start, Middle, End', 'Pending, Resolved, Rejected', 'Pending, Fulfilled, Rejected', 'Waiting, Success, Failure'],
            correctAnswer: 2
          },
          {
            id: 's2q3-js',
            question: 'Which array method is best suited for transforming each element in an array into a new array based on a provided function?',
            options: ['forEach()', 'filter()', 'reduce()', 'map()'],
            correctAnswer: 3
          }
        ]
      },
      projects: [
        {
          id: 'js-project-11-es6-refactor',
          title: 'Project 11: ES6+ Refactor of Existing Project',
          description: 'Rewrite parts of your "Shopping List" or "Book Catalog" project to extensively use ES6+ features like destructuring for object/array access and template literals for display.',
          checkpoint: 'Code is cleaner and more concise using modern ES6+ syntax.'
        },
        {
          id: 'js-project-12-chained-promises-fetch',
          title: 'Project 12: Chained Promises Data Fetching',
          description: 'Simulate a data fetching process that involves multiple steps (e.g., fetch user, then fetch user\'s posts) using chained promises. Handle success and error states.',
          checkpoint: 'Promises are used effectively to manage asynchronous flow and handle errors.'
        },
        {
          id: 'js-project-13-async-await-refactor',
          title: 'Project 13: Async/Await Refactor of Data Fetching',
          description: 'Refactor the data fetching project from Lesson 12 (Promises Deep Dive) to use `async/await` for a cleaner, more readable implementation.',
          checkpoint: 'Asynchronous code is written more clearly and robustly with `async/await`.'
        },
        {
          id: 'js-project-14-quote-generator',
          title: 'Project 14: Quote Generator with Fetch API',
          description: 'Build a simple "Quote Generator" that fetches a random quote from an API (e.g., ZenQuotes API or a similar public API) and displays it on button click.',
          checkpoint: 'Data is successfully fetched from external APIs and displayed dynamically.'
        },
        {
          id: 'js-project-15-graceful-error-handling',
          title: 'Project 15: Graceful Error Handling for API Calls',
          description: 'Enhance your "Quote Generator" or "To-Do List" to gracefully handle API errors (e.g., network issues, invalid responses) by displaying a user-friendly error message.',
          checkpoint: 'Application handles errors gracefully, preventing crashes and informing the user.'
        },
        {
          id: 'js-project-16-modular-app',
          title: 'Project 16: Modular JavaScript Application',
          description: 'Split your "Shopping List" or "Book Catalog" project into multiple JavaScript files, using `import` and `export` to manage functions and data across files.',
          checkpoint: 'Code is modularized using ES Modules, and dependencies are managed correctly.'
        },
        {
          id: 'js-project-17-product-data-transformation',
          title: 'Project 17: Product Data Transformation with HOFs',
          description: 'Given an array of objects (e.g., products with price and category), filter products by category, map them to a new structure, and calculate the total price of selected items using `reduce`.',
          checkpoint: 'Data transformations and aggregations are performed efficiently using higher-order array methods.'
        },
        {
          id: 'js-project-18-animal-inheritance',
          title: 'Project 18: Animal Class Hierarchy',
          description: 'Design a simple "Animal" class with properties (name, sound) and a method (`makeSound`). Then, create `Dog` and `Cat` classes that extend `Animal` and override the `makeSound` method.',
          checkpoint: 'Object-Oriented principles (encapsulation, inheritance) are applied using ES6 classes.'
        },
        {
          id: 'js-project-19-prototypal-animal',
          title: 'Project 19: Prototypal Animal Inheritance (Pre-ES6)',
          description: 'Implement the `Animal`, `Dog`, `Cat` example from Lesson 18 using constructor functions and prototypal inheritance (before ES6 classes).',
          checkpoint: 'Understand how JavaScript achieves inheritance through prototypes.'
        },
        {
          id: 'js-project-20-localstorage-todo',
          title: 'Project 20: Persistent To-Do List with LocalStorage',
          description: 'Modify your "Shopping List" or "To-Do List" to save and load its data from `localStorage` using `JSON.stringify()` and `JSON.parse()`.',
          checkpoint: 'Data is correctly serialized and deserialized for storage or transmission.'
        },
        {
          id: 'js-project-21-user-preferences',
          title: 'Project 21: User Preferences with LocalStorage',
          description: 'Build a simple "User Preferences" page where settings (e.g., theme preference, preferred language) are saved to `localStorage` and loaded on page reload.',
          checkpoint: 'Data persists across browser sessions using `localStorage`.'
        },
        {
          id: 'js-project-22-geolocation-display',
          title: 'Project 22: Geolocation Display',
          description: 'Create a small page that displays the user\'s current latitude and longitude (requires user permission).',
          checkpoint: 'JavaScript interacts with browser-specific features.'
        }
      ]
    },
    {
      id: 'section-3-advanced-js',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 'js-lesson-23-event-loop',
          title: 'The Event Loop & Concurrency Model',
          duration: '90 min',
          subtopics: [
            {
              title: 'Call Stack',
              description: 'Understanding the synchronous execution context of JavaScript.',
              codeLessons: []
            },
            {
              title: 'Web APIs (timers, DOM events, HTTP requests)',
              description: 'Browser-provided APIs that handle asynchronous tasks outside the Call Stack.',
              codeLessons: []
            },
            {
              title: 'Callback Queue (Task Queue)',
              description: 'Where tasks from Web APIs are placed once completed.',
              codeLessons: []
            },
            {
              title: 'Microtask Queue',
              description: 'A higher-priority queue for promises and mutation observers.',
              codeLessons: []
            },
            {
              title: 'Event Loop mechanism',
              description: 'The central piece that orchestrates the movement of tasks between queues and the Call Stack.',
              codeLessons: []
            },
            {
              title: 'Understanding blocking vs. non-blocking operations',
              description: 'Distinguishing between code that freezes the UI and code that allows continued responsiveness.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-24-closures-scope-chains',
          title: 'Closures & Scope Chains',
          duration: '90 min',
          subtopics: [
            {
              title: 'What is a Closure?',
              description: 'Understanding how a function remembers its lexical environment even when executed outside that environment.',
              codeLessons: []
            },
            {
              title: 'How Closures are formed (function accessing its lexical environment)',
              description: 'The conditions under which closures are created.',
              codeLessons: []
            },
            {
              title: 'Use cases: Data privacy, currying, module patterns, maintaining state in callbacks',
              description: 'Practical applications of closures for robust and maintainable code.',
              codeLessons: []
            },
            {
              title: 'Practical examples of closures in action',
              description: 'Hands-on demonstrations of closure usage.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-25-this-keyword-context',
          title: 'The `this` Keyword & Context',
          duration: '90 min',
          subtopics: [
            {
              title: 'Understanding `this` in different contexts: Global, Function, Method, Constructor, Event Handler',
              description: 'Detailed analysis of how `this` behaves depending on how a function is called.',
              codeLessons: []
            },
            {
              title: 'Explicit binding: `call()`, `apply()`, `bind()`',
              description: 'Methods to explicitly control the value of `this`.',
              codeLessons: []
            },
            {
              title: 'Arrow functions and `this` (lexical `this`)',
              description: 'How arrow functions simplify `this` binding by inheriting it from their lexical scope.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-26-prototypes-classes-deep-dive',
          title: 'Prototypes & Classes (Deep Dive)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Revisiting prototype chain in detail',
              description: 'A more in-depth exploration of how JavaScript objects inherit properties and methods.',
              codeLessons: []
            },
            {
              title: '`Object.prototype`',
              description: 'The root of the JavaScript object hierarchy.',
              codeLessons: []
            },
            {
              title: '`Object.getPrototypeOf()`, `Object.setPrototypeOf()`',
              description: 'Methods for inspecting and manipulating prototypes.',
              codeLessons: []
            },
            {
              title: '`instanceof` operator',
              description: 'Checking if an object is an instance of a particular constructor or class.',
              codeLessons: []
            },
            {
              title: 'Class syntax sugar over prototypes',
              description: 'Understanding that ES6 classes are syntactic sugar over JavaScript\'s existing prototypal inheritance.',
              codeLessons: []
            },
            {
              title: 'Private class fields (ES2022)',
              description: 'A new feature for defining truly private class members.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-27-generators-iterators',
          title: 'Generators & Iterators',
          duration: '60 min',
          subtopics: [
            {
              title: 'Iterators and the Iterable Protocol (`Symbol.iterator`)',
              description: 'Understanding how objects can be made iterable for use with `for...of` loops.',
              codeLessons: []
            },
            {
              title: '`for...of` loop',
              description: 'A modern loop for iterating over iterable objects.',
              codeLessons: []
            },
            {
              title: 'Generators: `function*`, `yield` keyword',
              description: 'Special functions that can be paused and resumed, producing a sequence of values.',
              codeLessons: []
            },
            {
              title: 'Use cases for generators (e.g., infinite sequences, asynchronous control flow)',
              description: 'Practical scenarios where generators provide elegant solutions.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-28-proxy-reflect',
          title: 'Proxy & Reflect API',
          duration: '90 min',
          subtopics: [
            {
              title: '`Proxy` object: Intercepting operations on objects',
              description: 'Creating a customizable object that can intercept and redefine fundamental operations.',
              codeLessons: []
            },
            {
              title: '`handler` object and `traps` (e.g., `get`, `set`, `apply`, `construct`)',
              description: 'Defining custom behavior for intercepted operations.',
              codeLessons: []
            },
            {
              title: '`Reflect` API: Mirroring `Proxy` operations',
              description: 'A built-in object that provides methods for interceptable JavaScript operations.',
              codeLessons: []
            },
            {
              title: 'Use cases: Validation, logging, access control, reactivity systems',
              description: 'Advanced applications of Proxy and Reflect in modern frameworks.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-29-web-workers',
          title: 'Web Workers (Deep Dive)',
          duration: '60 min',
          subtopics: [
            {
              title: '`Worker` constructor: Creating dedicated workers',
              description: 'Offloading CPU-intensive tasks to a background thread to prevent UI blocking.',
              codeLessons: []
            },
            {
              title: 'Communication between main thread and worker (`postMessage`, `onmessage`)',
              description: 'Sending data back and forth between the main thread and a Web Worker.',
              codeLessons: []
            },
            {
              title: 'Shared Workers (conceptual)',
              description: 'A conceptual introduction to workers that can be accessed by multiple Browse contexts.',
              codeLessons: []
            },
            {
              title: '`terminate()` worker',
              description: 'Stopping a Web Worker.',
              codeLessons: []
            },
            {
              title: 'Use cases: CPU-intensive tasks, image processing, large data computations without blocking UI',
              description: 'Practical scenarios where Web Workers are invaluable.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-30-websockets',
          title: 'WebSockets API',
          duration: '60 min',
          subtopics: [
            {
              title: 'Introduction to WebSockets: Full-duplex communication over a single TCP connection',
              description: 'Understanding real-time, bidirectional communication between client and server.',
              codeLessons: []
            },
            {
              title: '`WebSocket` constructor',
              description: 'Creating a new WebSocket connection.',
              codeLessons: []
            },
            {
              title: 'WebSocket events: `open`, `message`, `error`, `close`',
              description: 'Handling different lifecycle events of a WebSocket connection.',
              codeLessons: []
            },
            {
              title: 'Sending and receiving messages (`send()`, `onmessage`)',
              description: 'Exchanging data over a WebSocket connection.',
              codeLessons: []
            },
            {
              title: 'Use cases: Real-time chat, live updates, gaming',
              description: 'Applications that benefit from persistent, low-latency communication.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-31-regex-advanced',
          title: 'Regular Expressions (Advanced)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Advanced Metacharacters, Quantifiers, and Assertions',
              description: 'Mastering more complex patterns for string matching.',
              codeLessons: []
            },
            {
              title: 'Character Classes (`[]`, `\d`, `\w`, `\s`)',
              description: 'Matching specific sets of characters.',
              codeLessons: []
            },
            {
              title: 'Groups and Backreferences',
              description: 'Capturing parts of a match and referring to them later.',
              codeLessons: []
            },
            {
              title: 'Lookahead and Lookbehind Assertions',
              description: 'Matching patterns based on what follows or precedes them without including those characters in the match.',
              codeLessons: []
            },
            {
              title: '`RegExp` object methods: `test()`, `exec()`',
              description: 'Methods for testing for matches and extracting detailed match information.',
              codeLessons: []
            },
            {
              title: 'String methods with regex: `match()`, `matchAll()`, `replace()`, `search()`, `split()`',
              description: 'Leveraging regex with built-in string methods for powerful text manipulation.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-32-design-patterns',
          title: 'Design Patterns in JavaScript',
          duration: '90 min',
          subtopics: [
            {
              title: 'Factory Pattern',
              description: 'Creating objects without exposing the instantiation logic.',
              codeLessons: []
            },
            {
              title: 'Singleton Pattern',
              description: 'Ensuring a class has only one instance and providing a global point of access to it.',
              codeLessons: []
            },
            {
              title: 'Module Pattern (and IIFEs)',
              description: 'A classic pattern for organizing code and creating private scope.',
              codeLessons: []
            },
            {
              title: 'Observer Pattern (Publish/Subscribe)',
              description: 'Defining a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.',
              codeLessons: []
            },
            {
              title: 'Revealing Module Pattern',
              description: 'An extension of the Module Pattern that clearly exposes public methods/properties.',
              codeLessons: []
            },
            {
              title: 'Decorator Pattern (conceptual)',
              description: 'A conceptual introduction to dynamically adding responsibilities to objects.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-33-performance-optimization',
          title: 'Performance Optimization in JavaScript',
          duration: '90 min',
          subtopics: [
            {
              title: 'Micro-optimizations vs. Macro-optimizations',
              description: 'Distinguishing between small, localized optimizations and broader architectural improvements.',
              codeLessons: []
            },
            {
              title: 'Debouncing and Throttling for event handlers',
              description: 'Techniques to control the frequency of function calls, especially for events like scrolling or resizing.',
              codeLessons: []
            },
            {
              title: 'Memoization (manual implementation, conceptual `useMemo` from React)',
              description: 'Caching the results of expensive function calls to avoid re-computation.',
              codeLessons: []
            },
            {
              title: 'Minimizing DOM reflows and repaints',
              description: 'Strategies to reduce the performance impact of DOM manipulations.',
              codeLessons: []
            },
            {
              title: 'Avoiding large synchronous tasks',
              description: 'Structuring code to prevent long-running operations from freezing the UI.',
              codeLessons: []
            },
            {
              title: 'Web Vitals and JavaScript\'s impact (conceptual)',
              description: 'A conceptual understanding of how JavaScript performance affects core web vital metrics.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-34-testing-js',
          title: 'Testing JavaScript (Unit & Integration)',
          duration: '120 min',
          subtopics: [
            {
              title: 'Jest/Mocha & Chai: Setting up a testing environment (conceptual overview)',
              description: 'An introduction to popular JavaScript testing frameworks.',
              codeLessons: []
            },
            {
              title: 'Writing Unit Tests: Testing individual functions/modules',
              description: 'Focusing on testing isolated pieces of code.',
              codeLessons: []
            },
            {
              title: 'Writing Integration Tests: Testing interaction between units',
              description: 'Verifying how different parts of the application work together.',
              codeLessons: []
            },
            {
              title: 'Test Doubles: Mocks, Stubs, Spies',
              description: 'Techniques for isolating code under test and controlling dependencies.',
              codeLessons: []
            },
            {
              title: 'Code Coverage (conceptual)',
              description: 'Measuring the percentage of code executed by tests.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-35-security-best-practices',
          title: 'JavaScript Security Best Practices',
          duration: '60 min',
          subtopics: [
            {
              title: 'Preventing XSS (Cross-Site Scripting) with proper sanitization (`textContent`, escaping output)',
              description: 'Protecting against injection attacks by sanitizing user input before displaying it.',
              codeLessons: []
            },
            {
              title: 'Preventing CSRF (Cross-Site Request Forgery) - conceptual from frontend perspective',
              description: 'A conceptual overview of CSRF and basic frontend measures.',
              codeLessons: []
            },
            {
              title: 'Securely handling user input (validation, sanitization)',
              description: 'Validating and cleaning user input to prevent vulnerabilities and errors.',
              codeLessons: []
            },
            {
              title: 'Avoiding `eval()` and `new Function()`',
              description: 'Understanding the security risks associated with dynamic code execution.',
              codeLessons: []
            },
            {
              title: 'Content Security Policy (CSP) headers (revisit, JS perspective)',
              description: 'How CSP can restrict JavaScript execution to prevent certain attacks.',
              codeLessons: []
            },
            {
              title: 'Managing API Keys and sensitive data (client vs. server)',
              description: 'Best practices for handling sensitive information in a web application.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'js-lesson-36-typescript-intro',
          title: 'TypeScript (Conceptual Introduction for Large Projects)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is TypeScript? (Superset of JavaScript)',
              description: 'Introducing TypeScript as a typed superset of JavaScript that compiles to plain JavaScript.',
              codeLessons: []
            },
            {
              title: 'Static Typing vs. Dynamic Typing',
              description: 'Understanding the differences and benefits of static typing for larger projects.',
              codeLessons: []
            },
            {
              title: 'Basic types (`string`, `number`, `boolean`, `any`, `unknown`, `void`)',
              description: 'Core type annotations in TypeScript.',
              codeLessons: []
            },
            {
              title: 'Interfaces and Type Aliases',
              description: 'Defining custom types for objects and other data structures.',
              codeLessons: []
            },
            {
              title: 'Type Inference',
              description: 'How TypeScript can automatically deduce types without explicit annotation.',
              codeLessons: []
            },
            {
              title: 'Benefits for large-scale applications: Readability, maintainability, error prevention',
              description: 'The advantages of using TypeScript in complex and collaborative projects.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-3-js-quiz',
        title: 'Quiz: Advanced JavaScript Concepts',
        questions: [
          {
            id: 's3q1-js',
            question: 'In the JavaScript Event Loop, which queue has higher priority, Microtask Queue or Callback (Task) Queue?',
            options: ['Microtask Queue', 'Callback (Task) Queue', 'They have equal priority', 'It depends on the browser'],
            correctAnswer: 0
          },
          {
            id: 's3q2-js',
            question: 'What is the primary purpose of a JavaScript closure?',
            options: ['To create private variables and maintain state', 'To make functions asynchronous', 'To enable direct access to global variables', 'To simplify recursion'],
            correctAnswer: 0
          },
          {
            id: 's3q3-js',
            question: 'Which Web API allows for real-time, bidirectional communication between a client and a server over a single, long-lived connection?',
            options: ['Fetch API', 'XMLHttpRequest', 'WebSockets API', 'Server-Sent Events'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'js-project-23-event-loop-observation',
          title: 'Project 23: Event Loop Observation Script',
          description: 'Write a script with a mix of synchronous code, `setTimeout`, and `Promise.resolve()` to observe and explain the execution order based on the Event Loop.',
          checkpoint: 'Clearly explain the Event Loop and predict execution flow in complex asynchronous scenarios.'
        },
        {
          id: 'js-project-24-counter-factory-closure',
          title: 'Project 24: Counter Factory with Closures',
          description: 'Create a "Counter Factory" function that returns a new counter function each time it\'s called, and each counter maintains its own independent count using a closure.',
          checkpoint: 'Correctly implement and explain closures for data encapsulation and persistence.'
        },
        {
          id: 'js-project-25-this-context-manipulation',
          title: 'Project 25: `this` Context Manipulation',
          description: 'Build a simple object with methods and use `call`, `apply`, and `bind` to explicitly set the `this` context for method calls, observing the outcome.',
          checkpoint: 'Master the nuances of the `this` keyword and control its binding.'
        },
        {
          id: 'js-project-26-complex-class-hierarchy',
          title: 'Project 26: Complex Class Hierarchy',
          description: 'Implement a complex class hierarchy (e.g., `Shape` -> `Circle` -> `ColoredCircle`) with methods and properties, demonstrating full inheritance and method overriding.',
          checkpoint: 'Deep understanding of JavaScript\'s object model and class syntax.'
        },
        {
          id: 'js-project-27-custom-iterator-generator',
          title: 'Project 27: Custom Iterator and Generator',
          description: 'Implement a simple custom iterator for a data structure (e.g., a custom linked list) and a generator function for an infinite sequence (e.g., Fibonacci numbers).',
          checkpoint: 'Successfully create and use custom iterators and generator functions.'
        },
        {
          id: 'js-project-28-reactive-object-proxy',
          title: 'Project 28: Reactive Object with Proxy',
          description: 'Build a "reactive" object using `Proxy` where any modification to its properties triggers a side effect (e.g., logging the change or updating a DOM element).',
          checkpoint: 'Implement custom object behavior using `Proxy` and `Reflect`.'
        },
        {
          id: 'js-project-29-web-worker-prime-calc',
          title: 'Project 29: Prime Number Calculation with Web Worker',
          description: 'Implement a CPU-intensive calculation (e.g., finding prime numbers up to a large number) in a Web Worker, and display the result in the main thread without freezing the UI.',
          checkpoint: 'Offload heavy computations to a Web Worker, demonstrating non-blocking UI.'
        },
        {
          id: 'js-project-30-websocket-chat-client',
          title: 'Project 30: Simple WebSocket Chat Client',
          description: 'Build a simple client-side chat application using the WebSocket API (requires a compatible WebSocket server, can be simulated or use a public test server).',
          checkpoint: 'Establish a WebSocket connection and send/receive real-time messages.'
        },
        {
          id: 'js-project-31-regex-text-analyzer',
          title: 'Project 31: Regex-Powered Text Analyzer',
          description: 'Create a text analyzer that uses regular expressions to count occurrences of specific words or patterns, extract email addresses, or format phone numbers within a given text.',
          checkpoint: 'Proficiently use regular expressions for powerful text pattern matching and manipulation.'
        },
        {
          id: 'js-project-32-event-emitter-design-pattern',
          title: 'Project 32: Event Emitter (Observer Pattern)',
          description: 'Implement a simple "Event Emitter" using the Observer Pattern or create a "Configuration Manager" using the Singleton Pattern.',
          checkpoint: 'Apply common design patterns to structure JavaScript code for maintainability and scalability.'
        },
        {
          id: 'js-project-33-performance-optimization-example',
          title: 'Project 33: Performance Optimization Example',
          description: 'Optimize a script that performs a heavy calculation or frequent DOM updates by implementing debouncing/throttling or caching results.',
          checkpoint: 'JavaScript code runs efficiently, maintaining a smooth user experience.'
        },
        {
          id: 'js-project-34-unit-testing-jest',
          title: 'Project 34: Unit Testing with Jest',
          description: 'Set up Jest in a simple JavaScript project and write unit tests for your "Shopping List" or "Book Catalog" application\'s core logic (e.g., adding/removing items, filtering books).',
          checkpoint: 'Core JavaScript logic is covered by automated tests, ensuring correctness.'
        },
        {
          id: 'js-project-35-xss-prevention-form',
          title: 'Project 35: XSS Prevention in User Input Form',
          description: 'Enhance a user input form to sanitize user-provided text before displaying it on the page, demonstrating XSS prevention.',
          checkpoint: 'JavaScript code is written with security considerations to prevent common vulnerabilities.'
        },
        {
          id: 'js-project-36-typescript-conversion-conceptual',
          title: 'Project 36: Conceptual TypeScript Conversion',
          description: '(Conceptual) Convert a small JavaScript function or object definition into its TypeScript equivalent, adding type annotations.',
          checkpoint: 'Understand the core concepts and advantages of TypeScript for enhancing JavaScript development.'
        }
      ]
    }
  ]
};

export default javascriptFrontendCourse;