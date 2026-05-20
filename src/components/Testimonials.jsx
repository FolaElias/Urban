import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'

const testimonials = [
  {
    id: 1,
    quote: "Urban Real Estate exceeded every expectation. They found us a stunning Malibu estate that perfectly matched our vision — the entire process was seamless and handled with the utmost professionalism.",
    name: "James & Sarah Whitmore",
    role: "Acquired — Malibu Estate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    quote: "After years of searching, Urban found us our dream penthouse in Manhattan within six weeks. Their market knowledge and negotiation skills saved us over $400,000 on the final price.",
    name: "Victoria Chen",
    role: "Acquired — Manhattan Penthouse",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    id: 3,
    quote: "The level of service is truly unmatched. Every detail was taken care of, from private viewings to legal coordination. Urban made what could have been a complex transaction feel effortless.",
    name: "Michael Ashford",
    role: "Sold — Bel Air Mansion",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    id: 4,
    quote: "We've worked with many agencies over the years, but Urban stands apart. Their curated approach means you only see properties worth your time. Exceptional taste and uncompromising standards.",
    name: "Elaine & Robert Torres",
    role: "Acquired — Palm Beach Estate",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
]

export default function Testimonials() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-28 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-2 opacity-40" />
      <div className="absolute bottom-0 left-12 font-serif text-[280px] font-light text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              <span className="h-px w-10 bg-gold inline-block" /> Client Stories
            </p>
            <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-white leading-tight" data-delay="100">
              What Our <em className="not-italic text-gold">Clients</em><br />Are Saying
            </h2>
          </div>

          <div className="reveal flex items-center gap-4" data-delay="150">
            <button
              ref={prevRef}
              className="w-12 h-12 border border-white/20 hover:border-gold hover:bg-gold group flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white group-hover:text-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 border border-white/20 hover:border-gold hover:bg-gold group flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white group-hover:text-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="reveal" data-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="border border-white/8 bg-white/[0.03] p-10 hover:border-gold/30 transition-colors duration-500 h-full flex flex-col">
                  {/* Quote mark */}
                  <div className="font-serif text-6xl text-gold/40 leading-none mb-6 select-none">"</div>

                  {/* Quote */}
                  <p className="font-serif text-lg font-light text-white/70 leading-relaxed italic flex-1">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <div className="font-serif text-white font-medium">{t.name}</div>
                      <div className="text-gold text-xs tracking-widest uppercase font-sans mt-0.5">{t.role}</div>
                    </div>

                    {/* Stars */}
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
