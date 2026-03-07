# MindNestCorp

Official website for MindNestCorp - Building innovative micro SaaS products.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── products/
│   │   └── page.tsx    # Products page
│   └── contact/
│       └── page.tsx    # Contact page
└── components/
    ├── header.tsx      # Navigation header
    └── footer.tsx      # Site footer
```

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Deploy!

## License

All rights reserved © MindNestCorp
