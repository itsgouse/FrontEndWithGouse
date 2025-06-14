import { Course } from '../courses'; // Assuming you have this interface

const reactForFrontEndDevelopers: Course = {
  id: 'react-for-front-end-developers',
  title: 'React for Front-End Developers',
  description: 'A comprehensive curriculum covering React from foundational concepts to advanced, job-ready topics, including hooks, state management, performance, and testing.',
  icon: 'Braces', // Assuming an icon for React
  color: 'bg-blue-500', // React blue color
  estimatedHours: 90, // Rough estimate
  totalLessons: 26, // 8 (Section 1) + 9 (Section 2) + 9 (Section 3)
  sections: [
    {
      id: 'react-section-1-basics',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 'react-lesson-1-intro-jsx',
          title: 'Lesson 1: Introduction to React & JSX',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is React? Why use a component-based UI library?',
              description: 'Understand the core purpose of React and the benefits of its component-based architecture for building user interfaces.',
              codeLessons: []
            },
            {
              title: 'Setting up a React project (conceptual: Create React App, Vite)',
              description: 'Learn the conceptual steps involved in initializing a React project, touching upon popular tools like Create React App and Vite.',
              codeLessons: [
                {
                  lessonTitle: 'Conceptual Project Setup',
                  codeSnippet: `// Using Create React App (CRA)\nnpx create-react-app my-app\ncd my-app\nnpm start\n\n// Using Vite\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`,
                  explanation: 'These commands are used to quickly set up a new React project using either Create React App or Vite, providing a starting point for development.',
                  imageUrl: 'https://example.com/images/react-setup.png'
                }
              ]
            },
            {
              title: 'JSX: JavaScript XML syntax',
              description: 'Deep dive into JSX, a syntax extension for JavaScript that looks like HTML and allows you to write UI logic within JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'Basic JSX Example',
                  codeSnippet: `const element = <h1>Hello, React!</h1>;`,
                  explanation: 'This simple line demonstrates how HTML-like syntax is directly embedded within JavaScript using JSX.',
                  imageUrl: 'https://example.com/images/jsx-basic.png'
                }
              ]
            },
            {
              title: 'Embedding expressions in JSX ({})',
              description: 'Learn how to dynamically insert JavaScript expressions, variables, and function calls directly into your JSX using curly braces.',
              codeLessons: [
                {
                  lessonTitle: 'Embedding Expressions',
                  codeSnippet: `const name = 'World';\nconst element = <h1>Hello, {name}!</h1>;\n\nfunction formatUser(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst user = { firstName: 'Harper', lastName: 'Perez' };\nconst greeting = <h1>Hello, {formatUser(user)}!</h1>;`,
                  explanation: 'Shows how to use curly braces to embed variables and function call results directly into JSX output.',
                  imageUrl: 'https://example.com/images/jsx-expressions.png'
                }
              ]
            },
            {
              title: 'JSX limitations (e.g., className vs. class, single root element)',
              description: 'Understand the key differences and limitations of JSX compared to standard HTML, such as using `className` instead of `class` and the requirement for a single root element.',
              codeLessons: [
                {
                  lessonTitle: 'JSX Limitations Example',
                  codeSnippet: `// Correct: className\n<div className="my-class">Hello</div>\n\n// Incorrect: class (will cause warning)\n// <div class="my-class">Hello</div>\n\n// Correct: Single root element\n<div>\n  <h1>Title</h1>\n  <p>Paragraph</p>\n</div>\n\n// Incorrect: Multiple root elements\n// <h1>Title</h1>\n// <p>Paragraph</p>`,
                  explanation: 'Illustrates common JSX limitations like using `className` for CSS classes and the necessity of wrapping multiple elements in a single parent.',
                  imageUrl: 'https://example.com/images/jsx-limitations.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-2-components-props',
          title: 'Lesson 2: Components & Props',
          duration: '90 min',
          subtopics: [
            {
              title: 'Functional Components vs. Class Components (focus on Functional)',
              description: 'Explore the two main types of React components, with a strong emphasis on understanding and using modern functional components.',
              codeLessons: []
            },
            {
              title: 'Creating and rendering functional components',
              description: 'Hands-on guide to defining simple functional components and incorporating them into your React application.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a Functional Component',
                  codeSnippet: `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nfunction App() {\n  return <Welcome name="Sara" />;\n}`,
                  explanation: 'Demonstrates defining a basic functional component `Welcome` and rendering it within the `App` component, passing data via `props`.',
                  imageUrl: 'https://example.com/images/functional-component.png'
                }
              ]
            },
            {
              title: 'Props: Passing data from parent to child components',
              description: 'Learn how `props` (short for properties) enable the flow of data from parent components down to their child components.',
              codeLessons: []
            },
            {
              title: 'Destructuring props',
              description: 'Discover how to use JavaScript destructuring syntax to extract values from the `props` object, making your code cleaner and more readable.',
              codeLessons: [
                {
                  lessonTitle: 'Destructuring Props',
                  codeSnippet: `function Greeting({ name, age }) {\n  return <p>Hello, {name}! You are {age} years old.</p>;\n}\n\n// Usage:\n<Greeting name="Alice" age={30} />`,
                  explanation: 'Shows how to destructure props directly in the function signature for easier access to individual prop values.',
                  imageUrl: 'https://example.com/images/destructuring-props.png'
                }
              ]
            },
            {
              title: 'Prop Types (conceptual, for validation)',
              description: 'Understand the conceptual benefits of `PropTypes` for type-checking props passed to components, aiding in debugging and maintaining large applications.',
              codeLessons: [
                {
                  lessonTitle: 'Prop Types Conceptual Example',
                  codeSnippet: `import PropTypes from 'prop-types';\n\nfunction MyComponent({ name, age }) {\n  return (\n    <div>\n      <p>Name: {name}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n}\n\nMyComponent.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};`,
                  explanation: 'Illustrates how `PropTypes` conceptually define the expected types and requirements for component props, even though typically used with class components or external libraries in modern React.',
                  imageUrl: 'https://example.com/images/prop-types-conceptual.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-3-state-lifecycle-hooks',
          title: 'Lesson 3: State & Lifecycle (with Hooks)',
          duration: '120 min',
          subtopics: [
            {
              title: 'useState Hook: Declaring and updating state variables',
              description: 'Learn the fundamental `useState` Hook to add state to functional components, allowing them to manage and react to data changes.',
              codeLessons: [
                {
                  lessonTitle: 'Using useState for Counter',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}`,
                  explanation: 'A classic example demonstrating how `useState` declares a state variable `count` and a function `setCount` to update it, triggering re-renders.',
                  imageUrl: 'https://example.com/images/usestate-counter.png'
                }
              ]
            },
            {
              title: 'Immutability of state',
              description: 'Understand the crucial concept of immutability in React state and why you should never directly modify state variables.',
              codeLessons: []
            },
            {
              title: 'useEffect Hook: Performing side effects (data fetching, subscriptions, manual DOM manipulations)',
              description: 'Master the `useEffect` Hook for handling side effects in your functional components, such as data fetching, subscriptions, or direct DOM interactions.',
              codeLessons: [
                {
                  lessonTitle: 'useEffect for Data Fetching',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/todos/1')\n      .then(response => response.json())\n      .then(json => {\n        setData(json);\n        setLoading(false);\n      });\n  }, []); // Empty dependency array means run once on mount\n\n  if (loading) return <p>Loading...</p>;\n  return <p>Title: {data.title}</p>;\n}`,
                  explanation: 'Illustrates fetching data using `useEffect` on component mount and managing loading state.',
                  imageUrl: 'https://example.com/images/useeffect-data-fetching.png'
                }
              ]
            },
            {
              title: 'useEffect cleanup function',
              description: 'Learn how to use the cleanup function returned by `useEffect` to prevent memory leaks and unnecessary subscriptions, essential for performance and stability.',
              codeLessons: [
                {
                  lessonTitle: 'useEffect with Cleanup',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(prevCount => prevCount + 1);\n    }, 1000);\n\n    // Cleanup function\n    return () => clearInterval(interval);\n  }, []);\n\n  return <h2>Timer: {count}</h2>;\n}`,
                  explanation: 'Demonstrates using `useEffect` for a timer and its cleanup function to prevent the interval from running after the component unmounts.',
                  imageUrl: 'https://example.com/images/useeffect-cleanup.png'
                }
              ]
            },
            {
              title: 'Dependency Array in useEffect ([], [dependencies], no array)',
              description: 'Understand the critical role of the dependency array in `useEffect` and how it controls when your effect runs: once, on specific dependency changes, or on every render.',
              codeLessons: [
                {
                  lessonTitle: 'Dependency Array Examples',
                  codeSnippet: `useEffect(() => {\n  // Runs once on mount (no dependencies)\n}, []);\n\nuseEffect(() => {\n  // Runs on mount AND when 'someValue' changes\n}, [someValue]);\n\nuseEffect(() => {\n  // Runs on every render\n});`,
                  explanation: 'Clearly shows how different dependency array configurations in `useEffect` affect when the effect function is executed.',
                  imageUrl: 'https://example.com/images/dependency-array.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-4-event-handling',
          title: 'Lesson 4: Event Handling',
          duration: '60 min',
          subtopics: [
            {
              title: 'React Event System (Synthetic Events)',
              description: 'Explore React\'s synthetic event system, a cross-browser wrapper around the browser\'s native event system.',
              codeLessons: []
            },
            {
              title: 'Handling common events: onClick, onChange, onSubmit',
              description: 'Learn how to attach and manage common user interaction events like clicks, input changes, and form submissions in React.',
              codeLessons: [
                {
                  lessonTitle: 'Common Event Handlers',
                  codeSnippet: `function MyComponent() {\n  const handleClick = () => {\n    console.log('Button clicked!');\n  };\n\n  const handleChange = (event) => {\n    console.log('Input value:', event.target.value);\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault(); // Prevent default form submission\n    console.log('Form submitted!');\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <input type="text" onChange={handleChange} />\n      <form onSubmit={handleSubmit}>\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n}`,
                  explanation: 'Provides examples of `onClick`, `onChange`, and `onSubmit` event handlers and how they are used in React components.',
                  imageUrl: 'https://example.com/images/event-handlers.png'
                }
              ]
            },
            {
              title: 'Passing arguments to event handlers',
              description: 'Understand how to pass additional arguments to your event handler functions when triggered by user interactions.',
              codeLessons: [
                {
                  lessonTitle: 'Passing Arguments to Event Handlers',
                  codeSnippet: `function ItemList() {\n  const handleDelete = (id) => {\n    console.log('Deleting item with ID:', id);\n  };\n\n  return (\n    <ul>\n      {[1, 2, 3].map(id => (\n        <li key={id}>\n          Item {id}\n          <button onClick={() => handleDelete(id)}>Delete</button>\n        </li>\n      ))}\n    </ul>\n  );\n}`,
                  explanation: 'Shows how to pass arguments, like an item ID, to an event handler using an arrow function directly in the JSX.',
                  imageUrl: 'https://example.com/images/event-args.png'
                }
              ]
            },
            {
              title: 'Preventing default behavior (event.preventDefault())',
              description: 'Learn how to use `event.preventDefault()` within your event handlers to stop the browser\'s default action for certain events, like form submission or link clicks.',
              codeLessons: [
                {
                  lessonTitle: 'Preventing Default Behavior',
                  codeSnippet: `function MyForm() {\n  const handleSubmit = (event) => {\n    event.preventDefault(); // Prevents page reload\n    console.log('Form submitted, but no page reload!');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}`,
                  explanation: 'Illustrates the use of `event.preventDefault()` to stop the default form submission behavior, which typically causes a page reload.',
                  imageUrl: 'https://example.com/images/prevent-default.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-5-conditional-list-rendering',
          title: 'Lesson 5: Conditional Rendering & List Rendering',
          duration: '75 min',
          subtopics: [
            {
              title: 'Conditional Rendering: if statements, Ternary Operator, Logical && Operator',
              description: 'Master techniques for rendering components or elements based on certain conditions, using `if` statements, ternary operators, and the logical `&&` operator.',
              codeLessons: [
                {
                  lessonTitle: 'Conditional Rendering Examples',
                  codeSnippet: `function Greeting({ isLoggedIn }) {\n  if (isLoggedIn) {\n    return <h2>Welcome back!</h2>;\n  } else {\n    return <h2>Please sign up.</h2>;\n  }\n}\n\nfunction AdminPanel({ isAdmin }) {\n  return (\n    <div>\n      {isAdmin ? <button>Manage Users</button> : null}\n      {isAdmin && <p>Admin access granted!</p>}\n    </div>\n  );\n}`,
                  explanation: 'Shows various ways to conditionally render elements: `if/else`, ternary operator, and the logical `&&` operator.',
                  imageUrl: 'https://example.com/images/conditional-rendering.png'
                }
              ]
            },
            {
              title: 'Rendering nothing (null)',
              description: 'Learn how to explicitly tell React to render nothing for a component or element by returning `null` from a functional component or a JSX expression.',
              codeLessons: [
                {
                  lessonTitle: 'Returning Null to Render Nothing',
                  codeSnippet: `function WarningBanner({ warn }) {\n  if (!warn) {\n    return null; // Don't render anything if warn is false\n  }\n\n  return (\n    <div className="warning">\n      Warning!\n    </div>\n  );\n}`,
                  explanation: 'Demonstrates returning `null` from a component to prevent it from rendering anything in the DOM.',
                  imageUrl: 'https://example.com/images/render-null.png'
                }
              ]
            },
            {
              title: 'List Rendering: map() method for rendering arrays of data',
              description: 'Understand how to efficiently render dynamic lists of items from arrays using the JavaScript `map()` method in JSX.',
              codeLessons: [
                {
                  lessonTitle: 'Rendering a List with map()',
                  codeSnippet: `function NumberList({ numbers }) {\n  const listItems = numbers.map((number) =>\n    <li key={number.toString()}>{number}</li>\n  );\n  return <ul>{listItems}</ul>;\n}\n\n// Usage:\n<NumberList numbers={[1, 2, 3, 4, 5]} />`,
                  explanation: 'Explains how to use the `map()` method to transform an array of data into a list of React elements.',
                  imageUrl: 'https://example.com/images/list-map.png'
                }
              ]
            },
            {
              title: 'Importance of key prop when rendering lists',
              description: 'Grasp the critical role of the `key` prop when rendering lists in React for efficient updates and preventing subtle bugs.',
              codeLessons: [
                {
                  lessonTitle: 'Importance of Key Prop',
                  codeSnippet: `// Correct usage with unique id\nconst todoItems = todos.map(todo =>\n  <li key={todo.id}> {todo.text} </li>\n);\n\n// Incorrect (will cause warning if items reorder/change)\n// const todoItems = todos.map((todo, index) =>\n//   <li key={index}> {todo.text} </li>\n// );`,
                  explanation: 'Highlights the proper use of the `key` prop with unique identifiers to help React efficiently identify and re-render list items.',
                  imageUrl: 'https://example.com/images/key-prop.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-6-styling',
          title: 'Lesson 6: Styling in React',
          duration: '75 min',
          subtopics: [
            {
              title: 'Inline Styles (JS objects)',
              description: 'Learn how to apply styles directly to elements using JavaScript objects as inline styles in React.',
              codeLessons: [
                {
                  lessonTitle: 'Inline Styles Example',
                  codeSnippet: `function MyComponent() {\n  const myStyle = {\n    color: 'blue',\n    fontSize: '16px',\n    backgroundColor: 'lightgray'\n  };\n\n  return (\n    <p style={myStyle}>This text is styled inline.</p>\n  );\n}`,
                  explanation: 'Shows how to define a JavaScript object for styles and apply it directly to a JSX element using the `style` prop.',
                  imageUrl: 'https://example.com/images/inline-styles.png'
                }
              ]
            },
            {
              title: 'CSS Classes and className',
              description: 'Understand the standard way to apply CSS classes to React elements using the `className` prop.',
              codeLessons: [
                {
                  lessonTitle: 'CSS Classes Example',
                  codeSnippet: `// In your CSS file (e.g., App.css):\n// .my-button {\n//   background-color: green;\n//   color: white;\n// }\n\n// In your React component:\nfunction MyButton() {\n  return (\n    <button className="my-button">Click Me</button>\n  );\n}`,
                  explanation: 'Demonstrates applying external CSS classes to React components using the `className` prop.',
                  imageUrl: 'https://example.com/images/css-classes.png'
                }
              ]
            },
            {
              title: 'Importing CSS Files (global and component-specific)',
              description: 'Learn how to import global CSS files and component-specific CSS files into your React application.',
              codeLessons: [
                {
                  lessonTitle: 'Importing CSS',
                  codeSnippet: `// For global styles (e.g., in index.js or App.js)\nimport './index.css';\n\n// For component-specific styles (e.g., in MyComponent.js)\nimport './MyComponent.css';`,
                  explanation: 'Illustrates the common patterns for importing global and component-specific CSS files in React.',
                  imageUrl: 'https://example.com/images/import-css.png'
                }
              ]
            },
            {
              title: 'Introduction to CSS Modules (conceptual benefits)',
              description: 'Get a conceptual understanding of CSS Modules, which provide scoped CSS to prevent styling conflicts between components.',
              codeLessons: [
                {
                  lessonTitle: 'CSS Modules Conceptual',
                  codeSnippet: `// MyComponent.module.css:\n// .container {\n//   background-color: blue;\n// }\n\n// MyComponent.js:\nimport styles from './MyComponent.module.css';\n\nfunction MyComponent() {\n  return (\n    <div className={styles.container}>Hello with CSS Module</div>\n  );\n}`,
                  explanation: 'Conceptual example showing how CSS Modules import styles as an object, ensuring unique class names and preventing global scope conflicts.',
                  imageUrl: 'https://example.com/images/css-modules-conceptual.png'
                }
              ]
            },
            {
              title: 'Introduction to CSS-in-JS (conceptual benefits, e.g., Styled Components)',
              description: 'Explore the conceptual advantages of CSS-in-JS libraries like Styled Components, which allow you to write CSS directly within your JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'CSS-in-JS Conceptual (Styled Components)',
                  codeSnippet: `// import styled from 'styled-components';\n\n// const Button = styled.button\`\n//   background-color: red;\n//   color: white;\n//   padding: 10px 20px;\n// \`;\n\n// function MyComponent() {\n//   return <Button>Click Me</Button>;\n// }`,
                  explanation: 'A conceptual snippet demonstrating how Styled Components allow CSS to be written directly in JavaScript, creating unique components with encapsulated styles.',
                  imageUrl: 'https://example.com/images/css-in-js-conceptual.png'
                }
              ]
            },
            {
              title: 'Using Tailwind CSS classes in React (practical application in Canvas)',
              description: 'Gain practical experience applying utility-first Tailwind CSS classes directly within your React components for rapid styling.',
              codeLessons: [
                {
                  lessonTitle: 'Tailwind CSS in React',
                  codeSnippet: `function HeroSection() {\n  return (\n    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">\n      <h1 className="text-4xl font-bold mb-4">Welcome to our site!</h1>\n      <p className="text-lg">This is a beautiful hero section styled with Tailwind CSS.</p>\n    </div>\n  );\n}`,
                  explanation: 'Illustrates how to apply various Tailwind CSS utility classes directly to JSX elements to quickly style components.',
                  imageUrl: 'https://example.com/images/tailwind-react.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-7-forms',
          title: 'Lesson 7: Forms in React (Controlled Components)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Controlled Components: Form elements whose values are controlled by React state',
              description: 'Understand the concept of controlled components, where form input values are driven by React component state.',
              codeLessons: [
                {
                  lessonTitle: 'Controlled Input Example',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction NameForm() {\n  const [name, setName] = useState('');\n\n  const handleChange = (event) => {\n    setName(event.target.value);\n  };\n\n  return (\n    <form>\n      <label>\n        Name:\n        <input type="text" value={name} onChange={handleChange} />\n      </label>\n      <p>Current Name: {name}</p>\n    </form>\n  );\n}`,
                  explanation: 'Shows how an input field\'s value is controlled by React state and updated via an `onChange` handler.',
                  imageUrl: 'https://example.com/images/controlled-input.png'
                }
              ]
            },
            {
              title: 'Handling multiple input fields with a single change handler',
              description: 'Learn a robust pattern for managing state for multiple input fields using a single generic `onChange` event handler.',
              codeLessons: [
                {
                  lessonTitle: 'Single Change Handler for Multiple Inputs',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction MultiInputForm() {\n  const [formData, setFormData] = useState({ username: '', email: '' });\n\n  const handleChange = (event) => {\n    const { name, value } = event.target;\n    setFormData(prevData => ({ ...prevData, [name]: value }));\n  };\n\n  return (\n    <form>\n      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />\n      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />\n    </form>\n  );\n}`,
                  explanation: 'Demonstrates a common pattern to handle `onChange` events for multiple input fields using a single handler and the `name` attribute.',
                  imageUrl: 'https://example.com/images/multi-input-handler.png'
                }
              ]
            },
            {
              title: 'Form submission: Preventing default, accessing form data',
              description: 'Master the process of handling form submissions in React, including preventing default browser behavior and accessing the submitted form data.',
              codeLessons: [
                {
                  lessonTitle: 'Form Submission Handling',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction LoginForm() {\n  const [username, setUsername] = useState('');\n  const [password, setPassword] = useState('');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    console.log('Submitted:', { username, password });\n    // In a real app, you'd send this data to a server\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />\n      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />\n      <button type="submit">Login</button>\n    </form>\n  );\n}`,
                  explanation: 'Shows how to handle form submission, prevent the default page reload, and access the current state values for the form fields.',
                  imageUrl: 'https://example.com/images/form-submission.png'
                }
              ]
            },
            {
              title: 'Basic form validation (client-side, using React state)',
              description: 'Implement client-side form validation using React state to provide immediate feedback to users for input errors.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Form Validation',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction ValidationForm() {\n  const [email, setEmail] = useState('');\n  const [emailError, setEmailError] = useState('');\n\n  const validateEmail = (value) => {\n    if (!value.includes('@')) {\n      setEmailError('Email must contain @');\n    } else {\n      setEmailError('');\n    }\n  };\n\n  const handleChange = (e) => {\n    setEmail(e.target.value);\n    validateEmail(e.target.value);\n  };\n\n  return (\n    <form>\n      <input type="text" value={email} onChange={handleChange} placeholder="Email" />\n      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}\n    </form>\n  );\n}`,
                  explanation: 'A simple example of client-side validation, updating an error state based on input changes and displaying a message.',
                  imageUrl: 'https://example.com/images/form-validation.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-8-routing-basics',
          title: 'Lesson 8: React "Routing" Basics (Simulated)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Conceptual understanding of multi-page applications vs. SPAs',
              description: 'Differentiate between traditional multi-page applications (MPAs) and modern Single Page Applications (SPAs) and understand why SPAs are common with React.',
              codeLessons: []
            },
            {
              title: 'Simulating "pages" using conditional rendering (if/switch statements) based on a state variable',
              description: 'Learn to simulate basic routing within a SPA by conditionally rendering different components based on a state variable that represents the current "page".',
              codeLessons: [
                {
                  lessonTitle: 'Simulated Routing with State',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction Home() { return <h2>Home Page</h2>; }\nfunction About() { return <h2>About Us</h2>; }\nfunction Contact() { return <h2>Contact Info</h2>; }\n\nfunction AppRouter() {\n  const [currentPage, setCurrentPage] = useState('home');\n\n  let pageComponent;\n  switch (currentPage) {\n    case 'home':\n      pageComponent = <Home />;\n      break;\n    case 'about':\n      pageComponent = <About />;\n      break;\n    case 'contact':\n      pageComponent = <Contact />;\n      break;\n    default:\n      pageComponent = <Home />;\n  }\n\n  return (\n    <div>\n      <nav>\n        <button onClick={() => setCurrentPage('home')}>Home</button>\n        <button onClick={() => setCurrentPage('about')}>About</button>\n        <button onClick={() => setCurrentPage('contact')}>Contact</button>\n      </nav>\n      <hr />\n      {pageComponent}\n    </div>\n  );\n}`,
                  explanation: 'Demonstrates a basic simulated router using `useState` and a `switch` statement to render different components based on the `currentPage` state.',
                  imageUrl: 'https://example.com/images/simulated-routing.png'
                }
              ]
            },
            {
              title: 'Passing "route" state via props',
              description: 'Understand how to pass the current "route" state or navigation functions down through components using props in a simulated routing setup.',
              codeLessons: []
            },
            {
              title: 'Basic navigation links that update the "route" state',
              description: 'Create simple navigation elements (e.g., buttons or custom links) that update the state variable controlling the simulated route.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'react-section-1-quiz',
        title: 'Quiz: React Basics Assessment',
        questions: [
          {
            id: 's1q1',
            question: 'Which of the following is NOT a valid way to embed an expression in JSX?',
            options: ['`<h1>Hello, {name}</h1>`', '`<h1>Hello, ${name}</h1>`', '`<h1>{2 + 2}</h1>`', '`<h1>{myFunction()}</h1>`'],
            correctAnswer: 1
          },
          {
            id: 's1q2',
            question: 'What is the primary purpose of the `key` prop when rendering lists in React?',
            options: [
              'To apply unique styling to each list item.',
              'To provide a unique identifier for React to efficiently update and reorder list items.',
              'To specify the data type of each list item.',
              'To define a custom attribute for each list item.'
            ],
            correctAnswer: 1
          },
          {
            id: 's1q3',
            question: 'Which Hook would you use to add state to a functional component?',
            options: ['`useContext`', '`useEffect`', '`useState`', '`useReducer`'],
            correctAnswer: 2
          },
          {
            id: 's1q4',
            question: 'What is the correct way to prevent the default behavior of an event in React?',
            options: [
              '`event.stopDefault()`',
              '`event.stopPropagation()`',
              '`event.preventDefault()`',
              '`event.avoidDefault()`'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q5',
            question: 'When is the `useEffect` Hook with an empty dependency array (`[]`) typically run?',
            options: [
              'On every render.',
              'Only when the component props change.',
              'Only once after the initial render (componentDidMount equivalent).',
              'Before every render.'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q6',
            question: 'Which React prop is used to apply CSS classes to an HTML element?',
            options: ['`class`', '`className`', '`cssClass`', '`styleClass`'],
            correctAnswer: 1
          },
          {
            id: 's1q7',
            question: 'What is a "Controlled Component" in React forms?',
            options: [
              'A component whose value is managed by the browser\'s default behavior.',
              'A component that cannot be interacted with by the user.',
              'A form element whose value is controlled by React state.',
              'A component that controls other components.'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q8',
            question: 'If you want to conditionally render a component only if a variable `isLoggedIn` is true, which JSX operator is a concise way to do this?',
            options: [
              '`isLoggedIn || <Component />`',
              '`isLoggedIn === <Component />`',
              '`isLoggedIn && <Component />`',
              '`isLoggedIn ? <Component />`'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q9',
            question: 'What is the purpose of the `setCount` function returned by `useState`?',
            options: [
              'To directly modify the state variable `count`.',
              'To dispatch an action to a Redux store.',
              'To update the state variable `count` and trigger a re-render.',
              'To get the current value of `count`.'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q10',
            question: 'Which of these is generally considered a good practice when updating state based on the previous state?',
            options: [
              '`setCount(count + 1)`',
              '`setCount(prevCount => prevCount + 1)`',
              '`count = count + 1`',
              '`setCount({ count: count + 1 })`'
            ],
            correctAnswer: 1
          },
          {
            id: 's1q11',
            question: 'Why should you avoid directly modifying React state variables (e.g., `state.count = 5`)?',
            options: [
              'It causes a memory leak.',
              'React won\'t detect the change and won\'t re-render the component.',
              'It only works for class components.',
              'It makes your application run slower.'
            ],
            correctAnswer: 1
          },
          {
            id: 's1q12',
            question: 'What is a "Synthetic Event" in React?',
            options: [
              'A custom event created by the developer.',
              'A browser-specific event that needs polyfilling.',
              'A cross-browser wrapper around the browser\'s native event system.',
              'An event that is only triggered by server-side actions.'
            ],
            correctAnswer: 2
          },
          {
            id: 's1q13',
            question: 'If you have an array `items = [{ id: 1, text: "A" }, { id: 2, text: "B" }]`, which method would you typically use to render these items as a list of `<li>` elements in React?',
            options: ['`forEach()`', '`filter()`', '`reduce()`', '`map()`'],
            correctAnswer: 3
          },
          {
            id: 's1q14',
            question: 'Which concept best describes a React application that mimics multi-page navigation without full page reloads, typically using browser history APIs or state to manage views?',
            options: [
              'Multi-Page Application (MPA)',
              'Server-Side Rendering (SSR)',
              'Static Site Generation (SSG)',
              'Single Page Application (SPA)'
            ],
            correctAnswer: 3
          },
          {
            id: 's1q15',
            question: 'Which of these is a benefit of using Tailwind CSS with React?',
            options: [
              'It forces you to write custom CSS for every component.',
              'It encourages writing highly specific CSS selectors.',
              'It provides a large set of utility classes for rapid styling directly in JSX.',
              'It is a CSS-in-JS library that generates unique class names automatically.'
            ],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'react-basic-project-1',
          title: 'Project 1: Basic JSX Display',
          description: 'Create a new React project and modify the `App.js` file (or equivalent main component) to display a greeting message. Include a JavaScript variable within your JSX and render its value. For example, display "Hello, [Your Name]! Today is [Current Date]."',
          checkpoint: 'Verify that the greeting message and the variable content are correctly rendered in the browser. Inspect the DOM to confirm the JSX output.',
        },
        {
          id: 'react-basic-project-2',
          title: 'Project 2: User Profile Card Component',
          description: 'Build a reusable `UserCard` functional component. This component should accept `name`, `email`, and `avatarUrl` as props and display them in a visually appealing card layout. From your main `App` component, render at least three instances of `UserCard`, each with different user data passed via props.',
          checkpoint: 'Ensure that each `UserCard` instance displays the correct data passed to it and that changes in props reflect on the rendered component. Test with missing props to see default behavior or warnings.',
        },
        {
          id: 'react-basic-project-3',
          title: 'Project 3: Interactive Counter & Theme Toggle',
          description: 'Create a `Counter` component that displays a number and has two buttons: "Increment" and "Decrement". Use `useState` to manage the counter value. Additionally, implement a "Toggle Theme" button. When clicked, this button should change a background color (e.g., of the `body` or a main `div`) between light and dark using `useEffect` to apply a CSS class.',
          checkpoint: 'Confirm the counter increments and decrements correctly. Verify that clicking the "Toggle Theme" button changes the theme consistently across the application (e.g., a background color change). Check the console for any `useEffect` warnings.',
        },
        {
          id: 'react-basic-project-4',
          title: 'Project 4: Simple To-Do List Application',
          description: 'Develop a To-Do List application. Users should be able to: 1) Add new tasks via an input field and a "Add Task" button. 2) Display all tasks as a list. 3) Mark tasks as complete by clicking on them (e.g., apply a strikethrough or change background color). Use `useState` for tasks and practice event handling, conditional rendering, and list rendering with `key` props. Implement basic client-side validation (e.g., don\'t allow empty tasks).',
          checkpoint: 'Test adding, marking complete, and deleting tasks. Ensure the list updates correctly, tasks are unique (if possible, add a unique ID for keys), and empty tasks are handled gracefully.',
        },
      ]
    },
    {
      id: 'react-section-2-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'react-lesson-2-1-hooks-deep-dive',
          title: 'Lesson 1: Hooks Deep Dive (useState, useEffect advanced)',
          duration: '100 min',
          subtopics: [
            {
              title: 'Functional updates with useState (passing a function to setSate)',
              description: 'Learn to use the functional update form of `useState`\'s setter function, crucial for safe state updates that depend on the previous state.',
              codeLessons: [
                {
                  lessonTitle: 'Functional useState Update',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const incrementFive = () => {\n    // Incorrect: might use stale 'count'\n    // setCount(count + 5);\n\n    // Correct: uses latest 'prevCount'\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={incrementFive}>Increment 5</button>\n    </div>\n  );\n}`,
                  explanation: 'Explains why passing a function to `setCount` is vital when updates depend on the previous state, especially in scenarios with multiple synchronous updates.',
                  imageUrl: 'https://example.com/images/usestate-functional-update.png'
                }
              ]
            },
            {
              title: 'Lazy initial state for useState',
              description: 'Discover how to use a function for the initial state of `useState` to perform expensive computations only once on the initial render.',
              codeLessons: [
                {
                  lessonTitle: 'Lazy Initial State',
                  codeSnippet: `import React, { useState } from 'react';\n\nfunction expensiveCalculation() {\n  console.log('Calculating initial value...');\n  // Imagine a very heavy computation here\n  return 10 + 20;\n}\n\nfunction MyComponent() {\n  // This function only runs once on initial render\n  const [value, setValue] = useState(expensiveCalculation);\n\n  return (\n    <div>\n      <p>Value: {value}</p>\n      <button onClick={() => setValue(value + 1)}>Increment</button>\n    </div>\n  );\n}`,
                  explanation: 'Shows how passing a function to `useState` for its initial value can prevent unnecessary re-runs of expensive calculations on every render.',
                  imageUrl: 'https://example.com/images/lazy-initial-state.png'
                }
              ]
            },
            {
              title: 'Mastering useEffect cleanup for subscriptions and timers',
              description: 'Deepen your understanding of `useEffect` cleanup for effectively managing subscriptions, timers, and other resources to prevent memory leaks.',
              codeLessons: []
            },
            {
              title: 'Race conditions in useEffect when fetching data (and how to avoid them)',
              description: 'Learn about potential race conditions that can occur when fetching data with `useEffect` and practical strategies to mitigate them.',
              codeLessons: [
                {
                  lessonTitle: 'Avoiding Race Conditions in useEffect',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let isMounted = true; // Flag to track if component is mounted\n    setLoading(true);\n    setUser(null);\n\n    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)\n      .then(response => response.json())\n      .then(data => {\n        if (isMounted) { // Only update state if component is still mounted\n          setUser(data);\n          setLoading(false);\n        }\n      })\n      .catch(error => {\n        if (isMounted) {\n          console.error("Fetch error:", error);\n          setLoading(false);\n        }\n      });\n\n    return () => {\n      isMounted = false; // Set flag to false on unmount\n    };\n  }, [userId]);\n\n  if (loading) return <p>Loading user...</p>;\n  if (!user) return <p>User not found.</p>;\n  return <h3>User: {user.name}</h3>;\n}`,
                  explanation: 'Demonstrates a common pattern using an `isMounted` flag within `useEffect` to prevent setting state on an unmounted component, thus avoiding race conditions during data fetches.',
                  imageUrl: 'https://example.com/images/race-condition-avoidance.png'
                }
              ]
            },
            {
              title: 'useRef for direct DOM manipulation (when necessary)',
              description: 'Understand the `useRef` Hook for direct interaction with DOM elements or for persistent mutable values that don\'t trigger re-renders.',
              codeLessons: [
                {
                  lessonTitle: 'Using useRef for DOM Access',
                  codeSnippet: `import React, { useRef } from 'react';\n\nfunction MyInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    if (inputRef.current) {\n      inputRef.current.focus();\n    }\n  };\n\n  return (\n    <div>\n      <input type="text" ref={inputRef} />\n      <button onClick={focusInput}>Focus Input</button>\n    </div>\n  );\n}`,
                  explanation: 'Shows how `useRef` can be used to get a direct reference to a DOM element (e.g., an input field) and imperatively interact with it.',
                  imageUrl: 'https://example.com/images/useref-dom.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-2-2-custom-hooks',
          title: 'Lesson 2: Custom Hooks',
          duration: '75 min',
          subtopics: [
            {
              title: 'What are Custom Hooks? (Reusing stateful logic)',
              description: 'Understand the concept of custom hooks as a powerful way to extract and reuse stateful logic across multiple components.',
              codeLessons: []
            },
            {
              title: 'Rules of Hooks (only call at top level, only from React functions)',
              description: 'Familiarize yourself with the two fundamental rules of React Hooks, which are crucial for their correct and predictable behavior.',
              codeLessons: []
            },
            {
              title: 'Creating a custom hook (useFetch, useLocalStorage, useToggle)',
              description: 'Hands-on practice in building your own custom hooks to encapsulate common patterns like data fetching, local storage management, or simple toggles.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a useToggle Custom Hook',
                  codeSnippet: `import { useState, useCallback } from 'react';\n\nfunction useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue);\n\n  const toggle = useCallback(() => {\n    setValue(prevValue => !prevValue);\n  }, []);\n\n  return [value, toggle];\n}\n\n// Usage Example in a component:\n// function MyComponent() {\n//   const [isVisible, toggle] = useToggle(true);\n//   return (\n//     <div>\n//       <button onClick={toggle}>Toggle Visibility</button>\n//       {isVisible && <p>Now you see me!</p>}\n//     </div>\n//   );\n// }`,
                  explanation: 'Illustrates how to create a simple `useToggle` custom hook that encapsulates boolean state logic and provides a toggle function.',
                  imageUrl: 'https://example.com/images/use-toggle-hook.png'
                }
              ]
            },
            {
              title: 'Sharing logic across components',
              description: 'Recognize how custom hooks facilitate the sharing of complex stateful and side-effect logic without prop drilling or render props.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-2-3-context-api',
          title: 'Lesson 3: Context API for State Management',
          duration: '90 min',
          subtopics: [
            {
              title: 'What is Context API? (Avoiding prop drilling)',
              description: 'Understand the purpose of React\'s Context API as a way to pass data through the component tree without manually passing props at every level (prop drilling).',
              codeLessons: []
            },
            {
              title: 'createContext, Provider, Consumer (conceptual, focus on useContext)',
              description: 'Learn the core components of the Context API (`createContext`, `Provider`, `Consumer`) with a practical focus on the `useContext` Hook for consumption.',
              codeLessons: [
                {
                  lessonTitle: 'Context API Basics (conceptual and useContext)',
                  codeSnippet: `import React, { createContext, useContext, useState } from 'react';\n\n// 1. Create Context\nconst ThemeContext = createContext(null);\n\n// 2. Provider Component\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const toggleTheme = () => {\n    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Consumer Component (using useContext Hook)\nfunction ThemedButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee' }}>\n      Current Theme: {theme}\n    </button>\n  );\n}`,
                  explanation: 'Illustrates the creation of a Context, its Provider, and how a functional component consumes the context using the `useContext` Hook to access shared state and functions.',
                  imageUrl: 'https://example.com/images/context-api-basics.png'
                }
              ]
            },
            {
              title: 'useContext Hook: Consuming context in functional components',
              description: 'Get hands-on with the `useContext` Hook, the primary way to access context values in functional components.',
              codeLessons: []
            },
            {
              title: 'When to use Context vs. Props vs. State Management Libraries',
              description: 'Understand the trade-offs and decision criteria for choosing between local component state, props, Context API, and dedicated state management libraries for different application scales.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-2-4-data-fetching',
          title: 'Lesson 4: Fetching Data in React',
          duration: '100 min',
          subtopics: [
            {
              title: 'Basic data fetching with fetch API inside useEffect',
              description: 'Learn the fundamental pattern of fetching data from APIs using the browser\'s native `fetch` API within the `useEffect` Hook.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Fetch with useEffect',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction PostList() {\n  const [posts, setPosts] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(response => {\n        if (!response.ok) {\n          throw new Error(\`HTTP error! status: \${response.status}\`);\n        }\n        return response.json();\n      })\n      .then(data => {\n        setPosts(data);\n        setLoading(false);\n      })\n      .catch(error => {\n        setError(error);\n        setLoading(false);\n      });\n  }, []);\n\n  if (loading) return <p>Loading posts...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n\n  return (\n    <ul>\n      {posts.map(post => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}`,
                  explanation: 'A common pattern for fetching data on component mount using `useEffect`, handling loading and error states.',
                  imageUrl: 'https://example.com/images/basic-fetch-useeffect.png'
                }
              ]
            },
            {
              title: 'Handling loading states',
              description: 'Implement visual indicators (e.g., spinners, skeleton loaders) to inform users when data is being fetched.',
              codeLessons: []
            },
            {
              title: 'Handling error states',
              description: 'Develop strategies for gracefully displaying error messages to users when data fetching fails.',
              codeLessons: []
            },
            {
              title: 'Asynchronous JavaScript (async/await) patterns with useEffect',
              description: 'Integrate modern `async/await` syntax with `useEffect` for cleaner and more readable asynchronous data fetching code.',
              codeLessons: [
                {
                  lessonTitle: 'Async/Await with useEffect',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction UserDetail({ id }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchUser = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);\n        if (!response.ok) {\n          throw new Error(\`HTTP error! status: \${response.status}\`);\n        }\n        const data = await response.json();\n        setUser(data);\n      } catch (err) {\n        setError(err);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchUser();\n  }, [id]);\n\n  if (loading) return <p>Loading user...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n  if (!user) return <p>User not found.</p>;\n  return <div><h3>{user.name}</h3><p>{user.email}</p></div>;\n}`,
                  explanation: 'Demonstrates wrapping an `async` function inside `useEffect` to use `await` for cleaner data fetching, including error handling with `try/catch`.',
                  imageUrl: 'https://example.com/images/async-await-useeffect.png'
                }
              ]
            },
            {
              title: 'Cleaning up fetch requests (e.g., using AbortController)',
              description: 'Learn how to cancel pending fetch requests when a component unmounts or dependencies change, preventing memory leaks and avoiding setting state on unmounted components using `AbortController`.',
              codeLessons: [
                {
                  lessonTitle: 'Aborting Fetch Requests',
                  codeSnippet: `import React, { useState, useEffect } from 'react';\n\nfunction SearchComponent({ query }) {\n  const [results, setResults] = useState([]);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    if (!query) {\n      setResults([]);\n      return;\n    }\n\n    setLoading(true);\n    const controller = new AbortController();\n    const signal = controller.signal;\n\n    fetch(\`https://api.example.com/search?q=\${query}\`, { signal })\n      .then(response => response.json())\n      .then(data => {\n        setResults(data.items);\n      })\n      .catch(error => {\n        if (error.name === 'AbortError') {\n          console.log('Fetch aborted');\n          return;\n        }\n        console.error('Fetch error:', error);\n      })\n      .finally(() => {\n        setLoading(false);\n      });\n\n    return () => {\n      controller.abort(); // Abort the fetch request on cleanup\n    };\n  }, [query]);\n\n  if (loading) return <p>Searching...</p>;\n  return (\n    <ul>\n      {results.map(item => <li key={item.id}>{item.name}</li>)}\n    </ul>\n  );\n}`,
                  explanation: 'Shows how to use `AbortController` in `useEffect` to cancel in-flight fetch requests, especially useful for search bars or rapidly changing inputs.',
                  imageUrl: 'https://example.com/images/abort-controller.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-2-5-error-boundaries',
          title: 'Lesson 5: Error Boundaries',
          duration: '60 min',
          subtopics: [
            {
              title: 'What are Error Boundaries? (Catching JavaScript errors in component tree)',
              description: 'Understand how Error Boundaries in React allow you to catch JavaScript errors anywhere in their child component tree and display a fallback UI.',
              codeLessons: []
            },
            {
              title: 'componentDidCatch lifecycle method (for class components only, conceptual for functional)',
              description: 'Learn about the `componentDidCatch` lifecycle method in class components, which is the core of implementing an Error Boundary. Understand its conceptual role even if focusing on functional components.',
              codeLessons: [
                {
                  lessonTitle: 'Error Boundary Class Component',
                  codeSnippet: `import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null, errorInfo: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    // You can also log the error to an error reporting service\n    console.error("Uncaught error:", error, errorInfo);\n    this.setState({\n      error: error,\n      errorInfo: errorInfo\n    });\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return (\n        <div>\n          <h2>Something went wrong.</h2>\n          <details style={{ whiteSpace: 'pre-wrap' }}>\n            {this.state.error && this.state.error.toString()}\n            <br />\n            {this.state.errorInfo.componentStack}\n          </details>\n        </div>\n      );\n    }\n\n    return this.props.children;\n  }\n}\n\n// Usage:\n// <ErrorBoundary>\n//   <MyProblematicComponent />\n// </ErrorBoundary>`,
                  explanation: 'Provides a standard implementation of an Error Boundary using a class component with `getDerivedStateFromError` and `componentDidCatch`.',
                  imageUrl: 'https://example.com/images/error-boundary.png'
                }
              ]
            },
            {
              title: 'Implementing a fallback UI',
              description: 'Design and render a user-friendly fallback UI when an error is caught by an Error Boundary.',
              codeLessons: []
            },
            {
              title: 'Limitations of Error Boundaries',
              description: 'Be aware of what Error Boundaries do and do not catch (e.g., event handlers, asynchronous code outside render).',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-2-6-performance-optimization-basic',
          title: 'Lesson 6: React Performance Optimization (Basic)',
          duration: '90 min',
          subtopics: [
            {
              title: 'React.memo(): Memoizing functional components to prevent unnecessary re-renders',
              description: 'Learn how `React.memo` can optimize functional components by preventing re-renders if their props have not changed.',
              codeLessons: [
                {
                  lessonTitle: 'Using React.memo',
                  codeSnippet: `import React from 'react';\n\nconst MyPureComponent = React.memo(function MyPureComponent({ data }) {\n  console.log('MyPureComponent rendered');\n  return <p>Data: {data}</p>;\n});\n\n// Usage example:\n// function ParentComponent() {\n//   const [count, setCount] = useState(0);\n//   const data = "static data"; // This prop doesn't change\n\n//   return (\n//     <div>\n//       <button onClick={() => setCount(count + 1)}>Increment Parent</button>\n//       <MyPureComponent data={data} />\n//     </div>\n//   );\n// }`,
                  explanation: 'Shows how to wrap a functional component with `React.memo` to prevent re-renders when its props are shallowly equal to the previous props.',
                  imageUrl: 'https://example.com/images/react-memo.png'
                }
              ]
            },
            {
              title: 'useCallback(): Memoizing functions passed as props',
              description: 'Understand how `useCallback` memoizes functions, preventing unnecessary re-creation on re-renders, which is crucial when passing functions as props to memoized child components.',
              codeLessons: [
                {
                  lessonTitle: 'Using useCallback',
                  codeSnippet: `import React, { useState, useCallback } from 'react';\n\nconst Button = React.memo(({ onClick, children }) => {\n  console.log('Button rendered');\n  return <button onClick={onClick}>{children}</button>;\n});\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  // This function is memoized and only re-created if count changes\n  const handleClick = useCallback(() => {\n    setCount(prevCount => prevCount + 1);\n  }, []); // Empty array means never re-create\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <Button onClick={handleClick}>Increment</Button>\n    </div>\n  );\n}`,
                  explanation: 'Demonstrates `useCallback` to memoize the `handleClick` function, preventing `Button` from re-rendering if `handleClick` is passed as a prop and no other props change.',
                  imageUrl: 'https://example.com/images/use-callback.png'
                }
              ]
            },
            {
              title: 'useMemo(): Memoizing expensive calculations',
              description: 'Learn to use `useMemo` to memoize the result of expensive calculations, preventing them from being re-computed on every render.',
              codeLessons: [
                {
                  lessonTitle: 'Using useMemo',
                  codeSnippet: `import React, { useState, useMemo } from 'react';\n\nfunction expensiveCalculation(num) {\n  console.log('Performing expensive calculation...');\n  for (let i = 0; i < 1000000000; i++) {\n    num += 1;\n  }\n  return num;\n}\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n  const [anotherState, setAnotherState] = useState(0);\n\n  // This calculation only runs when 'count' changes\n  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <p>Expensive Result: {memoizedValue}</p>\n      <button onClick={() => setCount(count + 1)}>Increment Count</button>\n      <button onClick={() => setAnotherState(anotherState + 1)}>Change Other State</button>\n    </div>\n  );\n}`,
                  explanation: 'Illustrates `useMemo` preventing a heavy computation from re-running when `anotherState` changes, ensuring it only re-runs when `count` changes.',
                  imageUrl: 'https://example.com/images/use-memo.png'
                }
              ]
            },
            {
              title: 'When and when not to use memoization hooks',
              description: 'Develop a practical understanding of when to apply `memo`, `useCallback`, and `useMemo` for performance gains and when their overhead might outweigh the benefits.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-2-7-advanced-list-rendering',
          title: 'Lesson 7: Advanced List Rendering & Keys',
          duration: '60 min',
          subtopics: [
            {
              title: 'Dynamic keys vs. index as key (and why index is generally bad)',
              description: 'Revisit the `key` prop, emphasizing why stable, unique IDs are crucial for dynamic lists and why using the array index as a key can lead to bugs and performance issues.',
              codeLessons: [
                {
                  lessonTitle: 'Why Index as Key is Bad',
                  codeSnippet: `// Problematic: When list items can be added, removed, or reordered\nconst BadList = ({ items }) => (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item.text}</li>\n    ))}\n  </ul>\n);\n\n// Correct: Use a stable, unique ID\nconst GoodList = ({ items }) => (\n  <ul>\n    {items.map(item => (\n      <li key={item.id}>{item.text}</li>\n    ))}\n  </ul>\n);`,
                  explanation: 'Highlights the fundamental problem of using `index` as a `key` when list items can change order or be inserted/deleted, leading to incorrect component state or re-renders.',
                  imageUrl: 'https://example.com/images/index-key-bad.png'
                }
              ]
            },
            {
              title: 'Optimizing list rendering performance',
              description: 'Learn strategies to ensure efficient rendering of large lists, including proper key usage and avoiding unnecessary re-renders of list items.',
              codeLessons: []
            },
            {
              title: 'Virtualization (conceptual: large lists, e.g., React Window)',
              description: 'Gain a conceptual understanding of list virtualization (windowing) for rendering extremely long lists efficiently by only rendering visible items.',
              codeLessons: [
                {
                  lessonTitle: 'Virtualization Conceptual Example (React Window)',
                  codeSnippet: `// Conceptual example of React Window usage:\n// import { FixedSizeList } from 'react-window';\n\n// const Row = ({ index, style }) => (\n//   <div style={style}>\n//     Row {index}\n//   </div>\n// );\n\n// const MyList = () => (\n//   <FixedSizeList\n//     height={200}\n//     width={400}\n//     itemCount={1000}\n//     itemSize={50}\n//   >\n//     {Row}\n//   </FixedSizeList>\n// );`,
                  explanation: 'Conceptual snippet illustrating how a library like React Window can render only the visible portion of a very large list, improving performance significantly.',
                  imageUrl: 'https://example.com/images/react-window-conceptual.png'
                }
              ]
            },
            {
              title: 'Reordering lists (conceptual: managing state for reordering)',
              description: 'Understand the conceptual challenges and approaches to implementing drag-and-drop or reordering functionality in React lists, focusing on correct state management.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-2-8-portals-refs',
          title: 'Lesson 8: Portals & Refs',
          duration: '75 min',
          subtopics: [
            {
              title: 'React.createPortal(): Rendering children into a different DOM node',
              description: 'Master `React.createPortal` to render child components into a DOM node that exists outside the parent component\'s DOM hierarchy.',
              codeLessons: [
                {
                  lessonTitle: 'Using React.createPortal for Modals',
                  codeSnippet: `import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  return ReactDOM.createPortal(\n    <div style={{\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0,\n      backgroundColor: 'rgba(0,0,0,0.5)',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }}>\n      <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>\n        {children}\n        <button onClick={onClose}>Close Modal</button>\n      </div>\n    </div>,\n    document.body // Render into the body element\n  );\n}`,
                  explanation: 'Illustrates how `createPortal` is used to render a `Modal` component directly into `document.body`, making it visually separate from its parent component in the DOM tree.',
                  imageUrl: 'https://example.com/images/create-portal.png'
                }
              ]
            },
            {
              title: 'Use cases for Portals (modals, tooltips, notifications)',
              description: 'Identify common scenarios where `Portals` are highly beneficial, such as creating modals, tooltips, or notifications that need to break out of their parent\'s styling or z-index constraints.',
              codeLessons: []
            },
            {
              title: 'useRef Hook: Accessing DOM elements directly',
              description: 'Revisit and deepen your understanding of the `useRef` Hook for imperatively accessing underlying DOM elements or for holding mutable values across renders without causing re-renders.',
              codeLessons: []
            },
            {
              title: 'When to use useRef vs. state for managing form inputs',
              description: 'Understand the distinct roles of `useRef` and `useState` when handling form inputs, and when each is the appropriate choice.',
              codeLessons: [
                {
                  lessonTitle: 'useRef vs. useState for Inputs',
                  codeSnippet: `import React, { useRef, useState } from 'react';\n\nfunction InputComparison() {\n  // Controlled component (preferred for most cases)\n  const [value, setValue] = useState('');\n  const handleChange = (e) => setValue(e.target.value);\n\n  // Uncontrolled component (less common, for direct DOM access)\n  const inputRef = useRef(null);\n  const handleSubmit = () => {\n    alert('Input value via useRef: ' + inputRef.current.value);\n  };\n\n  return (\n    <div>\n      <h3>Controlled Input:</h3>\n      <input type="text" value={value} onChange={handleChange} />\n      <p>Value: {value}</p>\n\n      <h3>Uncontrolled Input (with useRef):</h3>\n      <input type="text" ref={inputRef} defaultValue="Hello" />\n      <button onClick={handleSubmit}>Get Value</button>\n    </div>\n  );\n}`,
                  explanation: 'Contrasts the use of `useState` (controlled) and `useRef` (uncontrolled) for managing input field values, highlighting typical use cases for each.',
                  imageUrl: 'https://example.com/images/useref-vs-usestate.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-2-9-accessibility',
          title: 'Lesson 9: Accessibility in React',
          duration: '60 min',
          subtopics: [
            {
              title: 'Semantic HTML in JSX',
              description: 'Emphasize the importance of using semantic HTML elements correctly within JSX to build accessible and meaningful user interfaces.',
              codeLessons: []
            },
            {
              title: 'ARIA attributes: aria-label, aria-labelledby, aria-describedby, role',
              description: 'Learn to use WAI-ARIA attributes to enhance the accessibility of non-semantic HTML or custom components for assistive technologies.',
              codeLessons: [
                {
                  lessonTitle: 'ARIA Attributes Example',
                  codeSnippet: `function CustomButton({ onClick, label }) {\n  return (\n    <button\n      onClick={onClick}\n      aria-label={label}\n      role="button"\n    >\n      <span aria-hidden="true">⚙️</span>\n    </button>\n  );\n}\n\nfunction AccessibleForm() {\n  return (\n    <form>\n      <label htmlFor="emailInput">Email Address</label>\n      <input id="emailInput" type="email" aria-describedby="emailHint" />\n      <p id="emailHint">We'll never share your email with anyone else.</p>\n    </form>\n  );\n}`,
                  explanation: 'Illustrates the use of common ARIA attributes (`aria-label`, `role`, `aria-hidden`, `aria-describedby`) to improve the accessibility of elements for screen readers.',
                  imageUrl: 'https://example.com/images/aria-attributes.png'
                }
              ]
            },
            {
              title: 'Keyboard navigation: tabIndex, managing focus',
              description: 'Implement proper keyboard navigation using `tabIndex` and programmatically manage focus for interactive components to ensure full accessibility.',
              codeLessons: [
                {
                  lessonTitle: 'Keyboard Navigation Example',
                  codeSnippet: `import React, { useRef } from 'react';\n\nfunction CustomDropdown() {\n  const dropdownRef = useRef(null);\n  // ... state for open/closed ...\n\n  const handleKeyDown = (event) => {\n    if (event.key === 'Escape') {\n      // Close dropdown and focus trigger button\n    }\n  };\n\n  return (\n    <div>\n      <button\n        onClick={() => { /* toggle dropdown */ }}\n        aria-haspopup="true"\n        aria-expanded={/* is open state */}\n      >\n        Dropdown Trigger\n      </button>\n      {/* is open state && */}\n      <ul ref={dropdownRef} role="menu" tabIndex="-1" onKeyDown={handleKeyDown}>\n        <li role="menuitem" tabIndex="0">Option 1</li>\n        <li role="menuitem" tabIndex="0">Option 2</li>\n      </ul>\n    </div>\n  );\n}`,
                  explanation: 'Conceptual example showcasing `tabIndex` for focus order and `onKeyDown` for keyboard interactions to make a custom dropdown accessible.',
                  imageUrl: 'https://example.com/images/keyboard-nav.png'
                }
              ]
            },
            {
              title: 'Accessible forms and error messages',
              description: 'Design and implement accessible forms that provide clear labels, error messages, and feedback for all users, including those using assistive technologies.',
              codeLessons: []
            },
            {
              title: 'Linting tools for accessibility (conceptual: ESLint plugins)',
              description: 'Gain conceptual awareness of tools like ESLint plugins (e.g., `eslint-plugin-jsx-a11y`) that help enforce accessibility best practices during development.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'react-section-2-quiz',
        title: 'Quiz: React Intermediate Assessment',
        questions: [
          {
            id: 's2q1',
            question: 'When updating state in `useState` based on the previous state, why is it safer to pass a function to the setter (e.g., `setCount(prevCount => prevCount + 1)`)?',
            options: [
              'It makes the code shorter.',
              'It ensures the update uses the most recent state, even if multiple updates are batched.',
              'It automatically causes a re-render.',
              'It allows you to use `async/await` with `useState`.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q2',
            question: 'What is the primary purpose of a custom React Hook?',
            options: [
              'To replace Redux for all state management.',
              'To allow direct DOM manipulation without `useRef`.',
              'To reuse stateful logic across multiple functional components.',
              'To define new HTML elements for the browser.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q3',
            question: 'Which Hook is best suited for performing side effects like data fetching or subscriptions in a functional component?',
            options: ['`useState`', '`useContext`', '`useEffect`', '`useReducer`'],
            correctAnswer: 2
          },
          {
            id: 's2q4',
            question: 'What problem does React\'s Context API primarily help solve?',
            options: [
              'Managing complex form validations.',
              'Preventing unnecessary component re-renders.',
              'Prop drilling (passing props through many intermediate components).',
              'Directly manipulating the DOM without `useRef`.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q5',
            question: 'How can you prevent a fetch request within `useEffect` from causing a race condition or trying to update state on an unmounted component?',
            options: [
              'By making the fetch request synchronous.',
              'By always putting the fetch request outside the `useEffect`.',
              'By implementing a cleanup function using `AbortController` or an `isMounted` flag.',
              'By wrapping the fetch in a `try...finally` block.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q6',
            question: 'What is the purpose of `React.memo`?',
            options: [
              'To create a global state for the application.',
              'To prevent a functional component from re-rendering if its props have not shallowly changed.',
              'To memoize the result of an expensive calculation.',
              'To cache data fetched from an API.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q7',
            question: 'When should you generally NOT use the array `index` as a `key` prop for items in a list?',
            options: [
              'When the list is static and never changes order or content.',
              'When the list is very short (e.g., 2-3 items).',
              'When items in the list can be added, removed, or reordered.',
              'When you are iterating over an array of numbers.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q8',
            question: 'Which Hook allows you to directly interact with a DOM element (e.g., focusing an input or measuring its size)?',
            options: ['`useState`', '`useEffect`', '`useContext`', '`useRef`'],
            correctAnswer: 3
          },
          {
            id: 's2q9',
            question: 'What is an Error Boundary in React?',
            options: [
              'A component that defines strict validation rules for forms.',
              'A component that catches JavaScript errors in its child component tree and displays a fallback UI.',
              'A mechanism to prevent infinite loops in `useEffect`.',
              'A tool for debugging network requests.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q10',
            question: 'Which of the following is a common use case for `React.createPortal`?',
            options: [
              'To optimize the performance of deeply nested components.',
              'To render modal dialogs, tooltips, or notifications outside the normal DOM hierarchy.',
              'To manage global application state.',
              'To create custom hooks for reusing logic.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q11',
            question: 'What is the purpose of `useCallback`?',
            options: [
              'To memoize the result of an expensive function call.',
              'To memoize a function definition so it is not re-created on every re-render.',
              'To perform side effects in functional components.',
              'To manage complex state logic.'
            ],
            correctAnswer: 1
          },
          {
            id: 's2q12',
            question: 'Which ARIA attribute would you typically use to provide a short, descriptive label for an element that might not have visible text?',
            options: ['`role`', '`aria-labelledby`', '`aria-describedby`', '`aria-label`'],
            correctAnswer: 3
          },
          {
            id: 's2q13',
            question: 'What does `useMemo` do?',
            options: [
              'It caches the result of a function call until its dependencies change.',
              'It ensures a component only renders once.',
              'It creates a mutable ref object.',
              'It is used for managing component state.'
            ],
            correctAnswer: 0
          },
          {
            id: 's2q14',
            question: 'Why is using semantic HTML important in React for accessibility?',
            options: [
              'It makes your bundle size smaller.',
              'It improves SEO for search engines automatically.',
              'It provides inherent meaning and structure that assistive technologies can understand.',
              'It simplifies CSS styling.'
            ],
            correctAnswer: 2
          },
          {
            id: 's2q15',
            question: 'If you want a function passed as a prop to a `React.memo`-wrapped child component to not cause unnecessary re-renders of the child, what Hook should you use to define that function in the parent?',
            options: ['`useState`', '`useEffect`', '`useContext`', '`useCallback`'],
            correctAnswer: 3
          }
        ]
      },
      projects: [
        {
          id: 'react-medium-project-1',
          title: 'Project 1: Debounced Search Input with Data Fetching',
          description: 'Create a search input component that fetches data from a public API (e.g., OpenWeatherMap API, or JSONPlaceholder for fake data) as the user types. Implement a **debounce** mechanism using `useEffect` and its cleanup function so that the API call only happens after the user pauses typing for a specified duration (e.g., 500ms). Display loading, error, and success states.',
          checkpoint: 'Observe network requests in browser dev tools. Ensure API calls are debounced and not triggered on every keystroke. Verify loading/error/success states are displayed correctly.',
        },
        {
          id: 'react-medium-project-2',
          title: 'Project 2: Persisted Theme with Custom Hook',
          description: 'Build a "Theme Toggle" feature (light/dark mode) for your application. Create a custom hook `useTheme` that encapsulates the theme state and logic for toggling it. This hook should also persist the selected theme to `localStorage` so that the user\'s preference is remembered across page reloads. Use React Context to make the theme state and toggle function available to any component in your app.',
          checkpoint: 'Verify that the theme changes visually and that the preference is saved in `localStorage`. Reload the page to ensure the theme persists. Ensure any component can access and change the theme via Context.',
        },
        {
          id: 'react-medium-project-3',
          title: 'Project 3: Generic Error Boundary Implementation',
          description: 'Create a reusable `ErrorBoundary` class component that catches JavaScript errors in its child tree. This component should display a user-friendly fallback UI (e.g., "Something went wrong...") instead of crashing the entire application. Wrap at least one component in your application that you intentionally make throw an error (e.g., trying to access a property of `null`) to test your error boundary.',
          checkpoint: 'Trigger the intentional error and confirm that your `ErrorBoundary` catches it and renders the fallback UI, preventing the rest of the application from breaking.',
        },
        {
          id: 'react-medium-project-4',
          title: 'Project 4: Accessible Custom Modal Component',
          description: 'Develop a reusable `Modal` component. This modal should: 1) Use `React.createPortal` to render its content directly to the `body` element. 2) Be controllable via props (e.g., `isOpen`, `onClose`). 3) Be fully accessible: focus should be trapped within the modal when open, and the modal should close when the `Escape` key is pressed. The "Close" button should also focus an element (e.g., the modal\'s title or first interactive element) when it opens, and return focus to the element that triggered it upon closing.',
          checkpoint: 'Visually verify modal rendering and closing. Use keyboard navigation (`Tab`, `Shift+Tab`, `Escape`) to confirm focus management and accessibility. Check DOM structure for portal rendering.',
        },
      ]
    },
    {
      id: 'react-section-3-advanced',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 'react-lesson-3-1-advanced-state-management',
          title: 'Lesson 1: Advanced State Management (Conceptual: Redux/Zustand)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Need for global state management in large applications',
              description: 'Understand the challenges of managing state in large-scale applications and why dedicated state management libraries become necessary beyond Context API.',
              codeLessons: []
            },
            {
              title: 'Principles of Redux (Store, Actions, Reducers, Dispatch) - conceptual',
              description: 'Gain a high-level conceptual understanding of the core principles and architectural patterns of Redux: the single source of truth (Store), Actions, Reducers, and Dispatch.',
              codeLessons: [
                {
                  lessonTitle: 'Redux Core Concepts (Conceptual)',
                  codeSnippet: `// Conceptual Redux Flow:\n\n// Action: Describes what happened\n// { type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } }\n\n// Reducer: How the state changes in response to actions\n// function todosReducer(state = [], action) {\n//   switch (action.type) {\n//     case 'ADD_TODO':\n//       return [...state, action.payload];\n//     default:\n//       return state;\n//   }\n// }\n\n// Store: Holds the application state\n// const store = createStore(todosReducer);\n\n// Dispatch: Sends actions to the store\n// store.dispatch({ type: 'ADD_TODO', payload: { id: 2, text: 'Build app' } });\n\n// Subscribe: Listens for state changes\n// store.subscribe(() => console.log(store.getState()));`,
                  explanation: 'Conceptual outline of the fundamental Redux flow: Actions describe events, Reducers define state changes, the Store holds state, and `dispatch` triggers updates.',
                  imageUrl: 'https://example.com/images/redux-conceptual.png'
                }
              ]
            },
            {
              title: 'Immer (conceptual): Simplifying immutable updates',
              description: 'Understand the conceptual benefits of libraries like Immer for simplifying immutable state updates within Redux reducers or other state logic.',
              codeLessons: [
                {
                  lessonTitle: 'Immer Conceptual Example',
                  codeSnippet: `// Conceptual Immer Usage:\n// import produce from 'immer';\n\n// const baseState = [\n//   { id: 1, text: 'Learn Immer', done: false }\n// ];\n\n// const nextState = produce(baseState, draft => {\n//   draft[0].done = true; // Directly "mutate" the draft\n//   draft.push({ id: 2, text: 'Use Immer', done: false });\n// });\n\n// console.log(baseState === nextState); // false (new state generated)\n// console.log(baseState[0] === nextState[0]); // false (nested objects copied if modified)`,
                  explanation: 'Conceptual example of Immer, demonstrating how it allows "mutating" a draft state for simpler code, while still producing a new, immutable state.',
                  imageUrl: 'https://example.com/images/immer-conceptual.png'
                }
              ]
            },
            {
              title: 'Introduction to Zustand (conceptual: simpler alternative to Redux)',
              description: 'Get an introductory conceptual overview of Zustand as a lightweight and often simpler alternative to Redux for global state management.',
              codeLessons: []
            },
            {
              title: 'When to choose a state management library',
              description: 'Develop criteria for deciding when a dedicated state management library like Redux or Zustand is beneficial compared to simpler solutions like Context API.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-3-2-concurrent-react-suspense',
          title: 'Lesson 2: Concurrent React & Suspense (Conceptual)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Introduction to Concurrent React: Interruptible rendering, prioritizations',
              description: 'Gain a conceptual understanding of Concurrent React\'s goals: making UIs more responsive by enabling interruptible rendering and prioritizing updates.',
              codeLessons: []
            },
            {
              title: 'useTransition and useDeferredValue (conceptual examples)',
              description: 'Get conceptual insights into `useTransition` for marking UI updates as non-urgent and `useDeferredValue` for deferring updates of certain values, improving responsiveness.',
              codeLessons: [
                {
                  lessonTitle: 'useTransition/useDeferredValue Conceptual',
                  codeSnippet: `// Conceptual useTransition:\n// import { useState, useTransition } from 'react';\n\n// function SearchPage() {\n//   const [inputValue, setInputValue] = useState('');\n//   const [isPending, startTransition] = useTransition();\n//   const [searchQuery, setSearchQuery] = useState('');\n\n//   const handleChange = (e) => {\n//     setInputValue(e.target.value);\n//     startTransition(() => {\n//       setSearchQuery(e.target.value); // Mark as non-urgent\n//     });\n//   };\n//   // ...render input and search results based on searchQuery...\n// }\n\n// Conceptual useDeferredValue:\n// import { useState, useDeferredValue } from 'react';\n\n// function SearchResults({ query }) {\n//   const deferredQuery = useDeferredValue(query);\n//   // ...render results based on deferredQuery, which updates later...\n// }`,
                  explanation: 'Conceptual examples illustrating `useTransition` to defer state updates and `useDeferredValue` to delay rendering based on a value, preventing UI freezes.',
                  imageUrl: 'https://example.com/images/concurrent-conceptual.png'
                }
              ]
            },
            {
              title: 'Suspense for Data Fetching (conceptual: <Suspense>, React.lazy)',
              description: 'Understand the conceptual power of `<Suspense>` for elegantly handling loading states of components that fetch data or are lazily loaded.',
              codeLessons: [
                {
                  lessonTitle: 'Suspense for Lazy Loading (Conceptual)',
                  codeSnippet: `// Conceptual Lazy Loading with Suspense:\n// import React, { Suspense, lazy } from 'react';\n\n// const LazyComponent = lazy(() => import('./LazyComponent'));\n\n// function App() {\n//   return (\n//     <div>\n//       <h1>My App</h1>\n//       <Suspense fallback={<div>Loading...</div>}>\n//         <LazyComponent />\n//       </Suspense>\n//     </div>\n//   );\n// }`,
                  explanation: 'Conceptual example showing how `React.lazy` and `<Suspense>` can be used together to asynchronously load and display a fallback while a component\'s code chunk is being fetched.',
                  imageUrl: 'https://example.com/images/suspense-lazy.png'
                }
              ]
            },
            {
              title: 'Error Boundaries with Suspense',
              description: 'Learn how Error Boundaries can complement Suspense to provide a robust error handling strategy for components that are suspended.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-3-3-ssr-ssg',
          title: 'Lesson 3: Server-Side Rendering (SSR) & Static Site Generation (SSG) with React (Conceptual)',
          duration: '75 min',
          subtopics: [
            {
              title: 'Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR) vs. Static Site Generation (SSG)',
              description: 'Compare and contrast the three primary rendering strategies for web applications (CSR, SSR, SSG), highlighting their differences and benefits.',
              codeLessons: []
            },
            {
              title: 'Benefits and drawbacks of each approach (SEO, performance, TTFB)',
              description: 'Analyze the advantages and disadvantages of CSR, SSR, and SSG in terms of Search Engine Optimization (SEO), perceived performance, and Time to First Byte (TTFB).',
              codeLessons: []
            },
            {
              title: 'Hydration in SSR',
              description: 'Understand the concept of "hydration" in SSR, where the client-side React code attaches to the server-rendered HTML.',
              codeLessons: []
            },
            {
              title: 'Introduction to frameworks that facilitate SSR/SSG (Next.js, Remix, Gatsby) - conceptual focus on how React fits in.',
              description: 'Get an introductory overview of popular React frameworks like Next.js, Remix, and Gatsby that simplify the implementation of SSR and SSG.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-3-4-testing',
          title: 'Lesson 4: Testing React Components',
          duration: '120 min',
          subtopics: [
            {
              title: 'Unit Testing vs. Integration Testing vs. End-to-End Testing (revisit from CS Fundamentals)',
              description: 'Revisit the different levels of software testing and how they apply to React applications.',
              codeLessons: []
            },
            {
              title: 'Jest: Testing framework basics (describe, it/test, expect)',
              description: 'Get started with Jest, a popular JavaScript testing framework, and learn its basic syntax for defining tests and making assertions.',
              codeLessons: [
                {
                  lessonTitle: 'Jest Basics Example',
                  codeSnippet: `// math.js\nexport function sum(a, b) {\n  return a + b;\n}\n\n// math.test.js\nimport { sum } from './math';\n\ndescribe('sum function', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n\n  it('correctly adds positive numbers', () => {\n    expect(sum(5, 7)).toBe(12);\n  });\n});`,
                  explanation: 'Illustrates basic Jest syntax using `describe` for test suites, `test`/`it` for individual tests, and `expect().toBe()` for assertions.',
                  imageUrl: 'https://example.com/images/jest-basics.png'
                }
              ]
            },
            {
              title: 'React Testing Library (RTL): Querying elements, simulating events, assertions',
              description: 'Learn to use React Testing Library (RTL) for testing React components in a way that encourages good testing practices, focusing on user behavior.',
              codeLessons: [
                {
                  lessonTitle: 'React Testing Library Example',
                  codeSnippet: `import { render, screen, fireEvent } from '@testing-library/react';\nimport '@testing-library/jest-dom';\nimport MyButton from './MyButton'; // Assume MyButton is a component\n\ntest('MyButton renders with correct text and handles click', () => {\n  const handleClick = jest.fn();\n  render(<MyButton onClick={handleClick}>Click Me</MyButton>);\n\n  // Query for the button by its text\n  const buttonElement = screen.getByText(/click me/i);\n\n  // Assert that the button is in the document\n  expect(buttonElement).toBeInTheDocument();\n\n  // Simulate a click event\n  fireEvent.click(buttonElement);\n\n  // Assert that the onClick function was called\n  expect(handleClick).toHaveBeenCalledTimes(1);\n});`,
                  explanation: 'A fundamental test using React Testing Library to render a component, query for an element by text, assert its presence, simulate a click, and verify an event handler call.',
                  imageUrl: 'https://example.com/images/rtl-example.png'
                }
              ]
            },
            {
              title: 'Writing testable components',
              description: 'Develop a mindset for writing React components that are inherently easy to test, promoting maintainability and reliability.',
              codeLessons: []
            },
            {
              title: 'Mocking API calls for tests',
              description: 'Learn techniques for mocking network requests (API calls) during testing to ensure tests are fast, reliable, and isolated from external services.',
              codeLessons: [
                {
                  lessonTitle: 'Mocking API Calls with Jest',
                  codeSnippet: `// api.js\nexport async function fetchUser(id) {\n  const response = await fetch(\`https://api.example.com/users/\${id}\`);\n  return response.json();\n}\n\n// UserProfile.js (component that uses fetchUser)\n// import { fetchUser } from './api';\n// import React, { useState, useEffect } from 'react';\n// function UserProfile({ userId }) { ...useEffect to call fetchUser... }\n\n// UserProfile.test.js\nimport { render, screen, waitFor } from '@testing-library/react';\nimport UserProfile from './UserProfile';\nimport * as api from './api'; // Import the module to mock\n\ntest('UserProfile displays user data after fetching', async () => {\n  // Mock the fetchUser function\n  jest.spyOn(api, 'fetchUser').mockResolvedValueOnce({ name: 'John Doe', email: 'john@example.com' });\n\n  render(<UserProfile userId={1} />);\n\n  // Expect loading state first\n  expect(screen.getByText(/loading user/i)).toBeInTheDocument();\n\n  // Wait for the data to be displayed\n  await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());\n  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();\n  expect(api.fetchUser).toHaveBeenCalledWith(1);\n});`,
                  explanation: 'Demonstrates how to use `jest.spyOn` and `mockResolvedValueOnce` to mock an asynchronous API function, allowing tests to control its return value.',
                  imageUrl: 'https://example.com/images/jest-mock-api.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-3-5-performance-profiling',
          title: 'Lesson 5: Performance Profiling in React',
          duration: '75 min',
          subtopics: [
            {
              title: 'React Developer Tools Profiler: Identifying re-renders, component render times',
              description: 'Learn to use the React Developer Tools Profiler to analyze component rendering behavior, identify unnecessary re-renders, and measure render times.',
              codeLessons: [
                {
                  lessonTitle: 'React Profiler Usage (Conceptual)',
                  codeSnippet: `// No direct code, but refers to using the React Dev Tools Profiler tab.\n// Steps:\n// 1. Open Chrome DevTools.\n// 2. Go to the "Components" tab, then click the "Profiler" tab.\n// 3. Click the record button and interact with your app.\n// 4. Stop recording and analyze the flame graph and ranked charts to identify slow components or excessive re-renders.\n// 5. Look for components that are re-rendering frequently or taking a long time (highlighted in red/yellow).`,
                  explanation: 'This lesson involves practical usage of the React Dev Tools Profiler. The "code snippet" here is a set of conceptual instructions on how to use the tool to identify performance bottlenecks.',
                  imageUrl: 'https://example.com/images/react-profiler.png'
                }
              ]
            },
            {
              title: 'memo, useCallback, useMemo revisited in profiling context',
              description: 'Revisit memoization hooks (`memo`, `useCallback`, `useMemo`) with a focus on how they help reduce re-renders, as observed through the Profiler.',
              codeLessons: []
            },
            {
              title: 'Virtualization strategies for large lists (conceptual application)',
              description: 'Reinforce the conceptual understanding of list virtualization and its practical application to optimize rendering of very large datasets.',
              codeLessons: []
            },
            {
              title: 'Code Splitting (React.lazy, Suspense for bundles)',
              description: 'Learn how code splitting can improve initial load times by breaking your application\'s code into smaller, on-demand bundles using `React.lazy` and `Suspense`.',
              codeLessons: [
                {
                  lessonTitle: 'Code Splitting with React.lazy and Suspense',
                  codeSnippet: `import React, { Suspense, lazy } from 'react';\n\n// Lazily load MyHeavyComponent\nconst MyHeavyComponent = lazy(() => import('./MyHeavyComponent'));\n\nfunction App() {\n  const [showHeavyComponent, setShowHeavyComponent] = React.useState(false);\n\n  return (\n    <div>\n      <h1>My Main App</h1>\n      <button onClick={() => setShowHeavyComponent(true)}>\n        Load Heavy Component\n      </button>\n      {showHeavyComponent && (\n        <Suspense fallback={<div>Loading heavy component...</div>}>\n          <MyHeavyComponent />\n        </Suspense>\n      )}\n    </div>\n  );\n}`,
                  explanation: 'Demonstrates how `React.lazy` defers loading `MyHeavyComponent` until it\'s needed, with `Suspense` providing a fallback during the loading phase, improving initial page load performance.',
                  imageUrl: 'https://example.com/images/code-splitting.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-3-6-web-components-integration',
          title: 'Lesson 6: Web Components & React Integration (Conceptual)',
          duration: '60 min',
          subtopics: [
            {
              title: 'When to use Web Components vs. React Components',
              description: 'Understand the distinct use cases for Web Components and React Components and when to choose one over the other, or integrate them.',
              codeLessons: []
            },
            {
              title: 'Embedding Web Components in React',
              description: 'Learn the basic syntax and considerations for embedding and using custom Web Components directly within a React application\'s JSX.',
              codeLessons: [
                {
                  lessonTitle: 'Embedding Web Component in React',
                  codeSnippet: `// Define a simple Web Component (e.g., in a separate .js file)\n// class MyGreetingElement extends HTMLElement {\n//   connectedCallback() {\n//     const shadow = this.attachShadow({ mode: 'open' });\n//     shadow.innerHTML = \`<h1>Hello, <slot></slot>!</h1>\`;\n//   }\n// }\n// customElements.define('my-greeting-element', MyGreetingElement);\n\n// Usage in React:\nfunction App() {\n  return (\n    <div>\n      <p>This is a React component.</p>\n      <my-greeting-element>World from Web Component</my-greeting-element>\n    </div>\n  );\n}`,
                  explanation: 'Illustrates how a custom Web Component (`<my-greeting-element>`) can be directly embedded and used within React\'s JSX.',
                  imageUrl: 'https://example.com/images/web-component-react.png'
                }
              ]
            },
            {
              title: 'Passing props/attributes to Web Components from React',
              description: 'Explore the methods for passing data (as props or attributes) from a React component down to an embedded Web Component.',
              codeLessons: []
            },
            {
              title: 'Handling events from Web Components in React',
              description: 'Understand how to listen for and handle custom events emitted by Web Components within your React parent components.',
              codeLessons: []
            },
            {
              title: 'Shadow DOM and React\'s interaction (briefly)',
              description: 'Briefly touch upon the concept of Shadow DOM within Web Components and how it interacts with React\'s rendering.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-3-7-monorepos-component-libraries',
          title: 'Lesson 7: Monorepos & Component Libraries (Conceptual)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is a Monorepo? Benefits (code sharing, consistent tooling) and drawbacks',
              description: 'Define what a monorepo is in software development, outlining its key advantages (e.g., code sharing, simplified dependency management) and potential drawbacks.',
              codeLessons: []
            },
            {
              title: 'Tools for Monorepos (Lerna, Nx - conceptual)',
              description: 'Get a conceptual overview of popular tools like Lerna and Nx that facilitate the management and optimization of monorepos.',
              codeLessons: []
            },
            {
              title: 'Building a reusable React Component Library within a Monorepo',
              description: 'Understand the benefits and process of creating a shared, reusable React component library within a monorepo structure.',
              codeLessons: []
            },
            {
              title: 'Publishing strategies for component libraries',
              description: 'Explore different strategies for publishing and distributing a reusable component library, whether for internal or external use.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'react-lesson-3-8-advanced-hooks-patterns',
          title: 'Lesson 8: Advanced Hooks Patterns & Patches',
          duration: '90 min',
          subtopics: [
            {
              title: 'useReducer Hook: For complex state logic (alternative to useState for related state)',
              description: 'Master the `useReducer` Hook as an alternative to `useState` for managing more complex state logic, especially when state transitions involve multiple sub-values or complex logic.',
              codeLessons: [
                {
                  lessonTitle: 'Using useReducer for Complex State',
                  codeSnippet: `import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return initialState;\n    default:\n      throw new Error();\n  }\n}\n\nfunction CounterWithReducer() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </>\n  );\n}`,
                  explanation: 'Demonstrates `useReducer` for managing a counter, showing how actions are dispatched and a `reducer` function updates state based on the action type, useful for more intricate state logic.',
                  imageUrl: 'https://example.com/images/use-reducer.png'
                }
              ]
            },
            {
              title: 'useCallback and useMemo in depth with useReducer',
              description: 'Understand how `useCallback` and `useMemo` can be used effectively with `useReducer` to optimize performance by preventing unnecessary re-creations of dispatch functions or derived state.',
              codeLessons: []
            },
            {
              title: 'useImperativeHandle (for exposing imperative methods from a child to parent)',
              description: 'Learn `useImperativeHandle` for scenarios where you need to expose imperative methods from a child component to a parent component, typically used with `forwardRef`.',
              codeLessons: [
                {
                  lessonTitle: 'useImperativeHandle Example',
                  codeSnippet: `import React, { useRef, useImperativeHandle, forwardRef } from 'react';\n\n// Child component\nconst MyInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focusInput: () => {\n      inputRef.current.focus();\n    },\n    clearInput: () => {\n      inputRef.current.value = '';\n    }\n  }));\n\n  return <input type="text" ref={inputRef} />;\n});\n\n// Parent component\nfunction ParentComponent() {\n  const childInputRef = useRef();\n\n  return (\n    <div>\n      <MyInput ref={childInputRef} />\n      <button onClick={() => childInputRef.current.focusInput()}>Focus Input</button>\n      <button onClick={() => childInputRef.current.clearInput()}>Clear Input</button>\n    </div>\n  );\n}`,
                  explanation: 'Shows how `useImperativeHandle` with `forwardRef` allows a parent component to call specific methods (like `focusInput`, `clearInput`) defined in a child component.',
                  imageUrl: 'https://example.com/images/use-imperative-handle.png'
                }
              ]
            },
            {
              title: 'useLayoutEffect (synchronous DOM mutations before paint)',
              description: 'Understand `useLayoutEffect`, a version of `useEffect` that fires synchronously after all DOM mutations but before the browser paints the screen, useful for measuring DOM layout.',
              codeLessons: [
                {
                  lessonTitle: 'useLayoutEffect Example',
                  codeSnippet: `import React, { useState, useLayoutEffect, useRef } from 'react';\n\nfunction Tooltip() {\n  const [showTooltip, setShowTooltip] = useState(false);\n  const buttonRef = useRef(null);\n  const tooltipRef = useRef(null);\n\n  useLayoutEffect(() => {\n    if (showTooltip && buttonRef.current && tooltipRef.current) {\n      const buttonRect = buttonRef.current.getBoundingClientRect();\n      tooltipRef.current.style.left = \`\${buttonRect.left + buttonRect.width / 2 - tooltipRef.current.offsetWidth / 2}px\`;\n      tooltipRef.current.style.top = \`\${buttonRect.top - tooltipRef.current.offsetHeight - 10}px\`;\n    }\n  }, [showTooltip]);\n\n  return (\n    <div>\n      <button ref={buttonRef} onClick={() => setShowTooltip(!showTooltip)}>Hover Me</button>\n      {showTooltip && (\n        <div ref={tooltipRef} style={{ position: 'fixed', backgroundColor: 'black', color: 'white', padding: '5px' }}>\n          This is a tooltip!\n        </div>\n      )}\n    </div>\n  );\n}`,
                  explanation: 'Illustrates `useLayoutEffect` for synchronously positioning a tooltip relative to a button *before* the browser paints, preventing visual flicker.',
                  imageUrl: 'https://example.com/images/use-layout-effect.png'
                }
              ]
            }
          ]
        },
        {
          id: 'react-lesson-3-9-micro-frontends',
          title: 'Lesson 9: Micro-Frontends with React (Conceptual)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What are Micro-Frontends? (Breaking down a monolithic frontend)',
              description: 'Define micro-frontends as an architectural style for breaking down large, monolithic front-end applications into smaller, independently deployable units.',
              codeLessons: []
            },
            {
              title: 'Benefits: Independent deployment, technology-agnostic teams',
              description: 'Explore the key benefits of micro-frontends, such as independent deployment, allowing different teams to work autonomously and even use different technologies.',
              codeLessons: []
            },
            {
              title: 'Common integration patterns (Webpack Module Federation, Iframes, Single-SPA) - conceptual',
              description: 'Get a conceptual overview of popular patterns for integrating micro-frontends, including Webpack Module Federation, Iframes, and Single-SPA.',
              codeLessons: []
            },
            {
              title: 'Challenges: Shared state, communication, styling consistency',
              description: 'Understand the inherent challenges in a micro-frontend architecture, such as managing shared state, inter-app communication, and maintaining styling consistency.',
              codeLessons: []
            },
            {
              title: 'React\'s role in a Micro-Frontend architecture',
              description: 'Consider how React applications can fit into and be managed within a broader micro-frontend architectural setup.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'react-section-3-quiz',
        title: 'Quiz: React Advanced Concepts Assessment',
        questions: [
          {
            id: 's3q1',
            question: 'Which of the following best describes the purpose of the `useReducer` Hook?',
            options: [
              'To perform side effects in functional components.',
              'To manage simple boolean state (like a toggle).',
              'To manage complex state logic involving multiple sub-values or intricate transitions.',
              'To access a direct DOM element.'
            ],
            correctAnswer: 2
          },
          {
            id: 's3q2',
            question: 'What is the primary benefit of Server-Side Rendering (SSR) for a React application compared to Client-Side Rendering (CSR)?',
            options: [
              'Faster development cycles.',
              'Improved SEO and faster initial page load (TTFB).',
              'Smaller overall bundle size for the application.',
              'Simpler state management.'
            ],
            correctAnswer: 1
          },
          {
            id: 's3q3',
            question: 'Which React Testing Library function would you use to find an element on the screen based on its visible text content?',
            options: ['`getByTestId`', '`queryByRole`', '`getByText`', '`findBySelector`'],
            correctAnswer: 2
          },
          {
            id: 's3q4',
            question: 'What is the main goal of Concurrent React?',
            options: [
              'To completely replace traditional class components with functional components.',
              'To enable faster development by automating code generation.',
              'To make UIs more responsive by enabling interruptible rendering and prioritizing updates.',
              'To reduce the bundle size of React applications.'
            ],
            correctAnswer: 2
          },
          {
            id: 's3q5',
            question: 'You are using the React Developer Tools Profiler and notice a component re-rendering frequently without apparent reason. Which hook might help you optimize this component if its props are often the same?',
            options: ['`useEffect`', '`useContext`', '`React.memo`', '`useRef`'],
            correctAnswer: 2
          },
          {
            id: 's3q6',
            question: 'What is "Hydration" in the context of Server-Side Rendering (SSR)?',
            options: [
              'The process of fetching data from the server after the initial page load.',
              'The process where the client-side React code attaches to the server-rendered HTML, making it interactive.',
              'The caching mechanism for server-rendered content.',
              'The process of generating static HTML files at build time.'
            ],
            correctAnswer: 1
          },
          {
            id: 's3q7',
            question: 'When would you typically use `useImperativeHandle` with `forwardRef`?',
            options: [
              'To prevent a child component from re-rendering.',
              'To expose specific methods or properties from a child component to its parent.',
              'To perform side effects after DOM mutations.',
              'To manage global state in a large application.'
            ],
            correctAnswer: 1
          },
          {
            id: 's3q8',
            question: 'Which Hook fires synchronously after all DOM mutations but before the browser paints, making it suitable for reading layout from the DOM?',
            options: ['`useEffect`', '`useLayoutEffect`', '`useCallback`', '`useRef`'],
            correctAnswer: 1
          },
          {
            id: 's3q9',
            question: 'What is a core benefit of adopting a Monorepo strategy for a large React project?',
            options: [
              'It eliminates the need for any build tools.',
              'It enforces a single technology stack for all projects.',
              'It facilitates code sharing and consistent tooling across multiple related projects.',
              'It makes all dependencies external.'
            ],
            correctAnswer: 2
          },
          {
            id: 's3q10',
            question: 'Which integration pattern is commonly used for micro-frontends to allow different applications to share and load each other\'s code at runtime?',
            options: [
              'CSS Modules',
              'Webpack Module Federation',
              'React Context API',
              'Prop Drilling'
            ],
            correctAnswer: 1
          },
          {
            id: 's3q11',
            question: 'What does `jest.spyOn(object, \'method\').mockResolvedValueOnce(value)` primarily achieve in testing?',
            options: [
              'It calls the real method `method` on `object` exactly once.',
              'It prevents the `method` from ever being called.',
              'It replaces the `method` on `object` with a mock function that returns a resolved promise with `value` the first time it\'s called.',
              'It logs every call to `method` to the console.'
            ],
            correctAnswer: 2
          },
          {
            id: 's3q12',
            question: 'What is the benefit of using `React.lazy` and `Suspense` for code splitting?',
            options: [
              'It ensures all components are loaded synchronously at once.',
              'It reduces the overall application bundle size.',
              'It improves initial page load times by loading components only when they are needed.',
              'It provides a global error handling mechanism.'
            ],
            correctAnswer: 2
          },
          {
            id: 's3q13',
            question: 'Why might you choose a dedicated state management library (like Redux or Zustand) over the Context API for global state in a very large application?',
            options: [
              'Context API is inherently slower than these libraries.',
              'These libraries offer more structured patterns, developer tools, and middleware for complex state logic and debugging.',
              'Context API cannot share state between components.',
              'They automatically manage all component re-renders without memoization.'
            ],
            correctAnswer: 1
          },
          {
            id: 's3q14',
            question: 'If you want to defer an expensive calculation in your component so it doesn\'t block more urgent UI updates, which Concurrent React hook would you conceptually use?',
            options: ['`useState`', '`useEffect`', '`useDeferredValue`', '`useTransition`'],
            correctAnswer: 2
          },
          {
            id: 's3q15',
            question: 'What is a primary challenge when adopting a micro-frontend architecture?',
            options: [
              'Only one team can work on the frontend at a time.',
              'It simplifies styling consistency across all parts of the application.',
              'Managing shared state, inter-application communication, and consistent styling across independently deployed frontends.',
              'It completely eliminates the need for any form of testing.'
            ],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 'react-advanced-project-1',
          title: 'Project 1: Reducer-Powered Complex Form',
          description: 'Build a multi-step form (e.g., a multi-step checkout process or a complex user registration form) that manages its entire state using the `useReducer` Hook. The form should include various input types (text, number, checkboxes, radios) and have clear "Next" and "Previous" steps. Implement validation logic within the reducer or as part of the dispatch actions. Optionally, integrate `useContext` to provide the form state and dispatch function to deeply nested form fields.',
          checkpoint: 'Ensure that all form fields are controlled by `useReducer` state. Verify that state transitions correctly between steps and that validation works. Observe console logs to understand how dispatch actions update the state.',
        },
        {
          id: 'react-advanced-project-2',
          title: 'Project 2: Unit and Integration Testing Suite',
          description: 'Choose a moderately complex component from your previous projects (e.g., the To-Do List, a UserCard with interactive elements, or the Debounced Search Input). Write a comprehensive suite of tests for this component using **Jest** and **React Testing Library**. Cover unit tests for individual functions/logic and integration tests for how the component behaves with user interactions (clicks, input changes) and state updates. If applicable, mock any external API calls.',
          checkpoint: 'All tests should pass without errors. Review the test coverage to ensure critical functionalities and user interactions are covered. Verify that mocked API calls behave as expected without hitting real endpoints.',
        },
        {
          id: 'react-advanced-project-3',
          title: 'Project 3: Performance Audit and Optimization',
          description: 'Take one of your existing React projects (or start a new simple one with a list of ~1000 items). Use the **React Developer Tools Profiler** to identify performance bottlenecks, specifically looking for unnecessary re-renders. Apply `React.memo`, `useCallback`, and/or `useMemo` strategically to optimize the identified areas. Document your findings and the impact of your optimizations (e.g., "Component X rendered N fewer times after `React.memo`").',
          checkpoint: 'Capture before-and-after profiles in React Dev Tools. Clearly demonstrate a reduction in re-renders or render times for the optimized components. Explain *why* the optimizations were effective.',
        },
        {
          id: 'react-advanced-project-4',
          title: 'Project 4: Conceptual Server-Side Rendering / Static Site Generation Design',
          description: 'Choose a hypothetical web application (e.g., a blog, an e-commerce product page, a dashboard). Based on its requirements (e.g., SEO needs, data freshness, interactivity level), write a detailed conceptual design explaining whether you would implement it with Client-Side Rendering (CSR), Server-Side Rendering (SSR), or Static Site Generation (SSG) using a framework like Next.js or Remix. Justify your choice by discussing the benefits and drawbacks of the selected approach for that specific application, including aspects like initial load time, SEO, and data fetching strategy. No code implementation is required, only the detailed plan.',
          checkpoint: 'The conceptual design clearly outlines the chosen rendering strategy and provides strong justifications based on the application\'s requirements. Demonstrates understanding of CSR, SSR, and SSG trade-offs.',
        },
      ]
    }
  ]
};

export default reactForFrontEndDevelopers;