import React from 'react'
import { Github, PlayCircle, Youtube, Twitter, Instagram } from 'lucide-react'
import { PROFILE, SKILLS, PROJECTS } from '../data'
import QuickLink from '../components/QuickLink.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Home() {
  const avatar = PROFILE.avatar || 'https://placehold.co/256x256?text=BAM'

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={`${PROFILE.name} avatar`}
              className="w-24 h-24 rounded-full ring-2 ring-indigo-200 dark:ring-indigo-900 object-cover"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{PROFILE.title}</h1>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">{PROFILE.bio}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur bg-white/50 dark:bg-neutral-900/50 shadow-sm">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="grid sm:grid-cols-5 gap-3">
              <QuickLink href={PROFILE.links.github} icon={<Github className="w-4 h-4" />} label="GitHub" />
              <QuickLink href={PROFILE.links.itch} icon={<PlayCircle className="w-4 h-4" />} label="Itch.io" />
              <QuickLink href={PROFILE.links.youtube} icon={<Youtube className="w-4 h-4" />} label="YouTube" />
              <QuickLink href={PROFILE.links.twitter} icon={<Twitter className="w-4 h-4" />} label="Twitter" />
              <QuickLink href={PROFILE.links.instagram} icon={<Instagram className="w-4 h-4" />} label="Instagram" />
            </div>
          </div>

          {/* Skills box */}
          <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 backdrop-blur bg-white/50 dark:bg-neutral-900/50 shadow-sm mt-4">
            <h3 className="font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured projects */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Featured</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
