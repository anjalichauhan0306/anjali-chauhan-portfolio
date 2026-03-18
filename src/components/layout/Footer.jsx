import { navLinks, socialLinks } from '@data/navigation'

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-bg">
      <div className="flex items-center justify-between flex-wrap gap-4 px-16 py-6 max-md:px-6">
        <p className="text-xs text-muted">
          © 2026 <span className="text-pink">Anjali Chauhan</span> — Built with Node.js + ❤️
        </p>

        <nav className="flex gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}
              className="text-xs text-muted tracking-[0.1em] uppercase no-underline transition-colors duration-200 hover:text-pink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-xs text-muted tracking-[0.1em] uppercase no-underline transition-colors duration-200 hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
