# Alliance Sourcing BD

A modern and responsive website for **Alliance Sourcing BD**, a Bangladesh-based garment sourcing and buying house. The website is being developed with Next.js and Tailwind CSS to present the company's sourcing services, factory capabilities, products, and contact information in a professional way.

> **Project Status:** 🚧 Frontend development in progress

---

## About the Project

Alliance Sourcing BD is a professional garment sourcing website focused on connecting international buyers with reliable garment manufacturers in Bangladesh.

The current phase focuses on building the **frontend UI, responsive layouts, reusable components, navigation, and company presentation pages**.

Backend functionality and dynamic data integration will be added in future development phases.

---

## Current Features

- Responsive navigation bar
- Responsive footer
- Professional homepage
- Hero section with call-to-action buttons
- "What sets us apart" section
- Buying house services section
- Factory & machinery section
- Products and services section
- "How we work" process section
- Call-to-action section
- About Us page
- Buying House page
- Factory & Machinery page
- Contact page
- Responsive design for mobile, tablet, and desktop
- Reusable React components
- Local image and SVG asset integration
- Website favicon
- Basic SEO structure
- Sitemap
- Robots.txt

---

## Pages

### Home

**Route:** `/`

The homepage currently includes:

- Hero banner
- Company introduction
- Key features
- Buying house services
- Factory and machinery capabilities
- Product and service overview
- Working process
- Call-to-action section

---

### About Us

**Route:** `/about`

The About page is designed to present:

- Company overview
- Company mission
- Company values
- Sourcing approach
- Business information

---

### Buying House

**Route:** `/buying-house`

The Buying House page presents the company's sourcing-related services, including:

- Product development and sampling
- Supplier selection
- Supplier evaluation
- Price negotiation
- Order placement
- Production follow-up
- Quality inspection

---

### Factory & Machinery

**Route:** `/factory-machinery`

This page focuses on:

- Factory capabilities
- Garment production
- Machinery
- Technical support
- Production optimization
- Manufacturing facilities

---

### Contact

**Route:** `/contact`

The Contact page is planned to provide:

- Company contact information
- Phone number
- Email address
- Business address
- Contact interface
- Location/map information

> Backend form submission will be added in a future development phase.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16+** | React framework |
| **React 19** | UI development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive design |
| **Lucide React** | UI icons |
| **Next/Image** | Image optimization |
| **Next/Link** | Client-side navigation |
| **Vercel** | Planned deployment platform |

---

## Project Structure

```text
Alliance-Sourcing-BD/
│
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── sitemap.ts
│   │
│   └── (pages)/
│       ├── about/
│       │   └── page.tsx
│       │
│       ├── buying-house/
│       │   └── page.tsx
│       │
│       ├── factory-machinery/
│       │   └── page.tsx
│       │
│       └── contact/
│           └── page.tsx
│
├── components/
│   │
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── breadcrumb.tsx
│   │   └── page-header.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── features-grid.tsx
│   │   ├── services.tsx
│   │   ├── buying-house-services.tsx
│   │   ├── factory-machinery.tsx
│   │   ├── catalog.tsx
│   │   ├── process-flow.tsx
│   │   └── cta-section.tsx
│   │
│   ├── cards/
│   │   ├── service-card.tsx
│   │   ├── feature-card.tsx
│   │   ├── product-card.tsx
│   │   └── machinery-card.tsx
│   │
│   └── common/
│       ├── logo.tsx
│       ├── section-wrapper.tsx
│       └── ui/
│
├── lib/
│   ├── constants.ts
│   ├── types.ts
│   └── utils.ts
│
├── public/
│   ├── icon.svg
│   ├── icon/
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── x.svg
│   │   ├── linkedin.svg
│   │   └── youtube.svg
│   ├── garment-rack.jpg
│   ├── factory-interior.jpg
│   └── robots.txt
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md