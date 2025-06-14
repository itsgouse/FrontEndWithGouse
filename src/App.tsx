import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import CourseList from './components/Courses/CourseList';
import CourseDetail from './components/Courses/CourseDetail';
import LessonView from './components/Lessons/LessonView';
import QuizView from './components/Quiz/QuizView';
import Dashboard from './components/Dashboard/Dashboard';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Profile from './components/Profile/Profile';
import RevisionPage from './components/Revision/RevisionPage';
import PlaygroundsPage from './components/Playgrounds/PlaygroundsPage';
import PlaygroundView from './components/Playgrounds/PlaygroundView';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/courses" element={<CourseList />} />
                  <Route path="/courses/:courseId" element={<CourseDetail />} />
                  <Route 
                    path="/courses/:courseId/lessons/:lessonId" 
                    element={
                      <ProtectedRoute>
                        <LessonView />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/courses/:courseId/quiz/:quizId" 
                    element={
                      <ProtectedRoute>
                        <QuizView />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/leaderboard" 
                    element={
                      <ProtectedRoute>
                        <Leaderboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/profile" 
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/revision" 
                    element={
                      <ProtectedRoute>
                        <RevisionPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/playgrounds" 
                    element={
                      <ProtectedRoute>
                        <PlaygroundsPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/playground/:type/:lessonId?" 
                    element={
                      <ProtectedRoute>
                        <PlaygroundView />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;