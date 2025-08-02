'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-accent-900/10" />
        <div className="relative z-10 container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Privacy Policy for <span className="gradient-text">n8n Instagram App</span>
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto bg-dark-900 border border-gray-800 rounded-xl p-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg mb-8">
                This Privacy Policy explains how we collect, use, and protect your information when you use our n8n Instagram App.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">• Data Collection</h2>
                  <p className="text-gray-300">
                    We collect only the data necessary to manage Instagram content posting (e.g., access tokens, media captions).
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">• Usage</h2>
                  <p className="text-gray-300">
                    Data is used solely for automating posts to Instagram via the n8n workflow platform.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">• Storage & Protection</h2>
                  <p className="text-gray-300">
                    Data is stored securely and not shared with third parties.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">• User Rights</h2>
                  <p className="text-gray-300">
                    You can request data deletion by contacting <a href="mailto:ngardone@gmail.com" className="text-primary-400 hover:text-primary-300">ngardone@gmail.com</a>.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-300">
                    For questions, contact us at <a href="mailto:ngardone@gmail.com" className="text-primary-400 hover:text-primary-300">ngardone@gmail.com</a>.
                  </p>
                  <p className="text-gray-400 mt-4">
                    Effective Date: August 2, 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
