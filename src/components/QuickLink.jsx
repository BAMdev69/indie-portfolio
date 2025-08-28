import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function QuickLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-3 hover:shadow-sm hover:-translate-y-0.5 transition"
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium">{icon}{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  )
}
