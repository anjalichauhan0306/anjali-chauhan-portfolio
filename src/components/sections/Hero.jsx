import { useRef } from 'react'
import { useAntigravity } from '@hooks/useAntigravity'
import { useCursor } from '@hooks/useCursor'

export default function Hero() {
  const canvasRef = useRef(null)
  useAntigravity(canvasRef)
  const { grow, shrink } = useCursor()

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center px-16 overflow-hidden max-md:px-6">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-[9000] opacity-50 noise-overlay" />

      <div className="relative z-10 max-w-2xl">

        <p className="flex items-center gap-3 text-2xs tracking-[0.25em] uppercase text-pink mb-5
                       opacity-0 animate-fade-up [animation-delay:100ms] [animation-fill-mode:forwards]">
          <span className="block w-7 h-px bg-pink flex-shrink-0" />
          Available for opportunities
        </p>

        <h1 className="font-display font-bold text-bright leading-[0.9] tracking-[-0.03em] mb-4
                        opacity-0 animate-fade-up [animation-delay:250ms] [animation-fill-mode:forwards]"
          style={{ fontSize: 'clamp(3rem, 7vw, 7.5rem)' }}>
          Anjali
          <br />
          <em className="not-italic font-italic font-normal"
            style={{ background: 'linear-gradient(90deg,#ff9ffc,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Chauhan.
          </em>
        </h1>

        <p className="text-base text-muted mb-5
                       opacity-0 animate-fade-up [animation-delay:350ms] [animation-fill-mode:forwards]">
          MERN Stack Developer &nbsp;·&nbsp; <span className="text-cyan">Full-Stack Engineer</span>
        </p>

        <p className="text-sm text-muted leading-7 max-w-md mb-10 pl-5 border-l-2 border-border2
                       opacity-0 animate-fade-up [animation-delay:450ms] [animation-fill-mode:forwards]">
          I build scalable full-stack apps with robust APIs, efficient databases,
          responsive frontends, and production-ready, maintainable code.
        </p>

        <div className="flex gap-3 flex-wrap
                         opacity-0 animate-fade-up [animation-delay:550ms] [animation-fill-mode:forwards]">
          <button
            onClick={() => scrollTo('#projects')}
            onMouseEnter={grow} onMouseLeave={shrink}
            className="btn-clip flex items-center gap-2 bg-pink text-bg px-7 py-3 text-xs font-semibold
                       tracking-[0.1em] uppercase transition-all duration-200
                       hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,159,252,0.35)]"
          >
            <ArrowIcon /> View Projects
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            onMouseEnter={grow} onMouseLeave={shrink}
            className="btn-clip flex items-center gap-2 bg-transparent border border-border2 text-body
                       px-7 py-3 text-xs tracking-[0.1em] uppercase transition-all duration-200
                       hover:border-cyan hover:text-cyan hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 right-16 flex flex-col items-center gap-2
                       opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]
                       max-md:hidden">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-muted [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-12 animate-scroll-bar"
          style={{ background: 'linear-gradient(to bottom, transparent, #ff9ffc)' }} />
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
