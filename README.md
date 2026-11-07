# anujsinghwp

Personal portfolio and blog for Anuj Singh — WordPress developer.

- Live site: [anujsinghwp.netlify.app](https://anujsinghwp.netlify.app)
- GitHub: [@anujdataworld](https://github.com/anujdataworld)
- LinkedIn: [linkedin.com/in/anujdataworld](https://www.linkedin.com/in/anujdataworld)

## Overview

A modern, fast, and responsive portfolio showcasing client websites, WordPress projects, technical articles, and direct contact channels.

### Key pages

- **Home (`/`)**: Profile overview, bio, social links, tech stack, work experience timeline, and GitHub contributions.
- **Work Experience (`/#experience`)**: Detailed professional history with role descriptions, timeline, and tech stack tags.
- **Blog (`/blog`)**: Articles and technical notes powered by MDX.
- **Contact (`/contact`)**: Direct communication channels including phone, email, and LinkedIn with one-click copy and quick links.

## Tech stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Library**: React 19 and TypeScript
- **Styling**: Tailwind CSS v4 and shadcn/ui
- **Content**: MDX with syntax highlighting
- **Quality**: Vitest, ESLint, Prettier, and TypeScript strict mode
- **Deployment**: Netlify

## Features

- Responsive design with dark and light theme switching
- Work experience data managed in `src/features/portfolio/data/experiences.tsx`
- Direct contact cards (phone, email, LinkedIn) with one-click clipboard copying and toast notifications
- Interactive command menu (`Cmd+K` / `Ctrl+K`) and keyboard shortcuts (`G+H`, `G+W`, `G+L`, `G+C`)
- SEO optimized with metadata, Open Graph cards, sitemap, and JSON-LD schema
- AI-readable endpoints (`llms.txt`) and markdown responses
- Fast static prerendering with Netlify deployment

## Local development

### Prerequisites

- Node.js >= 22
- pnpm >= 11

### Setup

```bash
# Clone the repository
git clone https://github.com/anujdataworld/anujsinghwp.git
cd anujsinghwp

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application runs locally at `https://anujsinghwp.localhost` (or `http://localhost:3000`).

## Scripts

```bash
pnpm dev            # Start the Next.js dev server
pnpm build          # Build for production
pnpm start          # Start production server
pnpm test           # Run Vitest in watch mode
pnpm test:run       # Run Vitest test suite once
pnpm lint           # Check code with ESLint
pnpm format:write   # Format code with Prettier
pnpm check-types    # Run TypeScript type check (tsc --noEmit)
```

## License

Released under the [MIT license](./LICENSE).
