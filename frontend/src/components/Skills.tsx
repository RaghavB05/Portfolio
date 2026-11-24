import { Boxes, Cloud, Code2, Database, Server } from 'lucide-react'
import { marquee, skills } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'
import GlassCard from './GlassCard'

const icons = [Code2, Boxes, Server, Cloud, Database]

function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="mask-fade-x relative mb-12 overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= marquee.length}
            className="glass rounded-full px-5 py-2 text-sm whitespace-nowrap text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={
        <>
          The <span className="font-serif font-normal italic text-gradient">stack</span> I work in.
        </>
      }
    >
      <Marquee />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal
              key={group.category}
              delay={0.06 * i}
              className={`h-full ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
            >
              <GlassCard className="h-full p-6">
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-linear-to-br from-violet-500/20 to-cyan-400/10 text-violet-200">
                      <Icon size={17} />
                    </span>
                    <h3 className="font-medium text-zinc-100">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/7 bg-white/3 px-2.5 py-1 text-sm text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
