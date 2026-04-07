const PRODUCTS = {
  billmind: 'https://billmind-app-17325932137.us-central1.run.app',
  // Add more products here as you launch them:
  // productname: 'https://productname-app-xxx.us-central1.run.app',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    const subdomain = hostname.split('.')[0];

    const backend = PRODUCTS[subdomain];
    if (!backend) {
      return new Response('Product not found', { status: 404 });
    }

    const targetUrl = `${backend}${url.pathname}${url.search}`;

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set('X-Forwarded-Host', hostname);
    modifiedHeaders.set('X-Forwarded-Proto', 'https');
    modifiedHeaders.set('X-Original-URL', request.url);
    modifiedHeaders.delete('host');

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: modifiedHeaders,
      body: request.body,
      redirect: 'manual',
    });

    const response = await fetch(modifiedRequest);

    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  },
};
