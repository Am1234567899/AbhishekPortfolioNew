import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaNpm,
  FaTrophy,
  FaCertificate,
  FaRocket,
  FaChartLine,
  FaCode,
  FaCog,
  FaArrowUp,
  FaStar,
  FaFire
} from 'react-icons/fa';
import {
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiVisualstudio,
  SiVisualstudiocode,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    if (inView) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: <FaCode className="text-3xl" />,
      description: 'Modern UI/UX Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, experience: '1+ Years', color: 'text-cyan-400', specialty: 'Advanced Hooks & Context' },
        { name: 'Angular', icon: <FaAngular />, level: 85, experience: '1 Year', color: 'text-red-500', specialty: 'Enterprise Applications' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, experience: '6 Months', color: 'text-blue-400', specialty: 'Type Safety & Interfaces' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 88, experience: '2+ Years', color: 'text-yellow-400', specialty: 'ES6+ & Async Programming' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, experience: '2+ Years', color: 'text-orange-500', specialty: 'Semantic Markup' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, experience: '2+ Years', color: 'text-blue-500', specialty: 'Grid & Flexbox' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, experience: '8 Months', color: 'text-teal-400', specialty: 'Utility-First Design' }
      ]
    },
    {
      title: 'Backend Excellence',
      icon: <FaServer className="text-3xl" />,
      description: 'Scalable Server Solutions',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C#', icon: <SiCsharp />, level: 85, experience: '1+ Years', color: 'text-purple-600', specialty: 'OOP & SOLID Principles' },
        { name: 'ASP.NET Core', icon: <SiDotnet />, level: 82, experience: '1+ Years', color: 'text-blue-600', specialty: 'Web APIs & MVC' },
        { name: 'REST APIs', icon: <FaServer />, level: 88, experience: '1+ Years', color: 'text-green-500', specialty: 'RESTful Architecture' },
        { name: 'Entity Framework', icon: <FaDatabase />, level: 75, experience: '8 Months', color: 'text-indigo-500', specialty: 'Code-First Approach' }
      ]
    },
    {
      title: 'Data & DevOps',
      icon: <FaDatabase className="text-3xl" />,
      description: 'Database & Development Tools',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MSSQL', icon: <SiMicrosoftsqlserver />, level: 80, experience: '1+ Years', color: 'text-red-600', specialty: 'Query Optimization' },
        { name: 'Database Design', icon: <FaDatabase />, level: 85, experience: '1+ Years', color: 'text-gray-400', specialty: 'Normalization & Indexing' },
        { name: 'Git', icon: <FaGitAlt />, level: 90, experience: '2+ Years', color: 'text-orange-600', specialty: 'Version Control & Branching' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, level: 95, experience: '2+ Years', color: 'text-blue-400', specialty: 'Extensions & Debugging' },
        { name: 'Visual Studio', icon: <SiVisualstudio />, level: 88, experience: '1+ Years', color: 'text-purple-600', specialty: 'Full IDE Features' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Full Stack Proficiency',
      description: 'Mastered both frontend and backend development',
      icon: <FaTrophy className="text-yellow-500" />,
      metric: '100%',
      timeframe: '2 Years'
    },
    {
      title: 'Project Success Rate',
      description: 'Successfully delivered all assigned projects',
      icon: <FaRocket className="text-blue-500" />,
      metric: '100%',
      timeframe: 'Career'
    },
    {
      title: 'Technology Adaptation',
      description: 'Quick learning and implementation of new technologies',
      icon: <FaChartLine className="text-green-500" />,
      metric: '95%',
      timeframe: 'Average'
    },
    {
      title: 'Code Quality',
      description: 'Maintained high standards in code reviews',
      icon: <FaStar className="text-purple-500" />,
      metric: '4.8/5',
      timeframe: 'Rating'
    }
  ];

  const learningPath = [
    {
      phase: 'Foundation',
      period: 'Month 1-6',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
      status: 'completed',
      description: 'Built solid foundation in web fundamentals'
    },
    {
      phase: 'Framework Mastery',
      period: 'Month 7-12',
      technologies: ['Angular', 'C#', 'ASP.NET Core', 'MSSQL'],
      status: 'completed',
      description: 'Deep dive into full-stack development'
    },
    {
      phase: 'Modern Stack',
      period: 'Month 13-24',
      technologies: ['React', 'TypeScript', 'Advanced Patterns'],
      status: 'completed',
      description: 'Specialization in modern React ecosystem'
    },
    {
      phase: 'Advanced Concepts',
      period: 'Current',
      technologies: ['Performance Optimization', 'Design Patterns', 'Architecture'],
      status: 'in-progress',
      description: 'Focus on advanced development concepts'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3b82f6 0%, transparent 50%)`
          }}
        />
        {/* Floating Code Symbols */}
        {['{ }', '< >', '( )', '[ ]', '/* */'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl text-primary-500/10 font-mono"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Premium Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 glass-card-premium rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <FaCog className="animate-spin-slow text-primary-500" />
            <span className="gradient-text-premium font-semibold">Technical Expertise</span>
            <FaFire className="text-orange-500 animate-pulse" />
          </motion.div>

          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical abilities, built through{" "}
            <span className="gradient-text font-bold">2+ years of hands-on experience</span>{" "}
            and continuous learning in modern development technologies.
          </p>
        </motion.div>

        {/* Interactive Category Tabs */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex justify-center mb-12">
            <div className="glass-card-premium p-2 rounded-2xl">
              <div className="flex gap-2">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 ${
                      activeCategory === index
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-neon'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.icon}
                    <span className="hidden md:block">{category.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Category Skills */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card-premium rounded-3xl p-8 md:p-12"
            >
              <div className="text-center mb-12">
                <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                  {skillCategories[activeCategory].title}
                </h3>
                <p className="text-gray-400 text-lg">{skillCategories[activeCategory].description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card rounded-2xl p-6 group card-3d hover-glow"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-500`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-400">{skill.experience}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">Proficiency</span>
                        <span className="text-primary-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="skill-bar h-full relative"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>

                    <div className="text-sm text-gray-400 mb-3">
                      <span className="font-medium text-gray-300">Specialty:</span> {skill.specialty}
                    </div>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20) ? 'bg-primary-500' : 'bg-gray-600'
                          }`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Professional Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-card-premium rounded-2xl p-6 text-center group card-3d-intense"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4 group-hover:animate-glow">{achievement.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{achievement.metric}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <span className="text-xs text-primary-400 font-medium">{achievement.timeframe}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Learning Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full hidden lg:block" />

            <div className="space-y-12">
              {learningPath.map((phase, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="lg:w-1/2">
                    <div className={`glass-card-premium rounded-2xl p-6 ${phase.status === 'completed' ? 'border-green-500/30' : 'border-yellow-500/30'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-4 h-4 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                        <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
                        <span className="text-sm text-gray-400">{phase.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-sm text-primary-400 border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:block relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 shadow-neon" />
                  </div>

                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center glass-card-premium rounded-3xl p-12 glow-effect"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaRocket className="text-3xl text-primary-500" />
            <h3 className="text-3xl font-bold gradient-text-premium">Ready for New Challenges</h3>
            <FaArrowUp className="text-3xl text-secondary-500" />
          </motion.div>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            With a solid foundation and continuous learning mindset, I'm excited to tackle complex projects
            and contribute to innovative solutions. Let's build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="glass-card px-6 py-3 rounded-full text-accent-400 font-medium">
              🎯 Currently Learning: Next.js & Three.js
            </span>
            <span className="glass-card px-6 py-3 rounded-full text-primary-400 font-medium">
              🚀 Next Goal: Cloud Technologies (AWS/Azure)
            </span>
          </div>

          <motion.button
            className="btn-primary group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center gap-3">
              <FaRocket />
              Let's Work Together
              <FaArrowUp className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;