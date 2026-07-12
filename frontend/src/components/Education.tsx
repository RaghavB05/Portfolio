import { Award, GraduationCap } from 'lucide-react'
import { achievements, education } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & Achievements">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full space-y-4">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"
              >
                <div className="flex items-start gap-4">
                  <GraduationCap size={20} className="mt-1 shrink-0 text-sky-400" />
                  <div>
                    <h3 className="font-semibold text-slate-100">{item.school}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.degree}</p>
                    <p className="mt-2 font-mono text-xs text-slate-500">
                      {item.period} · {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-full space-y-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"
              >
                <div className="flex items-start gap-4">
                  <Award size={20} className="mt-1 shrink-0 text-sky-400" />
                  <div>
                    <h3 className="font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
