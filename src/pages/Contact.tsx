import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Github, Linkedin, ArrowLeft, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service)
    try {
      // Here you would integrate with an email service like EmailJS, Formspree, or your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatusMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' });
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialLinks = [
    { href: "https://github.com/itsgouse", icon: <Github />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shaik-gouse-rahiman-460078144/", icon: <Linkedin />, label: "LinkedIn" },
    { href: "https://itsgouse.vercel.app", icon: <Globe />, label: "Portfolio" }
  ];

  const contactInfo = [
    { label: "Phone", text: "+91 7658967576", icon: <Phone className="w-6 h-6" /> },
    { label: "Email", text: "rahiman2100@gmail.com", icon: <Mail className="w-6 h-6" /> },
    { label: "Location", text: "Bengaluru, India", icon: <MapPin className="w-6 h-6" /> }
  ];

  const formFields = [
    { id: 'name', type: 'text', label: 'Name', value: formData.name },
    { id: 'email', type: 'email', label: 'Email', value: formData.email },
    { id: 'subject', type: 'text', label: 'Subject', value: formData.subject }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get in touch via the form or social links below. I'd love to hear from you!
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div
            className="space-y-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className='border-b dark:border-gray-700 pb-6'>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Shaik Gouse Rahiman</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Senior Software Engineer | Frontend Developer</p>
                </div>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      {React.cloneElement(link.icon, { className: 'w-6 h-6' })}
                    </motion.a>
                  ))}
                </div>
              </div>
              <p className="text-gray-800 dark:text-white mt-4">
                Available for freelance and full-time opportunities. Let's build something amazing together!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center transform transition-transform hover:rotate-12">
                  {React.cloneElement(info.icon, { className: 'text-blue-600 dark:text-blue-400' })}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{info.label}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{info.text}</p>
                </div>
              </motion.div>
            ))}


          </motion.div>

          {/* Right Column */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <motion.div key={field.id} variants={itemVariants} className="relative">
                  <label
                    htmlFor={field.id}
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${focusedField === field.id || field.value
                      ? '-top-2.5 text-xs bg-white dark:bg-gray-800 px-2 text-blue-600 dark:text-blue-400'
                      : 'top-3 text-sm text-gray-600 dark:text-gray-300'
                      }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={field.value}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${focusedField === 'message' || formData.message
                    ? '-top-2.5 text-xs bg-white dark:bg-gray-800 px-2 text-blue-600 dark:text-blue-400'
                    : 'top-3 text-sm text-gray-600 dark:text-gray-300'
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </motion.div>

              {statusMessage.text && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm ${statusMessage.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                    : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700'
                    }`}
                >
                  {statusMessage.text}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mt-6 shadow-lg border border-gray-200 dark:border-gray-700"
          variants={itemVariants}
        >
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            About FrontendWithGouse
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            This platform is my passion project to help aspiring developers master frontend technologies.
            Whether you have questions about the courses, suggestions for improvement, or just want to connect,
            I'm always excited to hear from fellow developers and learners.
            <br /><br />
            Join, learn, and grow — one lesson at a time.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;