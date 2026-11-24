import { useCallback, type ElementType, type MouseEvent, type ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

/** Black-glass panel with a cursor-following spotlight and glowing border. */
export default function GlassCard({ children, className = '', as: Tag = 'div' }: GlassCardProps) {
  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <Tag onMouseMove={onMove} className={`glass spotlight rounded-2xl ${className}`}>
      {children}
    </Tag>
  )
}
