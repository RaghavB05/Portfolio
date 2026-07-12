import { MapPin, TrendingUp } from 'lucide-react'
import { experience } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="space-y-12">
        {experience.map((job, jobIndex) => (
          <Reveal key={job.company} delay={0.1 * jobIndex}>
            <div className="relative border-l border-slate-800 pl-8">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-sky-400" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  {job.role}
                  <span className="text-sky-400"> · {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-slate-500">{job.period}</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {job.location}
                </span>
                {job.promotion && (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400/90">
                    <TrendingUp size={13} />
                    {job.promotion}
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-4">
                {job.highlights.map((highlight) => (
                  <div
                    key={highlight.name}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700"
                  >
                    <p className="text-sm font-semibold text-slate-200">
                      {highlight.name}
                      {highlight.client && (
                        <span className="ml-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 text-xs font-medium text-sky-300">
                          {highlight.client}
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
