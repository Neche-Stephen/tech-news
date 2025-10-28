# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript healthcare web development website built with Vite. This is the healthcare division of PROFECH (deployed at health.profech.com) specializing in web development services for medical practices, clinics, and healthcare organizations. The codebase follows a component-based architecture with multiple page layouts and reusable UI components.

## Development Commands

- `npm run dev` - Start development server with Vite (opens browser automatically)
- `npm run build` - Build for production (runs TypeScript check first, then Vite build)
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture Overview

### Routing & Pages
- Uses React Router v6 with `createBrowserRouter`
- Main route is HomeTwo component (`/`)
- Active routes: `/`, `/about-us`, `/service`, `/contact`
- Many routes are commented out but components exist (portfolio, blog, team, etc.)
- 404 error handling with ErrorArea component

### Component Structure
```
src/components/
├── homes/
│   ├── home/         # HomeOne layout (not currently used)
│   └── home-2/       # HomeTwo layout (main homepage)
├── about-us/         # About page
├── service/          # Services page  
├── contact/          # Contact page
└── [other pages]     # Commented out in routing
```

### Layout System
- `Wrapper.tsx` - Minimal wrapper with ScrollToTop functionality
- `HeaderOne.tsx` - Main navigation header
- `FooterOne.tsx` - Site footer
- Components are self-contained with their own styling

### Styling
- Uses SCSS/Sass for styling
- Bootstrap 5.3.3 for UI framework
- Animate.css for animations
- CSS Modules used in some components (`.module.css` files)

### Key Dependencies
- **UI**: Bootstrap, React Icons, Lucide React
- **Animations**: Animate.css, WOW.js, Jarallax (parallax)
- **Functionality**: React Slick (carousels), React Modal Video, CountUp, Intersection Observer
- **Forms**: EmailJS for contact forms
- **Deployment**: GitHub Pages (gh-pages)

## Development Notes

### Current State
- Homepage uses HomeTwo layout with several sections commented out
- Menu navigation is simplified (many items commented out in menu-data.ts)
- Project appears to be in active development with todo.txt containing tasks

### Component Patterns
- Each page component imports and combines multiple area components
- Area components (HeroArea, ServiceArea, etc.) are self-contained sections
- Consistent use of TypeScript with `.tsx` extensions
- Components follow functional component pattern with hooks

### Configuration
- Vite config includes auto-open in development
- ESLint configured with React hooks and TypeScript rules
- TypeScript with strict configuration
- Vercel.json configured for SPA routing

### Deployment
- Configured for GitHub Pages deployment
- Custom domain: health.profech.com (healthcare division subdomain)
- Uses `dist/` as build output directory

## Business Focus

### Services Offered
- **Basic Package (₦200k)**: Simple healthcare practice websites with contact forms, hosting, and basic SEO
- **Standard Package (₦300k)**: Full informative websites with multiple pages, team profiles, and blog features
- **Premium Package (₦500k)**: Complete solution including appointment booking systems for patient scheduling
- Custom services available for unique requirements

### Target Market
- Medical practices and clinics
- Healthcare organizations
- Hospitals and health systems
- Wellness centers
- Healthcare startups

### Portfolio Projects
- Instant Eye Care Clinic - Healthcare platform for eye care services
- EatWise - Healthy eating app for nutrition and lifestyle management