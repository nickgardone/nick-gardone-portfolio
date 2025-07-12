'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Handle escape key and prevent body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  const {
    title,
    role,
    headline,
    overview,
    duration,
    teamSize,
    tags
  } = project;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl max-h-[90vh] bg-dark-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-dark-900">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{headline}</p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Detailed Description</h3>
            <p className="text-gray-300 leading-relaxed">{overview}</p>
          </div>

          {/* Project Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{teamSize}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal; 