import { useEffect, useState } from 'react'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    tag: 'Beverly Hills, CA',
    headline: ['Elevated', 'Living.'],
    sub: 'A sanctuary of refined taste nestled in the hills of Beverly Hills.',
  },
  {
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80',
    tag: 'Manhattan, NY',
    headline: ['Sky High', 'Luxury.'],
    sub: 'Where architectural perfection meets the Manhattan skyline.',
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    tag: 'Malibu, CA',
    headline: ['Coastal', 'Elegance.'],
    sub: 'Where the Pacific horizon becomes your private canvas.',
  },
]

const INTERVAL = 6000
const TICK = 50

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  const goTo = (idx) => {
    if (idx === current) return
    setCurrent(idx)
  }

  // Runs every time current changes — resets the progress bar and auto-advance timer
  useEffect(() => {
    setProgress(0)
    const increment = 100 / (INTERVAL / TICK)

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + increment, 100))
    }, TICK)

    const slideTimer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, INTERVAL)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(slideTimer)
    }
  }, [current])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slide images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transition: 'opacity 1300ms ease',
          }}
        >
          <img
            src={s.img}
            alt={s.headline.join(' ')}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? 'scale(1.07)' : 'scale(1)',
              filter: i === current ? 'blur(0px)' : 'blur(8px)',
              transition: 'transform 9s cubic-bezier(0.16, 1, 0.3, 1), filter 1300ms ease',
            }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/70 via-dark/30 to-dark/85" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark/65 via-transparent to-transparent" />

      {/* Ghost slide number — parent holds target opacity; child fades 0→1 within that context */}
      <div
        key={`ghost-${current}`}
        className="absolute bottom-0 right-0 z-10 pointer-events-none select-none overflow-hidden leading-none"
        style={{ opacity: 0.045 }}
      >
        <span
          className="font-serif font-light text-white block animate-fadeIn"
          style={{
            fontSize: 'clamp(160px, 28vw, 380px)',
            lineHeight: 0.85,
            transform: 'translateY(10%)',
            animationDuration: '1.2s',
            animationDelay: '0.15s',
          }}
        >
          {String(current + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Text content — keyed to remount and re-animate on each slide */}
      <div
        key={`text-${current}`}
        className="absolute inset-0 z-20 flex flex-col justify-center px-6 max-w-7xl mx-auto"
      >
        {/* Location tag */}
        <div
          className="flex items-center gap-3 mb-8 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-sans font-medium">
            {slides[current].tag}
          </span>
        </div>

        {/* Headline with per-line slide-up reveal */}
        <h1 className="font-serif font-light text-white leading-[1.05] max-w-3xl mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          <span className="block overflow-hidden">
            <span
              className="block animate-slideUp"
              style={{ animationDelay: '0.2s' }}
            >
              {slides[current].headline[0]}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block animate-slideUp text-gold"
              style={{ animationDelay: '0.32s' }}
            >
              {slides[current].headline[1]}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/55 font-sans font-light text-base max-w-sm leading-relaxed animate-fadeUp"
          style={{ animationDelay: '0.5s' }}
        >
          {slides[current].sub}
        </p>
      </div>

      {/* Search bar + counter — stable, not remounted on slide change */}
      <div className="absolute bottom-16 left-0 right-0 z-20 px-6 max-w-7xl mx-auto hidden sm:block">
        {/* Search bar */}
        <div
          className="bg-white/10 backdrop-blur-md border border-white/10 p-1 flex flex-col md:flex-row max-w-3xl mb-10 animate-fadeUp"
          style={{ animationDelay: '0.65s' }}
        >
          <select className="flex-1 bg-transparent text-white text-sm px-5 py-4 outline-none appearance-none cursor-pointer border-b md:border-b-0 md:border-r border-white/10">
            <option value="" className="text-dark">Location</option>
            <option className="text-dark">Beverly Hills, CA</option>
            <option className="text-dark">Manhattan, NY</option>
            <option className="text-dark">Malibu, CA</option>
            <option className="text-dark">Miami, FL</option>
          </select>
          <select className="flex-1 bg-transparent text-white text-sm px-5 py-4 outline-none appearance-none cursor-pointer border-b md:border-b-0 md:border-r border-white/10">
            <option value="" className="text-dark">Property Type</option>
            <option className="text-dark">Villa</option>
            <option className="text-dark">Penthouse</option>
            <option className="text-dark">Estate</option>
            <option className="text-dark">Condo</option>
          </select>
          <select className="flex-1 bg-transparent text-white text-sm px-5 py-4 outline-none appearance-none cursor-pointer">
            <option value="" className="text-dark">Price Range</option>
            <option className="text-dark">$500K – $1M</option>
            <option className="text-dark">$1M – $5M</option>
            <option className="text-dark">$5M – $10M</option>
            <option className="text-dark">$10M+</option>
          </select>
          <button className="bg-gold hover:bg-gold-dark text-dark font-sans font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors duration-300 whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Slide counter + dots */}
        <div
          className="flex items-center gap-4 animate-fadeUp"
          style={{ animationDelay: '0.8s' }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex items-center gap-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block transition-all duration-500 ${
                  i === current
                    ? 'w-10 h-px bg-gold'
                    : 'w-4 h-px bg-white/25 group-hover:bg-white/50'
                }`}
              />
              {i === current && (
                <span className="text-gold/60 text-[10px] font-sans tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-white/25 text-[10px] font-sans tabular-nums tracking-widest">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Right-side vertical prev/next controls — hidden on mobile */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-5">
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="text-white/40 hover:text-white text-[9px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-300"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Prev
        </button>
        <div className="w-px h-10 bg-white/20" />
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="text-white/40 hover:text-white text-[9px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-300"
          style={{ writingMode: 'vertical-lr' }}
        >
          Next
        </button>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/25 text-[9px] tracking-[0.5em] uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-white/15 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-gold animate-[slideDown_1.5s_ease_infinite]" />
        </div>
      </div>

      {/* Progress bar hidden */}
    </section>
  )
}
