import { achievements } from '@data/achievements'
import { useReveal } from '@hooks/useReveal'
import SectionHeading from '@ui/SectionHeading'

export default function Achievements() {
  const { ref, visible } = useReveal(0.08)

  return (
    <section id="achievements" className="bg-bg2 px-16 py-28 max-md:px-6 max-md:py-20">
      <SectionHeading eyebrow="Achievements" title="Recognition & Certs" />

      <div
        ref={ref}
        className={`grid gap-5 transition-all duration-700
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
      >
        {achievements.map((a) => (
          <div key={a.id}
            className="group flex gap-4 bg-card border border-border p-6
                        transition-all duration-200 hover:border-amber hover:-translate-y-1">
            <span className="text-2xl flex-shrink-0 mt-0.5">{a.icon}</span>
            <div>
              <h3 className="text-[0.88rem] font-semibold text-bright mb-1">{a.title}</h3>
              <p className="text-[0.75rem] text-muted leading-relaxed">{a.desc}</p>
              <p className="text-[0.65rem] text-amber tracking-[0.08em] mt-2">{a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
