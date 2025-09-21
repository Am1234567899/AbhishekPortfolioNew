import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaBook
} from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Bansal Institute of Engineering Technology",
      location: "Lucknow, Uttar Pradesh",
      duration: "2020 - 2023",
      type: "Graduation",
      icon: <FaUniversity className="text-3xl" />,
      description: "Specialized in Information Technology with focus on software development, programming, and modern web technologies.",
      highlights: [
        "Core IT subjects and programming fundamentals",
        "Software development methodologies",
        "Database management and design",
        "Web technologies and frameworks",
        "Project-based learning approach"
      ],
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      degree: "Diploma",
      field: "Computer Science & Engineering",
      institution: "Government Polytechnic PremdharPatti Pratapgarh",
      location: "Pratapgarh, India",
      duration: "2017 - 2020",
      type: "Technical Education",
      icon: <FaGraduationCap className="text-3xl" />,
      description: "Comprehensive diploma program covering computer science fundamentals and engineering principles.",
      highlights: [
        "Programming languages and logic development",
        "Computer hardware and software concepts",
        "Network fundamentals and administration",
        "Database design and management",
        "Technical project development"
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      degree: "High School",
      field: "Secondary Education",
      institution: "Gyan Sthali Public School",
      location: "Oaiyadeeh Patti, Pratapgarh",
      duration: "2016",
      type: "Foundation",
      icon: <FaSchool className="text-3xl" />,
      description: "Completed secondary education with strong foundation in mathematics, science, and computer fundamentals.",
      highlights: [
        "Strong foundation in mathematics and science",
        "Introduction to computer basics",
        "Academic excellence and discipline",
        "Leadership and extracurricular activities",
        "Preparation for technical education"
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-60 h-60 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-500/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 glass-card-premium rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <FaBook className="text-primary-500 animate-pulse" />
            <span className="gradient-text-premium font-semibold">Academic Journey</span>
            <FaAward className="text-secondary-500 animate-bounce-slow" />
          </motion.div>

          <h2 className="section-title">Education</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My educational journey from foundation to specialization, building the technical knowledge
            and skills that drive my passion for software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`relative glass-card-premium rounded-2xl p-6 sm:p-8 border ${education.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${education.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
                  {/* Icon and Type */}
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                      className={`text-primary-500 mb-4 p-4 glass-card rounded-2xl bg-gradient-to-r ${education.color} bg-clip-padding`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {education.icon}
                      </div>
                    </motion.div>
                    <span className={`${education.bgColor} text-primary-400 px-3 py-1 rounded-full text-xs font-medium border ${education.borderColor}`}>
                      {education.type}
                    </span>
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-10 space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-400 font-semibold">
                          <FaCalendarAlt className="text-sm" />
                          {education.duration}
                        </div>
                      </div>

                      <h4 className="text-lg text-primary-400 font-semibold">
                        {education.field}
                      </h4>

                      <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <FaSchool className="text-secondary-500" />
                          <span className="font-medium">{education.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-accent-500" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaAward className="text-primary-500" />
                        Key Highlights
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {education.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 group/item"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-200">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Educational Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: "7+", label: "Years of Learning", icon: <FaBook /> },
            { number: "3", label: "Educational Levels", icon: <FaGraduationCap /> },
            { number: "2020-23", label: "Latest Graduation", icon: <FaUniversity /> },
            { number: "IT", label: "Specialization", icon: <FaAward /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-card rounded-2xl hover:glass-card-premium transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-primary-500 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 gradient-text">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;