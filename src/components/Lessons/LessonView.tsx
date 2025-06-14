import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { courses } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressContext';

const LessonView: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { markLessonComplete, userProgress } = useProgress();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === courseId);
  const section = course?.sections.find(s => s.lessons.some(l => l.id === lessonId));
  const lesson = section?.lessons.find(l => l.id === lessonId);
  
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to={`/courses/${courseId}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {course.title}
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
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
              
              {isCompleted && (
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-medium">Completed</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div 
                className="text-gray-900 dark:text-white leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: lesson.content.replace(/\n/g, '<br>').replace(/#{1,6}\s(.+)/g, (match, title) => {
                    const level = match.indexOf(' ') - 1;
                    return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">${title}</h${level}>`;
                  }).replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                    .replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">$1</code>')
                    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto"><code class="text-sm font-mono">$1</code></pre>')
                }}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div>
            {!isCompleted && (
              <button
                onClick={handleMarkComplete}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Complete
              </button>
            )}
          </div>
          
          <div className="flex space-x-4">
            {nextLesson && (
              <Link
                to={`/courses/${courseId}/lessons/${nextLesson.id}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                Next Lesson
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            )}
            
            {section.quiz && (
              <Link
                to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors"
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