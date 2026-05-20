import { useEffect, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { value: 1240, suffix: '+', label: 'Properties Sold' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '', label: 'Years Experience' },
  { value: 48, suffix: '+', label: 'Cities Covered' },
]

function StatItem({ value, suffix, label }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, 2200, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-serif text-5xl font-light text-gold stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-white/50 text-xs tracking-widest uppercase font-sans">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Image column */}
          <div className="relative min-h-[520px] lg:min-h-[680px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80"
              alt="Luxury interior"
              className="absolute inset-0 w-full h-full object-cover reveal-left"
            />
            {/* Gold accent frame */}
            <div className="absolute bottom-8 right-0 w-[85%] h-[85%] border border-gold/20 pointer-events-none" />

            {/* Experience badge */}
            <div className="absolute bottom-12 left-12 bg-gold p-6 reveal" data-delay="300">
              <div className="font-serif text-4xl font-light text-dark">24</div>
              <div className="text-dark text-xs tracking-widest uppercase font-sans font-semibold mt-1">
                Years of<br />Excellence
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="px-10 py-20 lg:px-16 flex flex-col justify-center">
            <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-6">
              <span className="h-px w-10 bg-gold inline-block" /> About Urban
            </p>

            <h2 className="reveal font-serif text-5xl font-light text-white leading-tight mb-8" data-delay="100">
              Redefining <em className="not-italic text-gold">Luxury</em><br />Living Standards
            </h2>

            <p className="reveal text-white/50 font-sans font-light leading-relaxed text-sm mb-6" data-delay="150">
              Urban Real Estate has been at the forefront of luxury property for over two decades. We curate extraordinary homes for extraordinary people — connecting discerning buyers with the world's most exclusive residences.
            </p>

            <p className="reveal text-white/50 font-sans font-light leading-relaxed text-sm mb-10" data-delay="200">
              Our team of dedicated specialists brings an unmatched depth of market knowledge, negotiation expertise, and personal service to every transaction.
            </p>

            {/* Services list */}
            <ul className="reveal space-y-3 mb-12" data-delay="250">
              {['Premium Property Sales', 'Investment Advisory', 'Portfolio Management', 'Global Buyer Network'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/60 text-sm font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="reveal" data-delay="300">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-white hover:text-gold transition-colors duration-300 font-sans text-sm tracking-widest uppercase"
              >
                Our Story
                <span className="flex items-center justify-center w-10 h-10 border border-gold rounded-full">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
