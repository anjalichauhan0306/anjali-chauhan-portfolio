import { useState, useEffect } from 'react'
import { navLinks } from '@data/navigation'
import { useCursor } from '@hooks/useCursor'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { grow, shrink } = useCursor()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <nav className="flex items-center justify-between px-16 py-4 max-md:px-6">

        <a href="#hero" onClick={(e) => go(e, '#hero')}
          className="flex items-center gap-2 font-display font-bold text-bright text-base tracking-wide no-underline"
          onMouseEnter={grow} onMouseLeave={shrink}
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot"
            style={{ boxShadow: '0 0 8px #39ff8f' }} />
            Anjali Chauhan
        </a>

        <ul className="flex gap-8 list-none max-lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => go(e, l.href)}
                className="relative text-muted text-xs tracking-[0.12em] uppercase no-underline transition-colors duration-200
                           hover:text-pink after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                           after:h-px after:w-0 after:bg-pink after:transition-[width] after:duration-200
                           hover:after:w-full"
                onMouseEnter={grow} onMouseLeave={shrink}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={(e) => go(e, '#contact')}
          className="btn-clip bg-transparent border border-border2 text-body text-xs tracking-[0.1em] uppercase
                     px-5 py-2.5 transition-all duration-200 hover:border-cyan hover:text-cyan max-lg:hidden"
          onMouseEnter={grow} onMouseLeave={shrink}
        >
          Hire Me
        </a>

        <button
          className="hidden max-lg:flex flex-col gap-1.5 bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-body transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-body transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-body transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-[max-height] duration-400 bg-bg2/98 border-t border-border ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}
            className="block px-6 py-4 text-xs tracking-[0.12em] uppercase text-muted border-b border-border
                       transition-all duration-200 hover:text-pink hover:pl-8"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
