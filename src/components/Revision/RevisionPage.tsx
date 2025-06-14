import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, Search, Calendar, Bookmark, Eye, Filter } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../contexts/AuthContext';
import { courses } from '../../data/courses';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import * as Icons from 'lucide-react';
import Fuse from 'fuse.js';
import app from '../../App.css'

interface CompletedLesson {
  courseId: string;
  courseTitle: string;
  courseIcon: string;
  courseColor: string;
  sectionTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonDuration: string;
  completedAt?: Date;
}

interface BookmarkedLesson {
  courseId: string;
  courseTitle: string;
  courseIcon: string;
  courseColor: string;
  sectionTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonDuration: string;
}

interface RecentLesson {
  courseId: string;
  courseTitle: string;
  courseIcon: string;
  courseColor: string;
  sectionTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonDuration: string;
  viewedAt: Date;
}

const RevisionPage: React.FC = () => {
  const { userProgress } = useProgress();
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'completed' | 'bookmarked' | 'recent'>('completed');
  const [sortBy, setSortBy] = useState<'recent' | 'course' | 'alphabetical'>('recent');
  const [bookmarkedLessons, setBookmarkedLessons] = useState<BookmarkedLesson[]>([]);
  const [recentLessons, setRecentLessons] = useState<RecentLesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookmarksAndRecent();
  }, [currentUser]);

  const loadBookmarksAndRecent = async () => {
    if (!currentUser) return;

    try {
      // Load bookmarks
      const bookmarks: BookmarkedLesson[] = [];
      for (const course of courses) {
        try {
          const bookmarksDoc = await getDoc(doc(db, 'users', currentUser.uid, 'bookmarks', course.id));
          if (bookmarksDoc.exists()) {
            const bookmarkedLessonIds = bookmarksDoc.data().lessons || [];
            
            for (const lessonId of bookmarkedLessonIds) {
              for (const section of course.sections) {
                const lesson = section.lessons.find(l => l.id === lessonId);
                if (lesson) {
                  bookmarks.push({
                    courseId: course.id,
                    courseTitle: course.title,
                    courseIcon: course.icon,
                    courseColor: course.color,
                    sectionTitle: section.title,
                    lessonId: lesson.id,
                    lessonTitle: lesson.title,
                    lessonDuration: lesson.duration
                  });
                  break;
                }
              }
            }
          }
        } catch (error) {
          console.error(`Error loading bookmarks for course ${course.id}:`, error);
        }
      }
      setBookmarkedLessons(bookmarks);

      // Load recent lessons
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const recentLessonData = userData.recentLessons || [];
        
        const recent: RecentLesson[] = [];
        for (const recentData of recentLessonData) {
          const course = courses.find(c => c.id === recentData.courseId);
          if (course) {
            for (const section of course.sections) {
              const lesson = section.lessons.find(l => l.id === recentData.lessonId);
              if (lesson) {
                recent.push({
                  courseId: course.id,
                  courseTitle: course.title,
                  courseIcon: course.icon,
                  courseColor: course.color,
                  sectionTitle: section.title,
                  lessonId: lesson.id,
                  lessonTitle: lesson.title,
                  lessonDuration: lesson.duration,
                  viewedAt: recentData.viewedAt?.toDate() || new Date()
                });
                break;
              }
            }
          }
        }
        setRecentLessons(recent);
      }
    } catch (error) {
      console.error('Error loading bookmarks and recent lessons:', error);
    } finally {
      setLoading(false);
    }
  };

  const completedLessons = useMemo(() => {
    if (!userProgress) return [];

    const lessons: CompletedLesson[] = [];

    Object.entries(userProgress.courses).forEach(([courseId, courseProgress]) => {
      const course = courses.find(c => c.id === courseId);
      if (!course) return;

      Object.keys(courseProgress.lessons).forEach(lessonId => {
        const lessonProgress = courseProgress.lessons[lessonId];
        if (!lessonProgress.completed) return;

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

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    const allLessons = [...completedLessons, ...bookmarkedLessons, ...recentLessons];
    return new Fuse(allLessons, {
      keys: ['lessonTitle', 'courseTitle', 'sectionTitle'],
      threshold: 0.3,
      includeScore: true
    });
  }, [completedLessons, bookmarkedLessons, recentLessons]);

  const getCurrentLessons = () => {
    switch (activeTab) {
      case 'completed': return completedLessons;
      case 'bookmarked': return bookmarkedLessons;
      case 'recent': return recentLessons;
      default: return completedLessons;
    }
  };

  const filteredAndSortedLessons = useMemo(() => {
    let lessons = getCurrentLessons();

    // Apply search using Fuse.js
    if (searchTerm.trim()) {
      const searchResults = fuse.search(searchTerm);
      const searchedLessons = searchResults.map(result => result.item);
      lessons = lessons.filter(lesson => 
        searchedLessons.some(searched => 
          searched.lessonId === lesson.lessonId && searched.courseId === lesson.courseId
        )
      );
    }

    // Filter by course
    if (selectedCourse !== 'all') {
      lessons = lessons.filter(lesson => lesson.courseId === selectedCourse);
    }

    // Sort lessons
    switch (sortBy) {
      case 'recent':
        if (activeTab === 'completed') {
          return lessons.sort((a, b) => {
            const aDate = (a as CompletedLesson).completedAt;
            const bDate = (b as CompletedLesson).completedAt;
            if (!aDate && !bDate) return 0;
            if (!aDate) return 1;
            if (!bDate) return -1;
            return new Date(bDate).getTime() - new Date(aDate).getTime();
          });
        } else if (activeTab === 'recent') {
          return lessons.sort((a, b) => {
            const aDate = (a as RecentLesson).viewedAt;
            const bDate = (b as RecentLesson).viewedAt;
            return new Date(bDate).getTime() - new Date(aDate).getTime();
          });
        }
        return lessons;
      case 'course':
        return lessons.sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
      case 'alphabetical':
        return lessons.sort((a, b) => a.lessonTitle.localeCompare(b.lessonTitle));
      default:
        return lessons;
    }
  }, [getCurrentLessons(), searchTerm, selectedCourse, sortBy, activeTab, fuse]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading revision data...</p>
        </div>
      </div>
    );
  }

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
            Review completed lessons, access bookmarked content, and track your learning journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {completedLessons.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mr-4">
                <Bookmark className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bookmarkedLessons.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bookmarked</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {recentLessons.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recent</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Object.keys(userProgress?.courses || {}).length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Courses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          
          <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 no-scrollbar">
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'completed'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed Lessons ({completedLessons.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('bookmarked')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'bookmarked'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center">
                <Bookmark className="w-4 h-4 mr-2" />
                Bookmarked ({bookmarkedLessons.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'recent'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" />
                Recently Viewed ({recentLessons.length})
              </div>
            </button>
          </div>

          {/* Filters and Search */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search lessons, courses, or sections..."
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
        </div>

        {/* Course Progress Overview - Only show for completed tab */}
        {activeTab === 'completed' && (
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
        )}

        {/* Lessons List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {activeTab === 'completed' && 'Completed Lessons'}
              {activeTab === 'bookmarked' && 'Bookmarked Lessons'}
              {activeTab === 'recent' && 'Recently Viewed Lessons'}
              {' '}({filteredAndSortedLessons.length})
            </h2>
          </div>

          {filteredAndSortedLessons.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedLessons.map((lesson, index) => {
                const IconComponent = Icons[lesson.courseIcon as keyof typeof Icons] as React.ComponentType<any>;
                
                return (
                  <Link
                    key={`${lesson.courseId}-${lesson.lessonId}-${index}`}
                    to={`/courses/${lesson.courseId}/lessons/${lesson.lessonId}`}
                    className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${lesson.courseColor} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          {activeTab === 'completed' && <CheckCircle className="w-4 h-4 text-green-500 mr-2" />}
                          {activeTab === 'bookmarked' && <Bookmark className="w-4 h-4 text-yellow-500 mr-2" />}
                          {activeTab === 'recent' && <Eye className="w-4 h-4 text-blue-500 mr-2" />}
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
                          {activeTab === 'completed' && (lesson as CompletedLesson).completedAt && (
                            <>
                              <span className="mx-2">•</span>
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>
                                Completed {new Date((lesson as CompletedLesson).completedAt!).toLocaleDateString()}
                              </span>
                            </>
                          )}
                          {activeTab === 'recent' && (
                            <>
                              <span className="mx-2">•</span>
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>
                                Viewed {new Date((lesson as RecentLesson).viewedAt).toLocaleDateString()}
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
              {activeTab === 'completed' && <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />}
              {activeTab === 'bookmarked' && <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />}
              {activeTab === 'recent' && <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />}
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {activeTab === 'completed' && 'No completed lessons found'}
                {activeTab === 'bookmarked' && 'No bookmarked lessons found'}
                {activeTab === 'recent' && 'No recently viewed lessons found'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm || selectedCourse !== 'all' 
                  ? 'Try adjusting your filters or search terms'
                  : activeTab === 'completed' 
                    ? 'Start learning to see your completed lessons here'
                    : activeTab === 'bookmarked'
                    ? 'Bookmark lessons while learning to access them here'
                    : 'Visit lessons to see your recent activity here'
                }
              </p>
              {!searchTerm && selectedCourse === 'all' && activeTab === 'completed' && (
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