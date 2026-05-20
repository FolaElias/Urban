import TransitionLink from './TransitionLink'

const navColumns = [
  {
    title: 'Properties',
    links: ['All Listings', 'For Sale', 'For Rent', 'New Developments', 'Commercial'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Services',
    links: ['Property Sales', 'Rental Management', 'Investment Advisory', 'Valuations', 'Legal Support'],
  },
]

const socials = [
  { label: 'IG', href: '#', name: 'Instagram' },
  { label: 'FB', href: '#', name: 'Facebook' },
  { label: 'LI', href: '#', name: 'LinkedIn' },
  { label: 'TW', href: '#', name: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      {/* Top CTA band */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-3xl font-light text-dark">Ready to Find Your Dream Home?</h3>
            <p className="text-dark/60 font-sans text-sm mt-1">Our specialists are standing by to assist you.</p>
          </div>
          <TransitionLink
            to="/contact"
            className="flex-shrink-0 bg-dark text-white hover:bg-dark-3 px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300"
          >
            Schedule a Consultation
          </TransitionLink>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <TransitionLink to="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-3xl font-light tracking-[0.25em] text-white">URBAN</span>
              <span className="text-[9px] tracking-[0.55em] text-gold uppercase font-sans font-light">Real Estate</span>
            </TransitionLink>
            <p className="text-white/30 font-sans text-sm leading-relaxed max-w-xs">
              Curating the world's most exceptional residences for the most discerning clientele since 2002.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 border border-white/10 hover:border-gold text-white/30 hover:text-gold flex items-center justify-center text-[10px] font-sans font-medium tracking-wider transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-sans font-medium mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-gold font-sans transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-sans">
            © {new Date().getFullYear()} Urban Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 hover:text-white/50 text-xs font-sans transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
