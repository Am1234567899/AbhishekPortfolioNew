import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '3+', label: 'Projects Completed' },
    { number: '2', label: 'Companies Worked' },
    { number: '100%', label: 'Commitment Level' }
  ];

  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Frontend Development',
      description: 'Experienced in React and Angular frameworks for building dynamic user interfaces.'
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: 'Backend Development',
      description: 'Proficient in C# and ASP.NET Core for creating robust server-side applications.'
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: 'Database Management',
      description: 'Skilled in MSSQL database design, optimization, and management.'
    },
    {
      icon: <FaMobile className="text-2xl" />,
      title: 'Full-Stack Solutions',
      description: 'Capable of delivering end-to-end solutions from conception to deployment.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in both frontend and backend technologies.
            My journey in software development has been driven by curiosity and a desire to create meaningful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My software development journey began with a passion for technology and problem-solving.
                Over the past 2 years, I've had the privilege of working with amazing teams and contributing
                to impactful projects.
              </p>
              <p>
                During my first year at <span className="text-primary-500 font-semibold">Audex Logistics</span>,
                I gained comprehensive experience working across the full stack - from Angular frontend development
                to C# backend services and MSSQL database management.
              </p>
              <p>
                Currently at <span className="text-primary-500 font-semibold">Oreqo Software Private Ltd</span>,
                I've been focusing on React development, deepening my expertise in modern frontend technologies
                and building scalable user interfaces.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies to deliver
                innovative solutions that make a real difference.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-dark-700 p-6 rounded-lg text-center border border-gray-700 hover:border-primary-500 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">What I Bring</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-dark-700 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
                whileHover={{ y: -10 }}
                variants={itemVariants}
              >
                <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-primary-500 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;