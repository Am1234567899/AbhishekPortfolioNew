import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket, FaStar } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15
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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotateX: [0, 10, 0],
      rotateY: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Professional titles rotation
  const titles = [
    "Full Stack Developer",
    "React Specialist",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Particle system
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Advanced Background with Mouse Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3b82f6 0%, transparent 50%), radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #8b5cf6 0%, transparent 50%)`
          }}
        />

        {/* Advanced Particle System */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/30 to-secondary-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary-500/20 rounded-lg"
          variants={floatingVariants}
          animate="animate"
          style={{
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px)`
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-secondary-500/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{
            transform: `translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.05}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Hero Card with 3D Effects */}
        <motion.div
          className="glass-card-premium rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 glow-effect group card-3d-intense"
          variants={itemVariants}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
          }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass-card rounded-full text-accent-400 font-semibold text-xs sm:text-sm mb-6 sm:mb-8 group"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="animate-spin-slow text-yellow-400" />
            <span className="gradient-text-premium">Available for Work</span>
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse-slower"></div>
          </motion.div>

          {/* Main Title */}
          <motion.div className="mb-8 sm:mb-12">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-6 sm:mb-8 leading-none"
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="gradient-text-premium">Abhishek</span>
              <br />
              <span className="text-white/80 text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">Mishra</span>
            </motion.h1>

            {/* Animated Title Rotation */}
            <motion.div
              className="relative h-12 sm:h-16 md:h-20 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex}
                  className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCode className="mr-4 text-primary-500 animate-pulse" />
                  {titles[currentTitleIndex]}
                  <FaRocket className="ml-4 text-secondary-500 animate-bounce-slow" />
                </motion.h2>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Passionate{" "}
            <span className="gradient-text font-bold">Full Stack Developer</span>{" "}
            with{" "}
            <span className="text-accent-400 font-bold">2+ years</span>{" "}
            of experience crafting{" "}
            <span className="text-primary-400 font-bold">cutting-edge web applications</span>.
            <br />
            Specialized in{" "}
            <span className="gradient-text font-bold">React • Angular • C# • ASP.NET Core</span>
          </motion.p>

          {/* Premium Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaRocket />
                Let's Collaborate
              </span>
            </motion.button>

            <motion.a
              href="/Abhishek_Mishra_Resume.pdf"
              download="Abhishek_Mishra_Resume.pdf"
              className="btn-outline flex items-center gap-3 group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaDownload />
              </motion.div>
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Premium Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-8 px-4"
          >
            {[
              {
                icon: <FaGithub size={32} />,
                href: "https://github.com/abhishekmishra",
                label: "GitHub",
                color: "hover:text-gray-300",
                bg: "hover:bg-gray-700/20"
              },
              {
                icon: <FaLinkedin size={32} />,
                href: "https://linkedin.com/in/abhishekmishra",
                label: "LinkedIn",
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-500/20"
              },
              {
                icon: <FaEnvelope size={32} />,
                href: "mailto:abhimaster369@gmail.com",
                label: "Email",
                color: "hover:text-accent-400",
                bg: "hover:bg-accent-500/20"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-4 glass-card rounded-2xl text-gray-400 ${social.color} ${social.bg} transition-all duration-700 group card-3d`}
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  rotateY: 15,
                  rotateX: 10
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 group-hover:animate-glow">
                  {social.icon}
                </div>
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="glass-card-premium p-4 rounded-2xl group cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection('#about')}
          >
            <div className="w-8 h-12 border-2 border-primary-500/70 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-2 h-4 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2"
                animate={{
                  y: [0, 20, 0],
                  opacity: [1, 0, 1],
                  scale: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;