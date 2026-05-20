import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TransitionLink from './TransitionLink'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Main bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-sm py-4 shadow-2xl shadow-black/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <TransitionLink to="/" className="logo-group">
            <div className="overflow-hidden">
              <span className="font-serif text-2xl font-light tracking-[0.3em] text-white flex">
                {'URBAN'.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="logo-letter"
                    style={{
                      animation: `letterUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s both`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>
            <span
              className="text-[9px] tracking-[0.55em] text-gold uppercase font-sans font-light"
              style={{ animation: 'fadeIn 0.6s ease 0.55s both' }}
            >
              Real Estate
            </span>
          </TransitionLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <TransitionLink
                key={l.to}
                to={l.to}
                className={`nav-link text-white/80 hover:text-white transition-colors ${
                  location.pathname === l.to ? 'text-gold' : ''
                }`}
              >
                {l.label}
              </TransitionLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <TransitionLink
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-dark px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300"
            >
              List Property
            </TransitionLink>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 group relative z-[8001]"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${
                  open ? 'w-6 rotate-[135deg] translate-y-[5px]' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${
                  open ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${
                  open ? 'w-6 -rotate-[135deg] -translate-y-[5px]' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <div className={`nav-overlay ${open ? 'open' : ''}`}>
        <div className="h-full flex flex-col items-center justify-center relative">
          <span className="absolute right-16 bottom-16 font-serif text-[160px] font-light text-white/5 select-none leading-none">
            U
          </span>

          <nav className="flex flex-col items-center gap-2">
            {links.map((l, i) => (
              <TransitionLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-serif text-5xl md:text-7xl font-light text-white/80 hover:text-gold transition-colors duration-300 py-2 tracking-tight ${
                  open ? 'animate-fadeUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 + i * 0.07}s`, animationFillMode: 'both' }}
              >
                {l.label}
              </TransitionLink>
            ))}
          </nav>

          <div
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 ${
              open ? 'animate-fadeUp' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors font-sans"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
