// Interfaces.ts

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  markdownContent : string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  checkpoint?: string;
}

export interface Section {
  id: string;
  title: string;
  level: 'basic' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  quiz?: Quiz;
  projects?: Project[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  estimatedHours: number;
  totalLessons: number;
  sections: Section[];
}

export { courses } from './courses/index';