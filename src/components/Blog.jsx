const posts = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Market Insights',
    title: 'Luxury Real Estate Market Trends: What to Expect in 2026',
    excerpt: 'An in-depth look at the forces shaping premium property markets across North America — from interest rate dynamics to shifting buyer preferences.',
    date: 'May 14, 2026',
    readTime: '5 min read',
    author: 'James Harrington',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Design & Architecture',
    title: 'The Rise of Biophilic Design in High-End Residential Properties',
    excerpt: 'Nature-inspired interiors and sustainable architecture are defining the next generation of ultra-premium homes. We explore the key elements.',
    date: 'May 8, 2026',
    readTime: '4 min read',
    author: 'Sofia Laurent',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    category: 'Investment',
    title: '5 Key Indicators That Signal a Premium Property is Worth Its Price',
    excerpt: 'Beyond location and square footage, seasoned investors look at a different set of metrics when evaluating whether a luxury home is truly worth the ask.',
    date: 'April 29, 2026',
    readTime: '6 min read',
    author: 'Marcus Webb',
    authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
]

export default function Blog() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              <span className="h-px w-10 bg-gold inline-block" /> News & Insights
            </p>
            <h2 className="reveal font-serif text-5xl md:text-6xl font-light text-dark leading-tight" data-delay="100">
              From Our <em className="not-italic text-gold">Journal</em>
            </h2>
          </div>
          <div className="reveal" data-delay="150">
            <a href="#" className="text-sm tracking-widest uppercase font-sans text-dark/50 hover:text-gold transition-colors duration-300 flex items-center gap-2">
              All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="reveal group cursor-pointer"
              data-delay={String(i * 100)}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[16/10] mb-6">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-widest uppercase font-sans text-gold font-semibold">
                  {post.category}
                </span>
                <span className="h-px w-4 bg-gray-200" />
                <span className="text-[10px] tracking-widest uppercase font-sans text-gray-400">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-light text-dark mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>

              {/* Author + Date */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-8 h-8 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="text-xs font-sans font-medium text-dark">{post.author}</div>
                  <div className="text-[10px] font-sans text-gray-400">{post.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
