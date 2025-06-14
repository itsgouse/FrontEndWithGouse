import React from 'react';
import { BookOpen, Trophy, Users, BarChart3, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Lessons',
    description: 'Learn through hands-on coding exercises and real-world projects that build practical skills.',
    color: 'bg-blue-500'
  },
  {
    icon: Trophy,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress tracking and achievement badges.',
    color: 'bg-yellow-500'
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Join a vibrant community of learners and compete on the global leaderboard.',
    color: 'bg-green-500'
  },
  {
    icon: BarChart3,
    title: 'Skill Assessment',
    description: 'Test your knowledge with comprehensive quizzes and get instant feedback.',
    color: 'bg-purple-500'
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    description: 'Learn at your own pace with flexible scheduling that fits your lifestyle.',
    color: 'bg-orange-500'
  },
  {
    icon: Shield,
    title: 'Industry Standards',
    description: 'Learn current industry best practices and modern development workflows.',
    color: 'bg-red-500'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose FrontendWithGouse?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform is designed to provide the most effective and engaging learning experience 
            for aspiring frontend developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Trophy className="w-5 h-5 mr-2" />
            Start Your Journey Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;