import { Course } from '../courses';

import systemDesignBasicLesson1Markdown from '../lessons/system-design/basics/lesson-1.md?raw';
import systemDesignBasicLesson2Markdown from '../lessons/system-design/basics/lesson-2.md?raw';
import systemDesignBasicLesson3Markdown from '../lessons/system-design/basics/lesson-3.md?raw';
import systemDesignBasicLesson4Markdown from '../lessons/system-design/basics/lesson-4.md?raw';
import systemDesignBasicLesson5Markdown from '../lessons/system-design/basics/lesson-5.md?raw';
import systemDesignIntermediateLesson1Markdown from '../lessons/system-design/intermediate/lesson-1.md?raw';
import systemDesignIntermediateLesson2Markdown from '../lessons/system-design/intermediate/lesson-2.md?raw';
import systemDesignIntermediateLesson3Markdown from '../lessons/system-design/intermediate/lesson-3.md?raw';
import systemDesignIntermediateLesson4Markdown from '../lessons/system-design/intermediate/lesson-4.md?raw';
import systemDesignIntermediateLesson5Markdown from '../lessons/system-design/intermediate/lesson-5.md?raw';
import systemDesignAdvancedLesson1Markdown from '../lessons/system-design/advanced/lesson-1.md?raw';
import systemDesignAdvancedLesson2Markdown from '../lessons/system-design/advanced/lesson-2.md?raw';
import systemDesignAdvancedLesson3Markdown from '../lessons/system-design/advanced/lesson-3.md?raw';
import systemDesignAdvancedLesson4Markdown from '../lessons/system-design/advanced/lesson-4.md?raw';
import systemDesignAdvancedLesson5Markdown from '../lessons/system-design/advanced/lesson-5.md?raw';

const systemDesignCourse: Course = {
  id: 'system-design',
  title: 'System Design for Frontend',
  description: 'Learn system design principles from a frontend perspective. Understand scalability, architecture patterns, and building robust web applications.',
  icon: 'Network',
  color: 'bg-purple-600',
  estimatedHours: 40,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: System Design Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'system-design-lesson-1',
          title: 'Introduction to System Design',
          duration: '80 min',
          markdownContent: systemDesignBasicLesson1Markdown,
        },
        {
          id: 'system-design-lesson-2',
          title: 'Scalability and Performance',
          duration: '90 min',
          markdownContent: systemDesignBasicLesson2Markdown,
        },
        {
          id: 'system-design-lesson-3',
          title: 'Client-Server Architecture',
          duration: '85 min',
          markdownContent: systemDesignBasicLesson3Markdown,
        },
        {
          id: 'system-design-lesson-4',
          title: 'APIs and Communication Patterns',
          duration: '95 min',
          markdownContent: systemDesignBasicLesson4Markdown,
        },
        {
          id: 'system-design-lesson-5',
          title: 'Caching Strategies',
          duration: '100 min',
          markdownContent: systemDesignBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-system-design-quiz',
        title: 'Quiz: System Design Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'What is the primary goal of system design?',
            options: ['To write clean code', 'To create scalable and reliable systems', 'To use the latest technologies', 'To minimize development time'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which type of scaling involves adding more servers?',
            options: ['Vertical scaling', 'Horizontal scaling', 'Database scaling', 'Cache scaling'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What is the purpose of a CDN (Content Delivery Network)?',
            options: ['To store user data', 'To process business logic', 'To deliver content faster to users', 'To manage databases'],
            correctAnswer: 2
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: Frontend Architecture Patterns',
      level: 'intermediate',
      lessons: [
        {
          id: 'system-design-lesson-6',
          title: 'Micro-frontends Architecture',
          duration: '110 min',
          markdownContent: systemDesignIntermediateLesson1Markdown,
        },
        {
          id: 'system-design-lesson-7',
          title: 'State Management at Scale',
          duration: '105 min',
          markdownContent: systemDesignIntermediateLesson2Markdown,
        },
        {
          id: 'system-design-lesson-8',
          title: 'Real-time Communication',
          duration: '115 min',
          markdownContent: systemDesignIntermediateLesson3Markdown,
        },
        {
          id: 'system-design-lesson-9',
          title: 'Progressive Web Apps (PWAs)',
          duration: '100 min',
          markdownContent: systemDesignIntermediateLesson4Markdown,
        },
        {
          id: 'system-design-lesson-10',
          title: 'Security in Frontend Systems',
          duration: '120 min',
          markdownContent: systemDesignIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-system-design-quiz',
        title: 'Quiz: Frontend Architecture Patterns',
        questions: [
          {
            id: 'q1',
            question: 'What is the main benefit of micro-frontends?',
            options: ['Faster loading times', 'Independent development and deployment', 'Better SEO', 'Reduced bundle size'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'Which protocol is commonly used for real-time communication?',
            options: ['HTTP', 'WebSocket', 'FTP', 'SMTP'],
            correctAnswer: 1
          },
          {
            id: 'q3',
            question: 'What makes a web app "progressive"?',
            options: ['It uses React', 'It works offline and feels like a native app', 'It has animations', 'It uses modern CSS'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced System Design Concepts',
      level: 'advanced',
      lessons: [
        {
          id: 'system-design-lesson-11',
          title: 'Monitoring and Observability',
          duration: '125 min',
          markdownContent: systemDesignAdvancedLesson1Markdown,
        },
        {
          id: 'system-design-lesson-12',
          title: 'Deployment and CI/CD',
          duration: '130 min',
          markdownContent: systemDesignAdvancedLesson2Markdown,
        },
        {
          id: 'system-design-lesson-13',
          title: 'Performance Optimization Strategies',
          duration: '120 min',
          markdownContent: systemDesignAdvancedLesson3Markdown,
        },
        {
          id: 'system-design-lesson-14',
          title: 'Designing for Global Scale',
          duration: '135 min',
          markdownContent: systemDesignAdvancedLesson4Markdown,
        },
        {
          id: 'system-design-lesson-15',
          title: 'Case Studies and Best Practices',
          duration: '110 min',
          markdownContent: systemDesignAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-system-design-quiz',
        title: 'Quiz: Advanced System Design Concepts',
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of monitoring in system design?',
            options: ['To track user behavior', 'To detect and diagnose issues', 'To improve SEO', 'To reduce costs'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What does CI/CD stand for?',
            options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Deployment', 'Continuous Improvement/Continuous Development', 'Central Integration/Central Deployment'],
            correctAnswer: 0
          },
          {
            id: 'q3',
            question: 'Which technique helps reduce the initial load time of a web application?',
            options: ['Code splitting', 'Adding more features', 'Using larger images', 'Increasing server capacity'],
            correctAnswer: 0
          }
        ]
      }
    }
  ]
};

export default systemDesignCourse;