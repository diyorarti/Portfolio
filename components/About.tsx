'use client';

import { motion } from 'framer-motion';

export default function About() {
  const expertise = [
    {
      title: 'Data Analysis',
      description: 'Structured analysis, data cleaning, exploratory analysis, and business-focused reporting.',
    },
    {
      title: 'Machine Learning',
      description: 'Supervised and unsupervised learning with Scikit-learn for real-world prediction tasks.',
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks and TensorFlow workflows for model training and experimentation.',
    },
    {
      title: 'LLM Applications',
      description: 'HuggingFace Transformers, LangChain, RAG pipelines, and FastAPI-based AI services.',
    },
    {
      title: 'Data Quality',
      description: 'Practical experience validating data, spotting anomalies, and maintaining consistency.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a data scientist in progress, currently studying Computer Science at WSB University
              in Silesia, Poland. Over the last three years, I have been building a strong foundation in
              data analysis, machine learning, NLP, and structured problem solving through courses and
              personal projects.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Alongside technical work, I also bring practical data quality experience from the
              pharmaceutical industry, where accuracy, consistency, and careful validation matter every day.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">My Expertise</h3>
            <ul className="space-y-3 text-slate-300">
              {expertise.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mr-3 mt-1 text-neon">{'>'}</span>
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-8 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">Key Achievements</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="mb-2 text-3xl font-bold text-neon">100K+</p>
                <p className="text-slate-300">Orders analyzed across a 9-table e-commerce dataset</p>
              </div>
              <div>
                <p className="mb-2 text-3xl font-bold text-neon">7K+</p>
                <p className="text-slate-300">Telecom churn records explored across 21 features</p>
              </div>
              <div>
                <p className="mb-2 text-3xl font-bold text-neon">90%</p>
                <p className="text-slate-300">Accuracy reached on a fine-tuned medical assistant model</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
