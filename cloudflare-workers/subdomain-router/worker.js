// Subdomain router — proxies product subdomains to their GCP Cloud Run backends.
//
// Product backends are configured as Wrangler vars (see wrangler.toml):
//   PRODUCT_<UPPERCASE_SUBDOMAIN>_URL = "https://..."
//
// To add a new product: add PRODUCT_<NAME>_URL in wrangler.toml and a matching
// route, then redeploy. No code changes required.

const ALLOWED_ORIGINS = [
  'https://mindnestcorp.com',
  'https://www.mindnestcorp.com',
];

function corsHeaders(origin) {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const subdomain = url.hostname.split('.')[0].toUpperCase();
    const backend = env[`PRODUCT_${subdomain}_URL`];

    if (!backend) {
      return new Response('Product not found', { status: 404 });
    }

    const origin = request.headers.get('Origin') ?? '';

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    const targetUrl = `${backend}${url.pathname}${url.search}`;

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set('X-Forwarded-Host', url.hostname);
    modifiedHeaders.set('X-Forwarded-Proto', 'https');
    modifiedHeaders.set('X-Original-URL', request.url);
    modifiedHeaders.delete('host');

    const response = await fetch(
      new Request(targetUrl, {
        method: request.method,
        headers: modifiedHeaders,
        body: request.body,
        redirect: 'manual',
      })
    );

    const responseHeaders = new Headers(response.headers);
    const headers = corsHeaders(origin);
    for (const [key, value] of Object.entries(headers)) {
      responseHeaders.set(key, value);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  },
};
