import React, { useState } from 'react'
import { Search, Filter as FilterIcon, Tag, ChevronDown } from 'lucide-react'

export default function Filters({ ALL_TAGS, search, setSearch, selectedTags, toggleTag, clearTags, sort, setSort }) {
  const [open, setOpen] = useState(false)
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search by name, description, or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <button onClick={() => setOpen(v => !v)} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800">
              <FilterIcon className="w-4 h-4" /> Tags <ChevronDown className="w-4 h-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-72 max-h-80 overflow-auto z-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-lg">
                <div className="grid grid-cols-2 gap-2">
                  {ALL_TAGS.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleTag(t)}
                      className={
                        'inline-flex items-center gap-2 px-2 py-1 rounded-xl border text-sm ' +
                        (selectedTags.includes(t)
                          ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-900'
                          : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700')
                      }
                    >
                      <Tag className="w-3.5 h-3.5" /> {t}
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-right">
                  <button onClick={clearTags} className="text-sm text-neutral-500 hover:underline">Clear all</button>
                </div>
              </div>
            )}
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60">
            <option value="year-desc">Newest first</option>
            <option value="year-asc">Oldest first</option>
            <option value="name-asc">Name A→Z</option>
            <option value="name-desc">Name Z→A</option>
          </select>
        </div>
      </div>
      {selectedTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedTags.map((t) => (
            <button key={t} onClick={() => toggleTag(t)} className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-900">
              {t} ✕
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
