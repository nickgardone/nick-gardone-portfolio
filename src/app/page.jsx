'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectTeaser from '../components/ProjectTeaser';

export default function Home() {
  const featuredProjects = [
    {
      title: "E-commerce Platform Redesign",
      description: "Led the complete redesign of a major e-commerce platform, resulting in 40% increase in conversion rates and 25% improvement in user engagement.",
      image: "/api/placeholder/600/400",
      category: "Product Strategy",
      duration: "6 months",
      teamSize: "8 people",
      technologies: ["React", "Node.js", "AWS", "Analytics"],
      link: "/portfolio/ecommerce-redesign",
      featured: true,
    },
    {
      title: "Mobile App Launch",
      description: "Successfully launched a mobile app from concept to 100K+ downloads, managing cross-functional teams and stakeholder expectations.",
      image: "/api/placeholder/600/400",
      category: "Mobile Product",
      duration: "12 months",
      teamSize: "12 people",
      technologies: ["React Native", "Firebase", "Stripe", "Analytics"],
      link: "/portfolio/mobile-app-launch",
    },
    {
      title: "SaaS Platform Optimization",
      description: "Optimized a SaaS platform's user onboarding flow, reducing churn by 30% and increasing trial-to-paid conversion by 45%.",
      image: "/api/placeholder/600/400",
      category: "Growth",
      duration: "4 months",
      teamSize: "6 people",
      technologies: ["A/B Testing", "Analytics", "User Research"],
      link: "/portfolio/saas-optimization",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Products Launched", value: "15+" },
    { label: "Team Members Led", value: "50+" },
    { label: "Revenue Impact", value: "$10M+" },
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
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-lg opacity-30" />
              <img
                src="/profile.jpg"
                alt="Nick Gardone"
                className="relative w-full h-full rounded-full object-cover border-4 border-dark-800"
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
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
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
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of my most impactful work, showcasing product strategy, 
              user experience design, and business outcomes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectTeaser key={project.title} project={project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* About Preview */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Senior Product Manager with over 8 years of experience building 
                and scaling digital products. I've worked with startups and enterprise 
                companies, always focusing on user needs and business outcomes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach combines data-driven decision making with creative problem 
                solving, ensuring that every product I work on delivers real value to 
                users and drives business growth.
              </p>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Product Strategy',
                    'User Research',
                    'Data Analysis',
                    'Team Leadership',
                    'Agile/Scrum',
                    'A/B Testing',
                    'User Experience',
                    'Stakeholder Management'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 