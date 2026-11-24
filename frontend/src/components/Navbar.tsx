import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/resume'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const top = document.getElementById('top')
    const els = [top, ...ids.map((id) => document.getElementById(id))].filter(Boolean) as HTMLElement[]
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
  return active
}

const ids = links.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-accent-gradient"
        style={{ scaleX: progress }}
      />
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-4xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled ? 'glass-strong' : 'border border-transparent'
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 pl-2" aria-label="Back to top">
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-[11px] font-bold text-white shadow-[0_0_24px_-4px_rgb(139_92_246/0.8)]">
              RB
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-zinc-100 sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={`relative z-10 block rounded-full px-4 py-1.5 text-sm transition-colors ${
                    active === link.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {link.label}
                </a>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/7"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Resume
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full text-zinc-200 hover:bg-white/10 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed inset-x-4 top-20 z-50 rounded-3xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-zinc-200 hover:bg-white/5"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-zinc-600">#{link.id}</span>
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-950"
                >
                  Download resume
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
