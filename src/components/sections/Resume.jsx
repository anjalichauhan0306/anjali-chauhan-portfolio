import { useReveal } from '@hooks/useReveal'
import { useCursor } from '@hooks/useCursor'

const badges = ['MERN Stack', 'Backend Dev', 'Open to Work']

export default function Resume() {
  const { ref, visible } = useReveal(0.15)
  const { grow, shrink } = useCursor()

  return (
    <section id="resume" className="bg-bg px-16 py-20 max-md:px-6">
      <div
        ref={ref}
        className={`relative flex items-center justify-between gap-10 flex-wrap
                    border border-border2 px-16 py-12 overflow-hidden transition-all duration-700
                    max-md:px-6 max-md:flex-col max-md:items-start
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'linear-gradient(135deg, rgba(255,159,252,0.04), rgba(0,229,255,0.04))' }} />

        <div className="relative z-10">
          <h2 className="font-display font-bold text-[2rem] text-bright mb-2">My Resume</h2>
          <p className="text-[0.85rem] text-muted leading-7 max-w-lg">
            Detailed work experience, education, and tech stack breakdown —
            all in one clean PDF. Updated regularly.
          </p>
          <div className="flex gap-3 flex-wrap mt-4">
            {badges.map((b) => (
              <span key={b}
                className="px-3 py-1 border border-border2 text-[0.65rem] tracking-[0.1em] uppercase text-muted">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-2 items-start">
          <a
            href="/resume-anjali-chauhan.pdf"
            download
            onMouseEnter={grow} onMouseLeave={shrink}
            className="btn-clip flex items-center gap-2 bg-pink text-bg px-7 py-3 text-xs font-semibold
                       tracking-[0.1em] uppercase transition-all duration-200
                       hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,159,252,0.35)]"
          >
            <DownloadIcon /> Download Resume
          </a>
          <p className="text-[0.72rem] text-muted">PDF · Last updated 2026</p>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v8M7 9l-3-3M7 9l3-3M1 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
