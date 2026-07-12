import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, index, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-6 py-20 sm:py-24 ${className}`}>
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-sky-400">{index}</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
      </Reveal>
      {children}
    </section>
  )
}
