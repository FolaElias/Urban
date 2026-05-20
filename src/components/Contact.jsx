import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '', type: '' })
  }

  return (
    <section className="py-28 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — form */}
          <div>
            <p className="reveal flex items-center gap-3 text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              <span className="h-px w-10 bg-gold inline-block" /> Get In Touch
            </p>
            <h2 className="reveal font-serif text-5xl font-light text-white leading-tight mb-4" data-delay="100">
              Let's Find Your<br />
              <em className="not-italic text-gold">Perfect Home</em>
            </h2>
            <p className="reveal text-white/40 font-sans text-sm leading-relaxed mb-10" data-delay="150">
              Our specialists are available to assist you with private viewings, investment consultations, and anything else you need.
            </p>

            <form onSubmit={submit} className="reveal space-y-5" data-delay="200">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 font-sans mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-sans px-5 py-4 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 font-sans mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-sans px-5 py-4 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 font-sans mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-sans px-5 py-4 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 font-sans mb-2">I'm Interested In</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handle}
                    className="w-full bg-white/5 border border-white/10 text-white/60 text-sm font-sans px-5 py-4 outline-none focus:border-gold transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="text-dark">Select type</option>
                    <option className="text-dark">Buying a Property</option>
                    <option className="text-dark">Selling a Property</option>
                    <option className="text-dark">Renting</option>
                    <option className="text-dark">Investment Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 font-sans mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                  placeholder="Tell us about what you're looking for..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-sans px-5 py-4 outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-dark font-sans font-semibold text-xs tracking-widest uppercase py-5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {sent ? '✓ Message Sent' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>

          {/* Right — info + map */}
          <div className="space-y-8">
            {/* Info cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: 'Visit Us',
                value: '1280 Wilshire Blvd, Suite 800\nLos Angeles, CA 90017',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: 'Call Us',
                value: '+1 (310) 555-0182\n+1 (800) 555-URBAN',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: 'Email Us',
                value: 'hello@urbanrealty.com\npress@urbanrealty.com',
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="reveal flex gap-5 p-6 border border-white/8 bg-white/[0.03] hover:border-gold/30 transition-colors duration-300"
                data-delay={String(i * 100)}
              >
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-widest uppercase text-white/30 font-sans mb-1.5">{item.label}</div>
                  <div className="text-white/70 font-sans text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="reveal aspect-[16/9] bg-dark-3 border border-white/8 relative overflow-hidden" data-delay="300">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c963?w=800&q=70"
                alt="Office location"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-4 h-4 bg-gold rounded-full mx-auto mb-2 animate-ping" />
                  <span className="text-white/60 text-xs font-sans tracking-widest uppercase">Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
