import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="block" aria-label={`Open ${project.name}`}>
      <motion.article
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        whileHover={{ y: -4 }}
        className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
      >
        {project.images?.[0] && (
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.cover}
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <span className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
              {project.year}
            </span>
          </div>

          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mt-3 text-sm list-disc ml-5 space-y-1">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
