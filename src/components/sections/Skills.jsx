import { useState, useEffect, useRef } from 'react'
import { skillTabs } from '@data/skills'
import { useReveal } from '@hooks/useReveal'
import SectionHeading from '@ui/SectionHeading'
import { useCursor } from '@hooks/useCursor'

export default function Skills() {
  const [active,   setActive]   = useState(0)
  const [animated, setAnimated] = useState(new Set([0]))
  const { ref, visible } = useReveal(0.15)
  const { grow, shrink } = useCursor()

  useEffect(() => {
    if (visible) setAnimated((p) => new Set([...p, active]))
  }, [visible])

  const switchTab = (idx) => {
    setActive(idx)
    setAnimated((p) => new Set([...p, idx]))
  }

  return (
    <section id="skills" className="px-16 py-28 bg-bg max-md:px-6 max-md:py-20">
      <SectionHeading eyebrow="Skills" title="What I Work With" />

      <div className="flex border border-border2 w-fit mb-10 flex-wrap">
        {skillTabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => switchTab(idx)}
            onMouseEnter={grow} onMouseLeave={shrink}
            className={`px-6 py-2.5 text-xs tracking-[0.12em] uppercase border-r border-border2 last:border-r-0
                        transition-all duration-200
                        ${active === idx
                          ? 'bg-pink text-bg font-semibold'
                          : 'bg-transparent text-muted hover:text-body'
                        }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div ref={ref}>
        {skillTabs.map((tab, idx) => (
          <div key={tab.id} className={active === idx ? 'block' : 'hidden'}>
            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
              {tab.skills.map((sk) => (
                <SkillCard
                  key={sk.name}
                  skill={sk}
                  animate={animated.has(idx) && visible}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill, animate }) {
  return (
    <div className="group relative bg-card border border-border p-6 overflow-hidden
                     transition-all duration-200 hover:border-border2 hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ background: 'linear-gradient(135deg, rgba(255,159,252,0.04), transparent)' }} />

      <p className="text-[0.85rem] text-bright font-medium mb-3">{skill.name}</p>

      <div className="h-0.5 bg-border rounded-sm overflow-hidden">
        <div
          className="bar-fill"
          style={{ width: animate ? `${skill.pct}%` : '0%' }}
        />
      </div>

      <p className="text-right text-[0.65rem] text-muted font-mono mt-1">{skill.pct}%</p>
    </div>
  )
}
