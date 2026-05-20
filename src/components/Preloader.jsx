import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setHidden(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 18
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="text-center">
          <span className="font-serif text-5xl font-light tracking-[0.3em] text-white">
            URBAN
          </span>
          <div className="mt-1 text-xs tracking-[0.6em] text-gold uppercase font-sans font-light">
            Luxury Real Estate
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gold transition-all duration-150 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Progress number */}
        <span className="text-white/30 text-xs font-sans tracking-widest tabular-nums">
          {String(Math.min(Math.round(progress), 100)).padStart(3, '0')}
        </span>
      </div>
    </div>
  )
}
