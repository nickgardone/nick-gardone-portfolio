'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectSummaryGrid from '../components/ProjectSummaryGrid';
import RecommendationsCarousel from '../components/RecommendationsCarousel';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function Home() {

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Products Launched", value: "20+" },
    { label: "Team Members Led", value: "75+" },
    { label: "Revenue Impact", value: "$120M+" },
  ];
  const isMobile = useIsMobile();

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
                href="mailto:NGardone@Gmail.com"
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
      <ProjectSummaryGrid limit={5} showViewAllAfter={5} />
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
                text: `I worked with Nick for years in a fast-paced digital environment on many high profile projects, and I can confidently say he was one of the most creative and collaborative product partners I’ve ever worked with. I deeply value cross-functional collaboration and care for user-centered product creation and Nick truly excelled at both. He brought thoughtful, innovative solutions to complex problems and always approached challenges with curiosity.\n\nI will always appreciate how well he integrated with our design and research teams in particular. He understood the value of user insight and design thinking, working with us not just as a stakeholder, but as a true partner in shaping product strategy. His ability to connect business goals with user needs consistently saw success and helped drive our experiences forward.\n\nBeyond all of his capabilities and accomplishments, he was sincerely wonderful to work with. Sharp, open-minded, and genuinely supportive. Any product team would be lucky to have him and I hope we can work together again in the future!`,
                name: 'Courtney Stewart',
                role: 'Senior Creative Director, Signet Jewelers',
                avatar: '/profile.jpg',
              },
              {
                text: `I have worked with Nick for about 5 years at Signet Jewelers. In this time, he drove the vision, roadmap, and delivery of solutions for our Delivery and Pickup team on the Purchase domain and later for our Digital Storefront team within the Shop domain.\n\nWhile these are vastly different areas, I found that he is able to adapt to new areas quickly and is passionate about his work, whatever that may be. I always appreciated that these roadmap items were backed by solid data, as Nick would dive deep into our Voice of Customer data and really understand and empathize with the needs of our customers.\n\nI am happy to recommend Nick for his next role as Product Manager at a fast paced and competitive environment.`,
                name: 'Dan Henry',
                role: 'Enterprise Architect, Signet Jewelers',
                avatar: '/profile-headshot-2.png',
              },
              {
                text: `I've had the privilege of partnering with Nick across several critical omnichannel initiatives—including BOPIS, Same Day Delivery, and UPS Access Point pickup. Nick brings a rare blend of strategic thinking and executional excellence to the Delivery and Pickup domain, always anchored in a strong customer-first mindset.\n\nWhat truly stands out is Nick's ability to bring cross-functional teams together. Whether collaborating with Tech, UX, or Customer Insights, Nick fosters alignment and momentum by deeply listening, seeking diverse perspectives, and ensuring every decision maps back to real customer needs. His empathy—not just for customers but for internal stakeholders—creates a collaborative environment where the best ideas can take shape.\n\nNick is someone who leads with clarity and purpose. His partnership has had a meaningful impact on both the customer experience and how teams work together to deliver it. I’m grateful for the opportunity to have worked alongside them.`,
                name: 'Swati Venkatraman',
                role: 'Director of Product Management, Signet Jewelers',
                avatar: '/Profile-headshot.png',
              },
              {
                text: `Nick is a fantastic product manager, with strong leadership skills as well as an execution-focused mindset. He reported to me on the Signet Digital team, where he spearheaded several initiatives within the Connected Commerce area. Nick’s collaboration skills set him apart: he partnered with technology, design, and operations teams to deliver enhancements, and forged strong relationships across the entire org. He skillfully prioritizes features, maintains a user-focused approach, and incorporates analytics into decision making - all critical skills for a PM. Above all, Nick is a self-starter and holds himself accountable for results, finding solutions even when challenges arise. Nick is a truly wonderful collaborator and leader, and any product team would be lucky to have him onboard!`,
                name: 'Yulia Anontseva',
                role: 'Director of Product Management, Signet Jewelers',
                avatar: '/profile-headshot-2.png',
              },
              {
                text: `I had the pleasure of working with Nick via partnership and I was consistently impressed by his ability to steer toward a clear vision, his professionalism, his organization, and his collaborative approach. Nick brings a balance of strategic insight and hands-on involvement, making the projects that we partnered on not only productive but genuinely enjoyable. His communication is always timely and clear, which made our work together very efficient. I recommend Nick to anyone looking for a forward-thinking, results-driven professional.`,
                name: 'Matt Hanan',
                role: 'Chief Client Officer, Creatable',
                avatar: '/profile.jpg',
              },
              {
                text: `Nick is the kind of teammate everyone hopes to have. We worked together on the delivery and pickup product team at Signet, where he led initiatives that spanned the entire site and involved close collaboration across nearly every department. His leadership pushed me to grow as a designer—to stay curious and approach complex problems with confidence and persistence.\n\nNick brings a sharp mind, contagious energy, and a clear focus on creating meaningful, user-centered experiences. No matter the challenge, he stays grounded and keeps things moving. Thoughtful, driven, and genuinely collaborative—he’s a true asset to any team.`,
                name: 'Kathleen Johnson',
                role: 'Creative Director, Signet Jewelers',
                avatar: '/profile-headshot-2.png',
              },
              {
                text: `Nick is a wonderful business partner. My team and I worked with him closely on multiple digital projects, across different areas of the website. As brand partners we felt informed, involved and heard throughout the scoping and development processes. Nick’s communication skills ensured that we were all aligned to the final product that would be delivered. \n\nSynergy between many different teams within a large organization can be challenging, but he took on that challenge and made it look easy. Nick is a pleasure to work with - always coming to the table with a positive attitude, collaborative spirit and ultimately driving meaningful results. `,
                name: 'Andrea Waris',
                role: 'Director, E-Commerce Content and Site Experience, Signet Jewelers',
                avatar: '/profile.jpg',
              },
              {
                text: `I had the pleasure of managing Nick during his time as a Sr. Product Manager at Signet Jewelers. I was impressed by his ability to build strong cross-functional relationships, craft thoughtful product strategies, and deeply understand customer needs. I appreciated his persistence to push initiatives forward as well as his desire to create a positive and fun team culture. Any team would be lucky to have him.`,
                name: 'Jaime Colon',
                role: 'VP, Digital Product, Signet Jewelers',
                avatar: '/profile.jpg',
              },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
