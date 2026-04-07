'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sales Revenue Analysis for an E-Commerce Platform',
      date: 'December 2025',
      description:
        'Analyzed a 100K+ order e-commerce dataset across 9 relational tables to evaluate revenue performance and order dynamics.',
      tech: ['SQL', 'CTEs', 'JOINs', 'Aggregation', 'Business Metrics'],
      highlights: [
        'Built SQL queries to combine transactional data and compute core business metrics.',
        'Investigated monthly revenue trends, order dynamics, and average items per order.',
        'Identified top revenue-generating product categories and key sales drivers.',
      ],
      github: 'https://github.com/diyorarti/Sales-Revenue_Analysis_for_an_E-Commerce_Platform',
    },
    {
      id: 2,
      title: 'Customer Churn Analysis',
      date: 'January 2026',
      description:
        'Used Python to analyze a telecom churn dataset with 7,000+ records and 21 features to understand churn behavior.',
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Performed cleaning, EDA, correlation analysis, and feature relationship analysis.',
        'Visualized churn patterns across contract type, tenure, and customer behavior.',
        'Found that monthly contracts showed 42% churn versus 11% and 2.8% for longer terms.',
      ],
      github: 'https://github.com/diyorarti/Customer_Churn_Analysis',
    },
    {
      id: 3,
      title: 'Fine-Tuned Medical Assistant',
      date: 'October 2025',
      description:
        'Fine-tuned a 3B-parameter medical language model with LoRA and deployed it as a production-style API.',
      tech: ['LoRA', 'PEFT', 'FastAPI', 'Docker', 'Hugging Face'],
      highlights: [
        'Reached roughly 90% accuracy while reducing loss from 7.0 to 1.0.',
        'Designed a hybrid training strategy to balance direct answers with clinical reasoning.',
        'Containerized the service and deployed it publicly with scalable API access.',
      ],
      github: 'https://github.com/diyorarti/Medical-assistant',
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
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Featured Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group hover:border-accent transition-smooth"
            >
              <div className="p-8 h-full flex flex-col">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
                  {project.date}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight) => (
                    <p key={highlight} className="text-xs text-slate-300">
                      {'>'} {highlight}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-lg text-xs text-accent border border-accent/20 hover:border-accent transition-smooth"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="mt-auto text-accent font-semibold text-sm hover:text-neon transition-smooth"
                >
                  View on GitHub {'->'}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/diyorarti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-smooth"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
