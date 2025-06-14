import React, { useState } from 'react';
import { User, Mail, Calendar, Trophy, BookOpen, Star, Edit2, Save, X,} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useProgress } from '../../contexts/ProgressContext';
import { updateProfile } from 'firebase/auth';
import { useTheme } from '../../contexts/ThemeContext';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const { userProgress } = useProgress();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSave = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      await updateProfile(currentUser, { displayName });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update profile');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setDisplayName(currentUser?.displayName || '');
    setIsEditing(false);
  };

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

  const getCoursesStarted = () => {
    if (!userProgress) return 0;
    return Object.keys(userProgress.courses).length;
  };

  const getJoinDate = () => {
    if (!currentUser?.metadata?.creationTime) return 'Unknown';
    return new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your account and track your learning progress
          </p>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-400 text-center">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                      >
                        <Save className="w-4 h-4 mr-1" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {currentUser?.displayName || 'Anonymous User'}
                    </h2>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors"
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit Name
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="text-sm">{currentUser?.email}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span className="text-sm">Joined {getJoinDate()}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Trophy className="w-5 h-5 mr-3" />
                  <span className="text-sm">Rank: {userProgress?.rank || 'Novice'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {getTotalLessonsCompleted()}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Lessons</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {getTotalQuizzesCompleted()}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Quizzes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                    <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {userProgress?.totalPoints || 0}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Points</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {getCoursesStarted()}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Courses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Learning Progress
              </h3>
              
              {userProgress && Object.keys(userProgress.courses).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(userProgress.courses).map(([courseId, courseProgress]) => {
                    const totalLessons = Object.keys(courseProgress.lessons).length;
                    const totalQuizzes = Object.keys(courseProgress.quizzes).length;
                    
                    return (
                      <div key={courseId} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                            {courseId.replace('-', ' ')}
                          </h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {courseProgress.totalPoints} points
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {totalLessons} lessons completed • {totalQuizzes} quizzes completed
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No progress yet
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start learning to see your progress here
                  </p>
                </div>
              )}
            </div>

            {/* Account Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Account Settings
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your progress</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Toggle dark mode theme</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer"  checked={isDarkMode} onChange={toggleDarkMode}/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;