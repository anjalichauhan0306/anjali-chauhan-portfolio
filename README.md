# Anjali Chauhan — Portfolio (React + Vite + Tailwind CSS)

Dark & moody MERN Stack Developer portfolio with Antigravity particle hero.

---

## 🗂 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume-anjali-chauhan.pdf     ← Drop your PDF here
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            ← Sticky nav, mobile hamburger
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/                 ← One component per section
│   │   │   ├── Hero.jsx              ← Antigravity canvas + intro
│   │   │   ├── About.jsx             ← Terminal card + bio
│   │   │   ├── Skills.jsx            ← Tabbed skill bars
│   │   │   ├── Projects.jsx          ← Project cards
│   │   │   ├── Resume.jsx            ← PDF download CTA
│   │   │   ├── Achievements.jsx      ← Certs & wins
│   │   │   └── Contact.jsx           ← Links + form
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.jsx      ← Glowing dot + ring cursor
│   │       └── SectionHeading.jsx    ← Reusable eyebrow + title
│   │
│   ├── data/                         ← ✏️ Edit your content here
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── achievements.js
│   │   └── navigation.js
│   │
│   ├── hooks/
│   │   ├── useAntigravity.js         ← Canvas2D particle effect
│   │   ├── useCursor.js              ← Smooth cursor follower
│   │   └── useReveal.js              ← Scroll reveal (IntersectionObserver)
│   │
│   ├── styles/
│   │   └── globals.css               ← @tailwind + 5 tiny custom utilities
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── tailwind.config.js                ← All custom colors, fonts, animations
├── vite.config.js                    ← Path aliases (@data, @hooks, etc.)
├── postcss.config.js
└── package.json
```

---

## 🚀 Setup

```bash
# 1. Install
npm install

# 2. Dev server → http://localhost:5173
npm run dev

# 3. Production build
npm run build
```

---

## ✏️ Customization

### Content (just edit `src/data/`)

| File | What's inside |
|------|--------------|
| `projects.js`     | 5 project cards — name, description, stack, links |
| `skills.js`       | 4 tabs × skill names + percentages |
| `achievements.js` | 6 achievement/cert cards |
| `navigation.js`   | Nav links + social links (GitHub, LinkedIn…) |

### Contact details
Edit the `contactLinks` array at the top of `src/components/sections/Contact.jsx`.

### Resume PDF
Put your PDF at `public/resume-anjali-chauhan.pdf` — the download button already points there.

### Colors
All tokens in `tailwind.config.js` → `theme.extend.colors`:

```js
pink:   '#ff9ffc',   // Primary accent & cursor
cyan:   '#00e5ff',   // Secondary accent
green:  '#39ff8f',   // Nav dot, feature bullets
amber:  '#ffb547',   // Achievement dates
bg:     '#050709',   // Main background
```

### Particle effect
Tweak 4 constants at the top of `src/hooks/useAntigravity.js`:

```js
const COUNT    = 280   // Number of particles
const MAGNET_R = 140   // Cursor attraction radius
const RING_R   = 115   // Orbit ring size
const LERP     = 0.08  // Particle speed (0.01 slow → 0.2 fast)
```

---

## 📡 Wiring the Contact Form

The form simulates a submit by default. To use real email sending:

### Option A — Node.js + Nodemailer
```js
// In Contact.jsx, replace the fake delay with:
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

Create a separate Express backend:
```
backend/
├── server.js
├── routes/contact.js   ← POST /api/contact → nodemailer
└── .env                ← EMAIL_USER, EMAIL_PASS
```

### Option B — EmailJS (zero backend)
```bash
npm install @emailjs/browser
```

---

## 🌐 Deploy

```bash
# Vercel
npm i -g vercel && vercel

# Netlify — drag dist/ folder after:
npm run build
```

---

## 🧩 Stack

React 18 · Vite 5 · Tailwind CSS v3 · Canvas2D · CSS animations · IntersectionObserver
