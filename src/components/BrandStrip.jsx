import { useState, useRef } from 'react'

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$'
const LOWER = 'abcdefghijklmnopqrstuvwxyz0123456789#@$'

const brands = [
  {
    name: 'TABLE',
    upper: true,
    style: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 200,
      fontSize: '1.05rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'PLANE',
    upper: true,
    style: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 200,
      fontSize: '1.05rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'CONNECT',
    upper: true,
    style: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 800,
      fontSize: '1.05rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  {
    name: 'glasses',
    upper: false,
    style: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 300,
      fontSize: '1.6rem',
      letterSpacing: '0.04em',
    },
  },
  {
    name: 'pixel',
    upper: false,
    style: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 700,
      fontSize: '1.1rem',
      letterSpacing: '0.04em',
    },
  },
  {
    name: 'attach',
    upper: false,
    style: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 200,
      fontSize: '1.05rem',
      letterSpacing: '0.04em',
    },
  },
]

function Brand({ name, upper, style }) {
  const [text, setText] = useState(name)
  const timer = useRef(null)

  const scramble = () => {
    clearInterval(timer.current)
    const pool = upper ? UPPER : LOWER
    let frame = 0
    const total = name.length * 2 + 6

    timer.current = setInterval(() => {
      setText(
        name.split('').map((_, i) =>
          i < Math.floor(frame / 2)
            ? name[i]
            : pool[Math.floor(Math.random() * pool.length)]
        ).join('')
      )
      frame++
      if (frame >= total) {
        clearInterval(timer.current)
        setText(name)
      }
    }, 38)
  }

  const reset = () => {
    clearInterval(timer.current)
    setText(name)
  }

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className="text-dark/75 hover:text-gold transition-colors duration-300 cursor-default select-none"
      style={{ ...style, display: 'inline-block', textAlign: 'center' }}
    >
      {text}
    </span>
  )
}

export default function BrandStrip() {
  return (
    <section className="bg-white border-b border-dark/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className={[
                'flex items-center justify-center py-14',
                i < brands.length - 1 ? 'border-r border-dark/[0.07]' : '',
                i >= 3 ? 'border-t md:border-t-0 border-dark/[0.07]' : '',
              ].join(' ')}
            >
              <Brand {...b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
