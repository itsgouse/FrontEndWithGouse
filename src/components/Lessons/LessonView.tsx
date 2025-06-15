import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code, Bookmark, BookmarkCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for conditional renders
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { courses } from '../../data/courses'; // Ensure this path is correct
import { useProgress } from '../../contexts/ProgressContext'; // Ensure this path is correct
import { useAuth } from '../../contexts/AuthContext'; // Ensure this path is correct
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; // Ensure this path is correct

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contentSectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const playgroundVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const actionsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
};

const LessonView: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { markLessonComplete, userProgress } = useProgress();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [copiedsubtopicIndex,setCopiedSubtopicIndex] = useState<number | null>(null);

  // --- Data Fetching & Memoization ---
  const course = useMemo(() => courses.find(c => c.id === courseId), [courseId]);
  const section = useMemo(() => course?.sections.find(s => s.lessons.some(l => l.id === lessonId)), [course, lessonId]);
  const lesson = useMemo(() => section?.lessons.find(l => l.id === lessonId) as typeof section.lessons[number] & {
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
  }, [section, lessonId]);

  const isCompleted = useMemo(() => userProgress?.courses[courseId!]?.lessons[lessonId!]?.completed || false, [userProgress, courseId, lessonId]);

  // --- Utility Functions ---
  const getLanguageFromCourse = useCallback((id: string) => {
    switch (id) {
      case 'html': return 'html';
      case 'css': return 'css';
      case 'javascript': return 'javascript';
      case 'react': return 'jsx';
      case 'dsa': return 'javascript'; // Assuming DSA lessons are primarily JS
      default: return 'javascript';
    }
  }, []);

  const findNextLesson = useCallback(() => {
    if (!course) return null;
    const allLessons = course.sections.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  }, [course, lessonId]);

  const nextLesson = findNextLesson();
  const supportsPlayground = useMemo(() => ['javascript', 'html', 'css', 'dsa', 'react'].includes(courseId!), [courseId]);
  const playgroundType = useMemo(() => ['html', 'css', 'javascript'].includes(courseId!) ? 'web' : 'react', [courseId]);


  // --- Firebase Interactions ---
  const trackRecentLesson = useCallback(async () => {
    if (!currentUser || !courseId || !lessonId) return;
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      const recentLessonData = {
        lessonId,
        courseId,
        viewedAt: new Date(),
      };

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const recentLessons = userData.recentLessons || [];

        const filteredLessons = recentLessons.filter(
          (lessonItem: any) => !(lessonItem.lessonId === lessonId && lessonItem.courseId === courseId)
        );

        const updatedLessons = [recentLessonData, ...filteredLessons].slice(0, 10); // Keep last 10
        await updateDoc(userDocRef, { recentLessons: updatedLessons });
      } else {
        await setDoc(userDocRef, { recentLessons: [recentLessonData] });
      }
    } catch (error) {
      console.error('Error tracking recent lesson:', error);
    }
  }, [currentUser, courseId, lessonId]);

  const checkBookmarkStatus = useCallback(async () => {
    if (!currentUser || !courseId || !lessonId) return;
    try {
      const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId);
      const bookmarksDoc = await getDoc(bookmarksRef);
      setIsBookmarked(bookmarksDoc.exists() && bookmarksDoc.data().lessons.includes(lessonId));
    } catch (error) {
      console.error('Error checking bookmark status:', error);
    }
  }, [currentUser, courseId, lessonId]);

  const toggleBookmark = useCallback(async () => {
    if (!currentUser || !courseId || !lessonId) return;
    try {
      const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId);
      if (isBookmarked) {
        await updateDoc(bookmarksRef, { lessons: arrayRemove(lessonId) });
        setIsBookmarked(false);
      } else {
        const bookmarksDoc = await getDoc(bookmarksRef);
        if (bookmarksDoc.exists()) {
          await updateDoc(bookmarksRef, { lessons: arrayUnion(lessonId) });
        } else {
          await setDoc(bookmarksRef, { lessons: [lessonId] });
        }
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  }, [currentUser, courseId, lessonId, isBookmarked]);

  const handleMarkComplete = useCallback(async () => {
    await markLessonComplete(courseId!, lessonId!);
  }, [markLessonComplete, courseId, lessonId]);

  const copyToClipboard = useCallback(async (code: string, index: number, subtopicIndex :number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodeIndex(index);
      setCopiedSubtopicIndex(subtopicIndex);
      setTimeout(() => setCopiedCodeIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  // --- Effects ---
  useEffect(() => {
    if (currentUser && courseId && lessonId) {
      trackRecentLesson();
      checkBookmarkStatus();
    }
  }, [currentUser, courseId, lessonId, trackRecentLesson, checkBookmarkStatus]); // Added dependencies for useEffect

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on lesson change
  }, [lessonId]);

  // --- Loading/Error State ---
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Link
            to={`/courses/${courseId}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors text-sm sm:text-base"
            aria-label={`Back to ${course.title}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to <span className="hidden sm:inline-block">{course.title}</span><span className="sm:hidden">Course</span>
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {lesson.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-400"
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
                  aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
                >
                  {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                </button>

                <AnimatePresence mode="wait"> {/* Use AnimatePresence for mount/unmount animations */}
                  {isCompleted && (
                    <motion.div
                      key="completed-status"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center text-green-600 dark:text-green-400 text-sm sm:text-base font-medium"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
                      <span>Completed</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lesson Content */}
        <motion.div
          variants={contentSectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            {lesson.subtopics && lesson.subtopics.length > 0 ? (
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                {lesson.subtopics.map((subtopic, subtopicIndex) => (
                  <motion.div
                    key={subtopicIndex}
                    variants={itemVariants}
                    className="mb-10 sm:mb-12 last:mb-0"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {subtopic.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                      {subtopic.description}
                    </p>

                    {subtopic.codeLessons && subtopic.codeLessons.length > 0 && (
                      <div className="space-y-6 sm:space-y-8">
                        {subtopic.codeLessons.map((codeLesson, lessonIndex) => (
                          <motion.div
                            key={lessonIndex}
                            variants={itemVariants} // Re-use itemVariants for nested animations
                            className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600"
                          >
                            {/* Two-column layout for desktop, stacked for mobile */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                              {/* Content Column */}
                              <div className="p-5 sm:p-6 flex flex-col">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                                  {codeLesson.lessonTitle}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                                  {codeLesson.explanation}
                                </p>

                                {/* Image for Mobile/Tablet */}
                                {codeLesson.imageUrl && (
                                  <div className="block lg:hidden mt-4">
                                    <img
                                      src={codeLesson.imageUrl}
                                      alt={codeLesson.lessonTitle}
                                      className="w-full h-auto rounded-lg shadow-lg object-cover border border-gray-200 dark:border-gray-600"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Code/Image Column */}
                              <div className="bg-gray-900 flex flex-col">
                                {/* Image for Desktop */}
                                {codeLesson.imageUrl && (
                                  <div className="hidden lg:block p-6 flex-shrink-0"> {/* flex-shrink to ensure it doesn't take too much space if code is short */}
                                    <img
                                      src={codeLesson.imageUrl}
                                      alt={codeLesson.lessonTitle}
                                      className="w-full h-auto rounded-lg shadow-lg object-cover border border-gray-700"
                                    />
                                  </div>
                                )}

                                {/* Code Block */}
                                <div className="flex-1 flex flex-col">
                                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                    <span className="text-xs sm:text-sm font-medium text-gray-200 flex items-center">
                                      <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                      Example Code
                                    </span>
                                    <button
                                      onClick={() => copyToClipboard(codeLesson.codeSnippet, lessonIndex, subtopicIndex)}
                                      className="p-1.5 sm:p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200 group"
                                      title="Copy code to clipboard"
                                      aria-label="Copy code to clipboard"
                                    >
                                      {copiedCodeIndex === lessonIndex && copiedsubtopicIndex === subtopicIndex ? (
                                        <Check className="w-4 h-4 text-green-400" />
                                      ) : (
                                        <Copy className="w-4 h-4 group-hover:text-white" />
                                      )}
                                    </button>
                                  </div>
                                  <div className="overflow-x-auto flex-1"> {/* flex-1 to make it fill available space */}
                                    <SyntaxHighlighter
                                      language={getLanguageFromCourse(courseId!)}
                                      style={vscDarkPlus}
                                      customStyle={{
                                        margin: 0,
                                        padding: '1rem',
                                        background: 'transparent',
                                        fontSize: '0.8rem', // Slightly smaller for mobile, scales up with rem
                                        lineHeight: '1.5',
                                      }}
                                      wrapLongLines={true}
                                      showLineNumbers={true} // Added line numbers for better readability
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
                ))}
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-400 text-center py-8 text-lg"
              >
                No content available for this lesson yet. We're working on it!
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Playground Section */}
        {supportsPlayground && (
          <motion.div
            variants={playgroundVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 mb-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Practice What You've Learned
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Try out the concepts from this lesson in an interactive playground or CodeSandbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <Link
                  to={`/playgrounds/${playgroundType}/new`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors justify-center text-sm sm:text-base shadow-md"
                  aria-label="Try in Playground"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Try in Playground
                </Link>
                <a
                  href="https://codesandbox.io/s/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors justify-center text-sm sm:text-base shadow-md"
                  aria-label="Open in CodeSandbox"
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
          variants={actionsVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div>
            <AnimatePresence mode="wait">
              {!isCompleted && (
                <motion.button
                  key="mark-complete-button"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleMarkComplete}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                  aria-label="Mark lesson as complete"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mark as Complete
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {nextLesson && (
              <Link
                to={`/courses/${courseId}/lessons/${nextLesson.id}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                aria-label={`Go to next lesson: ${nextLesson.title}`}
              >
                Next Lesson
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}

            {section.quiz && (
              <Link
                to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                aria-label={`Take quiz for ${section.title}`}
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