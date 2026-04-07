'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import portraitImage from '@/assets/image.png';

export default function Hero() {
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
              Hi, I&apos;m <span className="gradient-text">Diyorbek</span>
            </h1>
            <p className="text-2xl text-secondary mb-6">Data Scientist | ML, NLP, and Generative AI</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
          >
            Data enthusiast currently pursuing a bachelor&apos;s degree in Computer Science with hands-on
            experience in Python, SQL, machine learning, deep learning, and LLM-powered applications.
            I turn structured data and real-world problems into clear, usable solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8 text-sm text-slate-300">
            <span className="rounded-lg border border-accent/20 bg-secondary px-4 py-2">
              Katowice, Silesian, Poland
            </span>
            <span className="rounded-lg border border-accent/20 bg-secondary px-4 py-2">
              +48 793 513 399
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <motion.button
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="glass-darker rounded-[2rem] p-4">
            <div className="relative mx-auto aspect-[9/10] max-w-xl overflow-hidden rounded-[2rem] border border-accent/20 bg-gradient-to-br from-secondary via-primary to-secondary shadow-[0_0_60px_rgba(56,189,248,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%)]" />
              <div className="absolute inset-x-10 top-8 h-10 rounded-full border border-neon/40 bg-neon/10 blur-sm" />
              <div className="absolute inset-y-12 -right-10 w-24 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src={portraitImage}
                alt="Portrait of Diyorbek Tirkashov"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
            </div>
          </div>
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
