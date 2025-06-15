import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Scale, Zap } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Terms of Service
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Last updated: January 2025
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to FrontendWithGouse! These Terms of Service govern your use of our free frontend development learning platform. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center mb-4">
                <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Acceptance of Terms
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  By creating an account, accessing, or using FrontendWithGouse, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform.
                </p>
                <p>
                  These terms apply to all users of the platform, including visitors, registered users, and contributors.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Description of Service
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  FrontendWithGouse is a free educational platform that provides:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Interactive frontend development courses and tutorials</li>
                  <li>Hands-on coding exercises and projects</li>
                  <li>Progress tracking and achievement systems</li>
                  <li>Code playgrounds for practice and experimentation</li>
                  <li>Quizzes and assessments to test your knowledge</li>
                  <li>Community features including leaderboards</li>
                </ul>
                <p>
                  Our platform is designed to help learners master HTML, CSS, JavaScript, React, and other frontend technologies through practical, project-based learning.
                </p>
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  User Accounts and Registration
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Creation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You must be at least 13 years old to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                    <li>You must not share your account credentials with others</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Keep your login information secure and confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Update your information to keep it current and accurate</li>
                    <li>Use the platform only for lawful educational purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Acceptable Use Policy
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>You agree to use our platform responsibly and in accordance with these guidelines:</p>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Permitted Uses</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Learning frontend development skills and technologies</li>
                    <li>Completing courses, quizzes, and coding exercises</li>
                    <li>Creating and sharing educational code projects</li>
                    <li>Participating in community features like leaderboards</li>
                    <li>Using our content for personal educational purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Prohibited Activities</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Sharing inappropriate, offensive, or harmful content</li>
                    <li>Attempting to hack, disrupt, or damage our platform</li>
                    <li>Creating multiple accounts to manipulate rankings</li>
                    <li>Redistributing our content without permission</li>
                    <li>Using automated tools to access our services</li>
                    <li>Impersonating others or providing false information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Content and Intellectual Property */}
            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Content and Intellectual Property
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Our Content</h3>
                  <p>
                    All educational content, courses, tutorials, and materials provided on FrontendWithGouse are owned by us or our licensors. This includes but is not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your Content</h3>
                  <p>
                    You retain ownership of any code, projects, or content you create using our platform. However, by using our services, you grant us a non-exclusive license to host, display, and distribute your content as necessary to provide our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">License to Use</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our platform for personal educational purposes. You may not modify, distribute, or create derivative works based on our content without explicit permission.
                  </p>
                </div>
              </div>
            </section>

            {/* Free Service */}
            <section>
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Free Service and Availability
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  FrontendWithGouse is currently provided as a free educational service. We reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Modify, suspend, or discontinue any part of our service</li>
                  <li>Introduce premium features or paid services in the future</li>
                  <li>Set usage limits or restrictions as necessary</li>
                  <li>Update our platform and content without prior notice</li>
                </ul>
                <p>
                  We strive to maintain high availability but cannot guarantee uninterrupted access to our services.
                </p>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Privacy and Data Protection
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
                </p>
                <p>
                  By using our platform, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Disclaimers and Limitations
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Educational Purpose</h3>
                  <p>
                    Our platform is designed for educational purposes. While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, accuracy, or suitability of our content for any particular purpose.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Guarantees</h3>
                  <p>
                    We do not guarantee that our platform will meet your specific learning needs or that you will achieve particular outcomes from using our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Third-Party Content</h3>
                  <p>
                    Our platform may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or availability of such external sites.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Termination
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  You may terminate your account at any time by contacting us or using the account deletion features in your profile settings.
                </p>
                <p>
                  We reserve the right to suspend or terminate your account if you violate these Terms of Service or engage in activities that harm our platform or other users.
                </p>
                <p>
                  Upon termination, your access to our services will cease, and we may delete your account data in accordance with our Privacy Policy.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Changes to Terms
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p>
                  We may update these Terms of Service from time to time to reflect changes in our services or legal requirements. We will notify users of significant changes by posting the updated terms on our platform and updating the "Last updated" date.
                </p>
                <p className="mt-4">
                  Your continued use of our platform after any changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h2>
              </div>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p className="mb-4">
                  If you have any questions about these Terms of Service or need support, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:rahiman2100@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rahiman2100@gmail.com</a></p>
                  <p><strong>Website:</strong> <a href="https://itsgouse.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://itsgouse.vercel.app</a></p>
                  <p><strong>Platform:</strong> FrontendWithGouse Learning Platform</p>
                </div>
                <p className="mt-4 text-sm">
                  We aim to respond to all inquiries within 48 hours during business days.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;