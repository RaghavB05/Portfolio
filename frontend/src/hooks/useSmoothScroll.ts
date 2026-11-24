import { useEffect } from 'react'
import Lenis from 'lenis'

/** Inertial smooth scrolling (skipped for users who prefer reduced motion). */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -88 },
    })
    return () => lenis.destroy()
  }, [])
}
