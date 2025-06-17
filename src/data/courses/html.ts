import { Course } from '../courses';

import htmlBasicLesson1Markdown from '../lessons/html/basics/lesson-1.md?raw';
import htmlBasicLesson2Markdown from '../lessons/html/basics/lesson-2.md?raw';
import htmlBasicLesson3Markdown from '../lessons/html/basics/lesson-3.md?raw';
import htmlBasicLesson4Markdown from '../lessons/html/basics/lesson-4.md?raw';
import htmlBasicLesson5Markdown from '../lessons/html/basics/lesson-5.md?raw';
import htmlIntermediateLesson1Markdown from '../lessons/html/intermediate/lesson-1.md?raw';
import htmlIntermediateLesson2Markdown from '../lessons/html/intermediate/lesson-2.md?raw';
import htmlIntermediateLesson3Markdown from '../lessons/html/intermediate/lesson-3.md?raw';
import htmlIntermediateLesson4Markdown from '../lessons/html/intermediate/lesson-4.md?raw';
import htmlIntermediateLesson5Markdown from '../lessons/html/intermediate/lesson-5.md?raw';
import htmlAdvancedLesson1Markdown from '../lessons/html/advanced/lesson-1.md?raw';
import htmlAdvancedLesson2Markdown from '../lessons/html/advanced/lesson-2.md?raw';
import htmlAdvancedLesson3Markdown from '../lessons/html/advanced/lesson-3.md?raw';
import htmlAdvancedLesson4Markdown from '../lessons/html/advanced/lesson-4.md?raw';
import htmlAdvancedLesson5Markdown from '../lessons/html/advanced/lesson-5.md?raw';

const htmlCourse: Course = {
  id: 'html',
  title: 'HTML Fundamentals',
  description: 'Master the building blocks of the web with HTML. Learn semantic markup, accessibility, and modern HTML5 features.',
  icon: 'FileText',
  color: 'bg-orange-500',
  estimatedHours: 15,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: HTML Basics',
      level: 'basic',
      lessons: [
        {
          id: 'html-lesson-1',
          title: 'Introduction to HTML',
          duration: '45 min',
          markdownContent: htmlBasicLesson1Markdown,
        },
        {
          id: 'html-lesson-2',
          title: 'HTML Document Structure',
          duration: '60 min',
          markdownContent: htmlBasicLesson2Markdown,
        },
        {
          id: 'html-lesson-3',
          title: 'Text Elements and Formatting',
          duration: '50 min',
          markdownContent: htmlBasicLesson3Markdown,
        },
        {
          id: 'html-lesson-4',
          title: 'Links and Navigation',
          duration: '40 min',
          markdownContent: htmlBasicLesson4Markdown,
        },
        {
          id: 'html-lesson-5',
          title: 'Images and Media',
          duration: '55 min',
          markdownContent: htmlBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-html-quiz',
        title: 'Quiz: HTML Basics',
        questions: [
          {
            id: 'q1',
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which HTML element is used for the largest heading?',
            options: ['<h6>', '<h1>', '<heading>', '<header>'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What is the correct HTML element for inserting a line break?',
            options: ['<break>', '<lb>', '<br>', '<newline>'],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: Intermediate HTML',
      level: 'intermediate',
      lessons: [
        {
          id: 'html-lesson-6',
          title: 'Lists and Tables',
          duration: '65 min',
          markdownContent: htmlIntermediateLesson1Markdown,
        },
        {
          id: 'html-lesson-7',
          title: 'Forms and Input Elements',
          duration: '75 min',
          markdownContent: htmlIntermediateLesson2Markdown,
        },
        {
          id: 'html-lesson-8',
          title: 'Semantic HTML Elements',
          duration: '60 min',
          markdownContent: htmlIntermediateLesson3Markdown,
        },
        {
          id: 'html-lesson-9',
          title: 'HTML5 Features',
          duration: '70 min',
          markdownContent: htmlIntermediateLesson4Markdown,
        },
        {
          id: 'html-lesson-10',
          title: 'Accessibility Best Practices',
          duration: '80 min',
          markdownContent: htmlIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-html-quiz',
        title: 'Quiz: Intermediate HTML',
        questions: [
          {
            id: 'q1',
            question: 'Which HTML element is used to define navigation links?',
            options: ['<navigation>', '<nav>', '<navigate>', '<links>'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What is the purpose of the alt attribute in img tags?',
            options: ['To provide alternative text for screen readers', 'To set the image alignment', 'To specify the image format', 'To define the image size'],
            correctAnswer: 0
          },
          {
            id: 'q3',
            question: 'Which input type is used for email addresses?',
            options: ['<input type="mail">', '<input type="email">', '<input type="e-mail">', '<input type="address">'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced HTML',
      level: 'advanced',
      lessons: [
        {
          id: 'html-lesson-11',
          title: 'Advanced Form Techniques',
          duration: '85 min',
          markdownContent: htmlAdvancedLesson1Markdown,
        },
        {
          id: 'html-lesson-12',
          title: 'Microdata and Schema.org',
          duration: '70 min',
          markdownContent: htmlAdvancedLesson2Markdown,
        },
        {
          id: 'html-lesson-13',
          title: 'Web Components and Custom Elements',
          duration: '90 min',
          markdownContent: htmlAdvancedLesson3Markdown,
        },
        {
          id: 'html-lesson-14',
          title: 'Performance Optimization',
          duration: '75 min',
          markdownContent: htmlAdvancedLesson4Markdown,
        },
        {
          id: 'html-lesson-15',
          title: 'HTML Best Practices and Standards',
          duration: '60 min',
          markdownContent: htmlAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-html-quiz',
        title: 'Quiz: Advanced HTML',
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of the defer attribute in script tags?',
            options: ['To delay script execution until the page is loaded', 'To prevent script execution', 'To load scripts asynchronously', 'To cache the script'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which attribute is used to specify that an input field must be filled out?',
            options: ['mandatory', 'required', 'validate', 'necessary'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What does the viewport meta tag control?',
            options: ['Page loading speed', 'Browser compatibility', 'Mobile responsiveness', 'Search engine optimization'],
            correctAnswer: 2
          }
        ]
      }
    }
  ]
};

export default htmlCourse;