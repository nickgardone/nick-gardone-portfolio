'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { loadRecaptchaScript, executeRecaptcha } from '../utils/recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = async () => {
      try {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (siteKey) {
          await loadRecaptchaScript(siteKey);
        } else {
          console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY not set, skipping reCAPTCHA load');
        }
      } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
      }
    };

    loadRecaptcha();
  }, []);

  // Execute reCAPTCHA and get token
  const executeRecaptchaToken = async () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || siteKey === 'your_recaptcha_site_key_here') {
      console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY not set or using placeholder, using mock token');
      const mockToken = 'mock-token';
      setRecaptchaToken(mockToken);
      return mockToken;
    }
    
    try {
      const token = await executeRecaptcha(siteKey, 'contact_form');
      console.log('reCAPTCHA token:', token); // Debug log
      setRecaptchaToken(token);
      return token;
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      setError('Failed to verify spam protection. Please try again.');
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const TIMEOUT_MS = 15000; // 15 seconds
    let timeoutId;
    let didTimeout = false;

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptchaToken();

      // Timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          didTimeout = true;
          reject(new Error('Request timed out. Please try again later.'));
        }, TIMEOUT_MS);
      });

      // API call with timeout
      const response = await Promise.race([
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recaptchaToken: token
          }),
        }),
        timeoutPromise
      ]);

      if (didTimeout) return;
      clearTimeout(timeoutId);

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // Provide more specific error messages
        if (result.details) {
          setError(`${result.message} - ${result.details}`);
        } else {
          setError(result.message || 'Failed to send message. Please try again later.');
        }
      }
    } catch (error) {
      setError(error.message || 'Failed to send message. Please try again later.');
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-gray-300 mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href="mailto:NGardone@Gmail.com" className="text-blue-400 hover:text-blue-300">
                      NGardone@Gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <a href="tel:+15857470213" className="text-blue-400 hover:text-blue-300">
                      +1 (585) 747-0213
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">Dallas, TX</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/nickgardone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://github.com/nickgardone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-red-400">{error}</span>
                      {error.includes('configured') && (
                        <p className="text-red-300 text-sm mt-2">
                          If you're the site administrator, please check the{' '}
                          <a 
                            href="https://github.com/nickgardone/nick-gardone-portfolio/blob/main/CONTACT_FORM_TROUBLESHOOTING.md" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                          >
                            troubleshooting guide
                          </a>{' '}
                          for detailed setup instructions.
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Hidden reCAPTCHA token input */}
                <input type="hidden" name="recaptchaToken" value={recaptchaToken} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
