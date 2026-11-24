import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/resume'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-4xl px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[140%] w-[90%] -translate-x-1/2 rounded-full opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgb(139 92 246 / 0.28), rgb(34 211 238 / 0.08) 55%, transparent)' }}
          />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.2em] text-violet-300/80 uppercase">Contact</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-zinc-50 sm:text-6xl">
              Let’s build something <span className="font-serif font-normal italic text-gradient">worth shipping</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-400 sm:text-lg">
              Have a role, a product, or an LLM feature that needs to work in production? My inbox is open,
              and I’ll get back to you as soon as I can.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 shadow-[0_10px_40px_-10px_rgb(255_255_255/0.5)] transition-transform hover:scale-[1.03]"
              >
                <Mail size={16} />
                Say hello
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-mono text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                {copied ? 'Copied!' : profile.email}
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              {[
                { href: profile.github, label: 'GitHub', Icon: GithubIcon },
                { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
