'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { projects } from '@/data/portfolio';

const filters = ['Todos', 'Python', 'React', 'Angular', 'Docker'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? 'bg-accent text-white shadow-glow'
                : 'bg-muted text-foreground/80 hover:bg-accent/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -70 : 80,
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
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm text-foreground/75">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white"
              >
                Ver ao vivo
              </a> )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm"
                >
                  GitHub
                </a> )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
