'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const responsibilities = [
    'Conduct data validation and quality checks on pharmaceutical inventory records.',
    'Detect anomalies, flag inconsistencies, and help maintain reliable operational data.',
    'Work in a compliance-focused environment where accuracy and consistency are critical.',
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon">Current Role</p>
              <h3 className="mt-2 text-2xl font-bold text-accent">
                Quality Control Assistant
              </h3>
              <p className="text-lg font-semibold text-slate-200">
                Pharmaceutical Products
              </p>
              <p className="text-slate-400">Katowice, Silesian, Poland</p>
            </div>
            <div className="rounded-lg bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              December 2023 - Present
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {responsibilities.map((item) => (
              <div key={item} className="rounded-xl border border-neon/20 bg-secondary p-5">
                <p className="text-sm leading-relaxed text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
