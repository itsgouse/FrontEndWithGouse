import { Course } from '../courses';

import csFundamentalsBasicLesson1Markdown from '../lessons/cs-fundamentals/basics/lesson-1.md?raw';
import csFundamentalsBasicLesson2Markdown from '../lessons/cs-fundamentals/basics/lesson-2.md?raw';
import csFundamentalsBasicLesson3Markdown from '../lessons/cs-fundamentals/basics/lesson-3.md?raw';
import csFundamentalsBasicLesson4Markdown from '../lessons/cs-fundamentals/basics/lesson-4.md?raw';
import csFundamentalsBasicLesson5Markdown from '../lessons/cs-fundamentals/basics/lesson-5.md?raw';
import csFundamentalsBasicLesson6Markdown from '../lessons/cs-fundamentals/basics/lesson-6.md?raw';
import csFundamentalsBasicLesson7Markdown from '../lessons/cs-fundamentals/basics/lesson-7.md?raw';
import csFundamentalsIntermediateLesson1Markdown from '../lessons/cs-fundamentals/intermediate/lesson-1.md?raw';
import csFundamentalsIntermediateLesson2Markdown from '../lessons/cs-fundamentals/intermediate/lesson-2.md?raw';
import csFundamentalsIntermediateLesson3Markdown from '../lessons/cs-fundamentals/intermediate/lesson-3.md?raw';
import csFundamentalsIntermediateLesson4Markdown from '../lessons/cs-fundamentals/intermediate/lesson-4.md?raw';
import csFundamentalsIntermediateLesson5Markdown from '../lessons/cs-fundamentals/intermediate/lesson-5.md?raw';
import csFundamentalsAdvancedLesson1Markdown from '../lessons/cs-fundamentals/advanced/lesson-1.md?raw';
import csFundamentalsAdvancedLesson2Markdown from '../lessons/cs-fundamentals/advanced/lesson-2.md?raw';
import csFundamentalsAdvancedLesson3Markdown from '../lessons/cs-fundamentals/advanced/lesson-3.md?raw';
import csFundamentalsAdvancedLesson4Markdown from '../lessons/cs-fundamentals/advanced/lesson-4.md?raw';
import csFundamentalsAdvancedLesson5Markdown from '../lessons/cs-fundamentals/advanced/lesson-5.md?raw';

const csFundamentalsCourse: Course = {
  id: 'cs-fundamentals',
  title: 'Computer Science Fundamentals',
  description: 'Build a solid foundation in computer science concepts essential for frontend development. Learn about browsers, networks, and web technologies.',
  icon: 'Monitor',
  color: 'bg-indigo-600',
  estimatedHours: 25,
  totalLessons: 17,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: Computer & Web Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'cs-lesson-1',
          title: 'Computer Fundamentals & Components',
          duration: '60 min',
          markdownContent: csFundamentalsBasicLesson1Markdown,
        },
        {
          id: 'cs-lesson-2',
          title: 'Browser Architecture & Rendering',
          duration: '75 min',
          markdownContent: csFundamentalsBasicLesson2Markdown,
        },
        {
          id: 'cs-lesson-3',
          title: 'DOM, CSSOM & JavaScript Runtime',
          duration: '90 min',
          markdownContent: csFundamentalsBasicLesson3Markdown,
        },
        {
          id: 'cs-lesson-4',
          title: 'HTTP, APIs & Web Communication',
          duration: '85 min',
          markdownContent: csFundamentalsBasicLesson4Markdown,
        },
        {
          id: 'cs-lesson-5',
          title: 'Web Applications & Architecture',
          duration: '70 min',
          markdownContent: csFundamentalsBasicLesson5Markdown,
        },
        {
          id: 'cs-lesson-6',
          title: 'Testing & Quality Assurance',
          duration: '80 min',
          markdownContent: csFundamentalsBasicLesson6Markdown,
        },
        {
          id: 'cs-lesson-7',
          title: 'Version Control with Git',
          duration: '95 min',
          markdownContent: csFundamentalsBasicLesson7Markdown,
        },
      ],
      quiz: {
        id: 'section-1-cs-quiz',
        title: 'Quiz: Computer & Web Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'What does DOM stand for?',
            options: ['Document Object Model', 'Data Object Management', 'Dynamic Object Model', 'Document Oriented Model'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which HTTP method is used to retrieve data from a server?',
            options: ['POST', 'PUT', 'GET', 'DELETE'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'What is the main difference between HTTP and HTTPS?',
            options: ['Speed', 'Security (encryption)', 'Compatibility', 'File size limits'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: Advanced Web Concepts',
      level: 'intermediate',
      lessons: [
        {
          id: 'cs-lesson-8',
          title: 'Advanced Browser APIs',
          duration: '100 min',
          markdownContent: csFundamentalsIntermediateLesson1Markdown,
        },
        {
          id: 'cs-lesson-9',
          title: 'Web Security Fundamentals',
          duration: '110 min',
          markdownContent: csFundamentalsIntermediateLesson2Markdown,
        },
        {
          id: 'cs-lesson-10',
          title: 'Performance & Optimization',
          duration: '105 min',
          markdownContent: csFundamentalsIntermediateLesson3Markdown,
        },
        {
          id: 'cs-lesson-11',
          title: 'Progressive Web Apps',
          duration: '95 min',
          markdownContent: csFundamentalsIntermediateLesson4Markdown,
        },
        {
          id: 'cs-lesson-12',
          title: 'Build Tools & Development Workflow',
          duration: '90 min',
          markdownContent: csFundamentalsIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-cs-quiz',
        title: 'Quiz: Advanced Web Concepts',
        questions: [
          {
            id: 'q1',
            question: 'What is a Service Worker primarily used for?',
            options: ['DOM manipulation', 'Offline functionality and caching', 'CSS animations', 'Database operations'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which security header helps prevent XSS attacks?',
            options: ['Content-Security-Policy', 'Access-Control-Allow-Origin', 'X-Frame-Options', 'Strict-Transport-Security'],
            correctAnswer: 0
          },
          {
            id: 'q3',
            question: 'What does code splitting help achieve?',
            options: ['Better code organization', 'Faster initial page load', 'Improved SEO', 'Enhanced security'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Professional Development Practices',
      level: 'advanced',
      lessons: [
        {
          id: 'cs-lesson-13',
          title: 'Software Architecture Patterns',
          duration: '120 min',
          markdownContent: csFundamentalsAdvancedLesson1Markdown,
        },
        {
          id: 'cs-lesson-14',
          title: 'DevOps for Frontend Developers',
          duration: '115 min',
          markdownContent: csFundamentalsAdvancedLesson2Markdown,
        },
        {
          id: 'cs-lesson-15',
          title: 'Monitoring & Analytics',
          duration: '100 min',
          markdownContent: csFundamentalsAdvancedLesson3Markdown,
        },
        {
          id: 'cs-lesson-16',
          title: 'Accessibility & Inclusive Design',
          duration: '110 min',
          markdownContent: csFundamentalsAdvancedLesson4Markdown,
        },
        {
          id: 'cs-lesson-17',
          title: 'Career Development & Best Practices',
          duration: '85 min',
          markdownContent: csFundamentalsAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-cs-quiz',
        title: 'Quiz: Professional Development Practices',
        questions: [
          {
            id: 'q1',
            question: 'What is the main benefit of the MVC (Model-View-Controller) pattern?',
            options: ['Faster performance', 'Separation of concerns', 'Smaller file sizes', 'Better SEO'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What does CI/CD stand for in software development?',
            options: ['Code Integration/Code Deployment', 'Continuous Integration/Continuous Deployment', 'Central Integration/Central Development', 'Continuous Improvement/Continuous Development'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'Which WCAG principle focuses on making content perceivable to all users?',
            options: ['Operable', 'Understandable', 'Perceivable', 'Robust'],
            correctAnswer: 2
          }
        ]
      }
    }
  ]
};

export default csFundamentalsCourse;