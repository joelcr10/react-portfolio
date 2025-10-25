# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from developer-focused platforms: Linear (clean typography, modern aesthetics), Vercel (developer portfolios, minimal sophistication), and Notion (content hierarchy, organized sections). This creates a professional yet distinctive portfolio that balances technical credibility with visual appeal.

## Core Design Principles
1. **Typography-First Hierarchy**: Let text breathe and command attention
2. **Project-Centric Showcase**: Visually rich project presentations drive engagement
3. **Professional Polish**: Clean, mature design befitting AWS certifications and research
4. **Dark/Light Duality**: Both modes equally refined, not afterthoughts

---

## Typography System

**Primary Font**: Inter or SF Pro Display (via Google Fonts CDN)
**Accent Font**: JetBrains Mono for code/tech elements

**Hierarchy**:
- Hero/Name: text-6xl to text-7xl, font-bold, tracking-tight
- Section Headings: text-4xl to text-5xl, font-semibold
- Subsection Titles: text-2xl to text-3xl, font-medium
- Project/Experience Titles: text-xl font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Captions/Meta: text-sm font-medium, uppercase tracking-wide for labels
- Tech Stack Tags: text-xs to text-sm, monospace font

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Container Strategy**:
- Max-width: max-w-6xl for content sections
- Full-width for hero and section backgrounds
- Responsive padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)

**Grid Patterns**:
- Projects: 2-column grid on desktop (grid-cols-1 md:grid-cols-2), single column mobile
- Skills/Tech Stack: 3-4 column grid for tags/badges
- Experience Timeline: Single column with left-aligned content, timeline indicator on left

---

## Component Library

### Navigation
Fixed header with smooth scroll navigation, logo/name left, section links center, theme toggle right. Height: h-16 to h-20. Backdrop blur on scroll with subtle border-bottom.

### Hero Section
Full-viewport introduction (min-h-screen) with name, tagline, and role. Large typography dominance, subtle animated gradient background (abstract, not distracting). CTA buttons: "View Projects" and "Download Resume". Include small professional headshot (rounded, 120-160px).

### About Me Section
Two-column layout (desktop): Left = larger professional photo (aspect-ratio-square or portrait), Right = bio text with skills grid below. Single column on mobile. Skills displayed as pill-shaped badges in rows.

### Projects Showcase
Card-based grid layout with generous spacing. Each project card contains:
- Featured image (16:9 aspect ratio, full-width within card, rounded corners)
- Project title (text-xl font-semibold)
- Brief description (2-3 lines, text-base)
- Tech stack as small badges/pills (flex-wrap)
- "View Details" or external link button
- Hover state: subtle lift effect (translate-y-1), no color changes

Project cards use consistent padding (p-6), subtle border or shadow for depth.

### Certifications & Research Papers
Mixed layout: AWS certifications displayed as credential cards with official badge icons (if available) and issue dates. Research papers listed with paper title, publication/conference, year, and link/PDF download. Two-column grid on desktop.

### Work Experience
Timeline-based vertical layout with:
- Visual timeline line connecting experiences (left side)
- Each entry: Company logo/icon, Job title (text-xl font-semibold), Company name (text-lg), Date range (text-sm uppercase), Bullet points of responsibilities
- Chronological order (most recent first)
- Spacing: mb-12 between entries

### Footer
Multi-column layout: Left = brief tagline/copyright, Center = social links (GitHub, LinkedIn, Email icons), Right = "Back to Top" link. Generous padding (py-12).

---

## Dark/Light Mode Strategy

**Implementation**: CSS variables or Tailwind dark: variant
- Both modes fully designed, equal quality
- Smooth transitions on mode switch (transition-colors duration-200)
- Theme toggle: Sun/Moon icon toggle button in header, persistent via localStorage
- No jarring contrast flips—use refined neutrals in both modes

**Suggested Neutral Palette Structure** (designer will choose specific colors):
- Light: Off-white backgrounds, dark gray text, medium gray accents
- Dark: Deep charcoal/navy backgrounds, off-white text, lighter gray accents
- Borders subtle in both modes (opacity-based)

---

## Animations & Interactions

**Minimal Motion Philosophy**: Animations enhance, not distract.

**Allowed Animations**:
- Scroll-triggered fade-in for section entries (opacity + slight translate-y)
- Theme toggle smooth transition
- Button hover states (subtle scale or opacity shift)
- Project card hover lift (transform translate-y-1)
- Navigation smooth scroll behavior

**Forbidden**: Auto-playing carousels, parallax effects, excessive particle animations, rotating text

---

## Images

**Hero Section**: NO large hero background image. Typography-first with subtle abstract gradient or geometric pattern background.

**Profile Photos**:
- Hero: Small professional headshot (120-160px, circular or rounded-square)
- About Me: Larger professional photo (400-600px, aspect-ratio-square or 3:4 portrait)

**Project Images**: 
Each project requires a featured screenshot/mockup. Dimensions: 16:9 aspect ratio, minimum 800x450px. Images should show the project interface or key visual. Placeholder: Gradient rectangles with project name overlay during development.

**Company Logos** (Work Experience): Small monochrome logos (40-60px height) if available, otherwise text initials in circles.

---

## Accessibility

- ARIA labels on navigation links and theme toggle
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast ratios in both dark and light modes (WCAG AA minimum)
- Alt text for all images
- Keyboard navigation support for all sections
- Semantic HTML: header, nav, main, section, footer elements

---

## Icon Library

**Heroicons** (via CDN) for UI elements: navigation icons, social media icons, external link icons, arrow indicators, sun/moon for theme toggle. Use outline style for consistency.