import React from 'react';
import { Monitor, Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold">
                Frontend<span className="text-blue-400">WithGouse</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Master frontend development with comprehensive courses covering everything from basic HTML to advanced system design. 
              Learn at your own pace with interactive lessons and quizzes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/itsgouse" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://itsgouse.vercel.app/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/shaik-gouse-rahiman-460078144/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rahiman2100@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="text-gray-400 hover:text-white transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses/html" className="text-gray-400 hover:text-white transition-colors">
                  HTML Fundamentals
                </a>
              </li>
              <li>
                <a href="/courses/css" className="text-gray-400 hover:text-white transition-colors">
                  CSS Styling
                </a>
              </li>
              <li>
                <a href="/courses/javascript" className="text-gray-400 hover:text-white transition-colors">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="/courses/react" className="text-gray-400 hover:text-white transition-colors">
                  React Development
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FrontendWithGouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;