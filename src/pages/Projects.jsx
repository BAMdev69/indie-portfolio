import React, { useMemo } from 'react'
import { PROJECTS } from '../data'
import ProjectCard from '../components/ProjectCard.jsx'
import { motion } from 'framer-motion'

export default function Projects() {
  const sorted = useMemo(() => [...PROJECTS].sort((a, b) => b.year - a.year), [])

  return (
    <div className="pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {sorted.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-10 border rounded-3xl border-neutral-200 dark:border-neutral-800">
            No projects yet.
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
