import { motion } from 'framer-motion'
import type { WorkVisual as Variant } from '../data/resume'

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 2, ease: [0.22, 1, 0.36, 1] as const },
}

/** Stock chart with a drawn-in price line. */
function Chart() {
  const line =
    'M0 124 C20 120 32 108 52 112 S84 96 104 100 S136 78 156 86 S190 70 208 64 S240 74 258 58 S292 40 310 44 S336 28 350 26'
  return (
    <div className="h-full w-full px-6 pt-16 pb-8">
      <div className="relative h-full w-full">
        <svg viewBox="0 0 350 150" className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {[30, 60, 90, 120].map((y) => (
            <line key={y} x1="0" x2="350" y1={y} y2={y} stroke="white" strokeOpacity="0.06" vectorEffect="non-scaling-stroke" />
          ))}
          <motion.path
            d={`${line} L350 150 L0 150 Z`}
            fill="url(#chart-fill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.path
            d={line}
            fill="none"
            stroke="url(#chart-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            {...draw}
          />
        </svg>
        {/* End-point marker in HTML so it stays round when the SVG stretches */}
        <motion.span
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgb(34_211_238/0.7)]"
          style={{ left: '100%', top: `${(26 / 150) * 100}%` }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.9 }}
        />
      </div>
    </div>
  )
}

/** Streaming chat bubbles. */
function Chat() {
  const bubbles = [
    { me: true, w: '62%' },
    { me: false, w: '82%' },
    { me: false, w: '54%' },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
          className={`h-7 rounded-2xl ${
            b.me
              ? 'self-end rounded-br-md bg-accent-gradient opacity-80'
              : 'self-start rounded-bl-md border border-white/10 bg-white/6'
          }`}
          style={{ width: b.w }}
        />
      ))}
      <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-md border border-white/10 bg-white/4 px-3 py-2">
        {[0, 1, 2].map((d) => (
          <motion.span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-violet-300"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}

/** Mini analytics dashboard bars. */
function Dashboard() {
  const bars = [38, 52, 44, 66, 58, 78, 72, 90]
  return (
    <div className="flex h-full items-end gap-2 px-6 pb-6">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-md bg-linear-to-t from-violet-500/30 to-cyan-400/80"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  )
}

/** Phone frame with a chat UI. */
function Mobile() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[85%] w-24 rounded-[1.25rem] border border-white/15 bg-black/40 p-2 shadow-[0_0_40px_-10px_rgb(139_92_246/0.6)]">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
        <div className="flex flex-col gap-1.5">
          {[70, 85, 55, 75].map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 6 : -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25 }}
              className={`h-3 rounded-md ${i % 2 ? 'self-end bg-accent-gradient opacity-80' : 'bg-white/10'}`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkVisual({ variant }: { variant: Variant }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {variant === 'chart' && <Chart />}
      {variant === 'chat' && <Chat />}
      {variant === 'dashboard' && <Dashboard />}
      {variant === 'mobile' && <Mobile />}
    </div>
  )
}
