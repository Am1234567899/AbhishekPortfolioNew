import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const experiences = [
    {
      company: 'Oreqo Software Private Ltd',
      position: 'Frontend Developer',
      duration: 'Year 2 (Current)',
      location: 'Remote',
      type: 'Full-time',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Modern Frontend'],
      responsibilities: [
        'Developing dynamic and responsive user interfaces using React framework',
        'Implementing modern frontend design patterns and best practices',
        'Collaborating with design and backend teams for seamless integration',
        'Optimizing application performance and user experience',
        'Writing clean, maintainable, and scalable code'
      ],
      projects: ['Transport Management System'],
      current: true
    },
    {
      company: 'Audex Logistics',
      position: 'Full Stack Developer',
      duration: 'Year 1',
      location: 'On-site',
      type: 'Full-time',
      technologies: ['Angular', 'C#', 'ASP.NET Core', 'MSSQL', 'Full Stack'],
      responsibilities: [
        'Developed full-stack web applications using Angular and ASP.NET Core',
        'Designed and implemented database schemas using MSSQL',
        'Created RESTful APIs for seamless frontend-backend communication',
        'Worked on both warehouse and property management systems',
        'Gained comprehensive experience across the entire development stack'
      ],
      projects: ['Warehouse Management System (WMS)', 'SSM Residency'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My journey through different companies and roles, building expertise across
            the full development stack and contributing to meaningful projects.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-primary-500 rounded-full border-4 border-dark-900 hidden md:block"></div>

              <motion.div
                className="bg-dark-800 rounded-lg p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 ml-0 md:ml-16 relative"
                whileHover={{ y: -5 }}
              >
                {exp.current && (
                  <div className="absolute top-4 right-4 bg-green-500 text-xs px-3 py-1 rounded-full font-semibold">
                    Current
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-primary-500 font-semibold mb-3">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBriefcase />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h5>
                    <ul className="space-y-2 text-gray-300">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Projects Worked On</h5>
                    <div className="space-y-3 mb-6">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="bg-dark-700 px-4 py-2 rounded-lg">
                          <span className="text-gray-300 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>

                    <h5 className="text-lg font-semibold text-white mb-4">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">Ready for New Challenges</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With 2 years of hands-on experience across different technologies and domains,
            I'm excited to take on new challenges and contribute to innovative projects.
            Let's build something amazing together!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;