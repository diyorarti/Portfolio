'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Data',
      skills: ['Python', 'NumPy', 'Pandas', 'SQL', 'PostgreSQL', 'FastAPI'],
      icon: '01',
    },
    {
      title: 'Analytics & Visualization',
      skills: ['Excel', 'Pivot Tables', 'Power Query', 'Power BI', 'Matplotlib', 'Seaborn'],
      icon: '02',
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'Classification', 'Supervised Learning', 'Unsupervised Learning', 'TensorFlow', 'Neural Networks'],
      icon: '03',
    },
    {
      title: 'LLM & Tools',
      skills: ['HuggingFace Transformers', 'LangChain', 'RAG', 'Git', 'GitHub', 'Docker'],
      icon: '04',
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

  const proficiencies = [
    { name: 'Python & Data Analysis', level: 90 },
    { name: 'SQL & Relational Data', level: 88 },
    { name: 'Machine Learning', level: 84 },
    { name: 'Deep Learning & NLP', level: 78 },
    { name: 'Power BI & Excel', level: 85 },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Skills & Expertise</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-8 hover:border-accent transition-smooth"
            >
              <div className="flex items-center mb-6">
                <span className="mr-3 text-lg font-bold text-neon">{category.icon}</span>
                <h3 className="text-2xl font-bold text-accent">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-neon border border-neon/20 hover:border-neon hover:bg-neon/10 transition-smooth"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencies.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-accent to-neon"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
