import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaWarehouse, FaHome, FaTruck } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const projects = [
    {
      title: 'Warehouse Management System (WMS)',
      description: 'A comprehensive warehouse management solution built with Angular and ASP.NET Core. Features include inventory tracking, order management, and real-time reporting dashboard.',
      icon: <FaWarehouse className="text-3xl" />,
      technologies: ['Angular', 'C#', 'ASP.NET Core', 'MSSQL', 'HTML5', 'CSS3'],
      features: [
        'Real-time inventory tracking',
        'Order processing and fulfillment',
        'Advanced reporting and analytics',
        'User role management',
        'Barcode scanning integration'
      ],
      company: 'Audex Logistics',
      year: 'Year 1',
      status: 'Production',
      category: 'Full Stack'
    },
    {
      title: 'SSM Residency',
      description: 'A modern property management system for residential complexes. Built with Angular frontend and ASP.NET Core backend, featuring tenant management and maintenance tracking.',
      icon: <FaHome className="text-3xl" />,
      technologies: ['Angular', 'C#', 'ASP.NET Core', 'MSSQL', 'Bootstrap'],
      features: [
        'Tenant registration and management',
        'Maintenance request tracking',
        'Payment management system',
        'Document management',
        'Communication portal'
      ],
      company: 'Audex Logistics',
      year: 'Year 1',
      status: 'Production',
      category: 'Full Stack'
    },
    {
      title: 'Transport Management System',
      description: 'A React-based transport management platform focused on route optimization and fleet management. Features modern UI/UX with real-time updates and responsive design.',
      icon: <FaTruck className="text-3xl" />,
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
      features: [
        'Route planning and optimization',
        'Fleet tracking and management',
        'Driver assignment system',
        'Real-time status updates',
        'Responsive mobile interface'
      ],
      company: 'Oreqo Software Private Ltd',
      year: 'Year 2',
      status: 'In Development',
      category: 'Frontend'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of the key projects I've worked on during my professional journey.
            Each project represents different aspects of my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-900 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon and Basic Info */}
                  <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="text-gray-400 text-sm">{project.company}</div>
                      <div className="text-gray-400 text-sm">{project.year}</div>
                      <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.status === 'Production'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-3/4 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-dark-700 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-600 hover:border-primary-500 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links (if available) */}
                    <div className="flex gap-4 pt-4">
                      <motion.button
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled
                      >
                        <FaGithub />
                        <span className="text-sm">Code (Private)</span>
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm">Live Demo (Internal)</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">More Projects Coming Soon</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            I'm constantly working on new projects and exploring emerging technologies.
            Stay tuned for more exciting developments and personal projects!
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;