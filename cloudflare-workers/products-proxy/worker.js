const GCP_BACKEND_URL = 'https://billmind-app-17325932137.us-central1.run.app';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith('/billmind')) {
      return fetch(request);
    }

    const newPath = url.pathname.replace(/^\/billmind/, '') || '/';
    const targetUrl = `${GCP_BACKEND_URL}${newPath}${url.search}`;

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set('X-Forwarded-Host', url.host);
    modifiedHeaders.set('X-Forwarded-Proto', 'https');
    modifiedHeaders.delete('host');

    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: modifiedHeaders,
      body: request.body,
      redirect: 'manual',
    });

    const response = await fetch(modifiedRequest);

    const modifiedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    modifiedResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return modifiedResponse;
  },
};
