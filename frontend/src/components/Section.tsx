import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 ${className}`}>
      <Reveal>
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-300/80 uppercase">
            <span className="h-px w-8 bg-accent-gradient" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{intro}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  )
}
