/**
 * FinishLynx Support Chat — Cloudflare Worker Proxy
 *
 * Deploy steps:
 *   1. Go to dash.cloudflare.com → Workers & Pages → Create Worker
 *   2. Paste this code
 *   3. Go to Settings → Variables → add these environment variables:
 *        ANTHROPIC_API_KEY  = your API key (encrypt it)
 *   4. If using a Claude Project, also add:
 *        ANTHROPIC_PROJECT_ID = your project ID (optional)
 *   5. Deploy
 *   6. Copy the Worker URL (e.g. lynx-chat.your-subdomain.workers.dev)
 *   7. Paste it into the chat page's WORKER_URL constant
 *
 * The Worker:
 *   - Accepts POST requests from the chat UI
 *   - Adds your API key server-side (never exposed to the browser)
 *   - Forwards to Anthropic's messages API
 *   - Streams the response back to the browser
 *   - Adds CORS headers so your GitHub Pages site can call it
 */

export default {
  async fetch(request, env) {
    // CORS — allow your GitHub Pages origin (update if your domain differs)
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();

      // Build headers for Anthropic API
      const anthropicHeaders = {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      };

      // If a project-scoped key is used, no extra header needed —
      // the key itself is scoped to the project.

      // Forward to Anthropic with streaming
      const anthropicBody = {
        model: body.model || 'claude-sonnet-4-6',
        max_tokens: body.max_tokens || 2048,
        stream: true,
        messages: body.messages || [],
        // system prompt comes from your Claude Project automatically
        // if using a project-scoped API key. If not, you can add:
        // system: body.system || '',
      };

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: anthropicHeaders,
        body: JSON.stringify(anthropicBody),
      });

      if (!response.ok) {
        const err = await response.text();
        return new Response(JSON.stringify({ error: err }), {
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Stream the response back to the browser
      return new Response(response.body, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
        },
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
