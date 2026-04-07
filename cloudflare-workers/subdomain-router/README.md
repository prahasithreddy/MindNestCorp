# MindNestCorp Subdomain Router

Cloudflare Worker that routes product subdomains to their respective GCP Cloud Run backends.

## Architecture

```
billmind.mindnestcorp.com  ──┐
product2.mindnestcorp.com  ──┼──▶  Subdomain Router  ──▶  GCP Cloud Run Backends
product3.mindnestcorp.com  ──┘         Worker
```

Each product gets its own subdomain, and the worker routes requests to the correct backend.

## Adding a New Product

1. Deploy your product to GCP Cloud Run
2. Add the product to `worker.js`:

```javascript
const PRODUCTS = {
  billmind: 'https://billmind-app-17325932137.us-central1.run.app',
  newproduct: 'https://newproduct-app-xxx.us-central1.run.app',  // Add this
};
```

3. Redeploy the worker: `npm run deploy`
4. Add DNS record in Cloudflare (see below)

## Setup

### 1. Install Dependencies

```bash
cd cloudflare-workers/subdomain-router
npm install
```

### 2. Login to Cloudflare

```bash
npx wrangler login
```

### 3. Deploy the Worker

```bash
npm run deploy
```

### 4. Configure DNS Records in Cloudflare

For each product, add a CNAME record pointing to the worker:

1. Go to **Cloudflare Dashboard** → **Websites** → **mindnestcorp.com**
2. Click **DNS** in the sidebar
3. Click **Add record**
4. Configure:
   - **Type**: `CNAME`
   - **Name**: `billmind` (or your product name)
   - **Target**: `mindnestcorp.com` (or your Pages domain)
   - **Proxy status**: Proxied (orange cloud ON)
5. Click **Save**

### 5. Configure Worker Routes

1. Go to **Cloudflare Dashboard** → **Websites** → **mindnestcorp.com**
2. Click **Workers Routes** in the sidebar
3. Click **Add route**
4. Configure:
   - **Route**: `billmind.mindnestcorp.com/*`
   - **Worker**: Select `mindnestcorp-subdomain-router`
5. Click **Save**

Repeat for each product subdomain.

## Local Development

```bash
npm run dev
```

Test locally at `http://localhost:8787`

Note: For local testing, you'll need to modify the request URL or use curl with a Host header:

```bash
curl -H "Host: billmind.mindnestcorp.com" http://localhost:8787/
```

## View Logs

```bash
npm run tail
```

## Product Registry

| Product | Subdomain | Backend URL |
|---------|-----------|-------------|
| BillMind | `billmind.mindnestcorp.com` | `billmind-app-17325932137.us-central1.run.app` |
| (Add more as you launch) | | |

## Benefits of Subdomain Architecture

1. **No CSS/Asset Path Issues** - Each app runs at root (`/`)
2. **Complete Isolation** - Products can't interfere with each other
3. **Easy Scaling** - Just add entries to the PRODUCTS map
4. **Simple Configuration** - No app-level basePath changes needed
5. **Independent Deployments** - Update one product without affecting others
