'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Clock, Users, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const ProjectSummaryGrid = ({ limit, showViewAllAfter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Chase MyHome Platform",
      role: "VP, Senior Product Manager @ JPMorgan Chase",
      headline: "Launched home lending platform used by 5M+ customers, driving 2M+ visits.",
      overview: "Built a self-service digital mortgage platform integrated into Chase Mobile & Web, increasing HELOC applications by 4%.",
      tags: ["Enterprise", "Fintech", "React", "SaaS"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "AI-Powered Feedback Insights",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Transformed call data into product insights using LLMs.",
      overview: "Used AI to summarize customer service calls, categorize sentiment, and reduce post-call work for agents.",
      tags: ["AI/ML", "LLM", "Customer Experience", "Automation"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: true
    },
    {
      title: "Checkout Conversion Uplift",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Drove $36M+ in annual revenue via improved checkout UX.",
      overview: "Led experimentation and UX optimization to increase conversion rates across e-commerce properties.",
      tags: ["A/B Testing", "E-commerce", "Analytics", "UX"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Digital Storefront Adoption",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Boosted tool adoption from 60% to 82%, driving $25M in new revenue.",
      overview: "Increased Jewelry Consultant adoption of digital storefront tools with SSO access and structured campaigns, enabling remote selling.",
      tags: ["RetailTech", "Internal Tools", "UX", "Growth"],
      link: "#",
      hasCaseStudy: false,
      hasDemo: true
    },
    {
      title: "UPS Access Points Integration",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Reduced package loss by 7% and generated $6.5M in revenue.",
      overview: "Integrated UPS Access Point delivery option to improve logistics and customer satisfaction, coordinating with 200+ vendors.",
      tags: ["Logistics", "E-commerce", "API Integration", "CX"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Proactive Order Notifications",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Reduced 62K annual customer service calls with milestone-based SMS/email updates.",
      overview: "Launched automated messaging across Signet brands for real-time order tracking, integrating with third-party SaaS platforms.",
      tags: ["Notifications", "CRM", "Customer Support", "SaaS Integration"],
      link: "#",
      hasCaseStudy: false,
      hasDemo: false
    },
    {
      title: "Robotic Process Automation Program",
      role: "AVP, Product Manager @ JPMorgan Chase",
      headline: "Saved up to 9 FTE per bot through strategic automation.",
      overview: "Evangelized and built an RPA program for internal business processes, including feasibility scoring and stakeholder training.",
      tags: ["RPA", "Change Management", "Enterprise Tools", "Operations"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Loan Portfolio Data Conversion",
      role: "AVP, Product Owner @ JPMorgan Chase",
      headline: "Migrated 1.5M accounts, sunsetting legacy platforms and roles.",
      overview: "Consolidated disparate mortgage accounts into unified systems through strategic field mapping, logic generation, and simultaneous dual-system updates.",
      tags: ["Data Migration", "Fintech", "Legacy Systems", "Systems Integration"],
      link: "#",
      hasCaseStudy: true,
      hasDemo: false
    }
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-16 bg-dark-950">
        <div className="container-custom px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A selection of impactful projects showcasing product strategy, technical leadership, and business transformation.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-dark-900 rounded-2xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer ${project.title === 'Chase MyHome Platform' ? 'lg:col-span-2' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full border border-primary-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.title === 'Chase MyHome Platform' && (
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">Featured</span>
                  )}
                </div>

                {/* External Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.hasCaseStudy && (
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-dark-800/80 border border-gray-700 text-gray-300 hover:text-primary-400 hover:bg-dark-700/80 transition-all duration-200 backdrop-blur-sm"
                      title="View Case Study"
                    >
                      <ExternalLink size={14} />
                    </motion.div>
                  )}
                  {project.hasDemo && (
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-dark-800/80 border border-gray-700 text-gray-300 hover:text-accent-400 hover:bg-dark-700/80 transition-all duration-200 backdrop-blur-sm"
                      title="View Demo"
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  {/* Title and Role */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-200 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-1">
                      {project.role}
                    </p>
                  </div>

                  {/* Headline */}
                  <p className="text-sm text-gray-300 font-medium leading-relaxed line-clamp-2">
                    {project.headline}
                  </p>

                  {/* Overview */}
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Project Meta (duration/team size) - removed */}

                  {/* CTA Button */}
                  <div className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm group/link transition-colors duration-200">
                    <span>View Details</span>
                    <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Show View All Projects button after Nth tile if showViewAllAfter is set */}
            {showViewAllAfter && displayedProjects.length >= showViewAllAfter && (
              <div className="col-span-full flex justify-center mt-6">
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            )}
          </div>

          {/* View All Projects CTA (default at bottom if not using showViewAllAfter) */}
          {!showViewAllAfter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View All Projects</span>
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSummaryGrid; 