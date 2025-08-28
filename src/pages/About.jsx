import React from 'react'
import { PROFILE } from '../data'

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        I'm {PROFILE.name}, an indie game developer passionate about creating fun, 
        polished, and memorable games. My focus lies in game feel and
         robust systems, where I combine technical problem-solving with creativity to
          craft engaging gameplay loops and visually expressive mechanics.
      I enjoy rapid prototyping, iterating on ideas quickly, and building systems
       that are scalable and easy to extend. My background covers Unity (C#) for core game development, 
       shaders (URP basics) for adding visual depth, and web technologies like React for web and custom workflows.In addition to indie development, I completed a 3-month
        internship at Webmobi, where I contributed to multiplayer project, collaborated with cross-functional
         teams, and sharpened my skills in modern game development and multiplayer system using photon. This experience strengthened my ability
          to adapt across domains and reinforced my interest in building engaging games.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 className="font-semibold mb-2">What I enjoy</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Gameplay programming & rapid prototyping — quickly testing ideas and bringing concepts to life.</li>
            <li>Designing systems with ScriptableObjects — clean, data-driven architectures that simplify iteration.</li>
            <li>Game juice — adding polish through camera shake, hitstop, and visual effects to elevate the player’s experience.</li>
            <li>Participating in jams — creating small, focused projects under tight constraints, then refining them into polished experiences.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Game Development & programming: Unity, C#, C++, Python</li>
            <li>Gameplay & Systems: DOTween, Cinemachine, ScriptableObjects, Objectpooling, Design Patterns</li>
            <li>Audio & Art: Audacity, Photoshop</li>
            <li>Web: HTML, CSS, Javascript, React, Node</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
