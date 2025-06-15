import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code, Bookmark, BookmarkCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { courses } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../contexts/AuthContext';
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const LessonView: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { markLessonComplete, userProgress } = useProgress();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const course = courses.find(c => c.id === courseId);
  const section = course?.sections.find(s => s.lessons.some(l => l.id === lessonId));
  const lesson = section?.lessons.find(l => l.id === lessonId) as typeof section.lessons[number] & {
    subtopics?: Array<{
      title: string;
      description: string;
      codeLessons: Array<{
        lessonTitle: string;
        codeSnippet: string;
        explanation: string;
        imageUrl?: string;
      }>;
    }>;
  };

  useEffect(() => {
    if (currentUser && courseId && lessonId) {
      trackRecentLesson();
      checkBookmarkStatus();
    }
  }, [currentUser, courseId, lessonId]);

  if (!course || !section || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Lesson Not Found
          </motion.h1>
          <Link to="/courses" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = userProgress?.courses[courseId!]?.lessons[lessonId!]?.completed || false;

  const trackRecentLesson = async () => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      const recentLesson = {
        lessonId: lessonId!,
        courseId: courseId!,
        viewedAt: new Date()
      };

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const recentLessons = userData.recentLessons || [];

        const filteredLessons = recentLessons.filter(
          (lessonItem: any) => !(lessonItem.lessonId === lessonId && lessonItem.courseId === courseId)
        );

        const updatedLessons = [recentLesson, ...filteredLessons].slice(0, 10);

        await updateDoc(userDocRef, { recentLessons: updatedLessons });
      } else {
        await setDoc(userDocRef, { recentLessons: [recentLesson] });
      }
    } catch (error) {
      console.error('Error tracking recent lesson:', error);
    }
  };

  const checkBookmarkStatus = async () => {
    if (!currentUser) return;

    try {
      const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId!);
      const bookmarksDoc = await getDoc(bookmarksRef);

      if (bookmarksDoc.exists()) {
        const bookmarks = bookmarksDoc.data().lessons || [];
        setIsBookmarked(bookmarks.includes(lessonId));
      }
    } catch (error) {
      console.error('Error checking bookmark status:', error);
    }
  };

  const toggleBookmark = async () => {
    if (!currentUser) return;

    try {
      const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId!);

      if (isBookmarked) {
        await updateDoc(bookmarksRef, {
          lessons: arrayRemove(lessonId)
        });
        setIsBookmarked(false);
      } else {
        const bookmarksDoc = await getDoc(bookmarksRef);
        if (bookmarksDoc.exists()) {
          await updateDoc(bookmarksRef, {
            lessons: arrayUnion(lessonId)
          });
        } else {
          await setDoc(bookmarksRef, {
            lessons: [lessonId]
          });
        }
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const handleMarkComplete = async () => {
    await markLessonComplete(courseId!, lessonId!);
  };

  const findNextLesson = () => {
    const allLessons = course.sections.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  };

  const nextLesson = findNextLesson();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodeIndex(index);
      setTimeout(() => setCopiedCodeIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const supportsPlayground = ['javascript', 'html', 'css', 'dsa'].includes(courseId!);
  const playgroundType = ['html', 'css', 'javascript'].includes(courseId!) ? 'web' : 'react';

  const getLanguageFromCourse = (courseId: string) => {
    switch (courseId) {
      case 'html': return 'html';
      case 'css': return 'css';
      case 'javascript': return 'javascript';
      case 'react': return 'jsx';
      case 'dsa': return 'javascript';
      default: return 'javascript';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to={`/courses/${courseId}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {course.title}
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {lesson.title}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center text-base text-gray-600 dark:text-gray-400"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{lesson.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{section.title}</span>
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isBookmarked
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 scale-110'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                </button>

                {isCompleted && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="w-6 h-6 mr-2" />
                    <span className="font-medium">Completed</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lesson Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8"
        >
          <div className="p-8">
            {lesson.subtopics && lesson.subtopics.length > 0 ? (
              lesson.subtopics.map((subtopic, subtopicIndex) => (
                <motion.div 
                  key={subtopicIndex} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4, delay: subtopicIndex * 0.1 }}
                  className="mb-12 last:mb-0"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {subtopic.title}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {subtopic.description}
                  </p>

                  {subtopic.codeLessons && subtopic.codeLessons.length > 0 && (
                    <div className="space-y-8">
                      {subtopic.codeLessons.map((codeLesson, lessonIndex) => (
                        <motion.div 
                          key={lessonIndex} 
                          initial={{ opacity: 0, y: 20 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 0.4, delay: (subtopicIndex * 0.1) + (lessonIndex * 0.05) }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600"
                        >
                          {/* Two-column layout for desktop, stacked for mobile */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Content Column */}
                            <div className="p-6 flex flex-col justify-center">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                                {codeLesson.lessonTitle}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {codeLesson.explanation}
                              </p>

                              {codeLesson.imageUrl && (
                                <div className="mb-4 lg:hidden">
                                  <img
                                    src={codeLesson.imageUrl}
                                    alt={codeLesson.lessonTitle}
                                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Code/Image Column */}
                            <div className="bg-gray-900 flex flex-col">
                              {codeLesson.imageUrl && (
                                <div className="hidden lg:block p-6">
                                  <img
                                    src={codeLesson.imageUrl}
                                    alt={codeLesson.lessonTitle}
                                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                                  />
                                </div>
                              )}
                              
                              {/* Code Block */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                  <span className="text-sm font-medium text-gray-200 flex items-center">
                                    <Code className="w-4 h-4 mr-2" />
                                    Example Code
                                  </span>
                                  <button
                                    onClick={() => copyToClipboard(codeLesson.codeSnippet, lessonIndex)}
                                    className="p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200 group"
                                    title="Copy code to clipboard"
                                  >
                                    {copiedCodeIndex === lessonIndex ? (
                                      <Check className="w-4 h-4 text-green-400" />
                                    ) : (
                                      <Copy className="w-4 h-4 group-hover:text-white" />
                                    )}
                                  </button>
                                </div>
                                <div className="overflow-x-auto">
                                  <SyntaxHighlighter
                                    language={getLanguageFromCourse(courseId!)}
                                    style={vscDarkPlus}
                                    customStyle={{
                                      margin: 0,
                                      padding: '1rem',
                                      background: 'transparent',
                                      fontSize: '0.875rem',
                                      lineHeight: '1.5'
                                    }}
                                    wrapLongLines={true}
                                  >
                                    {codeLesson.codeSnippet}
                                  </SyntaxHighlighter>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                No content available for this lesson yet.
              </p>
            )}
          </div>
        </motion.div>

        {/* Playground Section */}
        {supportsPlayground && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Practice What You've Learned
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try out the concepts from this lesson in an interactive playground or CodeSandbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  to={`/playgrounds/${playgroundType}/new`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors justify-center"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Try in Playground
                </Link>
                <a
                  href="https://codesandbox.io/s/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in CodeSandbox
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Actions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div>
            {!isCompleted && (
              <button
                onClick={handleMarkComplete}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Complete
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {nextLesson && (
              <Link
                to={`/courses/${courseId}/lessons/${nextLesson.id}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg"
              >
                Next Lesson
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}

            {section.quiz && (
              <Link
                to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg"
              >
                Take Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LessonView;