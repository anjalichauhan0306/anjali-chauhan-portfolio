export default function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title   && <h2 className="section-title">{title}</h2>}
    </div>
  )
}
