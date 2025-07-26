'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectTeaser from '../../components/ProjectTeaser';

export default function Portfolio() {
  const projects = [
    {
      title: "Chase MyHome Platform",
      role: "VP, Senior Product Manager @ JPMorgan Chase",
      headline: "Launched home lending platform used by 5M+ customers, driving 2M+ visits.",
      overview: "Built a self-service digital mortgage platform integrated into Chase Mobile & Web, increasing HELOC applications by 4%.",
      image: "/chase-myhome-platform.png",
      tags: ["Enterprise", "Fintech", "SaaS"],
      link: "/portfolio/chase-myhome",
      featured: true,
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "AI-Powered Feedback Insights",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Transformed call data into product insights using LLMs.",
      overview: "Used AI to summarize customer service calls, categorize sentiment, and reduce post-call work for agents.",
      image: "/profile-headshot-2.png",
      tags: ["AI/ML", "LLM", "Customer Experience", "Automation"],
      link: "/portfolio/ai-feedback-insights",
      hasCaseStudy: true,
      hasDemo: true
    },
    {
      title: "Checkout Conversion Uplift",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Drove $36M+ in annual revenue via improved checkout UX.",
      overview: "Led experimentation and UX optimization to increase conversion rates across e-commerce properties.",
      image: "/profile-headshot-2.png",
      tags: ["A/B Testing", "E-commerce", "Analytics", "UX"],
      link: "/portfolio/checkout-conversion",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Digital Storefront Adoption",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Boosted tool adoption from 60% to 82%, driving $25M in new revenue.",
      overview: "Increased Jewelry Consultant adoption of digital storefront tools with SSO access and structured campaigns, enabling remote selling.",
      image: "/profile-headshot-2.png",
      tags: ["RetailTech", "Internal Tools", "UX", "Growth"],
      link: "/portfolio/digital-storefront",
      hasCaseStudy: false,
      hasDemo: true
    },
    {
      title: "UPS Access Points Integration",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Reduced package loss by 7% and generated $6.5M in revenue.",
      overview: "Integrated UPS Access Point delivery option to improve logistics and customer satisfaction, coordinating with 200+ vendors.",
      image: "/profile-headshot-2.png",
      tags: ["Logistics", "E-commerce", "API Integration", "CX"],
      link: "/portfolio/ups-integration",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Proactive Order Notifications",
      role: "Senior Product Manager @ Signet Jewelers",
      headline: "Reduced 62K annual customer service calls with milestone-based SMS/email updates.",
      overview: "Launched automated messaging across Signet brands for real-time order tracking, integrating with third-party SaaS platforms.",
      image: "/profile-headshot-2.png",
      tags: ["Notifications", "CRM", "Customer Support", "SaaS Integration"],
      link: "/portfolio/order-notifications",
      hasCaseStudy: false,
      hasDemo: false
    },
    {
      title: "Robotic Process Automation Program",
      role: "AVP, Product Manager @ JPMorgan Chase",
      headline: "Saved up to 9 FTE per bot through strategic automation.",
      overview: "Evangelized and built an RPA program for internal business processes, including feasibility scoring and stakeholder training.",
      image: "/profile-headshot-2.png",
      tags: ["RPA", "Change Management", "Enterprise Tools", "Operations"],
      link: "/portfolio/rpa-program",
      hasCaseStudy: true,
      hasDemo: false
    },
    {
      title: "Loan Portfolio Data Conversion",
      role: "AVP, Product Owner @ JPMorgan Chase",
      headline: "Migrated 1.5M accounts, sunsetting legacy platforms and roles.",
      overview: "Consolidated disparate mortgage accounts into unified systems through strategic field mapping, logic generation, and simultaneous dual-system updates.",
      image: "/profile-headshot-2.png",
      tags: ["Data Migration", "Fintech", "Legacy Systems", "Systems Integration"],
      link: "/portfolio/loan-portfolio",
      hasCaseStudy: true,
      hasDemo: false
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
              <a href="/Nick_Gardone_Resume_2025.pdf" download="Nick_Gardone_Resume_2025.pdf" className="btn-secondary">
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
