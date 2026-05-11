# Rise at Seven - Homepage

A content marketing agency homepage built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 22+
- npm

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Current Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout and metadata
│   ├── page.tsx          # Home page rendering all sections
│   └── globals.css       # Global styles
├── components/
│   └── layout/
│       ├── Header.tsx    # Header with mobile toggle
│       └── MobileMenu.tsx # Mobile menu overlay
├── data/
│   ├── agency.data.ts
│   ├── awards.data.ts
│   ├── featuredWork.data.ts
│   ├── footer.data.ts
│   ├── legacy.data.ts
│   ├── menu.data.ts
│   ├── services.data.ts
│   └── whatsNew.data.ts
├── sections/
│   ├── AgencyBehindSection.tsx
│   ├── AwardsSection.tsx
│   ├── DrivingSection.tsx
│   ├── FeaturedWorkSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LegacySection.tsx
│   ├── ServicesSection.tsx
│   └── WhatsNewSection.tsx
├── ui/                   # Reusable UI primitives (empty/placeholder)
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Current Page Sections

- `HeroSection` - main hero banner with background image and category highlight
- `AwardsSection` - marquee of brand logos
- `DrivingSection` - demand and discovery copy block with calls to action
- `FeaturedWorkSection` - featured work cards with image overlays
- `ServicesSection` - service list with image thumbnails
- `AgencyBehindSection` - animated category growth marquee
- `LegacySection` - horizontal scroll legacy cards with progress indicator
- `WhatsNewSection` - latest posts slider with progress bar
- `Footer` - footer links, newsletter, social icons, and company info

## 📦 Data Folder

All section content is stored in `src/data/`. Current data files:

- `menu.data.ts` — mobile menu items and submenu links
- `services.data.ts` — services displayed in ServicesSection
- `awards.data.ts` — brand logos for AwardsSection
- `featuredWork.data.ts` — featured project cards for FeaturedWorkSection
- `agency.data.ts` — marquee items for AgencyBehindSection
- `legacy.data.ts` — legacy carousel cards for LegacySection
- `whatsNew.data.ts` — blog cards for WhatsNewSection
- `footer.data.ts` — footer link lists and social items

### How data is used
1. Define static arrays in `src/data/*.ts`
2. Import the shared data into a section component
3. Render the items in the section UI

Example:

```ts
import { services } from "@/data/services.data";
```

## 🛠️ How the current sections are wired

- `src/app/page.tsx` imports all section components and renders them in page order
- Each section component imports its own data from `src/data`
- The header menu uses `src/data/menu.data.ts` for mobile navigation
- `HeroSection` uses `next/image` for the hero background and local public assets

## ✨ How to add a new section

1. Add a new file in `src/sections/`, for example `NewSection.tsx`
2. Add shared content in `src/data/newSection.data.ts` if needed
3. Import and render the section in `src/app/page.tsx`

Example:

```tsx
import NewSection from "@/sections/NewSection";
```

4. Add `NewSection` inside the `<main>` block in `src/app/page.tsx`

## 💡 Notes

- `src/data/` is the source of truth for static content
- `src/sections/` contains page layout and rendering logic
- `src/components/layout/` contains header and mobile menu logic
- Keep styles in Tailwind classes inside each component
- Use `public/` for static image assets referenced by `next/image`

## 🔧 Configuration

- `next.config.ts` — Next.js configuration including image hosts
- `postcss.config.mjs` — PostCSS plugins for Tailwind
- `tailwind.config.ts` — Tailwind config
- `tsconfig.json` — TypeScript paths and compiler settings

## 📌 Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server
- `npm run build` — build production output
- `npm start` — run production server

## 📄 License

All rights reserved © 2025 Rise at Seven Ltd.
