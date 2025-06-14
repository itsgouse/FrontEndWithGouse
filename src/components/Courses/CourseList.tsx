import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Star } from 'lucide-react';
import { courses } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressContext';
import * as Icons from 'lucide-react';

const CourseList: React.FC = () => {
  const { userProgress } = useProgress();

  const getCourseProgress = (courseId: string) => {
    if (!userProgress?.courses[courseId]) return 0;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
    const completedLessons = Object.keys(userProgress.courses[courseId].lessons || {}).length;
    
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master frontend development with our comprehensive curriculum designed to take you 
            from beginner to expert level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<any>;
            const progress = getCourseProgress(course.id);
            
            return (
              <div
                key={course.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className={`h-3 ${course.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {course.title}
                      </h3>
                      {progress > 0 && (
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <Star className="w-4 h-4 mr-1" />
                          <span>{progress}% Complete</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${course.color.replace('bg-', 'bg-')} transition-all duration-300`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{course.totalLessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.estimatedHours}h</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    {progress > 0 ? 'Continue Learning' : 'Start Course'}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseList;