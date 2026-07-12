import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name} · Designed & built with React, TypeScript
          &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
