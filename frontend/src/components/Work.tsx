import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { featuredWork, type FeaturedWork } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import GlassCard from './GlassCard'
import WorkVisual from './WorkVisual'

function WorkCard({ work, featured }: { work: FeaturedWork; featured?: boolean }) {
  // The flagship card is always expanded; the others reveal their details on demand.
  const [open, setOpen] = useState(!!featured)

  return (
    <GlassCard className={`flex h-full flex-col overflow-hidden ${featured ? 'lg:flex-row' : ''}`}>
      {/* Visual header */}
      <div
        className={`relative shrink-0 border-white/6 bg-linear-to-br from-violet-500/8 via-transparent to-cyan-400/6 ${
          featured ? 'h-52 border-b lg:h-auto lg:w-[42%] lg:border-r lg:border-b-0' : 'h-44 border-b'
        }`}
      >
        <WorkVisual variant={work.visual} />
        <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-wider text-zinc-300 uppercase backdrop-blur">
          {work.context}
        </span>
      </div>

      <div className={`relative flex flex-1 flex-col ${featured ? 'p-6 sm:p-8' : 'p-6'}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className={`font-semibold tracking-tight text-zinc-50 ${featured ? 'text-3xl' : 'text-2xl'}`}>
            {work.name}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {work.status}
          </span>
        </div>
        <p className="mt-2 leading-relaxed text-zinc-400">{work.tagline}</p>

        <dl className={`mt-5 grid gap-3 ${work.metrics.length > 1 ? 'grid-cols-3' : 'grid-cols-1'}`}>
          {work.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/6 bg-white/2.5 px-3 py-2.5">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-lg font-semibold tracking-tight text-gradient sm:text-xl">{m.value}</dd>
              <dd className="mt-0.5 text-[11px] leading-tight text-zinc-500">{m.label}</dd>
            </div>
          ))}
        </dl>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-2.5 pt-5">
                {work.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-1.5">
            {work.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/8 bg-white/3 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
              >
                {t}
              </li>
            ))}
          </ul>
          {!featured && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              {open ? 'Show less' : 'What I built'}
              <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export default function Work() {
  const [flagship, ...rest] = featuredWork
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={
        <>
          Products I’ve <span className="font-serif font-normal italic text-gradient">built</span>.
        </>
      }
      intro="Client and in-house products from my time at Alumnus Software, from a fintech platform in closed beta to an Android app piloted in US retail stores."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-3">
          <WorkCard work={flagship} featured />
        </Reveal>
        {rest.map((work, i) => (
          <Reveal key={work.id} delay={0.08 * i} className="h-full">
            <WorkCard work={work} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
