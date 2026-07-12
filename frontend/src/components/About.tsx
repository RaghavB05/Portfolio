import { profile } from '../data/resume'
import Section from './Section'
import Reveal from './Reveal'

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal delay={0.1}>
        <div className="max-w-3xl space-y-4 leading-relaxed">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
