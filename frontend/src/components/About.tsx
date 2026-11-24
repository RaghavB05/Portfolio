import { profile, stats } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import GlassCard from './GlassCard'
import Counter from './Counter'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          From the first commit to <span className="font-serif font-normal italic text-gradient">production</span>.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'text-zinc-200' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.08} className="h-full">
              <GlassCard className="flex h-full flex-col justify-between p-5 sm:p-6">
                <p className="relative text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                  <span className="text-gradient">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </span>
                </p>
                <p className="relative mt-3 text-sm leading-snug text-zinc-400">{stat.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
