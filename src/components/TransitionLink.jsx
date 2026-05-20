import { usePageTransition } from '../context/TransitionContext'
import { useLocation } from 'react-router-dom'

export default function TransitionLink({ to, children, className, onClick, style }) {
  const { transitionTo } = usePageTransition()
  const location = useLocation()

  const handle = (e) => {
    e.preventDefault()
    if (location.pathname === to) return
    if (onClick) onClick()
    transitionTo(to)
  }

  return (
    <a href={to} onClick={handle} className={className} style={style}>
      {children}
    </a>
  )
}
