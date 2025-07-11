'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectSummaryGrid from '../components/ProjectSummaryGrid';
import RecommendationsCarousel from '../components/RecommendationsCarousel';

export default function Home() {

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Products Launched", value: "15+" },
    { label: "Team Members Led", value: "50+" },
    { label: "Revenue Impact", value: "$100M+" },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20" />
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ float: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ float: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-xl"
          />
        </div>
        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-56 h-56 md:w-72 md:h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-lg opacity-30" />
              <img
                src="/profile-headshot-2.png"
                alt="Nick Gardone"
                className="relative w-full h-full rounded-full object-cover border-4 border-dark-800 object-center scale-140"
                style={{ objectPosition: 'center 5%' }}
              />
            </motion.div>
            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Hi, I'm <span className="gradient-text">Nick Gardone</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Senior Product Manager passionate about building user-centric products 
                that drive business growth and create meaningful impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                I specialize in product strategy, user experience design, and cross-functional 
                team leadership. Let's build something amazing together.
              </motion.p>
            </div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center space-x-6 pt-8"
            >
              <motion.a
                href="mailto:nick@nickgardone.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nickgardone"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-300 hover:text-blue-400 hover:bg-dark-700 transition-all duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/nickgardone"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-300 hover:text-gray-400 hover:bg-dark-700 transition-all duration-200"
              >
                <Github size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Featured Projects */}
      <ProjectSummaryGrid />
      {/* Recommendations Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recommendations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What my colleagues say about working with me.
            </p>
          </motion.div>
          <RecommendationsCarousel
            recommendations={[
              {
                text: 'Nick is an outstanding product manager who always puts the user first. His leadership and vision were key to our project’s success.',
                name: 'Jane Doe',
                role: 'Lead Designer, Acme Corp',
                avatar: '/profile.jpg',
              },
              {
                text: 'Working with Nick was a pleasure. He communicates clearly and drives results with a positive attitude.',
                name: 'John Smith',
                role: 'Engineering Manager, Beta Inc',
                avatar: '/profile-headshot-2.png',
              },
              {
                text: 'Nick’s strategic thinking and attention to detail set him apart. He’s a true asset to any team.',
                name: 'Emily Chen',
                role: 'Product Owner, Gamma LLC',
                avatar: '/Profile-headshot.png',
              },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
} 