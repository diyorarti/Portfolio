'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data & Analytics',
      skills: ['SQL (PostgreSQL)', 'Python', 'Pandas', 'NumPy', 'Excel', 'Power BI'],
      icon: '📊',
    },
    {
      title: 'Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Power Query', 'Pivot Tables', 'DAX', 'Data Storytelling'],
      icon: '📈',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'PostgreSQL', 'Excel', 'Power BI'],
      icon: '🛠️',
    },
    {
      title: 'Web Development',
      skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
      icon: '💻',
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
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-8 hover:border-accent transition-smooth"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
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

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: 'SQL & Database Management', level: 95 },
              { name: 'Python & Data Analysis', level: 90 },
              { name: 'Excel & Power BI', level: 85 },
              { name: 'Web Development (React/Next.js)', level: 80 },
              { name: 'Business Intelligence & Analytics', level: 90 },
            ].map((skill, index) => (
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
