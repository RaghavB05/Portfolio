import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile, stats } from '../data/resume'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 80% 20%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(500px circle at 10% 80%, rgba(56,189,248,0.05), transparent 60%)',
        }}
      />
      <div className="mx-auto grid min-h-screen max-w-5xl items-center gap-12 px-6 pt-24 pb-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p {...fade(0)} className="mb-4 font-mono text-sm text-sky-400">
            Hi, my name is
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl"
          >
            {profile.name}.
          </motion.h1>
          <motion.h2
            {...fade(0.2)}
            className="mt-3 text-3xl font-bold tracking-tight text-slate-500 sm:text-5xl"
          >
            I build software that ships.
          </motion.h2>
          <motion.p {...fade(0.3)} className="mt-6 max-w-xl leading-relaxed text-slate-400">
            {profile.role} at{' '}
            <span className="font-medium text-slate-200">{profile.company}</span>.{' '}
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/60 hover:text-sky-400"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition-colors hover:text-sky-400"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition-colors hover:text-sky-400"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-slate-500 transition-colors hover:text-sky-400"
            >
              <Mail size={20} />
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <div className="grid content-center gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.45 + i * 0.12, ease: 'easeOut' }}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"
            >
              <p className="text-2xl font-bold tracking-tight text-slate-100">
                {stat.value.split(' ')[0]}
                <span className="text-sky-400"> {stat.value.split(' ').slice(1).join(' ')}</span>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
