import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'
import { experience } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import GlassCard from './GlassCard'

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 70%', 'end 60%'] })

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I’ve <span className="font-serif font-normal italic text-gradient">shipped</span>.
        </>
      }
    >
      <div ref={lineRef} className="relative">
        {/* Timeline rail that fills as you scroll */}
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:left-[calc(30%+7px)]" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-linear-to-b from-violet-400 via-indigo-400 to-cyan-400 md:left-[calc(30%+7px)]"
        />

        <div className="space-y-16">
          {experience.map((job) => (
            <div key={job.company} className="relative grid gap-6 md:grid-cols-[30%_1fr] md:gap-0">
              {/* Left column: company + roles */}
              <Reveal className="pl-10 md:pr-12 md:pl-0 md:text-right">
                <div className="md:sticky md:top-28">
                  <p className="font-mono text-xs text-zinc-500">{job.period}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50">{job.company}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-500">
                    <MapPin size={13} />
                    {job.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.roles.map((role, i) => (
                      <li key={role.title} className="text-sm">
                        <span className={i === 0 ? 'font-medium text-violet-300' : 'text-zinc-400'}>
                          {role.title}
                        </span>
                        <span className="block font-mono text-[11px] text-zinc-600">{role.period}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Node on the rail */}
              <span className="absolute top-1.5 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border border-violet-400/50 bg-ink md:left-[30%]">
                <span className="h-[5px] w-[5px] rounded-full bg-violet-300 shadow-[0_0_12px_2px_rgb(167_139_250/0.8)]" />
              </span>

              {/* Right column: projects */}
              <div className="pl-10 md:pl-12">
                <Reveal delay={0.05}>
                  <p className="max-w-2xl leading-relaxed text-zinc-400">{job.summary}</p>
                </Reveal>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {job.projects.map((project, i) => (
                    <Reveal key={project.name} delay={0.08 + i * 0.06} className="h-full">
                      <GlassCard className="h-full p-5">
                        <div className="relative">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-zinc-100">{project.name}</h4>
                            <span className="rounded-full border border-white/10 bg-white/4 px-2 py-0.5 text-[11px] text-zinc-400">
                              {project.context}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.text}</p>
                        </div>
                      </GlassCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
