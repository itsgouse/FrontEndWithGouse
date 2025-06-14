import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, Filter, Search, Calendar } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { courses } from '../../data/courses';
import * as Icons from 'lucide-react';

const RevisionPage: React.FC = () => {
  const { userProgress } = useProgress();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'course' | 'alphabetical'>('recent');

  const completedLessons = useMemo(() => {
    if (!userProgress) return [];

    const lessons: Array<{
      courseId: string;
      courseTitle: string;
      courseIcon: string;
      courseColor: string;
      sectionTitle: string;
      lessonId: string;
      lessonTitle: string;
      lessonDuration: string;
      completedAt?: Date;
    }> = [];

    Object.entries(userProgress.courses).forEach(([courseId, courseProgress]) => {
      const course = courses.find(c => c.id === courseId);
      if (!course) return;

      Object.keys(courseProgress.lessons).forEach(lessonId => {
        const lessonProgress = courseProgress.lessons[lessonId];
        if (!lessonProgress.completed) return;

        // Find the lesson in course data
        for (const section of course.sections) {
          const lesson = section.lessons.find(l => l.id === lessonId);
          if (lesson) {
            lessons.push({
              courseId,
              courseTitle: course.title,
              courseIcon: course.icon,
              courseColor: course.color,
              sectionTitle: section.title,
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              lessonDuration: lesson.duration,
              completedAt: lessonProgress.completedAt
            });
            break;
          }
        }
      });
    });

    return lessons;
  }, [userProgress]);

  const filteredAndSortedLessons = useMemo(() => {
    let filtered = completedLessons;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(lesson =>
        lesson.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.sectionTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by course
    if (selectedCourse !== 'all') {
      filtered = filtered.filter(lesson => lesson.courseId === selectedCourse);
    }

    // Sort lessons
    switch (sortBy) {
      case 'recent':
        return filtered.sort((a, b) => {
          if (!a.completedAt && !b.completedAt) return 0;
          if (!a.completedAt) return 1;
          if (!b.completedAt) return -1;
          return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
        });
      case 'course':
        return filtered.sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
      case 'alphabetical':
        return filtered.sort((a, b) => a.lessonTitle.localeCompare(b.lessonTitle));
      default:
        return filtered;
    }
  }, [completedLessons, searchTerm, selectedCourse, sortBy]);

  const courseStats = useMemo(() => {
    const stats: { [courseId: string]: { completed: number; total: number } } = {};
    
    courses.forEach(course => {
      const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
      const completedCount = completedLessons.filter(lesson => lesson.courseId === course.id).length;
      
      stats[course.id] = {
        completed: completedCount,
        total: totalLessons
      };
    });

    return stats;
  }, [completedLessons]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Revision Center
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Review all your completed lessons and reinforce your learning
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {completedLessons.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lessons Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Object.keys(userProgress?.courses || {}).length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Courses Started</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.round(completedLessons.length * 0.75)}h
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Study Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search lessons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Course Filter */}
            <div className="md:w-48">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Courses</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recent' | 'course' | 'alphabetical')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="recent">Most Recent</option>
                <option value="course">By Course</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Course Progress Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(course => {
              const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<any>;
              const stats = courseStats[course.id] || { completed: 0, total: 0 };
              const percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

              return (
                <div key={course.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center mr-3`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {stats.completed}/{stats.total} lessons
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${course.color} transition-all duration-300`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completed Lessons */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Completed Lessons ({filteredAndSortedLessons.length})
            </h2>
          </div>

          {filteredAndSortedLessons.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedLessons.map((lesson, index) => {
                const IconComponent = Icons[lesson.courseIcon as keyof typeof Icons] as React.ComponentType<any>;
                
                return (
                  <Link
                    key={`${lesson.courseId}-${lesson.lessonId}`}
                    to={`/courses/${lesson.courseId}/lessons/${lesson.lessonId}`}
                    className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${lesson.courseColor} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {lesson.lessonTitle}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {lesson.courseTitle} • {lesson.sectionTitle}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{lesson.lessonDuration}</span>
                          {lesson.completedAt && (
                            <>
                              <span className="mx-2">•</span>
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>
                                Completed {new Date(lesson.completedAt).toLocaleDateString()}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No completed lessons found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm || selectedCourse !== 'all' 
                  ? 'Try adjusting your filters or search terms'
                  : 'Start learning to see your completed lessons here'
                }
              </p>
              {!searchTerm && selectedCourse === 'all' && (
                <Link
                  to="/courses"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Courses
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevisionPage;