'use client';

import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import Globe3D from './Globe3D';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-accent font-semibold mb-2">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Diyorbek</span>
            </h1>
            <p className="text-2xl text-secondary mb-6">Data Scientist</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
          >
            I analyze complex datasets to drive business decisions. With expertise in SQL, Python, and business intelligence, 
            I uncover insights from 7K-100K+ records to help companies grow strategically.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <motion.button
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-neon transition-smooth"
            >
              <a href="#projects">View Projects</a>
            </motion.button>

            <motion.a
              href="mailto:diyorarti@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-smooth"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-8">
            <a
              href="https://github.com/diyorarti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-accent transition-smooth"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diyorarti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-accent transition-smooth"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block"
        >
          <Suspense fallback={<div className="h-96 bg-secondary rounded-lg" />}>
            <div className="glass-darker rounded-2xl p-8">
              <Globe3D />
            </div>
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
