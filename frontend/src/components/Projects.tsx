import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import { projects } from '../data/resume'
import Reveal from './Reveal'
import GlassCard from './GlassCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-200">Side projects & earlier work</h3>
          <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
        </div>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          const href = project.live ?? project.github
          return (
            <Reveal key={project.title} delay={0.06 * i} className="h-full">
              <GlassCard className="group h-full p-5">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex h-full flex-col"
                  aria-label={`${project.title} (${project.live ? 'live site' : 'source on GitHub'})`}
                >
                  <div className="flex items-center justify-between text-zinc-500">
                    {project.live ? (
                      <span className="font-mono text-[10px] tracking-wider uppercase">Live</span>
                    ) : (
                      <GithubIcon size={16} />
                    )}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300"
                    />
                  </div>
                  <h4 className="mt-4 font-semibold text-zinc-100">{project.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{project.description}</p>
                  <p className="mt-4 font-mono text-[11px] text-zinc-500">{project.tech.join(' · ')}</p>
                </a>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
