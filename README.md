# F16 Media — Cinematic Website

> World-class digital agency experience. Apple + Tesla + Stripe design quality.

## Stack
- **React + Vite** — lightning fast dev experience
- **Tailwind CSS** — utility-first design system
- **Framer Motion** — primary animation engine
- **GSAP** — advanced scroll triggers (ready to extend)
- **Lenis** — ultra-smooth scroll
- **Clsx** — conditional class utility

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx        ← Cinematic full-screen hero
│   │   ├── Authority.jsx   ← Aggressive positioning
│   │   ├── Services.jsx    ← 9 service cards with 3D hover
│   │   ├── Stats.jsx       ← Animated counters + testimonials
│   │   ├── Story.jsx       ← F16 brand narrative + marquee
│   │   └── FinalCTA.jsx    ← Max conversion pressure section
│   ├── ui/
│   │   ├── MagneticButton.jsx  ← Magnetic hover button
│   │   ├── AnimatedText.jsx    ← Staggered word reveals
│   │   └── GlowCard.jsx        ← 3D tilt + glow follow card
│   ├── CustomCursor.jsx    ← Cinematic custom cursor
│   ├── Navbar.jsx          ← Scroll-aware transparent nav
│   └── Footer.jsx
├── hooks/
│   └── useLenis.js         ← Ultra-smooth scroll setup
├── index.css               ← Global styles, noise, utilities
└── App.jsx                 ← Root with Lenis + all sections
```

---

## Features

### 🎬 Cinematic Motion System
- **Lenis** smooth scrolling (duration: 1.4s, custom easing)
- **Framer Motion** scroll-triggered reveals on every section
- Staggered word-by-word text animations
- Parallax hero with scroll-based depth layers

### 🖱️ Custom Cursor
- Glowing dot cursor with spring physics
- Ring trail following with lag
- Scale expansion on interactive elements

### 🃏 3D Glow Cards
- Mouse-follow tilt effect (rotateX/rotateY)
- Dynamic radial glow following cursor position
- Smooth spring physics on hover

### ⚡ Magnetic Buttons
- Cursor attraction physics on hover
- Shine sweep animation on hover
- Variant system (primary / ghost)

### 📊 Animated Stats
- Count-up animation triggered by scroll viewport entry
- Custom easing curve (cubic ease-out)

---

## Customization

### Colors (tailwind.config.js)
```js
cyan:   '#00f0ff'  // Primary accent
purple: '#8b5cf6'  // Secondary accent
orange: '#ff5a00'  // CTA / brand color
amber:  '#f97316'  // Warm accent
```

### Content
Update copy directly in each section file under `src/components/sections/`.

### Adding Sections
1. Create `src/components/sections/YourSection.jsx`
2. Import and add to `src/App.jsx`

---

## Deployment

Works out of the box with:
- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop `dist/` folder after `npm run build`
- **Any static host** — upload `dist/` folder

---

Built with 🔥 by F16 Media
