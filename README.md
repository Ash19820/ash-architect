# ARUN ARCHITECTS — Portfolio & Spatial Atelier

A high-fidelity editorial architecture and spatial design portfolio built with Next.js 16 (App Router), Three.js procedural metallic 3D sculpture, Tailwind CSS v4, TypeScript, and Framer Motion.

Recreated with architectural discipline inspired by minimalist spatial practices (e.g. Altun Architects) — featuring interactive 3D sculptures, live timezone clocks, expandable project dossiers, services matrix, and philosophy manifestos.

![Top Langs](https://vercel.app)


---

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
