import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

interface LessonProgress {
  completed: boolean;
  completedAt?: Date;
}

interface QuizProgress {
  completed: boolean;
  score: number;
  completedAt?: Date;
}

interface CourseProgress {
  lessons: { [lessonId: string]: LessonProgress };
  quizzes: { [quizId: string]: QuizProgress };
  totalPoints: number;
  completionPercentage: number;
}

interface UserProgress {
  courses: { [courseId: string]: CourseProgress };
  totalPoints: number;
  rank: string;
}

interface ProgressContextType {
  userProgress: UserProgress | null;
  markLessonComplete: (courseId: string, lessonId: string) => Promise<void>;
  markQuizComplete: (courseId: string, quizId: string, score: number) => Promise<void>;
  resetCourseProgress: (courseId: string) => Promise<void>;
  loading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

const getRankFromPoints = (points: number): string => {
  if (points >= 5000) return 'Expert';
  if (points >= 3000) return 'Advanced';
  if (points >= 1500) return 'Intermediate';
  if (points >= 500) return 'Beginner';
  return 'Novice';
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadUserProgress();
    } else {
      setUserProgress(null);
      setLoading(false);
    }
  }, [currentUser]);

  const loadUserProgress = async () => {
    if (!currentUser) return;

    try {
      const docRef = doc(db, 'userProgress', currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as UserProgress;
        setUserProgress(data);
      } else {
        const initialProgress: UserProgress = {
          courses: {},
          totalPoints: 0,
          rank: 'Novice'
        };
        await setDoc(docRef, initialProgress);
        setUserProgress(initialProgress);
      }
    } catch (error) {
      console.error('Error loading user progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProgress = async (updatedProgress: UserProgress) => {
    if (!currentUser) return;

    try {
      const docRef = doc(db, 'userProgress', currentUser.uid);
      await updateDoc(docRef, updatedProgress);
      setUserProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating user progress:', error);
    }
  };

  const markLessonComplete = async (courseId: string, lessonId: string) => {
    if (!userProgress) return;

    const updatedProgress = { ...userProgress };
    
    if (!updatedProgress.courses[courseId]) {
      updatedProgress.courses[courseId] = {
        lessons: {},
        quizzes: {},
        totalPoints: 0,
        completionPercentage: 0
      };
    }

    if (!updatedProgress.courses[courseId].lessons[lessonId]?.completed) {
      updatedProgress.courses[courseId].lessons[lessonId] = {
        completed: true,
        completedAt: new Date()
      };

      const points = 10; // Points per lesson (updated from 50 to 10)
      updatedProgress.courses[courseId].totalPoints += points;
      updatedProgress.totalPoints += points;
      updatedProgress.rank = getRankFromPoints(updatedProgress.totalPoints);
    }

    await updateUserProgress(updatedProgress);
  };

  const markQuizComplete = async (courseId: string, quizId: string, score: number) => {
    if (!userProgress) return;

    const updatedProgress = { ...userProgress };
    
    if (!updatedProgress.courses[courseId]) {
      updatedProgress.courses[courseId] = {
        lessons: {},
        quizzes: {},
        totalPoints: 0,
        completionPercentage: 0
      };
    }

    const previousScore = updatedProgress.courses[courseId].quizzes[quizId]?.score || 0;
    const basePoints = 20; // Base points for completing quiz
    const bonusPoints = score * 5; // 5 points per correct answer
    const totalQuizPoints = basePoints + bonusPoints;
    const previousQuizPoints = basePoints + (previousScore * 5);
    const pointsDifference = totalQuizPoints - previousQuizPoints;

    updatedProgress.courses[courseId].quizzes[quizId] = {
      completed: true,
      score,
      completedAt: new Date()
    };

    updatedProgress.courses[courseId].totalPoints += pointsDifference;
    updatedProgress.totalPoints += pointsDifference;
    updatedProgress.rank = getRankFromPoints(updatedProgress.totalPoints);

    await updateUserProgress(updatedProgress);
  };

  const resetCourseProgress = async (courseId: string) => {
    if (!userProgress) return;

    const updatedProgress = { ...userProgress };
    
    if (updatedProgress.courses[courseId]) {
      const coursePoints = updatedProgress.courses[courseId].totalPoints;
      updatedProgress.totalPoints -= coursePoints;
      updatedProgress.courses[courseId] = {
        lessons: {},
        quizzes: {},
        totalPoints: 0,
        completionPercentage: 0
      };
      updatedProgress.rank = getRankFromPoints(updatedProgress.totalPoints);
    }

    await updateUserProgress(updatedProgress);
  };

  const value = {
    userProgress,
    markLessonComplete,
    markQuizComplete,
    resetCourseProgress,
    loading
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};