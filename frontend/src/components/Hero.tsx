import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/resume'
import { useMediaQuery } from '../hooks/useMediaQuery'

const HeroScene = lazy(() => import('./three/HeroScene'))

const ease = [0.22, 1, 0.36, 1] as const

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/** Shown when WebGL is unavailable or the user prefers reduced motion. */
function StaticOrb() {
  return (
    <div className="absolute top-1/2 right-[8%] hidden h-112 w-md -translate-y-1/2 lg:block">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#8b5cf6,#22d3ee,#6366f1,#8b5cf6)] opacity-40 blur-3xl" />
      <div className="glass absolute inset-12 rounded-full" />
    </div>
  )
}

const headline = ['I', 'build', 'AI-powered', 'products,', 'end', 'to', 'end.']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(true)
  const [webgl] = useState(hasWebGL)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const lite = useMediaQuery('(max-width: 768px), (pointer: coarse)')

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const { scrollY } = useScroll()
  const cueOpacity = useTransform(scrollY, [0, 120], [1, 0])

  const show3D = webgl && !reducedMotion

  return (
    <section id="top" ref={sectionRef} className="relative isolate min-h-svh overflow-hidden">
      {/* 3D layer */}
      <div className="absolute inset-0 -z-10 opacity-55 md:opacity-100">
        {show3D ? (
          <Suspense fallback={null}>
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            >
              <HeroScene lite={lite} active={active} />
            </motion.div>
          </Suspense>
        ) : (
          <StaticOrb />
        )}
      </div>
      {/* Darken behind the copy so the 3D scene never fights the text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[60%] bg-linear-to-r from-ink/90 via-ink/50 to-transparent md:block" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-ink/60 to-ink/90 md:hidden" />
      {/* Fade into the rest of the page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-ink" />

      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pt-32 pb-20 sm:px-6 md:justify-center md:pb-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-2 text-xs text-zinc-300"
          >
            <span className="relative flex h-2 w-2 ml-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.currently}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-8 font-mono text-xs tracking-wide text-zinc-500 sm:text-sm"
          >
            {profile.name} — {profile.role}
          </motion.p>

          <h1 className="mt-3 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.035em] text-zinc-50 sm:text-7xl">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: '0.4em', filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.55 + i * 0.07, ease }}
                className={`mr-[0.22em] inline-block ${
                  word === 'AI-powered'
                    ? 'animate-shine pr-1 font-serif font-normal italic text-gradient'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.9)] transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              See my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/20"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-500"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.p>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: cueOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}
