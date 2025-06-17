import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Trophy, RotateCcw, CheckCircle, Circle } from 'lucide-react';
import { courses } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressContext';
import * as Icons from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { userProgress, resetCourseProgress } = useProgress();

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<any>;
  const courseProgress = userProgress?.courses[courseId];

  const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = Object.keys(courseProgress?.lessons || {}).length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleResetProgress = async () => {
    if (window.confirm('Are you sure you want to reset your progress for this course? This action cannot be undone.')) {
      await resetCourseProgress(courseId!);
    }
  };

  const isLessonCompleted = (lessonId: string) => {
    return courseProgress?.lessons[lessonId]?.completed || false;
  };

  const isQuizCompleted = (quizId: string) => {
    return courseProgress?.quizzes[quizId]?.completed || false;
  };

  const getQuizScore = (quizId: string) => {
    return courseProgress?.quizzes[quizId]?.score || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/courses"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
            {/* Course Header Content */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* Top Section - Icon, Title, and Reset Button */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                {/* Left Side - Icon and Title */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1 min-w-0">
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${course.color} rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                      {course.title}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Reset Progress Button */}
                {progressPercentage > 0 && (
                  <div className="flex justify-center sm:justify-end">
                    <button
                      onClick={handleResetProgress}
                      className="flex items-center px-3 sm:px-4 py-2 text-red-600 dark:text-red-400 bg-red-100 hover:bg-red-50 dark:bg-red-900/20 dark:hover:bg-red-900/30 rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset Progress
                    </button>
                  </div>
                )}
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center justify-center sm:justify-start">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {course.totalLessons} lessons
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {course.estimatedHours} hours
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {courseProgress?.totalPoints || 0} points
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              {progressPercentage > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Course Progress</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3">
                    <div
                      className={`h-2 sm:h-3 rounded-full ${course.color} transition-all duration-300`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-4 sm:space-y-6">
          {course.sections.map((section) => (
            <div key={section.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium self-start sm:self-auto ${
                    section.level === 'basic' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' :
                    section.level === 'intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    {section.level}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {section.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/courses/${courseId}/lessons/${lesson.id}`}
                      className="flex items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <div className="mr-3 sm:mr-4 flex-shrink-0">
                        {isLessonCompleted(lesson.id) ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                          {lesson.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {lesson.duration}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {section.quiz && (
                    <Link
                      to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                      className="flex items-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group border-2 border-blue-200 dark:border-blue-800"
                    >
                      <div className="mr-3 sm:mr-4 flex-shrink-0">
                        {isQuizCompleted(section.quiz.id) ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-blue-900 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors text-sm sm:text-base">
                          {section.quiz.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-1">
                          {isQuizCompleted(section.quiz.id)
                            ? `Completed - Score: ${getQuizScore(section.quiz.id)}/${section.quiz.questions.length}`
                            : `${section.quiz.questions.length} questions`
                          }
                        </p>
                      </div>
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;