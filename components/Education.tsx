'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = {
    degree: 'Bachelor of Science in Computer Science',
    school: 'WSB University',
    location: 'Silesian, Poland',
    field: 'Major: Security and Continuity of IT',
    status: 'Expected February 2027',
    highlights: [
      'Building a strong foundation in computer science, data analysis, and machine learning.',
      'Combining academic study with personal projects in NLP, deep learning, and LLM applications.',
      'Growing practical problem-solving skills through project-based technical work.',
    ],
  };

  const certifications = [
    'Excel for Data Analytics | Power BI for Data Analytics - Luke Barousse (February 2026)',
    'SQL Problem Solving | SQL for Data Science - University of California, Davis (November 2025 to January 2026)',
    'Data Science and Artificial Intelligence Track - Bootcamp, Mohirdev (January 2023 to March 2026)',
  ];

  const learningPath = [
    {
      year: '2023',
      milestone: 'Data Science Bootcamp Start',
      description: 'Started a long-form AI and data science learning track focused on fundamentals and applied projects.',
    },
    {
      year: '2025',
      milestone: 'SQL and Applied Analysis',
      description: 'Built stronger hands-on experience in relational data, business metrics, and structured analytics.',
    },
    {
      year: '2025',
      milestone: 'ML, NLP, and LLM Projects',
      description: 'Expanded into churn modeling, fine-tuning, FastAPI services, Docker, and production-style deployment.',
    },
    {
      year: '2027',
      milestone: 'BSc Completion Target',
      description: 'Expected graduation from WSB University with a Computer Science degree.',
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
    <section id="education" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Education & Growth</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon">Degree</p>
              <h3 className="mt-2 text-2xl font-bold text-accent">{education.degree}</h3>
              <p className="text-lg font-semibold">{education.school}</p>
              <p className="text-slate-400 text-sm mb-2">{education.location}</p>
              <p className="text-slate-300 mb-4">{education.field}</p>
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-lg text-xs font-semibold">
                {education.status}
              </div>
            </div>

            <h4 className="text-accent font-semibold mb-4">Highlights</h4>
            <ul className="space-y-2">
              {education.highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-slate-300"
                >
                  <span className="mr-3 mt-1 text-neon">{'>'}</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-8">
            <h3 className="text-2xl font-bold text-accent mb-6">Certificates</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
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

          <motion.div variants={itemVariants} className="glass rounded-xl p-8 md:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-accent">Learning Path</h3>

            <div className="space-y-6">
              {learningPath.map((item, index) => (
                <motion.div
                  key={item.milestone}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    {index < learningPath.length - 1 && <div className="w-1 h-12 bg-accent/30"></div>}
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
