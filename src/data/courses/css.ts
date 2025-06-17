import { Course } from '../courses';

import cssBasicLesson1Markdown from '../lessons/css/basics/lesson-1.md?raw';
import cssBasicLesson2Markdown from '../lessons/css/basics/lesson-2.md?raw';
import cssBasicLesson3Markdown from '../lessons/css/basics/lesson-3.md?raw';
import cssBasicLesson4Markdown from '../lessons/css/basics/lesson-4.md?raw';
import cssBasicLesson5Markdown from '../lessons/css/basics/lesson-5.md?raw';
import cssIntermediateLesson1Markdown from '../lessons/css/intermediate/lesson-1.md?raw';
import cssIntermediateLesson2Markdown from '../lessons/css/intermediate/lesson-2.md?raw';
import cssIntermediateLesson3Markdown from '../lessons/css/intermediate/lesson-3.md?raw';
import cssIntermediateLesson4Markdown from '../lessons/css/intermediate/lesson-4.md?raw';
import cssIntermediateLesson5Markdown from '../lessons/css/intermediate/lesson-5.md?raw';
import cssAdvancedLesson1Markdown from '../lessons/css/advanced/lesson-1.md?raw';
import cssAdvancedLesson2Markdown from '../lessons/css/advanced/lesson-2.md?raw';
import cssAdvancedLesson3Markdown from '../lessons/css/advanced/lesson-3.md?raw';
import cssAdvancedLesson4Markdown from '../lessons/css/advanced/lesson-4.md?raw';
import cssAdvancedLesson5Markdown from '../lessons/css/advanced/lesson-5.md?raw';

const cssCourse: Course = {
  id: 'css',
  title: 'CSS Styling & Layout',
  description: 'Learn to style beautiful, responsive websites with CSS. Master layouts, animations, and modern CSS features.',
  icon: 'Palette',
  color: 'bg-blue-500',
  estimatedHours: 20,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: CSS Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'css-lesson-1',
          title: 'Introduction to CSS',
          duration: '50 min',
          markdownContent: cssBasicLesson1Markdown,
        },
        {
          id: 'css-lesson-2',
          title: 'Selectors and Properties',
          duration: '60 min',
          markdownContent: cssBasicLesson2Markdown,
        },
        {
          id: 'css-lesson-3',
          title: 'Colors and Typography',
          duration: '55 min',
          markdownContent: cssBasicLesson3Markdown,
        },
        {
          id: 'css-lesson-4',
          title: 'Box Model and Spacing',
          duration: '70 min',
          markdownContent: cssBasicLesson4Markdown,
        },
        {
          id: 'css-lesson-5',
          title: 'Positioning and Display',
          duration: '65 min',
          markdownContent: cssBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-css-quiz',
        title: 'Quiz: CSS Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'What does CSS stand for?',
            options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'font-color', 'color', 'text-style'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'What is the correct CSS syntax for making all <p> elements bold?',
            options: ['p {font-weight: bold;}', '<p style="font-weight: bold;">', 'p {text-size: bold;}', 'p {font: bold;}'],
            correctAnswer: 0
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: Layout & Responsive Design',
      level: 'intermediate',
      lessons: [
        {
          id: 'css-lesson-6',
          title: 'Flexbox Layout',
          duration: '80 min',
          markdownContent: cssIntermediateLesson1Markdown,
        },
        {
          id: 'css-lesson-7',
          title: 'CSS Grid Layout',
          duration: '85 min',
          markdownContent: cssIntermediateLesson2Markdown,
        },
        {
          id: 'css-lesson-8',
          title: 'Responsive Design Principles',
          duration: '75 min',
          markdownContent: cssIntermediateLesson3Markdown,
        },
        {
          id: 'css-lesson-9',
          title: 'Media Queries and Breakpoints',
          duration: '70 min',
          markdownContent: cssIntermediateLesson4Markdown,
        },
        {
          id: 'css-lesson-10',
          title: 'CSS Transitions and Transforms',
          duration: '65 min',
          markdownContent: cssIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-css-quiz',
        title: 'Quiz: Layout & Responsive Design',
        questions: [
          {
            id: 'q1',
            question: 'Which CSS property is used to create a flexbox container?',
            options: ['display: flexbox', 'display: flex', 'flex: container', 'layout: flex'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What is the default flex-direction value?',
            options: ['column', 'row', 'row-reverse', 'column-reverse'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'Which media query targets screens smaller than 768px?',
            options: ['@media (min-width: 768px)', '@media (max-width: 768px)', '@media (width: 768px)', '@media screen and (768px)'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced CSS Techniques',
      level: 'advanced',
      lessons: [
        {
          id: 'css-lesson-11',
          title: 'CSS Animations and Keyframes',
          duration: '90 min',
          markdownContent: cssAdvancedLesson1Markdown,
        },
        {
          id: 'css-lesson-12',
          title: 'CSS Variables and Custom Properties',
          duration: '70 min',
          markdownContent: cssAdvancedLesson2Markdown,
        },
        {
          id: 'css-lesson-13',
          title: 'Advanced Selectors and Pseudo-classes',
          duration: '75 min',
          markdownContent: cssAdvancedLesson3Markdown,
        },
        {
          id: 'css-lesson-14',
          title: 'CSS Architecture and Methodologies',
          duration: '80 min',
          markdownContent: cssAdvancedLesson4Markdown,
        },
        {
          id: 'css-lesson-15',
          title: 'Performance Optimization and Best Practices',
          duration: '85 min',
          markdownContent: cssAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-css-quiz',
        title: 'Quiz: Advanced CSS Techniques',
        questions: [
          {
            id: 'q1',
            question: 'How do you define a CSS custom property (variable)?',
            options: ['--variable-name: value;', '$variable-name: value;', 'var(variable-name): value;', '@variable-name: value;'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which pseudo-class selects every second child element?',
            options: [':nth-child(2)', ':nth-child(even)', ':nth-child(2n)', 'Both B and C'],
            correctAnswer: 3
          },
          {
            id: 'q3',
            question: 'What does the CSS property "will-change" do?',
            options: ['Changes the element color', 'Optimizes animations by informing the browser', 'Changes the element size', 'Changes the element position'],
            correctAnswer: 1
          }
        ]
      }
    }
  ]
};

export default cssCourse;