/** Fixed, page-wide "black glass" backdrop: drifting colour light behind everything, a faint grid and film grain. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div
        className="absolute -top-[20%] -left-[10%] h-[70vmax] w-[70vmax] animate-drift-a rounded-full opacity-60"
        style={{ background: 'radial-gradient(closest-side, rgb(124 58 237 / 0.22), transparent 70%)' }}
      />
      <div
        className="absolute -right-[15%] -bottom-[25%] h-[75vmax] w-[75vmax] animate-drift-b rounded-full opacity-60"
        style={{ background: 'radial-gradient(closest-side, rgb(6 182 212 / 0.16), transparent 70%)' }}
      />
      <div
        className="absolute top-[35%] left-[40%] h-[40vmax] w-[40vmax] animate-drift-b rounded-full opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgb(99 102 241 / 0.14), transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.035) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)',
        }}
      />
      <div className="noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
    </div>
  )
}
