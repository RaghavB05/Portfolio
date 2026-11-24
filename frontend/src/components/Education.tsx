import { Award, GraduationCap } from 'lucide-react'
import { achievements, education } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import GlassCard from './GlassCard'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title={
        <>
          Education & <span className="font-serif font-normal italic text-gradient">leadership</span>.
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={0.06 * i} className="h-full">
            <GlassCard className="h-full p-6">
              <div className="relative flex gap-4">
                <GraduationCap size={20} className="mt-0.5 shrink-0 text-violet-300" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-zinc-100">{item.school}</h3>
                    <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{item.degree}</p>
                  <p className="mt-3 inline-block rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-0.5 font-mono text-xs text-violet-200">
                    {item.detail}
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={0.12 + 0.06 * i} className="h-full">
            <GlassCard className="h-full p-6">
              <div className="relative flex gap-4">
                <Award size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
