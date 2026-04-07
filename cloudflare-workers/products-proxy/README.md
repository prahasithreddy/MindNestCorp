# BillMind Proxy Worker

Cloudflare Worker that proxies requests from `mindnestcorp.com/billmind` to the GCP Cloud Run backend.

## Setup

### 1. Install Dependencies

```bash
cd cloudflare-workers/billmind-proxy
npm install
```

### 2. Login to Cloudflare

```bash
npx wrangler login
```

This will open a browser window to authenticate with your Cloudflare account.

### 3. Deploy the Worker

```bash
npm run deploy
```

### 4. Configure Route in Cloudflare Dashboard

After deploying, you need to add a route to connect the worker to your domain:

1. Go to **Cloudflare Dashboard** → **Websites** → **mindnestcorp.com**
2. Click **Workers Routes** in the sidebar
3. Click **Add route**
4. Configure:
   - **Route**: `mindnestcorp.com/billmind*`
   - **Worker**: Select `billmind-proxy`
5. Click **Save**

Alternatively, uncomment the routes section in `wrangler.toml` and redeploy.

## Local Development

```bash
npm run dev
```

This starts a local development server at `http://localhost:8787`.

Test it by visiting: `http://localhost:8787/billmind`

## View Logs

```bash
npm run tail
```

This streams real-time logs from the deployed worker.

## How It Works

1. Requests to `mindnestcorp.com/billmind/*` are intercepted by this worker
2. The `/billmind` prefix is stripped from the path
3. The request is forwarded to `https://billmind-app-17325932137.us-central1.run.app/`
4. The response is returned to the user with the URL still showing `mindnestcorp.com/billmind`

## Example

| User visits | Proxied to |
|-------------|------------|
| `mindnestcorp.com/billmind` | `billmind-app-17325932137.us-central1.run.app/` |
| `mindnestcorp.com/billmind/api/users` | `billmind-app-17325932137.us-central1.run.app/api/users` |
| `mindnestcorp.com/billmind/dashboard?id=123` | `billmind-app-17325932137.us-central1.run.app/dashboard?id=123` |
