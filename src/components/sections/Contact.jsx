import { useState } from 'react'
import { socialLinks } from '@data/navigation'
import { useReveal } from '@hooks/useReveal'
import SectionHeading from '@ui/SectionHeading'
import { useCursor } from '@hooks/useCursor'
import emailjs from '@emailjs/browser'

const contactLinks = [
  { label: 'Email',    value: 'aaruba0306#gmail.com',            href: 'mailto:aaruba0306@gmail.com' },
  { label: 'Phone',    value: '+91 *******548',                href: 'tel:+91 84699 28548' },
  { label: 'GitHub',   value: 'https://github.com/anjalichauhan0306',      href: 'https://github.com/anjalichauhan0306' },
  { label: 'LinkedIn', value: 'www.linkedin.com/in/anjali-chauhan-22b93430a', href: 'www.linkedin.com/in/anjali-chauhan-22b93430a' },
]

const INIT = { name: '', email: '', subject: '', message: '' }

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Contact() {
  const { ref, visible } = useReveal(0.08)
  const { grow, shrink } = useCursor()
  const [form,   setForm]   = useState(INIT)
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

   const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    
    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };


    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('sent')
        setForm(INIT)
        alert("Message sent successfully! 🚀")
        setTimeout(() => setStatus('idle'), 4000)
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('idle')
        alert("Kuch gadbad ho gayi! 😅")
      });
  }

  const inputCls = `w-full bg-surface border border-border text-body font-body text-[0.85rem]
                    px-4 py-3 outline-none resize-none transition-all duration-200
                    placeholder:text-border2
                    focus:border-pink focus:shadow-[0_0_0_3px_rgba(255,159,252,0.08)]`

  return (
    <section id="contact" className="bg-bg px-16 py-28 max-md:px-6 max-md:py-20">
      <SectionHeading eyebrow="Contact" />

      <div
        ref={ref}
        className={`grid grid-cols-[1fr_1.1fr] gap-20 items-start transition-all duration-700
                    max-lg:grid-cols-1 max-lg:gap-12
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        <div>
          <h2 className="font-display font-bold text-bright leading-snug mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Let's build something{' '}
            <em className="font-italic not-italic text-pink">real</em> together.
          </h2>
          <p className="text-[0.85rem] text-muted leading-[1.8] mb-8">
            Open to full-time roles, internships, freelance projects, and open-source
            collaborations. I usually respond within 24 hours.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {contactLinks.map((c) => (
              <a key={c.label} href={c.href}
                 onMouseEnter={grow} onMouseLeave={shrink}
                 className="group flex items-center gap-3 px-5 py-4 border border-border
                             text-body text-[0.8rem] no-underline
                             transition-all duration-200 hover:border-pink hover:text-pink hover:translate-x-1.5">
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-muted min-w-[60px] flex-shrink-0">
                  {c.label}
                </span>
                <span className="flex-1">{c.value}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto">→</span>
              </a>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 onMouseEnter={grow} onMouseLeave={shrink}
                 className="px-4 py-2 border border-border2 text-[0.7rem] tracking-[0.1em] uppercase
                             text-muted no-underline transition-all duration-200 hover:border-cyan hover:text-cyan">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <Field label="Name" name="name" type="text"
              value={form.name} onChange={onChange}
              placeholder="Your Name" required cls={inputCls} />
            <Field label="Email" name="email" type="email"
              value={form.email} onChange={onChange}
              placeholder="your@email.com" required cls={inputCls} />
          </div>

          <Field label="Subject" name="subject" type="text"
            value={form.subject} onChange={onChange}
            placeholder="Project inquiry / Job opportunity" cls={inputCls} />

          <Field label="Message" name="message" as="textarea"
            value={form.message} onChange={onChange}
            placeholder="Tell me about your project, what you're building, and how I can help..."
            required rows={6} cls={inputCls} />

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            onMouseEnter={grow} onMouseLeave={shrink}
            className={`btn-clip self-start min-w-[180px] flex items-center justify-center gap-2
                        px-7 py-3 text-xs font-semibold tracking-[0.1em] uppercase
                        transition-all duration-200
                        disabled:opacity-70
                        ${status === 'sent'
                          ? 'bg-green text-bg'
                          : 'bg-pink text-bg hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,159,252,0.3)]'
                        }`}
          >
            {status === 'sending' && <><SpinIcon /> Sending…</>}
            {status === 'sent'    && 'Message Sent ✓'}
            {status === 'idle'    && 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, as: As = 'input', cls, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name}
        className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">
        {label}
      </label>
      <As id={name} name={name} className={cls} {...rest} />
    </div>
  )
}

function SpinIcon() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"/>
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}
