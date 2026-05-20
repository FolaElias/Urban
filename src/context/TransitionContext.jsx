import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const TransitionContext = createContext(null)

// phase: 'idle' | 'enter' | 'covered' | 'exit'
export function TransitionProvider({ children }) {
  const [phase, setPhase] = useState('idle')
  const navigate = useNavigate()
  const busy = useRef(false)

  const transitionTo = useCallback(
    (to) => {
      if (busy.current) return
      busy.current = true

      setPhase('enter')

      // 870ms: last strip finishes rising (600ms transition + 220ms max stagger + 50ms buffer)
      setTimeout(() => {
        navigate(to)
        window.scrollTo(0, 0)
        setPhase('covered')

        setTimeout(() => {
          setPhase('exit')

          // 950ms: last strip finishes sliding off (600ms + 220ms stagger + 130ms buffer)
          setTimeout(() => {
            setPhase('idle')
            busy.current = false
          }, 950)
        }, 200)
      }, 870)
    },
    [navigate]
  )

  return (
    <TransitionContext.Provider value={{ phase, transitionTo }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionContext)
