'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectSummaryGrid from '../../components/ProjectSummaryGrid';

export default function Projects() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A comprehensive collection of impactful projects showcasing product strategy, 
              technical leadership, and business transformation across fintech and retail.
            </p>
            <p className="text-lg text-gray-400">
              Each project demonstrates measurable business outcomes, user-centered design, 
              and cross-functional team leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Summary Grid */}
      <ProjectSummaryGrid />

      {/* Additional CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/Nick_Gardone_Resume_2025.pdf"
                download="Nick_Gardone_Resume_2025.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
