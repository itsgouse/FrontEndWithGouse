import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, Crown, TrendingUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useProgress } from '../../contexts/ProgressContext';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface LeaderboardUser {
  id: string;
  displayName: string;
  totalPoints: number;
  rank: string;
}

const Leaderboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { userProgress } = useProgress();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRank, setUserRank] = useState<number | null>(null);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      // In a real app, you'd query user profiles with progress data
      // For demo purposes, we'll create mock data with the current user
      const mockData: LeaderboardUser[] = [
        { id: '1', displayName: 'Alex Chen', totalPoints: 4500, rank: 'Expert' },
        { id: '2', displayName: 'Sarah Johnson', totalPoints: 3800, rank: 'Advanced' },
        { id: '3', displayName: 'Mike Rodriguez', totalPoints: 3200, rank: 'Advanced' },
        { id: '4', displayName: 'Emily Davis', totalPoints: 2900, rank: 'Intermediate' },
        { id: '5', displayName: 'David Kim', totalPoints: 2400, rank: 'Intermediate' },
        { id: '6', displayName: 'Lisa Wang', totalPoints: 1800, rank: 'Intermediate' },
        { id: '7', displayName: 'John Smith', totalPoints: 1200, rank: 'Beginner' },
        { id: '8', displayName: 'Anna Brown', totalPoints: 900, rank: 'Beginner' },
        { id: '9', displayName: 'Tom Wilson', totalPoints: 600, rank: 'Beginner' },
        { id: '10', displayName: 'Grace Lee', totalPoints: 300, rank: 'Novice' },
      ];

      // Add current user if they have progress
      if (currentUser && userProgress && userProgress.totalPoints > 0) {
        const currentUserData: LeaderboardUser = {
          id: currentUser.uid,
          displayName: currentUser.displayName || 'You',
          totalPoints: userProgress.totalPoints,
          rank: userProgress.rank
        };

        // Remove any existing entry for current user and add them
        const filteredData = mockData.filter(user => user.id !== currentUser.uid);
        const allData = [...filteredData, currentUserData];
        
        // Sort by points
        allData.sort((a, b) => b.totalPoints - a.totalPoints);
        
        // Find user's rank
        const userIndex = allData.findIndex(user => user.id === currentUser.uid);
        setUserRank(userIndex + 1);
        
        setLeaderboardData(allData.slice(0, 20)); // Top 20
      } else {
        setLeaderboardData(mockData);
      }
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-500">#{position}</span>;
    }
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Expert':
        return 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300';
      case 'Advanced':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300';
      case 'Intermediate':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300';
      case 'Beginner':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading leaderboard...</p>
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
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Leaderboard
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how you rank against other learners in the FrontendWithGouse community
          </p>
        </div>

        {/* User's Current Rank */}
        {userRank && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">Your Current Rank</h2>
                <p className="text-blue-100">Keep learning to climb higher!</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">#{userRank}</div>
                <div className="text-blue-100">{userProgress?.totalPoints} points</div>
              </div>
            </div>
          </div>
        )}

        {/* Rank System Explanation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Rank System
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { rank: 'Novice', points: '0-499', color: 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-300' },
              { rank: 'Beginner', points: '500-1499', color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300' },
              { rank: 'Intermediate', points: '1500-2999', color: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' },
              { rank: 'Advanced', points: '3000-4999', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300' },
              { rank: 'Expert', points: '5000+', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300' },
            ].map((item) => (
              <div key={item.rank} className="text-center">
                <div className={`px-3 py-2 rounded-lg ${item.color} mb-2`}>
                  <div className="font-semibold text-sm">{item.rank}</div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{item.points} pts</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Top Learners
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {leaderboardData.map((user, index) => (
              <div
                key={user.id}
                className={`p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  user.id === currentUser?.uid ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex items-center justify-center w-10">
                    {getRankIcon(index + 1)}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {user.displayName}
                      {user.id === currentUser?.uid && (
                        <span className="ml-2 text-sm text-blue-600 dark:text-blue-400">(You)</span>
                      )}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRankColor(user.rank)}`}>
                        {user.rank}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-gray-900 dark:text-white">
                    {user.totalPoints.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivation */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl">
          <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Keep Learning!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete lessons and quizzes to earn points and climb the leaderboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;