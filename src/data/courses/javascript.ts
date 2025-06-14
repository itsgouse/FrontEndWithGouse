import { Course } from '../courses';

const javascript: Course = {
  id: 'javascript',
  title: 'JavaScript',
  description: 'Add interactivity and dynamic behavior to your websites',
  icon: 'Code',
  color: 'bg-yellow-500',
  estimatedHours: 25,
  totalLessons: 30,
  sections: [
    {
      id: 'js-basics',
      title: 'JavaScript Basics',
      level: 'basic',
      lessons: [
        {
          id: 'js-intro',
          title: 'Introduction to JavaScript',
          duration: '40 min',
          content: `
# Introduction to JavaScript

## What is JavaScript?
JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS.

## JavaScript Fundamentals

### Variables
\`\`\`javascript
// Variable declarations
let name = "John";
const age = 25;
var city = "New York"; // Avoid using var in modern JS

// Data types
let number = 42;
let string = "Hello World";
let boolean = true;
let array = [1, 2, 3, 4, 5];
let object = { name: "John", age: 25 };
\`\`\`

### Functions
\`\`\`javascript
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const greetArrow = (name) => {
    return \`Hello, \${name}!\`;
};

// Short arrow function
const add = (a, b) => a + b;
\`\`\`

### Control Structures
\`\`\`javascript
// If statement
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
\`\`\`

### Arrays and Objects
\`\`\`javascript
// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Object manipulation
const person = {
    name: "Alice",
    age: 30,
    greet() {
        return \`Hi, I'm \${this.name}\`;
    }
};
\`\`\`

### DOM Manipulation
\`\`\`javascript
// Selecting elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// Modifying elements
element.textContent = 'New text';
element.style.color = 'blue';
element.classList.add('active');

// Event handling
element.addEventListener('click', function() {
    alert('Button clicked!');
});
\`\`\`

JavaScript brings web pages to life with interactivity and dynamic behavior!
          `
        }
      ]
    }
  ]
};

export default javascript;