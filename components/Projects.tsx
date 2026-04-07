'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revenue Analysis',
      description: 'Analyzed 98K+ e-commerce transactions to uncover revenue trends and product performance patterns',
      tech: ['SQL', 'Python', 'Pandas', 'Matplotlib'],
      problem: 'Identify high-performing products and revenue growth opportunities',
      github: 'https://github.com/diyorarti',
      featured: true,
    },
    {
      id: 2,
      title: 'Job Market Salary Trends',
      description: 'Evaluated 50K+ job listings to identify salary trends, regional differences, and high-demand skills',
      tech: ['Python', 'Seaborn', 'SQL', 'Data Analysis'],
      problem: 'Understand salary variations and skill demand across regions',
      github: 'https://github.com/diyorarti',
      featured: true,
    },
    {
      id: 3,
      title: 'Customer Churn Analysis',
      description: 'Investigated telecom customer churn (27% rate) to identify high-risk segments and develop retention insights',
      tech: ['SQL', 'Python', 'Power BI', 'Analytics'],
      problem: 'Reduce customer churn through targeted retention strategies',
      github: 'https://github.com/diyorarti',
      featured: true,
    },
    {
      id: 4,
      title: 'Data Dashboard Project',
      description: 'Built interactive Power BI dashboards for business intelligence and real-time monitoring',
      tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
      problem: 'Create real-time insights for business decision making',
      github: 'https://github.com/diyorarti',
      featured: false,
    },
    {
      id: 5,
      title: 'Marketing Analytics',
      description: 'Analyzed marketing campaign performance and customer segmentation',
      tech: ['Python', 'Pandas', 'SQL', 'Matplotlib'],
      problem: 'Optimize marketing spend and improve ROI',
      github: 'https://github.com/diyorarti',
      featured: false,
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      description: 'Optimized inventory management through predictive analytics',
      tech: ['SQL', 'Python', 'Seaborn', 'Analytics'],
      problem: 'Reduce inventory costs while maintaining service levels',
      github: 'https://github.com/diyorarti',
      featured: false,
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

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group hover:border-accent transition-smooth"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-neon mb-2 font-semibold">Problem Solved:</p>
                  <p className="text-slate-400 text-xs">{project.problem}</p>
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
                  className="text-accent font-semibold text-sm hover:text-neon transition-smooth"
                >
                  View on GitHub →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">Other Notable Projects</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-lg p-6 hover:border-accent transition-smooth group"
              >
                <h4 className="font-semibold mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:text-neon transition-smooth"
                >
                  GitHub →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* View All Projects */}
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
