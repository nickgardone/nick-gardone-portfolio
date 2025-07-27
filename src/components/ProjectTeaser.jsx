'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Users } from 'lucide-react';
import ProjectModal from './ProjectModal';

const ProjectTeaser = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const {
    title,
    role,
    headline,
    overview,
    image,
    tags,
    link,
    featured = false,
    hasCaseStudy = false,
    hasDemo = false,
  } = project;

  const handleProjectClick = () => {
    // Convert project data to modal format
    const modalData = {
      title,
      role,
      headline,
      overview,
      tags,
      link,
      hasCaseStudy,
      hasDemo
    };
    setModalProject(modalData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
          featured ? 'col-span-full lg:col-span-2' : ''
        }`}
        onClick={handleProjectClick}
      >
        {/* Background Image */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 to-dark-950/90 z-10" />
          <div className="absolute inset-0 bg-dark-800" />
          
          {/* Overlay Content */}
          <div className="relative z-20 h-full flex flex-col justify-between p-6">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                {Array.isArray(tags)
                  ? tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))
                  : (
                      <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30">
                        {tags}
                      </span>
                    )}
                {featured && (
                  <span className="inline-block px-3 py-1 bg-accent-600/20 text-accent-400 text-xs font-medium rounded-full border border-accent-500/30 ml-2">
                    Featured
                  </span>
                )}
              </div>
              
              <motion.div
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-dark-800/50 border border-gray-700 text-gray-300 hover:text-white hover:bg-dark-700/50 transition-all duration-200 backdrop-blur-sm"
              >
                <ExternalLink size={16} />
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {headline}
                </p>
              </div>

              {/* Project Meta */}
              {/* Removed duration and team size display */}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {Array.isArray(tags)
                  ? tags.slice(3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-dark-800/50 text-gray-300 text-xs rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))
                  : null}
                {Array.isArray(tags) && tags.length > 6 && (
                  <span className="px-2 py-1 bg-dark-800/50 text-gray-500 text-xs rounded border border-gray-700">
                    +{tags.length - 6} more
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
            <div className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium text-sm group/link">
              <span>View Details</span>
              <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            project={modalProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectTeaser;
