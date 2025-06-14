import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../contexts/AuthContext';
import { courses } from '../../data/courses';
import * as Icons from 'lucide-react';

const Dashboard: React.FC = () => {
  const { userProgress } = useProgress();
  const { currentUser } = useAuth();

  const getTotalLessonsCompleted = () => {
    if (!userProgress) return 0;
    return Object.values(userProgress.courses).reduce((total, course) => {
      return total + Object.keys(course.lessons).length;
    }, 0);
  };

  const getTotalQuizzesCompleted = () => {
    if (!userProgress) return 0;
    return Object.values(userProgress.courses).reduce((total, course) => {
      return total + Object.keys(course.quizzes).length;
    }, 0);
  };

  const getInProgressCourses = () => {
    if (!userProgress) return [];
    
    return courses.filter(course => {
      const courseProgress = userProgress.courses[course.id];
      if (!courseProgress) return false;
      
      const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
      const completedLessons = Object.keys(courseProgress.lessons).length;
      
      return completedLessons > 0 && completedLessons < totalLessons;
    }).map(course => {
      const courseProgress = userProgress.courses[course.id];
      const totalLessons = course.sections.reduce((acc, section) => acc + section.lessons.length, 0);
      const completedLessons = Object.keys(courseProgress.lessons).length;
      const progress = Math.round((completedLessons / totalLessons) * 100);
      
      return { ...course, progress };
    });
  };

  const getRecentAchievements = () => {
    // This would typically come from a more detailed progress tracking system
    const achievements = [];
    
    if (getTotalLessonsCompleted() >= 10) {
      achievements.push({ title: 'Lesson Master', description: 'Completed 10+ lessons', icon: BookOpen });
    }
    
    if (userProgress?.totalPoints && userProgress.totalPoints >= 500) {
      achievements.push({ title: 'Point Collector', description: 'Earned 500+ points', icon: Trophy });
    }
    
    if (getTotalQuizzesCompleted() >= 5) {
      achievements.push({ title: 'Quiz Champion', description: 'Completed 5+ quizzes', icon: Star });
    }
    
    return achievements.slice(0, 3);
  };

  const inProgressCourses = getInProgressCourses();
  const recentAchievements = getRecentAchievements();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {currentUser?.displayName || 'Learner'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Continue your frontend development journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTotalLessonsCompleted()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lessons Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userProgress?.totalPoints || 0}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTotalQuizzesCompleted()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quizzes Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userProgress?.rank || 'Novice'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Rank</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Continue Learning
                </h2>
                <Link
                  to="/courses"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  View All Courses
                </Link>
              </div>

              {inProgressCourses.length > 0 ? (
                <div className="space-y-4">
                
                  {inProgressCourses.map((course) => {
                    const IconComponent = Icons[course.icon as keyof typeof Icons] as React.ComponentType<any>;
                    
                    return (
                      <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                        className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {course.title}
                            </h3>
                            <div className="flex items-center mt-2">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-3">
                                <div 
                                  className={`h-2 rounded-full ${course.color} transition-all duration-300`}
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {course.progress}%
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No courses in progress
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Start learning by choosing a course
                  </p>
                  <Link
                    to="/courses"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Recent Achievements
              </h2>

              {recentAchievements.length > 0 ? (
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mr-3">
                        <achievement.icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <Trophy className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete lessons to earn achievements
                  </p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              
              <div className="space-y-3">
                <Link
                  to="/courses"
                  className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  <span className="font-medium">Browse Courses</span>
                </Link>
                
                <Link
                  to="/leaderboard"
                  className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <Trophy className="w-5 h-5 mr-3" />
                  <span className="font-medium">View Leaderboard</span>
                </Link>
                
                <Link
                  to="/profile"
                  className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <TrendingUp className="w-5 h-5 mr-3" />
                  <span className="font-medium">View Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;