export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Section {
  id: string;
  title: string;
  level: 'basic' | 'medium' | 'advanced';
  lessons: Lesson[];
  quiz?: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: Section[];
  totalLessons: number;
  estimatedHours: number;
}

// Re-export courses from the modular structure
export { courses } from './courses/index';