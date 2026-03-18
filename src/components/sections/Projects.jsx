import { projects } from '@data/projects'
import { useReveal } from '@hooks/useReveal'
import SectionHeading from '@ui/SectionHeading'
import { useCursor } from '@hooks/useCursor'

export default function Projects() {
  const { ref, visible } = useReveal(0.08)

  return (
    <section id="projects" className="bg-bg2 px-16 py-28 max-md:px-6 max-md:py-20">
      <SectionHeading eyebrow="Projects" title="Selected Work" />

      <div
        ref={ref}
        className={`grid gap-6 transition-all duration-700
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
      >
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  const { grow, shrink } = useCursor()

  return (
    <div className="group relative bg-card border border-border p-8 flex flex-col gap-3
                     transition-all duration-300 hover:border-cyan hover:-translate-y-1.5 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.04), transparent)' }} />

      <span className="absolute top-5 right-5 font-display font-bold text-[2.5rem] text-border leading-none pointer-events-none select-none">
        0{p.id}
      </span>

      <p className="text-2xs tracking-[0.2em] uppercase text-cyan">{p.type}</p>

      <h3 className="font-display font-bold text-[1.2rem] text-bright leading-snug">{p.name}</h3>

      <p className="text-[0.8rem] text-muted leading-7">{p.description}</p>

      <ul className="flex flex-col gap-1.5 mt-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[0.72rem] text-muted">
            <span className="text-green flex-shrink-0 mt-0.5">▸</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {p.stack.map((s) => (
          <span key={s}
            className="px-2.5 py-0.5 text-[0.62rem] tracking-[0.08em] uppercase text-cyan border border-cyan/15 bg-cyan/5">
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-1">
        <a href={p.github} target="_blank" rel="noopener noreferrer"
          onMouseEnter={grow} onMouseLeave={shrink}
          className="flex items-center gap-1.5 text-[0.72rem] text-muted tracking-[0.08em] no-underline
                       transition-colors duration-200 hover:text-pink">
          <GithubIcon /> GitHub
        </a>
        <a href={p.live} target="_blank" rel="noopener noreferrer"
          onMouseEnter={grow} onMouseLeave={shrink}
          className="flex items-center gap-1.5 text-[0.72rem] text-muted tracking-[0.08em] no-underline
                       transition-colors duration-200 hover:text-pink">
          <ExternalIcon /> {p.liveLabel || 'Live Demo'}
        </a>
      </div>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1C3.46 1 1 3.46 1 6.5c0 2.43 1.57 4.49 3.75 5.22.27.05.37-.12.37-.26v-.9c-1.52.33-1.84-.73-1.84-.73-.25-.63-.61-.8-.61-.8-.5-.34.04-.33.04-.33.55.04.84.57.84.57.49.84 1.28.6 1.59.46.05-.35.19-.6.35-.73-1.21-.14-2.49-.61-2.49-2.7 0-.6.21-1.08.57-1.46-.06-.14-.25-.69.05-1.44 0 0 .46-.15 1.52.57.44-.12.91-.18 1.38-.18.47 0 .94.06 1.38.18 1.06-.72 1.52-.57 1.52-.57.3.75.11 1.3.05 1.44.36.38.57.86.57 1.46 0 2.1-1.28 2.56-2.5 2.69.2.17.37.5.37 1.01v1.5c0 .14.1.31.38.26C9.43 10.99 11 8.93 11 6.5 11 3.46 8.54 1 6.5 1z" fill="currentColor" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
