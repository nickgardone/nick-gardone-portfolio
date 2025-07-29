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
        className={`group relative overflow-hidden rounded-2xl cursor-pointer h-full flex flex-col ${
          featured ? 'col-span-full lg:col-span-2' : ''
        }`}
        onClick={handleProjectClick}
      >
        {/* Background Image */}
        <div className="relative h-[320px] overflow-hidden flex flex-col h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 to-dark-950/90 z-10" />
          <div className="absolute inset-0 bg-dark-800" />
          
          {/* Overlay Content */}
          <div className="relative z-20 h-full flex flex-col p-6 justify-between">
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-2">
                {Array.isArray(tags)
                  ? tags.slice(0, 4).map((tag, idx) => (
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
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">Featured</span>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-3 flex-grow">
              {/* Title and Role */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-200 line-clamp-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-1">
                  {role}
                </p>
              </div>

              {/* Headline */}
              <p className="text-sm text-gray-300 font-medium leading-relaxed line-clamp-2">
                {headline}
              </p>

              {/* Overview */}
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                {overview}
              </p>
            </div>

            {/* CTA Button */}
            <div className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm group/link transition-colors duration-200 mt-4">
              <span>View Details</span>
              <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform duration-200" />
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
