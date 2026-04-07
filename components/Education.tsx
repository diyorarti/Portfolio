'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree",
      school: 'WSB University',
      location: 'Poland',
      field: 'Computer Science / Business Analytics',
      status: 'In Progress',
      highlights: [
        'Strong foundation in mathematics and statistics',
        'Database design and SQL optimization',
        'Business intelligence and analytics',
        'Data structures and algorithms',
      ],
    },
  ];

  const certifications = [
    'Data Analysis with SQL (Oracle)',
    'Python for Data Science',
    'Business Intelligence & Data Visualization',
    'Excel Advanced Analytics',
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
    <section id="education" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Education & Journey</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                🎓
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-accent mb-1">{education[0].degree}</h3>
                <p className="text-lg font-semibold mb-1">{education[0].school}</p>
                <p className="text-slate-400 text-sm mb-2">{education[0].field}</p>
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-lg text-xs font-semibold">
                  {education[0].status}
                </div>
              </div>
            </div>

            <h4 className="text-accent font-semibold mb-4">Key Coursework:</h4>
            <ul className="space-y-2">
              {education[0].highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-slate-300"
                >
                  <span className="text-neon mr-3 mt-1">✓</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                🏆
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent">Certifications</h3>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-secondary rounded-lg border border-neon/20 hover:border-neon transition-smooth"
                >
                  <p className="text-slate-200 font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Path */}
          <motion.div variants={itemVariants} className="glass rounded-xl p-8 md:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-accent">My Learning Path</h3>

            <div className="space-y-6">
              {[
                {
                  year: '2024',
                  milestone: 'Advanced SQL & Database Optimization',
                  description: 'Mastered complex SQL queries and database performance tuning',
                },
                {
                  year: '2024',
                  milestone: 'Business Intelligence & Analytics',
                  description: 'Deep dive into Power BI, data visualization, and business metrics',
                },
                {
                  year: '2025',
                  milestone: 'Web Development (React, Next.js)',
                  description: 'Expanded into full-stack development with modern frameworks',
                },
                {
                  year: 'Current',
                  milestone: 'Advanced Data Science & ML',
                  description: 'Exploring machine learning and predictive analytics techniques',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    {index < 3 && <div className="w-1 h-12 bg-accent/30"></div>}
                  </div>
                  <div className="flex-grow">
                    <p className="text-neon text-sm font-semibold mb-1">{item.year}</p>
                    <h4 className="text-lg font-bold mb-1">{item.milestone}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
