import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import InnerPageHeader from '../components/InnerPageHeader'

function FloatField({ label, type = 'text', name, value, onChange, required }) {
  return (
    <div className="float-field">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        autoComplete="off"
      />
      <label htmlFor={name}>{label}</label>
      <span className="float-line" />
    </div>
  )
}

function FloatTextarea({ label, name, value, onChange, rows = 5 }) {
  return (
    <div className="float-field">
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder=" "
      />
      <label htmlFor={name}>{label}</label>
      <span className="float-line" />
    </div>
  )
}

const infoBlocks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    heading: 'Address Info',
    lines: ['1280 Wilshire Blvd, Suite 800', 'Los Angeles, CA 90017'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heading: 'Working Hours',
    lines: ['Mon – Fri  09:00 – 18:30', 'Saturday  10:00 – 15:30'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    heading: 'Sales Office',
    lines: ['+1 (310) 555-0182', '+1 (800) 555-8726'],
  },
]

export default function ContactPage() {
  useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <div className="contact-page">
      <InnerPageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's start a conversation."
        breadcrumb="Contact"
        number="07"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      {/* Main contact section */}
      <section className="cp-section">
        <div className="cp-inner">
          {/* LEFT — Map + info */}
          <div className="cp-left">
            {/* Map */}
            <div className="cp-map">
              <iframe
                title="Office Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2900%2C34.0400%2C-118.2400%2C34.0700&layer=mapnik&marker=34.0522%2C-118.2637"
                loading="lazy"
              />
              {/* Gold overlay tint (matches Hompark's #ebcfa7 map bg) */}
              <div className="cp-map-tint" />
            </div>

            {/* Info blocks */}
            <div className="cp-info-blocks">
              {infoBlocks.map((b, i) => (
                <div className="cp-info-block reveal" key={b.heading} data-delay={String(i * 100)}>
                  <div className="cp-info-icon">{b.icon}</div>
                  <div>
                    <h4 className="cp-info-heading">{b.heading}</h4>
                    {b.lines.map((l) => (
                      <p className="cp-info-line" key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="cp-right">
            <div className="cp-form-wrap">
              <p className="cp-form-tag reveal">
                <span className="cp-form-tag-line" />
                Say Hello
              </p>
              <h2 className="cp-form-heading reveal" data-delay="80">
                Get In <em>Touch</em>
              </h2>
              <p className="cp-form-sub reveal" data-delay="140">
                Fill out the form below and one of our specialists will get back to you within one business day.
              </p>

              <form onSubmit={submit} className="cp-form reveal" data-delay="180">
                <FloatField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                />
                <FloatField
                  label="Your E-Mail"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  required
                />
                <FloatField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handle}
                />
                <FloatTextarea
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                />

                <div className="cp-submit-row">
                  <button
                    type="submit"
                    className={`cp-submit-btn${status === 'sending' ? ' sending' : ''}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <span className="cp-spinner" />
                    ) : status === 'success' ? (
                      'Message Sent ✓'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {status === 'success' && (
                  <p className="cp-success-msg">
                    Your message was sent successfully! We will be in touch as soon as we can.
                  </p>
                )}
                {status === 'error' && (
                  <p className="cp-error-msg">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
