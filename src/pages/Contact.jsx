import React, { useState } from 'react'
import { Mail, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { PROFILE } from '../data'

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [botField, setBotField] = useState('')
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const isValid = name.trim() && email.trim() && message.trim().length >= 10
  const disabled = status.state === 'loading' || !isValid

  async function onSubmit(e) {
    e.preventDefault()
    if (botField) return

    // Fallback: open mail client if no endpoint configured
    if (!FORM_ENDPOINT) {
      const mailto = `${PROFILE.email}?subject=${encodeURIComponent(subject || 'Contact via portfolio')}&body=${encodeURIComponent(
        `From: ${name} <${email}>\n\n${message}`
      )}`
      window.location.href = mailto
      return
    }

    try {
      setStatus({ state: 'loading', msg: '' })
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong')
      }
      setStatus({ state: 'success', msg: 'Thanks! I will get back to you soon.' })
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Failed to send. Try again later.' })
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">Want to jam, collaborate, or discuss a contract? Drop a message here.</p>

      <div className="mt-6">
        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
          {/* Honeypot */}
          <input type="text" value={botField} onChange={(e) => setBotField(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Subject (optional)</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="w-full px-3 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Tell me about your idea, jam, or contract…" />
            <p className="mt-1 text-xs text-neutral-500">Min 10 characters</p>
          </div>

          {status.state === 'success' && (
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /><span>{status.msg}</span></div>
          )}
          {status.state === 'error' && (
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400"><AlertTriangle className="w-4 h-4" /><span>{status.msg}</span></div>
          )}

          <div className="flex items-center gap-3">
            <button type="submit" disabled={disabled} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 disabled:opacity-60">
              {status.state === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
              {status.state === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            <a href={PROFILE.email} className="text-sm underline text-neutral-600 dark:text-neutral-300">
              or email me directly
            </a>
          </div>

          {!FORM_ENDPOINT && (
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Tip: set <code className="px-1 rounded bg-neutral-100 dark:bg-neutral-800">VITE_FORMSPREE_ENDPOINT</code> to enable direct form delivery.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
