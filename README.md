# Rise at Seven - Homepage

Award-winning search-first content marketing agency website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── Header/                  # Header section components
│   │   ├── Header.tsx          # Main header component
│   │   ├── Navigation.tsx       # Navigation menu
│   │   ├── MobileMenu.tsx       # Mobile menu component
│   │   └── NotificationBanner.tsx # Top banner
│   │
│   ├── Hero/                    # Hero section
│   │   └── Hero.tsx            # Main hero component
│   │
│   ├── Sections/                # Page sections
│   │   ├── CaseStudiesSection.tsx  # Case studies/work section
│   │   ├── ServicesSection.tsx     # Services section
│   │   ├── BlogSection.tsx         # Blog/news section
│   │   └── CTASection.tsx          # Call-to-action section
│   │
│   ├── Footer/                  # Footer components
│   │   ├── Footer.tsx          # Main footer
│   │   └── FooterLinks.tsx      # Footer links
│   │
│   ├── ui/                      # Reusable UI components
│   │   └── (future UI components)
│   │
│   └── index.ts                # Component exports
│
├── constants/                   # Constants and data
│   └── index.ts                # Navigation, case studies, services, blog data
│
├── types/                       # TypeScript type definitions
│   └── index.ts                # All type interfaces
│
└── utils/                       # Utility functions
    └── index.ts                # Helper functions (cn, scroll, format)
```

## 🎨 Components Overview

### Header Components
- **Header**: Main navigation header with logo and menu
- **Navigation**: Desktop navigation menu
- **MobileMenu**: Mobile hamburger menu
- **NotificationBanner**: Top notification banner

### Page Sections
- **Hero**: Large hero section with headline and CTA
- **CaseStudiesSection**: Grid of case study cards
- **ServicesSection**: Grid of service cards
- **BlogSection**: Grid of blog post cards
- **CTASection**: Call-to-action section

### Footer
- **Footer**: Main footer with company info and links
- **FooterLinks**: Footer column links

## 📊 Data Structure

### Data Files
All static data is stored in `src/constants/index.ts`:
- Navigation items
- Case studies
- Services
- Blog posts
- Awards
- Footer information
- Company info

### Type Definitions
All TypeScript interfaces in `src/types/index.ts`:
- `NavItem`
- `CaseStudy`
- `Service`
- `BlogPost`
- `FooterLink`
- `FooterColumn`

## 🛠️ Utilities

### Available Utilities (`src/utils/index.ts`)
- `cn()` - Tailwind CSS class name combiner
- `scrollToElement()` - Smooth scroll to element
- `formatDate()` - Format date strings

## 🎯 Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Mobile hamburger menu
✅ Component-based architecture
✅ TypeScript support
✅ Tailwind CSS styling
✅ Professional folder structure
✅ Reusable components
✅ Constants management
✅ Type safety
✅ SEO optimized metadata

## 📝 Customization

### Adding New Sections
1. Create a new component in `src/components/Sections/`
2. Import and use in `src/app/page.tsx`

### Updating Content
1. Edit data in `src/constants/index.ts`
2. Components will automatically reflect changes

### Styling
- All styling uses Tailwind CSS classes
- Global styles in `src/app/globals.css`
- Component-scoped styles using Tailwind classes

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript configuration with path aliases
- **tailwind.config.ts** - Tailwind CSS configuration
- **next.config.ts** - Next.js configuration
- **postcss.config.mjs** - PostCSS configuration
- **package.json** - Project dependencies and scripts

## 📦 Dependencies

- **next** - React framework
- **react** - UI library
- **react-dom** - React DOM utilities
- **typescript** - Type safety
- **tailwindcss** - Utility-first CSS
- **eslint** - Code linting

## 🚀 Best Practices

- ✅ Components are small and reusable
- ✅ Data is separated from components
- ✅ Types are defined for all data structures
- ✅ Utility functions for common tasks
- ✅ Proper folder organization
- ✅ Clear component naming conventions
- ✅ TypeScript for type safety

## 📄 License

All rights reserved © 2025 Rise at Seven Ltd.

## 👨‍💻 Development Notes

- Use `npm run dev` during development
- Use `npm run build` to create production build
- Use `npm run lint` to check code quality
- All components should be exported from `src/components/index.ts`
- All data should be in `src/constants/index.ts`
- All types should be in `src/types/index.ts`
