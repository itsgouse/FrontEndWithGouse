import { Course } from '../courses';

import sqlBasicLesson1Markdown from '../lessons/sql/basics/lesson-1.md?raw';
import sqlBasicLesson2Markdown from '../lessons/sql/basics/lesson-2.md?raw';
import sqlBasicLesson3Markdown from '../lessons/sql/basics/lesson-3.md?raw';
import sqlBasicLesson4Markdown from '../lessons/sql/basics/lesson-4.md?raw';
import sqlBasicLesson5Markdown from '../lessons/sql/basics/lesson-5.md?raw';
import sqlIntermediateLesson1Markdown from '../lessons/sql/intermediate/lesson-1.md?raw';
import sqlIntermediateLesson2Markdown from '../lessons/sql/intermediate/lesson-2.md?raw';
import sqlIntermediateLesson3Markdown from '../lessons/sql/intermediate/lesson-3.md?raw';
import sqlIntermediateLesson4Markdown from '../lessons/sql/intermediate/lesson-4.md?raw';
import sqlIntermediateLesson5Markdown from '../lessons/sql/intermediate/lesson-5.md?raw';
import sqlAdvancedLesson1Markdown from '../lessons/sql/advanced/lesson-1.md?raw';
import sqlAdvancedLesson2Markdown from '../lessons/sql/advanced/lesson-2.md?raw';
import sqlAdvancedLesson3Markdown from '../lessons/sql/advanced/lesson-3.md?raw';
import sqlAdvancedLesson4Markdown from '../lessons/sql/advanced/lesson-4.md?raw';
import sqlAdvancedLesson5Markdown from '../lessons/sql/advanced/lesson-5.md?raw';

const sqlCourse: Course = {
  id: 'sql',
  title: 'SQL & Database Management',
  description: 'Master SQL and database concepts. Learn to query, manipulate, and design databases for modern web applications.',
  icon: 'Database',
  color: 'bg-green-600',
  estimatedHours: 25,
  totalLessons: 15,
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: SQL Fundamentals',
      level: 'basic',
      lessons: [
        {
          id: 'sql-lesson-1',
          title: 'Introduction to Databases and SQL',
          duration: '60 min',
          markdownContent: sqlBasicLesson1Markdown,
        },
        {
          id: 'sql-lesson-2',
          title: 'Basic SELECT Queries',
          duration: '70 min',
          markdownContent: sqlBasicLesson2Markdown,
        },
        {
          id: 'sql-lesson-3',
          title: 'Filtering and Sorting Data',
          duration: '75 min',
          markdownContent: sqlBasicLesson3Markdown,
        },
        {
          id: 'sql-lesson-4',
          title: 'Working with Multiple Tables',
          duration: '80 min',
          markdownContent: sqlBasicLesson4Markdown,
        },
        {
          id: 'sql-lesson-5',
          title: 'Data Modification (INSERT, UPDATE, DELETE)',
          duration: '65 min',
          markdownContent: sqlBasicLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-1-sql-quiz',
        title: 'Quiz: SQL Fundamentals',
        questions: [
          {
            id: 'q1',
            question: 'What does SQL stand for?',
            options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'System Query Language'],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which SQL clause is used to filter rows?',
            options: ['SELECT', 'FROM', 'WHERE', 'ORDER BY'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'What is the correct syntax to select all columns from a table named "users"?',
            options: ['SELECT all FROM users;', 'SELECT * FROM users;', 'SELECT users.*;', 'GET * FROM users;'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 'section-2-intermediate',
      title: 'Section 2: Advanced Queries & Functions',
      level: 'intermediate',
      lessons: [
        {
          id: 'sql-lesson-6',
          title: 'Aggregate Functions and GROUP BY',
          duration: '85 min',
          markdownContent: sqlIntermediateLesson1Markdown,
        },
        {
          id: 'sql-lesson-7',
          title: 'Subqueries and CTEs',
          duration: '90 min',
          markdownContent: sqlIntermediateLesson2Markdown,
        },
        {
          id: 'sql-lesson-8',
          title: 'Window Functions',
          duration: '95 min',
          markdownContent: sqlIntermediateLesson3Markdown,
        },
        {
          id: 'sql-lesson-9',
          title: 'Indexes and Query Optimization',
          duration: '100 min',
          markdownContent: sqlIntermediateLesson4Markdown,
        },
        {
          id: 'sql-lesson-10',
          title: 'Stored Procedures and Functions',
          duration: '85 min',
          markdownContent: sqlIntermediateLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-2-sql-quiz',
        title: 'Quiz: Advanced Queries & Functions',
        questions: [
          {
            id: 'q1',
            question: 'Which function is used to count the number of rows in a result set?',
            options: ['SUM()', 'COUNT()', 'TOTAL()', 'NUMBER()'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What is the purpose of the GROUP BY clause?',
            options: ['To sort results', 'To filter rows', 'To group rows with same values', 'To join tables'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'Which type of JOIN returns all rows from both tables?',
            options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
            correctAnswer: 3
          }
        ]
      }
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Database Design & Administration',
      level: 'advanced',
      lessons: [
        {
          id: 'sql-lesson-11',
          title: 'Database Design and Normalization',
          duration: '110 min',
          markdownContent: sqlAdvancedLesson1Markdown,
        },
        {
          id: 'sql-lesson-12',
          title: 'Transactions and ACID Properties',
          duration: '95 min',
          markdownContent: sqlAdvancedLesson2Markdown,
        },
        {
          id: 'sql-lesson-13',
          title: 'Security and User Management',
          duration: '100 min',
          markdownContent: sqlAdvancedLesson3Markdown,
        },
        {
          id: 'sql-lesson-14',
          title: 'Performance Tuning and Monitoring',
          duration: '105 min',
          markdownContent: sqlAdvancedLesson4Markdown,
        },
        {
          id: 'sql-lesson-15',
          title: 'NoSQL vs SQL and Modern Databases',
          duration: '90 min',
          markdownContent: sqlAdvancedLesson5Markdown,
        },
      ],
      quiz: {
        id: 'section-3-sql-quiz',
        title: 'Quiz: Database Design & Administration',
        questions: [
          {
            id: 'q1',
            question: 'What is the first normal form (1NF) in database normalization?',
            options: ['No duplicate rows', 'Atomic values in each cell', 'No partial dependencies', 'No transitive dependencies'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            question: 'What does ACID stand for in database transactions?',
            options: ['Atomicity, Consistency, Isolation, Durability', 'Accuracy, Consistency, Integrity, Durability', 'Atomicity, Concurrency, Isolation, Durability', 'Accuracy, Concurrency, Integrity, Durability'],
            correctAnswer: 0
          },
          {
            id: 'q3',
            question: 'Which SQL command is used to create a new table?',
            options: ['NEW TABLE', 'CREATE TABLE', 'MAKE TABLE', 'ADD TABLE'],
            correctAnswer: 1
          }
        ]
      }
    }
  ]
};

export default sqlCourse;