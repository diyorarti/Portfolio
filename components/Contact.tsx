'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let&apos;s Connect</h2>
          <p className="text-lg text-slate-300 mb-12">
            Open to data roles, machine learning work, and collaborations around analytics or AI products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-accent">Get in Touch</h3>

              <motion.a
                href="mailto:diyorarti@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth mb-4"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  @
                </div>
                <div>
                  <p className="font-semibold text-accent">Email</p>
                  <p className="text-slate-300">diyorarti@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/diyorarti/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth mb-4"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  in
                </div>
                <div>
                  <p className="font-semibold text-accent">LinkedIn</p>
                  <p className="text-slate-300">linkedin.com/in/diyorarti</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/diyorarti"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth mb-4"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  gh
                </div>
                <div>
                  <p className="font-semibold text-accent">GitHub</p>
                  <p className="text-slate-300">github.com/diyorarti</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  PL
                </div>
                <div>
                  <p className="font-semibold text-accent">Location</p>
                  <p className="text-slate-300">Katowice, Silesian, Poland</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Send Me a Message</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition-smooth text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition-smooth text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-secondary border border-slate-600 rounded-lg focus:outline-none focus:border-accent transition-smooth text-white"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-neon transition-smooth"
              >
                {isSubmitted ? 'Message Sent' : 'Send Message'}
              </motion.button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-neon mt-4 text-sm"
                >
                  Thanks. I will get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
