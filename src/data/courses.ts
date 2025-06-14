// Interfaces.ts (or courses.ts if you prefer)

export interface CodeLesson {
  lessonTitle: string;
  codeSnippet: string;
  explanation: string;
  imageUrl?: string; // Optional image URL for diagrams or visual aids
}

export interface Subtopic {
  title: string;
  description: string;
  codeLessons?: CodeLesson[]; // Optional: An array of code examples related to this subtopic
}

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "30 min", "1 hr"
  subtopics: Subtopic[]; // A lesson is composed of multiple subtopics
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[]; // Array of possible answers
  correctAnswer: number; // Index of the correct answer in the options array (0-based)
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[]; // Array of questions for the quiz
}

export interface Project {
  id: string;
  title: string;
  description: string;
  checkpoint?: string; // Optional: A specific point to check progress or understanding
}

export interface Section {
  id: string;
  title: string;
  level: 'basic' | 'intermediate' | 'advanced'; // Difficulty level of the section
  lessons: Lesson[]; // Array of lessons within this section
  quiz?: Quiz; // Optional: A quiz associated with this section
  projects?: Project[]; // Optional: Projects associated with this section
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of an icon, e.g., 'Book', 'Code' (for front-end display)
  color: string; // Tailwind CSS background color class, e.g., 'bg-blue-600'
  estimatedHours: number; // Total estimated hours to complete the course
  totalLessons: number; // Total number of individual lessons in the course
  sections: Section[]; // Array of sections that make up the course
}

export { courses } from './courses/index';