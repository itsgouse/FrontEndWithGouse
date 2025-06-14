import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Plus,
  Search,
  Calendar,
  Trash2,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

interface SavedPlayground {
  id: string;
  type: 'web';
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const PlaygroundsPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [playgrounds, setPlaygrounds] = useState<SavedPlayground[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    loadPlaygrounds();
  }, [currentUser]);

  const loadPlaygrounds = async () => {
    if (!currentUser) return;

    try {
      const webPlaygrounds: SavedPlayground[] = [];

      const webQuery = query(
        collection(db, 'users', currentUser.uid, 'playgrounds', 'web', 'snippets'),
        orderBy('updatedAt', 'desc')
      );
      const webSnapshot = await getDocs(webQuery);
      webSnapshot.forEach((doc) => {
        const data = doc.data();
        webPlaygrounds.push({
          id: doc.id,
          type: 'web',
          title: data.title,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        });
      });

      setPlaygrounds(webPlaygrounds);
    } catch (error) {
      console.error('Error loading playgrounds:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePlayground = async (playground: SavedPlayground) => {
    if (!window.confirm('Are you sure you want to delete this playground?')) return;

    try {
      await deleteDoc(doc(db, 'users', currentUser!.uid, 'playgrounds', playground.type, 'snippets', playground.id));
      setPlaygrounds(playgrounds.filter(p => p.id !== playground.id));
    } catch (error) {
      console.error('Error deleting playground:', error);
    }
  };

  const filteredPlaygrounds = playgrounds.filter(playground => {
    const matchesSearch = playground.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || playground.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    return 'bg-blue-500';
  };

  const getTypeIcon = (type: string) => {
    return <Globe className="w-4 h-4 text-white" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading playgrounds...</p>
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
            <Code className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Code Playgrounds
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practice coding with interactive playgrounds and save your work
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Web Playground Card */}
          <Link
            to="/playgrounds/web/new"
            className="group flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-200">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Web Playground
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  HTML, CSS, and JavaScript in one place
                </p>
              </div>
            </div>
            <div className="flex items-center text-white bg-blue-500 hover: bg-blue-500 px-4 py-2 rounded-lg font-medium justify-center mt-2 sm:mt-4 transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              Create New Web Playground
            </div>
          </Link>

          {/* CodeSandbox Card */}
          <a
            href="https://codesandbox.io/s/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-200">
                <ExternalLink className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                 React CodeSandbox
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Practice with full-featured online IDE for React
                </p>
              </div>
            </div>
            <div className="flex items-center text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium justify-center mt-2 sm:mt-4 transition-colors">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in CodeSandbox
            </div>
          </a>
        </div>


        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search saved playgrounds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Saved Playgrounds */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Saved Playgrounds ({filteredPlaygrounds.length})
            </h2>
          </div>

          {filteredPlaygrounds.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredPlaygrounds.map((playground) => (
                <div
                  key={playground.id}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div
                        className={`w-12 h-12 ${getTypeColor(playground.type)} rounded-lg flex items-center justify-center mr-4`}
                      >
                        {getTypeIcon(playground.type)}
                      </div>
                      <div className="flex-1">
                        <Link
                          to={`/playgrounds/${playground.type}/${playground.id}`}
                          className="block"
                        >
                          <h3 className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {playground.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <span className="capitalize">Web Playground</span>
                            <span className="mx-2">•</span>
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>
                              Updated {playground.updatedAt.toLocaleDateString()}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/playgrounds/${playground.type}/${playground.id}`}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        Open
                      </Link>
                      <button
                        onClick={() => deletePlayground(playground)}
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No playgrounds found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm || selectedType !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Create your first playground to start coding'}
              </p>
              <Link
                to="/playgrounds/web/new"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Playground
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaygroundsPage;
