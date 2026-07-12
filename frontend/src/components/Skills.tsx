import { skills } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={0.08 * i} className="h-full">
            <div className="h-full rounded-lg border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-700/70 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
