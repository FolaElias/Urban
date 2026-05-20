const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Property Sales',
    desc: 'Access an exclusive portfolio of premium residences across the most coveted addresses in the world.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Luxury Rentals',
    desc: 'Discover furnished residences and seasonal lets in premier locations, available month-to-month or annually.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Investment Advisory',
    desc: 'Strategic guidance on high-yield real estate investments — from market analysis to portfolio optimization.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Property Management',
    desc: 'Complete end-to-end management of your property — tenant relations, maintenance, and financial reporting.',
  },
]

export default function Services() {
  return (
    <section className="py-28 bg-[#f8f7f5] relative overflow-hidden">
      {/* Background text */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-serif text-[200px] font-light text-dark/[0.03] leading-none select-none pointer-events-none">
        URBAN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal flex items-center justify-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            <span className="h-px w-10 bg-gold inline-block" /> What We Offer
          </p>
          <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-dark" data-delay="100">
            Our <em className="not-italic text-gold">Services</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group p-8 bg-white border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-500 cursor-pointer"
              data-delay={String(i * 80)}
            >
              {/* Icon */}
              <div className="text-gold mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
                {s.icon}
              </div>

              {/* Line */}
              <div className="h-px w-10 bg-gold mb-6 transition-all duration-500 group-hover:w-full" />

              <h3 className="font-serif text-xl font-medium text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-dark/30 group-hover:text-gold transition-colors duration-300">
                Learn More
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
