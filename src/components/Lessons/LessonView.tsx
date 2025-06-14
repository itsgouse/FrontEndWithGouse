import React, { useEffect, useState } from 'react'; // Import useState
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code, Bookmark, BookmarkCheck, Copy, Check } from 'lucide-react'; // Import Copy and Check icons
import { courses } from '../../data/courses'; // Ensure this imports your updated course structure
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../contexts/AuthContext';
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
// import LessonContentRenderer from './LessonContentRenderer'; // No longer needed for this structure

const LessonView: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { markLessonComplete, userProgress } = useProgress();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null); // State for tracking copied code snippet

  const course = courses.find(c => c.id === courseId);
  const section = course?.sections.find(s => s.lessons.some(l => l.id === lessonId));
  // Type assertion for lesson to correctly access 'subtopics'
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lesson Not Found</h1>
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

        // Remove existing entry for this lesson
        const filteredLessons = recentLessons.filter(
          (lessonItem: any) => !(lessonItem.lessonId === lessonId && lessonItem.courseId === courseId)
        );

        // Add to beginning and keep only last 10
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
    // Auto-scroll to top when lesson changes
    window.scrollTo(0, 0);
  }, [lessonId]);

  // Function to handle copying code to clipboard
  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodeIndex(index);
      setTimeout(() => setCopiedCodeIndex(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Check if this course supports a playground
  const supportsPlayground = ['javascript', 'html', 'css', 'dsa'].includes(courseId!);
  const playgroundType = ['html', 'css', 'javascript'].includes(courseId!) ? 'web' : 'react'; // Adjust as per your playground types

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
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
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {lesson.title}
                </h1>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{lesson.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{section.title}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked
                      ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                </button>

                {isCompleted && (
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    <span className="font-medium">Completed</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Content: Dynamically rendered based on subtopics and codeLessons */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8 p-8">
          {lesson.subtopics && lesson.subtopics.length > 0 ? (
            lesson.subtopics.map((subtopic, subtopicIndex) => (
              <div key={subtopicIndex} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {subtopic.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {subtopic.description}
                </p>

                {subtopic.codeLessons && subtopic.codeLessons.length > 0 && (
                  <div className="space-y-8 mt-6"> {/* Added margin-top for spacing */}
                    {subtopic.codeLessons.map((codeLesson, lessonIndex) => (
                      <div key={lessonIndex} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                          {codeLesson.lessonTitle}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {codeLesson.explanation}
                        </p>

                        {codeLesson.imageUrl && (
                          <div className="mb-4 text-center">
                            <img
                              src={codeLesson.imageUrl}
                              alt={codeLesson.lessonTitle}
                              className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                            />
                          </div>
                        )}

                        {/* Code Block with Headline and Copy Button */}
                        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                          <div className="flex items-center justify-between px-4 py-2 bg-gray-700 border-b border-gray-600">
                            <span className="text-sm font-medium text-gray-200 flex items-center">
                              <Code className="w-4 h-4 mr-2" /> **Example Code**
                            </span>
                            <button
                              onClick={() => copyToClipboard(codeLesson.codeSnippet, lessonIndex)}
                              className="p-1 rounded-md text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                              title="Copy code to clipboard"
                            >
                              {copiedCodeIndex === lessonIndex ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="text-white p-4 text-sm overflow-x-auto font-mono">
                            <code>{codeLesson.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No content available for this lesson yet.
            </p>
          )}
        </div>

        {/* Playground Section */}
        {supportsPlayground && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Practice What You've Learned
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try out the concepts from this lesson in an interactive playground.
                </p>
              </div>
              <Link
                to={`/playgrounds/${playgroundType}/new`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
              >
                <Code className="w-4 h-4 mr-2" />
                Try in Playground
              </Link>
            </div>
          </div>
        )}

        {/* Actions Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            {!isCompleted && (
              <button
                onClick={handleMarkComplete}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors w-full sm:w-auto justify-center"
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
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
              >
                Next Lesson
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}

            {section.quiz && (
              <Link
                to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors w-full sm:w-auto justify-center"
              >
                Take Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;