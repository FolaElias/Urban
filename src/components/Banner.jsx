export default function Banner() {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center">
      {/* BG Image */}
      <img
        src="https://images.unsplash.com/photo-1600210491892-03d54f4c0d60?w=1920&q=80"
        alt="Luxury home"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-6">
            <span className="h-px w-10 bg-gold inline-block" /> Exclusive Listing
          </p>
          <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-8" data-delay="100">
            The Pinnacle<br />
            <em className="not-italic text-gold">Collection</em> — 2026
          </h2>
          <p className="reveal text-white/50 font-sans text-sm leading-relaxed mb-10" data-delay="150">
            A hand-selected portfolio of the world's most extraordinary private residences, available exclusively through Urban.
          </p>
          <div className="reveal flex items-center gap-6" data-delay="200">
            <a
              href="#"
              className="bg-gold hover:bg-gold-dark text-dark font-sans font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors duration-300"
            >
              Explore Collection
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white font-sans text-xs tracking-widest uppercase flex items-center gap-3 transition-colors duration-300"
            >
              <span className="h-px w-8 bg-current" /> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
