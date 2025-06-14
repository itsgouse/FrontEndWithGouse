import { Course } from '../courses'; // Assuming your Course interface is in a file named courses.ts

const csFundamentalsCourse: Course = {
  id: 'cs-fundamentals-frontend',
  title: 'CS Fundamentals for Front-End Developers',
  description: 'A comprehensive curriculum covering essential Computer Science concepts tailored for front-end developers, ranging from core foundations to advanced, system-oriented topics.',
  icon: 'Laptop', // Using a generic laptop icon for a tech course
  color: 'bg-green-700', // A suitable color for a foundational course
  estimatedHours: 120, // This is a rough estimate, adjust as needed
  totalLessons: 31, // Total count of lessons across all sections
  sections: [
    {
      id: 'section-basics',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 'basics-lesson-1-general-cs-concepts',
          title: 'Lesson 1: General CS Concepts',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is a web?',
              description: 'Explore the fundamental concept of the World Wide Web as a system of interconnected hypertext documents accessed via the Internet.',
              codeLessons: [],
            },
            {
              title: 'What is the Internet?',
              description: 'Understand the Internet as a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.',
              codeLessons: [],
            },
            {
              title: 'How the Web Works?',
              description: 'Delve into the basic mechanism of how web browsers retrieve content from web servers over the Internet.',
              codeLessons: [
                {
                  lessonTitle: 'Simplified Web Request Flow',
                  codeSnippet: `// 1. User types URL
// 2. Browser resolves DNS to IP
// 3. Browser sends HTTP Request
// 4. Server processes request
// 5. Server sends HTTP Response
// 6. Browser renders content`,
                  explanation: 'This high-level overview illustrates the sequence of events from a user initiating a request to content being displayed in the browser.',
                  imageUrl: 'https://example.com/images/how-web-works.png', // Placeholder for a diagram
                },
              ],
            },
            {
              title: 'Client vs Server',
              description: 'Differentiate between client-side (browser) and server-side (web server) roles in web communication.',
              codeLessons: [],
            },
            {
              title: 'Lifecycle of an HTTP Request',
              description: 'Examine the detailed journey of an HTTP request from initiation by the client to the server\'s response.',
              codeLessons: [],
            },
            {
              title: 'Frontend vs Backend Overview',
              description: 'Get an introductory understanding of the distinct responsibilities of front-end (user interface) and back-end (data and logic) development.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'basics-lesson-2-web-fundamentals',
          title: 'Lesson 2: Web Fundamentals',
          duration: '75 min',
          subtopics: [
            {
              title: 'Browser Architecture & Rendering Engines (Blink, WebKit)',
              description: 'Learn about the internal structure of web browsers and the role of rendering engines like Blink (Chrome, Edge) and WebKit (Safari).',
              codeLessons: [],
            },
            {
              title: 'DNS, IP, and Domain Resolution',
              description: 'Understand how Domain Name System (DNS) translates human-readable domain names into machine-readable IP addresses.',
              codeLessons: [
                {
                  lessonTitle: 'DNS Lookup Example',
                  codeSnippet: `// User enters example.com
// DNS Resolver queries Root DNS server
// Root DNS server directs to .com TLD server
// .com TLD server directs to example.com authoritative server
// Authoritative server provides IP address (e.g., 192.0.2.1)`,
                  explanation: 'This simplified flow demonstrates the steps involved in a DNS lookup to resolve a domain name to an IP address.',
                  imageUrl: 'https://example.com/images/dns-lookup.png', // Placeholder for a DNS diagram
                },
              ],
            },
            {
              title: 'URL Anatomy',
              description: 'Deconstruct a URL into its various components: protocol, hostname, port, path, query parameters, and hash fragment.',
              codeLessons: [],
            },
            {
              title: 'HTTP vs HTTPS',
              description: 'Compare HTTP (Hypertext Transfer Protocol) with HTTPS (HTTP Secure) and understand the importance of SSL/TLS for secure communication.',
              codeLessons: [],
            },
            {
              title: 'Request-Response Cycle',
              description: 'Reinforce the fundamental interaction pattern where a client sends a request and a server sends a response.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'basics-lesson-3-html-css-js-runtime',
          title: 'Lesson 3: HTML/CSS/JS Runtime',
          duration: '90 min',
          subtopics: [
            {
              title: 'DOM & DOM Tree',
              description: 'Explore the Document Object Model (DOM) as a programming interface for web documents and its representation as a tree structure.',
              codeLessons: [
                {
                  lessonTitle: 'Basic DOM Manipulation',
                  codeSnippet: `// HTML: <div id="myElement">Hello</div>
const myElement = document.getElementById('myElement');
myElement.textContent = 'Hello, DOM!';
myElement.style.color = 'blue';`,
                  explanation: 'This example shows how JavaScript interacts with the DOM to change text content and style of an HTML element.',
                  imageUrl: 'https://example.com/images/dom-tree.png', // Placeholder for DOM tree visual
                },
              ],
            },
            {
              title: 'CSSOM',
              description: 'Understand the CSS Object Model (CSSOM) and how it\'s constructed by the browser to apply styles to the DOM.',
              codeLessons: [],
            },
            {
              title: 'JavaScript Runtime Environment',
              description: 'Learn about the environment where JavaScript code executes, including the JavaScript engine (like V8) and browser APIs.',
              codeLessons: [],
            },
            {
              title: 'Call Stack, Event Loop',
              description: 'Dive into the core concurrency model of JavaScript, explaining the Call Stack for synchronous execution and the Event Loop for handling asynchronous operations.',
              codeLessons: [
                {
                  lessonTitle: 'Event Loop Example',
                  codeSnippet: `console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise resolved');
});

console.log('End');
// Expected output (roughly):
// Start
// End
// Promise resolved
// Timeout callback`,
                  explanation: 'This snippet demonstrates the non-blocking nature of JavaScript and the order of execution for synchronous code, microtasks (Promises), and macrotasks (setTimeout) facilitated by the Event Loop.',
                  imageUrl: 'https://example.com/images/event-loop.png', // Placeholder for Event Loop diagram
                },
              ],
            },
            {
              title: 'Microtasks & Macrotasks',
              description: 'Distinguish between microtasks (like Promises, MutationObserver) and macrotasks (like setTimeout, setInterval, I/O) and their priority in the Event Loop.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'basics-lesson-4-protocols-apis',
          title: 'Lesson 4: Protocols & APIs',
          duration: '60 min',
          subtopics: [
            {
              title: 'HTTP Methods (GET, POST, etc.)',
              description: 'Learn the common HTTP request methods (verbs) and their semantic meaning for interacting with web resources.',
              codeLessons: [
                {
                  lessonTitle: 'Using Fetch API with GET and POST',
                  codeSnippet: `// GET Request
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// POST Request
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' }),
})
.then(response => response.json())
.then(data => console.log(data));`,
                  explanation: 'These examples illustrate how to make GET and POST requests using the `fetch` API, specifying the method and sending JSON data for POST.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Status Codes',
              description: 'Understand the meaning of various HTTP status codes (e.g., 200 OK, 404 Not Found, 500 Internal Server Error) and their importance for debugging.',
              codeLessons: [],
            },
            {
              title: 'Headers & Cookies',
              description: 'Explore the role of HTTP headers in requests and responses, and how cookies are used for state management and tracking.',
              codeLessons: [],
            },
            {
              title: 'RESTful APIs & JSON format',
              description: 'Introduction to REST (Representational State Transfer) architectural style for web services and the ubiquitous JSON (JavaScript Object Notation) data format.',
              codeLessons: [
                {
                  lessonTitle: 'Sample JSON Data',
                  codeSnippet: `{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "isActive": true,
  "roles": ["user", "admin"]
}`,
                  explanation: 'This is a typical example of data represented in JSON format, widely used for data exchange in web APIs.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'basics-lesson-5-application-models',
          title: 'Lesson 5: Application Models',
          duration: '45 min',
          subtopics: [
            {
              title: 'Static Sites vs Web Applications',
              description: 'Differentiate between static websites (content served as-is) and dynamic web applications (interactive and data-driven).',
              codeLessons: [],
            },
            {
              title: 'What are SPAs?',
              description: 'Understand Single Page Applications (SPAs) where content is dynamically loaded, providing a fluid user experience without full page reloads.',
              codeLessons: [],
            },
            {
              title: 'MPA vs SPA Trade-offs',
              description: 'Compare the advantages and disadvantages of Multi-Page Applications (MPAs) versus Single Page Applications (SPAs).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'basics-lesson-6-local-storage',
          title: 'Lesson 6: Local Storage',
          duration: '45 min',
          subtopics: [
            {
              title: 'Cookies: Usage and Limitations',
              description: 'Learn about HTTP cookies, their role in session management, and their size and security limitations.',
              codeLessons: [
                {
                  lessonTitle: 'Setting and Getting a Cookie',
                  codeSnippet: `// Setting a cookie
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Getting all cookies
console.log(document.cookie); // "username=John Doe; ..."`
                  ,
                  explanation: 'This shows how to set a simple cookie with an expiration date and path, and how to access all cookies for the current document.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'localStorage vs sessionStorage',
              description: 'Compare and contrast `localStorage` (persistent storage) and `sessionStorage` (session-based storage) in the browser.',
              codeLessons: [
                {
                  lessonTitle: 'Using localStorage and sessionStorage',
                  codeSnippet: `// localStorage
localStorage.setItem('username', 'Alice');
const username = localStorage.getItem('username');
console.log(username); // Alice
localStorage.removeItem('username');

// sessionStorage
sessionStorage.setItem('tempData', 'Some session-specific info');
const tempData = sessionStorage.getItem('tempData');
console.log(tempData); // Some session-specific info
sessionStorage.clear();`,
                  explanation: 'Demonstrates basic `setItem`, `getItem`, and `removeItem`/`clear` operations for both `localStorage` and `sessionStorage`.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Basic Caching Mechanisms',
              description: 'Understand simple client-side caching concepts to improve web performance.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'basics-lesson-7-basic-testing',
          title: 'Lesson 7: Basic Testing',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is Unit Testing?',
              description: 'Introduction to unit testing, focusing on testing individual, isolated units of code (e.g., functions, components).',
              codeLessons: [],
            },
            {
              title: 'Test Pyramid',
              description: 'Learn about the testing pyramid concept, emphasizing a large base of unit tests, fewer integration tests, and even fewer end-to-end tests.',
              codeLessons: [
                {
                  lessonTitle: 'Test Pyramid Visualization',
                  codeSnippet: `// No direct code, refers to a diagram
// See image for Test Pyramid structure (Unit > Integration > E2E)`,
                  explanation: 'This subtopic explains the concept of the Test Pyramid for structuring software tests effectively.',
                  imageUrl: 'https://example.com/images/test-pyramid.png', // Placeholder for Test Pyramid image
                },
              ],
            },
            {
              title: 'Introduction to Jest (or Vitest)',
              description: 'Get started with a popular JavaScript testing framework like Jest or Vitest for writing unit tests.',
              codeLessons: [
                {
                  lessonTitle: 'Simple Jest Test Example',
                  codeSnippet: `// sum.js
function sum(a, b) {
  return a + b;
}
export default sum;

// sum.test.js
import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});`,
                  explanation: 'This simple example demonstrates how to write a basic unit test using Jest to verify the functionality of a `sum` function.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'basics-lesson-8-git-version-control',
          title: 'Lesson 8: Git & Version Control',
          duration: '90 min',
          subtopics: [
            {
              title: 'Git Basics: init, clone, add, commit',
              description: 'Learn the fundamental Git commands for initializing a repository, cloning, staging changes, and committing them.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Git Commands',
                  codeSnippet: `git init          // Initialize a new Git repository
git clone <url>   // Clone an existing repository
git add .         // Stage all changes
git commit -m "Initial commit" // Commit staged changes`,
                  explanation: 'Essential Git commands to start and manage a local repository.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Branching, Merging',
              description: 'Understand the concept of Git branches for parallel development and how to merge changes back into a main branch.',
              codeLessons: [
                {
                  lessonTitle: 'Git Branching and Merging',
                  codeSnippet: `git branch new-feature     // Create a new branch
git checkout new-feature   // Switch to the new branch
// ... make changes ...
git add .
git commit -m "Implement new feature"
git checkout main          // Switch back to main
git merge new-feature      // Merge new-feature into main`,
                  explanation: 'Illustrates the typical workflow of creating a branch, working on it, and then merging it back into the main development line.',
                  imageUrl: 'https://example.com/images/git-branching.png', // Placeholder for Git branching diagram
                },
              ],
            },
            {
              title: 'GitHub Workflow: Fork, PR, Issues',
              description: 'Learn about common collaborative workflows on platforms like GitHub, including forking repositories, creating Pull Requests, and managing issues.',
              codeLessons: [],
            },
          ],
        },
      ],
      quiz: {
        id: 'basics-quiz-1',
        title: 'Quiz 1: Web Fundamentals',
        questions: [
          {
            id: 'q1-1',
            question: 'Which protocol is primarily used by web browsers to request and display web pages?',
            options: ['FTP', 'SMTP', 'HTTP', 'TCP'],
            correctAnswer: 2, // HTTP
          },
          {
            id: 'q1-2',
            question: 'What does DNS stand for?',
            options: ['Domain Naming Service', 'Dynamic Network System', 'Data Node Server', 'Domain Name System'],
            correctAnswer: 3, // Domain Name System
          },
          {
            id: 'q1-3',
            question: 'Which of the following is NOT a core component of the JavaScript Runtime Environment in a browser?',
            options: ['Call Stack', 'Web APIs', 'Event Loop', 'Database Server'],
            correctAnswer: 3, // Database Server
          },
          {
            id: 'q1-4',
            question: 'Which HTTP method is typically used to retrieve data from a server?',
            options: ['POST', 'PUT', 'GET', 'DELETE'],
            correctAnswer: 2, // GET
          },
          {
            id: 'q1-5',
            question: 'What is the main difference between `localStorage` and `sessionStorage`?',
            options: [
              '`localStorage` stores data only for the current session, `sessionStorage` stores it persistently.',
              '`localStorage` stores data persistently, `sessionStorage` stores it only for the current session.',
              'There is no difference; they are interchangeable.',
              '`localStorage` is for server-side storage, `sessionStorage` is for client-side.',
            ],
            correctAnswer: 1, // localStorage persistent, sessionStorage session-based
          },
          // ... (add 20 more MCQs as per your requirement)
        ],
      },
      // You mentioned Quiz 2 for Lesson 2, but then a single Quiz 1 for the whole section.
      // I've put one quiz at the section level, which is a common practice.
      // If you need per-lesson quizzes, the structure would need a quiz object within each lesson.
    },
    {
      id: 'section-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'medium-lesson-1-frontend-networking',
          title: 'Lesson 1: Front-End Networking',
          duration: '75 min',
          subtopics: [
            {
              title: 'HTTP/2 vs HTTP/3',
              description: 'Compare the advancements in HTTP/2 (multiplexing, server push) and HTTP/3 (QUIC protocol, UDP-based) over HTTP/1.1.',
              codeLessons: [],
            },
            {
              title: 'WebSockets Basics',
              description: 'Introduction to WebSockets for full-duplex, real-time communication between client and server.',
              codeLessons: [
                {
                  lessonTitle: 'Basic WebSocket Client Example',
                  codeSnippet: `const socket = new WebSocket('ws://localhost:8080');

socket.onopen = (event) => {
  console.log('WebSocket connected!');
  socket.send('Hello Server!');
};

socket.onmessage = (event) => {
  console.log('Message from server: ', event.data);
};

socket.onclose = (event) => {
  console.log('WebSocket disconnected:', event.code, event.reason);
};

socket.onerror = (error) => {
  console.error('WebSocket Error: ', error);
};`,
                  explanation: 'This code snippet demonstrates how to establish a basic WebSocket connection from a browser and handle open, message, close, and error events.',
                  imageUrl: 'https://example.com/images/websocket-flow.png', // Placeholder for WebSocket flow diagram
                },
              ],
            },
            {
              title: 'Fetch API vs XMLHttpRequest',
              description: 'Compare the modern Fetch API with the older XMLHttpRequest for making HTTP requests in the browser.',
              codeLessons: [
                {
                  lessonTitle: 'Fetch API vs XMLHttpRequest Comparison',
                  codeSnippet: `// Fetch API (modern)
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log('Fetch Data:', data))
  .catch(error => console.error('Fetch Error:', error));

// XMLHttpRequest (older)
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users');
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('XHR Data:', JSON.parse(xhr.responseText));
  } else {
    console.error('XHR Error:', xhr.status, xhr.statusText);
  }
};
xhr.onerror = () => console.error('XHR Network Error');
xhr.send();`,
                  explanation: 'Side-by-side comparison of fetching data using the more promise-based Fetch API versus the event-driven XMLHttpRequest.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'CORS and Content-Type Headers',
              description: 'Understand Cross-Origin Resource Sharing (CORS) as a security mechanism and the importance of `Content-Type` headers.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-2-performance-optimization',
          title: 'Lesson 2: Performance & Optimization',
          duration: '90 min',
          subtopics: [
            {
              title: 'Critical Rendering Path',
              description: 'Learn about the sequence of steps a browser takes to convert HTML, CSS, and JavaScript into pixels on the screen.',
              codeLessons: [
                {
                  lessonTitle: 'Critical Rendering Path Steps',
                  codeSnippet: `// DOM construction
// CSSOM construction
// Render Tree construction
// Layout
// Paint
// Compositing`,
                  explanation: 'This lists the main stages of the Critical Rendering Path, highlighting the browser\'s process to render web content.',
                  imageUrl: 'https://example.com/images/critical-rendering-path.png', // Placeholder for CRP diagram
                },
              ],
            },
            {
              title: 'Lazy Loading',
              description: 'Explore techniques like lazy loading images and components to defer loading of non-critical resources until they are needed.',
              codeLessons: [
                {
                  lessonTitle: 'Lazy Loading an Image',
                  codeSnippet: `<img src="placeholder.jpg" data-src="actual-image.jpg" alt="Lazy Load Example" loading="lazy">
<script>
  // Browser native lazy loading
  // Or custom JS Intersection Observer for older browsers
</script>`,
                  explanation: 'Demonstrates the `loading="lazy"` attribute for native browser lazy loading. For older browsers, JavaScript with `IntersectionObserver` is typically used.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'async vs defer',
              description: 'Understand the `async` and `defer` attributes for `<script>` tags and how they affect script loading and execution.',
              codeLessons: [
                {
                  lessonTitle: 'Script Loading with async and defer',
                  codeSnippet: `<script src="sync.js"></script>

<script src="async.js" async></script>

<script src="defer.js" defer></script>`,
                  explanation: 'This illustrates the different behaviors of synchronous, `async`, and `defer` script loading, impacting page rendering performance.',
                  imageUrl: 'https://example.com/images/async-defer.png', // Placeholder for async/defer diagram
                },
              ],
            },
            {
              title: 'TTI, FCP, CLS Metrics',
              description: 'Introduction to key web performance metrics like Time to Interactive (TTI), First Contentful Paint (FCP), and Cumulative Layout Shift (CLS).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-3-web-security',
          title: 'Lesson 3: Web Security',
          duration: '75 min',
          subtopics: [
            {
              title: 'HTTPS Internals',
              description: 'A deeper dive into how HTTPS works, including SSL/TLS handshake, certificates, and encryption.',
              codeLessons: [],
            },
            {
              title: 'Cross-Origin Resource Sharing (CORS)',
              description: 'Detailed explanation of CORS, how it prevents cross-origin requests by default, and how servers can configure it.',
              codeLessons: [
                {
                  lessonTitle: 'CORS Preflight Request Example (Simplified)',
                  codeSnippet: `// Browser sends OPTIONS request (preflight)
//   Access-Control-Request-Method: POST
//   Access-Control-Request-Headers: Content-Type

// Server responds with allowed methods/headers
//   Access-Control-Allow-Origin: *
//   Access-Control-Allow-Methods: GET, POST, PUT
//   Access-Control-Allow-Headers: Content-Type

// If preflight passes, browser sends actual POST request`,
                  explanation: 'This illustrates the conceptual flow of a CORS preflight request, where the browser checks with the server if the actual request is allowed before sending it.',
                  imageUrl: 'https://example.com/images/cors-flow.png', // Placeholder for CORS flow diagram
                },
              ],
            },
            {
              title: 'XSS & CSRF Basics',
              description: 'Introduction to common web vulnerabilities: Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).',
              codeLessons: [
                {
                  lessonTitle: 'Preventing XSS with Sanitization',
                  codeSnippet: `// Potentially vulnerable:
// document.getElementById('output').innerHTML = userData;

// Safer: Sanitize input or use textContent
const userOutput = document.getElementById('output');
userOutput.textContent = userData; // Escapes HTML characters`,
                  explanation: 'Demonstrates a simple way to prevent XSS by using `textContent` instead of `innerHTML` when inserting user-generated content into the DOM, as `textContent` automatically escapes HTML entities.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'CSP, SRI',
              description: 'Learn about Content Security Policy (CSP) for mitigating XSS and Subresource Integrity (SRI) for preventing malicious modification of external scripts/stylesheets.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-4-architecture-app-design',
          title: 'Lesson 4: Architecture & App Design',
          duration: '60 min',
          subtopics: [
            {
              title: 'SPA vs MPA',
              description: 'Revisit the comparison of Single Page Applications and Multi-Page Applications from an architectural design perspective.',
              codeLessons: [],
            },
            {
              title: 'CSR, SSR, SSG',
              description: 'Deep dive into different rendering strategies: Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG).',
              codeLessons: [
                {
                  lessonTitle: 'Rendering Strategies Overview',
                  codeSnippet: `// CSR (React, Vue, Angular apps often start here)
// Browser downloads JS, then renders content.

// SSR (Next.js, Nuxt.js)
// Server renders initial HTML, then client hydrates.

// SSG (Gatsby, Next.js 'export')
// HTML generated at build time, served statically.`,
                  explanation: 'Briefly outlines the core concept of each rendering strategy, indicating when the HTML is generated and where the rendering work occurs.',
                  imageUrl: 'https://example.com/images/rendering-strategies.png', // Placeholder for rendering strategy comparison
                },
              ],
            },
            {
              title: 'Micro Frontends Overview',
              description: 'Introduction to the concept of Micro Frontends, a way to build a large application as a composition of smaller, independently deployable front-end apps.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-5-rendering-layout',
          title: 'Lesson 5: Rendering & Layout',
          duration: '75 min',
          subtopics: [
            {
              title: 'Flexbox, Grid',
              description: 'Master modern CSS layout techniques: Flexbox for one-dimensional layouts and Grid for two-dimensional layouts.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Flexbox Layout',
                  codeSnippet: `/* CSS */
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}`,
                  explanation: 'This CSS creates a flex container that distributes its items evenly with space around them and centers them vertically.',
                  imageUrl: 'https://example.com/images/flexbox-example.png', // Placeholder for Flexbox visual
                },
                {
                  lessonTitle: 'Basic CSS Grid Layout',
                  codeSnippet: `/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}`,
                  explanation: 'This CSS defines a grid container with three columns, where the middle column takes twice the space of the other two, and adds a gap between grid items.',
                  imageUrl: 'https://example.com/images/css-grid-example.png', // Placeholder for CSS Grid visual
                },
              ],
            },
            {
              title: 'Block Formatting Context (BFC)',
              description: 'Understand Block Formatting Context (BFC) and its role in CSS layout, including how it prevents margin collapsing and contains floats.',
              codeLessons: [],
            },
            {
              title: 'Repaint vs Reflow',
              description: 'Distinguish between `repaint` (only visual changes) and `reflow` (recalculation of layout) and how to minimize performance impact.',
              codeLessons: [
                {
                  lessonTitle: 'Triggering Reflow vs Repaint',
                  codeSnippet: `// Triggers Reflow (and then Repaint)
document.getElementById('myBox').style.width = '200px';

// Triggers only Repaint (e.g., changing color)
document.getElementById('myBox').style.backgroundColor = 'red';`,
                  explanation: 'Changing dimensions or geometry often causes a `reflow` (recalculation of layout), while only changing visual properties like color usually causes a `repaint` (just redrawing pixels).',
                  imageUrl: 'https://example.com/images/repaint-reflow.png', // Placeholder for Repaint/Reflow visual
                },
              ],
            },
            {
              title: 'Layout Shift & Avoiding Jank',
              description: 'Learn about Cumulative Layout Shift (CLS) and techniques to avoid "jank" (stuttering) in animations and scrolling.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-6-state-management',
          title: 'Lesson 6: State Management',
          duration: '60 min',
          subtopics: [
            {
              title: 'Local State vs Global State',
              description: 'Differentiate between state managed within a single component (local) and state shared across many components (global).',
              codeLessons: [],
            },
            {
              title: 'Context API',
              description: 'Introduction to React\'s Context API for passing data through the component tree without prop drilling.',
              codeLessons: [
                {
                  lessonTitle: 'Basic React Context API Example',
                  codeSnippet: `// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// App.js
import { ThemeProvider, useTheme } from './ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}`,
                  explanation: 'This example shows how to create a `ThemeContext` using React\'s Context API, provide a theme value, and consume it in a child component without prop drilling.',
                  imageUrl: 'https://example.com/images/react-context.png', // Placeholder for Context API diagram
                },
              ],
            },
            {
              title: 'Redux Basics',
              description: 'Introduction to Redux as a predictable state container for JavaScript apps, covering actions, reducers, and the store.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-7-build-tools-module-systems',
          title: 'Lesson 7: Build Tools & Module Systems',
          duration: '90 min',
          subtopics: [
            {
              title: 'Babel Basics',
              description: 'Understand Babel\'s role as a JavaScript compiler for transforming modern JavaScript into backward-compatible versions.',
              codeLessons: [],
            },
            {
              title: 'Webpack Workflow',
              description: 'Introduction to Webpack as a module bundler, covering concepts like entry points, output, loaders, and plugins.',
              codeLessons: [
                {
                  lessonTitle: 'Simplified Webpack Configuration',
                  codeSnippet: `// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};`,
                  explanation: 'This basic Webpack configuration specifies an entry file, an output bundle, and rules for processing JavaScript (with Babel) and CSS files.',
                  imageUrl: 'https://example.com/images/webpack-flow.png', // Placeholder for Webpack flow
                },
              ],
            },
            {
              title: 'npm vs yarn',
              description: 'Compare npm and yarn as package managers for JavaScript projects.',
              codeLessons: [],
            },
            {
              title: 'ESM vs CommonJS',
              description: 'Differentiate between ECMAScript Modules (ESM) and CommonJS module systems in JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'ESM vs CommonJS Syntax',
                  codeSnippet: `// ESM (ES Modules) - Modern JavaScript
// myModule.js
export const greeting = 'Hello';
export default function sayHi() { console.log(greeting); }

// main.js
import sayHi, { greeting } from './myModule';
console.log(greeting);
sayHi();

// CommonJS (Node.js default)
// myModule.js
exports.greeting = 'Hello';
exports.sayHi = function() { console.log(exports.greeting); };

// main.js
const { greeting, sayHi } = require('./myModule');
console.log(greeting);
sayHi();`,
                  explanation: 'This code illustrates the syntax differences for importing and exporting modules using both ES Modules (browser and modern Node.js) and CommonJS (traditional Node.js).',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Source Maps',
              description: 'Understand source maps and how they allow debugging compiled/minified code in the browser by mapping it back to the original source.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-8-testing',
          title: 'Lesson 8: Testing',
          duration: '60 min',
          subtopics: [
            {
              title: 'Integration vs E2E Testing',
              description: 'Distinguish between integration tests (testing interaction between units) and end-to-end (E2E) tests (simulating user flows across the entire application).',
              codeLessons: [],
            },
            {
              title: 'Testing Libraries (RTL, Cypress)',
              description: 'Introduction to popular testing libraries like React Testing Library (RTL) for component testing and Cypress for E2E testing.',
              codeLessons: [
                {
                  lessonTitle: 'Simple React Testing Library (RTL) Example',
                  codeSnippet: `// MyButton.js
function MyButton({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
export default MyButton;

// MyButton.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

test('renders button with correct text and calls onClick', async () => {
  const handleClick = jest.fn();
  render(<MyButton onClick={handleClick} text="Click Me" />);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  await userEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
                  explanation: 'This example uses React Testing Library to render a simple button component, assert its presence, and simulate a user click to verify that the `onClick` prop is called.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Mocking APIs',
              description: 'Learn techniques for mocking API responses in tests to isolate components and control test environments.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-9-api-communication',
          title: 'Lesson 9: API Communication',
          duration: '60 min',
          subtopics: [
            {
              title: 'REST API Usage Patterns',
              description: 'Explore common patterns and best practices for interacting with RESTful APIs from the front-end.',
              codeLessons: [],
            },
            {
              title: 'Basic GraphQL Queries',
              description: 'Introduction to GraphQL as an alternative to REST, focusing on basic query syntax and fetching specific data.',
              codeLessons: [
                {
                  lessonTitle: 'Simple GraphQL Query',
                  codeSnippet: `query GetUserDetails {
  user(id: "123") {
    name
    email
    posts {
      title
      likes
    }
  }
}`,
                  explanation: 'This GraphQL query requests specific fields (name, email) for a user with a given ID, and also retrieves titles and likes for their associated posts. This contrasts with REST where you might get more or less than you need.',
                  imageUrl: 'https://example.com/images/graphql-query.png', // Placeholder for GraphQL visual
                },
              ],
            },
            {
              title: 'Using Axios & Fetch Effectively',
              description: 'Best practices for using `Axios` (a popular HTTP client library) and the native `Fetch` API for making network requests, including error handling and request cancellation.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-10-accessibility-a11y',
          title: 'Lesson 10: Accessibility (A11Y)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Semantic HTML',
              description: 'Learn to use HTML elements according to their meaning, which is crucial for accessibility and SEO (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).',
              codeLessons: [
                {
                  lessonTitle: 'Semantic HTML Example',
                  codeSnippet: `<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>

<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>`,
                  explanation: 'This comparison highlights the use of semantic HTML5 elements, which convey meaning to browsers and assistive technologies, improving accessibility.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'ARIA Roles',
              description: 'Introduction to Accessible Rich Internet Applications (ARIA) roles for enhancing the accessibility of dynamic web content and user interface components.',
              codeLessons: [],
            },
            {
              title: 'Keyboard Navigation',
              description: 'Understand the importance of keyboard accessibility and techniques to ensure all interactive elements are reachable and usable via keyboard.',
              codeLessons: [],
            },
            {
              title: 'Screen Reader Testing',
              description: 'Basic methods for testing web content with screen readers to identify accessibility issues.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-11-progressive-web-apps',
          title: 'Lesson 11: Progressive Web Apps',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is a PWA?',
              description: 'Introduction to Progressive Web Applications (PWAs) and their characteristics: reliable, fast, and engaging.',
              codeLessons: [],
            },
            {
              title: 'Manifest File',
              description: 'Understand the Web App Manifest file (`manifest.json`) for defining PWA properties like icon, name, and display mode.',
              codeLessons: [
                {
                  lessonTitle: 'Basic manifest.json Example',
                  codeSnippet: `{
  "name": "My Awesome PWA",
  "short_name": "AwesomePWA",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
                  explanation: 'This `manifest.json` snippet defines basic properties for a PWA, allowing it to be installed on a user\'s home screen and appear as a standalone application.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Service Worker Basics',
              description: 'Introduction to Service Workers, powerful scripts that run in the background, enabling features like offline support and push notifications.',
              codeLessons: [
                {
                  lessonTitle: 'Registering a Service Worker',
                  codeSnippet: `// In your main JavaScript file
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered: ', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed: ', error);
      });
  });
}`,
                  explanation: 'This code snippet demonstrates how to register a Service Worker in your main application script. The `sw.js` file would contain the Service Worker logic.',
                  imageUrl: 'https://example.com/images/service-worker-lifecycle.png', // Placeholder for Service Worker lifecycle diagram
                },
              ],
            },
            {
              title: 'Offline Support',
              description: 'Implement basic offline capabilities using Service Workers and the Cache API to provide a reliable user experience even without network connectivity.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-12-browser-storage',
          title: 'Lesson 12: Browser Storage',
          duration: '45 min',
          subtopics: [
            {
              title: 'IndexedDB Basics',
              description: 'Introduction to IndexedDB, a low-level API for client-side storage of significant amounts of structured data, including files/blobs.',
              codeLessons: [
                {
                  lessonTitle: 'Basic IndexedDB Open and Store',
                  codeSnippet: `const request = indexedDB.open('myDatabase', 1);
let db;

request.onerror = (event) => {
  console.error('IndexedDB error:', event.target.errorCode);
};

request.onsuccess = (event) => {
  db = event.target.result;
  console.log('IndexedDB opened successfully');
  // Now you can interact with the database
};

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
  console.log('Object store created/upgraded');
};`,
                  explanation: 'This code shows the basic steps to open an IndexedDB database, handle errors, and set up an object store during an upgrade.',
                  imageUrl: 'https://example.com/images/indexeddb-flow.png', // Placeholder for IndexedDB flow
                },
              ],
            },
            {
              title: 'Cache API',
              description: 'Learn how to use the Cache API (often with Service Workers) for storing and retrieving network requests and their responses for offline use.',
              codeLessons: [
                {
                  lessonTitle: 'Using Cache API to Store Assets',
                  codeSnippet: `// In service worker (sw.js)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-app-cache-v1')
      .then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles/main.css',
          '/scripts/app.js'
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});`,
                  explanation: 'This service worker code snippet demonstrates how to pre-cache static assets during the `install` event and then serve them from the cache if available during the `fetch` event, providing offline support.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Session Strategies',
              description: 'Review different approaches for managing user sessions in web applications.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'medium-lesson-13-deployment-hosting',
          title: 'Lesson 13: Deployment & Hosting',
          duration: '60 min',
          subtopics: [
            {
              title: 'CI/CD Fundamentals',
              description: 'Introduction to Continuous Integration (CI) and Continuous Delivery/Deployment (CD) pipelines for automating software releases.',
              codeLessons: [
                {
                  lessonTitle: 'Simplified CI/CD Flow',
                  codeSnippet: `// 1. Developer pushes code to Git
// 2. CI server detects push
// 3. CI runs tests, builds artifact
// 4. If tests pass, CD deploys artifact to hosting`,
                  explanation: 'This outlines a basic CI/CD pipeline, showing the automated steps from code commit to deployment.',
                  imageUrl: 'https://example.com/images/ci-cd-flow.png', // Placeholder for CI/CD diagram
                },
              ],
            },
            {
              title: 'Platforms: Vercel, Netlify',
              description: 'Overview of popular modern hosting platforms like Vercel and Netlify for front-end applications.',
              codeLessons: [],
            },
            {
              title: 'Domains, HTTPS, CDN Usage',
              description: 'Understand how domains work, configuring HTTPS for secure connections, and utilizing Content Delivery Networks (CDNs) for faster content delivery.',
              codeLessons: [],
            },
          ],
        },
      ],
    },
    {
      id: 'section-advanced',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 'advanced-lesson-1-event-driven-architecture',
          title: 'Lesson 1: Event-Driven Architecture',
          duration: '60 min',
          subtopics: [
            {
              title: 'Pub/Sub Model',
              description: 'Deep dive into the Publish-Subscribe (Pub/Sub) pattern, a messaging pattern where senders (publishers) do not directly send messages to specific receivers (subscribers), but instead categorize published messages into classes without knowledge of which subscribers, if any, there may be.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Pub/Sub Implementation',
                  codeSnippet: `class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return () => this.unsubscribe(eventName, listener);
  }

  unsubscribe(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(l => l !== listener);
    }
  }

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(listener => listener(data));
    }
  }
}

const emitter = new EventEmitter();

const logData = (data) => console.log('Data received:', data);
const unsubscribe = emitter.subscribe('dataReady', logData);

emitter.publish('dataReady', { message: 'Hello World' }); // Logs: Data received: { message: 'Hello World' }
unsubscribe();
emitter.publish('dataReady', { message: 'Second message' }); // Nothing logs`,
                  explanation: 'This JavaScript class implements a simple Publish-Subscribe mechanism. Publishers emit `events` and subscribers register `listeners` for specific event names, enabling loose coupling between components.',
                  imageUrl: 'https://example.com/images/pub-sub-model.png', // Placeholder for Pub/Sub diagram
                },
              ],
            },
            {
              title: 'Event Emitters in JS',
              description: 'Explore native and custom event emitters in JavaScript for communication between different parts of an application.',
              codeLessons: [],
            },
            {
              title: 'Loosely Coupled System Design',
              description: 'Understand the benefits of designing systems where components have minimal dependencies on each other, often achieved through event-driven patterns.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-2-microservices-micro-frontends',
          title: 'Lesson 2: Microservices & Micro Frontends',
          duration: '75 min',
          subtopics: [
            {
              title: 'What & Why of Microservices',
              description: 'Deep dive into Microservices architecture: its advantages (scalability, independent deployment) and challenges (complexity, distributed systems).',
              codeLessons: [],
            },
            {
              title: 'Micro Frontends Explained',
              description: 'Further exploration of Micro Frontends as a way to break down large, monolithic front-end applications into smaller, independent, and deployable units.',
              codeLessons: [
                {
                  lessonTitle: 'Micro Frontends Composition (Conceptual)',
                  codeSnippet: `// Host Application (e.g., using Webpack Module Federation or custom JS)
// Dynamically loads and integrates:
// - User Profile Micro Frontend
// - Product Listing Micro Frontend
// - Shopping Cart Micro Frontend

// Each Micro Frontend is developed and deployed independently.`,
                  explanation: 'This conceptual code highlights how a host application can compose multiple independent micro frontends to form a single user experience.',
                  imageUrl: 'https://example.com/images/micro-frontends.png', // Placeholder for Micro Frontends diagram
                },
              ],
            },
            {
              title: 'Containerization Overview (Docker)',
              description: 'Basic introduction to containerization with Docker and its relevance for packaging and deploying microservices.',
              codeLessons: [],
            },
            {
              title: 'Shared Contracts Between Services',
              description: 'Discuss the importance of defining clear APIs and data contracts when working with multiple independent services or micro frontends.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-3-real-time-websockets',
          title: 'Lesson 3: Real-Time with WebSockets',
          duration: '60 min',
          subtopics: [
            {
              title: 'Polling vs SSE vs WebSockets',
              description: 'Compare different approaches for real-time communication: traditional polling, Server-Sent Events (SSE), and WebSockets.',
              codeLessons: [
                {
                  lessonTitle: 'Real-time Communication Comparison',
                  codeSnippet: `// Polling: Client repeatedly asks server for updates (inefficient)
// setInterval(() => fetchData(), 5000);

// Server-Sent Events (SSE): Server sends updates to client over a single HTTP connection (unidirectional)
// const eventSource = new EventSource('/events');
// eventSource.onmessage = (event) => console.log(event.data);

// WebSockets: Full-duplex, persistent connection (bidirectional)
// const ws = new WebSocket('ws://example.com/socket');`,
                  explanation: 'This shows the basic initiation for polling, SSE, and WebSockets, highlighting their distinct communication patterns for real-time data.',
                  imageUrl: 'https://example.com/images/realtime-comparison.png', // Placeholder for comparison diagram
                },
              ],
            },
            {
              title: 'WebSocket APIs',
              description: 'A deeper look into the browser\'s WebSocket API and common libraries for simplified usage (e.g., Socket.IO).',
              codeLessons: [],
            },
            {
              title: 'Building Chat or Live Notifications',
              description: 'Practical application of WebSockets by outlining the architecture for a simple chat application or live notification system.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-4-edge-cdn-internals',
          title: 'Lesson 4: Edge & CDN Internals',
          duration: '45 min',
          subtopics: [
            {
              title: 'What is a CDN?',
              description: 'Revisit Content Delivery Networks (CDNs) with an advanced perspective on their architecture and role in global content delivery.',
              codeLessons: [],
            },
            {
              title: 'Caching at Edge',
              description: 'Understand how CDNs cache content at "edge" locations (servers closer to users) to reduce latency and improve load times.',
              codeLessons: [],
            },
            {
              title: 'Serverless on the Edge',
              description: 'Introduction to running serverless functions directly on CDN edge locations for ultra-low latency computations (e.g., Cloudflare Workers, Lambda@Edge).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-5-rendering-strategies',
          title: 'Lesson 5: Rendering Strategies',
          duration: '75 min',
          subtopics: [
            {
              title: 'SSR, CSR, ISR Deep Dive',
              description: 'An in-depth analysis of Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Incremental Static Regeneration (ISR), including their pros, cons, and use cases.',
              codeLessons: [],
            },
            {
              title: 'React Streaming',
              description: 'Explore advanced SSR techniques in React, specifically React Server Components and Suspense for streaming HTML from the server.',
              codeLessons: [
                {
                  lessonTitle: 'Conceptual React Server Component',
                  codeSnippet: `// Server Component (can fetch data directly)
// import db from './db';
// async function ProductList() {
//   const products = await db.getProducts();
//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default ProductList;

// Client Component (interactive parts)
// function AddToCartButton() {
//   // ... client-side logic ...
// }`,
                  explanation: 'This conceptual snippet illustrates the separation of concerns with React Server Components (which run on the server and fetch data directly) and Client Components (for interactive elements), enabling advanced streaming capabilities.',
                  imageUrl: 'https://example.com/images/react-streaming.png', // Placeholder for React streaming flow
                },
              ],
            },
            {
              title: 'Hydration Strategies',
              description: 'Understand the process of "hydration" in SSR/SSG frameworks, where client-side JavaScript attaches to server-rendered HTML.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-6-observability',
          title: 'Lesson 6: Observability',
          duration: '60 min',
          subtopics: [
            {
              title: 'Logging Practices',
              description: 'Best practices for logging in front-end applications, including structured logging, log levels, and remote logging services.',
              codeLessons: [],
            },
            {
              title: 'Monitoring with Sentry, Splunk',
              description: 'Introduction to monitoring tools like Sentry (error tracking) and Splunk (log management) for gaining insights into application health.',
              codeLessons: [],
            },
            {
              title: 'Tracing Performance Bottlenecks',
              description: 'Techniques for tracing requests and identifying performance bottlenecks across distributed front-end and back-end systems.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-7-functional-programming-js',
          title: 'Lesson 7: Functional Programming in JS',
          duration: '75 min',
          subtopics: [
            {
              title: 'Pure Functions',
              description: 'Understand pure functions: functions that always return the same output for the same input and have no side effects.',
              codeLessons: [
                {
                  lessonTitle: 'Pure vs Impure Function',
                  codeSnippet: `// Pure function
function add(a, b) {
  return a + b;
}

// Impure function (modifies external state)
let counter = 0;
function increment() {
  counter++; // Side effect
  return counter;
}`,
                  explanation: 'This illustrates the difference between a pure function (`add`) which only depends on its inputs, and an impure function (`increment`) which has a side effect by modifying an external variable.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Immutability',
              description: 'Concept of immutability in data structures and how it simplifies state management and prevents unexpected side effects.',
              codeLessons: [
                {
                  lessonTitle: 'Immutability with Arrays and Objects',
                  codeSnippet: `// Changing an array (mutable)
const arr1 = [1, 2, 3];
arr1.push(4); // arr1 is now [1, 2, 3, 4]

// Changing an array (immutable approach)
const arr2 = [1, 2, 3];
const newArr2 = [...arr2, 4]; // newArr2 is [1, 2, 3, 4], arr2 is still [1, 2, 3]

// Changing an object (mutable)
const obj1 = { a: 1, b: 2 };
obj1.c = 3; // obj1 is now { a: 1, b: 2, c: 3 }

// Changing an object (immutable approach)
const obj2 = { a: 1, b: 2 };
const newObj2 = { ...obj2, c: 3 }; // newObj2 is { a: 1, b: 2, c: 3 }, obj2 is still { a: 1, b: 2 }`,
                  explanation: 'Demonstrates how to create new data structures instead of modifying existing ones to maintain immutability, using spread syntax for arrays and objects.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Currying & Composition',
              description: 'Explore advanced functional programming concepts: currying (transforming functions to take arguments one at a time) and function composition (combining simple functions to build more complex ones).',
              codeLessons: [],
            },
            {
              title: 'Higher-Order Functions',
              description: 'Understand higher-order functions: functions that take other functions as arguments or return functions as their results.',
              codeLessons: [
                {
                  lessonTitle: 'Higher-Order Function Example (map)',
                  codeSnippet: `const numbers = [1, 2, 3];

// map is a HOF because it takes a function as an argument
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9]

// Custom HOF
function withLogging(func) {
  return (...args) => {
    console.log('Calling', func.name, 'with args:', args);
    const result = func(...args);
    console.log('Result:', result);
    return result;
  };
}

const loggedAdd = withLogging(add); // 'add' from previous example
loggedAdd(5, 3);`,
                  explanation: 'This shows `map` as a built-in higher-order function and a custom `withLogging` higher-order function that wraps another function to add logging capabilities.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'advanced-lesson-8-advanced-security',
          title: 'Lesson 8: Advanced Security',
          duration: '60 min',
          subtopics: [
            {
              title: 'OAuth 2.0',
              description: 'Deep dive into OAuth 2.0, an authorization framework that allows third-party applications to obtain limited access to a user\'s resources on an HTTP service.',
              codeLessons: [
                {
                  lessonTitle: 'OAuth 2.0 Flow (Conceptual)',
                  codeSnippet: `// 1. User clicks "Login with Google"
// 2. Client redirects user to Google authorization server
// 3. User grants permission
// 4. Google redirects user back to client with authorization code
// 5. Client exchanges code for access token (server-to-server)
// 6. Client uses access token to call Google API on behalf of user`,
                  explanation: 'This illustrates the fundamental steps in a typical OAuth 2.0 authorization code flow, emphasizing the redirection and token exchange process.',
                  imageUrl: 'https://example.com/images/oauth-flow.png', // Placeholder for OAuth 2.0 flow diagram
                },
              ],
            },
            {
              title: 'JWT Authentication Flow',
              description: 'Understand JSON Web Tokens (JWTs) for secure information transmission between parties, typically used for authentication and authorization.',
              codeLessons: [
                {
                  lessonTitle: 'JWT Structure (Conceptual)',
                  codeSnippet: `// Header.Payload.Signature
// Header: {"alg": "HS256", "typ": "JWT"} (Base64 encoded)
// Payload: {"sub": "1234567890", "name": "John Doe", "iat": 1516239022} (Base64 encoded)
// Signature: calculated using Header, Payload, and a secret`,
                  explanation: 'This shows the three main parts of a JWT: Header, Payload, and Signature, each Base64 encoded and joined by dots.',
                  imageUrl: 'https://example.com/images/jwt-structure.png', // Placeholder for JWT structure visual
                },
              ],
            },
            {
              title: 'Auth vs Authorization',
              description: 'Clarify the difference between authentication (verifying identity) and authorization (determining permissions).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-9-advanced-testing',
          title: 'Lesson 9: Advanced Testing',
          duration: '75 min',
          subtopics: [
            {
              title: 'Code Coverage Tools',
              description: 'Learn about tools that measure the percentage of your code executed by tests, helping identify untested areas.',
              codeLessons: [],
            },
            {
              title: 'Snapshot Testing',
              description: 'Understand snapshot testing (e.g., with Jest) for components or large data structures to detect unintended UI changes.',
              codeLessons: [
                {
                  lessonTitle: 'Jest Snapshot Test Example',
                  codeSnippet: `// MyComponent.js
function MyComponent({ data }) {
  return <div>{data.map(item => <p key={item.id}>{item.text}</p>)}</div>;
}
export default MyComponent;

// MyComponent.test.js
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('MyComponent renders correctly', () => {
  const tree = renderer.create(<MyComponent data={[{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]} />).toJSON();
  expect(tree).toMatchSnapshot();
});`,
                  explanation: 'This Jest test uses `react-test-renderer` to render a React component and creates a snapshot. Future test runs compare against this snapshot, failing if the rendered output has changed.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Flaky Tests & Stabilization',
              description: 'Strategies for identifying and fixing "flaky" tests (tests that sometimes pass and sometimes fail) to ensure reliable CI/CD.',
              codeLessons: [],
            },
            {
              title: 'Running Tests in CI',
              description: 'Integrate testing into Continuous Integration (CI) pipelines for automated validation of code changes.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-10-web-performance-apis',
          title: 'Lesson 10: Web Performance APIs',
          duration: '60 min',
          subtopics: [
            {
              title: 'PerformanceObserver',
              description: 'Learn to use the `PerformanceObserver` API to collect and react to various performance metrics as they happen in the browser.',
              codeLessons: [
                {
                  lessonTitle: 'Basic PerformanceObserver Example (LCP)',
                  codeSnippet: `const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
  }
});
observer.observe({ type: 'largest-contentful-paint', buffered: true });`,
                  explanation: 'This code snippet uses `PerformanceObserver` to monitor and log the `Largest Contentful Paint` (LCP) performance metric, which is crucial for perceived page load speed.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Resource Timing API',
              description: 'Explore the Resource Timing API for detailed insights into the loading performance of various resources (images, scripts, stylesheets).',
              codeLessons: [],
            },
            {
              title: 'Lighthouse Advanced Usage',
              description: 'Leverage advanced features of Google Lighthouse for comprehensive web performance, accessibility, and SEO audits.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-11-queues-concurrency',
          title: 'Lesson 11: Queues & Concurrency',
          duration: '60 min',
          subtopics: [
            {
              title: 'Throttling vs Debouncing',
              description: 'Differentiate between throttling (limiting execution frequency) and debouncing (executing after a pause) for event handling.',
              codeLessons: [
                {
                  lessonTitle: 'Throttling Function Example',
                  codeSnippet: `function throttle(func, delay) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  };
}

const throttledScrollHandler = throttle(() => console.log('Scroll!'), 100);
window.addEventListener('scroll', throttledScrollHandler);`,
                  explanation: 'This `throttle` function ensures that the wrapped function (`func`) is called at most once within a specified `delay`, preventing excessive calls during rapid events like scrolling.',
                  imageUrl: 'https://example.com/images/throttling-debouncing.png', // Placeholder for throttling/debouncing visual
                },
                {
                  lessonTitle: 'Debouncing Function Example',
                  codeSnippet: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => console.log('Searching for:', query), 300);
// Call debouncedSearch on keyup event in a search box
// e.g., <input onkeyup="debouncedSearch(this.value)" />`,
                  explanation: 'This `debounce` function ensures that the wrapped function (`func`) is only called after a specified `delay` has passed without any new calls, useful for search input where you only want to search once the user stops typing.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Using Queues for Sync',
              description: 'Explore how queues can be used in front-end development to manage and synchronize asynchronous operations.',
              codeLessons: [],
            },
            {
              title: 'Queue Use Cases in UI',
              description: 'Practical examples of using queues to manage animations, network requests, or state updates in user interfaces.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-12-data-sync-conflict-resolution',
          title: 'Lesson 12: Data Sync & Conflict Resolution',
          duration: '60 min',
          subtopics: [
            {
              title: 'Optimistic Updates',
              description: 'Learn about optimistic UI updates, where the UI is updated immediately after a user action, assuming the server operation will succeed, and then reverted if an error occurs.',
              codeLessons: [
                {
                  lessonTitle: 'Optimistic UI Update (Conceptual)',
                  codeSnippet: `// User clicks "Like" button
// 1. Immediately update UI to show "Liked" state
// 2. Send API request to server to record like
// 3. If API succeeds, keep UI as is
// 4. If API fails, revert UI to "Unlike" state and show error`,
                  explanation: 'This outlines the conceptual flow of an optimistic UI update, providing immediate feedback to the user while asynchronously confirming the change with the server.',
                  imageUrl: 'https://example.com/images/optimistic-ui.png', // Placeholder for Optimistic UI flow
                },
              ],
            },
            {
              title: 'CRDTs & Operational Transform',
              description: 'Introduction to advanced techniques for collaborative editing and real-time data synchronization: Conflict-free Replicated Data Types (CRDTs) and Operational Transformation (OT).',
              codeLessons: [],
            },
            {
              title: 'Syncing Offline Data',
              description: 'Strategies and patterns for synchronizing data collected offline with a remote server once network connectivity is restored.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-13-browser-internals',
          title: 'Lesson 13: Browser Internals',
          duration: '90 min',
          subtopics: [
            {
              title: 'JS Engine Internals (V8)',
              description: 'A deeper look into how JavaScript engines like V8 (in Chrome, Node.js) parse, compile, and execute JavaScript code, including JIT compilation and garbage collection.',
              codeLessons: [
                {
                  lessonTitle: 'V8 Pipeline (Simplified)',
                  codeSnippet: `// JavaScript Code
// -> Parsing (Abstract Syntax Tree)
// -> Ignition (Interpreter - generates bytecode)
// -> TurboFan (Optimizing Compiler - generates machine code)
// -> Execution`,
                  explanation: 'This is a simplified representation of the V8 JavaScript engine\'s pipeline, from parsing JavaScript to its execution as machine code.',
                  imageUrl: 'https://example.com/images/v8-pipeline.png', // Placeholder for V8 pipeline diagram
                },
              ],
            },
            {
              title: 'Blink/WebKit Overview',
              description: 'Understand the architecture of browser rendering engines like Blink (Chromium) and WebKit (Safari), including their main components (layout engine, rendering engine, JavaScript engine integration).',
              codeLessons: [],
            },
            {
              title: 'How Browsers Parse HTML/CSS',
              description: 'Detailed explanation of how browsers parse HTML to build the DOM tree and parse CSS to build the CSSOM tree.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-14-webassembly-wasm',
          title: 'Lesson 14: WebAssembly (WASM)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What & Why of WASM',
              description: 'Introduction to WebAssembly (WASM), a low-level binary instruction format for a stack-based virtual machine, designed for high-performance web applications.',
              codeLessons: [],
            },
            {
              title: 'Rust/C++ to WASM',
              description: 'Understand how languages like Rust or C++ can be compiled into WebAssembly to run high-performance code in the browser.',
              codeLessons: [],
            },
            {
              title: 'When to Use It in FE',
              description: 'Identify appropriate use cases for WebAssembly in front-end development (e.g., heavy computations, game engines, video editing).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-15-feature-flags-ab-testing',
          title: 'Lesson 15: Feature Flags & A/B Testing',
          duration: '60 min',
          subtopics: [
            {
              title: 'Client vs Server Flags',
              description: 'Differentiate between client-side and server-side feature flags and their respective use cases and implications.',
              codeLessons: [],
            },
            {
              title: 'Rollout Strategies',
              description: 'Learn about various strategies for rolling out new features using flags (e.g., percentage rollouts, user segment targeting).',
              codeLessons: [],
            },
            {
              title: 'Metrics & Experimentation',
              description: 'Understand how feature flags are integrated with A/B testing platforms to measure the impact of new features on user behavior and business metrics.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'advanced-lesson-16-internationalization',
          title: 'Lesson 16: Internationalization (i18n/L10n)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Encoding & Unicode',
              description: 'Understand character encodings (e.g., UTF-8) and Unicode for handling diverse text data in global applications.',
              codeLessons: [],
            },
            {
              title: 'Date/Time Formatting',
              description: 'Best practices for formatting dates and times according to different locales and time zones.',
              codeLessons: [
                {
                  lessonTitle: 'Date Formatting with Intl.DateTimeFormat',
                  codeSnippet: `const date = new Date(); // Current date and time

// English (US)
console.log(new Intl.DateTimeFormat('en-US').format(date)); // e.g., "6/14/2025"

// German
console.log(new Intl.DateTimeFormat('de-DE').format(date)); // e.g., "14.6.2025"

// Japanese (with options)
console.log(new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
}).format(date)); // e.g., "2025年6月14日土曜日"`,
                  explanation: 'This uses the `Intl.DateTimeFormat` API to format a date according to different locales, demonstrating how to handle diverse date representations.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Locale Switching',
              description: 'Implement mechanisms for users to switch between different locales (languages and regions) within a front-end application.',
              codeLessons: [],
            },
            {
              title: 'RTL Handling',
              description: 'Considerations for Right-to-Left (RTL) languages in UI layout and styling.',
              codeLessons: [],
            },
          ],
        },
      ],
    },
  ],
};

export default csFundamentalsCourse;