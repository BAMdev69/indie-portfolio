import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data'
import { PlayCircle, Github, Youtube, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function YouTubeEmbed({ id }) {
  if (!id) return null
  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = useMemo(() => PROJECTS.find(p => p.id === id), [id])
  const [lightbox, setLightbox] = useState(null)

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <p className="mt-2">The project you’re looking for doesn’t exist.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
      <Link to="/projects" className="inline-flex items-center gap-2 mb-4 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <ArrowLeft className="w-4 h-4" /> Back to projects
      </Link>

      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-3xl">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="mt-4 list-disc ml-6 space-y-1 text-sm">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{t}</span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.links?.play && (
          <a href={project.links.play} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <PlayCircle className="w-4 h-4" /> Play on Itch
          </a>
        )}
        {project.links?.repo && (
          <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Github className="w-4 h-4" /> Source code
          </a>
        )}
        {project.links?.trailer && (
          <a href={project.links.trailer} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Youtube className="w-4 h-4" /> Trailer (YouTube)
          </a>
        )}
        {project.links?.devlog && (
          <a href={project.links.devlog} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <Youtube className="w-4 h-4" /> Devlog
          </a>
        )}
      </div>

      {(project.youtubeId || project.devlogYoutubeId) && (
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {project.youtubeId && (
            <div>
              <h3 className="font-semibold mb-2">Trailer / Gameplay</h3>
              <YouTubeEmbed id={project.youtubeId} />
            </div>
          )}
          {project.devlogYoutubeId && (
            <div>
              <h3 className="font-semibold mb-2">Devlog</h3>
              <YouTubeEmbed id={project.devlogYoutubeId} />
            </div>
          )}
        </div>
      )}

      {project.images?.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Gallery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.images.map((src, i) => (
              <button key={i} onClick={() => setLightbox(i)} className="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <img src={src} alt={`${project.name} ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <img src={project.images[lightbox]} alt="" className="max-h-[85vh] rounded-2xl border border-neutral-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
