import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
}

/** Counts up from 0 when scrolled into view. */
export default function Counter({ value, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value, prefix, suffix])

  return (
    <span ref={ref}>
      {prefix}
      {inView ? value : 0}
      {suffix}
    </span>
  )
}
