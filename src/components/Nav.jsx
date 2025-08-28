import React from 'react'
import { NavLink } from 'react-router-dom'
import { Gamepad2, Github, PlayCircle, Youtube, Sun, Moon, Twitter, Instagram } from 'lucide-react'
import { PROFILE } from '../data'

export default function Nav({ theme, onToggleTheme }) {
  const link = ({ isActive }) => (
    'px-3 py-2 rounded-xl text-sm ' + (isActive ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800')
  )
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6" />
          <span className="font-semibold">{PROFILE.name}</span>
          <span className="hidden sm:inline text-neutral-500">• {PROFILE.location}</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"><Github className="w-5 h-5" /></a>
          <a href={PROFILE.links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"><Youtube className="w-5 h-5" /></a>
          <a href={PROFILE.links.itch} target="_blank" rel="noreferrer" aria-label="Itch.io" className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"><PlayCircle className="w-5 h-5" /></a>
          <a href={PROFILE.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"><Twitter className="w-5 h-5" /></a>
          <a href={PROFILE.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"><Instagram className="w-5 h-5" /></a>
          <button
            onClick={() => {
              const quips = [
                '🖤 Real developers use dark mode.',
                'No light mode for you 😎',
                'Dark mode = +10 FPS.',
                'Light mode? That’s a QA bug.',
                'Too bright. Touch grass instead.'
              ];
              alert(quips[Math.floor(Math.random()*quips.length)]);
            }}
            className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex gap-2">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/contact" className={link}>Contact/Socials</NavLink>
        </div>
      </div>
    </header>
  )
}
