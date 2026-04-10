# MindNestCorp — Corporate Website

Official website for MindNestCorp at [mindnestcorp.com](https://mindnestcorp.com).  
Building innovative micro SaaS products for modern businesses.

## Repository Overview

MindNestCorp uses a **multi-repo architecture** — each product lives in its own repository and is deployed independently.

| Repo | Domain | Description |
|------|--------|-------------|
| [`MindNestCorp`](https://github.com/prakrees/MindNestCorp) *(this repo)* | [mindnestcorp.com](https://mindnestcorp.com) | Corporate website |
| [`BillMind`](https://github.com/prakrees/BillMind) | [billmind.mindnestcorp.com](https://billmind.mindnestcorp.com) | Smart payment reminders app |

### Subdomain Routing

Product subdomains are routed via a **Cloudflare Worker** (`cloudflare-workers/subdomain-router/`).  
The worker intercepts requests to `*.mindnestcorp.com` and proxies them to the respective backend deployment (GCP Cloud Run / Vercel).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Subdomain Routing**: Cloudflare Workers

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
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with header/footer
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── about/page.tsx    # About page
│   │   ├── products/page.tsx # Products page (lists all MindNest products)
│   │   └── contact/page.tsx  # Contact page
│   └── components/
│       ├── header.tsx        # Navigation header
│       └── footer.tsx        # Site footer
└── cloudflare-workers/
    └── subdomain-router/     # Routes *.mindnestcorp.com subdomains
        ├── worker.js
        └── wrangler.toml
```

## Adding a New Product Subdomain

1. Deploy the new product to GCP Cloud Run or Vercel and get its URL.
2. Add a new entry to `cloudflare-workers/subdomain-router/worker.js`:
   ```js
   const PRODUCTS = {
     billmind: 'https://your-backend-url.run.app',
     newproduct: 'https://newproduct-url.run.app', // add here
   };
   ```
3. Deploy the worker: `cd cloudflare-workers/subdomain-router && npm run deploy`
4. Add the subdomain route in the Cloudflare Dashboard under `mindnestcorp.com`.
5. Add the new product to `src/app/products/page.tsx`.

## License

All rights reserved © MindNestCorp
