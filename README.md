# ARUN ARCHITECTS — Portfolio & Spatial Atelier

A high-fidelity editorial architecture and spatial design portfolio built with Next.js 16 (App Router), Three.js procedural metallic 3D sculpture, Tailwind CSS v4, TypeScript, and Framer Motion.

Recreated with architectural discipline inspired by minimalist spatial practices (e.g. Altun Architects) — featuring interactive 3D sculptures, live timezone clocks, expandable project dossiers, services matrix, and philosophy manifestos.

### Built With

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Lucide-F56565?style=flat-square&logo=lucide&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
</p>
---
### Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white&labelColor=000000" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white&labelColor=000000" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white&labelColor=06B6D4" />
  <img src="https://img.shields.io/badge/Lucide-F56565?style=flat&logo=lucide&logoColor=white&labelColor=F56565" />
  <img src="https://img.shields.io/badge/Motion-0055FF?style=flat&logo=framer&logoColor=white&labelColor=0055FF" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=3178C6" />
</p>
### Tech Stack

<p align="left">
  <img src="https://cdn.simpleicons.org/nextdotjs/000000" width="20" /> Next.js&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/threedotjs/000000" width="20" /> Three.js&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="20" /> Tailwind&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/lucide/F56565" width="20" /> Lucide&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/framer/0055FF" width="20" /> Motion&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/typescript/3178C6" width="20" /> TypeScript
</p>
## Website : 
http://architectash.vercel.app

## ✨ Features

- **Procedural 3D Hero Sculpture**: Real-time Three.js metallic torus knot with ACES Filmic tone mapping, custom directional & ambient lighting, continuous kinetic rotation, and interactive mouse parallax.
- **Editorial Headline & Animated Word Cycle**: Synchronized wordmark cycling through spatial design concepts (`[ FUTURE ]`, `[ EXPERIENCE ]`, `[ ART ]`, `[ LIFESTYLE ]`, `[ LIVING ]`).
- **Interactive Project Portfolio**: Filterable project gallery with image modals, architectural specs (typology, area, year, location), and high-resolution visuals.
- **Interactive Services Matrix**: 2-column expandable architectural service accordion with scopes of work and delivery metrics.
- **Studio Leadership & Manifesto**: Dedicated leadership section featuring Principal Architect Arun, architectural philosophy statement, and international design awards timeline.
- **Live Utility Widgets & Navigation**: Real-time IST (UTC+05:30) studio clock, full-screen minimalist menu overlay, interactive contact modal with spatial project inquiry form, and custom spring cursor.
- **Zero-Dependency Static Export**: Configured for static HTML export (`out/`) with Netlify headers & redirects for high-speed global CDN delivery.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **3D Graphics**: [Three.js](https://threejs.org/) (`@types/three`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repo url>
cd arch

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Export

```bash
npm run build
```

The static output is generated in the `out/` directory, ready to drag-and-drop or deploy to Netlify, Vercel, GitHub Pages, or any static hosting service.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css         # Custom editorial font classes, animations, & scrollbars
│   ├── layout.tsx          # Root layout with editorial font preconnects & SEO metadata
│   └── page.tsx            # Main page combining all architectural sections
├── components/
│   ├── ClockWidget.tsx     # Live IST studio clock
│   ├── ContactModal.tsx    # Modal dialog for project commission inquiries
│   ├── CtaSection.tsx      # Editorial call-to-action banner
│   ├── CustomCursor.tsx    # Interactive dot & trailing ring cursor
│   ├── Footer.tsx          # Architectural credits, sitemap & leadership info
│   ├── FoundersSection.tsx # Founder & Principal Architect Arun profile & photo
│   ├── Header.tsx          # Persistent navigation with logo and quick actions
│   ├── HeroScene.tsx       # Three.js 3D kinetic metallic sculpture
│   ├── HeroStatement.tsx   # Dynamic cycling headline
│   ├── MenuOverlay.tsx     # Full-screen architectural navigation overlay
│   ├── NewsMarquee.tsx     # Infinite ticker of studio milestones & features
│   ├── PhilosophySection.tsx # Spatial design manifesto quote
│   ├── ProjectsSection.tsx # Filterable portfolio grid with lightbox preview
│   ├── ServicesSection.tsx # Two-column expandable scope & methodology
│   ├── SideTab.tsx         # Fixed viewport accent tab
│   └── StudioSection.tsx   # Atelier overview & Indian practice manifesto
├── data/
│   ├── news.ts             # Studio news items
│   ├── projects.ts         # Portfolio projects with specs & imagery
│   ├── services.ts         # Architectural service disciplines
│   └── studio.ts           # Studio metadata, founder info, awards list
├── public/
│   └── images/
│       ├── arun.png        # Portrait of Arun (Principal Architect)
│       └── ...             # Architectural project visuals
├── netlify.toml            # Netlify deployment configuration (publish = "out")
└── next.config.ts          # Static export configuration (output: 'export')
```

---

## 📄 License

MIT © 
