import { useReveal } from '@hooks/useReveal'
import SectionHeading from '@ui/SectionHeading'

const badges = ['Node.js','Express.js','React.js','MongoDB','JWT Auth','REST APIs','Docker','Git']

// Tiny syntax color helpers
const Kw = ({ c }) => <span style={{ color: '#00e5ff' }}>{c}</span>
const Pk = ({ c }) => <span style={{ color: '#ff9ffc' }}>{c}</span>
const Gn = ({ c }) => <span style={{ color: '#39ff8f' }}>{c}</span>
const Mu = ({ c }) => <span style={{ color: '#445566' }}>{c}</span>
const Am = ({ c }) => <span style={{ color: '#ffb547' }}>{c}</span>
const TL = ({ children }) => <div className="mb-0.5">{children}</div>

export default function About() {
  const { ref, visible } = useReveal(0.1)

  return (
    <section id="about" className="bg-bg2 px-16 py-28 max-md:px-6 max-md:py-20">
      <SectionHeading eyebrow="About Me" />

      <div
        ref={ref}
        className={`grid grid-cols-[1fr_1.2fr] gap-20 items-start transition-all duration-700
                    max-lg:grid-cols-1 max-lg:gap-12
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        {/* Terminal */}
        <div className="bg-surface border border-border rounded-md overflow-hidden font-mono text-[0.78rem] leading-7
                         shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#151e2b] border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="mx-auto text-[0.62rem] text-muted">anjali@dev:~$</span>
          </div>
          {/* Body */}
          <div className="p-6 pb-8">
            <TL><Kw c="const" /> <Pk c="developer" /> <Mu c=" = " /><Am c="{" /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"name"' /><Mu c=":" /> <Gn c='"Anjali Chauhan"' /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"role"' /><Mu c=":" /> <Gn c='"MERN Stack Developer"' /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"location"' /><Mu c=":" /> <Gn c='"India"' /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"focus"' /><Mu c=": [" /></TL>
            <TL>&nbsp;&nbsp;&nbsp;&nbsp;<Gn c='"REST API Design"' /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;&nbsp;&nbsp;<Gn c='"Scalable Backends"' /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;&nbsp;&nbsp;<Gn c='"Full-Stack Web Apps"' /></TL>
            <TL>&nbsp;&nbsp;<Mu c="]," /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"openToWork"' /><Mu c=":" /> <Am c="true" /><Mu c="," /></TL>
            <TL>&nbsp;&nbsp;<Pk c='"builtWith"' /><Mu c=":" /> <Gn c='"☕ + Node.js"' /></TL>
            <TL><Am c="}" /></TL>
            <br />
            <TL><Kw c="export default" /> <span className="text-body">developer</span><Mu c=";" /></TL>
          </div>
        </div>

        {/* Text */}
        <div>
          <h3 className="font-display font-bold text-[1.9rem] text-bright leading-snug mb-6">
            Backend-first.{' '}
            <em className="font-italic not-italic text-pink" style={{ fontSize: '2rem' }}>Full-stack</em> by heart.
          </h3>
          <p className="text-muted leading-[1.9] text-[0.9rem] mb-4">
            I specialize in building <strong className="text-body font-medium">production-grade REST APIs</strong>{' '}
            using Node.js &amp; Express, designing MongoDB schemas that scale, and creating seamless
            full-stack experiences with React on the frontend.
          </p>
          <p className="text-muted leading-[1.9] text-[0.9rem] mb-4">
            My approach is backend-first: I care deeply about{' '}
            <strong className="text-body font-medium">authentication flows, data modeling, error handling,
            and API design</strong> before the UI ever enters the picture.
          </p>
          <p className="text-muted leading-[1.9] text-[0.9rem] mb-6">
            Currently looking for full-time roles, internships, and freelance projects where I can{' '}
            <strong className="text-body font-medium">architect systems that matter</strong>.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {badges.map((b) => (
              <span key={b}
                className="px-3 py-1 border border-border2 text-[0.68rem] tracking-[0.08em] text-muted
                           transition-all duration-200 cursor-default
                           hover:border-pink hover:text-pink hover:-translate-y-0.5">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
