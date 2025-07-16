'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, Award } from 'lucide-react';

const CaseStudyPage = ({ project, onBack }) => {
  const {
    title,
    subtitle,
    description,
    image,
    category,
    duration,
    teamSize,
    role,
    problem,
    solution,
    process,
    results,
    technologies,
    challenges,
    learnings,
    link,
  } = project;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-dark-950"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-950/90 via-dark-950/80 to-dark-950/95 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container-custom text-center px-4">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full border border-primary-500/30">
                {category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex items-center justify-center space-x-4 pt-8">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <ArrowLeft size={18} />
                <span>Back to Portfolio</span>
              </motion.button>

              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>View Live Project</span>
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Target size={24} className="text-primary-400" />
                    <span>The Problem</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{problem}</p>
                </div>

                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                    <TrendingUp size={24} className="text-accent-400" />
                    <span>The Solution</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{solution}</p>
                </div>
              </motion.div>

              {/* Process */}
              <motion.div variants={itemVariants} className="card">
                <h2 className="text-2xl font-bold text-white mb-6">Process & Approach</h2>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div variants={itemVariants} className="card">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Award size={24} className="text-accent-400" />
                  <span>Results & Impact</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((result, index) => (
                    <div key={index} className="p-4 bg-dark-800 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-2">{result.title}</h3>
                      <p className="text-gray-300 text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Learnings */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4">Key Challenges</h2>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h2 className="text-2xl font-bold text-white mb-4">Key Learnings</h2>
                  <ul className="space-y-3">
                    {learnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Role</span>
                    <p className="text-white font-medium">{role}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudyPage; 