'use client';

import { motion } from 'framer-motion';

export default function About() {
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
              I am a Data Analyst with a passion for uncovering insights from complex datasets. 
              Currently pursuing my Bachelor's degree at WSB University in Poland, I've developed 
              strong analytical skills through real-world projects involving hundreds of thousands of records.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My journey in data science started with a curiosity about how numbers tell stories. 
              Now, I transform raw data into actionable recommendations that drive business growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">My Expertise</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-neon mr-3 mt-1">▸</span>
                <span><strong>Data Analysis:</strong> Extracting insights from 7K-100K+ records</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon mr-3 mt-1">▸</span>
                <span><strong>SQL:</strong> Complex queries, data modeling, PostgreSQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon mr-3 mt-1">▸</span>
                <span><strong>Python:</strong> Pandas, NumPy, Matplotlib, Seaborn</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon mr-3 mt-1">▸</span>
                <span><strong>Excel:</strong> Power Query, Pivot Tables, DAX</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon mr-3 mt-1">▸</span>
                <span><strong>Business Intelligence:</strong> Power BI, data visualization</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-8 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-neon mb-2">98K+</p>
                <p className="text-slate-300">E-commerce transactions analyzed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon mb-2">50K+</p>
                <p className="text-slate-300">Job listings evaluated for trends</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neon mb-2">27%</p>
                <p className="text-slate-300">Customer churn rate analyzed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
