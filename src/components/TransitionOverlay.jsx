import { useEffect, useState } from 'react'
import { usePageTransition } from '../context/TransitionContext'

const STRIPS = 5

export default function TransitionOverlay() {
  const { phase } = usePageTransition()
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    if (phase === 'enter') {
      const t = setTimeout(() => setShowLabel(true), 640)
      return () => clearTimeout(t)
    }
    if (phase === 'idle' || phase === 'exit') {
      setShowLabel(false)
    }
  }, [phase])

  const overlayClass = phase !== 'idle' ? `strip-overlay ${phase}` : 'strip-overlay'

  return (
    <div className={overlayClass}>
      {Array.from({ length: STRIPS }, (_, i) => (
        <div key={i} className="strip" />
      ))}
      <div className={`strip-label${showLabel || phase === 'covered' ? ' visible' : ''}`}>
        <div className="flex flex-col items-center gap-1">
          <span
            className="font-serif font-light tracking-[0.5em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ebcfa7' }}
          >
            URBAN
          </span>
          <span
            className="font-sans font-light tracking-[0.55em] uppercase"
            style={{ fontSize: '0.6rem', color: '#9f8054' }}
          >
            Real Estate
          </span>
        </div>
      </div>
    </div>
  )
}
