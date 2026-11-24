import { ArrowUp } from 'lucide-react'
import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-center font-mono text-xs text-zinc-600 sm:text-left">
          © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript, Three.js & Tailwind CSS
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}
