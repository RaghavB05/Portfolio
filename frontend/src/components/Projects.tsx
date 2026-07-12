import { ExternalLink, Folder } from 'lucide-react'
import { GithubIcon } from './icons'
import { projects } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.08 * i} className="h-full">
            <article className="group flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:-translate-y-1 hover:border-sky-400/40">
              <div className="flex items-center justify-between">
                <Folder size={26} className="text-sky-400" strokeWidth={1.5} />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-slate-500 transition-colors hover:text-sky-400"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live site`}
                      className="text-slate-500 transition-colors hover:text-sky-400"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-100 transition-colors group-hover:text-sky-400">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="font-mono text-xs text-slate-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
