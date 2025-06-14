import { Course } from '../courses';

const react: Course = {
  id: 'react',
  title: 'React',
  description: 'Build modern user interfaces with React',
  icon: 'Zap',
  color: 'bg-cyan-500',
  estimatedHours: 30,
  totalLessons: 35,
  sections: [
    {
      id: 'react-basics',
      title: 'React Basics',
      level: 'basic',
      lessons: [
        {
          id: 'react-intro',
          title: 'Introduction to React',
          duration: '45 min',
          content: `
# Introduction to React

## What is React?
React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and is now maintained by Meta and the open-source community.

## Key Concepts

### Components
React applications are built using components - reusable pieces of UI.

\`\`\`jsx
// Function Component
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Welcome = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};
\`\`\`

### JSX
JSX is a syntax extension for JavaScript that looks similar to HTML.

\`\`\`jsx
const element = <h1>Hello, World!</h1>;

const user = { name: 'John', age: 25 };
const greeting = (
    <div>
        <h1>Hello, {user.name}!</h1>
        <p>You are {user.age} years old.</p>
    </div>
);
\`\`\`

### Props
Props are how you pass data from parent to child components.

\`\`\`jsx
function UserCard({ name, email, avatar }) {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// Usage
<UserCard 
    name="John Doe" 
    email="john@example.com" 
    avatar="/avatar.jpg" 
/>
\`\`\`

### State
State allows components to manage and update their own data.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
}
\`\`\`

### Event Handling
\`\`\`jsx
function Button() {
    const handleClick = (event) => {
        event.preventDefault();
        alert('Button clicked!');
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
\`\`\`

### Conditional Rendering
\`\`\`jsx
function Greeting({ isLoggedIn, username }) {
    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back, {username}!</h1>
            ) : (
                <h1>Please sign in.</h1>
            )}
        </div>
    );
}
\`\`\`

### Lists and Keys
\`\`\`jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}
\`\`\`

React makes building interactive UIs simple and efficient with its component-based architecture!
          `
        }
      ]
    }
  ]
};

export default react;