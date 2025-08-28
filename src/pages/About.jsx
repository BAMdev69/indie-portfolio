import React from 'react'
import { PROFILE } from '../data'

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        I'm {PROFILE.name}, an indie developer focused on game feel and robust systems.
        I prototype fast, profile early, and ship scope-smart. Experience across Unity (C#),
        shaders (URP basics), and web tech for tooling and portfolio sites.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 className="font-semibold mb-2">What I enjoy</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Gameplay programming & rapid prototyping</li>
            <li>Designing systems with ScriptableObjects</li>
            <li>Game juice: camera shake, hitstop, VFX</li>
            <li>Participating in jams and polishing small experiences</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Unity, Rider/VS, Git, PlasticSCM</li>
            <li>DOTween, Cinemachine, Addressables</li>
            <li>FMOD/Wwise (basics), Aseprite, Figma</li>
            <li>React/TypeScript for web tooling</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
