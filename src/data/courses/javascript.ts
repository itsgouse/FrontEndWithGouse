import { Course } from '../courses';

import jsBasicLesson1Markdown from '../lessons/javascript/basics/lesson-1.md?raw';
import jsBasicLesson2Markdown from '../lessons/javascript/basics/lesson-2.md?raw';
import jsBasicLesson3Markdown from '../lessons/javascript/basics/lesson-3.md?raw';
import jsBasicLesson4Markdown from '../lessons/javascript/basics/lesson-4.md?raw';
import jsBasicLesson5Markdown from '../lessons/javascript/basics/lesson-5.md?raw';
import jsIntermediateLesson1Markdown from '../lessons/javascript/intermediate/lesson-1.md?raw';
import jsIntermediateLesson2Markdown from '../lessons/javascript/intermediate/lesson-2.md?raw';
import jsIntermediateLesson3Markdown from '../lessons/javascript/intermediate/lesson-3.md?raw';
import jsIntermediateLesson4Markdown from '../lessons/javascript/intermediate/lesson-4.md?raw';
import jsIntermediateLesson5Markdown from '../lessons/javascript/intermediate/lesson-5.md?raw';
import jsAdvancedLesson1Markdown from '../lessons/javascript/advanced/lesson-1.md?raw';
import jsAdvancedLesson2Markdown from '../lessons/javascript/advanced/lesson-2.md?raw';
import jsAdvancedLesson3Markdown from '../lessons/javascript/advanced/lesson-3.md?raw';
import jsAdvancedLesson4Markdown from '../lessons/javascript/advanced/lesson-4.md?raw';
import jsAdvancedLesson5Markdown from '../lessons/javascript/advanced/lesson-5.md?raw';

const javascriptCourse: Course = {
  id: 'javascript',
  title: 'JavaScript Programming',
  description: 'Master JavaScript from basics to advanced concepts. Learn ES6+, DOM manipulation, async programming, and modern JavaScript patterns.',
  icon: 'Code',
  color: 'bg-yellow-500',
  estimatedHours: 30,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: JavaScript Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'js-lesson-1',
          title: 'Introduction to JavaScript',
          duration: '60 min',
          markdownContent: jsBasicLesson1Markdown,
        },
        {
          id: 'js-lesson-2',
          title: 'Variables and Data Types',
          duration: '70 min',
          markdownContent: jsBasicLesson2Markdown,
        },
        {
          id: 'js-lesson-3',
          title: 'Functions and Scope',
          duration: '80 min',
          markdownContent: jsBasicLesson3Markdown,
        },
        {
          id: 'js-lesson-4',
          title: 'Control Flow and Loops',
          duration: '75 min',
          markdownContent: jsBasicLesson4Markdown,
        },
        {
          id: 'js-lesson-5',
          title: 'Objects and Arrays',
          duration: '85 min',
          markdownContent: jsBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-js-quiz',
        title: 'Quiz: JavaScript Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is the correct way to declare a variable in JavaScript?',
            options: ['var myVar;', 'variable myVar;', 'v myVar;', 'declare myVar;'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'What will typeof null return in JavaScript?',
            options: ['null', 'undefined', 'object', 'boolean'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'Which method is used to add an element to the end of an array?',
            options: ['append()', 'push()', 'add()', 'insert()'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: DOM & Event Handling',
      level: 'intermediate',
      lessons: [
        {
          id: 'js-lesson-6',
          title: 'DOM Manipulation',
          duration: '90 min',
          markdownContent: jsIntermediateLesson1Markdown,
        },
        {
          id: 'js-lesson-7',
          title: 'Event Handling',
          duration: '85 min',
          markdownContent: jsIntermediateLesson2Markdown,
        },
        {
          id: 'js-lesson-8',
          title: 'ES6+ Features',
          duration: '95 min',
          markdownContent: jsIntermediateLesson3Markdown,
        },
        {
          id: 'js-lesson-9',
          title: 'Promises and Async/Await',
          duration: '100 min',
          markdownContent: jsIntermediateLesson4Markdown,
        },
        {
          id: 'js-lesson-10',
          title: 'Error Handling and Debugging',
          duration: '80 min',
          markdownContent: jsIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-js-quiz',
        title: 'Quiz: DOM & Event Handling',
        questions: [
          {
            id: 'q1',
            question: 'Which method is used to select an element by its ID?',
            options: ['document.querySelector()', 'document.getElementById()', 'document.getElement()', 'document.selectById()'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What does the addEventListener method do?',
            options: ['Creates a new event', 'Removes an event listener', 'Attaches an event handler to an element', 'Triggers an event'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'Which ES6 feature allows you to extract values from arrays or objects?',
            options: ['Destructuring', 'Spreading', 'Template literals', 'Arrow functions'],
            correctAnswer: 0
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced JavaScript Concepts',
      level: 'advanced',
      lessons: [
        {
          id: 'js-lesson-11',
          title: 'Closures and Advanced Functions',
          duration: '110 min',
          markdownContent: jsAdvancedLesson1Markdown,
        },
        {
          id: 'js-lesson-12',
          title: 'Prototypes and Classes',
          duration: '105 min',
          markdownContent: jsAdvancedLesson2Markdown,
        },
        {
          id: 'js-lesson-13',
          title: 'Modules and Build Tools',
          duration: '95 min',
          markdownContent: jsAdvancedLesson3Markdown,
        },
        {
          id: 'js-lesson-14',
          title: 'Performance Optimization',
          duration: '100 min',
          markdownContent: jsAdvancedLesson4Markdown,
        },
        {
          id: 'js-lesson-15',
          title: 'Testing and Best Practices',
          duration: '90 min',
          markdownContent: jsAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-js-quiz',
        title: 'Quiz: Advanced JavaScript Concepts',
        questions: [
          {
            id: 'q1',
            question: 'What is a closure in JavaScript?',
            options: ['A way to close a function', 'A function that has access to variables in its outer scope', 'A method to end a loop', 'A type of error'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which keyword is used to create a class in ES6?',
            options: ['function', 'class', 'constructor', 'object'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What does the "this" keyword refer to in JavaScript?',
            options: ['The current function', 'The global object', 'The object that owns the method', 'It depends on the context'],
            correctAnswer: 3
          }
        ]
      }
    }
  ]
};

export default javascriptCourse;