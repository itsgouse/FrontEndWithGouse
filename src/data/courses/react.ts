import { Course } from '../courses';

import reactBasicLesson1Markdown from '../lessons/react/basics/lesson-1.md?raw';
import reactBasicLesson2Markdown from '../lessons/react/basics/lesson-2.md?raw';
import reactBasicLesson3Markdown from '../lessons/react/basics/lesson-3.md?raw';
import reactBasicLesson4Markdown from '../lessons/react/basics/lesson-4.md?raw';
import reactBasicLesson5Markdown from '../lessons/react/basics/lesson-5.md?raw';
import reactIntermediateLesson1Markdown from '../lessons/react/intermediate/lesson-1.md?raw';
import reactIntermediateLesson2Markdown from '../lessons/react/intermediate/lesson-2.md?raw';
import reactIntermediateLesson3Markdown from '../lessons/react/intermediate/lesson-3.md?raw';
import reactIntermediateLesson4Markdown from '../lessons/react/intermediate/lesson-4.md?raw';
import reactIntermediateLesson5Markdown from '../lessons/react/intermediate/lesson-5.md?raw';
import reactAdvancedLesson1Markdown from '../lessons/react/advanced/lesson-1.md?raw';
import reactAdvancedLesson2Markdown from '../lessons/react/advanced/lesson-2.md?raw';
import reactAdvancedLesson3Markdown from '../lessons/react/advanced/lesson-3.md?raw';
import reactAdvancedLesson4Markdown from '../lessons/react/advanced/lesson-4.md?raw';
import reactAdvancedLesson5Markdown from '../lessons/react/advanced/lesson-5.md?raw';

const reactCourse: Course = {
  id: 'react',
  title: 'React Development',
  description: 'Build modern, interactive user interfaces with React. Learn components, hooks, state management, and advanced React patterns.',
  icon: 'Zap',
  color: 'bg-cyan-500',
  estimatedHours: 35,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: React Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'react-lesson-1',
          title: 'Introduction to React',
          duration: '70 min',
          markdownContent: reactBasicLesson1Markdown,
        },
        {
          id: 'react-lesson-2',
          title: 'Components and JSX',
          duration: '80 min',
          markdownContent: reactBasicLesson2Markdown,
        },
        {
          id: 'react-lesson-3',
          title: 'Props and State',
          duration: '90 min',
          markdownContent: reactBasicLesson3Markdown,
        },
        {
          id: 'react-lesson-4',
          title: 'Event Handling in React',
          duration: '75 min',
          markdownContent: reactBasicLesson4Markdown,
        },
        {
          id: 'react-lesson-5',
          title: 'Conditional Rendering and Lists',
          duration: '85 min',
          markdownContent: reactBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-react-quiz',
        title: 'Quiz: React Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'What is JSX in React?',
            options: ['A JavaScript library', 'A syntax extension for JavaScript', 'A CSS framework', 'A database query language'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'How do you pass data from a parent component to a child component?',
            options: ['Using state', 'Using props', 'Using context', 'Using refs'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'Which hook is used to manage state in functional components?',
            options: ['useEffect', 'useState', 'useContext', 'useReducer'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: React Hooks & State Management',
      level: 'intermediate',
      lessons: [
        {
          id: 'react-lesson-6',
          title: 'React Hooks Deep Dive',
          duration: '100 min',
          markdownContent: reactIntermediateLesson1Markdown,
        },
        {
          id: 'react-lesson-7',
          title: 'useEffect and Side Effects',
          duration: '95 min',
          markdownContent: reactIntermediateLesson2Markdown,
        },
        {
          id: 'react-lesson-8',
          title: 'Context API and Global State',
          duration: '110 min',
          markdownContent: reactIntermediateLesson3Markdown,
        },
        {
          id: 'react-lesson-9',
          title: 'Forms and Controlled Components',
          duration: '90 min',
          markdownContent: reactIntermediateLesson4Markdown,
        },
        {
          id: 'react-lesson-10',
          title: 'React Router and Navigation',
          duration: '105 min',
          markdownContent: reactIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-react-quiz',
        title: 'Quiz: React Hooks & State Management',
        questions: [
          {
            id: 'q1',
            question: 'When does useEffect run by default?',
            options: ['Only on mount', 'Only on unmount', 'After every render', 'Only when state changes'],
            correctAnswer: 2
          },
          {
            id: 'q2',
            question: 'What is the purpose of the dependency array in useEffect?',
            options: ['To prevent infinite loops', 'To control when the effect runs', 'To pass data to the effect', 'Both A and B'],
            correctAnswer: 3
          },
          {
            id: 'q3',
            question: 'Which hook would you use to access context in a functional component?',
            options: ['useState', 'useEffect', 'useContext', 'useReducer'],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced React Patterns',
      level: 'advanced',
      lessons: [
        {
          id: 'react-lesson-11',
          title: 'Performance Optimization',
          duration: '120 min',
          markdownContent: reactAdvancedLesson1Markdown,
        },
        {
          id: 'react-lesson-12',
          title: 'Custom Hooks and Reusability',
          duration: '110 min',
          markdownContent: reactAdvancedLesson2Markdown,
        },
        {
          id: 'react-lesson-13',
          title: 'Advanced Patterns and HOCs',
          duration: '115 min',
          markdownContent: reactAdvancedLesson3Markdown,
        },
        {
          id: 'react-lesson-14',
          title: 'Testing React Applications',
          duration: '105 min',
          markdownContent: reactAdvancedLesson4Markdown,
        },
        {
          id: 'react-lesson-15',
          title: 'Deployment and Production',
          duration: '95 min',
          markdownContent: reactAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-react-quiz',
        title: 'Quiz: Advanced React Patterns',
        questions: [
          {
            id: 'q1',
            question: 'What is React.memo used for?',
            options: ['Memoizing expensive calculations', 'Preventing unnecessary re-renders', 'Storing component state', 'Managing side effects'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'When should you use useCallback?',
            options: ['Always for better performance', 'When passing functions to child components', 'Only in class components', 'When using external APIs'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What is the purpose of React.Suspense?',
            options: ['Error handling', 'Code splitting and lazy loading', 'State management', 'Performance monitoring'],
            correctAnswer: 1
          }
        ]
      }
    }
  ]
};

export default reactCourse;