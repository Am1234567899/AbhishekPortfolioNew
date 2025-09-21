import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
  FaRocket,
  FaStar,
} from "react-icons/fa";

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

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotateX: [0, 10, 0],
      rotateY: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Professional titles rotation
  const titles = [
    "Full Stack Developer",
    "React Specialist",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer",
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
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
    >
      {/* Advanced Background with Mouse Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${
              mousePosition.y
            }%, #3b82f6 0%, transparent 50%), radial-gradient(circle at ${
              100 - mousePosition.x
            }% ${100 - mousePosition.y}%, #8b5cf6 0%, transparent 50%)`,
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
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary-500/20 rounded-lg"
          variants={floatingVariants}
          animate="animate"
          style={{
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${
              mousePosition.y * 0.1
            }px)`,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-secondary-500/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{
            transform: `translateX(${-mousePosition.x * 0.05}px) translateY(${
              -mousePosition.y * 0.05
            }px)`,
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
            transform: `perspective(1000px) rotateX(${
              mousePosition.y * 0.01
            }deg) rotateY(${mousePosition.x * 0.01}deg)`,
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

          {/* Ultra-Premium Hero Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[70vh]">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              {/* Main Title with Advanced Typography */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                  <motion.span
                    className="block gradient-text-premium"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Abhishek
                  </motion.span>
                  <motion.span
                    className="block text-white/90 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Mishra
                  </motion.span>
                </motion.h1>

                {/* Advanced Title Rotation with Enhanced Effects */}
                <motion.div
                  className="relative h-16 sm:h-20 lg:h-24 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTitleIndex}
                      className="absolute inset-0 flex items-center justify-center lg:justify-start"
                      initial={{ y: 60, opacity: 0, rotateX: 90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -60, opacity: 0, rotateX: -90 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className="flex items-center gap-4 glass-card px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
                        <FaCode className="text-2xl text-primary-500 animate-pulse" />
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {titles[currentTitleIndex]}
                        </span>
                        <FaRocket className="text-2xl text-secondary-500 animate-bounce" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Enhanced Description with Better Typography */}
              <motion.p
                className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl lg:max-w-none mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Passionate{" "}
                <span className="font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>{" "}
                with{" "}
                <span className="text-accent-400 font-bold text-2xl">2+ years</span>{" "}
                of experience crafting{" "}
                <span className="text-primary-400 font-bold">
                  cutting-edge web applications
                </span>
                .
                <br />
                <span className="text-lg text-gray-400 mt-2 block">
                  Specialized in{" "}
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    React • Angular • C# • ASP.NET Core
                  </span>
                </span>
              </motion.p>

              {/* Ultra-Premium Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    <FaRocket className="group-hover:animate-bounce" />
                    Let's Collaborate
                  </span>
                </motion.button>

                <motion.a
                  href="/Abhishek_Mishra_Resume.pdf"
                  download="Abhishek_Mishra_Resume.pdf"
                  className="group relative px-8 py-4 border-2 border-primary-500/50 text-primary-400 font-semibold rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-primary-500/10 hover:text-white transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaDownload className="group-hover:animate-pulse" />
                    </motion.div>
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Ultra-Premium Profile Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Outer Glow Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-700"></div>

                {/* Image Container with Advanced Effects */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20"></div>

                  {/* Profile Image */}
                  <motion.img
                    src="/abhishek-profile.jpg"
                    alt="Abhishek Mishra - Full Stack Developer"
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 via-transparent to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glass Border Effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>

                  {/* Inner Glow */}
                  <div className="absolute inset-2 rounded-full border border-white/10 group-hover:border-primary-400/50 transition-all duration-500"></div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaCode className="text-white text-xl" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <FaRocket className="text-white text-lg" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{ x: [-3, 3, -3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <FaStar className="text-white text-sm" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Premium Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-8 px-4"
          >
            {[
              {
                icon: <FaGithub size={32} />,
                href: "https://github.com/Am1234567899",
                label: "GitHub",
                color: "hover:text-gray-300",
                bg: "hover:bg-gray-700/20",
              },
              {
                icon: <FaLinkedin size={32} />,
                href: "https://linkedin.com/in/abhishekmishra",
                label: "LinkedIn",
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-500/20",
              },
              {
                icon: <FaEnvelope size={32} />,
                href: "mailto:abhimaster369@gmail.com",
                label: "Email",
                color: "hover:text-accent-400",
                bg: "hover:bg-accent-500/20",
              },
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
                  rotateX: 10,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
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

      </motion.div>
    </section>
  );
};

export default Hero;
