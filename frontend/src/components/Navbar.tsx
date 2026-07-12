import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { profile } from '../data/resume'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-100">
          Raghav<span className="text-sky-400"> Bahety</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-sky-400/40 px-4 py-1.5 text-sm font-medium text-sky-400 transition-colors hover:bg-sky-400/10"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-6 pb-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-sky-400/40 px-4 py-1.5 text-sm font-medium text-sky-400"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
