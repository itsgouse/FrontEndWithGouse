import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Privacy Policy
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Last updated: January 2025
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At FrontendWithGouse, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our frontend development learning platform.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Information We Collect
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name and email address when you create an account</li>
                    <li>Profile information you choose to provide</li>
                    <li>Authentication data from third-party providers (Google)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Learning Data</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Course progress and completion status</li>
                    <li>Quiz scores and assessment results</li>
                    <li>Bookmarked lessons and content preferences</li>
                    <li>Code snippets and playground projects you create</li>
                    <li>Learning analytics and usage patterns</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage analytics and performance metrics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  How We Use Your Information
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Platform Services</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide access to courses, lessons, and learning materials</li>
                    <li>Track your learning progress and achievements</li>
                    <li>Personalize your learning experience</li>
                    <li>Enable interactive features like quizzes and playgrounds</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Communication</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Send important updates about your account</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Share educational content and platform improvements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Platform Improvement</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Develop new features and educational content</li>
                    <li>Ensure platform security and prevent abuse</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Data Security
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication using Firebase Auth</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and monitoring systems</li>
                  <li>Secure cloud infrastructure with Google Firebase</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Data Sharing and Disclosure
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (Google Firebase, analytics providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Your Rights and Choices
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Export your learning data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:rahiman2100@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rahiman2100@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Cookies and Tracking
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for platform functionality and security</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, but disabling certain cookies may affect platform functionality.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Children's Privacy
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p>
                  Our platform is designed for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Policy Updates
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our platform and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Contact Us
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:rahiman2100@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rahiman2100@gmail.com</a></p>
                  <p><strong>Website:</strong> <a href="https://itsgouse.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://itsgouse.vercel.app</a></p>
                  <p><strong>Platform:</strong> FrontendWithGouse Learning Platform</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;