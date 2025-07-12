'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectTeaser from '../../components/ProjectTeaser';

export default function Portfolio() {
  const projects = [
    {
      title: "Chase MyHome Platform",
      description: "Launched home lending platform used by 5M+ customers, driving 2M+ visits. Built a self-service digital mortgage platform integrated into Chase Mobile & Web, increasing HELOC applications by 4%.",
      image: "/api/placeholder/600/400",
      category: "Fintech",
      duration: "12 months",
      teamSize: "15 people",
      technologies: ["Enterprise", "Fintech", "React", "SaaS"],
      link: "/portfolio/chase-myhome",
      featured: true,
    },
    {
      title: "AI-Powered Feedback Insights",
      description: "Transformed call data into product insights using LLMs. Used AI to summarize customer service calls, categorize sentiment, and reduce post-call work for agents.",
      image: "/api/placeholder/600/400",
      category: "AI/ML",
      duration: "6 months",
      teamSize: "6 people",
      technologies: ["AI/ML", "LLM", "Customer Experience", "Automation"],
      link: "/portfolio/ai-feedback-insights",
    },
    {
      title: "Checkout Conversion Uplift",
      description: "Drove $36M+ in annual revenue via improved checkout UX. Led experimentation and UX optimization to increase conversion rates across e-commerce properties.",
      image: "/api/placeholder/600/400",
      category: "E-commerce",
      duration: "Multi-year",
      teamSize: "Cross-functional teams",
      technologies: ["A/B Testing", "E-commerce", "Analytics", "UX"],
      link: "/portfolio/checkout-conversion",
    },
    {
      title: "Digital Storefront Adoption",
      description: "Boosted tool adoption from 60% to 82%, driving $25M in new revenue. Increased Jewelry Consultant adoption of digital storefront tools with SSO access and structured campaigns, enabling remote selling.",
      image: "/api/placeholder/600/400",
      category: "RetailTech",
      duration: "6 months",
      teamSize: "8 people",
      technologies: ["RetailTech", "Internal Tools", "UX", "Growth"],
      link: "/portfolio/digital-storefront",
    },
    {
      title: "UPS Access Points Integration",
      description: "Reduced package loss by 7% and generated $6.5M in revenue. Integrated UPS Access Point delivery option to improve logistics and customer satisfaction, coordinating with 200+ vendors.",
      image: "/api/placeholder/600/400",
      category: "Logistics",
      duration: "9 months",
      teamSize: "12 people",
      technologies: ["Logistics", "E-commerce", "API Integration", "CX"],
      link: "/portfolio/ups-integration",
    },
    {
      title: "Proactive Order Notifications",
      description: "Reduced 62K annual customer service calls with milestone-based SMS/email updates. Launched automated messaging across Signet brands for real-time order tracking, integrating with third-party SaaS platforms.",
      image: "/api/placeholder/600/400",
      category: "Customer Experience",
      duration: "4 months",
      teamSize: "6 people",
      technologies: ["Notifications", "CRM", "Customer Support", "SaaS Integration"],
      link: "/portfolio/order-notifications",
    },
    {
      title: "Robotic Process Automation Program",
      description: "Saved up to 9 FTE per bot through strategic automation. Evangelized and built an RPA program for internal business processes, including feasibility scoring and stakeholder training.",
      image: "/api/placeholder/600/400",
      category: "Automation",
      duration: "6–9 months",
      teamSize: "5 people",
      technologies: ["RPA", "Change Management", "Enterprise Tools", "Operations"],
      link: "/portfolio/rpa-program",
    },
    {
      title: "Loan Portfolio Data Conversion",
      description: "Migrated 1.5M accounts, sunsetting legacy platforms and roles. Consolidated disparate mortgage accounts into unified systems through strategic field mapping, logic generation, and simultaneous dual-system updates.",
      image: "/api/placeholder/600/400",
      category: "Data Migration",
      duration: "12+ months",
      teamSize: "10+ people",
      technologies: ["Data Migration", "Fintech", "Legacy Systems", "Systems Integration"],
      link: "/portfolio/loan-portfolio",
    },
  ];

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
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A collection of projects that showcase my expertise in product management, 
              user experience design, and business strategy.
            </p>
            <p className="text-lg text-gray-400">
              Each project represents a unique challenge and demonstrates my approach to 
              solving complex problems with user-centered solutions.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectTeaser key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how I can help bring your vision to life with innovative 
              solutions and strategic thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/resume" className="btn-secondary">
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 