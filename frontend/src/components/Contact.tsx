import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/resume'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-sky-400">06 — What’s next?</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
          I’m always open to discussing new opportunities, interesting projects, or just talking
          shop about React, TypeScript, and building things that scale. My inbox is open —
          I’ll get back to you as soon as I can.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-400"
        >
          <Mail size={16} />
          Say hello
        </a>
        <div className="mt-10 flex items-center justify-center gap-6">
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
        </div>
      </Reveal>
    </section>
  )
}
