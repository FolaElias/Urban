import { useState } from 'react'

const filters = ['All', 'For Sale', 'For Rent', 'New Listing']

const listings = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    price: '$3,200,000', tag: 'For Sale', new: false,
    title: 'Skyline Residences', location: 'Downtown LA',
    beds: 4, baths: 3, sqft: '4,200',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    price: '$8,500 / mo', tag: 'For Rent', new: true,
    title: 'Heritage Manor', location: 'Greenwich, CT',
    beds: 5, baths: 4, sqft: '6,100',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    price: '$1,890,000', tag: 'New Listing', new: true,
    title: 'Cliffside Retreat', location: 'Big Sur, CA',
    beds: 3, baths: 2, sqft: '2,800',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80',
    price: '$5,750,000', tag: 'For Sale', new: false,
    title: 'The Ivy Estate', location: 'Hamptons, NY',
    beds: 7, baths: 6, sqft: '9,500',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80',
    price: '$12,000 / mo', tag: 'For Rent', new: false,
    title: 'Marina Vistas', location: 'San Francisco, CA',
    beds: 3, baths: 2, sqft: '2,400',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1611095565888-c2bd41381f7a?w=800&q=80',
    price: '$2,400,000', tag: 'New Listing', new: true,
    title: 'Palm Acres', location: 'Scottsdale, AZ',
    beds: 4, baths: 3, sqft: '3,700',
  },
]

export default function PropertyListings() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? listings : listings.filter((l) => l.tag === active)

  return (
    <section className="py-28 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal flex items-center justify-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            <span className="h-px w-10 bg-gold inline-block" /> Browse Properties
          </p>
          <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-dark" data-delay="100">
            Our <em className="not-italic text-gold">Latest</em> Listings
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex items-center justify-center gap-1 mb-12 flex-wrap" data-delay="150">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-dark text-white'
                  : 'bg-transparent text-dark/50 hover:text-dark border border-transparent hover:border-dark/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((l, i) => (
            <div key={l.id} className="reveal property-card" data-delay={String(i * 80)}>
              {/* Image */}
              <div className="card-img relative overflow-hidden aspect-[4/3]">
                <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gold text-dark text-[10px] tracking-widest uppercase font-sans font-semibold px-3 py-1.5">
                    {l.tag}
                  </span>
                  {l.new && (
                    <span className="bg-dark text-white text-[10px] tracking-widest uppercase font-sans font-semibold px-3 py-1.5">
                      New
                    </span>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-gold transition-colors duration-300 flex items-center justify-center group">
                  <svg className="w-4 h-4 text-dark group-hover:text-dark" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 bg-white border border-t-0 border-gray-100">
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="font-serif text-xl font-medium text-dark">{l.title}</h3>
                  <span className="font-serif text-gold font-medium whitespace-nowrap ml-2 text-base">{l.price}</span>
                </div>
                <p className="flex items-center gap-1.5 text-sm text-gray-400 font-sans mb-4">
                  <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {l.location}
                </p>
                <div className="flex items-center gap-5 pt-4 border-t border-gray-100 text-xs text-gray-400 font-sans">
                  <span>{l.beds} Beds</span>
                  <span className="h-3 w-px bg-gray-200" />
                  <span>{l.baths} Baths</span>
                  <span className="h-3 w-px bg-gray-200" />
                  <span>{l.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="reveal text-center mt-14" data-delay="100">
          <button className="border border-dark text-dark hover:bg-dark hover:text-white px-10 py-4 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  )
}
