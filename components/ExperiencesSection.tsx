'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';

export function ExperiencesSection() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.title}
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.08
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="card p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
             <h3 className="text-xl font-semibold">
                {exp.title}
                <span className="text-accent"> • {exp.company}</span>
            </h3>
              <span className="text-sm text-accent font-medium">
                {exp.period}
              </span>
            </div>

            <p className="mt-3 text-sm text-foreground/75">
              {exp.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}