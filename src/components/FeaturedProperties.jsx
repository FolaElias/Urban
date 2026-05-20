import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const properties = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    price: '$4,850,000',
    tag: 'For Sale',
    title: 'The Hilltop Mansion',
    location: 'Bel Air, Los Angeles',
    beds: 6, baths: 5, sqft: '8,200',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    price: '$2,200,000',
    tag: 'For Sale',
    title: 'Ocean View Villa',
    location: 'Malibu, California',
    beds: 4, baths: 3, sqft: '4,500',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    price: '$18,000 / mo',
    tag: 'For Rent',
    title: 'Midtown Penthouse',
    location: 'Manhattan, New York',
    beds: 3, baths: 2, sqft: '3,100',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
    price: '$1,750,000',
    tag: 'For Sale',
    title: 'Modern Lake House',
    location: 'Lake Tahoe, Nevada',
    beds: 5, baths: 4, sqft: '5,800',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80',
    price: '$9,500,000',
    tag: 'For Sale',
    title: 'The Grand Estate',
    location: 'Palm Beach, Florida',
    beds: 8, baths: 7, sqft: '12,400',
  },
]

function PropertyCard({ p }) {
  return (
    <div className="property-card group cursor-pointer">
      {/* Image */}
      <div className="card-img relative overflow-hidden aspect-[4/3]">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
        {/* Tag */}
        <span className="absolute top-4 left-4 bg-gold text-dark text-[10px] tracking-widest uppercase font-sans font-semibold px-3 py-1.5">
          {p.tag}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white text-white text-xs tracking-widest uppercase font-sans px-6 py-3">
            View Details
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 border border-t-0 border-gray-100">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-xl font-medium text-dark">{p.title}</h3>
          <span className="font-serif text-lg text-gold font-medium whitespace-nowrap ml-2">{p.price}</span>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-gray-400 font-sans mb-4">
          <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {p.location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
            <BedIcon /> {p.beds} Beds
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
            <BathIcon /> {p.baths} Baths
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
            <SqftIcon /> {p.sqft} sqft
          </span>
        </div>
      </div>
    </div>
  )
}

function BedIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5V19h20V9.5M2 14h20M7 14V9.5a2.5 2.5 0 015 0V14M2 9.5A2.5 2.5 0 014.5 7h15A2.5 2.5 0 0122 9.5" />
    </svg>
  )
}

function BathIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12V6a2 2 0 014 0v6M4 12v5a2 2 0 002 2h12a2 2 0 002-2v-5" />
    </svg>
  )
}

function SqftIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4M4 12h16" />
    </svg>
  )
}

export default function FeaturedProperties() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              <span className="h-px w-10 bg-gold inline-block" /> Featured Listings
            </p>
            <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-dark leading-tight" data-delay="100">
              Exceptional <em className="not-italic text-gold">Properties</em>
            </h2>
          </div>

          <div className="reveal flex items-center gap-4" data-delay="150">
            <button
              ref={prevRef}
              className="w-12 h-12 border border-dark/20 hover:border-gold hover:bg-gold group flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-dark group-hover:text-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 border border-dark/20 hover:border-gold hover:bg-gold group flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-dark group-hover:text-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="reveal" data-delay="200">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            pagination={{ clickable: true, el: '.fp-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {properties.map((p) => (
              <SwiperSlide key={p.id}>
                <PropertyCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fp-pagination mt-8 flex justify-center gap-2" />
        </div>

        {/* View all */}
        <div className="reveal text-center mt-12" data-delay="250">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-dark hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors duration-300"
          >
            View All Properties
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-16" />
          </a>
        </div>
      </div>
    </section>
  )
}
