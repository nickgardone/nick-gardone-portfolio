'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Users } from 'lucide-react';

const ProjectTeaser = ({ project, index }) => {
  const {
    title,
    description,
    image,
    category,
    duration,
    teamSize,
    technologies,
    link,
    featured = false,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-2xl ${
        featured ? 'col-span-full lg:col-span-2' : ''
      }`}
    >
      {/* Background Image */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 to-dark-950/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Overlay Content */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                {category}
              </span>
              {featured && (
                <span className="inline-block px-3 py-1 bg-accent-600/20 text-accent-400 text-xs font-medium rounded-full border border-accent-500/30 ml-2">
                  Featured
                </span>
              )}
            </div>
            
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-dark-800/50 border border-gray-700 text-gray-300 hover:text-white hover:bg-dark-700/50 transition-all duration-200 backdrop-blur-sm"
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar size={12} />
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={12} />
                <span>{teamSize}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-800/50 text-gray-300 text-xs rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 bg-dark-800/50 text-gray-500 text-xs rounded border border-gray-700">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="absolute bottom-6 left-6 right-6">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium text-sm group/link"
          >
            <span>View Case Study</span>
            <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectTeaser; 